import React from "react";
import { motion } from "framer-motion";
import { Server, Shield, Network, Cloud } from "lucide-react";
import Aboutimg from "../../assets/about/sagarNoBG.png";
import { cn } from "../../utils/cn";

const InfoCard = ({ icon: Icon, title, description, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      className="glass-card p-6 rounded-2xl flex gap-4 group"
    >
      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
        <Icon className="text-primary" size={24} />
      </div>
      <div>
        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

const About = () => {
  const info = [
    {
      icon: Network,
      title: "Network Engineer",
      description: "Experienced in designing and managing scalable network infrastructures, specializing in routing, switching, and protocol optimization (TCP/IP, OSPF, BGP)."
    },
    {
      icon: Server,
      title: "System Administrator",
      description: "Proficient in managing Linux and Windows server environments, ensuring high availability, performance tuning, and robust system security."
    },
    {
      icon: Shield,
      title: "Security & Monitoring",
      description: "Skilled in implementing advanced security measures and proactive monitoring solutions using tools like Fortinet, Nagios, and Zabbix."
    },
    {
      icon: Cloud,
      title: "Cloud Infrastructure",
      description: "Knowledgeable in deploying and scaling mission-critical applications on AWS and Azure, leveraging cloud-native services for optimal performance."
    }
  ];

  return (
    <section id="about" className="py-24 px-6 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full" />
            <img 
              src={Aboutimg} 
              alt="Sagar" 
              className="relative z-10 w-full max-w-md mx-auto drop-shadow-[0_0_50px_rgba(0,242,255,0.2)]"
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {info.map((item, index) => (
              <InfoCard key={index} {...item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
