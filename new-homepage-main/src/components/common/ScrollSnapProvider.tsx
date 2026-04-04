"use client";

import { useEffect } from "react";

/**
 * 마운트 시 <html>에 scroll-snap 클래스를 추가하고,
 * 언마운트 시 제거합니다.
 * 홈페이지(page.tsx)에서만 이 컴포넌트를 렌더하면
 * 다른 페이지에는 snap이 적용되지 않습니다.
 */
export default function ScrollSnapProvider() {
  useEffect(() => {
    const html = document.documentElement;
    html.classList.add(
      "snap-y",
      "snap-mandatory",
      "overflow-y-scroll",
      "overscroll-none",
    );

    // Set --vh for accurate 100vh on mobile (accounts for address bar)
    function setViewportHeight() {
      const vh = window.innerHeight * 0.01;
      html.style.setProperty("--vh", `${vh}px`);
    }
    setViewportHeight();
    window.addEventListener("resize", setViewportHeight);

    return () => {
      html.classList.remove(
        "snap-y",
        "snap-mandatory",
        "overflow-y-scroll",
        "overscroll-none",
      );
      html.classList.remove("!snap-none");
      window.removeEventListener("resize", setViewportHeight);
    };
  }, []);

  return null;
}

