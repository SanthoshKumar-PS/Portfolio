import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart } from "lucide-react";
import type React from "react";

const socialLinks = [
  { icon: Github, href: "https://github.com/SanthoshKumar-PS", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/santhosh-kumar-periyanahalli-sakthivel/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:santhoshkumarsakthi2003@gmail.com?subject=Hello&body=Hi Santhosh", label: "Email" },
];

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

const scrollToSection = (e:React.MouseEvent<HTMLAnchorElement>, href:string) => {
  e.preventDefault();
  const element = document.querySelector(href);
  if(element){
    element.scrollIntoView({ behavior:'smooth' })
  }
}
const Footer = () => {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to='/' className="inline-block">
              <span className="font-display text-2xl font-bold gradient-text">
                Santhosh Kumar P S
              </span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs">
              Full Stack Developer building scalable applications that solve real business problems.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-display font-semibold text-foreground">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              {navLinks.map(link=>(
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e)=>scrollToSection(e,link.href)}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm link-hover w-fit cursor-pointer"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="font-display font-semibold text-foreground">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map(social=>(
                <motion.a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{scale:1.1, y:-2}}
                  whileTap={{scale:0.95}}
                  className="p-2 rounded-lg bg-secondary text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                >
                  <social.icon size={20}/>
                </motion.a>
              ))}

            </div>
          </div>

        </div>

      </div>

    </footer>
  )
}

export default Footer