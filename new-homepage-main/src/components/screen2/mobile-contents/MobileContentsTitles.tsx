import { motion, MotionValue, useTransform } from "motion/react";
import { Dispatch, SetStateAction, useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { twMerge } from "tailwind-merge";
import ChangeSlide from "./ChangeSlide";

const texts = ["서비스 기획", "디자인", "개발", "운영"];

type Props = {
  y: MotionValue<number>;
  activeIndex: number;
  setActiveIndex: Dispatch<SetStateAction<number>>;
};

export default function MobileContentsTitles({
  y,
  activeIndex,
  setActiveIndex,
}: Props) {
  const fontSizeList = useFontSizeList(y);
  const textColorList = useTextColorList(y);

  return (
    <Swiper
      centeredSlides
      slidesPerView="auto"
      spaceBetween={6}
      allowTouchMove={false}
      onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
      onSwiper={(swiper) => setActiveIndex(swiper.activeIndex)}
      wrapperClass="items-center w-full"
      className="h-10 w-full items-center"
    >
      <ChangeSlide y={y} />
      {texts.map((text, index) => (
        <SwiperSlide
          key={text}
          className={twMerge(
            // 참고: transition에 !important를 단 이유는 우선순위가 제일 높은 .swiper-slide에서 transition-property를 사용하고 있어서임
            "!flex items-center !transition-[padding-left,padding-right,color,scale,transform]",
          )}
          style={{
            width: "min-content",
            wordBreak: "keep-all",
            whiteSpace: "nowrap",
          }}
        >
          <motion.p
            className={twMerge(
              "font-wanted-sans w-fit text-[1.75rem] font-semibold text-white/80",
              activeIndex === index && "text-white",
            )}
            style={{
              fontSize: fontSizeList[index],
              color: textColorList[index],
            }}
          >
            {text}
          </motion.p>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

const inactiveSize = "clamp(1rem, 2.2vh, 1.375rem)";
const activeSize = "clamp(1.25rem, 2.8vh, 1.75rem)";

export function useFontSizeList(y: MotionValue<number>) {
  const 서비스기획fontSize = useTransform(
    y,
    [0, 1],
    [activeSize, inactiveSize],
  );
  const 디자인fontSize = useTransform(
    y,
    [0, 1, 2],
    [inactiveSize, activeSize, inactiveSize],
  );
  const 개발fontSize = useTransform(
    y,
    [1, 2, 3],
    [inactiveSize, activeSize, inactiveSize],
  );
  const 운영fontSize = useTransform(y, [2, 3], [inactiveSize, activeSize]);

  return useMemo(
    () => [서비스기획fontSize, 디자인fontSize, 개발fontSize, 운영fontSize],
    [개발fontSize, 디자인fontSize, 서비스기획fontSize, 운영fontSize],
  );
}

export function useTextColorList(y: MotionValue<number>) {
  const 서비스기획textColor = useTransform(y, [0, 1], ["#FFFFFF", "#FFFFFF66"]);
  const 디자인textColor = useTransform(
    y,
    [0, 1, 2],
    ["#FFFFFF66", "#FFFFFF", "#FFFFFF66"],
  );
  const 개발textColor = useTransform(
    y,
    [1, 2, 3],
    ["#FFFFFF66", "#FFFFFF", "#FFFFFF66"],
  );
  const 운영textColor = useTransform(y, [2, 3], ["#FFFFFF66", "#FFFFFF"]);

  return useMemo(
    () => [서비스기획textColor, 디자인textColor, 개발textColor, 운영textColor],
    [개발textColor, 디자인textColor, 서비스기획textColor, 운영textColor],
  );
}
