import type { Metadata } from "next";
import AiPipelineClient from "./AiPipelineClient";

export const metadata: Metadata = {
  title: "AI 운영 파이프라인 구축",
  description:
    "AI 에이전트 세팅부터 n8n 자동화, 실제기기 자동화까지. 귀사에 맞는 AI 운영 체계를 구축합니다.",
  openGraph: {
    title: "AI 운영 파이프라인 구축 | Code021",
    description: "AI 에이전트, 워크플로우 자동화, 산업 특화 컨설팅",
    url: "https://www.code0-1.com/services/ai-pipeline",
  },
};

export default function AiPipelinePage() {
  return <AiPipelineClient />;
}
