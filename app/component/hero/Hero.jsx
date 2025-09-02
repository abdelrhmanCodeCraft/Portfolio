"use client";

import { BackgroundPaths } from "./BackgroundPaths";

export default function BackgroundPathsDemo() {
  return (
    <div
      className="relative w-full flex flex-col px-4 
                 pt-20 md:pt-32 lg:pt-40 pb-12 
                 md:min-h-screen space-y-8" 
    >
      <div className="hidden md:block absolute inset-0 w-full h-full -z-10">
        <BackgroundPaths />
      </div>

      <div>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-center tracking-tight text-white">
          Hi, Im{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-200 via-blue-500 to-purple-500">
            Abdelrhman Samy
          </span>{" "}
          <span className="text-yellow-400">👋</span>
        </h2>
      </div>

      <div>
        <p className="max-w-xl mx-auto text-base md:text-lg text-center text-neutral-100">
          Passionate about building real-world projects and solving problems
          with code.
        </p>
      </div>

      {/* CTA buttons */}
      <div>
        <div className="flex flex-wrap justify-center gap-4 mt-4">
          <a
            href="https://github.com/abdelrhmanCodeCraft"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 rounded-full font-medium text-white bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 hover:opacity-90 transition"
          >
            View My Work
          </a>

          <a
            href="/Abdelrhman Samy-Front End Developer.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 rounded-full font-medium border border-neutral-400 dark:border-neutral-600 text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition"
          >
            View Resume
          </a>
        </div>
      </div>

      {/* Stats */}
      <div className="flex flex-wrap justify-center gap-8 sm:gap-12 text-center mt-10">
        <div className="max-w-fit">
          <p className="text-3xl md:text-4xl font-bold text-white">4+</p>
          <p className="text-sm md:text-sm text-neutral-100">Projects Built</p>
        </div>
        <div className="max-w-fit">
          <p className="text-3xl md:text-4xl font-bold text-white">8</p>
          <p className="text-sm md:text-sm text-neutral-100">Technologies</p>
        </div>
        <div className="max-w-fit">
          <p className="text-3xl md:text-4xl font-bold text-white">1+</p>
          <p className="text-sm md:text-sm text-neutral-100">Years Learning</p>
        </div>
        <div className="max-w-fit">
          <p className="text-3xl md:text-4xl font-bold text-white">∞</p>
          <p className="text-sm md:text-sm text-neutral-100">Curiosity</p>
        </div>
      </div>
    </div>
  );
}
