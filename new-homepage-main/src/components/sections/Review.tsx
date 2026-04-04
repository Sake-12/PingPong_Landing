"use client";

import { Star } from "lucide-react";
import { GradientLabel, SectionTitle } from "@/components/ui/styled";

const reviews = [
  {
    id: 1,
    text: "복잡한 요구사항도 완벽하게 이해하고 구현해주셨습니다. 특히 개발 후 유지보수까지 꼼꼼하게 챙겨주셔서 마음 편히 서비스를 운영하고 있습니다.",
    author: "김OO 대표",
    company: "이커머스 스타트업 A사",
    rating: 5,
  },
  {
    id: 2,
    text: "기획 단계부터 적극적으로 아이디어를 제안해주신 덕분에 예상보다 더 좋은 결과물이 나왔습니다. 소통이 원활해서 믿고 맡길 수 있었습니다.",
    author: "이OO PM",
    company: "핀테크 기업 B사",
    rating: 5,
  },
  {
    id: 3,
    text: "개발 일정이 촉박했는데도 약속된 기한 내에 높은 퀄리티로 완성해주셨습니다. 코드 품질도 매우 훌륭해서 내부 개발팀이 만족스러워했습니다.",
    author: "박OO CTO",
    company: "헬스케어 플랫폼 C사",
    rating: 5,
  },
  {
    id: 4,
    text: "디자인과 퍼블리싱 퀄리티가 기대 이상이었습니다. 사용자 반응도 좋고, 관리자 페이지도 사용하기 편하게 만들어주셔서 감사합니다.",
    author: "최OO 팀장",
    company: "교육 서비스 D사",
    rating: 5,
  },
  {
    id: 5,
    text: "클라우드 인프라 구축부터 보안 설정까지 전문적으로 처리해주셨습니다. 덕분에 서비스 안정성이 크게 향상되었습니다.",
    author: "정OO 이사",
    company: "SaaS 기업 E사",
    rating: 5,
  },
];

export function Review() {
  // Double the items for seamless loop
  const doubledReviews = [...reviews, ...reviews];

  return (
    <section className="bg-black py-24 md:py-32 border-t border-white/5 overflow-hidden">
      <div className="flex flex-col items-center px-6 mb-16">
        <GradientLabel>
          Client Reviews
        </GradientLabel>
        <SectionTitle>
          고객이 증명하는 Code021
        </SectionTitle>
      </div>

      {/* CSS Marquee — no JS, no jank */}
      <div className="relative w-full">
        <div className="flex animate-marquee-review gap-6 w-max hover:[animation-play-state:paused]">
          {doubledReviews.map((review, idx) => (
            <div
              key={`${review.id}-${idx}`}
              className="w-[280px] md:w-[400px] shrink-0 h-full flex flex-col justify-between rounded-2xl border border-white/5 bg-white/5 p-6 md:p-8 transition-colors hover:border-[#1AFFD1]/30 hover:bg-white/[0.07]"
            >
              <div>
                <div className="flex gap-1 mb-6 text-[#1AFFD1]">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-white/80 text-lg leading-relaxed break-keep mb-8">
                  &ldquo;{review.text}&rdquo;
                </p>
              </div>
              <div>
                <p className="text-white font-bold text-xl">{review.author}</p>
                <p className="text-white/80 text-base mt-1">{review.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee-review {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-review {
          animation: marquee-review 40s linear infinite;
        }
      `}</style>
    </section>
  );
}
