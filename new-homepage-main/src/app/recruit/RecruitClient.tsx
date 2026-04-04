"use client";

import { ArrowRight, ChevronRight, Coffee } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { positions } from "@/data/recruit";
import { GradientLabel, BodyText, SectionTitle } from "@/components/ui/styled";
import { GlowOrb } from "@/components/ui/backgrounds";

/* ── Landing 프로젝트에서 이전된 카드형 프로세스 컴포넌트 ── */
function ProcessCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="relative w-full lg:w-[213px] h-[280px] shrink-0 rounded-[24px] border border-white/[0.08] bg-white/[0.03] overflow-hidden px-[21px] pt-[33px] hover:bg-white/[0.05] transition-colors duration-500 backdrop-blur-sm">
      <div className="flex flex-col gap-[20px]">
        <Image src={icon} alt="" width={36} height={36} className="w-[36px] h-[36px]" />
        <div className="flex flex-col gap-[16px]">
          <h3 className="text-[20px] font-bold leading-[28px] bg-gradient-to-b from-[#1AFFD1] to-[#A0FF1B] bg-clip-text text-transparent whitespace-nowrap">
            {title}
          </h3>
          <p className="text-[16px] font-normal leading-[32.5px] text-white/60">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

/* ── Landing 프로젝트에서 이전된 커넥터 + 최종 단계 컴포넌트 ── */
function FinalStepCard() {
  return (
    <div className="flex flex-col items-center w-full">
      {/* 커넥터 도트 (인라인 SVG - 색상 통일) */}
      <div className="flex flex-col items-center pt-[164px]">
        <svg width="32" height="90" viewBox="0 0 32 90" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[32px] h-[90px]">
          {/* 세로 라인 */}
          <rect x="15" y="0" width="2" height="58" fill="url(#connLineGrad)"/>
          {/* 도넛 원형 */}
          <circle cx="16" cy="74" r="8" stroke="url(#connCircleGrad)" strokeWidth="4" fill="none"/>
          {/* 은은한 글로우 */}
          <circle cx="16" cy="74" r="12" fill="url(#connGlow)" opacity="0.5"/>
          <defs>
            <linearGradient id="connLineGrad" x1="16" y1="0" x2="16" y2="58" gradientUnits="userSpaceOnUse">
              <stop stopColor="#43FFC1" stopOpacity="0.1"/>
              <stop offset="1" stopColor="#51FFAE"/>
            </linearGradient>
            <linearGradient id="connCircleGrad" x1="16" y1="62" x2="16" y2="86" gradientUnits="userSpaceOnUse">
              <stop stopColor="#43FFC1"/>
              <stop offset="1" stopColor="#94FF54"/>
            </linearGradient>
            <radialGradient id="connGlow" cx="16" cy="74" r="12" gradientUnits="userSpaceOnUse">
              <stop stopColor="#43FFC1" stopOpacity="0.6"/>
              <stop offset="1" stopColor="#43FFC1" stopOpacity="0"/>
            </radialGradient>
          </defs>
        </svg>
      </div>

      {/* 최종 카드 */}
      <div className="relative w-full rounded-[24px] overflow-hidden bg-white/[0.03] backdrop-blur-sm">
        <div className="flex items-center justify-center px-[32px] py-[40px]">
          <div className="flex flex-col items-center gap-[16px] max-w-[607px]">
            <h3 className="text-[24px] font-bold leading-[32px] text-white text-center w-full">
              처우협의 및 입사
            </h3>
            <p className="text-[20px] font-normal leading-[24px] text-white/60 text-center w-full">
              최종 합격을 안내한 후 처우 협상 및 최종 입사일을 조율합니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Landing 프로젝트에서 이전된 대형 CultureCard ── */
function CultureCardLarge({ title, description, icon }: { title: string; description: string; icon: string }) {
  return (
    <div className="group w-full lg:w-[308px] h-[431px] shrink-0 rounded-[24px] overflow-hidden py-[32px] pl-0 pr-0 flex flex-col bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-700 backdrop-blur-sm hover:shadow-[0_0_40px_rgba(160,255,27,0.12)]">
      <div className="flex flex-col justify-between flex-1">
        <div className="flex flex-col gap-[9px]">
          <h3 className="text-[20px] font-bold leading-[28px] text-white min-h-[86px] flex items-center group-hover:text-[#A0FF1B] transition-colors duration-500">
            {title}
          </h3>
          <p className="text-[16px] font-normal leading-[24px] text-white/60">
            {description}
          </p>
        </div>
        <Image src={icon} alt="" width={64} height={64} className="w-[64px] h-[64px] group-hover:scale-110 transition-transform duration-700 ease-out" />
      </div>
    </div>
  );
}

export default function RecruitClient() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white w-full">

      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center min-h-[60vh] px-6 overflow-hidden md:min-h-[70vh]">
        {/* 배경 이미지 */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/recruit-hero-bg.jpg"
            alt="recruit hero background"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black" />
        </div>

        <div className="relative z-10 flex flex-col items-center text-center max-w-3xl gap-8">
          <div>
            <GradientLabel>
              Recruit
            </GradientLabel>
          </div>
          <h1 className="typo-section-title leading-tight break-keep font-medium tracking-tight">
            코드021과 함께 성장할<br />동료를 찾습니다
          </h1>
          <div>
            <BodyText className="text-center mt-4 max-w-2xl font-semibold">
              AI 네이티브 시대, <br />
              AI에게 대체되지 않을 엣지 있는 인재를 찾습니다.
            </BodyText>
          </div>
        </div>
      </section>

      {/* 핵심 메시지 */}
      <section className="relative py-24 md:py-32 px-6 border-t border-white/[0.03] overflow-hidden">
        <GlowOrb className="left-1/2 -translate-x-1/2 -top-[200px]" color="from-[#1AFFD1]/10 to-[#A0FF1B]/8" size="w-[800px] h-[800px]" blur="blur-[150px]" />
        <div className="max-w-4xl mx-auto z-10 relative">
          <div className="mb-12">
            <GradientLabel>Ideal Candidate</GradientLabel>
            <SectionTitle className="text-left mb-6 font-semibold tracking-tight">코드021이 찾는 인재</SectionTitle>
            <BodyText className="mt-4">
              AI 시대에 중요한 것은 단순 구현 여부가 아닌 어떠한 문제를 해결하였는가 입니다.
              <br className="hidden md:block"/>
              단순하게 구현만 할 수 있는 사람이 아닌, 스스로 문제를 정의하여 해결해나갈 수 있는 사람을 원합니다.
            </BodyText>
          </div>

          <ul className="flex flex-col gap-4">
            {[
              {
                title: "빠른 실행력을 가진 인재",
                desc: "불완전한 상황에서도 빠르게 실행하고, 그 과정에서 스스로 인사이트를 얻는 사람"
              },
              {
                title: "예의와 기본기를 갖춘 인재",
                desc: "겸손한 자세로 클라이언트와 동료의 피드백을 수용하고 빠르게 반영하는 사람"
              },
              {
                title: "강인한 정신력과 몰입도를 가진 인재",
                desc: "스타트업 특유의 불확실성과 빠른 변화 속에서도 코드021의 비전과 문화에 몰입할 수 있는 사람"
              }
            ].map((item, i) => (
              <li 
                key={i}
                className="flex items-start gap-4 p-6 md:p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors"
              >
                <div className="mt-2.5 shrink-0">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#1AFFD1] to-[#A0FF1B] shadow-[0_0_8px_rgba(26,255,209,0.5)]" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg md:text-xl text-white mb-2 tracking-tight">{item.title}</h3>
                  <p className="text-white/80 font-light leading-relaxed text-[15px] md:text-base break-keep">{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 채용 프로세스 */}
      <section className="relative py-24 md:py-32 px-6 border-t border-white/[0.03] overflow-hidden">
        <GlowOrb className="-right-[200px] top-1/3" color="from-[#1AFFD1]/10 to-transparent" size="w-[500px] h-[500px]" blur="blur-[150px]" />
        <div className="max-w-5xl mx-auto z-10 relative">
          <div className="mb-12 md:mb-16">
            <GradientLabel>Hiring Process</GradientLabel>
            <SectionTitle className="text-left font-semibold tracking-tight">채용 프로세스</SectionTitle>
          </div>

          {/* 카드형 프로세스 뷰 */}
          <div>
            {/* 그라디언트 라인 */}
            <div className="w-full mb-[25px] hidden lg:block">
              <svg className="w-full h-[14px]" viewBox="0 0 998 14" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="lineGrad" x1="0" y1="0" x2="998" y2="0" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#1AFFD1" />
                    <stop offset="1" stopColor="#A0FF1B" />
                  </linearGradient>
                </defs>
                <path d="M998 14H0V10H993L983 0H988L998 10V14Z" fill="url(#lineGrad)" />
              </svg>
            </div>

            {/* 프로세스 카드 + 화살표 */}
            <div className="flex flex-col lg:flex-row items-center gap-[20px] w-full">
              <ProcessCard icon="/recruit/icon-document.svg" title="서류 전형" description="자격요건과 자기소개서를 통해 1차역량을 검증합니다." />
              <svg className="w-[9px] h-[20px] shrink-0 hidden lg:block" viewBox="0 0 9 20" fill="none"><path d="M0 20V0L9 10L0 20Z" fill="#B5B5B5"/></svg>
              <ProcessCard icon="/recruit/icon-person.svg" title="인적성 검사" description="직무 적합성과 조직 문화 적합도를 확인하기 위한 검사를 진행합니다." />
              <svg className="w-[9px] h-[20px] shrink-0 hidden lg:block" viewBox="0 0 9 20" fill="none"><path d="M0 20V0L9 10L0 20Z" fill="#B5B5B5"/></svg>
              <ProcessCard icon="/recruit/icon-communication.svg" title="인터뷰 전형" description="직무역량 경험에 대한 이야기로 코드 021의 문화에 적합한지 확인합니다." />
              <svg className="w-[9px] h-[20px] shrink-0 hidden lg:block" viewBox="0 0 9 20" fill="none"><path d="M0 20V0L9 10L0 20Z" fill="#B5B5B5"/></svg>
              <ProcessCard icon="/recruit/icon-assignment.svg" title="과제 전형" description="실무 역량을 확인하기 위한 직무 관련 과제를 수행합니다." />
            </div>

            {/* 커넥터 + 최종 단계 카드 */}
            <FinalStepCard />
          </div>
        </div>
      </section>



      {/* 이렇게 일합니다 */}
      <section className="relative py-24 md:py-32 px-6 border-t border-white/[0.03] overflow-hidden">
        <GlowOrb className="-right-[200px] top-1/3" color="from-[#1AFFD1]/15 to-transparent" size="w-[600px] h-[600px]" blur="blur-[150px]" />
        <div className="max-w-[998px] mx-auto z-10 relative">
          <GradientLabel>코드 021의 업무 방식</GradientLabel>
          <SectionTitle className="text-left font-semibold tracking-tight text-[36px] lg:text-[54px] leading-tight mt-[17px]">
            지속적인 피드백을 바탕으로,<br />
            성장하는 인재가 될 수 있도록,
          </SectionTitle>

          <div className="flex flex-col lg:flex-row gap-[37px] mt-[53px] w-full">
              <CultureCardLarge
                title="데이터 중심의 문제 해결"
                description="감이 아닌 데이터로 판단합니다. 정량적 근거를 바탕으로 문제를 정의하고 해결합니다."
                icon="/recruit/icon-infinity.svg"
              />
              <CultureCardLarge
                title="리뷰와 피드백 중심"
                description="누구나 편하게 의견을 낼 수 있습니다. 솔직한 피드백은 서로의 성장을 돕는다고 생각합니다."
                icon="/recruit/icon-feedback.svg"
              />
              <CultureCardLarge
                title="지속적인 업무 프로세스 개선"
                description="항상 더 효율적으로 일하기 위해 노력합니다. 불필요한 과정은 줄이고, 반복적인 업무는 자동화합니다."
                icon="/recruit/icon-process.svg"
              />
          </div>
        </div>
      </section>

      {/* 복지 */}
      <section className="relative py-24 md:py-32 px-6 border-t border-white/[0.03] overflow-hidden bg-black">
        {/* Background Accents */}
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.02] bg-center mix-blend-screen" />
        <GlowOrb className="-left-[10%] top-1/2 -translate-y-1/2" color="from-[#1AFFD1]/6 to-[#A0FF1B]/8" size="w-[600px] h-[600px]" blur="blur-[120px]" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="mb-16 md:mb-20 flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 mb-4">
              <GradientLabel className="!mb-0">Benefits</GradientLabel>
            </div>
            <SectionTitle className="text-3xl md:text-5xl font-semibold tracking-tight leading-tight">
              일에만 몰입할 수 있도록,<br className="md:hidden" />
              아낌없이 지원합니다
            </SectionTitle>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "개인 법카 지급",
                desc: "개인 법인카드를 통해 식대 및 기타 사무용품 구매 비용을 지원합니다."
              },
              {
                title: "최신 장비 지급",
                desc: "맥북 및 윈도우 등 최신식 장비를 지원합니다."
              },
              {
                title: "경조사 지원",
                desc: "결혼, 출산, 3촌 이내의 부고 등 100만원의 경조사비를 지원합니다"
              },
              {
                title: "투명한 성과 보상",
                desc: "개인 및 팀 단위 프로젝트 성과에 대해 기여도에 따라 확실하고 투명한 금전적 보상을 지급합니다."
              }
            ].map((benefit, i) => {
              return (
                <div
                  key={benefit.title}
                  className="group relative p-[1px] rounded-3xl overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent group-hover:from-[#1AFFD1]/40 group-hover:to-[#A0FF1B]/10 transition-colors duration-700" />

                  <div className="relative h-full bg-[#0a0f0d] p-8 md:p-10 rounded-[calc(1.5rem-1px)] flex flex-col gap-4 items-start hover:bg-[#0c1411] transition-colors duration-500 backdrop-blur-md">
                    <h3 className="text-xl md:text-2xl font-bold tracking-tight text-white group-hover:text-[#1AFFD1] transition-colors duration-500">
                      {benefit.title}
                    </h3>
                    <p className="text-white/80 font-light leading-relaxed text-sm md:text-base break-keep mt-2">
                      {benefit.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 채용 공고 */}
      <section className="relative py-24 md:py-32 px-6 border-t border-white/[0.03] overflow-hidden">
        <GlowOrb className="-left-[200px] top-1/2 -translate-y-1/2" color="from-[#A0FF1B]/15 to-[#1AFFD1]/10" size="w-[600px] h-[600px]" blur="blur-[150px]" />
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <GradientLabel>Open Positions</GradientLabel>
              <SectionTitle className="text-left font-semibold tracking-tight">현재 채용 중인 포지션</SectionTitle>
            </div>
          </div>

          <div className="flex flex-col gap-4 relative z-20">
            {positions.map((position, i) => (
              <div key={position.id}>
                <Link href={`/recruit/${position.id}`} className="block">
                  <JobCard
                    position={position.title}
                    experience={position.experience}
                    tags={position.tags}
                  />
                </Link>
              </div>
            ))}
          </div>

          {/* 지원하기 CTA */}
          <div className="mt-32 text-center relative rounded-3xl overflow-hidden p-12 md:p-16 border border-white/10 group bg-white/[0.01]">
            <div className="absolute inset-0 bg-gradient-to-r from-[#1AFFD1]/5 to-[#A0FF1B]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            <h3 className="text-2xl md:text-3xl font-semibold mb-5 tracking-tight">합류를 희망하시나요?</h3>
            <p className="text-white/80 mb-10 font-light max-w-md mx-auto text-sm md:text-base leading-relaxed">
              자유 양식의 이력서와 포트폴리오(필요 시)를 아래 이메일로 보내주시면 개별적으로 연락드리겠습니다.
            </p>
            <a
              href="mailto:recruit@code0-1.com"
              className="inline-flex items-center justify-center gap-3 bg-white text-black px-8 py-4 rounded-full font-semibold text-base md:text-lg hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(26,255,209,0.3)] transition-all duration-500 z-10 relative"
            >
              지원하기
              <ArrowRight className="w-5 h-5 text-black" />
            </a>
            <div className="mt-6">
              <span className="text-white/80 text-sm font-mono tracking-wider">recruit@code0-1.com</span>
            </div>
          </div>
        </div>
      </section>

      {/* 커피챗 */}
      <section className="relative py-24 md:py-32 px-6 border-t border-white/[0.03] overflow-hidden bg-white/[0.01]">
        <GlowOrb className="left-1/2 -translate-x-1/2 top-0" color="from-[#1AFFD1]/8 to-[#A0FF1B]/5" size="w-[600px] h-[400px]" blur="blur-[120px]" />
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <GradientLabel>Coffee Chat</GradientLabel>
              <SectionTitle className="text-left font-semibold tracking-tight">
                지원이 고민된다면 커피챗으로 먼저 만나보세요.
              </SectionTitle>
              
              <div className="flex flex-col gap-4 mt-6">
                <BodyText>
                  공고 속 내용만으로 우리 팀의 문화나 분위기, 일하는 방식까지 파악하기는 어렵다고 생각합니다.<br/>
                  코드021이 어떤 팀인지 궁금하시다면, 지원 전이라도 편하게 커피챗을 요청해주세요.<br/>
                  따로 이력서는 필요 없으며 간단한 자기소개와 현재 고민, 궁금한 점만 가져와 주시면 됩니다.<br/>
                </BodyText>
              </div>
            </div>

            <div className="mt-6">
              <a
                href="mailto:ceo@code0-1.com?subject=커피챗 신청"
                className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#1AFFD1] to-[#A0FF1B] text-black px-8 py-4 rounded-full font-semibold text-base hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(26,255,209,0.3)] transition-all duration-500"
              >
                커피챗 신청하기
                <Coffee className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function JobCard({ position, experience, tags }: { position: string; experience: string; tags: string[] }) {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between p-6 md:p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/20 transition-all duration-500 group cursor-pointer backdrop-blur-sm">
      <div className="mb-6 md:mb-0">
        <h3 className="text-xl md:text-2xl font-semibold text-white mb-3 tracking-tight group-hover:text-[#1AFFD1] transition-colors duration-500">{position}</h3>
        <div className="flex gap-2 md:gap-3 flex-wrap items-center">
          <span className="text-[13px] font-medium px-3 py-1 rounded-full bg-white/10 text-white/90">{experience}</span>
          {tags.map((t) => (
            <span key={t} className="text-[13px] text-white/80 px-3 py-1 bg-white/[0.03] rounded-full">{t}</span>
          ))}
        </div>
      </div>
      <div className="flex items-center md:pl-6">
        <span className="flex items-center gap-3 text-white/80 group-hover:text-white transition-colors duration-500 font-medium text-sm md:text-base">
          자세히 보기
          <span className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#1AFFD1] group-hover:bg-[#1AFFD1]/10 transition-all duration-500">
            <ChevronRight className="w-4 h-4 text-white group-hover:text-[#1AFFD1] transition-colors duration-500" />
          </span>
        </span>
      </div>
    </div>
  );
}
