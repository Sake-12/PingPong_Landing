import type { Metadata } from "next";
import SubscriptionClient from "./SubscriptionClient";

export const metadata: Metadata = {
  title: "개발팀 구독 서비스",
  description:
    "안정적인 운영과 추가 기능 개발을 위한 월 구독형 개발팀 서비스. 전담 개발팀이 귀사의 서비스를 지속적으로 관리합니다.",
  openGraph: {
    title: "개발팀 구독 서비스 | Code021",
    description: "안정적 운영, 추가 기능 개발, 전담 개발팀 — 월 구독형 서비스",
    url: "https://www.code0-1.com/services/subscription",
  },
};

export default function SubscriptionPage() {
  return <SubscriptionClient />;
}
