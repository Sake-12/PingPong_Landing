"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { GradientLabel, SectionTitle, PrimaryButton, BodyText } from "@/components/ui/styled";
import { Bot, Workflow, Cpu, BarChart3, Repeat, Factory, Utensils, Truck, Briefcase, Sparkles, Zap, Shield } from "lucide-react";
import { GlowOrb, GridPattern } from "@/components/ui/backgrounds";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const services = [
  {
    icon: Bot,
    title: "AI 에이전트 세팅",
    desc: "슬랙, 카카오톡, 사내 도구에 AI 에이전트를 배치합니다. 고객 응대, 리서치, 콘텐츠 생성 등 단순 반복 업무를 24시간 자동 처리합니다.",
    gradient: "from-[#1AFFD1] to-[#A0FF1B]",
  },
  {
    icon: Workflow,
    title: "n8n 워크플로우 자동화",
    desc: "코딩 없이 업무 흐름을 자동화합니다. 데이터 수집, 리포트 생성, 알림, 연동 등 복잡한 워크플로우를 시각적으로 설계하고 운영합니다.",
    gradient: "from-[#A0FF1B] to-[#1AFFD1]",
  },
  {
    icon: Cpu,
    title: "실제기기 자동화",
    desc: "물리적 환경에서의 자동화도 지원합니다. IoT 기기 제어, RPA 연동, 센서 데이터 수집 등 소프트웨어를 넘어선 자동화를 구축합니다.",
    gradient: "from-[#1AFFD1] to-[#7B61FF]",
  },
  {
    icon: BarChart3,
    title: "데이터 기반 의사결정",
    desc: "자동 수집된 운영 데이터를 분석하여 비즈니스 인사이트를 도출합니다. 대시보드와 자동 리포팅 시스템을 함께 구축합니다.",
    gradient: "from-[#7B61FF] to-[#1AFFD1]",
  },
];

const industries = [
  {
    icon: Truck,
    title: "물류 · 유통",
    items: ["재고 자동 발주 시스템", "배송 상태 자동 알림", "입출고 데이터 리포트 자동화"],
  },
  {
    icon: Factory,
    title: "제조 · 생산",
    items: ["설비 상태 모니터링 자동화", "품질 검수 AI 보조", "생산 지표 자동 집계"],
  },
  {
    icon: Utensils,
    title: "F&B · 리테일",
    items: ["주문·예약 자동 응대", "리뷰 수집 및 분석 자동화", "재료 발주 시점 예측"],
  },
  {
    icon: Briefcase,
    title: "전문 서비스",
    items: ["고객 문의 자동 분류·응답", "계약서·문서 자동 생성", "일정·태스크 자동 관리"],
  },
];

const processSteps = [
  { step: "01", title: "산업 · 업무 분석", desc: "귀사의 업종과 업무 흐름을 분석하고, 자동화 대상과 우선순위를 선별합니다." },
  { step: "02", title: "솔루션 설계", desc: "AI 에이전트, 워크플로우, 기기 자동화 중 최적의 조합을 설계합니다." },
  { step: "03", title: "구축 & 교육", desc: "시스템을 구축하고 팀이 직접 관리할 수 있도록 교육합니다." },
  { step: "04", title: "KPT 반복 개선", desc: "운영 데이터를 기반으로 Keep-Problem-Try 사이클로 지속 개선합니다." },
];

const highlights = [
  { icon: Sparkles, title: "맞춤 설계", desc: "귀사의 산업과 규모에 맞는 최적의 자동화 전략" },
  { icon: Zap, title: "빠른 도입", desc: "2~4주 내 파일럿 구축, 즉시 효과 확인" },
  { icon: Shield, title: "안정적 운영", desc: "24/7 모니터링과 지속적인 성능 개선" },
];

export default function AiPipelineClient() {
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
            <GradientLabel className="text-sm tracking-widest uppercase">AI Pipeline</GradientLabel>
          </motion.div>
          <motion.h1
            variants={fadeUpVariant}
            className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight break-keep"
          >
            AI가 일하는 회사를
            <br />
            만들어 드립니다
          </motion.h1>
          <motion.div variants={fadeUpVariant}>
            <BodyText className="text-left mt-4 max-w-xl">
            AI 에이전트 세팅부터 워크플로우 자동화, 실제기기 자동화까지.
            <br className="hidden md:block" />
            귀사의 산업에 맞는 AI 운영 체계를 맞춤 구축합니다.
            </BodyText>
          </motion.div>
          <motion.div variants={fadeUpVariant} className="flex gap-4 mt-8">
            <PrimaryButton href="/contact">도입 상담하기</PrimaryButton>
          </motion.div>
        </motion.div>
      </section>

      {/* Pain Points */}
      <section className="relative py-32 px-6 border-t border-white/[0.03] overflow-hidden">
        <GlowOrb className="-right-[200px] top-0" color="from-[#1AFFD1]/20 to-transparent" size="w-[600px] h-[600px]" blur="blur-[150px]" />
        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            className="text-center mb-20"
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
          >
            <motion.div variants={fadeUpVariant}>
              <GradientLabel>Problem</GradientLabel>
            </motion.div>
            <motion.h2 variants={fadeUpVariant} className="text-3xl md:text-4xl font-semibold tracking-tight">이런 고민, 하고 계시죠?</motion.h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
          >
            {[
              { q: "반복 업무에 시간을 뺏기고 있다", a: "매일 같은 반복 작업에 2~3시간씩 소모되고 있진 않으신가요?" },
              { q: "AI를 도입하고 싶지만 방법을 모른다", a: "ChatGPT는 써봤지만, 실제 업무 프로세스에 녹이는 건 다른 문제입니다." },
              { q: "자동화 툴 세팅이 너무 복잡하다", a: "n8n, Make, Zapier… 알아는 봤지만 코드와 API 모델링이 장벽입니다." },
              { q: "사람을 뽑기엔 부담스럽다", a: "고정 인건비 대비 즉시 투입 가능한 AI 시스템, 어느 쪽이 효율적일까요?" },
            ].map((item) => (
              <motion.div
                key={item.q}
                variants={fadeUpVariant}
                className="rounded-3xl border border-white/5 bg-white/[0.02] p-8 md:p-10 hover:bg-white/[0.04] transition-colors duration-500 backdrop-blur-sm"
              >
                <h3 className="text-xl font-semibold mb-4 text-white tracking-tight break-keep">&ldquo;{item.q}&rdquo;</h3>
                <p className="text-white/80 font-light leading-relaxed text-sm md:text-base break-keep">{item.a}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="relative py-32 px-6 border-t border-white/[0.03] overflow-hidden bg-white/[0.01]">
        <GridPattern className="opacity-[0.03] absolute inset-0 mix-blend-screen" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none" />
        <GlowOrb className="-left-[200px] top-1/4" color="from-[#7B61FF]/18 to-transparent" size="w-[600px] h-[600px]" blur="blur-[150px]" />

        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            className="text-center mb-20"
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
          >
            <motion.div variants={fadeUpVariant}>
              <GradientLabel>Services</GradientLabel>
            </motion.div>
            <motion.h2 variants={fadeUpVariant} className="text-3xl md:text-4xl font-semibold tracking-tight">무엇을 자동화할 수 있나요?</motion.h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
          >
            {services.map((s) => (
              <motion.div
                key={s.title}
                variants={fadeUpVariant}
                className="group rounded-3xl border border-white/5 bg-white/[0.02] p-8 md:p-10 flex flex-col items-start hover:bg-white/[0.04] transition-colors duration-500 backdrop-blur-sm"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${s.gradient} flex items-center justify-center shrink-0 mb-6 group-hover:scale-110 transition-transform duration-500 opacity-90 shadow-lg`}>
                  <s.icon className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 tracking-tight">{s.title}</h3>
                  <p className="text-white/80 font-light leading-relaxed text-sm md:text-[15px] break-keep">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="relative py-32 px-6 border-t border-white/[0.03] overflow-hidden">
        <GlowOrb className="right-0 top-1/2 -translate-y-1/2" color="from-[#1AFFD1]/15 to-[#7B61FF]/10" size="w-[500px] h-[700px]" blur="blur-[140px]" />
        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            className="text-center mb-20"
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
          >
            <motion.div variants={fadeUpVariant}>
              <GradientLabel>Industry Solutions</GradientLabel>
            </motion.div>
            <motion.h2 variants={fadeUpVariant} className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">
              업종별 맞춤 AI 컨설팅
            </motion.h2>
            <motion.p variants={fadeUpVariant} className="text-center text-white/80 font-light max-w-xl mx-auto break-keep">
              대기업이 아니어도 괜찮습니다. 중소기업·스타트업에 최적화된 규모와 비용으로 실질적인 ROI를 제안합니다.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
          >
            {industries.map((ind) => (
              <motion.div
                key={ind.title}
                variants={fadeUpVariant}
                className="rounded-3xl border border-white/5 bg-white/[0.02] p-8 md:p-10 hover:bg-white/[0.04] transition-colors duration-500 backdrop-blur-sm"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-10 h-10 rounded-full bg-[#1AFFD1]/10 flex items-center justify-center border border-[#1AFFD1]/20">
                    <ind.icon className="w-5 h-5 text-[#1AFFD1]" />
                  </div>
                  <h3 className="text-xl font-semibold tracking-tight">{ind.title}</h3>
                </div>
                <ul className="space-y-3">
                  {ind.items.map((item) => (
                    <li key={item} className="text-white/80 font-light text-sm md:text-[15px] flex items-start gap-3">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#1AFFD1]/50 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Highlights */}
      <section className="relative py-20 px-6 border-t border-white/[0.03] overflow-hidden bg-white/[0.01]">
        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12"
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
          >
            {highlights.map((h) => (
              <motion.div key={h.title} variants={fadeUpVariant} className="text-center flex flex-col items-center p-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#1AFFD1]/15 to-[#A0FF1B]/10 flex items-center justify-center mb-6 shadow-inner border border-white/5">
                  <h.icon className="w-8 h-8 text-[#1AFFD1]" />
                </div>
                <h3 className="text-xl font-semibold mb-3 tracking-tight">{h.title}</h3>
                <p className="text-white/80 font-light text-sm md:text-base leading-relaxed break-keep">{h.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="relative py-32 px-6 border-t border-white/[0.03] overflow-hidden">
        <GlowOrb className="-left-[200px] bottom-0" color="from-[#A0FF1B]/15 to-transparent" size="w-[500px] h-[500px]" blur="blur-[130px]" />

        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            className="text-center mb-24"
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
          >
            <motion.div variants={fadeUpVariant}>
              <GradientLabel>Implementation</GradientLabel>
            </motion.div>
            <motion.h2 variants={fadeUpVariant} className="text-3xl md:text-4xl font-semibold tracking-tight">도입 프로세스</motion.h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8"
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
          >
            {processSteps.map((p) => (
              <motion.div key={p.step} variants={fadeUpVariant} className="relative rounded-3xl border border-white/5 bg-white/[0.02] p-8 md:p-10 overflow-hidden backdrop-blur-sm group hover:bg-white/[0.04] transition-colors">
                <span className="text-7xl font-black bg-gradient-to-br from-[#1AFFD1]/20 to-transparent bg-clip-text text-transparent absolute top-2 right-4 tracking-tighter mix-blend-screen scale-110 group-hover:scale-125 transition-transform duration-700">
                  {p.step}
                </span>
                <div className="relative z-10">
                  <h3 className="text-xl font-semibold mb-4 tracking-tight">{p.title}</h3>
                  <p className="text-white/80 font-light leading-relaxed text-[15px]">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
            className="flex flex-col md:flex-row items-center justify-center gap-3 mt-16 text-white/80 font-light text-[15px]"
          >
            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center bg-white/[0.02] mb-2 md:mb-0">
              <Repeat className="w-5 h-5 text-[#1AFFD1]" />
            </div>
            <span>도입 후에도 KPT 사이클을 반복하여 모델 성능과 자동화 품질을 지속적으로 향상시킵니다</span>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32 px-6 border-t border-white/[0.03] overflow-hidden bg-white/[0.01]">
        <GlowOrb className="left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2" color="from-[#7B61FF]/18 to-[#1AFFD1]/10" size="w-[700px] h-[500px]" blur="blur-[170px]" />

        <motion.div
          className="max-w-2xl mx-auto text-center relative z-10"
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
        >
          <motion.h2 variants={fadeUpVariant} className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
            반복 업무에 지치셨나요?
            <br />
            AI가 대신해 드립니다
          </motion.h2>
          <motion.div variants={fadeUpVariant} className="flex flex-col sm:flex-row gap-4 mt-12 justify-center">
            <PrimaryButton href="/contact">무료 시연 및 상담 신청</PrimaryButton>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
