import { NextIntlClientProvider } from "next-intl";
import { locales } from "@/i18n";
import Navbar from "@/components/Navbar";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import Footer from "@/components/Footer";
import "./globals.css";

import type { Metadata, Viewport } from "next";

// 1. 메타데이터 설정
export const metadata: Metadata = {
  metadataBase: new URL("https://garden-of-eden-v3-page.pages.dev"),
  title: "Eden Project",
  description: "당신을 위한 하나 뿐인 AI",

  openGraph: {
    title: "Eden Project",
    description: "당신을 위한 하나 뿐인 AI",
    // ✅ 중요: 앞에 슬래시(/)를 붙여서 public 폴더의 루트임을 명시
    images: ["/Opengraph.png"],
    type: "website",
  },

  icons: {
    icon: "/favicon.png",
  },
};

// 2. 뷰포트 설정 (Next.js 권장 방식)
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
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
