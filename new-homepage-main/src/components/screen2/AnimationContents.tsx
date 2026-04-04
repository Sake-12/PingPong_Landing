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

let isTypeIt1Frozen = true;
const isTypeIt2Frozen = true;

type TypeItInstance = Parameters<
  Exclude<TypeItProps["getAfterInit"], undefined>
>[0];

export default function AnimationContents({ y }: Props) {
  const [typeIt1Instance, setTypeIt1Instance] = useState<TypeItInstance>();
  const [typeIt2Instance, setTypeIt2Instance] = useState<TypeItInstance>();
  const [isTypeIt2Complete, setIsTypeIt2Complete] = useState(false);
  const drawingLottieDom = useRef(null);
  const drawingLottieInstance = useRef<AnimationItem>(null);
  const drawingContainer = useRef(null);

  const websiteLottieDom = useRef(null);
  const websiteLottieInstance = useRef<AnimationItem>(null);

  const website2LottieDom = useRef(null);
  const website2LottieInstance = useRef<AnimationItem>(null);

  const typeIt2Container = useRef(null);

  useEffect(() => {
    if (drawingLottieDom.current) {
      drawingLottieInstance.current = lottie.loadAnimation({
        container: drawingLottieDom.current,
        renderer: "svg",
        loop: false,
        autoplay: false,
        animationData: penAnimationData,
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
      drawingLottieInstance.current?.destroy();
      websiteLottieInstance.current?.destroy();
      website2LottieInstance.current?.destroy();
    };
  }, []);

  useEffect(
    function handleDrawingLottieAnimation() {
      if (!drawingContainer.current) return;

      const unsubscribe = y.on("change", (value) => {
        if (value >= 0.95) drawingLottieInstance.current?.goToAndStop(0);
        else if (value <= 0.5) drawingLottieInstance.current?.play();
      });

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            drawingLottieInstance.current?.play();
          } else {
            drawingLottieInstance.current?.goToAndStop(0);
          }
        },
        { threshold: 1 },
      );
      observer.observe(drawingContainer.current);

      return () => {
        observer?.disconnect();
        unsubscribe();
      };
    },
    [y],
  );

  useEffect(
    function handleWebsiteLottieAnimation() {
      const unsubscribe = y.on("change", (value) => {
        if (value >= 1.95 || value <= 0.05)
          websiteLottieInstance.current?.goToAndStop(0);
        else if (value >= 1 && value <= 1.5)
          websiteLottieInstance.current?.play();
      });

      return () => {
        unsubscribe();
      };
    },
    [y],
  );

  useEffect(
    function handleWebsite2LottieAnimation() {
      const unsubscribe = y.on("change", (value) => {
        if (value >= 2.95 || value <= 1.05)
          website2LottieInstance.current?.goToAndStop(0);
        else if (value >= 2 && value <= 2.5)
          website2LottieInstance.current?.play();
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

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            if (isTypeIt2Frozen) {
              if (y.get() === 3) {
                typeIt2Instance?.unfreeze();
              }

              unsubscribe = y.on("change", (value) => {
                if (value >= 2.9) {
                  setIsTypeIt2Complete(false);
                  typeIt2Instance?.unfreeze();
                }
              });
            }
          } else {
            unsubscribe();
            setIsTypeIt2Complete(false);

            typeIt2Instance?.freeze();
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

  /* 애니메이션/애니메이션 사이 공간 높이  */
  const {
    drawingLottieHeight,
    websiteHeight,
    website2Height,
    inputHeight,
    input2Height,
    clubberHeight,
  } = useAnimationHeight(y);

  const {
    cube와website2사이height,
    website2과input사이height,
    clubber와input사이height,
  } = useAnimation과Animation사이Height(y);

  return (
    <>
      <motion.div
        ref={drawingContainer}
        className="w-[23.75rem] overflow-hidden"
        style={{ height: drawingLottieHeight }}
      >
        <div className="block" ref={drawingLottieDom} />
      </motion.div>

      <motion.div
        className="w-[30rem] self-center overflow-hidden"
        style={{ height: websiteHeight }}
      >
        <div className="block" ref={websiteLottieDom} />
      </motion.div>

      <motion.div style={{ height: cube와website2사이height }} />

      <motion.div
        className="self-center overflow-hidden"
        style={{ height: website2Height }}
      >
        <div className="block" ref={website2LottieDom} />
      </motion.div>

      <motion.div style={{ height: website2과input사이height }} />

      <motion.div
        className="relative w-50 self-center"
        style={{ height: clubberHeight }}
      >
        <Image src="/clubber.png" fill style={{ objectFit: "cover" }} alt="clubber" />
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
              getAfterInit={(instance) => {
                setTypeIt1Instance(instance);
                instance.freeze();
                return instance;
              }}
            >
              print('Zero to One \n Toghether')
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
          <div className="flex h-20 w-140 items-center rounded-xl bg-gradient-to-r from-[#1AFFD1] to-[#A0FF1B] p-0.5">
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
                      "<span class='text'>print('Zero to One \\n Toghether')</span>",
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

function useAnimationHeight(y: MotionValue<number>) {
  const drawingLottieHeight = useTransform(y, [0, 1], ["42.5rem", "0rem"]);
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
    drawingLottieHeight,
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
    [1, 1.1, 1.5, 1.9, 2],
    ["0rem", "0.375rem", "0.75rem", "0.375rem", "0rem"],
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
