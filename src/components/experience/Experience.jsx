import React from "react";
import { motion } from "framer-motion";
import TerminalText from "../TerminalText/TerminalText";
import cloudhimalaya from "../../assets/experience/CloudHimalaya.png";
import timesglobal from "../../assets/experience/TimesGlobal.png";
import linux from "../../assets/experience/linux.png";
import cisco from "../../assets/experience/cisco.png";
import fortinet from "../../assets/experience/fortinet.png";
import server from "../../assets/experience/server.png";
import docker from "../../assets/experience/docker.png";
import aws from "../../assets/experience/aws.png";
import postman from "../../assets/experience/postman.png";
import mongodb from "../../assets/experience/mongodb.png";
import html from "../../assets/experience/html.png";
import css from "../../assets/experience/css.png";
import js from "../../assets/experience/js.png";
import reactIcon from "../../assets/experience/react.png";
import nodejs from "../../assets/experience/node-js.png";
import figma from "../../assets/experience/figma.png";

const SkillIcon = ({ img, name, index }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ delay: index * 0.05 }}
    viewport={{ once: true }}
    className="flex flex-col items-center gap-2 group"
  >
    <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl glass flex items-center justify-center p-4 group-hover:border-primary/50 transition-all duration-300 group-hover:scale-110">
      <img src={img} alt={name} className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all" />
    </div>
    <span className="text-xs font-medium text-muted group-hover:text-primary transition-colors">{name}</span>
  </motion.div>
);

const JobCard = ({ image, title, date, descriptions, index }) => (
  <motion.div
    initial={{ opacity: 0, x: 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ delay: index * 0.2 }}
    viewport={{ once: true }}
    className="tech-border p-6 md:p-8 flex flex-col md:flex-row gap-8 relative group hover:border-primary/50 transition-all duration-500"
  >
    <div className="w-20 h-20 md:w-28 md:h-28 glass p-3 shrink-0 overflow-hidden group/logo hover:scale-110 transition-all duration-500 flex items-center justify-center border border-white/10 shadow-[0_0_20px_rgba(255,255,255,0.05)] bg-white/5 backdrop-blur-xl">
      <img src={image} alt={title} className="w-full h-full object-contain group-hover/logo:scale-110 transition-transform duration-500" />
    </div>
    <div className="flex-1">
      <h3 className="text-xl md:text-2xl font-bold text-white mb-1 group-hover:text-primary transition-colors">{title}</h3>
      <p className="text-primary text-sm font-bold mb-4 tracking-wider uppercase">{date}</p>
      <ul className="space-y-3 mt-4">
        {descriptions.map((desc, i) => (
          <li key={i} className="text-muted text-sm md:text-base flex gap-3 leading-relaxed">
            <span className="text-primary font-mono font-bold">$</span>
            <TerminalText text={desc} delay={index * 0.5 + i * 0.1} />
          </li>
        ))}
      </ul>
    </div>
  </motion.div>
);

const Experience = () => {
  const skills = [
    { img: cisco, name: "Cisco" },
    { img: linux, name: "Linux" },
    { img: fortinet, name: "Fortinet" },
    { img: server, name: "SysAdmin" },
    { img: docker, name: "Docker" },
    { img: aws, name: "AWS" },
    { img: postman, name: "NetTools" },
    { img: mongodb, name: "MongoDB" },
    { img: html, name: "HTML5" },
    { img: css, name: "CSS3" },
    { img: js, name: "JS" },
    { img: reactIcon, name: "React" },
    { img: nodejs, name: "Node.js" },
    { img: figma, name: "Figma" },
  ];

  return (
    <section id="experience" className="py-24 px-6 bg-surface/30 relative overflow-hidden">
      <div className="scanline" />
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Experience & Skills</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Skills Grid */}
          <div className="lg:col-span-5">
            <h3 className="text-2xl font-bold mb-8 text-white/80">Technical Stack</h3>
            <div className="grid grid-cols-4 md:grid-cols-5 gap-6">
              {skills.map((skill, index) => (
                <SkillIcon key={index} {...skill} index={index} />
              ))}
            </div>
          </div>

          {/* Work Experience */}
          <div className="lg:col-span-7 flex flex-col gap-8 relative">
            <div className="absolute left-10 top-0 bottom-0 w-[1px] bg-white/10 hidden md:block" />

            <JobCard
              image={cloudhimalaya}
              title="Associate Network and System Engineer @Cloud_Himalaya"
              date="Sep 2025 - Present"
              descriptions={[
                "Designing and maintaining enterprise-grade network architectures, ensuring seamless connectivity and 99.9% uptime.",
                "Managing virtualized environments and server infrastructures with a focus on high security and resilient scalability.",
                "Implementing advanced monitoring solutions and proactive incident response protocols for critical data center operations.",
                "Configuring and hardening core network devices including Routers, Switches, and Firewalls for optimal performance.",
                "Collaborating on large-scale infrastructure projects to architect secure digital ecosystems for enterprise clients."
              ]}
              index={0}
            />
            <JobCard
              image={timesglobal}
              title="IT Internship  @Times Global"
              date="Jun 2025 - Sep 2025"
              descriptions={[
                "Engineered a digital Visitor Management System (VMS) to maintain records, device entry, and automated gate passes.",
                "Monitored IT infrastructure health and provided rapid-response troubleshooting for daily technical operations.",
                "Conducted comprehensive system audits to ensure data integrity and strict adherence to organizational security policies.",
                "Supported the deployment of hardware upgrades and software patches across the corporate network environment."
              ]}
              index={1}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
