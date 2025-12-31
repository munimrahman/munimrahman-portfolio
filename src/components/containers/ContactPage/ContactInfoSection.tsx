"use client";

import React from "react";
import { motion } from "motion/react";
import { Mail, MapPin, Phone, Github, Linkedin, Twitter } from "lucide-react";

const contactDetails = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@munim.com",
    href: "mailto:hello@munim.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Dhaka, Bangladesh",
    href: "#",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+880 1234 567890",
    href: "tel:+8801234567890",
  },
];

const ContactInfoSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {contactDetails.map((detail, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="p-8 rounded-3xl bg-background border border-border/50 hover:border-orange-500/30 hover:bg-orange-500/5 transition-all group"
          >
            <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-500 mb-6 group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
              <detail.icon size={24} />
            </div>
            <h3 className="text-sm font-medium text-muted-foreground mb-1">
              {detail.label}
            </h3>
            <a
              href={detail.href}
              className="text-lg font-semibold text-foreground hover:text-orange-500 no-underline"
            >
              {detail.value}
            </a>
          </motion.div>
        ))}

        {/* Follow Me Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="p-8 rounded-3xl bg-background border border-border/50 flex flex-col items-center justify-center"
        >
          <h3 className="text-sm font-medium text-muted-foreground mb-6">
            Follow Me
          </h3>
          <div className="flex gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500 hover:bg-orange-500 hover:text-white transition-all"
            >
              <Github size={20} />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500 hover:bg-orange-500 hover:text-white transition-all"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500 hover:bg-orange-500 hover:text-white transition-all"
            >
              <Twitter size={20} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactInfoSection;
