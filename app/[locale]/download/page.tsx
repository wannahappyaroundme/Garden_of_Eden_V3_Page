"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function DownloadPage() {
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
            {t("finalCTA.title")}
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-white/90 mb-12"
          >
            {t("finalCTA.description")}
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <a
              href="https://github.com/wannahappyaroundme/Garden_of_Eden_V3/releases"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-purple-600 font-bold text-lg py-4 px-10 rounded-full hover:bg-purple-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              {t("finalCTA.downloadButton")}
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
        </div>
      </section>

      {/* Platform Downloads */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900"
          >
            모든 플랫폼 지원
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 p-10 rounded-2xl border border-blue-200 hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <div className="text-6xl mb-6 text-center">🪟</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 text-center">
                Windows
              </h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500">✓</span>
                  <span className="text-gray-600">Windows 10 이상</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500">✓</span>
                  <span className="text-gray-600">.exe 설치 파일</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500">✓</span>
                  <span className="text-gray-600">자동 업데이트</span>
                </li>
              </ul>
              <a
                href="https://github.com/wannahappyaroundme/Garden_of_Eden_V3/releases"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-blue-600 text-white font-bold py-3 rounded-full hover:bg-blue-700 transition-colors"
              >
                Download for Windows
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-gray-50 to-slate-50 p-10 rounded-2xl border border-gray-300 hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <div className="text-6xl mb-6 text-center">🍎</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 text-center">
                macOS
              </h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-gray-500">✓</span>
                  <span className="text-gray-600">macOS 10.15 이상</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-500">✓</span>
                  <span className="text-gray-600">.dmg 설치 파일</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-500">✓</span>
                  <span className="text-gray-600">Apple Silicon 지원</span>
                </li>
              </ul>
              <a
                href="https://github.com/wannahappyaroundme/Garden_of_Eden_V3/releases"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-gray-800 text-white font-bold py-3 rounded-full hover:bg-gray-900 transition-colors"
              >
                Download for macOS
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-orange-50 to-amber-50 p-10 rounded-2xl border border-orange-200 hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <div className="text-6xl mb-6 text-center">🐧</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 text-center">
                Linux
              </h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-orange-500">✓</span>
                  <span className="text-gray-600">Ubuntu, Debian</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500">✓</span>
                  <span className="text-gray-600">.AppImage 파일</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500">✓</span>
                  <span className="text-gray-600">다양한 배포판 지원</span>
                </li>
              </ul>
              <a
                href="https://github.com/wannahappyaroundme/Garden_of_Eden_V3/releases"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-orange-600 text-white font-bold py-3 rounded-full hover:bg-orange-700 transition-colors"
              >
                Download for Linux
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* System Requirements */}
      <section className="py-32 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900"
          >
            시스템 요구사항
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/70 backdrop-blur-xl p-8 rounded-2xl border border-white/50"
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-900">
                최소 사양 ⚡
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="text-purple-500 font-bold">•</span>
                  <span><strong>CPU:</strong> Intel i5 / AMD Ryzen 5 이상</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-500 font-bold">•</span>
                  <span><strong>RAM:</strong> 8GB 이상</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-500 font-bold">•</span>
                  <span><strong>저장공간:</strong> 10GB 여유 공간</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-500 font-bold">•</span>
                  <span><strong>GPU:</strong> 통합 그래픽 (선택사항)</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/70 backdrop-blur-xl p-8 rounded-2xl border border-white/50"
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-900">
                권장 사양 🚀
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="text-violet-500 font-bold">•</span>
                  <span><strong>CPU:</strong> Intel i7 / AMD Ryzen 7 이상</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-violet-500 font-bold">•</span>
                  <span><strong>RAM:</strong> 16GB 이상</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-violet-500 font-bold">•</span>
                  <span><strong>저장공간:</strong> 20GB 여유 공간 (SSD 권장)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-violet-500 font-bold">•</span>
                  <span><strong>GPU:</strong> NVIDIA/AMD 전용 그래픽 (더 빠른 추론)</span>
                </li>
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 text-center p-6 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl border border-blue-200"
          >
            <p className="text-lg text-gray-700">
              💡 <strong>팁:</strong> GPU가 있으면 AI 모델 추론 속도가 2-3배 빨라집니다!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Start Guide */}
      <section className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900"
          >
            빠른 시작 가이드
          </motion.h2>

          <div className="space-y-8">
            {[
              {
                step: "1",
                title: "다운로드 및 설치",
                description:
                  "위에서 운영체제에 맞는 설치 파일을 다운로드하고 실행하세요. 설치 마법사를 따라 진행하면 자동으로 설치됩니다.",
                icon: "⬇️",
              },
              {
                step: "2",
                title: "AI 모델 다운로드",
                description:
                  "첫 실행 시 사용하고 싶은 AI 모델을 선택하세요. Llama 3.2 1B는 가볍고 빠르며, 3B는 더 정확한 답변을 제공합니다.",
                icon: "🧠",
              },
              {
                step: "3",
                title: "페르소나 선택",
                description:
                  "6가지 사전 설정된 페르소나 중 하나를 선택하거나, 직접 커스터마이징하여 당신만의 AI 동반자를 만드세요.",
                icon: "🎭",
              },
              {
                step: "4",
                title: "대화 시작!",
                description:
                  "이제 모든 준비가 완료되었습니다. Eden과 자유롭게 대화를 나누며 새로운 AI 경험을 즐겨보세요.",
                icon: "💬",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex gap-6 items-start bg-gradient-to-br from-purple-50 to-violet-50 p-8 rounded-2xl border border-purple-200"
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                    {item.step}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-4xl">{item.icon}</span>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community & Support */}
      <section className="py-32 bg-gradient-to-br from-purple-500/75 via-violet-500/75 to-indigo-500/75 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-8"
          >
            도움이 필요하신가요?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl mb-12 text-white/90"
          >
            활발한 커뮤니티와 함께 Eden을 더 잘 활용해보세요
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="grid md:grid-cols-2 gap-6"
          >
            <a
              href="https://github.com/wannahappyaroundme/Garden_of_Eden_V3/discussions"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/20 backdrop-blur-xl p-8 rounded-2xl border border-white/30 hover:bg-white/30 transition-all duration-300"
            >
              <div className="text-5xl mb-4">💬</div>
              <h3 className="text-2xl font-bold mb-3">커뮤니티 포럼</h3>
              <p className="text-white/80">
                다른 사용자들과 팁을 공유하고 질문하세요
              </p>
            </a>

            <a
              href="https://github.com/wannahappyaroundme/Garden_of_Eden_V3/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/20 backdrop-blur-xl p-8 rounded-2xl border border-white/30 hover:bg-white/30 transition-all duration-300"
            >
              <div className="text-5xl mb-4">🐛</div>
              <h3 className="text-2xl font-bold mb-3">버그 리포트</h3>
              <p className="text-white/80">
                문제를 발견하셨나요? 알려주세요!
              </p>
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
