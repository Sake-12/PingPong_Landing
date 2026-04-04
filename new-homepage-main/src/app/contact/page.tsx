"use client";

import { BodyText, SectionTitle } from "@/components/ui/styled";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";
import { GlowOrb, GridPattern } from "@/components/ui/backgrounds";

const budgetOptions = [
  "500만원 이하",
  "500~1000만원",
  "1000~3000만원",
  "3000~5000만원",
  "5000만원~1억",
  "1억 이상",
];

export default function ContactPage() {
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [budget, setBudget] = useState("500만원 이하");
  const [honey, setHoney] = useState(""); // 허니팟 - 봇 방지용 숨겨진 필드
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const sendMail = async () => {
    if (!company || !phone || !email || !description) {
      toast.warn("모든 항목을 입력해주세요!");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("/api/sendMail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          subject: `문의사항: ${company}`,
          text: `회사명/담당자명: ${company}\n연락처: ${phone}\n이메일: ${email}\n서비스 설명: ${description}\n사업 예산: ${budget}`,
          html: `
<p><strong>회사명/담당자명:</strong> ${company}</p>
<p><strong>연락처:</strong> ${phone}</p>
<p><strong>이메일:</strong> ${email}</p>
<p><strong>서비스 설명:</strong></p>
<p>${description}</p>
<p><strong>사업 예산:</strong> ${budget}</p>`,
          _honey: honey,
        }),
      });

      if (response.status === 429) {
        toast.error("너무 많은 요청입니다. 잠시 후 다시 시도해주세요.");
      } else if (response.ok) {
        toast.success("메일이 성공적으로 발송되었습니다!");
        setCompany("");
        setPhone("");
        setEmail("");
        setDescription("");
        setBudget("500만원 이하");
        setTimeout(() => router.push("/"), 2000);
      } else {
        toast.error("메일 발송에 실패했습니다. 다시 시도해주세요.");
      }
    } catch {
      toast.error("메일 발송 중 오류가 발생했습니다.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Content */}
      <div className="relative z-10 flex flex-col flex-1">
        {/* Hero */}
        <section className="relative flex flex-col items-center justify-center px-6 text-center pt-40 pb-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a1a10] via-black to-black" />
          <SectionTitle className="relative z-10 inline-block mb-6 bg-gradient-to-r from-[#1AFFD1] to-[#A0FF1B] bg-clip-text text-2xl md:text-3xl font-bold text-transparent tracking-wide">
            문의하기
          </SectionTitle>
          <BodyText className="relative z-10">
            귀사의 성공적인 비즈니스 구축, <br className="hidden max-w-[500px]:block"/> CODE021이 함께하겠습니다.
          </BodyText>
        </section>

        {/* 문의 폼 */}
        <section className="relative pb-24 px-6 overflow-hidden">
          <GridPattern className="opacity-[0.015]" />
          <GlowOrb className="-left-[200px] top-1/3" color="from-[#1AFFD1]/18 to-transparent" size="w-[500px] h-[700px]" blur="blur-[140px]" />
          <GlowOrb className="-right-[200px] bottom-1/4" color="from-[#A0FF1B]/18 to-transparent" size="w-[500px] h-[500px]" blur="blur-[140px]" />
          <div className="relative z-10 max-w-xl mx-auto flex flex-col gap-12">

            {/* Honeypot — 봇 방지용 숨겨진 필드 (사용자에게 보이지 않음) */}
            <input
              type="text"
              name="_honey"
              value={honey}
              onChange={(e) => setHoney(e.target.value)}
              className="absolute opacity-0 w-0 h-0 pointer-events-none"
              tabIndex={-1}
              autoComplete="off"
            />
            {/* 1. 회사명 / 담당자명 */}
            <div className="flex flex-col gap-3">
              <label className="text-white text-[clamp(14px,1.1rem,16px)] font-semibold">
                1. 회사명 / 담당자명을 알려주세요.
              </label>
              <div className="w-full rounded-xl p-[1px] focus-within:bg-gradient-to-r focus-within:from-[#1AFFD1] focus-within:to-[#A0FF1B]">
              <input
                className="w-full rounded-[11px] bg-[#1E1E1E] px-6 py-[18px] text-[18px] text-white caret-[#1AFFCF] outline-none placeholder:text-white/80 transition-all"
                placeholder="코드021 / 김코드"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />
              </div>
            </div>

            {/* 2. 연락처 */}
            <div className="flex flex-col gap-3">
              <label className="text-white text-[clamp(14px,1.1rem,16px)] font-semibold">
                2. 연락 받으실 연락처(휴대전화)를 입력해주세요.
              </label>
              <div className="w-full rounded-xl p-[1px] focus-within:bg-gradient-to-r focus-within:from-[#1AFFD1] focus-within:to-[#A0FF1B]">
              <input
                className="w-full rounded-[11px] bg-[#1E1E1E] px-6 py-[18px] text-[18px] text-white caret-[#1AFFCF] outline-none placeholder:text-white/80 transition-all"
                placeholder="010-0000-0000"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              </div>
            </div>

            {/* 3. 이메일 */}
            <div className="flex flex-col gap-3">
              <label className="text-white text-[clamp(14px,1.1rem,16px)] font-semibold">
                3. 이메일을 입력해주세요.
              </label>
              <div className="w-full rounded-xl p-[1px] focus-within:bg-gradient-to-r focus-within:from-[#1AFFD1] focus-within:to-[#A0FF1B]">
              <input
                className="w-full rounded-[11px] bg-[#1E1E1E] px-6 py-[18px] text-[18px] text-white caret-[#1AFFCF] outline-none placeholder:text-white/80 transition-all"
                placeholder="code021@example.com"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              </div>
            </div>

            {/* 4. 서비스 설명 */}
            <div className="flex flex-col gap-3">
              <label className="text-white text-[clamp(14px,1.1rem,16px)] font-semibold">
                4. 만들고싶은 서비스에 대해 설명해주세요.
              </label>
              <div className="w-full rounded-xl p-[1px] focus-within:bg-gradient-to-r focus-within:from-[#1AFFD1] focus-within:to-[#A0FF1B]">
              <textarea
                rows={10}
                className="w-full rounded-[11px] bg-[#1E1E1E] px-6 py-4 text-[18px] text-white caret-[#1AFFCF] outline-none placeholder:text-white/80 transition-all resize-none"
                placeholder="설명입력"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              </div>
            </div>

            {/* 5. 예산 범위 */}
            <div className="flex flex-col gap-4">
              <label className="text-white text-[clamp(14px,1.1rem,16px)] font-semibold">
                5. 사업 예산 범위가 어떻게 되시나요?
              </label>
              <div className="flex flex-wrap gap-x-6 gap-y-4">
                {budgetOptions.map((option) => (
                  <label
                    key={option}
                    className="flex items-center gap-2.5 cursor-pointer group"
                  >
                    <span
                      className={`w-7 h-7 rounded-full border-2 flex items-center justify-center transition-colors ${
                        budget === option
                          ? "border-[#A0FF1B] bg-[#A0FF1B]"
                          : "border-white/30 group-hover:border-white/50"
                      }`}
                    >
                      {budget === option && (
                        <span className="w-3 h-3 rounded-full bg-black" />
                      )}
                    </span>
                    <input
                      type="radio"
                      name="budget"
                      value={option}
                      checked={budget === option}
                      onChange={(e) => setBudget(e.target.value)}
                      className="sr-only"
                    />
                    <span className={`text-[16px] transition-colors ${
                      budget === option ? "text-white" : "text-white/80"
                    }`}>
                      {option}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* 제출 버튼 */}
            <button
              type="button"
              onClick={sendMail}
              disabled={loading}
              className="w-full mt-4 rounded-xl bg-gradient-to-r from-[#D9FF89] to-[#E1FFA1] px-12 py-4 text-xl font-bold text-[#0C120E] transition-transform hover:scale-[1.02] active:scale-[0.98] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "발송 중..." : "문의하기"}
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
