"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { GradientLabel, SectionTitle, BodyText, PrimaryButton } from "@/components/ui/styled";
import { Check, ArrowRight, Rocket, Target, Zap, Calendar } from "lucide-react";
import { GlowOrb, GridPattern } from "@/components/ui/backgrounds";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const steps = [
  {
    week: "1주차",
    title: "기획 & 요구사항 정의",
    desc: "비즈니스 목표에 맞는 핵심 기능을 정의하고 IA, 와이어프레임을 설계합니다.",
  },
  {
    week: "2주차",
    title: "UI/UX 디자인",
    desc: "타깃 사용자를 고려한 UI 디자인과 프로토타입을 만듭니다.",
  },
  {
    week: "3–4주차",
    title: "핵심 기능 개발",
    desc: "확장 가능한 아키텍처 위에 핵심 기능을 빠르게 구현합니다.",
  },
  {
    week: "5주차",
    title: "통합 & QA",
    desc: "전체 기능 통합 후 철저한 테스트로 품질을 검증합니다.",
  },
  {
    week: "6주차",
    title: "런칭 & 인수인계",
    desc: "배포 환경 셋업, 런칭과 함께 운영 가이드를 전달합니다.",
  },
];

const features = [
  {
    icon: Target,
    title: "아이디어 검증",
    desc: "최소한의 비용으로 시장 반응을 확인할 수 있습니다.",
  },
  {
    icon: Rocket,
    title: "투자 준비",
    desc: "데모 가능한 실제 제품이 있으면 투자 유치 확률이 높아집니다.",
  },
  {
    icon: Calendar,
    title: "6주 안에 런칭",
    desc: "명확한 일정과 마일스톤으로 빠르게 시장에 진입합니다.",
  },
  {
    icon: Zap,
    title: "확장 가능한 설계",
    desc: "MVP 이후 스케일업을 고려한 아키텍처로 개발합니다.",
  },
];

export default function MvpClient() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white w-full overflow-hidden">
      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center min-h-[60vh] px-6 overflow-hidden">
        {/* 배경 - PC/모바일 분리 */}
        <div className="absolute inset-0 z-0">
          {/* PC 배경 */}
          <Image
            src="/service-hero-bg.png"
            alt=""
            fill
            className="object-cover object-center hidden md:block"
            priority
            sizes="100vw"
          />
          {/* 모바일 배경 */}
          <Image
            src="/service-hero-bg-mobile.png"
            alt=""
            fill
            className="object-cover object-center md:hidden"
            priority
            sizes="100vw"
          />
        </div>
        {/* 하단 fade */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black via-black/80 to-transparent z-[1]" />

        <motion.div
          className="relative z-10 flex flex-col items-center text-center max-w-3xl gap-6 md:pt-10"
          initial="hidden" animate="visible" variants={staggerContainer}
        >
          <motion.div variants={fadeUpVariant}>
            <GradientLabel className="text-sm tracking-widest uppercase">6주 완성 MVP</GradientLabel>
          </motion.div>
          <motion.h1
            variants={fadeUpVariant}
            className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight break-keep"
          >
            아이디어를 6주 안에
            <br />
            실제 서비스로 만듭니다
          </motion.h1>
          <motion.div variants={fadeUpVariant}>
            <BodyText className="text-left mt-4 max-w-xl">
            아이디어 검증과 투자 준비를 위한 빠른 MVP 개발. <br className="hidden md:block" />
            Code021이 기획부터 런칭까지 성공적인 첫 걸음을 안겨 드립니다.
            </BodyText>
          </motion.div>
          <motion.div variants={fadeUpVariant} className="flex gap-4 mt-8">
            <PrimaryButton href="/contact">문의하기</PrimaryButton>
          </motion.div>
        </motion.div>
      </section>

      {/* Why MVP */}
      <section className="relative py-32 px-6 border-t border-white/[0.03] overflow-hidden">
        <GlowOrb className="-right-[200px] top-0" color="from-[#1AFFD1]/15 to-transparent" size="w-[600px] h-[600px]" blur="blur-[150px]" />
        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            className="text-center mb-20"
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
          >
            <motion.div variants={fadeUpVariant}>
              <GradientLabel>Why MVP?</GradientLabel>
            </motion.div>
            <motion.h2 variants={fadeUpVariant} className="text-3xl md:text-4xl font-semibold tracking-tight">왜 MVP부터 시작해야 할까요?</motion.h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
          >
            {features.map((f) => (
              <motion.div
                key={f.title}
                variants={fadeUpVariant}
                className="group rounded-3xl border border-white/5 bg-white/[0.02] p-8 md:p-10 flex flex-col items-start hover:bg-white/[0.04] transition-colors duration-500 backdrop-blur-sm"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#1AFFD1]/10 to-[#A0FF1B]/5 flex items-center justify-center shrink-0 mb-6 group-hover:scale-110 transition-transform duration-500 border border-white/5">
                  <f.icon className="w-6 h-6 text-[#1AFFD1]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 tracking-tight">{f.title}</h3>
                  <p className="text-white/80 font-light leading-relaxed text-sm md:text-[15px] break-keep">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="relative py-32 px-6 border-t border-white/[0.03] overflow-hidden bg-white/[0.01]">
        <GridPattern className="opacity-[0.03] absolute inset-0 mix-blend-screen" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none" />
        <GlowOrb className="-left-[250px] top-1/2 -translate-y-1/2" color="from-[#A0FF1B]/12 to-transparent" size="w-[500px] h-[500px]" blur="blur-[140px]" />

        <div className="max-w-3xl mx-auto relative z-10">
          <motion.div
            className="text-center mb-24"
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
          >
            <motion.div variants={fadeUpVariant}>
              <GradientLabel>Process</GradientLabel>
            </motion.div>
            <motion.h2 variants={fadeUpVariant} className="text-3xl md:text-4xl font-semibold tracking-tight">6주 개발 프로세스</motion.h2>
          </motion.div>

          <motion.div
            className="space-y-16 border-l pl-10 md:pl-12 ml-4 flex flex-col border-[#1AFFD1]/10"
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}
          >
            {steps.map((step) => (
              <motion.div key={step.week} variants={fadeUpVariant} className="relative">
                <div className="absolute -left-[45px] md:-left-[53px] top-1.5 w-[9px] h-[9px] rounded-full bg-black border-2 border-[#1AFFD1] shadow-[0_0_10px_rgba(26,255,209,0.8)]" />
                <div className="text-[#1AFFD1] font-bold text-lg mb-2 tracking-widest uppercase">
                  {step.week}
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-3 tracking-tight">{step.title}</h3>
                <p className="text-white/80 font-light leading-relaxed text-sm md:text-base">{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* What's included */}
      <section className="relative py-32 px-6 border-t border-white/[0.03] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.015] via-transparent to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
          >
            <motion.div variants={fadeUpVariant}>
              <GradientLabel>Includes</GradientLabel>
            </motion.div>
            <motion.h2 variants={fadeUpVariant} className="text-3xl md:text-4xl font-semibold tracking-tight">MVP 개발에 포함되는 것</motion.h2>

            <motion.div
              className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-left"
              variants={staggerContainer}
            >
              {[
                "서비스 기획 & IA 설계",
                "UI/UX 디자인 (반응형)",
                "프론트엔드 & 백엔드 개발",
                "관리자 페이지",
                "클라우드 서버 셋업",
                "런칭 후 2주 안정화 지원",
              ].map((item) => (
                <motion.div key={item} variants={fadeUpVariant} className="flex items-center gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-sm group hover:bg-white/[0.04] transition-colors">
                  <div className="w-8 h-8 rounded-full bg-[#1AFFD1]/10 border border-[#1AFFD1]/20 flex items-center justify-center shrink-0 group-hover:bg-[#1AFFD1]/20 transition-colors">
                    <Check className="w-4 h-4 text-[#1AFFD1]" />
                  </div>
                  <span className="text-white/80 font-medium text-[15px]">{item}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32 px-6 border-t border-white/[0.03] overflow-hidden">
        <GlowOrb className="left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2" color="from-[#1AFFD1]/15 to-[#A0FF1B]/10" size="w-[700px] h-[500px]" blur="blur-[170px]" />

        <motion.div
          className="max-w-3xl mx-auto text-center relative z-10"
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
        >
          <motion.h2 variants={fadeUpVariant} className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
            아이디어가 있으신가요?
            <br />
            지금 바로 상담해보세요
          </motion.h2>
          <motion.div variants={fadeUpVariant} className="flex flex-col sm:flex-row gap-4 mt-12 justify-center">
            <PrimaryButton href="/contact">무료 상담 신청</PrimaryButton>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
