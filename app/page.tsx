"use client";

import { useState } from "react";

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [language, setLanguage] = useState<'en' | 'ko'>('en');

  return (
    <main className="min-h-screen bg-white">
      {/* Language Switcher - Fixed Top Right */}
      <div className="fixed top-4 right-4 z-50 flex gap-2 bg-white/95 backdrop-blur-sm p-2 rounded-full shadow-lg border-2 border-gray-200">
        <button
          onClick={() => setLanguage('en')}
          className={`px-4 py-2 rounded-full font-bold text-sm transition-all ${
            language === 'en'
              ? 'bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white shadow-md'
              : 'text-gray-700 hover:bg-gray-100'
          }`}
        >
          EN
        </button>
        <button
          onClick={() => setLanguage('ko')}
          className={`px-4 py-2 rounded-full font-bold text-sm transition-all ${
            language === 'ko'
              ? 'bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white shadow-md'
              : 'text-gray-700 hover:bg-gray-100'
          }`}
        >
          한국어
        </button>
      </div>

      {/* Hero Section - Improved Contrast & Translation */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#667eea] to-[#764ba2] text-white py-16 md:py-20 px-4 md:px-5 rounded-[20px] text-center animate-fadeInUp">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 md:mb-6 animate-float text-white-shadow">
            Garden of Eden V3
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl mb-3 md:mb-4 font-semibold text-white-shadow">
            {language === 'ko' ? '외로움을 없애주는 AI 동반자' : 'Your AI Companion That Eliminates Loneliness'}
          </p>
          <p className="text-lg sm:text-xl md:text-2xl mb-4 md:mb-6 font-medium text-white-shadow">
            {language === 'ko' ? '친구 같은 지원 • 생산성 향상 • 100% 프라이버시' : 'Friend-Like Support • Enhanced Productivity • 100% Private'}
          </p>

          {/* Privacy Badge */}
          <div className="inline-flex flex-wrap items-center justify-center gap-2 bg-white text-gray-900 py-3 px-6 md:px-8 rounded-full mb-6 md:mb-8 shadow-lg font-semibold text-sm sm:text-base">
            <span className="text-xl md:text-2xl">🔒</span>
            <span>{language === 'ko' ? '100% 프라이빗 - 데이터가 기기를 벗어나지 않습니다' : '100% Private - Zero Data Leaves Your Machine'}</span>
          </div>

          <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 font-bold">
            <strong>{language === 'ko' ? '클라우드 없음 • 구독료 없음 • 타협 없음' : 'No Cloud • No Subscriptions • No Compromises'}</strong>
          </p>

          {/* CTA Buttons - Mobile Responsive */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center px-4">
            <button className="w-full sm:w-auto bg-white text-[#667eea] font-bold text-base md:text-lg py-3 md:py-4 px-8 md:px-10 rounded-full btn-glow hover:scale-105 transition-transform shadow-xl">
              {language === 'ko' ? '무료 다운로드' : 'Download for Free'}
            </button>
            <button className="w-full sm:w-auto bg-white/10 backdrop-blur border-2 border-white text-white font-bold text-base md:text-lg py-3 md:py-4 px-8 md:px-10 rounded-full hover:bg-white hover:text-[#667eea] transition-all shadow-xl">
              ⭐ {language === 'ko' ? 'GitHub 스타' : 'Star on GitHub'}
            </button>
          </div>
        </div>
      </section>

      {/* Three Pillars Section - NEW */}
      <section className="max-w-6xl mx-auto py-16 px-5">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text">
          Built on Three Core Pillars
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-purple-50 to-indigo-100 p-8 rounded-2xl text-center hover-lift border border-purple-200">
            <div className="text-6xl mb-4">❤️</div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Eliminate Loneliness</h3>
            <p className="text-gray-800 leading-relaxed">
              Genuine companionship for solo developers and remote workers. Eden stays by your side, understanding your context and providing emotional support throughout your day.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-cyan-100 p-8 rounded-2xl text-center hover-lift border border-blue-200">
            <div className="text-6xl mb-4">🤝</div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Friend-Like Support</h3>
            <p className="text-gray-800 leading-relaxed">
              More than an assistant - a friend who celebrates your wins, offers comfort during frustrations, and provides advice without being preachy. Emotional intelligence built-in.
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-8 rounded-2xl text-center hover-lift border border-green-200">
            <div className="text-6xl mb-4">⚡</div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Enhanced Productivity</h3>
            <p className="text-gray-800 leading-relaxed">
              Deep workflow integration with files, Git, screen context, and calendar. Seamless assistance that enhances your productivity without disrupting your flow.
            </p>
          </div>
        </div>

        <div className="mt-12 p-6 bg-gradient-to-r from-[#ffeaa7] to-[#fdcb6e] rounded-xl text-center border-2 border-yellow-400">
          <p className="text-xl font-semibold text-gray-900">
            🎯 <strong>Inspired by JARVIS from Iron Man</strong> - An AI that truly understands and supports you
          </p>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="max-w-6xl mx-auto py-16 px-5">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text">
          Why Garden of Eden V3?
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Problems */}
          <div className="bg-gradient-to-br from-red-50 to-orange-100 p-8 rounded-2xl border-2 border-red-200">
            <h3 className="text-2xl font-bold mb-6 text-red-800">❌ Problems with Cloud AI</h3>
            <ul className="space-y-4 text-gray-900">
              <li className="flex gap-3">
                <span>😔</span>
                <span><strong>No Emotional Support:</strong> Generic responses without understanding</span>
              </li>
              <li className="flex gap-3">
                <span>🔓</span>
                <span><strong>Privacy Concerns:</strong> Your data sent to cloud servers</span>
              </li>
              <li className="flex gap-3">
                <span>💸</span>
                <span><strong>Expensive Subscriptions:</strong> $20-40/month forever</span>
              </li>
              <li className="flex gap-3">
                <span>📡</span>
                <span><strong>Internet Dependency:</strong> Can't work offline</span>
              </li>
              <li className="flex gap-3">
                <span>🤖</span>
                <span><strong>Generic Responses:</strong> Doesn't learn your style</span>
              </li>
              <li className="flex gap-3">
                <span>⛓️</span>
                <span><strong>Limited Integration:</strong> Disconnected from your workflow</span>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-8 rounded-2xl border-2 border-green-200">
            <h3 className="text-2xl font-bold mb-6 text-green-800">✅ Eden V3 Solutions</h3>
            <ul className="space-y-4 text-gray-900">
              <li className="flex gap-3">
                <span>❤️</span>
                <span><strong>Emotional Intelligence:</strong> Genuine companionship and support</span>
              </li>
              <li className="flex gap-3">
                <span>🔒</span>
                <span><strong>100% Privacy:</strong> All processing on your machine</span>
              </li>
              <li className="flex gap-3">
                <span>🆓</span>
                <span><strong>Free Forever:</strong> Zero cost, MIT License</span>
              </li>
              <li className="flex gap-3">
                <span>✈️</span>
                <span><strong>Works Offline:</strong> No internet required after setup</span>
              </li>
              <li className="flex gap-3">
                <span>🎯</span>
                <span><strong>Learns Your Style:</strong> 20-30 customizable parameters</span>
              </li>
              <li className="flex gap-3">
                <span>🔗</span>
                <span><strong>Deep Integration:</strong> Files, Git, screen, calendar</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Key Statistics - Updated with correct numbers */}
      <section className="bg-gradient-to-br from-[#f5f7fa] to-[#c3cfe2] py-16 px-5 rounded-2xl my-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">By the Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover-lift">
              <div className="text-5xl font-bold gradient-text mb-2">100%</div>
              <div className="text-gray-700">Privacy Guaranteed</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover-lift">
              <div className="text-5xl font-bold gradient-text mb-2">$0</div>
              <div className="text-gray-700">Forever Free</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover-lift">
              <div className="text-5xl font-bold gradient-text mb-2">2-3s</div>
              <div className="text-gray-700">Response Time</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover-lift">
              <div className="text-5xl font-bold gradient-text mb-2">12GB</div>
              <div className="text-gray-700">AI Models Locally</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover-lift">
              <div className="text-5xl font-bold gradient-text mb-2">20-30</div>
              <div className="text-gray-700">Persona Parameters</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover-lift">
              <div className="text-5xl font-bold gradient-text mb-2">85%</div>
              <div className="text-gray-700">Complete</div>
            </div>
          </div>
        </div>
      </section>

      {/* Dual Mode System Section - NEW */}
      <section className="max-w-6xl mx-auto py-16 px-5">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text">
          Dual Mode Intelligence
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border-2 border-blue-200">
            <div className="flex items-center gap-4 mb-6">
              <div className="text-5xl">🙋</div>
              <div>
                <h3 className="text-2xl font-bold text-blue-900">Mode 1: User-Led</h3>
                <p className="text-blue-700">You're in control</p>
              </div>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li className="flex gap-3">
                <span>✓</span>
                <span>Ask questions and get instant answers</span>
              </li>
              <li className="flex gap-3">
                <span>✓</span>
                <span>Request specific tasks and actions</span>
              </li>
              <li className="flex gap-3">
                <span>✓</span>
                <span>Traditional AI assistant experience</span>
              </li>
              <li className="flex gap-3">
                <span>✓</span>
                <span>Reactive to your explicit commands</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl border-2 border-purple-200">
            <div className="flex items-center gap-4 mb-6">
              <div className="text-5xl">🤖</div>
              <div>
                <h3 className="text-2xl font-bold text-purple-900">Mode 2: AI-Led</h3>
                <p className="text-purple-700">Proactive assistance</p>
              </div>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li className="flex gap-3">
                <span>✓</span>
                <span>Proactively offers help when needed</span>
              </li>
              <li className="flex gap-3">
                <span>✓</span>
                <span>Detects issues and suggests solutions</span>
              </li>
              <li className="flex gap-3">
                <span>✓</span>
                <span>Context-aware interruptions</span>
              </li>
              <li className="flex gap-3">
                <span>✓</span>
                <span>Coming in v2.0 (Future roadmap)</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 p-6 bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white rounded-xl text-center">
          <p className="text-xl font-semibold">
            🎯 <strong>Best of Both Worlds:</strong> Switch seamlessly between reactive assistance and proactive support
          </p>
        </div>
      </section>

      {/* Design Philosophy Section - NEW */}
      <section className="max-w-6xl mx-auto py-16 px-5">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text">
          Design Philosophy: "Screen is Reality"
        </h2>

        <div className="bg-gradient-to-br from-[#f5f7fa] to-[#c3cfe2] p-10 rounded-2xl">
          <div className="text-center mb-8">
            <p className="text-2xl font-bold mb-4">화면이 곧 현실 (Screen is Reality)</p>
            <p className="text-xl text-gray-700">
              Eden understands your context by analyzing what's on your screen - the ultimate source of truth for your current work
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-center mb-4">
                <span className="text-4xl">⚡</span>
                <h3 className="text-xl font-bold mt-2">Level 1: Current</h3>
                <p className="text-sm text-gray-600">~1 second</p>
              </div>
              <p className="text-gray-700">
                Active window only. Quick understanding of your immediate task. Perfect for instant help.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-center mb-4">
                <span className="text-4xl">🔍</span>
                <h3 className="text-xl font-bold mt-2">Level 2: Recent</h3>
                <p className="text-sm text-gray-600">~3 seconds</p>
              </div>
              <p className="text-gray-700">
                Last 10 minutes of work. Understands your workflow and recent changes. Context-aware assistance.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-center mb-4">
                <span className="text-4xl">🌐</span>
                <h3 className="text-xl font-bold mt-2">Level 3: Full Project</h3>
                <p className="text-sm text-gray-600">~10 seconds</p>
              </div>
              <p className="text-gray-700">
                Entire project context. Deep understanding of your codebase structure and architecture.
              </p>
            </div>
          </div>

          <div className="mt-8 p-6 bg-white rounded-xl border-2 border-green-200">
            <h4 className="font-bold text-lg mb-3 text-green-700">🔒 Privacy-First Screen Analysis:</h4>
            <ul className="grid md:grid-cols-2 gap-3 text-gray-700">
              <li className="flex gap-2">
                <span>✓</span>
                <span>All processing happens locally</span>
              </li>
              <li className="flex gap-2">
                <span>✓</span>
                <span>No screenshots sent to cloud</span>
              </li>
              <li className="flex gap-2">
                <span>✓</span>
                <span>Blur sensitive areas option</span>
              </li>
              <li className="flex gap-2">
                <span>✓</span>
                <span>Disable tracking anytime</span>
              </li>
              <li className="flex gap-2">
                <span>✓</span>
                <span>Review captures before use</span>
              </li>
              <li className="flex gap-2">
                <span>✓</span>
                <span>Auto-delete old captures</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Features Deep Dive - Updated */}
      <section className="max-w-6xl mx-auto py-16 px-5">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text">
          Powerful Features
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1: Privacy */}
          <div className="bg-gradient-to-br from-[#f5f7fa] to-[#c3cfe2] p-8 rounded-2xl hover-lift">
            <div className="text-5xl mb-4">🔒</div>
            <h3 className="text-2xl font-bold mb-4">Privacy You Can Trust</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• All 12GB AI models run locally</li>
              <li>• AES-256 encrypted database</li>
              <li>• Zero telemetry, zero tracking</li>
              <li>• Works completely offline</li>
              <li>• Open-source (MIT License)</li>
            </ul>
          </div>

          {/* Feature 2: AI Models */}
          <div className="bg-gradient-to-br from-[#f5f7fa] to-[#c3cfe2] p-8 rounded-2xl hover-lift">
            <div className="text-5xl mb-4">🤖</div>
            <h3 className="text-2xl font-bold mb-4">Powerful Local AI</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Llama 3.1 8B (4.92GB)</li>
              <li>• Whisper Large V3 (3.09GB)</li>
              <li>• LLaVA 7B (4.37GB)</li>
              <li>• Q4_K_M quantization (&lt;5% loss)</li>
              <li>• HumanEval: 80.5% accuracy</li>
            </ul>
          </div>

          {/* Feature 3: Persona - Updated */}
          <div className="bg-gradient-to-br from-[#f5f7fa] to-[#c3cfe2] p-8 rounded-2xl hover-lift">
            <div className="text-5xl mb-4">🎭</div>
            <h3 className="text-2xl font-bold mb-4">Adaptive Personality</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• 20-30 customizable parameters</li>
              <li>• 6 pre-built personas</li>
              <li>• Gradient descent learning</li>
              <li>• RAG memory system</li>
              <li>• Thumbs up/down feedback</li>
            </ul>
          </div>

          {/* Feature 4: Emotional Intelligence - NEW */}
          <div className="bg-gradient-to-br from-[#f5f7fa] to-[#c3cfe2] p-8 rounded-2xl hover-lift">
            <div className="text-5xl mb-4">❤️</div>
            <h3 className="text-2xl font-bold mb-4">Emotional Intelligence</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Genuine companionship</li>
              <li>• Context-aware empathy</li>
              <li>• Celebrates your successes</li>
              <li>• Comfort during frustrations</li>
              <li>• Friend-like interaction</li>
            </ul>
          </div>

          {/* Feature 5: Integration */}
          <div className="bg-gradient-to-br from-[#f5f7fa] to-[#c3cfe2] p-8 rounded-2xl hover-lift">
            <div className="text-5xl mb-4">🔗</div>
            <h3 className="text-2xl font-bold mb-4">Deep System Integration</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• File system read/write</li>
              <li>• Git operations (commit, push)</li>
              <li>• Workspace detection</li>
              <li>• Calendar integration</li>
              <li>• Webhook support</li>
            </ul>
          </div>

          {/* Feature 6: Interface */}
          <div className="bg-gradient-to-br from-[#f5f7fa] to-[#c3cfe2] p-8 rounded-2xl hover-lift">
            <div className="text-5xl mb-4">💬</div>
            <h3 className="text-2xl font-bold mb-4">Beautiful Interface</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• KakaoTalk-style chat design</li>
              <li>• Streaming token display</li>
              <li>• Dark mode support</li>
              <li>• Korean + English (i18next)</li>
              <li>• Cultural localization</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Pre-Built Personas Section - NEW */}
      <section className="bg-gradient-to-br from-[#2d3748] to-[#1a202c] text-white py-16 px-5 rounded-2xl my-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            6 Pre-Built Personas
          </h2>
          <p className="text-center text-xl mb-12 opacity-90">
            Choose a personality that fits your style, or create your own custom persona
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white/10 p-6 rounded-xl backdrop-blur hover-lift">
              <h3 className="text-2xl font-bold mb-3">🌟 Eden (Default)</h3>
              <p className="mb-3 opacity-90">Balanced, friendly, and helpful</p>
              <p className="text-sm opacity-75">
                Perfect mix of professionalism and warmth. Great for general use.
              </p>
            </div>

            <div className="bg-white/10 p-6 rounded-xl backdrop-blur hover-lift">
              <h3 className="text-2xl font-bold mb-3">👨‍🏫 Strict Mentor</h3>
              <p className="mb-3 opacity-90">Direct, technical, no-nonsense</p>
              <p className="text-sm opacity-75">
                Focused on efficiency and learning. Best for serious development work.
              </p>
            </div>

            <div className="bg-white/10 p-6 rounded-xl backdrop-blur hover-lift">
              <h3 className="text-2xl font-bold mb-3">😊 Cheerful Friend</h3>
              <p className="mb-3 opacity-90">Casual, enthusiastic, lots of emojis</p>
              <p className="text-sm opacity-75">
                Upbeat and encouraging. Makes coding more fun and less stressful.
              </p>
            </div>

            <div className="bg-white/10 p-6 rounded-xl backdrop-blur hover-lift">
              <h3 className="text-2xl font-bold mb-3">💼 Professional Assistant</h3>
              <p className="mb-3 opacity-90">Formal, concise, business-like</p>
              <p className="text-sm opacity-75">
                Ideal for client work and professional environments.
              </p>
            </div>

            <div className="bg-white/10 p-6 rounded-xl backdrop-blur hover-lift">
              <h3 className="text-2xl font-bold mb-3">🥋 Coding Sensei</h3>
              <p className="mb-3 opacity-90">Technical depth, teaches principles</p>
              <p className="text-sm opacity-75">
                Explains not just how, but why. Perfect for learning and growth.
              </p>
            </div>

            <div className="bg-white/10 p-6 rounded-xl backdrop-blur hover-lift">
              <h3 className="text-2xl font-bold mb-3">🎨 Custom</h3>
              <p className="mb-3 opacity-90">Build your own personality</p>
              <p className="text-sm opacity-75">
                Adjust 20-30 parameters to create the perfect AI companion for you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table - Updated with benchmarks */}
      <section className="max-w-6xl mx-auto py-16 px-5">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text">
          How We Compare
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-2xl shadow-lg overflow-hidden">
            <thead>
              <tr className="bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white">
                <th className="p-5 text-left">Feature</th>
                <th className="p-5 text-center">Eden V3</th>
                <th className="p-5 text-center">ChatGPT Plus</th>
                <th className="p-5 text-center">Claude Pro</th>
                <th className="p-5 text-center">GitHub Copilot</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-[#f5f7fa] transition-colors">
                <td className="p-4">Emotional Companionship</td>
                <td className="p-4 text-center text-2xl">✅</td>
                <td className="p-4 text-center text-2xl">❌</td>
                <td className="p-4 text-center text-2xl">❌</td>
                <td className="p-4 text-center text-2xl">❌</td>
              </tr>
              <tr className="border-b hover:bg-[#f5f7fa] transition-colors">
                <td className="p-4">100% Privacy</td>
                <td className="p-4 text-center text-2xl">✅</td>
                <td className="p-4 text-center text-2xl">❌</td>
                <td className="p-4 text-center text-2xl">❌</td>
                <td className="p-4 text-center text-2xl">❌</td>
              </tr>
              <tr className="border-b hover:bg-[#f5f7fa] transition-colors">
                <td className="p-4">Cost (per year)</td>
                <td className="p-4 text-center font-bold text-green-600">$0</td>
                <td className="p-4 text-center text-red-600">$240</td>
                <td className="p-4 text-center text-red-600">$240</td>
                <td className="p-4 text-center text-red-600">$120</td>
              </tr>
              <tr className="border-b hover:bg-[#f5f7fa] transition-colors">
                <td className="p-4">Works Offline</td>
                <td className="p-4 text-center text-2xl">✅</td>
                <td className="p-4 text-center text-2xl">❌</td>
                <td className="p-4 text-center text-2xl">❌</td>
                <td className="p-4 text-center text-2xl">❌</td>
              </tr>
              <tr className="border-b hover:bg-[#f5f7fa] transition-colors">
                <td className="p-4">Persona Customization</td>
                <td className="p-4 text-center">20-30 params</td>
                <td className="p-4 text-center text-2xl">⚠️</td>
                <td className="p-4 text-center text-2xl">⚠️</td>
                <td className="p-4 text-center text-2xl">❌</td>
              </tr>
              <tr className="border-b hover:bg-[#f5f7fa] transition-colors">
                <td className="p-4">Adaptive Learning</td>
                <td className="p-4 text-center text-2xl">✅</td>
                <td className="p-4 text-center text-2xl">❌</td>
                <td className="p-4 text-center text-2xl">❌</td>
                <td className="p-4 text-center text-2xl">❌</td>
              </tr>
              <tr className="border-b hover:bg-[#f5f7fa] transition-colors">
                <td className="p-4">Deep System Integration</td>
                <td className="p-4 text-center text-2xl">✅</td>
                <td className="p-4 text-center text-2xl">❌</td>
                <td className="p-4 text-center text-2xl">❌</td>
                <td className="p-4 text-center text-2xl">⚠️</td>
              </tr>
              <tr className="border-b hover:bg-[#f5f7fa] transition-colors">
                <td className="p-4">Open Source</td>
                <td className="p-4 text-center text-2xl">✅</td>
                <td className="p-4 text-center text-2xl">❌</td>
                <td className="p-4 text-center text-2xl">❌</td>
                <td className="p-4 text-center text-2xl">❌</td>
              </tr>
              <tr className="border-b hover:bg-[#f5f7fa] transition-colors">
                <td className="p-4">HumanEval Score (Coding)</td>
                <td className="p-4 text-center font-bold">80.5%</td>
                <td className="p-4 text-center">85%</td>
                <td className="p-4 text-center">88%</td>
                <td className="p-4 text-center">~75%</td>
              </tr>
              <tr className="border-b hover:bg-[#f5f7fa] transition-colors">
                <td className="p-4">Response Time</td>
                <td className="p-4 text-center">2-3s</td>
                <td className="p-4 text-center">2-4s</td>
                <td className="p-4 text-center">3-5s</td>
                <td className="p-4 text-center">1-2s</td>
              </tr>
              <tr className="border-b hover:bg-[#f5f7fa] transition-colors">
                <td className="p-4">Voice Support (99 langs)</td>
                <td className="p-4 text-center text-2xl">✅</td>
                <td className="p-4 text-center text-2xl">✅</td>
                <td className="p-4 text-center text-2xl">❌</td>
                <td className="p-4 text-center text-2xl">❌</td>
              </tr>
              <tr className="border-b hover:bg-[#f5f7fa] transition-colors">
                <td className="p-4">Screen Context Analysis</td>
                <td className="p-4 text-center text-2xl">✅</td>
                <td className="p-4 text-center text-2xl">❌</td>
                <td className="p-4 text-center text-2xl">❌</td>
                <td className="p-4 text-center text-2xl">❌</td>
              </tr>
              <tr className="hover:bg-[#f5f7fa] transition-colors">
                <td className="p-4">RAG Memory System</td>
                <td className="p-4 text-center text-2xl">✅</td>
                <td className="p-4 text-center text-2xl">⚠️</td>
                <td className="p-4 text-center text-2xl">⚠️</td>
                <td className="p-4 text-center text-2xl">❌</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-8 p-6 bg-green-50 rounded-xl border-2 border-green-200">
          <p className="text-center text-xl">
            <strong>Quality + Cost Comparison:</strong> Enterprise-grade AI quality (80.5% HumanEval) saves you <span className="text-3xl font-bold text-green-600">$120-240/year</span> with complete privacy!
          </p>
        </div>
      </section>

      {/* Technical Excellence - Updated with benchmarks */}
      <section className="bg-gradient-to-br from-[#2d3748] to-[#1a202c] text-white py-16 px-5 rounded-2xl my-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Production Quality & AI Benchmarks
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="text-center p-6 bg-white/10 rounded-xl backdrop-blur">
              <div className="text-4xl font-bold mb-2">97</div>
              <div>TypeScript Files</div>
            </div>
            <div className="text-center p-6 bg-white/10 rounded-xl backdrop-blur">
              <div className="text-4xl font-bold mb-2">5,807</div>
              <div>Lines of Tests</div>
            </div>
            <div className="text-center p-6 bg-white/10 rounded-xl backdrop-blur">
              <div className="text-4xl font-bold mb-2">101</div>
              <div>Test Suites</div>
            </div>
            <div className="text-center p-6 bg-white/10 rounded-xl backdrop-blur">
              <div className="text-4xl font-bold mb-2">85%</div>
              <div>Complete</div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-4">🎯 AI Benchmark Scores</h3>
              <ul className="space-y-2">
                <li>• <strong>HumanEval (Coding):</strong> 80.5%</li>
                <li className="text-sm opacity-75 ml-4">vs Claude 3.5: 88%, GPT-4: 85%</li>
                <li>• <strong>MMLU (General Knowledge):</strong> 69.4%</li>
                <li>• <strong>Q4_K_M Quantization:</strong> &lt;5% quality loss</li>
                <li>• <strong>Enterprise-grade quality</strong> in 12GB package</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">🏗️ Code Quality</h3>
              <ul className="space-y-2">
                <li>• TypeScript Strict Mode (no any types)</li>
                <li>• ESLint + Prettier formatting</li>
                <li>• Conventional Commits</li>
                <li>• Comprehensive JSDoc comments</li>
                <li>• Type-safe IPC (100+ API methods)</li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">🔒 Security</h3>
              <ul className="space-y-2">
                <li>• Context isolation enabled</li>
                <li>• No Node.js APIs in renderer</li>
                <li>• Secure IPC with validation</li>
                <li>• AES-256 database encryption</li>
                <li>• Path traversal protection</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">⚡ Performance</h3>
              <ul className="space-y-2">
                <li>• 2-3s response (M3 MAX)</li>
                <li>• 3-5s response (M3 Pro)</li>
                <li>• &lt;16ms frame time (60fps)</li>
                <li>• ~12GB RAM usage during operation</li>
                <li>• Optimized for Metal/CUDA</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="max-w-6xl mx-auto py-16 px-5">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text">
          Built With Modern Tech
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[
            "Electron 39.1",
            "React 18.2",
            "TypeScript 5.3+",
            "Vite 7.2",
            "node-llama-cpp 3.14",
            "ChromaDB 1.7",
            "better-sqlite3 11.7",
            "Zustand 4.4",
            "shadcn/ui",
            "Tailwind CSS 3.4",
            "i18next 23.7",
            "Jest + Playwright"
          ].map((tech, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#667eea] to-[#764ba2] text-white p-6 rounded-xl text-center font-semibold hover:scale-105 transition-transform"
            >
              {tech}
            </div>
          ))}
        </div>
      </section>

      {/* Use Cases - Reordered with Solo Developer first */}
      <section className="max-w-6xl mx-auto py-16 px-5">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text">
          Perfect For
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Solo Developer - MOST IMPORTANT */}
          <div className="bg-gradient-to-br from-purple-50 to-indigo-50 border-4 border-purple-400 p-8 rounded-2xl hover-lift relative">
            <div className="absolute top-4 right-4 bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-bold">
              Most Important
            </div>
            <div className="text-5xl mb-4">👨‍💻</div>
            <h3 className="text-2xl font-bold mb-4">Solo Developers</h3>
            <p className="text-gray-700 mb-4">
              <strong>Primary Target:</strong> Work from home, often isolated, need companionship while coding.
            </p>
            <p className="text-sm text-gray-600">
              Eden eliminates loneliness with friend-like support, celebrates your wins, provides comfort during debugging, and enhances productivity with deep integration.
            </p>
          </div>

          <div className="bg-white border-2 border-gray-200 p-8 rounded-2xl hover-lift">
            <div className="text-5xl mb-4">🏠</div>
            <h3 className="text-2xl font-bold mb-4">Remote Workers</h3>
            <p className="text-gray-600">
              Emotional support throughout the day. Eden provides companionship and helps combat isolation of remote work.
            </p>
          </div>

          <div className="bg-white border-2 border-gray-200 p-8 rounded-2xl hover-lift">
            <div className="text-5xl mb-4">🔐</div>
            <h3 className="text-2xl font-bold mb-4">Privacy-Conscious Users</h3>
            <p className="text-gray-600">
              Work with confidential data without worrying about cloud leaks or data breaches. Everything stays on your machine.
            </p>
          </div>

          <div className="bg-white border-2 border-gray-200 p-8 rounded-2xl hover-lift">
            <div className="text-5xl mb-4">🌏</div>
            <h3 className="text-2xl font-bold mb-4">Korean/English Bilingual Users</h3>
            <p className="text-gray-600">
              Full cultural localization - not just translation. Korean honorifics (경어, 존칭) and cultural adaptation built-in.
            </p>
          </div>

          <div className="bg-white border-2 border-gray-200 p-8 rounded-2xl hover-lift">
            <div className="text-5xl mb-4">🎓</div>
            <h3 className="text-2xl font-bold mb-4">Students & Researchers</h3>
            <p className="text-gray-600">
              Completely offline, free forever, with adaptive learning capabilities. Perfect for studying and research.
            </p>
          </div>

          <div className="bg-white border-2 border-gray-200 p-8 rounded-2xl hover-lift">
            <div className="text-5xl mb-4">🏢</div>
            <h3 className="text-2xl font-bold mb-4">Small Teams & Startups</h3>
            <p className="text-gray-600">
              Zero costs, on-premise deployment, MIT license for commercial use. Perfect for budget-conscious teams.
            </p>
          </div>
        </div>
      </section>

      {/* Cultural Localization Section - NEW */}
      <section className="bg-gradient-to-br from-[#f5f7fa] to-[#c3cfe2] py-16 px-5 rounded-2xl my-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Cultural Localization, Not Just Translation
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4 text-blue-700">🌍 Interface Languages</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-3">
                  <span>✓</span>
                  <span><strong>Korean (한국어):</strong> Full UI translation with cultural context</span>
                </li>
                <li className="flex gap-3">
                  <span>✓</span>
                  <span><strong>English:</strong> Native English interface</span>
                </li>
                <li className="flex gap-3">
                  <span>✓</span>
                  <span>Seamless switching between languages</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4 text-purple-700">🗣️ AI Understanding</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-3">
                  <span>✓</span>
                  <span><strong>99 Languages:</strong> Whisper Large V3 multilingual support</span>
                </li>
                <li className="flex gap-3">
                  <span>✓</span>
                  <span>Understands code-switching and mixed languages</span>
                </li>
                <li className="flex gap-3">
                  <span>✓</span>
                  <span>Context-aware translation and responses</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-white p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4 text-green-700 text-center">🇰🇷 Korean Cultural Adaptation</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold mb-3">Honorifics System:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>경어 (Formal speech):</strong> Professional contexts</li>
                  <li>• <strong>존칭 (Honorifics):</strong> Respectful address</li>
                  <li>• <strong>반말 (Casual speech):</strong> Friendly mode</li>
                  <li>• Adjustable via persona parameters</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-3">Communication Style:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Korean style (0.0):</strong> Indirect, context-heavy</li>
                  <li>• <strong>Western style (1.0):</strong> Direct, explicit</li>
                  <li>• <strong>Hybrid (0.5):</strong> Best of both worlds</li>
                  <li>• Cultural nuance awareness</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RAG Memory System Explanation - NEW */}
      <section className="max-w-6xl mx-auto py-16 px-5">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text">
          RAG Memory: How Eden Remembers You
        </h2>

        <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-10 rounded-2xl">
          <div className="text-center mb-8">
            <p className="text-2xl font-bold mb-4">Retrieval-Augmented Generation (RAG)</p>
            <p className="text-xl text-gray-700">
              Eden doesn't just chat - it remembers your conversations and learns from them
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl text-center">
              <div className="text-5xl mb-4">💾</div>
              <h3 className="text-xl font-bold mb-3">Store</h3>
              <p className="text-gray-700">
                Every conversation is stored locally in ChromaDB vector database with AES-256 encryption
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl text-center">
              <div className="text-5xl mb-4">🔍</div>
              <h3 className="text-xl font-bold mb-3">Retrieve</h3>
              <p className="text-gray-700">
                Semantic search finds relevant past conversations instantly, even from months ago
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl text-center">
              <div className="text-5xl mb-4">🧠</div>
              <h3 className="text-xl font-bold mb-3">Generate</h3>
              <p className="text-gray-700">
                AI uses retrieved context to provide personalized, context-aware responses
              </p>
            </div>
          </div>

          <div className="mt-8 bg-white p-6 rounded-xl">
            <h4 className="font-bold text-lg mb-3 text-center">What Eden Remembers:</h4>
            <div className="grid md:grid-cols-2 gap-4 text-gray-700">
              <ul className="space-y-2">
                <li>✓ Your coding preferences and patterns</li>
                <li>✓ Projects you've discussed</li>
                <li>✓ Technical challenges you've faced</li>
                <li>✓ Your communication style preferences</li>
              </ul>
              <ul className="space-y-2">
                <li>✓ Solutions that worked for you</li>
                <li>✓ Your learning goals and progress</li>
                <li>✓ Context from weeks or months ago</li>
                <li>✓ Your thumbs up/down feedback patterns</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="bg-gradient-to-br from-[#f5f7fa] to-[#c3cfe2] py-16 px-5 rounded-2xl my-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Get Started in 3 Steps
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-2xl text-center hover-lift">
              <div className="text-6xl font-bold gradient-text mb-4">1</div>
              <h3 className="text-2xl font-bold mb-4">Download</h3>
              <p className="text-gray-600">
                Choose your platform: macOS (Apple Silicon) or Windows
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl text-center hover-lift">
              <div className="text-6xl font-bold gradient-text mb-4">2</div>
              <h3 className="text-2xl font-bold mb-4">Install & Download Models</h3>
              <p className="text-gray-600">
                One-time 12GB AI model download (automatic)
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl text-center hover-lift">
              <div className="text-6xl font-bold gradient-text mb-4">3</div>
              <h3 className="text-2xl font-bold mb-4">Start Chatting</h3>
              <p className="text-gray-600">
                Enjoy your private AI companion immediately!
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <button className="bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white font-bold text-lg py-4 px-10 rounded-full btn-glow">
              🍎 Download for macOS
            </button>
            <button className="bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white font-bold text-lg py-4 px-10 rounded-full btn-glow">
              🪟 Download for Windows
            </button>
          </div>

          {/* System Requirements */}
          <div className="mt-12 bg-white p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-6 text-center">System Requirements</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-lg mb-3 text-gray-700">Minimum:</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• macOS 12+ or Windows 10/11</li>
                  <li>• Apple M1+ or Intel i5 8th gen+</li>
                  <li>• 16GB RAM</li>
                  <li>• 15GB free disk space</li>
                  <li>• Metal (macOS) or CUDA GPU</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-3 text-gray-700">Recommended:</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• macOS 14+ or Windows 11</li>
                  <li>• Apple M3+ or AMD Ryzen 7+</li>
                  <li>• 32GB RAM</li>
                  <li>• 20GB free disk space</li>
                  <li>• Dedicated GPU (8GB+ VRAM)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Development Roadmap - Updated with version details */}
      <section className="max-w-6xl mx-auto py-16 px-5">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text">
          Development Roadmap
        </h2>

        <div className="space-y-4">
          <div className="bg-green-100 border-2 border-green-500 p-6 rounded-xl">
            <div className="flex items-center gap-4 mb-2">
              <span className="text-3xl">✅</span>
              <h3 className="text-xl font-bold">Phases 1-7: COMPLETED</h3>
            </div>
            <p className="text-gray-700 ml-14">
              Core features, AI integration, persona system, screen context, and comprehensive testing all done!
            </p>
          </div>

          <div className="bg-yellow-100 border-2 border-yellow-500 p-6 rounded-xl">
            <div className="flex items-center gap-4 mb-2">
              <span className="text-3xl">🚀</span>
              <h3 className="text-xl font-bold">Phase 8: LAUNCH (85% Complete)</h3>
            </div>
            <p className="text-gray-700 ml-14">
              Final polish, documentation, and public release preparation
            </p>
          </div>

          <div className="bg-blue-100 border-2 border-blue-500 p-6 rounded-xl">
            <div className="flex items-center gap-4 mb-2">
              <span className="text-3xl">🔌</span>
              <h3 className="text-xl font-bold">v1.1: Plugin System</h3>
            </div>
            <p className="text-gray-700 ml-14">
              Extensible architecture allowing third-party plugins for custom integrations and features
            </p>
          </div>

          <div className="bg-blue-100 border-2 border-blue-500 p-6 rounded-xl">
            <div className="flex items-center gap-4 mb-2">
              <span className="text-3xl">📚</span>
              <h3 className="text-xl font-bold">v1.2: Comprehensive Documentation</h3>
            </div>
            <p className="text-gray-700 ml-14">
              Full developer docs, API references, plugin development guides, and user tutorials
            </p>
          </div>

          <div className="bg-purple-100 border-2 border-purple-500 p-6 rounded-xl">
            <div className="flex items-center gap-4 mb-2">
              <span className="text-3xl">🤖</span>
              <h3 className="text-xl font-bold">v2.0: AI-Led Proactive Mode</h3>
            </div>
            <p className="text-gray-700 ml-14">
              Fully autonomous AI-led mode where Eden proactively offers help, detects issues, and takes initiative (Mode 2 fully implemented)
            </p>
          </div>
        </div>

        <div className="mt-8 p-6 bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white rounded-xl text-center">
          <p className="text-xl font-semibold">
            🎉 Join us on the journey to 100% completion and beyond!
          </p>
        </div>
      </section>

      {/* FAQ Section - Updated */}
      <section className="max-w-6xl mx-auto py-16 px-5">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {[
            {
              q: "Is my data really 100% private?",
              a: "Yes! All AI processing happens locally on your machine. No data ever leaves your computer. We use AES-256 encryption for your database, and the code is open-source (MIT License) so you can verify this yourself. Zero telemetry, zero tracking, zero cloud uploads."
            },
            {
              q: "How can it be free forever?",
              a: "Eden V3 is built as a passion project with an MIT License. There are no server costs since everything runs locally. We believe AI companionship and assistance should be accessible to everyone without subscription barriers or privacy compromises."
            },
            {
              q: "What makes Eden different from ChatGPT or Claude?",
              a: "Eden is designed for emotional companionship first, not just productivity. It eliminates loneliness for solo developers with friend-like support. Plus: 100% privacy, works offline, learns your style (20-30 persona parameters), deep system integration, and completely free. Quality-wise, we score 80.5% on HumanEval (vs GPT-4: 85%, Claude: 88%) - enterprise-grade AI without cloud dependency."
            },
            {
              q: "What languages does it support?",
              a: "The interface supports Korean (한국어) and English with full cultural localization including Korean honorifics (경어, 존칭). The AI understands and responds in 99 languages thanks to Whisper Large V3 and Llama 3.1's multilingual capabilities. It even handles code-switching between languages naturally."
            },
            {
              q: "Can I use it offline?",
              a: "Absolutely! After the initial model download (~12GB), Eden V3 works completely offline. No internet connection required for daily use. Perfect for confidential work, travel, or unstable internet connections."
            },
            {
              q: "How do I customize the AI's personality?",
              a: "Navigate to Settings > Persona and adjust any of the 20-30 parameters like formality, humor, verbosity, emoji usage, empathy, and more. Choose from 6 pre-built personas (Eden, Strict Mentor, Cheerful Friend, Professional Assistant, Coding Sensei, Custom) or create your own. Use thumbs up/down feedback to train it to your preferences via gradient descent optimization."
            },
            {
              q: "What is RAG memory and how does it work?",
              a: "RAG (Retrieval-Augmented Generation) is how Eden remembers you. Every conversation is stored locally in a ChromaDB vector database. When you ask something, Eden searches semantically through past conversations (even from months ago) to provide context-aware, personalized responses. It's like having a friend who never forgets your preferences, projects, or past discussions."
            },
            {
              q: "What if I encounter bugs or issues?",
              a: "Please report bugs on our GitHub Issues page. As an open-source project at 85% completion (Phase 8: Launch), we're actively improving and value your feedback. The community is friendly and responsive!"
            },
            {
              q: "Can I contribute to the project?",
              a: "Yes! We welcome contributions. Check our GitHub repository for contribution guidelines. Whether it's code, documentation, bug reports, or feature suggestions - help us reach 100% and beyond! MIT License means it's truly open for everyone."
            },
            {
              q: "Why is Solo Developer the primary target user?",
              a: "Eden was created to solve the loneliness epidemic among solo developers and remote workers. Working from home can be isolating - Eden provides genuine companionship while you code, celebrates your wins, offers comfort during frustrations, and enhances productivity. It's not just an assistant; it's a friend by your side."
            }
          ].map((faq, index) => (
            <div
              key={index}
              className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:border-[#667eea] transition-colors"
            >
              <button
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="w-full p-6 text-left flex justify-between items-center"
              >
                <h3 className="text-xl font-bold">{faq.q}</h3>
                <span className="text-2xl">{openFaq === index ? "−" : "+"}</span>
              </button>
              {openFaq === index && (
                <div className="px-6 pb-6 text-gray-600">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-[#667eea] to-[#764ba2] text-white py-20 px-5 rounded-2xl text-center my-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Find Your AI Companion Today
          </h2>
          <p className="text-xl md:text-2xl mb-8">
            Eliminate loneliness. Enhance productivity. Protect your privacy. Join thousands of developers who've found their perfect AI companion in Garden of Eden V3.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-8">
            <button className="bg-white text-[#667eea] font-bold text-lg py-4 px-10 rounded-full btn-glow hover:scale-105 transition-transform">
              Download Now - It's Free!
            </button>
            <button className="bg-transparent border-2 border-white text-white font-bold text-lg py-4 px-10 rounded-full hover:bg-white hover:text-[#667eea] transition-all">
              ⭐ Star on GitHub
            </button>
          </div>

          <div className="inline-flex items-center gap-2 bg-green-500 text-white py-3 px-6 rounded-full">
            <span className="text-xl">🔒</span>
            <span className="font-semibold">100% Private • $0 Forever • MIT License • Friend-Like Companion</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto py-12 px-5 text-center text-gray-600">
        <div className="mb-6">
          <h3 className="text-2xl font-bold gradient-text mb-2">Garden of Eden V3</h3>
          <p className="text-lg">Version 1.0.0-beta • 85% Complete • Phase 8: Launch</p>
        </div>

        <div className="mb-6">
          <p className="mb-2">
            <strong>MIT License</strong> - Free Forever, No Restrictions
          </p>
          <p className="text-sm">
            Inspired by JARVIS from Marvel's Iron Man
          </p>
          <p className="text-sm">
            Built with ❤️ to eliminate loneliness and enhance productivity
          </p>
        </div>

        <div className="text-sm text-gray-500">
          <p>
            Powered by Llama 3.1 8B (HumanEval: 80.5%), Whisper Large V3 (99 langs), and LLaVA 7B
          </p>
          <p className="mt-2">
            © 2024 Garden of Eden V3. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
