import type { Metadata } from "next";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ToastContainer } from "react-toastify";

const SITE_URL = "https://www.code0-1.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Code021 | 웹·앱 개발 & 클라우드 파트너",
    template: "%s | Code021",
  },
  description:
    "Code021은 서비스 기획부터 디자인, 웹·앱 개발, 클라우드 인프라, 운영까지 원스톱으로 제공하는 종합 IT 기업입니다.",
  keywords: [
    "Code021",
    "코드021",
    "웹개발",
    "앱개발",
    "외주개발",
    "IT외주",
    "클라우드",
    "시스템구축",
    "서비스기획",
    "스타트업개발",
  ],
  authors: [{ name: "Code021", url: SITE_URL }],
  creator: "Code021",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: SITE_URL,
    siteName: "Code021",
    title: "Code021 | 웹·앱 개발 & 클라우드 파트너",
    description:
      "서비스 기획부터 디자인, 개발, 클라우드, 운영까지 — 당신의 Zero to One을 함께합니다.",
    images: [
      {
        url: "/Code021_Logo_White.png",
        width: 400,
        height: 82,
        alt: "Code021 로고",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Code021 | 웹·앱 개발 & 클라우드 파트너",
    description:
      "서비스 기획부터 디자인, 개발, 클라우드, 운영까지 — 당신의 Zero to One을 함께합니다.",
    images: ["/Code021_Logo_White.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
};

/* ── JSON-LD: Organization 구조화 데이터 ── */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Code021",
  alternateName: "코드021",
  url: SITE_URL,
  logo: `${SITE_URL}/Code021_Logo_White.png`,
  description:
    "서비스 기획부터 디자인, 웹·앱 개발, 클라우드 인프라, 운영까지 원스톱으로 제공하는 종합 IT 기업",
  address: {
    "@type": "PostalAddress",
    addressLocality: "인천",
    addressCountry: "KR",
    streetAddress: "인천타워대로 323, 에이동 2001-2006호",
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: "ceo@code0-1.com",
    telephone: "+82-10-2059-2826",
    contactType: "customer service",
    availableLanguage: "Korean",
  },
  sameAs: [],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        {/* JSON-LD 구조화 데이터 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased flex flex-col min-h-screen text-white">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          closeOnClick
          pauseOnHover
          theme="dark"
        />
      </body>
    </html>
  );
}
