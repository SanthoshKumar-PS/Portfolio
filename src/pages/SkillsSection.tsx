type SkillCategory = {
  title: string;
  skills: { name: string; level: number }[];
};

const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    skills: [
      { name: "JavaScript", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Java", level: 75 },
      { name: "Python", level: 70 },
      { name: "Dart", level: 80 },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React", level: 90 },
      { name: "Flutter", level: 85 },
      { name: "HTML/CSS", level: 95 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Next.js", level: 75 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 88 },
      { name: "Express", level: 85 },
      { name: "REST APIs", level: 90 },
      { name: "GraphQL", level: 65 },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "PostgreSQL", level: 85 },
      { name: "MySQL", level: 85 },
      { name: "MongoDB", level: 75 },
      { name: "Redis", level: 70 },
    ],
  },
  {
    title: "Tools & DevOps",
    skills: [
      { name: "Git", level: 90 },
      { name: "GitHub", level: 90 },
      { name: "Postman", level: 85 },
      { name: "Docker", level: 70 },
      { name: "VS Code", level: 95 },
    ],
  },
];
const otherSkills = [
  "Problem Solving",
  "Agile/Scrum",
  "Code Review",
  "Team Collaboration",
  "Technical Writing",
  "Debugging",
  "Performance Optimization",
  "Responsive Design",
  "Version Control",
  "API Design",
  "Testing",
  "CI/CD Basics",
];
const SkillsSection = () => {
  return <div>SkillsSection</div>;
};

export default SkillsSection;
