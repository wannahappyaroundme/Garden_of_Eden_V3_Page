"use client";

import { useTranslations } from "next-intl";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import Carousel from "@/components/Carousel";
import Accordion from "@/components/Accordion";
import TypedText from "@/components/TypedText";
import { motion } from "framer-motion";

export default function Home() {
  const t = useTranslations();

  // Animation variants - Refined timings for elegance
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
    <main className="min-h-screen bg-neutral-50">
      {/* Language Switcher */}
      <LanguageSwitcher />

      {/* Hero Section - Mysterious Purple Gradient */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-500/75 via-violet-500/75 via-indigo-500/75 to-purple-600/75 text-white">
        {/* Animated Background Pattern */}
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
        {/* Glass morphism layer */}
        <div className="absolute inset-0 backdrop-blur-3xl" />

        <div className="relative z-10 max-w-2xl mx-auto px-6 py-20 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-8 border border-white/30"
            >
              <span className="text-2xl">🔒</span>
              <span className="text-sm font-semibold">
                {t("hero.privacyBadge")}
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
            >
              {t("hero.title")}
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-2xl md:text-3xl mb-4 font-light"
            >
              {t("hero.subtitle")} <TypedText />
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl mb-12 text-white/90"
            >
              {t("hero.tagline")}
            </motion.p>

            <motion.div
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <a
                href="https://github.com/wannahappyaroundme/Garden_of_Eden_V3/releases"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-purple-600 font-bold text-lg py-4 px-10 rounded-full hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-3xl"
              >
                {t("hero.downloadButton")}
              </a>
              <a
                href="https://github.com/wannahappyaroundme/Garden_of_Eden_V3"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-sm border-2 border-white text-white font-bold text-lg py-4 px-10 rounded-full hover:bg-white hover:text-purple-600 transition-all duration-300"
              >
                ⭐ {t("hero.githubButton")}
              </a>
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
            className="w-6 h-6 text-white"
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

      {/* Three Pillars - Minimalist Cards */}
      <section className="max-w-7xl mx-auto py-24 px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900"
        >
          {t("pillars.title")}
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: "❤️",
              title: t("pillars.loneliness.title"),
              desc: t("pillars.loneliness.description"),
            },
            {
              icon: "🤝",
              title: t("pillars.support.title"),
              desc: t("pillars.support.description"),
            },
            {
              icon: "⚡",
              title: t("pillars.productivity.title"),
              desc: t("pillars.productivity.description"),
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
              <p className="text-gray-600 leading-relaxed">{pillar.desc}</p>
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

      {/* Problem/Solution - Side-by-Side Minimalist */}
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
              <h3 className="text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-[#667eea] to-[#764ba2]">
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
                  title: t("problemSolution.solutions.learns"),
                  desc: t("problemSolution.solutions.learnsDesc"),
                },
                {
                  title: t("problemSolution.solutions.integration"),
                  desc: t("problemSolution.solutions.integrationDesc"),
                },
              ].map((solution, idx) => (
                <div key={idx} className="flex gap-4">
                  <span className="text-2xl flex-shrink-0">✅</span>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">
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

      {/* Stats - Large Numbers, Clean */}
      <section className="py-24 bg-gradient-to-br from-indigo-500/70 via-purple-500/70 via-violet-500/70 to-fuchsia-500/70 text-white backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-20"
          >
            {t("stats.title")}
          </motion.h2>

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
                <div className="text-6xl md:text-7xl font-bold mb-4">
                  {stat.num}
                </div>
                <div className="text-lg md:text-xl text-white/90">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Carousel */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-2xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900"
          >
            {t("features.title")}
          </motion.h2>

          <Carousel autoPlay interval={12000}>
            {/* Privacy Feature */}
            <div className="bg-white/60 backdrop-blur-xl p-12 rounded-2xl md:rounded-[40px] shadow-lg mx-4 border border-white/50 hover:shadow-xl transition-all duration-300">
              <div className="text-center">
                <div className="text-6xl mb-6">🔒</div>
                <h3 className="text-3xl font-bold mb-6 text-gray-900">
                  {t("features.privacy.title")}
                </h3>
                <ul className="space-y-3 text-left max-w-xl mx-auto">
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 text-xl flex-shrink-0">
                      ✓
                    </span>
                    <span className="text-gray-700">
                      {t("features.privacy.item1")}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 text-xl flex-shrink-0">
                      ✓
                    </span>
                    <span className="text-gray-700">
                      {t("features.privacy.item2")}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 text-xl flex-shrink-0">
                      ✓
                    </span>
                    <span className="text-gray-700">
                      {t("features.privacy.item3")}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 text-xl flex-shrink-0">
                      ✓
                    </span>
                    <span className="text-gray-700">
                      {t("features.privacy.item4")}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 text-xl flex-shrink-0">
                      ✓
                    </span>
                    <span className="text-gray-700">
                      {t("features.privacy.item5")}
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* AI Models Feature */}
            <div className="bg-white/60 backdrop-blur-xl p-12 rounded-2xl md:rounded-[40px] shadow-lg mx-4 border border-white/50 hover:shadow-xl transition-all duration-300">
              <div className="text-center">
                <div className="text-6xl mb-6">🧠</div>
                <h3 className="text-3xl font-bold mb-6 text-gray-900">
                  {t("features.aiModels.title")}
                </h3>
                <ul className="space-y-3 text-left max-w-xl mx-auto">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500 text-xl flex-shrink-0">
                      ◆
                    </span>
                    <span className="text-gray-700">
                      {t("features.aiModels.item1")}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500 text-xl flex-shrink-0">
                      ◆
                    </span>
                    <span className="text-gray-700">
                      {t("features.aiModels.item2")}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500 text-xl flex-shrink-0">
                      ◆
                    </span>
                    <span className="text-gray-700">
                      {t("features.aiModels.item3")}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500 text-xl flex-shrink-0">
                      ◆
                    </span>
                    <span className="text-gray-700">
                      {t("features.aiModels.item4")}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500 text-xl flex-shrink-0">
                      ◆
                    </span>
                    <span className="text-gray-700">
                      {t("features.aiModels.item5")}
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Persona Feature */}
            <div className="bg-white/60 backdrop-blur-xl p-12 rounded-2xl md:rounded-[40px] shadow-lg mx-4 border border-white/50 hover:shadow-xl transition-all duration-300">
              <div className="text-center">
                <div className="text-6xl mb-6">🎭</div>
                <h3 className="text-3xl font-bold mb-6 text-gray-900">
                  {t("features.persona.title")}
                </h3>
                <ul className="space-y-3 text-left max-w-xl mx-auto">
                  <li className="flex items-start gap-3">
                    <span className="text-purple-500 text-xl flex-shrink-0">
                      ★
                    </span>
                    <span className="text-gray-700">
                      {t("features.persona.item1")}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-500 text-xl flex-shrink-0">
                      ★
                    </span>
                    <span className="text-gray-700">
                      {t("features.persona.item2")}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-500 text-xl flex-shrink-0">
                      ★
                    </span>
                    <span className="text-gray-700">
                      {t("features.persona.item3")}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-500 text-xl flex-shrink-0">
                      ★
                    </span>
                    <span className="text-gray-700">
                      {t("features.persona.item4")}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-500 text-xl flex-shrink-0">
                      ★
                    </span>
                    <span className="text-gray-700">
                      {t("features.persona.item5")}
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Emotional Intelligence Feature */}
            <div className="bg-white/60 backdrop-blur-xl p-12 rounded-2xl md:rounded-[40px] shadow-lg mx-4 border border-white/50 hover:shadow-xl transition-all duration-300">
              <div className="text-center">
                <div className="text-6xl mb-6">💝</div>
                <h3 className="text-3xl font-bold mb-6 text-gray-900">
                  {t("features.emotional.title")}
                </h3>
                <ul className="space-y-3 text-left max-w-xl mx-auto">
                  <li className="flex items-start gap-3">
                    <span className="text-pink-500 text-xl flex-shrink-0">
                      ♥
                    </span>
                    <span className="text-gray-700">
                      {t("features.emotional.item1")}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-pink-500 text-xl flex-shrink-0">
                      ♥
                    </span>
                    <span className="text-gray-700">
                      {t("features.emotional.item2")}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-pink-500 text-xl flex-shrink-0">
                      ♥
                    </span>
                    <span className="text-gray-700">
                      {t("features.emotional.item3")}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-pink-500 text-xl flex-shrink-0">
                      ♥
                    </span>
                    <span className="text-gray-700">
                      {t("features.emotional.item4")}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-pink-500 text-xl flex-shrink-0">
                      ♥
                    </span>
                    <span className="text-gray-700">
                      {t("features.emotional.item5")}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </Carousel>
        </div>
      </section>

      {/* Personas Carousel */}
      <section className="py-24 bg-white">
        <div className="max-w-2xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900"
          >
            {t("personas.title")}
          </motion.h2>

          <Carousel autoPlay interval={13000}>
            {[
              {
                name: t("personas.eden.name"),
                desc: t("personas.eden.description"),
                details: t("personas.eden.details"),
                icon: "🌟",
              },
              {
                name: t("personas.strictMentor.name"),
                desc: t("personas.strictMentor.description"),
                details: t("personas.strictMentor.details"),
                icon: "👨‍🏫",
              },
              {
                name: t("personas.cheerfulFriend.name"),
                desc: t("personas.cheerfulFriend.description"),
                details: t("personas.cheerfulFriend.details"),
                icon: "🎉",
              },
              {
                name: t("personas.professional.name"),
                desc: t("personas.professional.description"),
                details: t("personas.professional.details"),
                icon: "💼",
              },
              {
                name: t("personas.sensei.name"),
                desc: t("personas.sensei.description"),
                details: t("personas.sensei.details"),
                icon: "🥋",
              },
              {
                name: t("personas.custom.name"),
                desc: t("personas.custom.description"),
                details: t("personas.custom.details"),
                icon: "⚙️",
              },
            ].map((persona, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-purple-100/50 to-indigo-100/50 backdrop-blur-xl p-12 rounded-2xl md:rounded-[40px] mx-4 border border-white/50 hover:shadow-xl transition-all duration-300"
              >
                <div className="text-center">
                  <div className="text-7xl mb-6">{persona.icon}</div>
                  <h3 className="text-3xl font-bold mb-4 text-gray-900">
                    {persona.name}
                  </h3>
                  <p className="text-xl text-gray-700 mb-4">{persona.desc}</p>
                  <p className="text-gray-600">{persona.details}</p>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </section>

      {/* Comparison Table - Enhanced Design */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900"
          >
            {t("comparison.title")}
          </motion.h2>

          <div className="overflow-x-auto">
            <table className="w-full bg-white/70 backdrop-blur-xl rounded-2xl md:rounded-[40px] shadow-lg overflow-hidden border border-white/50">
              <thead className="bg-gradient-to-r from-purple-500/85 via-violet-500/85 to-indigo-500/85 text-white backdrop-blur-sm">
                <tr>
                  <th className="py-4 px-6 text-left font-bold">
                    {t("comparison.feature")}
                  </th>
                  <th className="py-4 px-6 text-center font-bold">
                    {t("comparison.edenV3")}
                  </th>
                  <th className="py-4 px-6 text-center font-bold">
                    {t("comparison.chatgptPlus")}
                  </th>
                  <th className="py-4 px-6 text-center font-bold">
                    {t("comparison.claudePro")}
                  </th>
                  <th className="py-4 px-6 text-center font-bold">
                    {t("comparison.githubCopilot")}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {[
                  {
                    feature: t("comparison.emotionalCompanionship"),
                    eden: "✅",
                    gpt: "❌",
                    claude: "❌",
                    copilot: "❌",
                  },
                  {
                    feature: t("comparison.privacy"),
                    eden: "✅ 100%",
                    gpt: "❌",
                    claude: "❌",
                    copilot: "❌",
                  },
                  {
                    feature: t("comparison.costPerYear"),
                    eden: "$0",
                    gpt: "$240",
                    claude: "$240",
                    copilot: "$100",
                  },
                  {
                    feature: t("comparison.worksOffline"),
                    eden: "✅",
                    gpt: "❌",
                    claude: "❌",
                    copilot: "❌",
                  },
                  {
                    feature: t("comparison.personaCustomization"),
                    eden: "✅ " + t("comparison.personaParams"),
                    gpt: "❌",
                    claude: "❌",
                    copilot: "❌",
                  },
                  {
                    feature: t("comparison.adaptiveLearning"),
                    eden: "✅",
                    gpt: "❌",
                    claude: "❌",
                    copilot: "⚠️",
                  },
                  {
                    feature: t("comparison.deepIntegration"),
                    eden: "✅",
                    gpt: "❌",
                    claude: "❌",
                    copilot: "⚠️",
                  },
                  {
                    feature: t("comparison.openSource"),
                    eden: "✅ MIT",
                    gpt: "❌",
                    claude: "❌",
                    copilot: "❌",
                  },
                  {
                    feature: t("comparison.humanEvalScore"),
                    eden: "80.5%",
                    gpt: "85%",
                    claude: "88%",
                    copilot: "~85%",
                  },
                  {
                    feature: t("comparison.responseTime"),
                    eden: "2-4s",
                    gpt: "~1s",
                    claude: "~1s",
                    copilot: "<1s",
                  },
                  {
                    feature: t("comparison.voiceSupport"),
                    eden: "✅",
                    gpt: "✅",
                    claude: "❌",
                    copilot: "❌",
                  },
                  {
                    feature: t("comparison.screenContext"),
                    eden: "✅",
                    gpt: "❌",
                    claude: "❌",
                    copilot: "❌",
                  },
                  {
                    feature: t("comparison.ragMemory"),
                    eden: "✅",
                    gpt: "⚠️",
                    claude: "⚠️",
                    copilot: "❌",
                  },
                ].map((row, idx) => (
                  <tr key={idx} className="hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6 font-semibold text-gray-900">
                      {row.feature}
                    </td>
                    <td className="py-4 px-6 text-center font-bold text-green-600">
                      {row.eden}
                    </td>
                    <td className="py-4 px-6 text-center text-gray-600">
                      {row.gpt}
                    </td>
                    <td className="py-4 px-6 text-center text-gray-600">
                      {row.claude}
                    </td>
                    <td className="py-4 px-6 text-center text-gray-600">
                      {row.copilot}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ - Accordion Style */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900"
          >
            {t("faq.title")}
          </motion.h2>

          <Accordion items={faqItems} />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-violet-500/70 via-purple-600/70 via-fuchsia-500/70 to-pink-500/70 text-white backdrop-blur-xl">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            {t("finalCta.title")}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl mb-12"
          >
            {t("finalCta.subtitle")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
          >
            <a
              href="https://github.com/wannahappyaroundme/Garden_of_Eden_V3/releases"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-purple-600 font-bold text-lg py-4 px-10 rounded-full hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-3xl"
            >
              {t("finalCta.downloadButton")}
            </a>
            <a
              href="https://github.com/wannahappyaroundme/Garden_of_Eden_V3"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-sm border-2 border-white text-white font-bold text-lg py-4 px-10 rounded-full hover:bg-white hover:text-purple-600 transition-all duration-300"
            >
              ⭐ {t("finalCta.githubButton")}
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="text-sm text-white/80"
          >
            {t("finalCta.badge")}
          </motion.p>
        </div>
      </section>

      {/* Minimalist Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-4">{t("footer.title")}</h3>
              <p className="text-gray-400 text-sm">{t("footer.version")}</p>
            </div>

            <div>
              <h4 className="font-bold mb-4">{t("footer.license")}</h4>
              <p className="text-gray-400 text-sm mb-2">
                {t("footer.licenseDesc")}
              </p>
              <p className="text-gray-400 text-sm">{t("footer.inspiration")}</p>
            </div>

            <div>
              <h4 className="font-bold mb-4">{t("footer.builtWith")}</h4>
              <p className="text-gray-400 text-sm">{t("footer.poweredBy")}</p>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-500 text-sm">{t("footer.copyright")}</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
