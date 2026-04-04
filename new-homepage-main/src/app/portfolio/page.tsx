import type { Metadata } from "next";
import Link from "next/link";
import { Portfolio } from "@/components/sections/Portfolio";
import { ArrowLeft } from "lucide-react";
import { GradientLabel, PrimaryButton } from "@/components/ui/styled";
import { GlowOrb } from "@/components/ui/backgrounds";

export const metadata: Metadata = {
  title: "포트폴리오",
  description:
    "Code021이 함께 만들어 온 서비스와 시스템입니다. 기획부터 개발·운영까지 어떤 방식으로 일했는지 확인해 보세요.",
  openGraph: {
    title: "포트폴리오 | Code021",
    description: "코드021의 개발 포트폴리오 — 기획부터 개발·운영까지.",
    url: "https://www.code0-1.com/portfolio",
  },
};

export default function PortfolioPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">

      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center pt-32 pb-16 px-6 overflow-hidden">
        <GlowOrb className="left-1/2 -translate-x-1/2 -top-[100px]" color="from-[#1AFFD1]/20 to-[#A0FF1B]/15" size="w-[700px] h-[600px]" blur="blur-[120px]" />

        <GradientLabel className="text-xl">
          Portfolio
        </GradientLabel>
        <h1 className="typo-section-title leading-tight break-keep text-center">
          코드021의 작업물을 확인하세요.
        </h1>
        <p className="typo-body-large text-white/80 break-keep text-center max-w-2xl">
          단순히 개발만 하는 것이 아닌 산업군에 대한 깊은 이해 기반으로
          <br />
          탄탄한 설계와 빠른 개발 속도를 자부합니다.
        </p>
      </section>

      <Portfolio />

      {/* CTA */}
      <section className="relative py-24 text-center px-6 overflow-hidden">
        <GlowOrb className="left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2" color="from-[#1AFFD1]/20 to-[#A0FF1B]/15" size="w-[600px] h-[400px]" blur="blur-[150px]" />
        <h2 className="text-2xl font-bold text-white mb-6">
          다음 성공 사례의 주인공이 되어보세요.
        </h2>
        <PrimaryButton href="/contact" className="inline-flex">
          프로젝트 문의하기
        </PrimaryButton>
      </section>
    </div>
  );
}
