import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";


const ProjectCard = ({ image, title, description, tech, demoLink, codeLink, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      className="glass-card group rounded-2xl overflow-hidden flex flex-col h-full border border-white/5 hover:border-primary/50 transition-all duration-500"
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          <a
            href={demoLink}
            target="_blank"
            rel="noreferrer"
            className="p-3 bg-primary text-background rounded-full hover:scale-110 transition-transform"
          >
            <ExternalLink size={20} />
          </a>
          <a
            href={codeLink}
            target="_blank"
            rel="noreferrer"
            className="p-3 bg-white text-background rounded-full hover:scale-110 transition-transform"
          >
            <FaGithub size={20} />

          </a>
        </div>
      </div>

      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted text-sm line-clamp-3 mb-4 flex-1">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mt-auto">
          {tech.map((item, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-white/5 text-[10px] font-bold text-primary border border-primary/20 rounded-md uppercase tracking-wider"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
