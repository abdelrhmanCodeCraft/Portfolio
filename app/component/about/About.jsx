"use client";

export default function AboutSection() {
  return (
    <section id="about" className="relative w-full bg-black py-20 px-6 md:px-12 lg:px-24">
      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-white inline-block relative">
          About Me
          <span className="block h-[3px] w-24 mx-auto mt-3 bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 rounded-full"></span>
        </h2>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <p className="text-lg md:text-xl text-neutral-300 leading-relaxed">
          I’m a dedicated{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 font-semibold">
            Frontend Developer
          </span>{" "}
          with{" "}
          <span className="text-yellow-300 font-semibold">
            1 year of solid experience
          </span>
          , built through intensive training at a professional academy and
          refined further by working on{" "}
          <span className="text-green-300 font-semibold">
            freelance projects
          </span>
          .
        </p>

        <p className="text-lg md:text-xl text-neutral-300 leading-relaxed">
          What excites me the most is{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-500 font-semibold">
            transforming ideas into interactive experiences
          </span>
          . I believe in writing{" "}
          <span className="text-green-300 font-semibold">
            clean, maintainable code
          </span>{" "}
          and delivering{" "}
          <span className="text-blue-400 font-semibold">
            pixel-perfect designs
          </span>{" "}
          that stand out. With a constant hunger for growth, I’m always
          exploring modern frameworks and pushing my skills to the next level.
        </p>
      </div>

      {/* Traits Section */}
      <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
        <div className="p-6 rounded-2xl bg-gradient-to-br from-green-400 via-blue-500 to-purple-500 shadow-lg">
          <h3 className="text-2xl font-bold text-white">Focused</h3>
          <p className="text-neutral-100 mt-2 text-sm">
            Striving for excellence in every project.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-gradient-to-br from-pink-400 to-purple-500 shadow-lg">
          <h3 className="text-2xl font-bold text-white">Versatile</h3>
          <p className="text-neutral-100 mt-2 text-sm">
            Able to adapt quickly to client needs and new tech.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 shadow-lg">
          <h3 className="text-2xl font-bold text-white">Driven</h3>
          <p className="text-neutral-100 mt-2 text-sm">
            Always motivated to learn and evolve.
          </p>
        </div>
      </div>
    </section>
  );
}
