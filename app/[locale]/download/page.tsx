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
    <main className="min-h-screen bg-radial-white pt-20">
      {/* Hero Section */}
      <section className="relative py-32 bg-radial-white-center text-gray-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20 animate-gradient-shift bg-gradient-to-r from-transparent via-purple-200/10 to-transparent" />
        <div className="absolute inset-0 opacity-[0.03]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(168, 85, 247, 0.3) 1px, transparent 0)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>
        <div className="absolute inset-0 bg-radial-at-c from-transparent via-transparent to-purple-100/20" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-5xl md:text-7xl font-bold mb-6 text-gray-900"
          >
            {t("finalCTA.title")}
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-700 mb-12"
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
              className="bg-gradient-to-r from-purple-600 to-violet-600 text-white font-bold text-lg py-4 px-10 rounded-full hover:from-purple-700 hover:to-violet-700 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-purple-500/30 hover:scale-105"
            >
              {t("finalCTA.downloadButton")}
            </a>
            <a
              href="https://github.com/wannahappyaroundme/Garden_of_Eden_V3"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border-2 border-purple-600 text-purple-700 font-bold text-lg py-4 px-10 rounded-full hover:bg-purple-600 hover:text-white transition-all duration-300 hover:scale-105"
            >
              ⭐ {t("hero.githubButton")}
            </a>
          </motion.div>
        </div>
      </section>

      {/* Platform Downloads */}
      <section className="py-32 bg-radial-white-purple">
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
              className="bg-white/80 backdrop-blur-sm p-10 rounded-2xl border border-purple-200/60 hover:border-purple-300 hover:shadow-xl hover:shadow-purple-200/50 hover:scale-105 transition-all duration-300"
            >
              <div className="text-6xl mb-6 text-center animate-float">🪟</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 text-center">
                Windows
              </h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-purple-600">✓</span>
                  <span className="text-gray-700">Windows 10 이상</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600">✓</span>
                  <span className="text-gray-700">.exe 설치 파일</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600">✓</span>
                  <span className="text-gray-700">자동 업데이트</span>
                </li>
              </ul>
              <a
                href="https://github.com/wannahappyaroundme/Garden_of_Eden_V3/releases"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-gradient-to-r from-purple-600 to-violet-600 text-white font-bold py-3 rounded-full hover:from-purple-700 hover:to-violet-700 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30"
              >
                Download for Windows
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white/80 backdrop-blur-sm p-10 rounded-2xl border border-purple-200/60 hover:border-purple-300 hover:shadow-xl hover:shadow-purple-200/50 hover:scale-105 transition-all duration-300"
            >
              <div className="text-6xl mb-6 text-center animate-float">🍎</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 text-center">
                macOS
              </h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-purple-600">✓</span>
                  <span className="text-gray-700">macOS 10.15 이상</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600">✓</span>
                  <span className="text-gray-700">.dmg 설치 파일</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600">✓</span>
                  <span className="text-gray-700">Apple Silicon 지원</span>
                </li>
              </ul>
              <a
                href="https://github.com/wannahappyaroundme/Garden_of_Eden_V3/releases"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-gradient-to-r from-purple-600 to-violet-600 text-white font-bold py-3 rounded-full hover:from-purple-700 hover:to-violet-700 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30"
              >
                Download for macOS
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white/80 backdrop-blur-sm p-10 rounded-2xl border border-purple-200/60 hover:border-purple-300 hover:shadow-xl hover:shadow-purple-200/50 hover:scale-105 transition-all duration-300"
            >
              <div className="text-6xl mb-6 text-center animate-float">🐧</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 text-center">
                Linux
              </h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-purple-600">✓</span>
                  <span className="text-gray-700">Ubuntu, Debian</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600">✓</span>
                  <span className="text-gray-700">.AppImage 파일</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600">✓</span>
                  <span className="text-gray-700">다양한 배포판 지원</span>
                </li>
              </ul>
              <a
                href="https://github.com/wannahappyaroundme/Garden_of_Eden_V3/releases"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-gradient-to-r from-purple-600 to-violet-600 text-white font-bold py-3 rounded-full hover:from-purple-700 hover:to-violet-700 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30"
              >
                Download for Linux
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* System Requirements */}
      <section className="py-32 bg-radial-white-multi">
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
              className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-purple-200/60 hover:border-purple-300 hover:shadow-xl hover:shadow-purple-200/50 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-900">
                최소 사양 ⚡
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 font-bold">•</span>
                  <span><strong className="text-gray-900">CPU:</strong> Intel i5 / AMD Ryzen 5 이상</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 font-bold">•</span>
                  <span><strong className="text-gray-900">RAM:</strong> 8GB 이상</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 font-bold">•</span>
                  <span><strong className="text-gray-900">저장공간:</strong> 10GB 여유 공간</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 font-bold">•</span>
                  <span><strong className="text-gray-900">GPU:</strong> 통합 그래픽 (선택사항)</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-purple-200/60 hover:border-purple-300 hover:shadow-xl hover:shadow-purple-200/50 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-900">
                권장 사양 🚀
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 font-bold">•</span>
                  <span><strong className="text-gray-900">CPU:</strong> Intel i7 / AMD Ryzen 7 이상</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 font-bold">•</span>
                  <span><strong className="text-gray-900">RAM:</strong> 16GB 이상</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 font-bold">•</span>
                  <span><strong className="text-gray-900">저장공간:</strong> 20GB 여유 공간 (SSD 권장)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 font-bold">•</span>
                  <span><strong className="text-gray-900">GPU:</strong> NVIDIA/AMD 전용 그래픽 (더 빠른 추론)</span>
                </li>
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 text-center p-6 bg-purple-100/50 backdrop-blur-sm rounded-2xl border border-purple-200/60"
          >
            <p className="text-lg text-gray-700">
              💡 <strong className="text-gray-900">팁:</strong> GPU가 있으면 AI 모델 추론 속도가 2-3배 빨라집니다!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Start Guide */}
      <section className="py-32 bg-radial-white-center">
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
                className="flex gap-6 items-start bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-purple-200/60 hover:border-purple-300 hover:shadow-xl hover:shadow-purple-200/50 transition-all duration-300"
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-violet-600 text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-lg">
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
                  <p className="text-gray-700 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community & Support */}
      <section className="py-32 bg-radial-white-purple">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-8 text-gray-900"
          >
            도움이 필요하신가요?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl mb-12 text-gray-700"
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
              className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-purple-200/60 hover:border-purple-300 hover:shadow-xl hover:shadow-purple-200/50 transition-all duration-300"
            >
              <div className="text-5xl mb-4 animate-float">💬</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">커뮤니티 포럼</h3>
              <p className="text-gray-700">
                다른 사용자들과 팁을 공유하고 질문하세요
              </p>
            </a>

            <a
              href="https://github.com/wannahappyaroundme/Garden_of_Eden_V3/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-purple-200/60 hover:border-purple-300 hover:shadow-xl hover:shadow-purple-200/50 transition-all duration-300"
            >
              <div className="text-5xl mb-4 animate-float">🐛</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">버그 리포트</h3>
              <p className="text-gray-700">
                문제를 발견하셨나요? 알려주세요!
              </p>
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
