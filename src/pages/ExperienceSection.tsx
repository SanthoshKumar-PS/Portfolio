import { motion, useInView } from "framer-motion";
import { useRef } from "react";
const experiences = [
  {
    title: "Full Stack Developer",
    company: "Ventu Renewable Private Limited",
    location: "Chennai",
    period: "Jun 2025 – Present",
    description: [
      "Build and scale responsive web applications for clients using React, Node.js, and PostgreSQL",
      "Deliver high-performance, maintainable, and user-focused solutions",
      "Collaborate with cross-functional teams to define and implement new features",
      "Optimize application performance and ensure code quality through reviews",
    ],
    current: true,
  },
  {
    title: "Flutter Development Intern",
    company: "Diggibyte Technologies",
    location: "Hosur",
    period: "Jan 2025 – Apr 2025",
    description: [
      "Contributed to the design and development of an internal Asset Management System application",
      "Built responsive and user-friendly interfaces across devices using Flutter",
      "Implemented state management and API integration for seamless data flow",
      "Collaborated with senior developers to learn best practices in mobile development",
    ],
    current: false,
  },
  {
    title: "MERN Stack Developer",
    company: "VCodez",
    location: "Chennai",
    period: "Jul 2024 – Dec 2024",
    description: [
      "Collaborated on frontend and backend features for client projects",
      "Optimized APIs for improved performance and scalability",
      "Enhanced user interfaces for better user experience",
      "Participated in code reviews and contributed to team knowledge sharing",
    ],
    current: false,
  },
  {
    title: "Junior Web Developer",
    company: "PageOnTop",
    location: "Coimbatore",
    period: "Apr 2023 – Sept 2023",
    description: [
      "Gained understanding of client requirements and project specifications",
      "Planned and executed web development tasks efficiently",
      "Regularly reviewed code to ensure functionality and performance standards",
      "Performed thorough testing and debugging before website deployment",
    ],
    current: false,
  },
];
const ExperienceSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref,{once:true, margin:'-100px'})
  return (
    <div>ExperienceSection</div>
  )
}

export default ExperienceSection