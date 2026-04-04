import { motion, MotionValue } from "motion/react";

import { Space } from "@/components/common";
import { useState } from "react";
import MobileContentsTitles from "./MobileContentsTitles";
import MobileScrollBarDecor from "./MobileScrollBarDecor";

type Props = {
  y: MotionValue<number>;
};

const descriptions = [
  "명확한 커뮤니케이션을 통해서\n고객의 상상을 현실로 만드는 기획을 합니다.",
  "업종 별 트렌드 분석을 통해\n타깃 고객에게 매력적인 디자인을 합니다.",
  "향후 유지보수를 고려하여\n탄탄한 설계와 품질 높은 코드를 보장합니다.",
  "고객분들의 안정적인 시작을 위해\n빠른 대응과 180일의 하자보수를 지원합니다.",
];

export default function MobileContents({ y }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="hidden max-[838px]:block">
      <div className="relative flex w-full flex-col items-center">
        <MobileScrollBarDecor y={y} />

        <Space height="2rem" />

        <MobileContentsTitles
          y={y}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
      </div>

      <Space height="2rem" />

      {descriptions.map((description, index) => (
        <motion.p
          key={index}
          className={`font-wanted-sans text-center font-medium whitespace-pre-line text-white/80 ${index === 3 ? "pb-[30px]" : ""}`}
          style={{ fontSize: 'clamp(14px, 2.4vh, 1.5rem)' }}
          initial={{
            opacity: activeIndex === index ? 100 : 0,
            height: activeIndex === index ? (index === 3 ? 78 : 48) : 0,
          }}
          animate={{
            opacity: activeIndex === index ? 100 : 0,
            height: activeIndex === index ? (index === 3 ? 78 : 48) : 0,
          }}
        >
          {description}
        </motion.p>
      ))}
    </div>
  );
}
