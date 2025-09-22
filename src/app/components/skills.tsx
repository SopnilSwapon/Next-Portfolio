'use client';

import { motion } from 'framer-motion';
import { 
  Code2, 
  Database, 
  Globe, 
  Server, 
  FileCode,
  Braces,
  Palette,
  Layout,
  Component,
  Route,
  FormInput,
  Settings,
  HardDrive,
  Zap
} from 'lucide-react';

interface Skill {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      { name: "React.js", icon: Component },
      { name: "Next.js", icon: Globe },
      { name: "TypeScript", icon: FileCode },
      { name: "JavaScript", icon: Braces },
      { name: "HTML5", icon: Code2 },
      { name: "CSS3", icon: Palette },
    ]
  },
  {
    title: "Styling & UI",
    skills: [
      { name: "Tailwind CSS", icon: Palette },
      { name: "Material UI", icon: Layout },
      { name: "Shadcn UI", icon: Component },
    ]
  },
  {
    title: "State Management",
    skills: [
      { name: "Zustand", icon: Zap },
      { name: "TanStack Query", icon: Settings },
      { name: "TanStack Router", icon: Route },
      { name: "React Hook Form", icon: FormInput },
    ]
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: Server },
      { name: "Express.js", icon: Server },
    ]
  },
  {
    title: "Database",
    skills: [
      { name: "MongoDB", icon: Database },
      { name: "PostgreSQL", icon: HardDrive },
      { name: "SQL", icon: Database },
    ]
  }
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

const SkillCard = ({ skill }: { skill: Skill }) => {
  const IconComponent = skill.icon;
  
  return (
    <motion.div
      variants={item}
      whileHover={{ 
        scale: 1.05,
        transition: { duration: 0.2 }
      }}
      className="group cursor-pointer"
    >
      <div className="flex items-center gap-3 p-4 rounded-xl bg-white border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all duration-200">
        <div className="p-2 rounded-lg bg-gray-50 group-hover:bg-gray-100 transition-colors">
          <IconComponent className="w-5 h-5 text-gray-700" />
        </div>
        <span className="font-medium text-gray-900">{skill.name}</span>
      </div>
    </motion.div>
  );
};

const CategorySection = ({ category }: { category: SkillCategory }) => (
  <motion.div variants={item} className="space-y-4">
    <h3 className="text-lg font-semibold text-gray-900 mb-4">
      {category.title}
    </h3>
    
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="grid grid-cols-1 sm:grid-cols-2 gap-3"
    >
      {category.skills.map((skill) => (
        <SkillCard key={skill.name} skill={skill} />
      ))}
    </motion.div>
  </motion.div>
);

export default function SkillsSection() {
  return (
    <section className="py-12 mt-6 rounded-2xl px-4 bg-gray-50">
      <div className="mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Technologies I work with to build modern web applications
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
        >
          {skillCategories.map((category) => (
            <CategorySection key={category.title} category={category} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}