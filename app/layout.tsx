import type { Metadata } from "next";
import { locales } from "@/src/i18n/request";

export const metadata: Metadata = {
  title:
    "Eden - Your AI Companion That Eliminates Loneliness | 외로움을 없애주는 AI 동반자",
  description:
    "100% Local AI companion providing friend-like support and enhanced productivity. Eliminate loneliness with genuine companionship. Free forever, complete privacy. | 친구 같은 지원과 생산성 향상을 제공하는 100% 로컬 AI 동반자. 진정한 동반자 관계로 외로움을 해소하세요. 평생 무료, 완벽한 프라이버시.",
  keywords: [
    "AI Companion",
    "AI 동반자",
    "Eliminate Loneliness",
    "외로움 해소",
    "Friend-Like Support",
    "친구 같은 지원",
    "Local AI",
    "로컬 AI",
    "Privacy",
    "프라이버시",
    "JARVIS",
    "자비스",
    "Open Source",
    "오픈소스",
    "Free AI",
    "무료 AI",
    "Emotional Intelligence",
    "감성 지능",
    "Solo Developer",
    "혼자 일하는 개발자",
    "Remote Work",
    "재택 근무",
  ],
  authors: [{ name: "Matthew" }],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Eden - Your AI Companion That Eliminates Loneliness",
    description:
      "Friend-like support, enhanced productivity, 100% private. The AI companion inspired by JARVIS from Iron Man.",
    type: "website",
    locale: "en_US",
    alternateLocale: "ko_KR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
