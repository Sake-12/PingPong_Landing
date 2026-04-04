"use client";

import { animate } from "motion";
import { MotionValue, useScroll } from "motion/react";
import { useEffect, useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ScrollSnapedContainer } from "../common";
import Screen2WholeContents from "./Screen2WholeContents";

const y = new MotionValue(0);

export default function Screen2() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    // 이전 spring 애니메이션 제어용
    let currentAnimation: ReturnType<typeof animate> | null = null;
    let isSnapDisabled = false;

    // scrollYProgress (0→1) maps to y (0→3) via Math.round(value * 3)
    // With 4 snap sections, each snap step advances ~0.25 of progress = 1 step of y
    const completeUnsubscribe = scrollYProgress.on("change", (value) => {
      // 빠른 스크롤 시 이전 spring 애니메이션 취소
      if (currentAnimation) {
        currentAnimation.stop();
      }
      currentAnimation = animate(y, Math.round(value * 3), {
        type: "spring",
        stiffness: 300,
        damping: 50,
      });

      // snap 해제를 scrollYProgress에서 직접 판단 (spring 딜레이 없이 즉시 반응)
      // scrollYProgress ≥ 0.92 → 마지막 snap point(4번째) 완전 도달 → snap 해제
      // scrollYProgress < 0.75 → 3번째 스텝 이하로 내려가야 snap 복원 (히스테리시스)
      const html = document.querySelector("html");
      if (value >= 0.92 && !isSnapDisabled) {
        isSnapDisabled = true;
        html?.classList.add("!snap-none");
      } else if (value < 0.75 && isSnapDisabled) {
        isSnapDisabled = false;
        html?.classList.remove("!snap-none");
      }
    });

    return () => {
      completeUnsubscribe();
      if (currentAnimation) currentAnimation.stop();
      // cleanup: snap 복원
      const html = document.querySelector("html");
      html?.classList.remove("!snap-none");
    };
  }, [scrollYProgress]);

  return (
    <div className="relative" ref={ref}>
      {/* 4 empty 100vh snap points — one per animation step (기획→디자인→개발→운영) */}
      <ScrollSnapedContainer className="section snap-center snap-always" />
      <ScrollSnapedContainer className="section snap-center snap-always" />
      <ScrollSnapedContainer className="section snap-center snap-always" />
      <ScrollSnapedContainer className="section snap-center snap-always" />

      {/* Actual content is absolutely positioned and sticky */}
      <div className="absolute inset-0 h-full">
        <div className="sticky top-16 h-[calc(100vh-4rem)] overflow-hidden">
          <Screen2WholeContents y={y} />
        </div>
      </div>
    </div>
  );
}
