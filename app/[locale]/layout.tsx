import type { Metadata, Viewport } from "next";
import { NextIntlClientProvider } from "next-intl";
import Navbar from "@/components/Navbar";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import Footer from "@/components/Footer";
import "./globals.css";

// ✅ 1. 지원하는 언어 정의 (이 부분이 빠져서 에러가 났습니다)
const locales = ["en", "ko"];

// Force static generation for all pages
export const dynamic = 'force-static';

export const metadata: Metadata = {
  metadataBase: new URL("https://garden-of-eden-v3-page.pages.dev"),

  title: {
    template: "%s | Eden",
    default: "Eden - 나만의 프라이빗 AI",
  },

  description:
    "당신을 위한 하나 뿐인 AI. 100% 로컬 구동으로 완벽한 프라이버시를 보장합니다.",

  keywords: ["AI", "Local AI", "Privacy", "Offline AI", "Eden", "인공지능"],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "/",
    languages: {
      en: "/en",
      ko: "/ko",
    },
  },

  openGraph: {
    title: "Eden",
    description: "당신을 위한 하나 뿐인 AI",
    url: "/",
    siteName: "Eden",
    images: [
      {
        url: "/Opengraph.png",
        width: 1200,
        height: 630,
        alt: "Eden Preview",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },

  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
};

// ✅ 정적 파라미터 생성 (빌드 시점)
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

  // 메시지 로드 (유효한 언어인지 확인 후 로드하는 것이 안전하지만, 여기서는 간단히 처리)
  let messages;
  try {
    messages = (await import(`@/messages/${locale}.json`)).default;
  } catch (error) {
    // 만약 잘못된 로케일이 들어오면 기본값(영어) 로드 혹은 에러 처리
    messages = (await import(`@/messages/en.json`)).default;
  }

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
