"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";

const demoTopics = [
  {
    id: "html",
    name: "HTML",
    position: { x: 10, y: 20 },
    color: "url(#grad1)",
    highlighted: true,
  },
  {
    id: "css",
    name: "CSS",
    position: { x: 10, y: 35 },
    color: "url(#grad2)",
    highlighted: true,
  },
  {
    id: "js",
    name: "JavaScript",
    position: { x: 10, y: 50 },
    color: "url(#grad3)",
    highlighted: true,
  },
  {
    id: "react",
    name: "React",
    position: { x: 10, y: 65 },
    color: "url(#grad4)",
    highlighted: true,
  },
  {
    id: "next",
    name: "Next.js",
    position: { x: 90, y: 20 },
    color: "url(#grad6)",
    highlighted: true,
  },
  {
    id: "ts",
    name: "TypeScript",
    position: { x: 90, y: 35 },
    color: "url(#grad7)",
    highlighted: true,
  },
  {
    id: "git",
    name: "Git & GitHub",
    position: { x: 90, y: 50 },
    color: "url(#grad8)",
    highlighted: true,
  },
  {
    id: "tailwind",
    name: "TailwindCSS",
    position: { x: 90, y: 65 },
    color: "url(#grad5)",
    highlighted: true,
  },
];

function RadialFlow({ topics, badgeName, centralDotColor = "#FFFFFF" }) {
  const containerRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const updateDimensions = useCallback(() => {
    if (containerRef.current) {
      setDimensions({
        width: containerRef.current.offsetWidth,
        height: containerRef.current.offsetHeight,
      });
    }
  }, []);

  useEffect(() => {
    updateDimensions();
    const resizeObserver = new ResizeObserver(() =>
      requestAnimationFrame(updateDimensions)
    );
    if (containerRef.current) resizeObserver.observe(containerRef.current);
    return () => resizeObserver.disconnect();
  }, [updateDimensions]);

  const getLabelPosition = useCallback((position) => position, []);

  const getPathData = useCallback(
    (topic) => {
      if (!dimensions.width || !dimensions.height) return "";
      const centerX = dimensions.width / 2;
      const centerY = dimensions.height / 2;
      const pos = getLabelPosition(topic.position);
      const x = (pos.x / 100) * dimensions.width;
      const y = (pos.y / 100) * dimensions.height;
      const controlX =
        pos.x < 50 ? x + (centerX - x) * 0.75 : x - (x - centerX) * 0.75;
      return `M ${x} ${y} Q ${controlX} ${y} ${centerX} ${centerY}`;
    },
    [dimensions, getLabelPosition]
  );

  const generateParticles = useCallback(
    (topic) => {
      if (!topic.highlighted) return null;
      const pathData = getPathData(topic);
      const eggWidth = 14;
      const eggHeight = 8;
      return (
        <motion.g key={`particle-${topic.id}`}>
          <motion.path
            d={`M -${eggWidth / 2} 0 
             a ${eggWidth / 2} ${eggHeight / 2} 0 1 0 ${eggWidth} 0 
             a ${eggWidth / 2} ${eggHeight / 2} 0 1 0 -${eggWidth} 0`}
            fill={topic.color}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: [0, 0.8, 0], scale: [0.8, 1.2, 0.8] }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              repeatDelay: 1,
              times: [0, 0.5, 1],
            }}
          >
            <animateMotion
              dur="3.5s"
              repeatCount="indefinite"
              path={pathData}
              rotate="auto"
            />
          </motion.path>
        </motion.g>
      );
    },
    [getPathData]
  );

  const getTopicLabelClasses = useCallback(
    (topic) =>
      `absolute transform -translate-x-1/2 -translate-y-1/2 text-white rounded-md 
       px-2 sm:px-3 py-1.5 sm:py-2 text-[10px] sm:text-xs md:text-sm backdrop-blur-sm
       ${
         topic.highlighted
           ? "bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 shadow-md"
           : "bg-gray-800/80 border border-gray-700"
       }`,
    []
  );

  const getLabelStyle = useCallback(
    (topic) => ({
      left: `${getLabelPosition(topic.position).x}%`,
      top: `${getLabelPosition(topic.position).y}%`,
      maxWidth: "200px",
      lineHeight: "1.2",
    }),
    [getLabelPosition]
  );

  return (
    <>
      {isMobile ? (
        // ✅ Mobile view
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          {topics.map((topic) => (
            <motion.div
              key={topic.id}
              className="p-3 sm:p-4 rounded-xl text-center text-white font-semibold text-sm sm:text-base bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              {topic.name}
            </motion.div>
          ))}
        </div>
      ) : (
        // ✅ Large screens (radial view)
        <div
          ref={containerRef}
          className="w-full h-full relative overflow-hidden min-h-[350px] sm:min-h-[400px] md:min-h-[500px]"
        >
          <div className="absolute left-1/2 top-[45%] sm:top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 mb-6 sm:mb-8">
            <Badge>{badgeName}</Badge>
          </div>
          {dimensions.width > 0 && (
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
            >
              <defs>
                <linearGradient id="grad1">
                  <stop offset="0%" stopColor="#FF6B6B" />
                  <stop offset="100%" stopColor="#FFD93D" />
                </linearGradient>
                <linearGradient id="grad2">
                  <stop offset="0%" stopColor="#4FACFE" />
                  <stop offset="100%" stopColor="#00F2FE" />
                </linearGradient>
                <linearGradient id="grad3">
                  <stop offset="0%" stopColor="#F7971E" />
                  <stop offset="100%" stopColor="#FFD200" />
                </linearGradient>
                <linearGradient id="grad4">
                  <stop offset="0%" stopColor="#00C6FF" />
                  <stop offset="100%" stopColor="#0072FF" />
                </linearGradient>
                <linearGradient id="grad5">
                  <stop offset="0%" stopColor="#06B6D4" />
                  <stop offset="100%" stopColor="#3B82F6" />
                </linearGradient>
                <linearGradient id="grad6">
                  <stop offset="0%" stopColor="#9333EA" />
                  <stop offset="100%" stopColor="#F43F5E" />
                </linearGradient>
                <linearGradient id="grad7">
                  <stop offset="0%" stopColor="#3178C6" />
                  <stop offset="100%" stopColor="#60A5FA" />
                </linearGradient>
                <linearGradient id="grad8">
                  <stop offset="0%" stopColor="#F87171" />
                  <stop offset="100%" stopColor="#FBBF24" />
                </linearGradient>
              </defs>
              {topics.map((topic) => (
                <path
                  key={`path-${topic.id}`}
                  d={getPathData(topic)}
                  stroke={topic.highlighted ? "#fff" : "#374151"}
                  strokeWidth="1"
                  strokeOpacity={topic.highlighted ? 0.4 : 0.2}
                  fill="none"
                />
              ))}
              {topics.map((topic) => generateParticles(topic))}
              <motion.circle
                cx={dimensions.width / 2}
                cy={dimensions.height / 2}
                r="6"
                fill={centralDotColor}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              />
            </svg>
          )}
          {topics.map((topic) => (
            <div
              key={`label-${topic.id}`}
              className={getTopicLabelClasses(topic)}
              style={getLabelStyle(topic)}
            >
              {topic.name}
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default function SkillsSection() {
  return (
    <section id="skills" className="relative w-full bg-black py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-24">
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white inline-block relative mb-3">
          Skills
        </h2>
        <p className="text-gray-400 mb-3">My Source of creativity.</p>
        <span className="block h-[3px] w-16 sm:w-20 md:w-24 mx-auto mt-2 sm:mt-3 bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 rounded-full"></span>
      </div>
      <RadialFlow
        topics={demoTopics}
        badgeName="Frontend Developer"
        centralDotColor="#FFFFFF"
      />
    </section>
  );
}

function Badge({ children }) {
  return (
    <span className="px-2 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm md:text-base font-semibold text-white bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 rounded-full shadow-md">
      {children}
    </span>
  );
}
