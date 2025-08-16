"use client";
import { motion } from "framer-motion";
import { X } from "lucide-react";

export default function ProjectModal({ project, onClose }) {
  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="relative bg-neutral-900 text-white max-w-3xl w-full p-8 rounded-2xl shadow-xl border border-neutral-700 overflow-y-auto max-h-[90vh]"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-neutral-400 hover:text-white"
        >
          <X className="w-6 h-6" />
        </button>

        <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          {project.title}
        </h2>

        <p className="text-neutral-300 leading-relaxed mb-6">
          {project.details}
        </p>

        <h3 className="text-lg font-semibold mb-2">Skills Used:</h3>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.skills.map((skill, idx) => (
            <span
              key={idx}
              className="px-3 py-1 text-sm rounded-full bg-neutral-800 border border-neutral-600 text-neutral-300"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              className="flex-1 text-center px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold hover:opacity-90"
            >
              Live Demo
            </a>
          )}
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              className="flex-1 text-center px-4 py-2 rounded-lg bg-gradient-to-r from-green-500 to-teal-400 text-white font-semibold hover:opacity-90"
            >
              GitHub
            </a>
          )}
        </div>
      </motion.div>
    </div>
  );
}
