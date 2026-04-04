"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { GlowOrb, GridPattern } from "@/components/ui/backgrounds";
import { GradientLabel } from "@/components/ui/styled";
import { notices, mediaArticles } from "@/data/ir";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const historyData = [
  {
    year: "2026",
    items: [
      "간병인 매칭 서비스 개발",
      "스타트업 투자 정보 관리 플랫폼 리뉴얼"
    ]
  },
  {
    year: "2025",
    items: [
      "자체 클라우드플랫폼 개발 및 출시",
      "단양군 로컬투어 스탬프 시스템 개발(예쁘면 단양)",
      "마케팅 아카이빙 사이트 개발",
      "청각 장애인 복지정보 확인 서비스 개발",
      "영월군 E-BOOK 감상 서비스 개발(영월보따리)",
      "헬스장 강의용 DID 시스템 개발",
      "중소벤처기업진흥공단 청년창업지원기업 선정",
      "법인 전환"
    ]
  },
  {
    year: "2024",
    items: [
      "자체 MES 프로그램 FlowOne MES 1.0 개발 및 납품",
      "라이온스클럽 복지몰 유지보수 계약",
      "온비드 공매 시각화 시스템 개발",
      "법원 부동산 경매 GIS 시스템 개발",
      "간호사 근무표 자동 생성 프로그램 개발",
      "코드021 설립"
    ]
  }
];

export default function AboutClient() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white w-full">

      {/* Hero (애니메이션 유지) */}
      <section className="relative flex flex-col items-center justify-center min-h-[60vh] px-6 overflow-hidden">
        {/* 배경 이미지 */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/recruit-hero-bg.jpg"
            alt="about hero background"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black" />
        </div>

        <motion.div
          className="relative z-10 flex flex-col max-w-5xl mx-auto w-full gap-8 pt-32 pb-20 px-6 lg:px-0"
          initial="hidden" animate="visible" variants={staggerContainer}
        >
          <motion.div variants={fadeUpVariant} className="flex flex-col items-start gap-3">
            <Image src="/Code021_Logo_White.png" width={200} height={50} alt="Code021" className="mb-1" />
            <div className="text-[26px] md:text-2xl font-semibold bg-gradient-to-r from-[#1AFFD1] to-[#A0FF1B] bg-clip-text text-transparent tracking-wide">
              [CODE + 0 to 1]
            </div>
          </motion.div>

          <motion.p variants={fadeUpVariant} className="text-[17px] md:text-xl text-white/90 font-light leading-[1.8] break-keep max-w-3xl mt-4">
            코드021은 단순한 개발을 넘어, <span className="text-white font-medium">프로덕트 메이킹의 전 과정을</span> 고객과 함께합니다.<br className="hidden md:block" />
            단순히 요청받은 기능만 개발하는 게 아니라, <span className="text-white font-medium">요구사항 분석부터 세부 기획, 디자인 단계까지</span> 고객과 긴밀히 협업하며
            불필요한 기능은 과감히 덜어내고, 놓친 요소는 제안하여 더하는 방식으로 <span className="text-white font-medium">'컨설팅'</span>을 제공합니다.
          </motion.p>

          <motion.h2 variants={fadeUpVariant} className="text-[30px] md:text-4xl font-semibold tracking-tight mt-12 break-keep leading-normal md:leading-normal flex flex-col items-start gap-y-4">
            <span className="inline-block font-bold bg-gradient-to-r from-[#1AFFD1] to-[#A0FF1B] text-black px-4 py-1.5 rounded-lg shadow-[0_0_20px_rgba(26,255,209,0.3)]">성공의 시작,</span>
            <span>Code021이 0에서 1을 함께 하겠습니다.</span>
          </motion.h2>
        </motion.div>
      </section>

      {/* 사업 영역 (애니메이션 제거) */}
      <section className="relative py-32 px-6 border-t border-white/[0.03] overflow-hidden">
        <GlowOrb className="right-0 bottom-0" color="from-[#1AFFD1]/15 to-[#A0FF1B]/10" size="w-[600px] h-[500px]" blur="blur-[150px]" />
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="mb-20">
            <GradientLabel>Business Areas</GradientLabel>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">사업부문</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <BusinessCard
              title="클라우드사업부"
              desc="클라우드 영업 및 고객 니즈 파악부터 인프라 설비 관리, 핵심 기능 고도화에 이르는 전반적인 클라우드 서비스를 책임집니다."
            />
            <BusinessCard
              title="에이전시사업부"
              desc="기획·디자인, 개발, 배포, 유지보수까지 아우르는 IT 에이전시 업무 및 AX·DX 사업을 주도합니다."
            />
            <BusinessCard
              title="사업개발부"
              desc="시장 리서치 및 신규 서비스 기획·개발, 외부 협력 및 제휴, 정부지원사업 수행 등 회사의 핵심 경영지원을 총괄합니다."
            />
          </div>
        </div>
      </section>

      {/* 연혁 디자인 - 완전 중앙 정렬 및 선명한 디자인, 애니메이션 전부 제거 */}
      <section className="relative py-32 px-6 border-t border-white/[0.03] overflow-hidden bg-black">
        <div className="absolute inset-0 bg-black pointer-events-none" />
        
        <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
          <div className="mb-20 text-center flex flex-col items-center">
            <GradientLabel>회사 연혁</GradientLabel>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">코드021의 발자취</h2>
          </div>

          <div className="relative w-full flex flex-col gap-20 mx-auto">
            {/* 중앙 세로 점선 (Dashed Line) */}
            <div className="absolute top-4 bottom-[-100px] w-0 border-l-[3px] border-dashed border-[#A0FF1B]/50 left-[50px] md:left-1/2 md:-translate-x-1/2 z-0"></div>

            {historyData.map((data, index) => (
              <div key={index} className="flex relative w-full items-start">
                
                {/* 글로우 마커 */}
                <div className="absolute left-[50px] md:left-1/2 top-0 mt-[10px] md:mt-[15px] -translate-x-1/2 w-[70px] h-[70px] flex items-center justify-center z-10">
                  <div className="absolute w-full h-full bg-[#A0FF1B] rounded-full blur-[20px] opacity-60"></div>
                  <div className="w-4 h-4 bg-white rounded-full z-10 shadow-[0_0_15px_#A0FF1B]"></div>
                </div>

                {/* 데스크탑 좌측 공백 (md 이상) */}
                <div className="hidden md:block w-1/2"></div>
                
                {/* 내용 영역 */}
                <div className="pl-[100px] md:pl-[60px] md:w-1/2 flex flex-col items-start w-full">
                  <h3 className="text-[#A0FF1B] text-[44px] md:text-[52px] leading-tight mb-6 font-extrabold tracking-tight">
                    {data.year}
                  </h3>
                  <ul className="flex flex-col gap-[18px]">
                    {data.items.map((item, i) => (
                      <li key={i} className="text-white/90 text-[16px] md:text-[18px] font-bold tracking-tight break-keep">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 공시 자료 (게시판형 List View) - 완전히 주석 처리 */}
      {/* 
      <section className="relative py-32 px-6 border-t border-white/[0.03] overflow-hidden">
        <GridPattern className="opacity-[0.02] absolute inset-0 mix-blend-screen" />
        <GlowOrb className="-right-[200px] top-0" color="from-[#1AFFD1]/10 to-transparent" size="w-[500px] h-[500px]" blur="blur-[140px]" />
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="flex flex-col mb-16 items-center text-center">
            <GradientLabel>IR</GradientLabel>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">공시 자료</h2>
          </div>

          <div className="border-t border-white/10">
            <div className="hidden md:grid grid-cols-[1fr_120px] gap-4 py-4 border-b border-white/10 text-white/80 text-[15px] uppercase tracking-wider px-4">
              <div>제목</div>
              <div className="text-right">날짜</div>
            </div>

            {notices.map((notice, index) => (
              <Link
                key={notice.id}
                href={`/ir/${notice.id}`}
                className="group block"
              >
                <div className="grid grid-cols-1 md:grid-cols-[1fr_120px] gap-2 md:gap-4 py-6 border-b border-white/5 px-4 hover:bg-white/[0.03] transition-colors items-center">
                  <div className="flex items-center gap-4">
                    <span className="hidden md:flex items-center justify-center w-8 h-8 rounded bg-white/5 text-white/80 text-sm">
                      {String(notices.length - index).padStart(2, "0")}
                    </span>
                    <h3 className="text-lg font-medium text-white/90 group-hover:text-[#1AFFD1] transition-colors truncate">
                      {notice.title}
                    </h3>
                  </div>
                  <div className="flex items-center justify-between md:justify-end text-sm text-white/80">
                    <span className="md:hidden">날짜</span>
                    <span>{notice.date}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      */}

      {/* 코드021 관련 기사 (애니메이션 제거) */}
      <section className="relative py-32 px-6 border-t border-white/[0.03] overflow-hidden bg-white/[0.01]">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none" />
        <GlowOrb className="-left-[200px] top-1/3" color="from-[#A0FF1B]/12 to-transparent" size="w-[500px] h-[500px]" blur="blur-[140px]" />

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="mb-20 text-center">
            <GradientLabel>Media</GradientLabel>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">코드021 미디어 소식</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 max-w-4xl mx-auto">
            {mediaArticles.map((article) => (
              <a
                key={article.id}
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-5"
              >
                <div className="w-full aspect-[343/225] rounded-3xl overflow-hidden border border-white/5">
                  <img
                    src={article.imageUrl}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white text-center group-hover:text-[#1AFFD1] transition-colors break-keep">
                  <span className="text-[#A0FF1B] mr-2">[{article.source}]</span>
                  {article.title}
                </h3>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function BusinessCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="group rounded-3xl border border-white/5 bg-white/[0.02] p-10 flex flex-col h-full hover:bg-white/[0.04] transition-colors duration-500 backdrop-blur-sm">
      <div className="w-10 h-10 mb-8 rounded-full bg-gradient-to-r from-[#1AFFD1]/10 to-[#A0FF1B]/10 flex items-center shadow-[0_0_15px_rgba(26,255,209,0.1)] group-hover:shadow-[0_0_25px_rgba(26,255,209,0.2)] transition-shadow duration-500">
        <div className="w-2 h-2 ml-4 rounded-full bg-gradient-to-r from-[#1AFFD1] to-[#A0FF1B]" />
      </div>
      <h3 className="text-xl font-semibold text-white mb-4 tracking-tight">{title}</h3>
      <p className="text-white/90 font-light leading-relaxed text-sm md:text-base break-keep">{desc}</p>
    </div>
  );
}
