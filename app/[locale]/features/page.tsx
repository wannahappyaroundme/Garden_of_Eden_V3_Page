"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Carousel from "@/components/Carousel";

export default function FeaturesPage() {
  const t = useTranslations();

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <main className="min-h-screen bg-neutral-50 pt-20">
      {/* Hero Section */}
      <section className="relative py-32 bg-radial-at-t from-white via-purple-100/40 to-white text-gray-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20 animate-gradient-shift bg-gradient-to-r from-transparent via-purple-200/20 to-transparent" />
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(168, 85, 247, 0.3) 1px, transparent 0)",
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-violet-600 to-purple-600 bg-clip-text text-transparent"
          >
            {t("features.title")}
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-700"
          >
            Eden만의 특별한 기능들을 만나보세요
          </motion.p>
        </div>
      </section>

      {/* Features Carousel */}
      <section className="py-32 bg-radial-at-c from-purple-50/20 via-white to-violet-50/20">
        <div className="max-w-2xl mx-auto px-6">
          <Carousel autoPlay interval={12000}>
            {/* Privacy Feature */}
            <div className="bg-radial-at-tl from-white via-purple-50/50 to-violet-50/40 backdrop-blur-xl p-12 rounded-2xl md:rounded-[40px] shadow-lg mx-4 border border-purple-200/60 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] transition-all duration-500 hover:scale-[1.02]">
              <div className="text-center">
                <div className="text-6xl mb-6 animate-float">🔒</div>
                <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">
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
            <div className="bg-radial-at-tr from-white via-purple-50/50 to-violet-50/40 backdrop-blur-xl p-12 rounded-2xl md:rounded-[40px] shadow-lg mx-4 border border-purple-200/60 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] transition-all duration-500 hover:scale-[1.02]">
              <div className="text-center">
                <div className="text-6xl mb-6 animate-float">🧠</div>
                <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">
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
                </ul>
              </div>
            </div>

            {/* Persona Feature */}
            <div className="bg-radial-at-bl from-white via-purple-50/50 to-violet-50/40 backdrop-blur-xl p-12 rounded-2xl md:rounded-[40px] shadow-lg mx-4 border border-purple-200/60 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] transition-all duration-500 hover:scale-[1.02]">
              <div className="text-center">
                <div className="text-6xl mb-6 animate-float">🎭</div>
                <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">
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
                </ul>
              </div>
            </div>

            {/* Emotional Intelligence Feature */}
            <div className="bg-radial-at-br from-white via-purple-50/50 to-violet-50/40 backdrop-blur-xl p-12 rounded-2xl md:rounded-[40px] shadow-lg mx-4 border border-purple-200/60 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] transition-all duration-500 hover:scale-[1.02]">
              <div className="text-center">
                <div className="text-6xl mb-6 animate-float">💖</div>
                <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">
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
                </ul>
              </div>
            </div>
          </Carousel>
        </div>
      </section>

      {/* Personas Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900"
          >
            {t("personas.title")}
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                emoji: "💼",
                name: t("personas.professional.name"),
                desc: t("personas.professional.description"),
                detail: "업무 효율성에 집중하며, 전문적이고 정확한 답변을 제공합니다.",
              },
              {
                emoji: "🎨",
                name: t("personas.creative.name"),
                desc: t("personas.creative.description"),
                detail: "창의적 사고를 자극하고, 혁신적인 아이디어를 함께 발전시킵니다.",
              },
              {
                emoji: "🤗",
                name: t("personas.empathetic.name"),
                desc: t("personas.empathetic.description"),
                detail: "따뜻하고 공감적인 대화로 정서적 지원을 제공합니다.",
              },
              {
                emoji: "🎓",
                name: t("personas.teacher.name"),
                desc: t("personas.teacher.description"),
                detail: "복잡한 개념을 쉽게 설명하고, 학습을 효과적으로 돕습니다.",
              },
              {
                emoji: "🧘",
                name: t("personas.motivator.name"),
                desc: t("personas.motivator.description"),
                detail: "긍정적인 에너지로 목표 달성을 응원하고 격려합니다.",
              },
              {
                emoji: "🎮",
                name: t("personas.casual.name"),
                desc: t("personas.casual.description"),
                detail: "편안하고 친근한 톤으로 일상적인 대화를 나눕니다.",
              },
            ].map((persona, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-gradient-to-br from-purple-50 to-violet-50 p-8 rounded-2xl border border-purple-200 hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <div className="text-5xl mb-4">{persona.emoji}</div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">
                  {persona.name}
                </h3>
                <p className="text-gray-600 mb-3">{persona.desc}</p>
                <p className="text-sm text-gray-500">{persona.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Features */}
      <section className="py-32 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900"
          >
            기술적 우수성
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/70 backdrop-blur-xl p-10 rounded-2xl border border-white/50"
            >
              <div className="text-5xl mb-6">⚡</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                빠른 응답 속도
              </h3>
              <p className="text-gray-600 mb-4">
                로컬에서 실행되어 2-4초 내 응답을 제공합니다.
                클라우드 서비스의 네트워크 지연 없이 즉각적인 소통이 가능합니다.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>• Llama 3.2 1B/3B 최적화</li>
                <li>• Qwen 2.5 1.5B 지원</li>
                <li>• Phi 3.5 3.8B 통합</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/70 backdrop-blur-xl p-10 rounded-2xl border border-white/50"
            >
              <div className="text-5xl mb-6">🔧</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                완전한 커스터마이징
              </h3>
              <p className="text-gray-600 mb-4">
                17개 이상의 파라미터를 세밀하게 조정하여 당신만의 완벽한 AI를 만들어보세요.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>• Temperature, Top-P, Top-K 조정</li>
                <li>• Repeat Penalty 설정</li>
                <li>• Context Length 최적화</li>
                <li>• System Prompt 커스터마이징</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/70 backdrop-blur-xl p-10 rounded-2xl border border-white/50"
            >
              <div className="text-5xl mb-6">📱</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                크로스 플랫폼
              </h3>
              <p className="text-gray-600 mb-4">
                Windows, macOS, Linux 모두 지원합니다.
                어떤 환경에서든 동일한 경험을 제공합니다.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>• Electron 기반 데스크톱 앱</li>
                <li>• 일관된 UI/UX</li>
                <li>• 자동 업데이트 지원</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/70 backdrop-blur-xl p-10 rounded-2xl border border-white/50"
            >
              <div className="text-5xl mb-6">🌐</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                오프라인 작동
              </h3>
              <p className="text-gray-600 mb-4">
                인터넷 연결 없이도 완벽하게 작동합니다.
                비행기, 지하철, 어디서든 AI 동반자와 함께하세요.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>• 모델 로컬 저장</li>
                <li>• 대화 기록 로컬 관리</li>
                <li>• 네트워크 불필요</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
