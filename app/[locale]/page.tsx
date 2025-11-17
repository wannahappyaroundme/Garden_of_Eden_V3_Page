"use client";

import { useTranslations, useLocale } from "next-intl";
import TypedText from "@/components/TypedText";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  const t = useTranslations();
  const locale = useLocale();

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <main className="min-h-screen bg-black">
      {/* Hero Section - Full Screen */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black text-white">
        {/* Animated Background Pattern with subtle grid */}
        <div className="absolute inset-0 opacity-20 animate-gradient-shift bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        <div className="absolute inset-0 opacity-[0.03]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>
        {/* Subtle vignette effect */}
        <div className="absolute inset-0 bg-radial-at-c from-transparent via-transparent to-black/40" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 py-20 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-8 border border-white/20"
            >
              <span className="text-2xl">🔒</span>
              <span className="text-sm font-semibold text-white">
                {t("hero.privacyBadge")}
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight text-white"
            >
              {t("hero.subtitle")} <TypedText />
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl mb-12 text-gray-400 max-w-2xl mx-auto"
            >
              {t("hero.description")}
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
            >
              <a
                href="https://github.com/wannahappyaroundme/Garden_of_Eden_V3/releases"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black font-bold text-lg py-4 px-10 rounded-full hover:bg-gray-200 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                {t("finalCTA.downloadButton")}
              </a>
              <a
                href="https://github.com/wannahappyaroundme/Garden_of_Eden_V3"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent border-2 border-white text-white font-bold text-lg py-4 px-10 rounded-full hover:bg-white hover:text-black transition-all duration-300 hover:scale-105"
              >
                ⭐ {t("hero.githubButton")}
              </a>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap justify-center gap-4 text-sm"
            >
              <Link
                href={`/${locale}/product/overview`}
                className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 hover:shadow-lg transition-all duration-300 text-gray-300 font-semibold hover:text-white"
              >
                {locale === "ko" ? "소개 →" : "About →"}
              </Link>
              <Link
                href={`/${locale}/features`}
                className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 hover:shadow-lg transition-all duration-300 text-gray-300 font-semibold hover:text-white"
              >
                {locale === "ko" ? "기능 →" : "Features →"}
              </Link>
              <Link
                href={`/${locale}/download`}
                className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 hover:shadow-lg transition-all duration-300 text-gray-300 font-semibold hover:text-white"
              >
                {locale === "ko" ? "다운로드 →" : "Download →"}
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1,
            duration: 1,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <svg
            className="w-6 h-6 text-white/60 animate-float"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </section>

      {/* Key Features Overview */}
      <section className="py-32 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-white"
          >
            {locale === "ko" ? "Eden을 선택해야 하는 이유" : "Why Choose Eden"}
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🔒",
                title:
                  locale === "ko" ? "완벽한 프라이버시" : "Perfect Privacy",
                desc:
                  locale === "ko"
                    ? "모든 데이터가 로컬에 저장되어 외부로 전송되지 않습니다"
                    : "All data stored locally, never sent to external servers",
                link: `/${locale}/features`,
              },
              {
                icon: "💰",
                title: locale === "ko" ? "완전 무료" : "Completely Free",
                desc:
                  locale === "ko"
                    ? "숨겨진 비용 없이 모든 기능을 평생 무료로 사용하세요"
                    : "Use all features forever with no hidden costs",
                link: `/${locale}/pricing`,
              },
              {
                icon: "🎭",
                title: locale === "ko" ? "나만의 AI" : "Your Personalized AI",
                desc:
                  locale === "ko"
                    ? "6가지 페르소나와 17개 파라미터로 완벽하게 커스터마이징"
                    : "Perfectly customizable with 6 personas and 17 parameters",
                link: `/${locale}/features`,
              },
            ].map((feature, idx) => (
              <Link key={idx} href={feature.link}>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15 }}
                  className="bg-zinc-900 p-10 rounded-2xl border border-zinc-800 hover:border-zinc-700 hover:shadow-xl hover:scale-105 transition-all duration-500 cursor-pointer"
                >
                  <div className="text-6xl mb-6 animate-float">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400">{feature.desc}</p>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-gradient-shift opacity-30" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12 text-white"
          >
            {t("stats.title")}
          </motion.h3>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
            {[
              { num: "100%", label: t("stats.privacy") },
              { num: "$0", label: t("stats.cost") },
              { num: "2-4s", label: t("stats.response") },
              { num: "3", label: t("stats.models") },
              { num: "17", label: t("stats.parameters") },
              { num: "85%", label: t("stats.complete") },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="text-6xl md:text-7xl font-bold mb-4 text-white">
                  {stat.num}
                </div>
                <div className="text-lg md:text-xl text-gray-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-zinc-950">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-8 text-white"
          >
            {t("finalCTA.title")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 mb-12"
          >
            {t("finalCTA.description")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Link
              href={`/${locale}/download`}
              className="inline-block bg-white text-black font-bold text-xl py-5 px-12 rounded-full hover:bg-gray-200 transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105"
            >
              {t("finalCTA.downloadButton")}
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
