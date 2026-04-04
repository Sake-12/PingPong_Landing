import type { Metadata } from "next";
import MvpClient from "./MvpClient";

export const metadata: Metadata = {
  title: "6주 완성 MVP 개발",
  description:
    "아이디어 검증과 투자 준비를 위한 6주 완성 MVP 신규 개발 서비스. Code021이 기획부터 런칭까지 함께합니다.",
  openGraph: {
    title: "6주 완성 MVP 개발 | Code021",
    description: "아이디어 검증과 투자 준비를 위한 6주 완성 MVP 신규 개발 서비스",
    url: "https://www.code0-1.com/services/mvp",
  },
};

export default function MvpPage() {
  return <MvpClient />;
}
