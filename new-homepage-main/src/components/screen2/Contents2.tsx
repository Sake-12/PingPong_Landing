"use client";

import { motion, MotionValue, useTransform } from "motion/react";

type Props = {
  y: MotionValue<number>;
};

export default function Contents2({ y }: Props) {
  const 디자인fontSize = useTransform(
    y,
    [0, 1, 2],
    ["1.75rem", "2rem", "1.75rem"],
  );
  const 디자인textColor = useTransform(
    y,
    [0, 1, 2],
    ["#FFFFFF66", "#FFFFFF", "#FFFFFF66"],
  );
  const 디자인과설명사이height = useTransform(y, [0, 1, 2], [0, 20, 0]);
  const 디자인설명height = useTransform(y, [0, 1, 2], [0, 56, 0]);

  return (
    <>
      <motion.p
        className="font-wanted-sans text-[1.75rem] font-bold text-white/80"
        style={{
          fontSize: 디자인fontSize,
          color: 디자인textColor,
        }}
      >
        디자인
      </motion.p>

      <motion.div style={{ height: 디자인과설명사이height }} />

      <motion.p
        className="font-wanted-sans overflow-hidden text-xl font-medium text-white/80"
        style={{
          height: 디자인설명height,
        }}
      >
        업종 별 트렌드 분석을 통해
        <br />
        타깃 고객에게 매력적인 디자인을 합니다.
      </motion.p>
    </>
  );
}
