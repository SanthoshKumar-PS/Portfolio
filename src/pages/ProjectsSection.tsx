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
  live:string|null;
  category:string;
}
const projects : ProjectType[] = [
  {
    title: "LawVault",
    description: "A secure, enterprise-grade file management and document vaulting system with granular access control.",
    problem: "Organizations needed a centralized, secure way to manage sensitive documents with strict permission-based access and high availability.",
    role: "Full Stack Developer",
    tech: ["React", "Node.js", "MySQL", "Prisma ORM", "AWS S3", "REST APIs", "TailwindCSS", "TypeScript", "JWT"],
    features: [
      "Role-Based Access Control (RBAC) for document security",
      "Secure file uploads and storage using AWS S3 infrastructure",
      "Administrative dashboard for granting/revoking user permissions",
      "Real-time file status and metadata synchronization",
      "Token-based authentication (JWT) with session management",
      "Audit trail of file operations (MySQL as the source of truth)",
      "Dynamic folder structures based on user authorization levels"
    ],
    challenges: "Synchronizing distributed S3 cloud storage with local MySQL metadata while ensuring zero-latency permission checks.",
    github: "https://github.com/SanthoshKumar-PS/LawVault",
    live: null,
    category: "Cloud Storage & Security",
  },
  {
    title: "Inventory Management - Trendora",
    description: "A comprehensive inventory management system for e-commerce businesses",
    problem: "Small businesses struggled with tracking inventory across multiple channels",
    role: "Full Stack Developer",
    tech: ["React", "Node.js", "MySQL", "Prisma ORM" ,"REST APIs", "TailwindCSS", "Typescript"],
    features: ["Real-time order management","Order tracking","Analytics and reporting dashboard","Order status alerts and notifications","User authentication (Register & Login)","Real-time task synchronization","Token-based authentication (JWT)"],
    challenges: "Improving consistency and performance in distributed architectures",
    github: "https://github.com/SanthoshKumar-PS/Inventory-Management-Trendora",
    live: null,
    category: "E-commerce",
  },
  {
    title: "Trendora Shopping",
    description: "Full-featured e-commerce platform with modern UI/UX",
    problem: "Creating a seamless shopping experience for fashion retail",
    role: "Full Stack Developer",
    tech: ["React", "Node.js", "MySQL", "Prisma ORM" ,"REST APIs", "TailwindCSS", "Typescript"],
    features: ["Product catalog", "Cart management", "Order tracking"],
    challenges: "Optimizing performance for large product catalogs",
    github: "https://github.com/SanthoshKumar-PS/Trendora-Shopping",
    live: null,
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
    live: null,
    category: "React-Frontend",
  },
  {
    title: "URL Shortener",
    description: "Fast and reliable URL shortening service with analytics",
    problem: "Users needed custom short URLs with click tracking",
    role: "Backend Developer",
    tech: ["Node.js", "Express", "Redis", "MySQL"],
    features: ["Custom aliases", "Click analytics", "QR codes", "API access"],
    challenges: "Handling high-throughput URL redirections efficiently",
    github: "https://github.com/SanthoshKumar-PS/url-shortener",
    live: "https://url-shortener-psi-two.vercel.app",
    category: "Backend",
  },
  {
    title: "Physiotherapy Clinic",
    description: "Website for a physiotherapy clinic with services overview and contact form",
    problem: "Clinics needed digital solutions for appointment and allow patients to easily get in touch",
    role: "Full Stack Developer",
    tech: ["React", "Typescript", "TailwindCSS", "EmailJS"],
    features: ["Appointment booking", "Services", "Contact Form", "Reviews"],
    challenges: "Implementing reliable email delivery and maintaining a clean, accessible one-page user experience",
    github: "https://github.com/SanthoshKumar-PS/Physiotherapy-Clinic",
    live: "https://gayathri-physiotherapy-clinic.vercel.app",
    category: "Healthcare",
  },
  {
    title: "Email Notification System",
    description: "Scalable email notification service for applications",
    problem: "Applications needed reliable, templated email delivery",
    role: "Backend Developer",
    tech: ["Node.js", "Express", "BullMQ", "EmailJS"],
    features: ["Template engine", "Queue management", "Delivery tracking", "Rate limiting"],
    challenges: "Building fault-tolerant queue processing with retry logic",
    github: "https://github.com/SanthoshKumar-PS/Email-Notification-System",
    live: null,
    category: "Backend",
  },
  {
    title: "TimelyTrack",
    description: "Flutter-based attendance and leave management app with modern UI, animations, and role-based screens",
    problem: "Organizations needed a simple, intuitive interface for tracking attendance and managing leave requests",
    role: "Flutter Developer",
    tech: ["Flutter", "Dart"],
    features: [
      "Authentication (Login, Register, Forgot Password, OTP verification)",
      "Slide to check-in / check-out with animations",
      "Leave application with calendar date picker",
      "Leave filtering by status and leave type",
      "Role-based UI for User and Admin",
      "Admin leave approval and rejection",
      "Daily attendance tracking",
      "Interactive UI with smooth animations and transitions"
    ],
    challenges: "Designing smooth animations, managing UI state across multiple flows, and maintaining a clean, responsive layout without backend integration",
    github: "https://github.com/SanthoshKumar-PS/Attendance-Tracking",
    live: null,
    category: "Flutter/Mobile",
  },
  {
    title: "Taskly – Todo Management App",
    description: "MERN stack–based task management application with a Flutter mobile client and real-time updates",
    problem: "Users needed a secure, cross-platform solution to manage tasks with real-time synchronization across devices",
    role: "Full Stack Developer",
    tech: ["Flutter", "Dart", "Node.js", "Express", "MongoDB"],
    features: [
      "User authentication (Register & Login)",
      "Create, update, and manage tasks",
      "Real-time task synchronization",
      "Token-based authentication (JWT)",
      "Fast and responsive Flutter UI",
      "Sidebar drawer for profile and logout",
      "Clean and intuitive user experience"
    ],
    challenges: "Designing REST APIs, integrating Flutter with a MERN backend, handling authentication securely, and maintaining real-time UI updates",
    github: "https://github.com/SanthoshKumar-PS/Todo-Flutter",
    live: null,
    category: "Flutter/Mobile",
  },
  {
    title: "ClimateApp",
    description: "Flutter-based mobile application providing real-time weather updates for current or searched locations with a responsive and intuitive UI",
    problem: "Users needed a fast and user-friendly way to get accurate weather information for any location",
    role: "Mobile Developer",
    tech: ["Flutter", "Dart", "Geolocator", "OpenWeatherMap API"],
    features: [
      "Get current location using Geolocator",
      "Search weather for any city worldwide",
      "View temperature, weather condition, and icons",
      "Refresh weather data on demand",
      "Clean and responsive UI"
    ],
    challenges: "Integrating geolocation services with the weather API, handling asynchronous data fetching, and designing smooth UI updates",
    github: "https://github.com/SanthoshKumar-PS/Climate-Live-Weather",
    live: null,
    category: "Flutter/Mobile",
  },
  {
    title: "Feastify",
    description: "Flutter-based food ordering application with smart geolocation, table booking, restaurant discovery, and real-time order tracking",
    problem: "Local restaurants and users needed a modern, mobile-first platform to order food, book tables, and track deliveries",
    role: "Mobile Developer",
    tech: ["Flutter", "Firebase", "Google Maps", "Stripe"],
    features: [
      "Smart geolocation to show nearby restaurants",
      "Table booking for preferred restaurants",
      "Restaurant listings with menus, ratings, and preferences",
      "Powerful filters (Veg/Non-Veg, Price, Top-rated)",
      "Order history and user profile management",
      "Live order tracking with maps integration",
      "Intuitive and animated Flutter UI"
    ],
    challenges: "Implementing real-time order tracking, integrating maps, managing secure payments, and building a smooth, interactive UI",
    github: "https://github.com/SanthoshKumar-PS/Flutter-Feastify",
    live: null,
    category: "Flutter/Mobile",
  }
];

const categories = ["All", "Cloud Storage & Security", "E-commerce", "React-Frontend", "Backend", "Flutter/Mobile", "Healthcare"];

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
                  {selectedProject.live && (
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
                  )}


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