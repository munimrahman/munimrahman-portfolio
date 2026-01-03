"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Phone, Mail, Send, Copy, Check, UploadCloud } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { TelegramIcon, WhatsAppIcon } from "@/assets/icons";
import { cn } from "@/lib/utils";
import SectionHeader from "./SectionHeader";

interface Props {
  className?: string;
}

const ContactFormSection = ({ className }: Props) => {
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    file: null as File | null,
  });

  const handleCopy = (text: string, type: "phone" | "email") => {
    navigator.clipboard.writeText(text);
    if (type === "phone") {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    } else {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData((prev) => ({
      ...prev,
      file,
    }));
  };

  return (
    <section className={cn("overflow-hidden", className)}>
      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-24">
          {/* Left Column: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="basis-[45%] order-2 lg:order-1 flex flex-col justify-between gap-8"
          >
            <div className="space-y-10 md:space-y-16">
              {/* Call Me */}
              <div className="space-y-3 md:space-y-4">
                <h3 className="text-xl md:text-2xl font-bold text-foreground flex items-center gap-3">
                  Other ways to reach me
                </h3>
                <p className="text-muted-foreground text-base md:text-lg">
                  I’m available via email and messaging platforms.
                </p>
                <div className="flex items-center gap-4">
                  <a
                    href="tel:+8801929645146"
                    className="flex items-center gap-4 group no-underline"
                  >
                    <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all">
                      <Phone size={18} className="md:size-5" />
                    </div>
                    <span className="text-base md:text-lg font-semibold text-orange-500 group-hover:text-orange-600 transition-colors">
                      +88 01929 64 51 46
                    </span>
                  </a>
                  <button
                    onClick={() => handleCopy("+8801929645146", "phone")}
                    className="p-2 rounded-lg bg-orange-500/5 text-orange-500/50 hover:text-orange-600 hover:bg-orange-500/10 transition-all active:scale-90 cursor-pointer"
                    title="Copy to clipboard"
                  >
                    <AnimatePresence mode="wait">
                      {copiedPhone ? (
                        <motion.div
                          key="check"
                          initial={{ opacity: 0, scale: 0.5 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.5 }}
                        >
                          <Check size={14} className="text-green-500" />
                        </motion.div>
                      ) : (
                        <motion.div
                          key="copy"
                          initial={{ opacity: 0, scale: 0.5 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.5 }}
                        >
                          <Copy size={14} />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </button>
                </div>

                <div className="flex items-center gap-4">
                  <a
                    href="mailto:hello@munimrahman.com"
                    className="flex items-center gap-4 group no-underline"
                  >
                    <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all">
                      <Mail size={18} className="md:size-5" />
                    </div>
                    <span className="text-base md:text-lg font-semibold text-orange-500 group-hover:text-orange-600 transition-colors">
                      hello@munimrahman.com
                    </span>
                  </a>
                  <button
                    onClick={() => handleCopy("hello@munimrahman.com", "email")}
                    className="p-2 rounded-lg bg-orange-500/5 text-orange-500/50 hover:text-orange-600 hover:bg-orange-500/10 transition-all active:scale-90 cursor-pointer"
                    title="Copy to clipboard"
                  >
                    <AnimatePresence mode="wait">
                      {copiedEmail ? (
                        <motion.div
                          key="check"
                          initial={{ opacity: 0, scale: 0.5 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.5 }}
                        >
                          <Check size={14} className="text-green-500" />
                        </motion.div>
                      ) : (
                        <motion.div
                          key="copy"
                          initial={{ opacity: 0, scale: 0.5 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.5 }}
                        >
                          <Copy size={14} />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </button>
                </div>
              </div>

              {/* Chat with me */}
              <div className="space-y-6">
                <div className="space-y-1">
                  <h3 className="text-lg md:text-xl font-bold text-foreground">
                    Chat with me
                  </h3>
                  <p className="text-muted-foreground text-base md:text-lg">
                    Quick questions or follow-ups
                  </p>
                </div>

                <div className="space-y-4">
                  <a
                    href="https://wa.me/+8801929645146"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-4 group no-underline"
                  >
                    <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all">
                      <WhatsAppIcon size={18} className="md:size-5" />
                    </div>
                    <span className="text-base md:text-lg font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                      Message me on WhatsApp
                    </span>
                  </a>
                  <a
                    href="https://t.me/munimrh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-4 group no-underline"
                  >
                    <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all">
                      <TelegramIcon size={18} className="md:size-5" />
                    </div>
                    <span className="text-base md:text-lg font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                      Message me on Telegram
                    </span>
                  </a>
                </div>
              </div>
            </div>

            <div className="flex gap-4 md:gap-6 items-end">
              <figure className="w-16 h-16 md:w-28 lg:w-32 md:h-28 lg:h-32">
                <Image
                  src="/assets/images/munim-rahman.png"
                  alt="Contact Us"
                  className="w-full h-full object-cover rounded md:rounded-lg"
                  width={150}
                  height={150}
                />
              </figure>
              <div className="space-y-1 md:space-y-2">
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl text-primary font-bold">
                  Munim Rahman
                </h3>
                <p className="text-muted-foreground text-xs md:text-base lg:text-lg">
                  Fullstack Developer • Next.js & Nest.js
                </p>
                <address className="text-muted-foreground text-xs md:text-base lg:text-lg leading-relaxed not-italic">
                  Dhaka, Bangladesh
                </address>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="basis-[55%] order-1 lg:order-2 p-6 md:p-10 lg:p-12 rounded-[2rem] bg-card border border-border/50 shadow-2xl shadow-orange-500/5"
          >
            <form className="space-y-6">
              <div className="flex flex-col gap-3 text-left">
                <label
                  htmlFor="name"
                  className="text-sm font-semibold text-foreground ml-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all placeholder:text-muted-foreground/50"
                />
              </div>

              <div className="flex flex-col gap-3 text-left">
                <label
                  htmlFor="email"
                  className="text-sm font-semibold text-foreground ml-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all placeholder:text-muted-foreground/50"
                />
              </div>

              <div className="flex flex-col gap-3 text-left">
                <label
                  htmlFor="subject"
                  className="text-sm font-semibold text-foreground ml-1"
                >
                  Subject
                </label>
                <div className="relative">
                  <select
                    id="subject"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border appearance-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all cursor-pointer text-foreground"
                  >
                    <option value="" disabled>
                      Select a subject
                    </option>
                    <option value="website">Website Development</option>
                    <option value="saas">SaaS MVP Development</option>
                    <option value="seo">SEO & Performance Optimization</option>
                    <option value="consultation">Consultation / Audit</option>
                    <option value="collaboration">
                      Collaboration / Partnership
                    </option>
                    <option value="hi">Just Say Hi</option>
                    <option value="other">Other</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="text-left hidden">
                <label
                  htmlFor="referral"
                  className="text-sm font-semibold text-foreground ml-1"
                >
                  How did you find me? (Optional)
                </label>
                <div className="relative">
                  <select
                    id="referral"
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border appearance-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all cursor-pointer text-foreground"
                  >
                    <option value="" disabled>
                      Select an option
                    </option>
                    <option value="google">Google search</option>
                    <option value="ai">AI (ChatGPT / Gemini / Copilot)</option>
                    <option value="linkedin">LinkedIn</option>
                    <option value="referral">Referral</option>
                    <option value="other">Other</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3 text-left">
                <label
                  htmlFor="message"
                  className="text-sm font-semibold text-foreground ml-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Briefly describe your project, idea, or reason for reaching out."
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all placeholder:text-muted-foreground/50 resize-none"
                />
              </div>

              {/* Attach File */}
              <div className="relative">
                <input
                  type="file"
                  id="file-input"
                  onChange={handleFileChange}
                  className="hidden"
                />
                <label
                  htmlFor="file-input"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 lg:px-6 py-2 border border-dashed border-orange-500/30 bg-background text-orange-600 text-sm font-medium rounded-xl cursor-pointer hover:bg-orange-500/10 transition-colors"
                >
                  <div className="bg-white p-3 lg:p-4 rounded-full">
                    <UploadCloud size={16} className="text-orange-600" />
                  </div>
                  Attach file
                </label>
              </div>

              <Button className="w-full h-12 md:h-14 rounded-xl bg-orange-600 hover:bg-orange-700 text-white text-base md:text-lg font-bold shadow-xl shadow-orange-500/20 transition-all hover:scale-[1.02] active:scale-95">
                Send message
                <Send size={18} className="ml-2" />
              </Button>
              <p className="text-sm text-muted-foreground text-center">
                I usually reply within 24 hours.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export const ContactFormSectionV2 = ({ className }: Props) => {
  return (
    <section className={cn("", className)}>
      <SectionHeader title="Get in Touch" name="Contact" description="" />
      <ContactFormSection />
    </section>
  );
};

export default ContactFormSection;
