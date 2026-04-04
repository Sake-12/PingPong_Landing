"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { GradientLabel } from "@/components/ui/styled";
import { cn } from "@/lib/utils";

const categories = ["All", "Web", "App", "Design"];

const projects = [
  {
    id: 1,
    title: "AI 기반 스마트 팩토리 플랫폼",
    category: "Web",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    gradient: "from-[#0a2a1f] to-[#0a0a0a]",
    size: "large",
  },
  {
    id: 2,
    title: "라이프스타일 커머스 앱",
    category: "App",
    tags: ["React Native", "Firebase"],
    gradient: "from-[#1a0a2a] to-[#0a0a0a]",
    size: "medium",
  },
  {
    id: 3,
    title: "금융 핀테크 대시보드",
    category: "Web",
    tags: ["React", "D3.js", "Node.js"],
    gradient: "from-[#0a1a2a] to-[#0a0a0a]",
    size: "medium",
  },
  {
    id: 4,
    title: "브랜드 아이덴티티 리뉴얼",
    category: "Design",
    tags: ["Branding", "UI/UX"],
    gradient: "from-[#2a1a0a] to-[#0a0a0a]",
    size: "small",
  },
  {
    id: 5,
    title: "글로벌 여행 예약 서비스",
    category: "Web",
    tags: ["Next.js", "GraphQL"],
    gradient: "from-[#0a2a2a] to-[#0a0a0a]",
    size: "medium",
  },
  {
    id: 6,
    title: "헬스케어 모니터링 시스템",
    category: "App",
    tags: ["Flutter", "IoT"],
    gradient: "from-[#1a1a0a] to-[#0a0a0a]",
    size: "small",
  },
];

export function Portfolio({ limit }: { limit?: number }) {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = projects
    .filter(
      (project) =>
        activeCategory === "All" || project.category === activeCategory
    )
    .slice(0, limit);

  return (
    <Section id="portfolio" className="bg-black">
      {/* Filter Tabs */}
      {!limit && (
        <>
          <div className="text-center mb-16">
            <GradientLabel className="text-xl">
              Portfolio
            </GradientLabel>
            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
              프로젝트
            </h2>
          </div>

          <div className="flex justify-center gap-2 mb-12 px-4 flex-wrap">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-6 py-2 rounded-full typo-body font-medium transition-all duration-300 border cursor-pointer",
                  activeCategory === category
                    ? "bg-gradient-to-r from-[#1AFFD1] to-[#A0FF1B] border-transparent text-[#0C120E]"
                    : "bg-transparent border-white/10 text-white/80 hover:text-white/80 hover:border-white/20"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </>
      )}

      {/* Project Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className={cn(
                "group relative overflow-hidden rounded-2xl border border-white/5 aspect-[4/3]",
                project.size === "large" && "lg:col-span-2 lg:aspect-video"
              )}
            >
              {/* Gradient Background */}
              <div
                className={cn(
                  "absolute inset-0 bg-gradient-to-br transition-transform duration-700 group-hover:scale-105",
                  project.gradient
                )}
              />

              {/* Content - always visible */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                <span className="text-[#1AFFD1] typo-body font-semibold mb-2 uppercase tracking-wider">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-white mb-3">
                  {project.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="typo-body px-3 py-1 rounded-full border border-white/10 text-white/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </Section>
  );
}
