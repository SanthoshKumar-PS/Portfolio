import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";
import { Github, Play } from "lucide-react";
import { useRef, useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
type ProjectType = {
  title:string;
  description:string;
  problem:string;
  role:string;
  tech:string[];
  features:string[];
  challenges:string;
  github:string;
  live:string;
  category:string;
}
const projects : ProjectType[] = [
  {
    title: "Inventory Management - Trendora",
    description: "A comprehensive inventory management system for e-commerce businesses",
    problem: "Small businesses struggled with tracking inventory across multiple channels",
    role: "Full Stack Developer",
    tech: ["React", "Node.js", "PostgreSQL", "REST APIs"],
    features: ["Real-time stock tracking", "Multi-warehouse support", "Analytics dashboard", "Automated alerts"],
    challenges: "Implementing real-time sync across distributed systems",
    github: "https://github.com/santhoshkumar/inventory-management-trendora",
    live: "https://github.com/santhoshkumar/inventory-management-trendora",
    category: "Web App",
  },
  {
    title: "Trendora Shopping",
    description: "Full-featured e-commerce platform with modern UI/UX",
    problem: "Creating a seamless shopping experience for fashion retail",
    role: "Frontend Lead",
    tech: ["React", "TypeScript", "Node.js", "MySQL"],
    features: ["Product catalog", "Cart management", "Payment integration", "Order tracking"],
    challenges: "Optimizing performance for large product catalogs",
    github: "https://github.com/santhoshkumar/trendora-shopping",
    live: "https://github.com/santhoshkumar/trendora-shopping",
    category: "E-commerce",
  },
  {
    title: "React Realworld Solutions",
    description: "Collection of real-world React components, UI patterns, and mini applications",
    problem: "Practicing and implementing commonly used frontend problems and UI patterns in real-world applications",
    role: "Frontend Developer",
    tech: ["React", "Typescript", "TailwindCSS"],
    features: [
      "Accordion & Random Color Generator",
      "Custom Modal Component",
      "GitHub Profile Finder",
      "Auto Search",
      "Tic Tac Toe",
      "Nested Categories (Tree Structure)",
      "Google Authentication",
      "Notification Toast",
      "Ticket Booking UI",
      "Matching Pairs Game",
      "Star Rating (E-commerce use case)",
      "Image Slider",
      "Load More Pagination",
      "QR Code Generator",
      "Dark & Light Mode",
      "Scroll Indicator",
      "Custom Tabs"
    ],
    challenges: "Designing reusable components, managing state efficiently, and maintaining clean, scalable code across multiple UI patterns",
    github: "https://github.com/SanthoshKumar-PS/React-Realworld-Solutions",
    live: "https://github.com/santhoshkumar/React-Realworld-Solutions",
    category: "Frontend / UI Components",
  },
  {
    title: "URL Shortener",
    description: "Fast and reliable URL shortening service with analytics",
    problem: "Users needed custom short URLs with click tracking",
    role: "Backend Developer",
    tech: ["Node.js", "Express", "Redis", "PostgreSQL"],
    features: ["Custom aliases", "Click analytics", "QR codes", "API access"],
    challenges: "Handling high-throughput URL redirections efficiently",
    github: "https://github.com/santhoshkumar/url-shortener",
    live: "https://github.com/santhoshkumar/leave-management",
    category: "Backend",
  },
  {
    title: "Physiotherapy Clinic",
    description: "Patient management system for healthcare professionals",
    problem: "Clinics needed digital solutions for appointment and patient management",
    role: "Full Stack Developer",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    features: ["Appointment booking", "Patient records", "Treatment plans", "Billing"],
    challenges: "Ensuring HIPAA-compliant data handling",
    github: "https://github.com/santhoshkumar/physiotherapy-clinic",
    live: "https://github.com/santhoshkumar/leave-management",
    category: "Healthcare",
  },
  {
    title: "Leave Management System",
    description: "Enterprise-grade employee leave management solution",
    problem: "Organizations needed efficient leave tracking and approval workflows",
    role: "Full Stack Developer",
    tech: ["React", "Express", "PostgreSQL", "JWT"],
    features: ["Leave requests", "Approval workflows", "Calendar integration", "Reports"],
    challenges: "Building complex approval hierarchies with role-based access",
    github: "https://github.com/santhoshkumar/leave-management",
    live: "https://github.com/santhoshkumar/leave-management",
    category: "Enterprise",
  },
  {
    title: "Flutter Todo App",
    description: "Clean and intuitive task management mobile application",
    problem: "Users needed a simple yet powerful todo app with offline support",
    role: "Mobile Developer",
    tech: ["Flutter", "Dart", "SQLite", "Provider"],
    features: ["Task categories", "Due dates", "Offline mode", "Dark theme"],
    challenges: "Implementing seamless offline-online sync",
    github: "https://github.com/santhoshkumar/flutter-todo",
    live: "https://github.com/santhoshkumar/leave-management",
    category: "Mobile",
  },
  {
    title: "Weather App",
    description: "Real-time weather application with beautiful visualizations",
    problem: "Displaying complex weather data in an intuitive interface",
    role: "Mobile Developer",
    tech: ["Flutter", "Dart", "OpenWeather API", "Bloc"],
    features: ["Current weather", "7-day forecast", "Location-based", "Weather alerts"],
    challenges: "Creating smooth animations for weather transitions",
    github: "https://github.com/santhoshkumar/weather-app",
    live: "https://github.com/santhoshkumar/leave-management",
    category: "Mobile",
  },
  {
    title: "Food Delivery App",
    description: "Complete food ordering platform with real-time tracking",
    problem: "Local restaurants needed a modern delivery solution",
    role: "Mobile Developer",
    tech: ["Flutter", "Firebase", "Google Maps", "Stripe"],
    features: ["Restaurant listings", "Cart system", "Live tracking", "Payment processing"],
    challenges: "Implementing real-time order tracking with maps integration",
    github: "https://github.com/santhoshkumar/food-delivery",
    live: "https://github.com/santhoshkumar/leave-management",
    category: "Mobile",
  },
  {
    title: "Email Notification System",
    description: "Scalable email notification service for applications",
    problem: "Applications needed reliable, templated email delivery",
    role: "Backend Developer",
    tech: ["Node.js", "Express", "Redis Queue", "SendGrid"],
    features: ["Template engine", "Queue management", "Delivery tracking", "Rate limiting"],
    challenges: "Building fault-tolerant queue processing with retry logic",
    github: "https://github.com/santhoshkumar/email-notification",
    live: "https://github.com/santhoshkumar/leave-management",
    category: "Backend",
  },
];

const categories = ["All", "Web App", "Mobile", "Backend", "E-commerce", "Enterprise", "Healthcare"];

const ProjectsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<ProjectType|null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, {once:true, margin:'-100px'})

  const filteredProjects = selectedCategory==='All'
    ? projects
    : projects.filter(p => p.category === selectedCategory) 
  return (
    <section id="projects" className="section-padding bg-secondary/20">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity:0, y:30 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{once:true}}
          transition={{duration:0.6}}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-widest">
            Portfolio
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of applications I've built, from mobile apps to enterprise solutions.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity:0, y:20 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }}
          transition={{ delay:0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category,index)=>(
            <Button
              key={category}
              onClick={()=>setSelectedCategory(category)}
              variant={selectedCategory===category?'hero':'heroOutline'}
              size='sm'
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project,index)=>(
            <motion.div
              key={project.title}
              initial={{opacity:0, y:30}}
              animate={isInView? {opacity:1, y:0}:{}}
              transition={{ delay:index*0.1, duration:0.5 }}
              className="group cursor-pointer"
              onClick={()=>setSelectedProject(project)}
            >
              <div className="glass rounded-2xl overflow-hidden card-hover h-full flex flex-col">
                <div className="p-6 flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {project.title}
                    </span>
                    <a href={project.github}
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="p-2 rounded-lg bg-secondary/50 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                    >
                      <Github size={16}/>
                    </a>
                  </div>

                  <h3 className="font-display text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.tech.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.tech.length - 3}
                      </Badge>
                    )}
                  </div>
                </div>

              </div>

            </motion.div>
          ))}
          
        </div>

      </div>

      <Dialog open={!!selectedProject} onOpenChange={()=>setSelectedProject(null)}>
        <DialogContent className="mx-2 max-w-2xl max-h-[90vh] overflow-y-auto glass">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-display">
                  {selectedProject.title}
                </DialogTitle>
              </DialogHeader>
              <div className="space-y-6 pt-4">
                <div>
                  <h4 className="text-sm font-semibold text-primary mb-2">Problem Solved</h4>
                  <p className="text-muted-foreground">{selectedProject.problem}</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-primary mb-2">Key Features</h4>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    {selectedProject.features.map(feature=>(
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-primary mb-2">Challenges & Solutions</h4>
                  <p className="text-muted-foreground">{selectedProject.challenges}</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-primary mb-2">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map(tech=>(
                      <Badge key={tech} variant='secondary'>
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="flex gap-3 pt-4">
                  <a 
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button variant='outline' className="w-full">
                      <Github className="mr-2 h-4 w-4"/>
                      View on Github
                    </Button>
                  </a>
                  <a 
                    href={selectedProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button variant='default' className="w-full">
                      <Play className="mr-2 h-4 w-4"/>
                      View Live
                    </Button>
                  </a>

                </div>

                

              </div>
            </>
          )}
        </DialogContent>

      </Dialog>

    </section>
  )
}

export default ProjectsSection