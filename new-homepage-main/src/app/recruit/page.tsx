import type { Metadata } from "next";
import RecruitClient from "./RecruitClient";

export const metadata: Metadata = {
  title: "채용",
  description:
    "코드021과 함께 성장할 동료를 찾습니다. 클라우드와 다양한 프로젝트를 동시에 경험할 수 있는 환경.",
  openGraph: {
    title: "채용 | Code021",
    description: "코드021과 함께 성장할 동료를 찾습니다.",
    url: "https://www.code0-1.com/recruit",
  },
};

export default function RecruitPage() {
  return <RecruitClient />;
}
