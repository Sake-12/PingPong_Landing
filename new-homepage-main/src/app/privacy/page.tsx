import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "개인정보처리방침",
  description:
    "주식회사 코드021 개인정보처리방침. 개인정보의 처리 목적, 보유 기간, 제3자 제공, 정보주체의 권리에 대해 안내합니다.",
  robots: { index: false, follow: false },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-3xl mx-auto px-6 py-20 md:py-32">
        <h1 className="typo-section-title mb-12">개인정보처리방침</h1>

        <div className="space-y-10 text-white/80 leading-relaxed text-lg">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. 개인정보의 처리 목적</h2>
            <p className="break-keep">
              주식회사 코드021(이하 &ldquo;회사&rdquo;)은(는) 다음의 목적을 위하여 개인정보를
              처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지
              않으며 이용 목적이 변경되는 경우에는 「개인정보 보호법」 제18조에 따라
              별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-1">
              <li>홈페이지 관리</li>
              <li>서비스 제공</li>
              <li>외주 상담 서비스</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. 개인정보의 처리 및 보유 기간</h2>
            <p className="break-keep">
              회사은(는) 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를
              수집 시에 동의받은 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. 개인정보의 제3자 제공</h2>
            <p className="break-keep">
              회사은(는) 정보주체의 동의, 법률의 특별한 규정 등 「개인정보 보호법」 제17조
              및 제18조에 해당하는 경우에만 개인정보를 제3자에게 제공합니다.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. 정보주체와 법정대리인의 권리·의무 및 그 행사방법</h2>
            <p className="break-keep">
              정보주체는 회사에 대해 언제든지 개인정보 열람·정정·삭제·처리정지 요구 등의
              권리를 행사할 수 있습니다.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. 처리하는 개인정보의 항목</h2>
            <p className="break-keep">
              회사은(는) 다음의 개인정보 항목을 처리하고 있습니다.
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-1">
              <li>필수항목: 이름, 전화번호, 이메일, 소속회사</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. 개인정보의 파기</h2>
            <p className="break-keep">
              회사은(는) 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가 불필요하게
              되었을 때에는 지체없이 해당 개인정보를 파기합니다.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. 개인정보 보호책임자</h2>
            <p className="break-keep">
              주식회사 코드021은(는) 개인정보 처리에 관한 업무를 총괄해서 책임지고,
              개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와
              같이 개인정보 보호책임자를 지정하고 있습니다.
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-1">
              <li>개인정보 보호책임자</li>
              <li>성명: 이명재</li>
              <li>직책: 사원</li>
              <li>연락처: 010-4505-1465, arkk.lee@code0-1.com</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
