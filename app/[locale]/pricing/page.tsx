"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Accordion from "@/components/Accordion";

export default function PricingPage() {
  const t = useTranslations();

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
  };

  // FAQ items
  const faqItems = [
    { question: t("faq.q1"), answer: t("faq.a1") },
    { question: t("faq.q2"), answer: t("faq.a2") },
    { question: t("faq.q3"), answer: t("faq.a3") },
    { question: t("faq.q4"), answer: t("faq.a4") },
    { question: t("faq.q5"), answer: t("faq.a5") },
    { question: t("faq.q6"), answer: t("faq.a6") },
    { question: t("faq.q7"), answer: t("faq.a7") },
    { question: t("faq.q8"), answer: t("faq.a8") },
    { question: t("faq.q9"), answer: t("faq.a9") },
    { question: t("faq.q10"), answer: t("faq.a10") },
  ];

  return (
    <main className="min-h-screen bg-neutral-50 pt-20">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-green-500/75 via-emerald-500/75 via-teal-500/75 to-cyan-500/75 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>
        <div className="absolute inset-0 backdrop-blur-3xl" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            {t("comparison.title")}
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-white/90"
          >
            완전 무료, 프라이버시 보호, 무제한 사용
          </motion.p>
        </div>
      </section>

      {/* Pricing Hero */}
      <section className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-purple-500 to-violet-600 text-white p-16 rounded-3xl shadow-2xl"
          >
            <div className="text-7xl font-bold mb-4">$0</div>
            <div className="text-3xl font-semibold mb-6">완전 무료</div>
            <p className="text-xl mb-8 text-white/90">
              숨겨진 비용 없음 • 구독료 없음 • 광고 없음
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-lg">
              <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
                ✓ 무제한 대화
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
                ✓ 모든 기능 사용
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
                ✓ 평생 무료
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-32 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900"
          >
            {t("comparison.title")}
          </motion.h2>

          {/* Table Container */}
          <div className="overflow-x-auto">
            <table className="w-full bg-white/70 backdrop-blur-xl rounded-2xl border border-white/50 shadow-xl">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="p-6 text-left text-gray-900 font-bold">
                    {t("comparison.feature")}
                  </th>
                  <th className="p-6 text-center bg-gradient-to-br from-purple-500/10 to-violet-500/10">
                    <div className="text-2xl font-bold text-purple-600 mb-2">
                      Eden
                    </div>
                    <div className="text-sm text-gray-600">
                      {t("comparison.edenTagline")}
                    </div>
                  </th>
                  <th className="p-6 text-center">
                    <div className="text-xl font-bold text-gray-900 mb-2">
                      ChatGPT
                    </div>
                    <div className="text-sm text-gray-600">Plus</div>
                  </th>
                  <th className="p-6 text-center">
                    <div className="text-xl font-bold text-gray-900 mb-2">
                      Claude
                    </div>
                    <div className="text-sm text-gray-600">Pro</div>
                  </th>
                  <th className="p-6 text-center">
                    <div className="text-xl font-bold text-gray-900 mb-2">
                      GitHub Copilot
                    </div>
                    <div className="text-sm text-gray-600">Individual</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    feature: t("comparison.features.price"),
                    eden: "$0",
                    chatgpt: "$20/월",
                    claude: "$20/월",
                    copilot: "$10/월",
                  },
                  {
                    feature: t("comparison.features.privacy"),
                    eden: "100% 로컬",
                    chatgpt: "클라우드",
                    claude: "클라우드",
                    copilot: "클라우드",
                  },
                  {
                    feature: t("comparison.features.offline"),
                    eden: "완전 지원",
                    chatgpt: "불가능",
                    claude: "불가능",
                    copilot: "불가능",
                  },
                  {
                    feature: t("comparison.features.emotional"),
                    eden: "특화됨",
                    chatgpt: "제한적",
                    claude: "제한적",
                    copilot: "없음",
                  },
                  {
                    feature: t("comparison.features.customization"),
                    eden: "17+ 파라미터",
                    chatgpt: "제한적",
                    claude: "제한적",
                    copilot: "없음",
                  },
                  {
                    feature: t("comparison.features.responseTime"),
                    eden: "2-4초",
                    chatgpt: "2-5초",
                    claude: "3-6초",
                    copilot: "1-3초",
                  },
                ].map((row, idx) => (
                  <motion.tr
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="border-b border-gray-100 hover:bg-purple-50/50 transition-colors"
                  >
                    <td className="p-6 font-semibold text-gray-900">
                      {row.feature}
                    </td>
                    <td className="p-6 text-center bg-gradient-to-br from-purple-500/5 to-violet-500/5">
                      <span className="text-purple-600 font-bold">
                        {row.eden}
                      </span>
                    </td>
                    <td className="p-6 text-center text-gray-600">
                      {row.chatgpt}
                    </td>
                    <td className="p-6 text-center text-gray-600">
                      {row.claude}
                    </td>
                    <td className="p-6 text-center text-gray-600">
                      {row.copilot}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 text-center p-8 bg-gradient-to-r from-purple-50 to-violet-50 rounded-2xl border border-purple-200"
          >
            <p className="text-xl font-semibold text-gray-900 mb-4">
              💡 {t("comparison.whyFree.title")}
            </p>
            <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
              {t("comparison.whyFree.description")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Cost Savings Calculator */}
      <section className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900"
          >
            비용 절감 계산기
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-100 to-violet-100 p-8 rounded-2xl text-center"
            >
              <div className="text-5xl font-bold text-purple-600 mb-3">$240</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">
                연간 절감
              </div>
              <div className="text-sm text-gray-600">
                vs ChatGPT Plus ($20/월)
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-violet-100 to-indigo-100 p-8 rounded-2xl text-center"
            >
              <div className="text-5xl font-bold text-violet-600 mb-3">$240</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">
                연간 절감
              </div>
              <div className="text-sm text-gray-600">
                vs Claude Pro ($20/월)
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-indigo-100 to-purple-100 p-8 rounded-2xl text-center"
            >
              <div className="text-5xl font-bold text-indigo-600 mb-3">$120</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">
                연간 절감
              </div>
              <div className="text-sm text-gray-600">
                vs GitHub Copilot ($10/월)
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 text-center p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-200"
          >
            <p className="text-2xl font-bold text-green-700 mb-2">
              🎉 평생 무료로 모든 기능을 사용하세요!
            </p>
            <p className="text-gray-600">
              Eden을 사용하면 매년 수백 달러를 절약하면서도 더 나은 경험을 누릴 수 있습니다.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900"
          >
            {t("faq.title")}
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Accordion items={faqItems} />
          </motion.div>
        </div>
      </section>
    </main>
  );
}
