"use client";

import penAnimationData from "@/lotties/pen.json";
import websiteAnimationData from "@/lotties/website.json";
import website2AnimationData from "@/lotties/website2.json";
import lottie, { AnimationItem } from "lottie-web";
import {
  AnimatePresence,
  motion,
  MotionValue,
  useTransform,
} from "motion/react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import TypeIt, { TypeItProps } from "typeit-react";

type Props = {
  y: MotionValue<number>;
};

type TypeItInstance = Parameters<
  Exclude<TypeItProps["getAfterInit"], undefined>
>["0"];

let isTypeIt1Frozen = true;

export default function AnimationMobileContents({ y }: Props) {
  const [typeIt1Instance, setTypeIt1Instance] = useState<TypeItInstance>();
  const [typeIt2Instance, setTypeIt2Instance] = useState<TypeItInstance>();
  const [isTypeIt2Complete, setIsTypeIt2Complete] = useState(false);
  const drawingLottieDom = useRef(null);
  const drawingLottieInstance = useRef<AnimationItem>(null);
  const drawingLottieContainer = useRef(null);

  const websiteLottieDom = useRef(null);
  const websiteLottieInstance = useRef<AnimationItem>(null);

  const website2LottieDom = useRef(null);
  const website2LottieInstance = useRef<AnimationItem>(null);

  const typeIt2Container = useRef(null);

  const drawingLottieLoaded = useRef(false);

  useEffect(() => {
    if (drawingLottieDom.current) {
      drawingLottieInstance.current = lottie.loadAnimation({
        container: drawingLottieDom.current,
        renderer: "svg",
        loop: false,
        autoplay: false,
        animationData: penAnimationData,
      });
      drawingLottieInstance.current.addEventListener("DOMLoaded", () => {
        drawingLottieLoaded.current = true;
        // 로드 완료 시점에 y값이 0 근처이면 즉시 재생
        if (y.get() < 0.95) {
          drawingLottieInstance.current?.play();
        }
      });
    }

    if (websiteLottieDom.current) {
      websiteLottieInstance.current = lottie.loadAnimation({
        container: websiteLottieDom.current,
        renderer: "svg",
        loop: false,
        autoplay: false,
        animationData: websiteAnimationData,
      });
    }

    if (website2LottieDom.current) {
      website2LottieInstance.current = lottie.loadAnimation({
        container: website2LottieDom.current,
        renderer: "svg",
        loop: false,
        autoplay: false,
        animationData: website2AnimationData,
      });
    }

    return () => {
      drawingLottieLoaded.current = false;
      drawingLottieInstance.current?.destroy();
      websiteLottieInstance.current?.destroy();
      website2LottieInstance.current?.destroy();
    };
  }, [drawingLottieInstance, y]);

  useEffect(
    function handleDrawingLottieAnimation() {
      if (!drawingLottieContainer.current) return;

      let isPlaying = false;

      const playOnce = () => {
        if (!isPlaying && drawingLottieLoaded.current) {
          isPlaying = true;
          drawingLottieInstance.current?.goToAndStop(0);
          drawingLottieInstance.current?.play();
        }
      };

      const stopAndReset = () => {
        isPlaying = false;
        drawingLottieInstance.current?.goToAndStop(0);
      };

      // 이미 로드되었고 y값이 0 근처이면 즉시 재생
      if (drawingLottieLoaded.current && y.get() < 0.95) {
        playOnce();
      }

      const unsubscribe = y.on("change", (value) => {
        if (value >= 0.95) {
          stopAndReset();
        } else if (value <= 0.05) {
          playOnce();
        }
      });

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && y.get() < 0.95) {
            playOnce();
          } else if (!entry.isIntersecting) {
            stopAndReset();
          }
        },
        { threshold: 0.1 },
      );
      observer.observe(drawingLottieContainer.current);

      return () => {
        observer?.disconnect();
        unsubscribe();
      };
    },
    [y],
  );

  useEffect(
    function handleWebsiteLottieAnimation() {
      let isPlaying = false;
      const unsubscribe = y.on("change", (value) => {
        if (value >= 1.95 || value <= 0.05) {
          if (isPlaying) {
            isPlaying = false;
            websiteLottieInstance.current?.goToAndStop(0);
          }
        } else if (value >= 1 && value <= 1.5) {
          if (!isPlaying) {
            isPlaying = true;
            websiteLottieInstance.current?.play();
          }
        }
      });

      return () => {
        unsubscribe();
      };
    },
    [y],
  );

  useEffect(
    function handleWebsite2LottieAnimation() {
      let isPlaying = false;
      const unsubscribe = y.on("change", (value) => {
        if (value >= 2.95 || value <= 1.05) {
          if (isPlaying) {
            isPlaying = false;
            website2LottieInstance.current?.goToAndStop(0);
          }
        } else if (value >= 2 && value <= 2.5) {
          if (!isPlaying) {
            isPlaying = true;
            website2LottieInstance.current?.play();
          }
        }
      });

      return () => {
        unsubscribe();
      };
    },
    [y],
  );

  useEffect(
    function handleTypeIt1Freeze() {
      if (typeIt1Instance) {
        const unsubscribe = y.on("change", (value) => {
          if (value >= 2) {
            if (isTypeIt1Frozen) {
              isTypeIt1Frozen = false;
              typeIt1Instance?.unfreeze();
            }
          } else if (!isTypeIt1Frozen) {
            isTypeIt1Frozen = true;
            typeIt1Instance?.freeze();
          }
        });

        return () => {
          unsubscribe();
        };
      }
    },
    [typeIt1Instance, y],
  );

  useEffect(
    function handleTypeIt2Freeze() {
      let unsubscribe: VoidFunction = () => {};
      if (!typeIt2Container.current) return;
      let isVisible = false;
      let isFrozen = true;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            isVisible = true;
            if (y.get() >= 2.9 && isFrozen) {
              isFrozen = false;
              typeIt2Instance?.unfreeze();
            }

            unsubscribe = y.on("change", (value) => {
              if (value >= 2.9) {
                if (isFrozen) {
                  isFrozen = false;
                  typeIt2Instance?.unfreeze();
                }
              } else {
                if (!isFrozen) {
                  isFrozen = true;
                  setIsTypeIt2Complete(false);
                  typeIt2Instance?.freeze();
                }
              }
            });
          } else {
            isVisible = false;
            unsubscribe();
            if (!isFrozen) {
              isFrozen = true;
              setIsTypeIt2Complete(false);
              typeIt2Instance?.freeze();
            }
          }
        },
        { threshold: 0 },
      );
      observer.observe(typeIt2Container.current);

      return () => {
        observer?.disconnect();
        unsubscribe();
      };
    },
    [typeIt2Instance, y],
  );

  const {
    lottieHeight,
    websiteHeight,
    website2Height,
    inputHeight,
    input2Height,
    clubberHeight,
  } = useAnimationHeight(y);

  const { website2과input사이height, clubber와input사이height } =
    useAnimation과Animation사이Height(y);

  return (
    <>
      <motion.div
        ref={drawingLottieContainer}
        className="w-[23.75rem] overflow-hidden"
        style={{ height: lottieHeight }}
      >
        <div ref={drawingLottieDom} />
      </motion.div>

      <motion.div
        className="w-[30rem] self-center overflow-hidden"
        style={{ height: websiteHeight }}
      >
        <div className="block" ref={websiteLottieDom} />
      </motion.div>

      <motion.div
        className="w-[30rem] self-center overflow-hidden"
        style={{ height: website2Height }}
      >
        <div className="block" ref={website2LottieDom} />
      </motion.div>

      <motion.div style={{ height: website2과input사이height }} />

      <motion.div
        className="relative w-50 self-center"
        style={{ height: clubberHeight }}
      >
        <Image src="/clubber.png" fill objectFit="cover" alt="clubber" />
      </motion.div>

      <motion.div style={{ height: clubber와input사이height }} />

      <motion.div className="overflow-hidden" style={{ height: inputHeight }}>
        <div className="h-20 w-140 rounded-xl bg-gradient-to-r from-[#1AFFD1] to-[#A0FF1B] p-0.5">
          <div className="flex h-full w-full items-center rounded-xl bg-black px-[0.6rem]">
            <TypeIt
              style={{
                "--ti-cursor-color": "#1AFFCF",
              }}
              className="font-wanted-sans flex h-full w-full items-center rounded-xl bg-black px-6 text-2xl font-medium text-white outline-none"
              as="p"
              options={{ loop: true }}
              getBeforeInit={(instance) => {
                setTypeIt1Instance(instance);
                instance.freeze();
                return instance;
              }}
            >
              print(‘Zero to One \n Toghether’)
            </TypeIt>
            <div className="relative h-6 w-6">
              <Image src="/play.svg" fill alt="" />
            </div>
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        <motion.div
          ref={typeIt2Container}
          className="overflow-hidden"
          style={{ height: input2Height }}
          transition={{ duration: 1 }}
          animate={{
            opacity: isTypeIt2Complete ? 0 : 100,
            translateY: isTypeIt2Complete ? 10 : 0,
          }}
        >
          <div className="h-20 w-140 rounded-xl bg-gradient-to-r from-[#1AFFD1] to-[#A0FF1B] p-0.5">
            <div className="flex h-full w-full items-center rounded-xl bg-black px-[0.6rem]">
              <TypeIt
                style={{
                  "--ti-cursor-color": "#1AFFCF",
                }}
                className="font-wanted-sans flex h-full w-full items-center rounded-xl bg-black px-6 text-2xl font-medium text-white outline-none"
                as="p"
                options={{
                  loop: true,
                  startDelete: false,
                }}
                getAfterInit={(instance) => {
                  setTypeIt2Instance(instance);
                  instance.freeze();

                  instance
                    .type(
                      "<span class='text'>print(‘Zero to One \\n Toghether’)</span>",
                      { delay: 200 },
                    )
                    .pause(500)
                    .exec(() => {
                      setIsTypeIt2Complete(true);
                      instance.freeze();
                    });
                  return instance;
                }}
              />
              <div className="relative h-6 w-6">
                <Image src="/play.svg" fill alt="" />
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
}

export function useLottieScale() {
  const [scale, setScale] = useState(1);
  useEffect(() => {
    const calc = () => {
      const vh = window.innerHeight;
      // 헤더(80px) + 상단 컨텐츠(라벨+타이틀+탭메뉴+설명 ≈ 360px) 제외, 부모 flex overflow-hidden이 자연 제약
      const availableForLottie = vh - 360;
      setScale(Math.min(1, Math.max(0.3, availableForLottie / 640)));
    };
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);
  return scale;
}

function useAnimationHeight(y: MotionValue<number>) {
  const lottieHeight = useTransform(y, [0, 1], ["42.5rem", "0rem"]);
  const websiteHeight = useTransform(y, [0, 1, 2], ["0rem", "42.5rem", "0rem"]);

  const website2Height = useTransform(
    y,
    [1, 2, 3],
    ["0rem", "21.0625rem", "0rem"],
  );
  const inputHeight = useTransform(y, [1, 2, 3], ["0rem", "5rem", "0rem"]);
  const input2Height = useTransform(y, [2, 3], ["0rem", "5rem"]);
  const clubberHeight = useTransform(y, [2, 3], ["0rem", "12.5rem"]);

  return {
    lottieHeight,
    websiteHeight,
    website2Height,
    inputHeight,
    input2Height,
    clubberHeight,
  };
}

function useAnimation과Animation사이Height(y: MotionValue<number>) {
  const website와cube사이height = useTransform(
    y,
    [0, 1, 2],
    ["0rem", "0.75rem", "0rem"],
  );
  const cube와website2사이height = useTransform(
    y,
    [1, 1.5, 2],
    ["0rem", "0.75rem", "0rem"],
  );
  const website2과input사이height = useTransform(
    y,
    [1, 2, 3],
    ["0rem", "6.375rem", "0rem"],
  );
  const clubber와input사이height = useTransform(y, [2, 3], ["0%", "9.4375rem"]);

  return {
    website와cube사이height,
    cube와website2사이height,
    website2과input사이height,
    clubber와input사이height,
  };
}
