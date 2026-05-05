import React from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import TerminalText from "../TerminalText/TerminalText";

const ContactLink = ({ href, icon: Icon, label, index }) => (
  <motion.a
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    viewport={{ once: true }}
    href={href}
    target="_blank"
    rel="noreferrer"
    className="flex items-center gap-4 p-4 tech-border hover:bg-primary/10 hover:border-primary/50 transition-all group"
  >
    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
      <Icon className="text-primary" size={20} />
    </div>
    <span className="text-sm font-medium text-muted group-hover:text-white transition-colors">
      {label}
    </span>
  </motion.a>
);

const Contacts = () => {
  const contactLinks = [
    {
      href: "mailto:silwalsagars4@gmail.com",
      icon: Mail,
      label: "silwalsagars4@gmail.com"
    },
    {
      href: "https://www.linkedin.com/in/silwalsagar1/",
      icon: FaLinkedin,
      label: "Linkedin.com/in/silwalsagar1"
    },
    {
      href: "https://github.com/silwalsagars4",
      icon: FaGithub,
      label: "Github.com/silwalsagars4"
    },
    {
      href: "http://www.facebook.com/Silwal.sagar.4",
      icon: FaFacebook,
      label: "Facebook.com/Silwal_sagar"
    },
    {
      href: "https://wa.me/9779861546739",
      icon: FaWhatsapp,
      label: "Connect with me in WhatsApp"
    },
    {
      href: "https://www.instagram.com/ssg.grr__/",
      icon: FaInstagram,
      label: "Instagram.com/ssg.grr__"
    }
  ];

  return (
    <section id="contact" className="py-24 px-6 bg-surface/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="tech-border p-8 md:p-12 relative overflow-hidden"
        >
          {/* Decorative Background */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[80px] -z-10" />

          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Get In Touch</h2>
            <div className="text-muted max-w-md mx-auto">
              <TerminalText text="Feel free to reach out for collaborations or just a friendly hello! I'm always open to new opportunities." />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {contactLinks.map((link, index) => (
              <ContactLink key={index} {...link} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contacts;