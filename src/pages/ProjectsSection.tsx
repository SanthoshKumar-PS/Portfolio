import { motion } from "framer-motion";

type ProjectType = {
  title:string;
  description:string;
  problem:string;
  role:string;
  tech:string[];
  features:string[];
  challenges:string;
  github:string;
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
    category: "E-commerce",
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
    category: "Mobile",
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
    category: "Healthcare",
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
    category: "Backend",
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
    category: "Backend",
  },
];
const ProjectsSection = () => {
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

      </div>

    </section>
  )
}

export default ProjectsSection