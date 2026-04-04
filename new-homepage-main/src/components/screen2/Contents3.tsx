import { motion, MotionValue, useTransform } from "motion/react";

type Props = {
  y: MotionValue<number>;
};

export default function Contents3({ y }: Props) {
  const 개발fontSize = useTransform(
    y,
    [1, 2, 3],
    ["1.75rem", "2rem", "1.75rem"],
  );
  const 개발textColor = useTransform(
    y,
    [1, 2, 3],
    ["#FFFFFF66", "#FFFFFF", "#FFFFFF66"],
  );
  const 개발과설명사이height = useTransform(y, [1, 2, 3], [0, 20, 0]);
  const 개발설명height = useTransform(y, [1, 2, 3], [0, 56, 0]);

  return (
    <>
      <motion.p
        className="font-wanted-sans text-[1.75rem] font-bold text-white/80"
        style={{ fontSize: 개발fontSize, color: 개발textColor }}
      >
        개발
      </motion.p>

      <motion.div style={{ height: 개발과설명사이height }} />

      <motion.p
        className="font-wanted-sans overflow-hidden text-xl font-medium text-white/80"
        style={{
          height: 개발설명height,
        }}
      >
        향후 유지보수를 고려하여
        <br />
        탄탄한 설계와 품질 높은 코드를 보장합니다.
      </motion.p>
    </>
  );
}
