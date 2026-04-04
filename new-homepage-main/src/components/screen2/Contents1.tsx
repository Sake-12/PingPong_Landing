"use client";

import { motion, MotionValue, useTransform } from "motion/react";

type Props = {
  y: MotionValue<number>;
};

export default function Contents1({ y }: Props) {
  const 서비스기획fontSize = useTransform(y, [0, 1], ["2rem", "1.75rem"]);
  const 서비스기획textColor = useTransform(y, [0, 1], ["#FFFFFF", "#FFFFFF66"]);

  const 서비스기회과설명사이height = useTransform(y, [0, 1], [20, 0]);
  const 서비스기획설명height = useTransform(y, [0, 1], [56, 0]);

  return (
    <>
      <motion.p
        className="font-wanted-sans overflow-hidden font-bold text-white"
        style={{
          fontSize: 서비스기획fontSize,
          color: 서비스기획textColor,
        }}
      >
        서비스 기획
      </motion.p>

      <motion.div style={{ height: 서비스기회과설명사이height }} />

      <motion.p
        className="font-wanted-sans overflow-hidden text-xl font-medium text-white/80"
        style={{
          height: 서비스기획설명height,
        }}
      >
        명확한 커뮤니케이션을 통해서
        <br />
        고객의 상상을 현실로 만드는 기획을 합니다.
      </motion.p>
    </>
  );
}
