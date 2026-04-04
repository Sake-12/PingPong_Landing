"use client";

import React, { useState } from "react";
import { Check, Phone } from "lucide-react";
import { GradientLabel, SectionTitle, PrimaryButton } from "@/components/ui/styled";
import { GlowOrb } from "@/components/ui/backgrounds";

const plans = [
  {
    name: "Basic",
    monthlyPrice: 50,
    yearlyPrice: 45,
    recommend: "서비스 유지보수 또는 노코드 툴로 구성된 웹 서비스 관리가 필요한 팀",
    features: [
      "실시간 소통 채널 운영",
      "서버 운영 및 유지보수",
      "서비스 전담 담당자 배정",
      "디자인 수정 & 섹션별 퍼블리싱 작업",
    ],
  },
  {
    name: "Pro",
    monthlyPrice: 180,
    yearlyPrice: 140,
    recommend: "서비스 운영 및 최적화, 추가 기능 개발이 필요한 팀",
    features: [
      "실시간 소통 채널 운영",
      "서버 운영 및 유지보수",
      "서비스 전담 담당자 배정",
      "추가 기능 개발",
      "최적화 작업 진행 및 관련 보고서 제공",
    ],
  },
  {
    name: "Premium",
    monthlyPrice: 350,
    yearlyPrice: 310,
    recommend: "본격적인 서비스 스케일업을 진행중인 기업",
    features: [
      "실시간 소통 채널 운영",
      "서버 운영 및 유지보수",
      "분야별 전담팀 배정",
      "서비스 설계 변경 및 리팩토링",
      "빠른 속도를 보장하는 추가기능 개발",
    ],
  },
  {
    name: "Enterprise",
    isEnterprise: true,
    phone: "010-2059-2826",
    recommend: "실질적인 사내 개발팀이 필요한 기업이나 필요한 개발 포지션이 명확한 팀",
    features: [
      "하위 모든 플랜 기능 기본 풀패키지 제공",
      "기업 맞춤형 전담 개발팀 구성 및 파견 수준의 밀착 지원",
      "보안 컨설팅 및 대규모 트래픽 아키텍처 최적화",
      "원하는 커뮤니케이션 툴 및 프로세스 커스텀 셋업",
    ],
  },
];

export function PricingPlans() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section className="relative py-24 px-6 border-t border-white/5 overflow-hidden">
      <GlowOrb className="left-1/2 -translate-x-1/2 -top-[100px]" color="from-[#A0FF1B]/20 to-[#1AFFD1]/15" size="w-[800px] h-[500px]" blur="blur-[170px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.01] via-transparent to-transparent pointer-events-none" />
      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="text-center mb-12">
          <GradientLabel>개발팀 구독하기</GradientLabel>
          <SectionTitle className="mt-4">
            합리적인 가격으로 실시간 대응이 가능한
            <br />
            개발팀을 구독하세요.
          </SectionTitle>
        </div>

        {/* 월간/연간 토글 */}
        <div className="flex items-center justify-center gap-4 mb-14">
          <span className={`typo-body font-medium transition-colors ${!isYearly ? "text-white" : "text-white/80"}`}>월간</span>
          <button
            onClick={() => setIsYearly(!isYearly)}
            className={`relative w-14 h-7 rounded-full transition-colors ${isYearly ? "bg-gradient-to-r from-[#1AFFD1] to-[#A0FF1B]" : "bg-white/20"}`}
          >
            <div className={`absolute top-1 w-5 h-5 rounded-full bg-black transition-transform ${isYearly ? "left-8" : "left-1"}`} />
          </button>
          <span className={`typo-body font-medium transition-colors ${isYearly ? "text-white" : "text-white/80"}`}>연간</span>
        </div>

        {/* 플랜 카드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="group relative min-h-[560px] rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-7 flex flex-col backdrop-blur-sm hover:border-[#1AFFD1]/40 transition-all duration-300"
            >
              {/* 상단 그라디언트 라인 */}
              <div className="absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-[#1AFFD1]/50 to-transparent" />

              <h3 className="text-2xl font-bold mb-5">{plan.name}</h3>

              {/* 가격 */}
              {"isEnterprise" in plan && plan.isEnterprise ? (
                <>
                  <div className="mb-2">
                    <div className="flex items-end h-[52px]">
                      <span className="text-[44px] font-black leading-none tracking-tight whitespace-nowrap">
                        별도 문의
                      </span>
                    </div>
                  </div>
                  <p className="text-[#1AFFD1]/90 text-sm mb-6 flex items-center gap-2 font-semibold">
                    <Phone className="w-4 h-4" />
                    {plan.phone}
                  </p>
                </>
              ) : (
                <>
                  <div className="mb-2">
                    <div className="flex items-end h-[52px]">
                      <div className="relative">
                        {isYearly && (
                          <span className="absolute -top-5 left-0 text-[13px] text-red-400 line-through">
                            -{(plan as any).monthlyPrice}
                          </span>
                        )}
                        <span className="text-[52px] font-black leading-none tracking-tight">
                          {isYearly ? (plan as any).yearlyPrice : (plan as any).monthlyPrice}
                        </span>
                      </div>
                      <span className="text-lg text-white/80 ml-1.5 mb-1.5 whitespace-nowrap">만원</span>
                    </div>
                  </div>
                  <p className="text-white/80 text-sm mb-6">VAT 별도</p>
                </>
              )}

              {/* CTA 버튼 */}
              <PrimaryButton href="/contact" className="w-full text-center mb-7">
                구독 문의하기
              </PrimaryButton>

              {/* 추천 대상 */}
              <div className="mb-5">
                <p className="text-white font-bold text-sm mb-1.5">이런 팀에 추천해요!</p>
                <p className="text-white/80 text-sm leading-relaxed">{plan.recommend}</p>
              </div>

              {/* 구분선 */}
              <div className="h-px bg-gradient-to-r from-white/10 via-white/5 to-transparent mb-5" />

              {/* 기능 목록 */}
              <ul className="space-y-3 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className="w-[18px] h-[18px] rounded-full bg-gradient-to-br from-[#1AFFD1]/30 to-[#A0FF1B]/20 flex items-center justify-center shrink-0 mt-px">
                      <Check className="w-3 h-3 text-[#1AFFD1]" strokeWidth={3} />
                    </div>
                    <span className="text-white/80 text-sm leading-snug">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
