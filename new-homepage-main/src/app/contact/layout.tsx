import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "문의하기",
  description:
    "Code021에 프로젝트를 문의하세요. 회사명, 연락처, 서비스 설명, 예산 범위를 입력하시면 빠른 시일 내로 연락드리겠습니다.",
  openGraph: {
    title: "문의하기 | Code021",
    description: "귀사의 성공적인 비즈니스 구축, CODE021이 함께하겠습니다.",
    url: "https://www.code0-1.com/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
