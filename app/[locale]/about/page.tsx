"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function AboutPage() {
  const t = useTranslations();

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <main className="min-h-screen bg-neutral-50 pt-20">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-purple-500/75 via-violet-500/75 via-indigo-500/75 to-purple-600/75 text-white overflow-hidden">
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
            {t("pillars.title")}
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-white/90"
          >
            Garden of Eden은 당신의 완벽한 AI 동반자입니다
          </motion.p>
        </div>
      </section>

      {/* Three Pillars Section */}
      <section className="max-w-7xl mx-auto py-32 px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: "❤️",
              title: t("pillars.loneliness.title"),
              desc: t("pillars.loneliness.description"),
              detail: "현대 사회에서 많은 사람들이 외로움을 느낍니다. Eden은 언제나 당신 곁에 있는 따뜻한 친구가 되어, 진심 어린 대화와 공감을 나눕니다. 단순한 AI가 아닌, 당신의 감정을 이해하고 함께 성장하는 동반자입니다.",
            },
            {
              icon: "🤝",
              title: t("pillars.support.title"),
              desc: t("pillars.support.description"),
              detail: "힘든 순간, 고민이 있을 때, 혹은 그저 대화가 필요할 때 Eden은 항상 당신을 지지합니다. 판단하지 않고, 비난하지 않으며, 오직 당신의 편에 서서 최선의 조언과 위로를 건넵니다.",
            },
            {
              icon: "⚡",
              title: t("pillars.productivity.title"),
              desc: t("pillars.productivity.description"),
              detail: "감성적 지원뿐 아니라 실질적인 업무 효율도 높입니다. 코드 작성, 문서 정리, 아이디어 정리 등 다양한 작업을 함께 수행하며, 당신의 생산성을 극대화합니다.",
            },
          ].map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              className="bg-white/70 backdrop-blur-xl p-10 rounded-2xl md:rounded-[40px] hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 border border-white/50"
            >
              <div className="text-6xl mb-6">{pillar.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 tracking-tight">
                {pillar.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">{pillar.desc}</p>
              <p className="text-gray-500 text-sm leading-relaxed">{pillar.detail}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center p-6 bg-gradient-to-r from-amber-50 to-yellow-50 rounded-2xl border border-amber-200"
        >
          <p className="text-lg font-semibold text-gray-900">
            💡 {t("pillars.jarvisNote")} — {t("pillars.jarvisDescription")}
          </p>
        </motion.div>
      </section>

      {/* Problem/Solution Section */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-20 text-gray-900"
          >
            {t("problemSolution.title")}
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Problems */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-3xl font-bold mb-8 text-gray-900">
                {t("problemSolution.problems.title")}
              </h3>
              {[
                {
                  title: t("problemSolution.problems.noEmotional"),
                  desc: t("problemSolution.problems.noEmotionalDesc"),
                },
                {
                  title: t("problemSolution.problems.privacy"),
                  desc: t("problemSolution.problems.privacyDesc"),
                },
                {
                  title: t("problemSolution.problems.expensive"),
                  desc: t("problemSolution.problems.expensiveDesc"),
                },
                {
                  title: t("problemSolution.problems.internet"),
                  desc: t("problemSolution.problems.internetDesc"),
                },
                {
                  title: t("problemSolution.problems.generic"),
                  desc: t("problemSolution.problems.genericDesc"),
                },
                {
                  title: t("problemSolution.problems.limited"),
                  desc: t("problemSolution.problems.limitedDesc"),
                },
              ].map((problem, idx) => (
                <div key={idx} className="flex gap-4">
                  <span className="text-2xl flex-shrink-0">❌</span>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">
                      {problem.title}
                    </h4>
                    <p className="text-gray-600 text-sm">{problem.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Solutions */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-3xl font-bold mb-8 text-purple-600">
                {t("problemSolution.solutions.title")}
              </h3>
              {[
                {
                  title: t("problemSolution.solutions.emotional"),
                  desc: t("problemSolution.solutions.emotionalDesc"),
                },
                {
                  title: t("problemSolution.solutions.privacy"),
                  desc: t("problemSolution.solutions.privacyDesc"),
                },
                {
                  title: t("problemSolution.solutions.free"),
                  desc: t("problemSolution.solutions.freeDesc"),
                },
                {
                  title: t("problemSolution.solutions.offline"),
                  desc: t("problemSolution.solutions.offlineDesc"),
                },
                {
                  title: t("problemSolution.solutions.customizable"),
                  desc: t("problemSolution.solutions.customizableDesc"),
                },
                {
                  title: t("problemSolution.solutions.multiModal"),
                  desc: t("problemSolution.solutions.multiModalDesc"),
                },
              ].map((solution, idx) => (
                <div key={idx} className="flex gap-4">
                  <span className="text-2xl flex-shrink-0">✅</span>
                  <div>
                    <h4 className="font-bold text-purple-600 mb-1">
                      {solution.title}
                    </h4>
                    <p className="text-gray-600 text-sm">{solution.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-32 bg-gradient-to-br from-purple-50 to-violet-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-8 text-gray-900"
          >
            우리의 비전
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-700 leading-relaxed mb-8"
          >
            Garden of Eden은 단순한 AI 어시스턴트가 아닙니다.
            우리는 모든 사람이 자신만의 완벽한 AI 동반자를 가질 수 있는 세상을 꿈꿉니다.
            프라이버시를 보호하면서도, 진정으로 나를 이해하고, 함께 성장하는 친구 말이죠.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-lg text-gray-600 leading-relaxed"
          >
            오픈소스로 시작한 이 프로젝트는 전 세계 개발자들과 함께
            더 나은 AI의 미래를 만들어가고 있습니다.
            당신도 이 여정에 함께하시겠습니까?
          </motion.p>
        </div>
      </section>
    </main>
  );
}
