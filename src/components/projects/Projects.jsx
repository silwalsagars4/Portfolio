import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import Portfolio from "../../assets/projects/CodeImg.jpg";
import SLMS from "../../assets/projects/slms.png";

const Projects = () => {
  const projects = [
    {
      image: SLMS,
      title: "Smart Log Monitoring System (SLMS)",
      description: "A production-grade observability platform with AI-driven log analysis, RBAC, and real-time anomaly detection using ML ensembles.",
      tech: ["FastAPI", "React", "PostgreSQL", "Scikit-learn", "Docker"],
      demoLink: "#",
      codeLink: "#"
    },
    {
      image: Portfolio,
      title: "Portfolio Website",
      description: "A personal portfolio built with React, showcasing my projects and skills with a futuristic aesthetic.",
      tech: ["React", "Tailwind", "Framer Motion", "Vite"],
      demoLink: "https://myportfolio.com",
      codeLink: "https://github.com/username/portfolio"
    },
    {
      image: Portfolio,
      title: "E-commerce Store",
      description: "Full-stack MERN e-commerce web app with cart, checkout, and authentication.",
      tech: ["MongoDB", "Express", "React", "Node.js"],
      demoLink: "https://mystore.com",
      codeLink: "https://github.com/username/mystore"
    },
    {
      image: Portfolio,
      title: "Visitor Management System (VMS)",
      description: "A comprehensive digital visitor management system capable of maintaining visitor records with device entry, gate pass generation, and automated task management.",
      tech: ["React", "Node.js", "PostgreSQL", "Tailwind", "Express"],
      demoLink: "#",
      codeLink: "#"
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-background relative overflow-hidden">
      <div className="scanline" />
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">My Projects</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
