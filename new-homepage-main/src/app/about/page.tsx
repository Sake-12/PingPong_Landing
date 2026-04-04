import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "회사소개",
  description:
    "주식회사 코드021은 서비스 기획, 디자인, 웹·앱 개발, 운영까지 수행하는 종합 IT 기업입니다. 클라우드 플랫폼, 업무·공공 시스템 구축까지.",
  openGraph: {
    title: "회사소개 | Code021",
    description: "고객의 성공을 만드는 기업 — 당신의 Zero to One을 함께합니다.",
    url: "https://www.code0-1.com/about",
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
