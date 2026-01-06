import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "../ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 150);
      const sections = navLinks.map((link) => link.href.substring(1));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            return;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    setTimeout(() => {
      const id = href.substring(1);
      const element = document.getElementById(id);
      if (element) {
        const offset = 60;
        const top =
          element.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: "smooth" });
      }
    }, 150);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "glass py-3" : "py-5 bg-transparent"
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollToSection("#home")}
          className="relative group"
        >
          <motion.span
            className="font-display text-2xl font-bold gradient-text"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            SK
          </motion.span>
          <span className="absolute -inset-2 bg-primary/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </button>

        {/* DeskTop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollToSection(link.href)}
              className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                activeSection === link.href.substring(1)
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.name}
              {activeSection === link.href.substring(1) && (
                <motion.span
                  layoutId="navbar-indicator"
                  className="absolute inset-0 bg-primary/10 rounded-lg -z-10"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                ></motion.span>
              )}
            </button>
          ))}
        </nav>

        {/* Resume Button (Desktop) */}
        <div className="hidden lg:block">
          <Button
            variant="hero"
            size="sm"
            onClick={() => scrollToSection("#contact")}
          >
            Get In Touch
          </Button>
        </div>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 text-foreground"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {/* Mobile Menu Navigatin */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden glass mt-2 mx-4 rounded-xl overflow-hidden"
          >
            <nav className="flex flex-col p-4 gap-2">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className={`block w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                      activeSection === link.href.substring(1)
                        ? "bg-primary/10 text-primary"
                        : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                    }`}
                  >
                    {link.name}
                  </button>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
                className="pt-2"
              >
                <Button
                  variant="hero"
                  className="w-full"
                  onClick={() => scrollToSection("#contact")}
                >
                  Get In Touch
                </Button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
