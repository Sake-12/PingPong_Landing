import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

/* ─────────────────────────────────────────────────────
 * 공통 스타일드 컴포넌트
 * 프로젝트 전역에서 반복 사용되는 UI 패턴을 통합 관리합니다.
 * ────────────────────────────────────────────────────── */

/* ── GradientLabel ──
 * 그라데이션 섹션 라벨 (예: "믿을 수 있는 외주", "Portfolio", "Code021 Cloud")
 * 사용: page.tsx, Review.tsx, Partners.tsx 등 각 섹션 상단
 */
export function GradientLabel({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-block w-fit mb-6 bg-gradient-to-r from-[#1AFFD1] to-[#A0FF1B] bg-clip-text text-[12px] sm:text-[14px] md:text-[20px] font-semibold text-transparent tracking-wide",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}

/* ── SectionTitle ──
 * 섹션 메인 타이틀 (예: "코드021이 끝까지 책임지겠습니다.")
 * 사용: page.tsx 각 섹션, Review.tsx
 */
export function SectionTitle({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2
      className={cn(
        "text-center typo-section-title max-[520px]:!text-[22px] break-keep",
        className
      )}
      {...props}
    >
      {children}
    </h2>
  );
}

/* ── BodyText ──
 * 일반 설명글 텍스트 (text-white/85, font-light, text-lg md:text-xl)
 * 사용: Hero 섹션의 상세 설명, 각 컴포넌트 하단 설명글 등
 */
export const BodyText = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ children, className, ...props }, ref) => {
  return (
    <p
      ref={ref}
      className={cn(
        "text-lg md:text-xl text-white/85 font-light leading-relaxed max-w-2xl break-keep",
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
});
BodyText.displayName = "BodyText";

/* ── PrimaryButton ──
 * 주요 CTA 버튼 (민트색 그라데이션)
 * 사용: "문의하기" 등
 */
export function PrimaryButton({
  children,
  className,
  href,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center px-8 py-3 rounded-full bg-gradient-to-r from-[#1AFFD1] to-[#A0FF1B] text-black font-semibold text-[15px] hover:opacity-90 transition-opacity",
        className
      )}
      {...props}
    >
      {children}
    </Link>
  );
}

/* ── SecondaryButton ──
 * 보조 CTA 버튼 (테두리만)
 * 사용: "채용 공고 보기" 등
 */
export function SecondaryButton({
  children,
  className,
  href,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center px-8 py-3 rounded-full border border-white/20 text-white font-semibold text-[15px] hover:bg-white/10 transition-colors",
        className
      )}
      {...props}
    >
      {children}
    </Link>
  );
}

/* ── ContentSection ──
 * 공통 섹션 wrapper (padding, 중앙 정렬 등)
 * 사용: page.tsx 각 전체 섹션
 */
export function ContentSection({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <section
      className={cn(
        "bg-black text-white py-24 md:py-32 flex flex-col items-center px-6 border-t border-white/5",
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}

/* ── GradientLink ──
 * 그라데이션 텍스트 링크
 * 사용: "클라우드 소개 페이지로 →" 등
 */
export function GradientLink({
  children,
  className,
  href,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) {
  return (
    <Link
      href={href}
      className={cn(
        "mt-10 inline-block bg-gradient-to-r from-[#1AFFD1] to-[#A0FF1B] bg-clip-text text-transparent font-semibold text-[15px] hover:opacity-80 transition-opacity",
        className
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
