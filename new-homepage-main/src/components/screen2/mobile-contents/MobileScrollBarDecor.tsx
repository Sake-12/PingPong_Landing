import { motion, MotionValue, useTransform } from "motion/react";

type Props = {
  y: MotionValue<number>;
};

export default function MobileScrollBarDecor({ y }: Props) {
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
  const spaceLeftWidth = useTransform(
    y,
    [0, 1, 2, 3],
    ["0%", "25%", "50%", "75%"],
  );

  return (
    <motion.div
      className="flex h-4 w-100 rounded-full bg-[#223C05]"
      style={{ backgroundColor: trackColor }}
    >
      <motion.div style={{ width: spaceLeftWidth }} />
      <motion.div
        className="h-4 w-1/4 rounded-full bg-[#99FE22]"
        style={{ backgroundColor: color }}
      />
    </motion.div>
  );
}
