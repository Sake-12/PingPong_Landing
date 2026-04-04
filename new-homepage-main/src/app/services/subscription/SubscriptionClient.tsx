"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { GradientLabel, SectionTitle, PrimaryButton, BodyText } from "@/components/ui/styled";
import { Shield, Wrench, HeadphonesIcon, Code, RefreshCw, Users } from "lucide-react";
import { GlowOrb, GridPattern } from "@/components/ui/backgrounds";
import { PricingPlans } from "@/components/sections/PricingPlans";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const features = [
  {
    icon: Shield,
    title: "안정적 서비스 운영",
    desc: "24/7 모니터링과 빠른 장애 대응으로 서비스의 고가용성과 안정성을 완벽하게 보장합니다.",
  },
  {
    icon: Code,
    title: "추가 기능 개발",
    desc: "매월 새로운 기능을 기획하고 개발하여 귀사의 프로덕트가 시장 트렌드에 맞춰 지속적으로 성장하도록 지원합니다.",
  },
  {
    icon: Wrench,
    title: "유지보수 & 버그 수정",
    desc: "사용자 피드백에서 발견되는 이슈를 즉각적으로 대응하고, 코드 리팩토링 및 품질을 지속 관리합니다.",
  },
  {
    icon: HeadphonesIcon,
    title: "전담 PM 배정",
    desc: "프로젝트 이해도가 높은 전담 PM이 배정되어 소통 창구를 일원화하고, 빠르고 정확한 커뮤니케이션 리포트를 제공합니다.",
  },
  {
    icon: RefreshCw,
    title: "정기 보안 업데이트",
    desc: "최신 보안 취약점 패치, 오픈소스 라이브러리 메이저 업데이트, 성능 최적화 작업을 정기 사이클에 맞춰 수행합니다.",
  },
  {
    icon: Users,
    title: "유연한 팀 스케일링",
    desc: "개발 피크 시즌이나 긴급한 마일스톤 등 프로젝트 규모와 속도 기대치에 맞춰 투입 인력을 유연하게 확장할 수 있습니다.",
  },
];

export default function SubscriptionClient() {
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
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black via-black/80 to-transparent z-[1]" />

        <motion.div
          className="relative z-10 flex flex-col items-center text-center max-w-3xl gap-6 md:pt-10"
          initial="hidden" animate="visible" variants={staggerContainer}
        >
          <motion.div variants={fadeUpVariant}>
            <GradientLabel className="text-sm tracking-widest uppercase">Dev Team Subscription</GradientLabel>
          </motion.div>
          <motion.h1
            variants={fadeUpVariant}
            className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight break-keep"
          >
            채용 스트레스 없이<br />
            전담 개발팀을 구독하세요
          </motion.h1>
          <motion.div variants={fadeUpVariant}>
            <BodyText className="text-left mt-4 max-w-xl">
              안정적인 시스템 운영부터 고도화된 기능 개발까지.
              <br className="hidden md:block" />
              Code021이 귀사의 내재화된 파트너 개발팀이 되어 성장을 뒷받침합니다.
            </BodyText>
          </motion.div>
          <motion.div variants={fadeUpVariant} className="flex gap-4 mt-8">
            <PrimaryButton href="/contact">도입 문의</PrimaryButton>
          </motion.div>
        </motion.div>
      </section>

      {/* Features */}
      <section className="relative py-32 px-6 border-t border-white/[0.03] overflow-hidden">
        <GlowOrb className="-right-[200px] top-0" color="from-[#1AFFD1]/15 to-transparent" size="w-[600px] h-[600px]" blur="blur-[150px]" />
        <GridPattern className="opacity-[0.03] absolute inset-0 mix-blend-screen" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none" />

        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            className="text-center mb-20"
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
          >
            <motion.div variants={fadeUpVariant}>
              <GradientLabel>Features</GradientLabel>
            </motion.div>
            <motion.h2 variants={fadeUpVariant} className="text-3xl md:text-4xl font-semibold tracking-tight">무엇이 포함되나요?</motion.h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
          >
            {features.map((f) => (
              <motion.div
                key={f.title}
                variants={fadeUpVariant}
                className="group rounded-3xl border border-white/5 bg-white/[0.02] p-8 hover:bg-white/[0.04] transition-colors duration-500 backdrop-blur-sm shadow-xl flex flex-col items-start h-full"
              >
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#1AFFD1]/10 to-[#A0FF1B]/5 flex items-center justify-center mb-6 border border-[#1AFFD1]/10 group-hover:scale-110 transition-transform duration-500">
                  <f.icon className="w-6 h-6 text-[#1AFFD1]" />
                </div>
                <h3 className="text-xl font-semibold mb-3 tracking-tight group-hover:text-white text-white/90">{f.title}</h3>
                <p className="text-white/80 font-light leading-relaxed text-sm md:text-[15px] break-keep">{f.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Plans */}
      <section className="relative py-32 border-t border-white/[0.03] overflow-hidden bg-white/[0.01]">
        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpVariant}
          >
            <PricingPlans />
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
            전문 개발팀이 필요하신가요?<br />
            구독으로 안정감 있게 시작하세요.
          </motion.h2>
          <motion.div variants={fadeUpVariant} className="flex flex-col sm:flex-row gap-4 mt-12 justify-center">
            <PrimaryButton href="/contact">구독 상담 및 일정 조율</PrimaryButton>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
