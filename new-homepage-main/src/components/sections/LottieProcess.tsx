"use client";

import React, { useEffect, useRef, useState } from "react";
import lottie, { AnimationItem } from "lottie-web";
import { motion, useScroll, useTransform } from "framer-motion";
import { Section } from "@/components/ui/Section";

// Import local JSONs (Next.js handles import of JSON as object)
import penAnimationData from "@/lotties/pen.json";
import websiteAnimationData from "@/lotties/website.json";
import website2AnimationData from "@/lotties/website2.json";

export function LottieProcess() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Example transforms based on scroll progress
  // Adjust these ranges to control when animations trigger relative to the section's visibility
  const penProgress = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const webProgress = useTransform(scrollYProgress, [0.3, 0.6], [0, 1]);
  const web2Progress = useTransform(scrollYProgress, [0.6, 1], [0, 1]);

  return (
    <Section className="bg-gray-50 overflow-hidden" id="process">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Process</h2>
        <p className="text-gray-600">From concept to deployment, we handle it all.</p>
      </div>

      <div ref={containerRef} className="relative flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 min-h-[600px]">
        {/* Step 1: Pen/Design */}
        <ProcessStep
          animationData={penAnimationData}
          title="Planning & Design"
          description="We conceptualize your idea with precision."
          delay={0}
        />

        {/* Arrow or Connector could go here */}

        {/* Step 2: Website/Development */}
        <ProcessStep
          animationData={websiteAnimationData}
          title="Development"
          description="Robust development using modern tech stacks."
          delay={0.2}
        />

        {/* Step 3: Website2/Launch */}
        <ProcessStep
          animationData={website2AnimationData}
          title="Launch & Operate"
          description="Seamless deployment and ongoing support."
          delay={0.4}
        />
      </div>
    </Section>
  );
}

interface ProcessStepProps {
  animationData: any;
  title: string;
  description: string;
  delay: number;
}

function ProcessStep({ animationData, title, description, delay }: ProcessStepProps) {
  const container = useRef<HTMLDivElement>(null);
  const anim = useRef<AnimationItem | null>(null);

  useEffect(() => {
    if (container.current) {
        // Destroy potential previous instance to avoid duplication
      if (anim.current) {
          anim.current.destroy();
      }
      
      anim.current = lottie.loadAnimation({
        container: container.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: animationData,
      });
    }

    return () => {
      anim.current?.destroy();
    };
  }, [animationData]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay }}
      className="flex flex-col items-center text-center max-w-xs"
    >
      <div
        ref={container}
        className="w-48 h-48 md:w-64 md:h-64 mb-6"
      />
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-base text-gray-600">{description}</p>
    </motion.div>
  );
}
