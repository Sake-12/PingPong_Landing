"use client";

import React from "react";
import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { BodyText, GradientLabel, SectionTitle } from "@/components/ui/styled";

/* ── 파트너사 데이터 ──
 * logo: /partners/ 폴더 안에 이미지를 넣으면 자동 표시
 * 이미지가 없으면 name 텍스트가 대신 표시됩니다.
 */
const partnersData = [
  { name: "arcane inc.", logo: "/partners/arcane.png", width: 384, height: 128, url: "" },
  { name: "BMYM", logo: "/partners/bmym.png", width: 384, height: 128, url: "https://www.bemymarketer.net/" },
  { name: "C&R Korea", logo: "/partners/crkorea.png", width: 384, height: 128, url: "https://www.cnrgraphics.com/" },
  { name: "JOORUNG JOORUNG STUDIO", logo: "/partners/joorung.png", width: 384, height: 128, url: "https://www.joorungstudio.com/" },
  // { name: "효성에프엠에스", logo: "/partners/hyosung.png", width: 384, height: 128, url: "https://www.hyosungfms.com" },
  { name: "단양청년문화협동조합", logo: "/partners/danyang.png", width: 192, height: 64, url: "https://www.instagram.com/lovely_danyang/" },
  { name: "라이온스복지몰", logo: "/partners/Rions.png", width: 384, height: 128, url: "" },
  { name: "슬라이스마인드", logo: "/partners/Slicemind.png", width: 384, height: 128, url: "https://plus.hankyung.com/apps/newsinside.view?aid=202501224165d&category=&sns=y" },
  { name: "핑퐁 주식회사", logo: "/partners/pingpong.png", width: 192, height: 64, url: "https://www.pingpong.house/" },
];

const partnersRow1 = [...partnersData];
const partnersRow2 = [...partnersData].reverse();

function PartnerCard({ name, logo, width, height, url }: { name: string; logo: string; width: number; height: number; url: string }) {
  const content = (
    <div className={`w-70 h-32 shrink-0 rounded-xl border border-white/8 bg-white/[0.03] flex items-center justify-center hover:border-[#1AFFD1]/20 transition-all overflow-hidden px-6${url ? " cursor-pointer" : ""}`}>
      <Image
        src={logo}
        alt={name}
        width={width}
        height={height}
        className="object-contain max-h-16 brightness-0 invert opacity-70 hover:opacity-90 transition-opacity"
        onError={(e) => {
          /* 이미지 로드 실패 시 텍스트 폴백 */
          const target = e.currentTarget;
          target.style.display = "none";
          const parent = target.parentElement;
          if (parent && !parent.querySelector("span")) {
            const span = document.createElement("span");
            span.textContent = name;
            span.className = "text-white/80 text-base font-medium";
            parent.appendChild(span);
          }
        }}
      />
    </div>
  );

  if (url) {
    return (
      <a href={url} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return content;
}

export function Partners() {
  return (
    <Section id="partners" className="py-24 overflow-hidden bg-black border-t border-white/5">
      <div className="text-center mb-16 px-6">
        <GradientLabel>
          Partners
        </GradientLabel>
        <SectionTitle className="mt-4">
          Code021과 함께 성장하는 파트너사
        </SectionTitle>
      </div>

      <div className="space-y-6">
        {/* Row 1 — left to right */}
        <div className="flex overflow-hidden">
          <div className="flex gap-6 animate-marquee-left w-max">
            {/* 파트너사가 5개 뿐이므로 자연스러운 무한 롤링을 위해 더 많이 반복합니다 */}
            {[...partnersRow1, ...partnersRow1, ...partnersRow1, ...partnersRow1, ...partnersRow1, ...partnersRow1].map((partner, index) => (
              <PartnerCard key={`row1-${partner.name}-${index}`} {...partner} />
            ))}
          </div>
        </div>

        {/* Row 2 — right to left */}
        <div className="flex overflow-hidden">
          <div className="flex gap-6 animate-marquee-right w-max">
            {[...partnersRow2, ...partnersRow2, ...partnersRow2, ...partnersRow2, ...partnersRow2, ...partnersRow2].map((partner, index) => (
              <PartnerCard key={`row2-${partner.name}-${index}`} {...partner} />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-100% / 3)); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(calc(-100% / 3)); }
          100% { transform: translateX(0); }
        }
        .animate-marquee-left {
          animation: marquee-left 40s linear infinite;
        }
        .animate-marquee-right {
          animation: marquee-right 45s linear infinite;
        }
      `}</style>
    </Section>
  );
}
