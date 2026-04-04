"use client";

import { motion, MotionValue, useTransform } from "motion/react";

type Props = {
  y: MotionValue<number>;
};

export default function ScrollBarDecor({ y }: Props) {
  const marginTop = useTransform(
    y,
    [0, 1, 2, 3],
    ["0rem", "3.125rem", "6.25rem", "9.375rem"],
  );
  const trackColor = useTransform(
    y,
    [0, 1, 2, 3],
    ["#223C05", "#0E3D05", "#053D1C", "#053D31"],
  );
  const color = useTransform(
    y,
    [0, 1, 2, 3],
    ["#99FE22", "#72FF59", "#49FF91", "#1BFFCF"],
  );
  const slideHeight = useTransform(
    y,
    [0, 1, 2, 3],
    ["25%", "50%", "75%", "100%"],
  );

  return (
    <motion.div
      className="h-40 w-2 rounded-full bg-[#223C05]"
      style={{ backgroundColor: trackColor, marginTop: marginTop }}
    >
      <motion.div
        className="w-2 rounded-full bg-[#99FE22]"
        style={{ backgroundColor: color, height: slideHeight }}
      />
    </motion.div>
  );
}
