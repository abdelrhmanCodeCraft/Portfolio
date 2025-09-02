"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Zap, Rocket, Code, ChevronDown } from "lucide-react";

export default function ContactSection() {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <section id="contact" className="relative w-full bg-black py-20 px-6 md:px-12 lg:px-24">
      {/* Title Section */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Let&apos;s{" "}
          <span className="bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
            Connect
          </span>
        </h2>
        <p className="text-neutral-400 mt-4 max-w-2xl mx-auto">
          A collection of ways to reach me and start a conversation
        </p>
        <span className="block h-[3px] w-24 mx-auto mt-5 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full"></span>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
        <div className="space-y-5">
          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-white mb-2">
              Ready to collaborate?
            </h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              I&apos;m always open to discussing new opportunities, interesting
              projects, or just having a chat about technology and development.
            </p>
          </div>

          {/* Contact Cards */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 p-4 rounded-lg bg-neutral-900 border border-neutral-700 shadow-md"
          >
            <Mail className="text-purple-400 w-5 h-5" />
            <div>
              <h4 className="text-white font-medium text-sm">Email</h4>
              <p className="text-neutral-400 text-xs">
                abdelrhman.codecraft@gmail.com
              </p>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 p-4 rounded-lg bg-neutral-900 border border-neutral-700 shadow-md"
          >
            <MapPin className="text-blue-400 w-5 h-5" />
            <div>
              <h4 className="text-white font-medium text-sm">Location</h4>
              <p className="text-neutral-400 text-xs">
                Cairo, Egypt - Available for Remote Work
              </p>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 p-4 rounded-lg bg-neutral-900 border border-neutral-700 shadow-md"
          >
            <Zap className="text-yellow-400 w-5 h-5" />
            <div>
              <h4 className="text-white font-medium text-sm">Response Time</h4>
              <p className="text-neutral-400 text-xs">
                Usually within 24 hours
              </p>
            </div>
          </motion.div>

          {/* Buttons */}
          <div className="flex gap-4 pt-4 relative" style={{ flexWrap: "wrap" }}>
            {/* Dropdown Button */}
            <div className="relative">
              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={() => setShowDropdown(!showDropdown)}
                className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm font-medium shadow-md flex items-center gap-2"
              >
                Start a Conversation <ChevronDown className="w-4 h-4" />
              </motion.button>

              {showDropdown && (
                <div className="absolute mt-2 w-48 bg-neutral-900 border border-neutral-700 rounded-lg shadow-lg overflow-hidden">
                  <a
                    href="mailto:abdelrhman.codecraft@gmail.com"
                    className="block px-4 py-2 text-sm text-neutral-300 hover:bg-neutral-800"
                  >
                    📧 Gmail
                  </a>
                  <a
                    href="https://wa.me/01550283393"
                    target="_blank"
                    className="block px-4 py-2 text-sm text-neutral-300 hover:bg-neutral-800"
                  >
                    💬 WhatsApp
                  </a>
                  <a
                    href="https://www.linkedin.com/in/abdelrhman-samy-07934a221/"
                    target="_blank"
                    className="block px-4 py-2 text-sm text-neutral-300 hover:bg-neutral-800"
                  >
                    🔗 LinkedIn
                  </a>
                </div>
              )}
            </div>

            {/* Hire Me Button */}
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="mailto:abdelrhman.codecraft@gmail.com?subject=Hire%20Me%20Request&body=Hello%20Abdelrhman,"
              className="px-5 py-2.5 rounded-lg bg-neutral-900 border border-neutral-700 text-white text-sm font-medium"
            >
              Hire Me
            </motion.a>
          </div>
        </div>

        <div className="flex justify-center relative">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="w-64 h-64 rounded-full border border-neutral-700 flex items-center justify-center relative"
          >
            <Mail className="absolute top-2 left-1/2 -translate-x-1/2 text-purple-400 w-7 h-7" />
            <MapPin className="absolute right-2 top-1/2 -translate-y-1/2 text-blue-400 w-7 h-7" />
            <Code className="absolute bottom-2 left-1/2 -translate-x-1/2 text-green-400 w-7 h-7" />
            <Zap className="absolute left-2 top-1/2 -translate-y-1/2 text-yellow-400 w-7 h-7" />

            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-20 h-20 rounded-full flex items-center justify-center bg-gradient-to-r from-purple-500 to-blue-500 shadow-lg"
            >
              <Rocket className="text-white w-10 h-10" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
