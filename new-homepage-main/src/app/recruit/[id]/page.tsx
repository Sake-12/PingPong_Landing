import Link from "next/link";
// Force rebuild
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { positions } from "@/data/recruit";



// Generate static params for all positions
export function generateStaticParams() {
  return positions.map((position) => ({
    id: position.id,
  }));
}

export default async function RecruitDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const position = positions.find((p) => p.id === id);

  if (!position) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen bg-black text-white pt-24 pb-32 relative">
      <div className="max-w-3xl mx-auto px-6 w-full">
        {/* Back Button */}
        <Link
          href="/recruit"
          className="inline-flex items-center text-white/80 hover:text-white transition-colors mb-12 group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          채용 목록으로 돌아가기
        </Link>
        
        {/* Header */}
        <div className="mb-16 border-b border-white/10 pb-12">
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1.5 rounded-full bg-[#1AFFD1]/10 border border-[#1AFFD1]/30 text-[#1AFFD1] typo-body font-semibold">
              {position.experience}
            </span>
            {position.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 rounded-full border border-white/10 text-white/80 typo-body"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="typo-display text-3xl md:text-5xl lg:text-6xl mb-8 leading-tight">
            {position.title}
          </h1>
          <p className="typo-body-large text-white/80 whitespace-pre-line leading-relaxed">
            {position.description}
          </p>
        </div>

        {/* Content Details */}
        <div className="space-y-16">
          <Section title="주요 업무" items={position.responsibilities} />
          <Section title="자격 요건" items={position.requirements} />
          <Section title="우대 사항" items={position.preferred} />
          <Section title="혜택 및 복지" items={position.benefits} />
        </div>

        {/* Apply Section (Desktop) */}
        <div className="hidden md:block mt-24 pt-12 border-t border-white/10 text-center">
          <h2 className="typo-subtitle mb-4">함께 성장하고 싶다면</h2>
          <p className="typo-body text-white/80 mb-8">
            자유 양식의 이력서와 포트폴리오를 메일로 보내주세요.
          </p>
          <a
            href={`mailto:recruit@code0-1.com?subject=[${position.title}] 지원합니다`}
            className="inline-block rounded-xl bg-gradient-to-bl from-[#D9FF89] to-[#E1FFA1] px-16 py-5 text-xl font-bold text-[#0C120E] transition-transform hover:scale-[1.02] shadow-[0_0_20px_rgba(160,255,27,0.2)] hover:shadow-[0_0_30px_rgba(160,255,27,0.4)]"
          >
            지원하기
          </a>
        </div>
      </div>

      {/* Sticky Apply Button (Mobile) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-black/80 backdrop-blur-md border-t border-white/10 z-40">
        <a
          href={`mailto:recruit@code0-1.com?subject=[${position.title}] 지원합니다`}
          className="block w-full rounded-xl bg-gradient-to-bl from-[#D9FF89] to-[#E1FFA1] py-4 text-center text-lg font-bold text-[#0C120E]"
        >
          지원하기
        </a>
      </div>
    </div>
  );
}

function Section({ title, items }: { title: string; items: string[] }) {
  if (!items || items.length === 0) return null;
  return (
    <section>
      <h3 className="typo-subtitle text-[#1AFFD1] mb-6 flex items-center">
        <span className="w-1.5 h-1.5 rounded-full bg-[#1AFFD1] mr-3" />
        {title}
      </h3>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index} className="flex items-start text-white/80 typo-body leading-relaxed">
            <span className="mr-3 text-white/80">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
