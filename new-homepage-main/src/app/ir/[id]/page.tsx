import Link from "next/link";
import { notFound } from "next/navigation";
import { notices } from "@/data/ir";
import { ArrowLeft } from "lucide-react";

export function generateStaticParams() {
  return notices.map((notice) => ({
    id: notice.id,
  }));
}

export default async function NoticeDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const notice = notices.find((n) => n.id === id);

  if (!notice) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-3xl mx-auto px-6 py-20 md:py-32">
        {/* Back button */}
        <Link
          href="/about"
          className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-12 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          공시 자료 목록
        </Link>

        {/* Header */}
        <div className="border-b border-white/10 pb-8 mb-12">
          <h1 className="typo-section-title text-white mb-4">{notice.title}</h1>
          <p className="text-white/80 text-base">{notice.date}</p>
        </div>

        {/* Content */}
        <article className="prose prose-invert prose-lg max-w-none">
          {notice.content.split("\n\n").map((block, i) => {
            if (block.startsWith("## ")) {
              return (
                <h2 key={i} className="text-2xl font-bold text-white mt-10 mb-4">
                  {block.replace("## ", "")}
                </h2>
              );
            }
            if (block.startsWith("### ")) {
              return (
                <h3 key={i} className="text-xl font-bold text-white mt-8 mb-3">
                  {block.replace("### ", "")}
                </h3>
              );
            }
            if (block.startsWith("- ")) {
              const items = block.split("\n").filter((l) => l.startsWith("- "));
              return (
                <ul key={i} className="space-y-2 my-4">
                  {items.map((item, j) => (
                    <li key={j} className="text-white/80 text-lg flex items-start gap-3">
                      <span className="text-[#1AFFD1] mt-1.5">•</span>
                      {item.replace("- ", "")}
                    </li>
                  ))}
                </ul>
              );
            }
            return (
              <p key={i} className="text-white/80 text-lg leading-relaxed mb-4 break-keep">
                {block}
              </p>
            );
          })}
        </article>

        {/* Footer navigation */}
        <div className="border-t border-white/10 pt-8 mt-16">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#1AFFD1] to-[#A0FF1B] bg-clip-text text-transparent font-semibold hover:opacity-80 transition-opacity"
          >
            ← 공시 자료 목록으로 돌아가기
          </Link>
        </div>
      </div>
    </div>
  );
}
