"use client";

import { motion, MotionValue, useTransform } from "motion/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ScrollBarDecor, Space } from "../common";
import { GradientLabel, SectionTitle } from "@/components/ui/styled";
import AnimationContents from "./AnimationContents";
import Contents1 from "./Contents1";
import Contents2 from "./Contents2";
import Contents3 from "./Contents3";
import Contents4 from "./Contents4";
import MobileContents from "./mobile-contents";
import AnimationMobileContents, { useLottieScale } from "./mobile-contents/AnimationMobileContents";

type Props = { y: MotionValue<number> };

export default function Screen2WholeContents({ y }: Props) {
  const lottieScale = useLottieScale();
  const 서비스기획설명과디자인사이height = useTransform(y, [0, 1], [66, 8]);

  const 디자인설명과개발사이height = useTransform(y, [0, 1, 2], [8, 66, 8]);

  const 개발설명과운영사이height = useTransform(y, [1, 2, 3], [8, 66, 8]);

  return (
    <div className="mx-auto flex h-[calc(100vh-5rem)] w-full max-w-[93.75rem] items-center justify-between gap-10 px-10 max-[838px]:px-5">
      <div className="flex h-[calc(100vh-5rem)] w-full flex-col max-[838px]:items-center">
        <Space className="max-[838px]:hidden" flexGrow={100} />

        <div className="min-[680px]:mt-12 min-[898px]:mt-0">
          <GradientLabel className="max-[838px]:my-2 ">
            업무 범위
          </GradientLabel>
        </div>

        <Space className="hidden max-[838px]:block" height="8px" />

        <SectionTitle
          className="text-left max-[838px]:text-center max-[838px]:text-[clamp(16px,2.5vh,24px)]"
          style={{ fontSize: 'clamp(24px, 3.1vw, 38.7px)' }}
        >
          성공의 시작,
          <br />
          Code021이 0에서부터 같이{" "}
          <br className="md:hidden" />
          하겠습니다.
        </SectionTitle>

        <Space className="max-[838px]:hidden" flexGrow={48} />
        <Space className="hidden max-[838px]:block" height="12px" />
        <div className="flex gap-5 max-[838px]:hidden">
          <ScrollBarDecor y={y} />

          <div className="flex flex-col">
            <Contents1 y={y} />
            <motion.div style={{ height: 서비스기획설명과디자인사이height }} />
            <Contents2 y={y} />
            <motion.div style={{ height: 디자인설명과개발사이height }} />
            <Contents3 y={y} />
            <motion.div style={{ height: 개발설명과운영사이height }} />
            <Contents4 y={y} />
          </div>
        </div>

        {/* <Space className="hidden min-[680px]:max-[898px]:block" height="100px" /> */}

        <MobileContents y={y} />

        <Space className="max-[838px]:hidden" flexGrow={100} />

        <Space className="hidden max-[838px]:block" height="32px" />

        <div
          className="hidden min-h-0 flex-1 flex-col items-center justify-start max-[838px]:flex overflow-hidden"
          style={{ maxHeight: `${42.5 * lottieScale}rem` }}
        >
          <div
            style={{
              height: '42.5rem',
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              transform: `scale(${lottieScale})`,
              transformOrigin: 'top center',
              willChange: 'transform',
            }}
          >
            <AnimationMobileContents y={y} />
          </div>
        </div>
      </div>

      <div className="flex w-[42.5rem] shrink-0 flex-col items-center max-[838px]:hidden">
        <AnimationContents y={y} />
      </div>
    </div>
  );
}
