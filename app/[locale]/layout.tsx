import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://garden-of-eden-v3-page.pages.dev"), // ✅ 실제 도메인

  title: {
    template: "%s | Eden", // 페이지별 제목 설정 시 "페이지명 | Eden Project"로 자동 완성
    default: "Eden - 나만의 프라이빗 AI", // 기본 제목
  },

  description:
    "당신을 위한 하나 뿐인 AI. 100% 로컬 구동으로 완벽한 프라이버시를 보장합니다.",

  // ✅ 1. 키워드 추가 (일부 검색 엔진에 도움됨)
  keywords: [
    "AI",
    "Local AI",
    "Privacy",
    "Offline AI",
    "Eden Project",
    "인공지능",
  ],

  // ✅ 2. 검색 로봇 제어 (확실하게 긁어가라고 명시)
  robots: {
    index: true,
    follow: true,
  },

  // ✅ 3. 다국어 설정 (가장 중요!!)
  // 검색 엔진에게 "영어 버전은 /en에 있고, 한국어는 /ko에 있어"라고 알려줍니다.
  alternates: {
    canonical: "/",
    languages: {
      en: "/en",
      ko: "/ko",
    },
  },

  openGraph: {
    title: "Eden Project",
    description: "당신을 위한 하나 뿐인 AI",
    url: "/",
    siteName: "Eden Project",
    images: [
      {
        url: "/Opengraph.png", // ✅ public 폴더의 이미지
        width: 1200,
        height: 630,
        alt: "Eden Project Preview",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },

  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png", // 아이폰용 아이콘도 같이 설정하면 좋습니다
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  // 모바일에서 테마 컬러 지정 (브라우저 상단바 색상) - 디자인에 맞게 검은색 추천
  themeColor: "#000000",
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;

  // 메시지를 직접 import
  const messages = (await import(`@/messages/${locale}.json`)).default;

  return (
    <html lang={locale}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="antialiased">
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <LanguageSwitcher />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
