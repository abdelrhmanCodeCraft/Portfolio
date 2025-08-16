"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Hotel, ClipboardList, Utensils, ShoppingCart } from "lucide-react";
import ProjectModal from "./ProjectModal";

const projects = [
  {
    id: 1,
    title: "Hotel Booking System",
    icon: <Hotel className="w-8 h-8 text-green-400" />,
    summary:
      "A full hotel booking platform for users & admins with Stripe, favorites, reviews, bilingual UI, and a clean, responsive design.",
    details:
      "A comprehensive hotel booking system built for a smooth user and admin experience. Users can browse rooms and offers publicly, then register and book securely using Stripe Elements with a clear checkout flow. Favorites, ratings, and comments help users curate and evaluate stays. Admins manage rooms, offers, bookings, and users from an analytics-driven dashboard with capacity, pricing, media, discounts, and facilities. The interface supports Arabic/English via i18next, Dark Mode, and polished motion. Built with React 19, TypeScript, Redux Toolkit, Axios, MUI, and Framer Motion for a modern, scalable UX.",
    skills: [
      "React 19",
      "TypeScript",
      "Redux Toolkit",
      "Axios",
      "MUI",
      "Stripe Elements",
      "Swiper",
      "React Hook Form",
      "Notistack",
      "Framer Motion",
      "i18next",
    ],
    live: "https://lnkd.in/dXV-7ycu",
    repo: "https://lnkd.in/d8byjM-j",
  },
  {
    id: 2,
    title: "Project Management System (PMS)",
    icon: <ClipboardList className="w-8 h-8 text-blue-400" />,
    summary:
      "A lightweight PMS for teams to plan, assign, and track work with role-based auth and responsive dashboards.",
    details:
      "A modern, performance-oriented PMS that streamlines planning and execution. Teams can create projects, assign tasks with due dates, and track progress from a clear dashboard. Role-based authentication keeps access tidy while profile updates keep member info current. The UI is responsive and accessible, making collaboration smooth across devices. Built with React + TypeScript, Context API, React Bootstrap, Axios, and Font Awesome, keeping the stack simple and maintainable for small to mid-sized teams.",
    skills: [
      "React",
      "TypeScript",
      "Context API",
      "React Bootstrap",
      "Axios",
      "Font Awesome",
      "RESTful APIs",
      "Git",
      "GitHub",
    ],
    live: "https://lnkd.in/daJaku8y",
    repo: "https://lnkd.in/d4GfueJM",
  },
  {
    id: 3,
    title: "Food Management System (FMS)",
    icon: <Utensils className="w-8 h-8 text-pink-400" />,
    summary:
      "Responsive food CMS with admin & user portals: recipe CRUD, categories, search/filters, and favorites.",
    details:
      "A feature-rich food management platform splitting the experience between Admin and User portals. Admins handle secure auth, recipe CRUD, category management, pagination, and user oversight. Users can register, browse, and search with advanced filters, then save favorites and manage their accounts. The app focuses on secure flows and fast interactions with a clean layout. Built using Vite, React Router, JWT Decode, Axios, React Hook Form, Toastify, Bootstrap, and React Pro Sidebar, and hosted on Netlify for quick deployments.",
    skills: [
      "React",
      "Vite",
      "React Router",
      "JWT Decode",
      "Axios",
      "React Hook Form",
      "React Toastify",
      "Bootstrap",
      "React Pro Sidebar",
      "Font Awesome",
      "Netlify Hosting",
    ],
    live: "https://lnkd.in/dxTEgWWe",
    repo: "https://github.com/abdelrhmanCodeCraft/Food-Managment",
  },
  {
    id: 4,
    title: "QuickBuy E-commerce",
    icon: <ShoppingCart className="w-8 h-8 text-yellow-400" />,
    summary:
      "End-to-end e-commerce with multi-page flow, OTP auth, API integration, cart, and Redux state.",
    details:
      "QuickBuy is a comprehensive e-commerce experience covering browsing, product details, cart, and checkout flows. It integrates with a real API for data operations and uses OTP-based authentication for secure sign-ins. Redux centralizes state for predictable, real-time UI updates across pages. The architecture aims for clarity and scalability, keeping the codebase easy to extend with new features like orders/wishlists later.",
    skills: ["React", "Redux", "REST APIs", "OTP Authentication"],
    repo: "https://github.com/abdelrhmanCodeCraft/QuickBuyTest",
  },
];

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="relative w-full bg-black py-20 px-6 md:px-12 lg:px-24">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-white inline-block relative">
          Featured{" "}
          <span className="bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
            Projects
          </span>
          <span className="block h-[3px] w-24 mx-auto mt-3 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full"></span>
        </h2>
        <p className="text-neutral-400 mt-3">
          A collection of projects that showcase my skills and passion for
          development
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            whileHover={{ y: -8, scale: 1.02 }}
            className="relative p-6 rounded-2xl shadow-xl bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 border border-neutral-700 cursor-pointer transition-all duration-300 hover:shadow-[0_0_25px_rgba(168,85,247,0.4)]"
            onClick={() => setSelectedProject(project)}
          >
            {/* Header */}
            <div className="flex items-center gap-3 mb-4">
              {project.icon}
              <h3 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
                {project.title}
              </h3>
            </div>

            <p
              className="text-neutral-300 mb-4 text-sm"
              style={{
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }}
              title={project.summary}
            >
              {project.summary}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.skills.slice(0, 4).map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-xs rounded-full bg-neutral-800 border border-neutral-600 text-neutral-300"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex gap-3">
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  className="flex-1 text-center text-sm px-4 py-2 rounded-lg bg-neutral-900 border border-neutral-700 text-white hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 transition"
                >
                  Live Demo
                </a>
              )}
              {project.repo && (
                <a
                  href={project.repo}
                  target="_blank"
                  className="flex-1 text-center text-sm px-4 py-2 rounded-lg bg-neutral-900 border border-neutral-700 text-white hover:bg-gradient-to-r hover:from-green-500 hover:to-teal-400 transition"
                >
                  GitHub
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
