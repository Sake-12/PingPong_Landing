import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="w-full bg-black pt-20 pb-12 px-6 border-t border-white/10">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12">

        {/* 왼쪽: 로고 + 연락처 */}
        <div className="flex flex-col gap-5">
          <Image
            src="/Code021_Logo_White.png"
            width={130}
            height={26}
            alt="CODE021"
          />
          <ul className="flex flex-col gap-2.5 text-white font-semibold">
            <li>
              <a href="mailto:ceo@code0-1.com" className="text-[15px] hover:text-[#1AFFD1] transition-colors">
                ceo@code0-1.com
              </a>
            </li>
            <li className="text-[15px]">대표 권강빈</li>
            <li className="flex flex-col gap-1">
              <span className="text-[15px]">010-2059-2826</span>
              <span className="text-[14px] text-white/80 font-normal">
                전화번호를 통해 바로 문의하셔도 됩니다.
              </span>
            </li>
          </ul>
        </div>

        {/* 오른쪽: 주소 + 링크 */}
        <div className="flex flex-col gap-3 md:ml-auto text-white/80 text-[14px] leading-relaxed">
          <p className="break-keep">
            <b className="text-white/80">본사</b> 인천시 인천타워대로 323, 에이동 2001-2006호
          </p>
          <p className="break-keep">
            <b className="text-white/80">서울지점</b> 구로구 디지털로34길 55 코오롱싸이언스밸리2차 B101호 (I-19)
          </p>
          <p>사업자 등록번호 / 774-88-02989</p>

          <div className="grid grid-cols-3 md:flex gap-3 md:gap-5 mt-3 text-white/80 text-[14px]">
            <Link href="/about" className="py-1 hover:text-white transition-colors">
              회사소개
            </Link>
            <Link href="/portfolio" className="py-1 hover:text-white transition-colors">
              포트폴리오
            </Link>
            <Link href="/recruit" className="py-1 hover:text-white transition-colors">
              채용
            </Link>
            <Link href="/contact" className="py-1 hover:text-white transition-colors">
              문의
            </Link>
          </div>
          <div className="mt-3">
            <Link href="/privacy" className="text-[14px] hover:text-white transition-colors font-medium text-white/80">
              개인정보처리방침
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto mt-12 pt-6 border-t border-white/10 text-center text-[14px] text-white/80">
        © {new Date().getFullYear()} Code021 Inc. All rights reserved.
      </div>
    </footer>
  );
}
