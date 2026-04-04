"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown, Rocket, Bot, Cloud, Users, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  {
    href: "/services/mvp",
    icon: Rocket,
    label: "6주 완성 MVP 개발",
    desc: "아이디어 검증, 투자 준비",
    external: false,
  },
  {
    href: "/services/ai-pipeline",
    icon: Bot,
    label: "AI 운영 파이프라인",
    desc: "인건비 최소화, KPT 개선",
    external: false,
  },
  {
    href: "https://code021.cloud/",
    icon: Cloud,
    label: "코드021 클라우드",
    desc: "중소·스타트업을 위한 클라우드",
    external: true,
  },
  {
    href: "/services/subscription",
    icon: Users,
    label: "개발팀 구독 서비스",
    desc: "안정적 운영, 추가 기능 개발",
    external: false,
  },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServiceOpen, setIsMobileServiceOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServiceOpen, setIsServiceOpen] = useState(false);
  const serviceTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsMobileServiceOpen(false);
  };

  const handleServiceEnter = () => {
    if (serviceTimeoutRef.current) clearTimeout(serviceTimeoutRef.current);
    setIsServiceOpen(true);
  };

  const handleServiceLeave = () => {
    serviceTimeoutRef.current = setTimeout(() => {
      setIsServiceOpen(false);
    }, 150);
  };

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "bg-black/90 backdrop-blur-md border-b border-white/10"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <div className="max-w-screen-xl mx-auto flex h-16 items-center justify-between px-6 md:px-10">
        {/* Logo + Divider + Nav */}
        <div className="flex items-center gap-0">
          <Link href="/" className="relative flex items-center h-8 w-28 md:w-32 shrink-0" onClick={() => setIsMobileMenuOpen(false)}>
            <Image src="/Code021_Logo_White.png" fill style={{ objectFit: 'contain', objectPosition: 'left' }} alt="CODE021" priority />
          </Link>

          {/* Vertical Divider */}
          <span className="hidden md:block w-px h-4 bg-white/30 mx-5" />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <NavLink href="/">홈</NavLink>
            <NavLink href="/about">회사소개</NavLink>

            {/* 서비스 Dropdown */}
            <div
              className="relative"
              onMouseEnter={handleServiceEnter}
              onMouseLeave={handleServiceLeave}
            >
              <button className="flex items-center gap-1 text-[15px] font-semibold text-white/80 hover:text-white transition-colors cursor-pointer">
                서비스
                <ChevronDown className={cn("w-3.5 h-3.5 transition-transform duration-200", isServiceOpen && "rotate-180")} />
              </button>

              {/* Dropdown Panel */}
              <div
                className={cn(
                  "absolute top-full left-1/2 -translate-x-1/2 pt-3 transition-all duration-200",
                  isServiceOpen
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 -translate-y-2 pointer-events-none"
                )}
              >
                <div className="w-[320px] rounded-2xl border border-white/10 bg-black/95 backdrop-blur-xl p-2 shadow-2xl shadow-black/50">
                  {services.map((service) => {
                    const Icon = service.icon;
                    const LinkComponent = service.external ? "a" : Link;
                    const extraProps = service.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {};

                    return (
                      <LinkComponent
                        key={service.href}
                        href={service.href}
                        className="flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-white/5 transition-colors group"
                        {...extraProps}
                      >
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#1AFFD1]/15 to-[#A0FF1B]/8 flex items-center justify-center shrink-0 group-hover:from-[#1AFFD1]/25 group-hover:to-[#A0FF1B]/15 transition-colors">
                          <Icon className="w-5 h-5 text-[#1AFFD1]" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-1.5">
                            <span className="text-[14px] font-semibold text-white/90 group-hover:text-white transition-colors">
                              {service.label}
                            </span>
                            {service.external && (
                              <ExternalLink className="w-3 h-3 text-white/80" />
                            )}
                          </div>
                          <p className="text-[14px] text-white/80 mt-0.5">{service.desc}</p>
                        </div>
                      </LinkComponent>
                    );
                  })}
                </div>
              </div>
            </div>

            <NavLink href="/portfolio">포트폴리오</NavLink>
            <NavLink href="/recruit">채용</NavLink>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          {/* Contact Button */}
          <Link
            href="/contact"
            className="hidden md:inline-flex items-center justify-center rounded-md border border-white/80 bg-transparent px-5 py-2 text-[15px] font-semibold text-white hover:bg-white hover:text-black transition-all duration-200"
          >
            문의하기
          </Link>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-white hover:text-primary transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-black/95 backdrop-blur-md border-b border-white/10 p-5 flex flex-col gap-1 animate-in slide-in-from-top-2">
          <MobileNavLink href="/" onClick={toggleMenu}>홈</MobileNavLink>
          <MobileNavLink href="/about" onClick={toggleMenu}>회사소개</MobileNavLink>

          {/* Mobile 서비스 Accordion */}
          <button
            className="flex items-center justify-between text-[15px] font-semibold text-white/80 hover:text-white py-3 px-4 rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
            onClick={() => setIsMobileServiceOpen(!isMobileServiceOpen)}
          >
            서비스
            <ChevronDown className={cn("w-4 h-4 transition-transform duration-200", isMobileServiceOpen && "rotate-180")} />
          </button>

          {isMobileServiceOpen && (
            <div className="ml-4 flex flex-col gap-1 border-l border-white/10 pl-4">
              {services.map((service) => {
                const Icon = service.icon;
                if (service.external) {
                  return (
                    <a
                      key={service.href}
                      href={service.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={toggleMenu}
                      className="flex items-center gap-3 py-2.5 px-3 rounded-lg hover:bg-white/5 transition-colors"
                    >
                      <Icon className="w-4 h-4 text-[#1AFFD1]" />
                      <span className="text-[14px] text-white/80">{service.label}</span>
                      <ExternalLink className="w-3 h-3 text-white/80 ml-auto" />
                    </a>
                  );
                }
                return (
                  <Link
                    key={service.href}
                    href={service.href}
                    onClick={toggleMenu}
                    className="flex items-center gap-3 py-2.5 px-3 rounded-lg hover:bg-white/5 transition-colors"
                  >
                    <Icon className="w-4 h-4 text-[#1AFFD1]" />
                    <span className="text-[14px] text-white/80">{service.label}</span>
                  </Link>
                );
              })}
            </div>
          )}

          <MobileNavLink href="/portfolio" onClick={toggleMenu}>포트폴리오</MobileNavLink>
          <MobileNavLink href="/recruit" onClick={toggleMenu}>채용</MobileNavLink>
          <MobileNavLink href="/contact" onClick={toggleMenu} className="text-[#D9FF89] font-bold">문의하기</MobileNavLink>
        </div>
      )}
    </header>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link 
      href={href} 
      className="text-[15px] font-semibold text-white/80 hover:text-white transition-colors"
    >
      {children}
    </Link>
  );
}

function MobileNavLink({ href, onClick, children, className }: { href: string; onClick: () => void; children: React.ReactNode, className?: string }) {
  return (
    <Link 
      href={href} 
      onClick={onClick}
      className={cn("text-[15px] font-semibold text-white/80 hover:text-white py-3 px-4 rounded-lg hover:bg-white/5 transition-colors", className)}
    >
      {children}
    </Link>
  );
}
