"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Portfolio } from "@/components/sections/Portfolio";
import { Partners } from "@/components/sections/Partners";
import { Review } from "@/components/sections/Review";
import Screen2 from "@/components/screen2";
import ScrollSnapProvider from "@/components/common/ScrollSnapProvider";
import { ArrowRight, Rocket, Bot, Cloud, Users, ExternalLink } from "lucide-react";
import { GlowOrb, GridPattern } from "@/components/ui/backgrounds";
import { GradientLabel, BodyText } from "@/components/ui/styled";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const homeServices = [
  {
    href: "/services/mvp",
    icon: Rocket,
    title: "6주 완성 MVP 신규 개발",
    desc: "아이디어 검증, 투자 준비",
    gradient: "from-[#1AFFD1]/20 to-[#1AFFD1]/5",
    external: false,
  },
  {
    href: "/services/ai-pipeline",
    icon: Bot,
    title: "AI 운영 파이프라인 구축",
    desc: "인건비 최소화, 효율성 극대화",
    gradient: "from-[#A0FF1B]/20 to-[#A0FF1B]/5",
    external: false,
  },
  {
    href: "https://code021.cloud/",
    icon: Cloud,
    title: "코드021 클라우드",
    desc: "중소·스타트업을 위한 실전형 클라우드",
    gradient: "from-[#1AFFD1]/20 to-[#A0FF1B]/5",
    external: true,
  },
  {
    href: "/services/subscription",
    icon: Users,
    title: "개발팀 구독 서비스",
    desc: "안정적 운영, 지속적인 기능 고도화",
    gradient: "from-[#A0FF1B]/20 to-[#1AFFD1]/5",
    external: false,
  },
];

export default function HomeClient() {
  return (
    <div className="flex flex-col min-h-screen mt-0">
      <ScrollSnapProvider />

      {/* ── Hero (Unified Responsive) ── */}
      <section className="section snap-center snap-always relative flex flex-col items-center justify-center text-white min-h-[100dvh] overflow-hidden">
        {/* Desktop: 중앙 배치 */}
        <Image
          src="/background-optimized.webp"
          alt=""
          fill
          className="-z-10 object-cover object-center hidden md:block"
          quality={75}
          priority
          sizes="100vw"
          placeholder="empty"
        />
        {/* Mobile: Arc를 상단에 배치 */}
        <div className="absolute inset-0 -z-10 overflow-hidden md:hidden">
          <Image
            src="/background-mobile-main.jpeg"
            alt=""
            fill
            className="object-cover"
            style={{ objectPosition: 'center center' }}
            quality={75}
            priority
            sizes="100vw"
            placeholder="empty"
          />
        </div>

        <motion.div
          className="relative z-10 flex flex-col items-center gap-4 md:gap-6 px-6 pt-0 md:pt-20"
          initial="hidden" animate="visible" variants={staggerContainer}
        >
          <motion.div variants={fadeUpVariant}>
            <p className="font-semibold text-[clamp(2.4rem,10vw,6rem)] md:text-[clamp(2.2rem,10vw,6rem)] bg-[linear-gradient(180deg,#0c120f00_-104%,white_100%)] bg-clip-text text-center text-transparent tracking-tight leading-[1.2] md:leading-normal">
              Zero to One,<br className="md:hidden" /> <span className="md:inline hidden"> </span>Together
            </p>
          </motion.div>
          <motion.div variants={fadeUpVariant} className="flex flex-col items-center gap-4 md:gap-2 mt-2 md:mt-0">
            <p className="font-semibold text-[clamp(1.1rem,4.5vw,2.2rem)] md:text-[clamp(1.25rem,5vw,2.2rem)] text-white text-center tracking-tight">
              당신의{" "}
              <span className="bg-gradient-to-r from-[#1AFFD1] to-[#A0FF1B] bg-clip-text text-transparent italic font-semibold">
                Zero to One
              </span>
              {" "}을 함께합니다
            </p>
            <div className="h-[2px] w-8 bg-white md:hidden" />
          </motion.div>

          <motion.p variants={fadeUpVariant} className="mt-6 md:mt-12 text-center text-xl md:text-2xl font-medium tracking-wide text-white/80 max-w-2xl leading-relaxed hidden md:block break-keep">
            Code021은 단순 서비스 개발 뿐만 아니라
            <br />
            서비스기획, 디자인, 개발과 운영까지 수행할 수 있는 종합 IT 기업입니다.
          </motion.p>
          <motion.p variants={fadeUpVariant} className="mt-[20vh] text-center text-[13px] font-medium text-white max-w-[20rem] leading-[1.6] md:hidden break-keep">
            Code021은 단순 서비스 개발 뿐만 아니라
            <br />
            서비스기획, 디자인, 개발과 운영까지
            <br />
            수행할 수 있는 종합 IT 기업입니다.
          </motion.p>

          <motion.div variants={fadeUpVariant} className="flex flex-col md:flex-row items-center gap-2 md:gap-6 mt-6 md:mt-16">
            <Link
              href="/contact"
              className="rounded-xl bg-white px-10 md:px-12 py-3.5 md:py-4 text-[14px] md:text-xl font-bold text-black cursor-pointer transition-transform duration-300 hover:scale-105"
            >
              포트폴리오 받기
            </Link>
            <Link
              href="/contact"
              className="px-10 md:px-12 py-2 md:py-4 text-[14px] md:text-xl font-bold text-white cursor-pointer hover:text-[#D9FF89] transition-colors"
            >
              문의하기
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-4 md:bottom- z-10 flex justify-center w-full pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <Image width={60} height={60} src="/arrow-down.svg" alt="arrow down" className="md:w-20 md:h-20" />
        </motion.div>
      </section>

      {/* ── 업무 범위 (Screen2) ── */}
      <Screen2 />

      {/* ── 코드021 서비스 ── */}
      <section className="relative w-full bg-black text-white py-16 px-6 border-t border-white/[0.03] overflow-hidden">
        <GridPattern className="opacity-[0.03] absolute inset-0 mix-blend-screen" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none" />
        <GlowOrb className="-right-[200px] top-1/3" color="from-[#1AFFD1]/12 to-transparent" size="w-[600px] h-[600px]" blur="blur-[150px]" />

        <div className="max-w-5xl mx-auto relative z-10">
          <div
            className="flex flex-col items-center text-center mb-20"
          >
            <div>
              <GradientLabel>Our Services</GradientLabel>
            </div>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6">
              귀사의 디지털 라이프사이클을
              <br />
              함께 합니다
            </h2>
            <BodyText>
              아이디어 검증용 MVP 개발, 확장, 운영 자동화, 비용 컨설팅 등
              <br className="hidden md:block" />
              클라이언트에 맞는 최적의 비즈니스 솔루션을 제공합니다.
            </BodyText>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
          >
            {homeServices.map((service) => {
              const Icon = service.icon;
              const Wrapper = service.external ? "a" : Link;
              const extraProps = service.external
                ? { target: "_blank" as const, rel: "noopener noreferrer" as const }
                : {};

              return (
                <div key={service.href} className="h-full">
                  <Wrapper
                    href={service.href}
                    className="group relative rounded-3xl p-8 md:p-10 transition-all duration-500 flex flex-col gap-6 h-full shadow-xl hover:-translate-y-2 bg-[linear-gradient(255deg,#D9FF89_-4.24%,#E1FFA1_110.23%)]"
                    {...extraProps}
                  >
                    <div className="w-14 h-14 rounded-2xl bg-black flex items-center justify-center group-hover:scale-110 transition-transform duration-500 ease-out shadow-lg">
                      <Icon className="w-6 h-6 text-[#D9FF89]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="text-2xl font-bold tracking-tight text-gray-900">{service.title}</h3>
                        {service.external && (
                          <ExternalLink className="w-4 h-4 text-gray-900/50" />
                        )}
                      </div>
                      <p className="text-gray-800 font-medium text-[15px] leading-relaxed break-keep">{service.desc}</p>
                    </div>
                    <div className="flex items-center gap-2 text-gray-900 text-sm font-bold opacity-80 group-hover:opacity-100 transition-opacity duration-500 mt-4">
                      자세히 보기
                      <div className="w-8 h-8 rounded-full border border-gray-900/30 flex items-center justify-center group-hover:bg-gray-900/10 transition-all duration-500">
                        <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </Wrapper>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 리뷰 ── */}
      {/* <Review /> */}

      {/* ── 믿을 수 있는 외주 ── */}
      <section className="relative py-32 px-6 border-t border-white/[0.03] overflow-hidden bg-black text-white">
        <GlowOrb className="-left-[200px] top-1/2 -translate-y-1/2" color="from-[#A0FF1B]/12 to-transparent" size="w-[600px] h-[600px]" blur="blur-[150px]" />

        <div
          className="max-w-4xl mx-auto flex flex-col items-center text-center relative z-10"
        >
          <div>
            <GradientLabel>Trust & Warranty</GradientLabel>
          </div>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-8">
            믿을 수 있는 파트너,<br className="md:hidden" /> 코드021
          </h2>

          <BodyText className="text-center mt-6">
            <span className="text-[#D9FF89] font-medium">SGI 서울보증</span>을 통한 하자보증보험증권 발급으로<br />
            계약 종료 후에도 확실하게 <span className="text-[#D9FF89] font-medium border-b border-[#D9FF89]/30 pb-0.5">180일 무상 하자 보수</span>를 보장합니다.
          </BodyText>
          <div className="mt-16 bg-white/[0.02] border border-white/5 rounded-3xl p-8 backdrop-blur-sm">
            <Image
              src="/trust-icons.png"
              alt="믿을 수 있는 외주 아이콘"
              width={360}
              height={100}
              className="w-72 md:w-80 lg:w-[360px] h-auto opacity-90"
            />
          </div>
        </div>
      </section>

      {/* ── 포트폴리오 ── */}
      {/* <section className="bg-black text-white border-t border-white/[0.03] relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(26,255,209,0.02)_0%,transparent_70%)] pointer-events-none" />
        <div className="flex flex-col items-center pt-32 pb-16 px-6 relative z-10">
          <GradientLabel>Portfolio</GradientLabel>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6">이런 프로젝트를 함께했습니다</h2>
        </div>
        <Portfolio limit={2} />
        <div className="flex justify-center pb-32 px-6 mt-8 relative z-10">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-3 text-white/80 hover:text-white font-medium transition-colors text-[16px] border border-white/10 rounded-full px-8 py-3 bg-white/[0.02] hover:bg-white/[0.05]"
          >
            전체 포트폴리오 보러가기
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section> */}

      {/* ── Partners ── */}
      <div className="border-t border-white/[0.03] bg-black text-white">
        <Partners />
      </div>

      {/* ── CTA: 함께 해볼까요? ── */}
      <section
        className="relative py-40 px-6 border-t border-white/[0.03] overflow-hidden text-white"
        style={{ background: 'linear-gradient(180deg, #000000 0%, #1F391E 50%, #040D0A 100%)' }}
      >
        <GlowOrb className="left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2" color="from-[#1AFFD1]/15 to-[#A0FF1B]/10" size="w-[800px] h-[800px]" blur="blur-[150px]" />
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03] bg-center mix-blend-screen" />

        <div
          className="max-w-4xl mx-auto flex flex-col items-center text-center relative z-10"
        >
          <div className="mb-6">
            <GradientLabel>이제, 함께 해볼까요?</GradientLabel>
          </div>

          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight mb-8 leading-tight">
            당신의 0에서 1을 함께할
            <br />
            파트너, 코드021
          </h2>

          <div className="flex flex-col sm:flex-row gap-5 mt-10">
            <Link
              href="/contact"
              className="px-10 py-4 bg-white text-black font-semibold text-lg rounded-full hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all duration-300"
            >
              문의하기
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
