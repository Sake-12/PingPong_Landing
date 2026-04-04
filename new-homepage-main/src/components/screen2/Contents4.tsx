import { motion, MotionValue, useTransform } from "motion/react";

type Props = {
  y: MotionValue<number>;
};

export default function Contents4({ y }: Props) {
  const 운영fontSize = useTransform(y, [2, 3], ["1.75rem", "2rem"]);
  const 운영textColor = useTransform(y, [2, 3], ["#FFFFFF66", "#FFFFFF"]);
  const 운영과설명사이height = useTransform(y, [2, 3], [0, 20]);
  const 운영설명height = useTransform(y, [2, 3], [0, 56]);

  return (
    <>
      <motion.p
        className="font-wanted-sans text-[1.75rem] font-bold text-white/80"
        style={{ fontSize: 운영fontSize, color: 운영textColor }}
      >
        운영
      </motion.p>

      <motion.div style={{ height: 운영과설명사이height }} />

      <motion.p
        className="font-wanted-sans overflow-hidden text-xl font-medium text-white/80"
        style={{
          height: 운영설명height,
        }}
      >
        고객분들의 안정적인 시작을 위해
        <br />
        빠른 대응과 180일의 하자보수를 지원합니다.
      </motion.p>
    </>
  );
}
