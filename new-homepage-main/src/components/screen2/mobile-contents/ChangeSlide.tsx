import { MotionValue } from "motion";
import { useEffect } from "react";
import { useSwiper } from "swiper/react";

type Props = {
  y: MotionValue<number>;
};

export default function ChangeSlide({ y }: Props) {
  const swiper = useSwiper();

  useEffect(() => {
    y.on("change", (value) => {
      swiper.slideTo(Math.round(value), 1000);
    });
  }, [y, swiper]);

  return null;
}
