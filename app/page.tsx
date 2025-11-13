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
          {language === 'ko' ? '세 가지 핵심 기둥' : 'Built on Three Core Pillars'}
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-purple-50 to-indigo-100 p-8 rounded-2xl text-center hover-lift border border-purple-200">
            <div className="text-6xl mb-4">❤️</div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              {language === 'ko' ? '외로움 해소' : 'Eliminate Loneliness'}
            </h3>
            <p className="text-gray-800 leading-relaxed">
              {language === 'ko'
                ? '혼자 일하는 개발자와 재택 근무자를 위한 진정한 동반자. Eden은 당신의 상황을 이해하고 하루 종일 정서적 지원을 제공합니다.'
                : 'Genuine companionship for solo developers and remote workers. Eden stays by your side, understanding your context and providing emotional support throughout your day.'
              }
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-cyan-100 p-8 rounded-2xl text-center hover-lift border border-blue-200">
            <div className="text-6xl mb-4">🤝</div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              {language === 'ko' ? '친구 같은 지원' : 'Friend-Like Support'}
            </h3>
            <p className="text-gray-800 leading-relaxed">
              {language === 'ko'
                ? '단순한 도우미 이상 - 당신의 성공을 축하하고, 좌절감을 느낄 때 위로하며, 설교하지 않으면서 조언을 제공하는 친구. 감성 지능이 내장되어 있습니다.'
                : 'More than an assistant - a friend who celebrates your wins, offers comfort during frustrations, and provides advice without being preachy. Emotional intelligence built-in.'
              }
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-8 rounded-2xl text-center hover-lift border border-green-200">
            <div className="text-6xl mb-4">⚡</div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              {language === 'ko' ? '생산성 향상' : 'Enhanced Productivity'}
            </h3>
            <p className="text-gray-800 leading-relaxed">
              {language === 'ko'
                ? '파일, Git, 화면 컨텍스트, 캘린더와 깊이 통합된 워크플로우. 업무 흐름을 방해하지 않으면서 생산성을 향상시키는 원활한 지원.'
                : 'Deep workflow integration with files, Git, screen context, and calendar. Seamless assistance that enhances your productivity without disrupting your flow.'
              }
            </p>
          </div>
        </div>

        <div className="mt-12 p-6 bg-gradient-to-r from-[#ffeaa7] to-[#fdcb6e] rounded-xl text-center border-2 border-yellow-400">
          <p className="text-xl font-semibold text-gray-900">
            🎯 <strong>{language === 'ko' ? '아이언맨의 자비스에서 영감을 받음' : 'Inspired by JARVIS from Iron Man'}</strong> - {language === 'ko' ? '당신을 진정으로 이해하고 지원하는 AI' : 'An AI that truly understands and supports you'}
          </p>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="max-w-6xl mx-auto py-16 px-5">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text">
          {language === 'ko' ? '왜 Garden of Eden V3인가?' : 'Why Garden of Eden V3?'}
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Problems */}
          <div className="bg-gradient-to-br from-red-50 to-orange-100 p-8 rounded-2xl border-2 border-red-200">
            <h3 className="text-2xl font-bold mb-6 text-red-800">
              {language === 'ko' ? '❌ 클라우드 AI의 문제점' : '❌ Problems with Cloud AI'}
            </h3>
            <ul className="space-y-4 text-gray-900">
              <li className="flex gap-3">
                <span>😔</span>
                <span>
                  <strong>{language === 'ko' ? '정서적 지원 부재:' : 'No Emotional Support:'}</strong>{' '}
                  {language === 'ko' ? '이해 없이 제공되는 일반적인 응답' : 'Generic responses without understanding'}
                </span>
              </li>
              <li className="flex gap-3">
                <span>🔓</span>
                <span>
                  <strong>{language === 'ko' ? '프라이버시 우려:' : 'Privacy Concerns:'}</strong>{' '}
                  {language === 'ko' ? '클라우드 서버로 전송되는 데이터' : 'Your data sent to cloud servers'}
                </span>
              </li>
              <li className="flex gap-3">
                <span>💸</span>
                <span>
                  <strong>{language === 'ko' ? '비싼 구독료:' : 'Expensive Subscriptions:'}</strong>{' '}
                  {language === 'ko' ? '월 $20-40 평생 지불' : '$20-40/month forever'}
                </span>
              </li>
              <li className="flex gap-3">
                <span>📡</span>
                <span>
                  <strong>{language === 'ko' ? '인터넷 의존성:' : 'Internet Dependency:'}</strong>{' '}
                  {language === 'ko' ? '오프라인에서 작동 불가' : "Can't work offline"}
                </span>
              </li>
              <li className="flex gap-3">
                <span>🤖</span>
                <span>
                  <strong>{language === 'ko' ? '일반적인 응답:' : 'Generic Responses:'}</strong>{' '}
                  {language === 'ko' ? '당신의 스타일을 학습하지 않음' : "Doesn't learn your style"}
                </span>
              </li>
              <li className="flex gap-3">
                <span>⛓️</span>
                <span>
                  <strong>{language === 'ko' ? '제한된 통합:' : 'Limited Integration:'}</strong>{' '}
                  {language === 'ko' ? '워크플로우와 분리됨' : 'Disconnected from your workflow'}
                </span>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-8 rounded-2xl border-2 border-green-200">
            <h3 className="text-2xl font-bold mb-6 text-green-800">
              {language === 'ko' ? '✅ Eden V3 솔루션' : '✅ Eden V3 Solutions'}
            </h3>
            <ul className="space-y-4 text-gray-900">
              <li className="flex gap-3">
                <span>❤️</span>
                <span>
                  <strong>{language === 'ko' ? '감성 지능:' : 'Emotional Intelligence:'}</strong>{' '}
                  {language === 'ko' ? '진정한 동반자 관계와 지원' : 'Genuine companionship and support'}
                </span>
              </li>
              <li className="flex gap-3">
                <span>🔒</span>
                <span>
                  <strong>{language === 'ko' ? '100% 프라이버시:' : '100% Privacy:'}</strong>{' '}
                  {language === 'ko' ? '모든 처리가 당신의 기기에서' : 'All processing on your machine'}
                </span>
              </li>
              <li className="flex gap-3">
                <span>🆓</span>
                <span>
                  <strong>{language === 'ko' ? '평생 무료:' : 'Free Forever:'}</strong>{' '}
                  {language === 'ko' ? '비용 제로, MIT 라이선스' : 'Zero cost, MIT License'}
                </span>
              </li>
              <li className="flex gap-3">
                <span>✈️</span>
                <span>
                  <strong>{language === 'ko' ? '오프라인 작동:' : 'Works Offline:'}</strong>{' '}
                  {language === 'ko' ? '설정 후 인터넷 불필요' : 'No internet required after setup'}
                </span>
              </li>
              <li className="flex gap-3">
                <span>🎯</span>
                <span>
                  <strong>{language === 'ko' ? '스타일 학습:' : 'Learns Your Style:'}</strong>{' '}
                  {language === 'ko' ? '20-30개 커스터마이징 가능한 파라미터' : '20-30 customizable parameters'}
                </span>
              </li>
              <li className="flex gap-3">
                <span>🔗</span>
                <span>
                  <strong>{language === 'ko' ? '깊은 통합:' : 'Deep Integration:'}</strong>{' '}
                  {language === 'ko' ? '파일, Git, 화면, 캘린더' : 'Files, Git, screen, calendar'}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Key Statistics - Updated with correct numbers */}
      <section className="bg-gradient-to-br from-[#f5f7fa] to-[#c3cfe2] py-16 px-5 rounded-2xl my-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            {language === 'ko' ? '숫자로 보는 Eden V3' : 'By the Numbers'}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover-lift">
              <div className="text-5xl font-bold gradient-text mb-2">100%</div>
              <div className="text-gray-800 font-medium">
                {language === 'ko' ? '프라이버시 보장' : 'Privacy Guaranteed'}
              </div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover-lift">
              <div className="text-5xl font-bold gradient-text mb-2">$0</div>
              <div className="text-gray-800 font-medium">
                {language === 'ko' ? '평생 무료' : 'Forever Free'}
              </div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover-lift">
              <div className="text-5xl font-bold gradient-text mb-2">2-3s</div>
              <div className="text-gray-800 font-medium">
                {language === 'ko' ? '응답 시간' : 'Response Time'}
              </div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover-lift">
              <div className="text-5xl font-bold gradient-text mb-2">12GB</div>
              <div className="text-gray-800 font-medium">
                {language === 'ko' ? '로컬 AI 모델' : 'AI Models Locally'}
              </div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover-lift">
              <div className="text-5xl font-bold gradient-text mb-2">20-30</div>
              <div className="text-gray-800 font-medium">
                {language === 'ko' ? '페르소나 파라미터' : 'Persona Parameters'}
              </div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover-lift">
              <div className="text-5xl font-bold gradient-text mb-2">85%</div>
              <div className="text-gray-800 font-medium">
                {language === 'ko' ? '완성도' : 'Complete'}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dual Mode System Section - NEW */}
      <section className="max-w-6xl mx-auto py-16 px-5">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text">
          {language === 'ko' ? '듀얼 모드 인텔리전스' : 'Dual Mode Intelligence'}
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border-2 border-blue-200">
            <div className="flex items-center gap-4 mb-6">
              <div className="text-5xl">🙋</div>
              <div>
                <h3 className="text-2xl font-bold text-blue-900">
                  {language === 'ko' ? '모드 1: 사용자 주도' : 'Mode 1: User-Led'}
                </h3>
                <p className="text-blue-700">
                  {language === 'ko' ? '당신이 컨트롤' : "You're in control"}
                </p>
              </div>
            </div>
            <ul className="space-y-3 text-gray-800">
              <li className="flex gap-3">
                <span>✓</span>
                <span>{language === 'ko' ? '질문하고 즉각적인 답변 받기' : 'Ask questions and get instant answers'}</span>
              </li>
              <li className="flex gap-3">
                <span>✓</span>
                <span>{language === 'ko' ? '특정 작업 및 행동 요청' : 'Request specific tasks and actions'}</span>
              </li>
              <li className="flex gap-3">
                <span>✓</span>
                <span>{language === 'ko' ? '전통적인 AI 어시스턴트 경험' : 'Traditional AI assistant experience'}</span>
              </li>
              <li className="flex gap-3">
                <span>✓</span>
                <span>{language === 'ko' ? '명시적 명령에 반응' : 'Reactive to your explicit commands'}</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl border-2 border-purple-200">
            <div className="flex items-center gap-4 mb-6">
              <div className="text-5xl">🤖</div>
              <div>
                <h3 className="text-2xl font-bold text-purple-900">
                  {language === 'ko' ? '모드 2: AI 주도' : 'Mode 2: AI-Led'}
                </h3>
                <p className="text-purple-700">
                  {language === 'ko' ? '선제적 지원' : 'Proactive assistance'}
                </p>
              </div>
            </div>
            <ul className="space-y-3 text-gray-800">
              <li className="flex gap-3">
                <span>✓</span>
                <span>{language === 'ko' ? '필요할 때 선제적으로 도움 제공' : 'Proactively offers help when needed'}</span>
              </li>
              <li className="flex gap-3">
                <span>✓</span>
                <span>{language === 'ko' ? '문제 감지 및 솔루션 제안' : 'Detects issues and suggests solutions'}</span>
              </li>
              <li className="flex gap-3">
                <span>✓</span>
                <span>{language === 'ko' ? '컨텍스트 인지 알림' : 'Context-aware interruptions'}</span>
              </li>
              <li className="flex gap-3">
                <span>✓</span>
                <span>{language === 'ko' ? 'v2.0에서 제공 예정 (미래 로드맵)' : 'Coming in v2.0 (Future roadmap)'}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 p-6 bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white rounded-xl text-center">
          <p className="text-xl font-semibold text-white-shadow">
            🎯 <strong>{language === 'ko' ? '양쪽의 장점:' : 'Best of Both Worlds:'}</strong> {language === 'ko' ? '반응형 지원과 선제적 지원 사이를 원활하게 전환' : 'Switch seamlessly between reactive assistance and proactive support'}
          </p>
        </div>
      </section>

      {/* Design Philosophy Section - NEW */}
      <section className="max-w-6xl mx-auto py-16 px-5">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text">
          {language === 'ko' ? '디자인 철학: "화면이 곧 현실"' : 'Design Philosophy: "Screen is Reality"'}
        </h2>

        <div className="bg-gradient-to-br from-[#f5f7fa] to-[#c3cfe2] p-10 rounded-2xl border-2 border-gray-300">
          <div className="text-center mb-8">
            <p className="text-2xl font-bold mb-4 text-gray-900">화면이 곧 현실 (Screen is Reality)</p>
            <p className="text-xl text-gray-800">
              {language === 'ko'
                ? 'Eden은 화면에 표시된 내용을 분석하여 컨텍스트를 이해합니다 - 현재 작업의 궁극적인 진실의 원천'
                : "Eden understands your context by analyzing what's on your screen - the ultimate source of truth for your current work"
              }
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-center mb-4">
                <span className="text-4xl">⚡</span>
                <h3 className="text-xl font-bold mt-2 text-gray-900">
                  {language === 'ko' ? '레벨 1: 현재' : 'Level 1: Current'}
                </h3>
                <p className="text-sm text-gray-600">~1 {language === 'ko' ? '초' : 'second'}</p>
              </div>
              <p className="text-gray-800">
                {language === 'ko'
                  ? '활성 창만. 즉각적인 작업에 대한 빠른 이해. 즉각적인 도움에 완벽합니다.'
                  : 'Active window only. Quick understanding of your immediate task. Perfect for instant help.'
                }
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-center mb-4">
                <span className="text-4xl">🔍</span>
                <h3 className="text-xl font-bold mt-2 text-gray-900">
                  {language === 'ko' ? '레벨 2: 최근' : 'Level 2: Recent'}
                </h3>
                <p className="text-sm text-gray-600">~3 {language === 'ko' ? '초' : 'seconds'}</p>
              </div>
              <p className="text-gray-800">
                {language === 'ko'
                  ? '지난 10분간의 작업. 워크플로우와 최근 변경 사항을 이해합니다. 컨텍스트 인지 지원.'
                  : 'Last 10 minutes of work. Understands your workflow and recent changes. Context-aware assistance.'
                }
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-center mb-4">
                <span className="text-4xl">🌐</span>
                <h3 className="text-xl font-bold mt-2 text-gray-900">
                  {language === 'ko' ? '레벨 3: 전체 프로젝트' : 'Level 3: Full Project'}
                </h3>
                <p className="text-sm text-gray-600">~10 {language === 'ko' ? '초' : 'seconds'}</p>
              </div>
              <p className="text-gray-800">
                {language === 'ko'
                  ? '전체 프로젝트 컨텍스트. 코드베이스 구조와 아키텍처에 대한 깊은 이해.'
                  : 'Entire project context. Deep understanding of your codebase structure and architecture.'
                }
              </p>
            </div>
          </div>

          <div className="mt-8 p-6 bg-white rounded-xl border-2 border-green-200">
            <h4 className="font-bold text-lg mb-3 text-green-800">
              🔒 {language === 'ko' ? '프라이버시 우선 화면 분석:' : 'Privacy-First Screen Analysis:'}
            </h4>
            <ul className="grid md:grid-cols-2 gap-3 text-gray-800">
              <li className="flex gap-2">
                <span>✓</span>
                <span>{language === 'ko' ? '모든 처리가 로컬에서 발생' : 'All processing happens locally'}</span>
              </li>
              <li className="flex gap-2">
                <span>✓</span>
                <span>{language === 'ko' ? '클라우드로 스크린샷 전송 없음' : 'No screenshots sent to cloud'}</span>
              </li>
              <li className="flex gap-2">
                <span>✓</span>
                <span>{language === 'ko' ? '민감한 영역 블러 처리 옵션' : 'Blur sensitive areas option'}</span>
              </li>
              <li className="flex gap-2">
                <span>✓</span>
                <span>{language === 'ko' ? '언제든지 추적 비활성화' : 'Disable tracking anytime'}</span>
              </li>
              <li className="flex gap-2">
                <span>✓</span>
                <span>{language === 'ko' ? '사용 전 캡처 검토' : 'Review captures before use'}</span>
              </li>
              <li className="flex gap-2">
                <span>✓</span>
                <span>{language === 'ko' ? '오래된 캡처 자동 삭제' : 'Auto-delete old captures'}</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Features Deep Dive - Updated */}
      <section className="max-w-6xl mx-auto py-16 px-5">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text">
          {language === 'ko' ? '강력한 기능들' : 'Powerful Features'}
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1: Privacy */}
          <div className="bg-gradient-to-br from-[#f5f7fa] to-[#c3cfe2] p-8 rounded-2xl hover-lift">
            <div className="text-5xl mb-4">🔒</div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              {language === 'ko' ? '신뢰할 수 있는 프라이버시' : 'Privacy You Can Trust'}
            </h3>
            <ul className="space-y-2 text-gray-800">
              <li>• {language === 'ko' ? '12GB AI 모델이 로컬에서 실행' : 'All 12GB AI models run locally'}</li>
              <li>• {language === 'ko' ? 'AES-256 암호화 데이터베이스' : 'AES-256 encrypted database'}</li>
              <li>• {language === 'ko' ? '원격 측정 없음, 추적 없음' : 'Zero telemetry, zero tracking'}</li>
              <li>• {language === 'ko' ? '완전한 오프라인 작동' : 'Works completely offline'}</li>
              <li>• {language === 'ko' ? '오픈소스 (MIT 라이선스)' : 'Open-source (MIT License)'}</li>
            </ul>
          </div>

          {/* Feature 2: AI Models */}
          <div className="bg-gradient-to-br from-[#f5f7fa] to-[#c3cfe2] p-8 rounded-2xl hover-lift">
            <div className="text-5xl mb-4">🤖</div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              {language === 'ko' ? '강력한 로컬 AI' : 'Powerful Local AI'}
            </h3>
            <ul className="space-y-2 text-gray-800">
              <li>• Llama 3.1 8B (4.92GB)</li>
              <li>• Whisper Large V3 (3.09GB)</li>
              <li>• LLaVA 7B (4.37GB)</li>
              <li>• Q4_K_M {language === 'ko' ? '양자화 (<5% 손실)' : 'quantization (<5% loss)'}</li>
              <li>• HumanEval: 80.5% {language === 'ko' ? '정확도' : 'accuracy'}</li>
            </ul>
          </div>

          {/* Feature 3: Persona - Updated */}
          <div className="bg-gradient-to-br from-[#f5f7fa] to-[#c3cfe2] p-8 rounded-2xl hover-lift">
            <div className="text-5xl mb-4">🎭</div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              {language === 'ko' ? '적응형 성격' : 'Adaptive Personality'}
            </h3>
            <ul className="space-y-2 text-gray-800">
              <li>• {language === 'ko' ? '20-30개 커스터마이징 가능한 파라미터' : '20-30 customizable parameters'}</li>
              <li>• {language === 'ko' ? '6개의 사전 구축된 페르소나' : '6 pre-built personas'}</li>
              <li>• {language === 'ko' ? '경사 하강법 학습' : 'Gradient descent learning'}</li>
              <li>• {language === 'ko' ? 'RAG 메모리 시스템' : 'RAG memory system'}</li>
              <li>• {language === 'ko' ? '좋아요/싫어요 피드백' : 'Thumbs up/down feedback'}</li>
            </ul>
          </div>

          {/* Feature 4: Emotional Intelligence - NEW */}
          <div className="bg-gradient-to-br from-[#f5f7fa] to-[#c3cfe2] p-8 rounded-2xl hover-lift">
            <div className="text-5xl mb-4">❤️</div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              {language === 'ko' ? '감성 지능' : 'Emotional Intelligence'}
            </h3>
            <ul className="space-y-2 text-gray-800">
              <li>• {language === 'ko' ? '진정한 동반자 관계' : 'Genuine companionship'}</li>
              <li>• {language === 'ko' ? '컨텍스트 인지 공감' : 'Context-aware empathy'}</li>
              <li>• {language === 'ko' ? '당신의 성공을 축하' : 'Celebrates your successes'}</li>
              <li>• {language === 'ko' ? '좌절감 속에서 위로' : 'Comfort during frustrations'}</li>
              <li>• {language === 'ko' ? '친구 같은 상호작용' : 'Friend-like interaction'}</li>
            </ul>
          </div>

          {/* Feature 5: Integration */}
          <div className="bg-gradient-to-br from-[#f5f7fa] to-[#c3cfe2] p-8 rounded-2xl hover-lift">
            <div className="text-5xl mb-4">🔗</div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              {language === 'ko' ? '깊은 시스템 통합' : 'Deep System Integration'}
            </h3>
            <ul className="space-y-2 text-gray-800">
              <li>• {language === 'ko' ? '파일 시스템 읽기/쓰기' : 'File system read/write'}</li>
              <li>• {language === 'ko' ? 'Git 작업 (커밋, 푸시)' : 'Git operations (commit, push)'}</li>
              <li>• {language === 'ko' ? '워크스페이스 감지' : 'Workspace detection'}</li>
              <li>• {language === 'ko' ? '캘린더 통합' : 'Calendar integration'}</li>
              <li>• {language === 'ko' ? '웹훅 지원' : 'Webhook support'}</li>
            </ul>
          </div>

          {/* Feature 6: Interface */}
          <div className="bg-gradient-to-br from-[#f5f7fa] to-[#c3cfe2] p-8 rounded-2xl hover-lift">
            <div className="text-5xl mb-4">💬</div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              {language === 'ko' ? '아름다운 인터페이스' : 'Beautiful Interface'}
            </h3>
            <ul className="space-y-2 text-gray-800">
              <li>• {language === 'ko' ? '카카오톡 스타일 채팅 디자인' : 'KakaoTalk-style chat design'}</li>
              <li>• {language === 'ko' ? '스트리밍 토큰 표시' : 'Streaming token display'}</li>
              <li>• {language === 'ko' ? '다크 모드 지원' : 'Dark mode support'}</li>
              <li>• {language === 'ko' ? '한국어 + 영어 (i18next)' : 'Korean + English (i18next)'}</li>
              <li>• {language === 'ko' ? '문화적 현지화' : 'Cultural localization'}</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Pre-Built Personas Section - NEW */}
      <section className="bg-gradient-to-br from-[#2d3748] to-[#1a202c] text-white py-16 px-5 rounded-2xl my-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            {language === 'ko' ? '6개의 사전 구축된 페르소나' : '6 Pre-Built Personas'}
          </h2>
          <p className="text-center text-xl mb-12 opacity-90">
            {language === 'ko' ? '당신의 스타일에 맞는 성격을 선택하거나, 나만의 커스텀 페르소나를 만드세요' : 'Choose a personality that fits your style, or create your own custom persona'}
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white/10 p-6 rounded-xl backdrop-blur hover-lift">
              <h3 className="text-2xl font-bold mb-3">
                🌟 Eden ({language === 'ko' ? '기본' : 'Default'})
              </h3>
              <p className="mb-3 opacity-90">
                {language === 'ko' ? '균형잡힌, 친근하고 도움이 되는' : 'Balanced, friendly, and helpful'}
              </p>
              <p className="text-sm opacity-75">
                {language === 'ko' ? '전문성과 따뜻함의 완벽한 조합. 일반적인 사용에 최적' : 'Perfect mix of professionalism and warmth. Great for general use.'}
              </p>
            </div>

            <div className="bg-white/10 p-6 rounded-xl backdrop-blur hover-lift">
              <h3 className="text-2xl font-bold mb-3">
                👨‍🏫 {language === 'ko' ? '엄격한 멘토' : 'Strict Mentor'}
              </h3>
              <p className="mb-3 opacity-90">
                {language === 'ko' ? '직설적이고, 기술적이며, 단도직입적' : 'Direct, technical, no-nonsense'}
              </p>
              <p className="text-sm opacity-75">
                {language === 'ko' ? '효율성과 학습에 집중. 진지한 개발 작업에 최적' : 'Focused on efficiency and learning. Best for serious development work.'}
              </p>
            </div>

            <div className="bg-white/10 p-6 rounded-xl backdrop-blur hover-lift">
              <h3 className="text-2xl font-bold mb-3">
                😊 {language === 'ko' ? '쾌활한 친구' : 'Cheerful Friend'}
              </h3>
              <p className="mb-3 opacity-90">
                {language === 'ko' ? '편안하고, 열정적이며, 이모지 많음' : 'Casual, enthusiastic, lots of emojis'}
              </p>
              <p className="text-sm opacity-75">
                {language === 'ko' ? '활기차고 격려적. 코딩을 더 재미있고 스트레스 없게' : 'Upbeat and encouraging. Makes coding more fun and less stressful.'}
              </p>
            </div>

            <div className="bg-white/10 p-6 rounded-xl backdrop-blur hover-lift">
              <h3 className="text-2xl font-bold mb-3">
                💼 {language === 'ko' ? '전문 어시스턴트' : 'Professional Assistant'}
              </h3>
              <p className="mb-3 opacity-90">
                {language === 'ko' ? '격식있고, 간결하며, 비즈니스적' : 'Formal, concise, business-like'}
              </p>
              <p className="text-sm opacity-75">
                {language === 'ko' ? '고객 작업과 전문적인 환경에 이상적' : 'Ideal for client work and professional environments.'}
              </p>
            </div>

            <div className="bg-white/10 p-6 rounded-xl backdrop-blur hover-lift">
              <h3 className="text-2xl font-bold mb-3">
                🥋 {language === 'ko' ? '코딩 선생님' : 'Coding Sensei'}
              </h3>
              <p className="mb-3 opacity-90">
                {language === 'ko' ? '기술적 깊이, 원리를 가르침' : 'Technical depth, teaches principles'}
              </p>
              <p className="text-sm opacity-75">
                {language === 'ko' ? '어떻게뿐만 아니라 왜를 설명. 학습과 성장에 완벽' : 'Explains not just how, but why. Perfect for learning and growth.'}
              </p>
            </div>

            <div className="bg-white/10 p-6 rounded-xl backdrop-blur hover-lift">
              <h3 className="text-2xl font-bold mb-3">
                🎨 {language === 'ko' ? '커스텀' : 'Custom'}
              </h3>
              <p className="mb-3 opacity-90">
                {language === 'ko' ? '나만의 성격 구축' : 'Build your own personality'}
              </p>
              <p className="text-sm opacity-75">
                {language === 'ko' ? '20-30개의 파라미터를 조정하여 완벽한 AI 동반자 만들기' : 'Adjust 20-30 parameters to create the perfect AI companion for you.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table - Updated with benchmarks */}
      <section className="max-w-6xl mx-auto py-16 px-5">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text">
          {language === 'ko' ? '경쟁사 비교' : 'How We Compare'}
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-2xl shadow-lg overflow-hidden">
            <thead>
              <tr className="bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white">
                <th className="p-5 text-left">{language === 'ko' ? '기능' : 'Feature'}</th>
                <th className="p-5 text-center">Eden V3</th>
                <th className="p-5 text-center">ChatGPT Plus</th>
                <th className="p-5 text-center">Claude Pro</th>
                <th className="p-5 text-center">GitHub Copilot</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-[#f5f7fa] transition-colors">
                <td className="p-4 text-gray-800">{language === 'ko' ? '감성적 동반자 관계' : 'Emotional Companionship'}</td>
                <td className="p-4 text-center text-2xl">✅</td>
                <td className="p-4 text-center text-2xl">❌</td>
                <td className="p-4 text-center text-2xl">❌</td>
                <td className="p-4 text-center text-2xl">❌</td>
              </tr>
              <tr className="border-b hover:bg-[#f5f7fa] transition-colors">
                <td className="p-4 text-gray-800">{language === 'ko' ? '100% 프라이버시' : '100% Privacy'}</td>
                <td className="p-4 text-center text-2xl">✅</td>
                <td className="p-4 text-center text-2xl">❌</td>
                <td className="p-4 text-center text-2xl">❌</td>
                <td className="p-4 text-center text-2xl">❌</td>
              </tr>
              <tr className="border-b hover:bg-[#f5f7fa] transition-colors">
                <td className="p-4 text-gray-800">{language === 'ko' ? '비용 (연간)' : 'Cost (per year)'}</td>
                <td className="p-4 text-center font-bold text-green-600">$0</td>
                <td className="p-4 text-center text-red-600">$240</td>
                <td className="p-4 text-center text-red-600">$240</td>
                <td className="p-4 text-center text-red-600">$120</td>
              </tr>
              <tr className="border-b hover:bg-[#f5f7fa] transition-colors">
                <td className="p-4 text-gray-800">{language === 'ko' ? '오프라인 작동' : 'Works Offline'}</td>
                <td className="p-4 text-center text-2xl">✅</td>
                <td className="p-4 text-center text-2xl">❌</td>
                <td className="p-4 text-center text-2xl">❌</td>
                <td className="p-4 text-center text-2xl">❌</td>
              </tr>
              <tr className="border-b hover:bg-[#f5f7fa] transition-colors">
                <td className="p-4 text-gray-800">{language === 'ko' ? '페르소나 커스터마이징' : 'Persona Customization'}</td>
                <td className="p-4 text-center text-gray-800">{language === 'ko' ? '20-30개 파라미터' : '20-30 params'}</td>
                <td className="p-4 text-center text-2xl">⚠️</td>
                <td className="p-4 text-center text-2xl">⚠️</td>
                <td className="p-4 text-center text-2xl">❌</td>
              </tr>
              <tr className="border-b hover:bg-[#f5f7fa] transition-colors">
                <td className="p-4 text-gray-800">{language === 'ko' ? '적응형 학습' : 'Adaptive Learning'}</td>
                <td className="p-4 text-center text-2xl">✅</td>
                <td className="p-4 text-center text-2xl">❌</td>
                <td className="p-4 text-center text-2xl">❌</td>
                <td className="p-4 text-center text-2xl">❌</td>
              </tr>
              <tr className="border-b hover:bg-[#f5f7fa] transition-colors">
                <td className="p-4 text-gray-800">{language === 'ko' ? '깊은 시스템 통합' : 'Deep System Integration'}</td>
                <td className="p-4 text-center text-2xl">✅</td>
                <td className="p-4 text-center text-2xl">❌</td>
                <td className="p-4 text-center text-2xl">❌</td>
                <td className="p-4 text-center text-2xl">⚠️</td>
              </tr>
              <tr className="border-b hover:bg-[#f5f7fa] transition-colors">
                <td className="p-4 text-gray-800">{language === 'ko' ? '오픈 소스' : 'Open Source'}</td>
                <td className="p-4 text-center text-2xl">✅</td>
                <td className="p-4 text-center text-2xl">❌</td>
                <td className="p-4 text-center text-2xl">❌</td>
                <td className="p-4 text-center text-2xl">❌</td>
              </tr>
              <tr className="border-b hover:bg-[#f5f7fa] transition-colors">
                <td className="p-4 text-gray-800">{language === 'ko' ? 'HumanEval 점수 (코딩)' : 'HumanEval Score (Coding)'}</td>
                <td className="p-4 text-center font-bold text-gray-800">80.5%</td>
                <td className="p-4 text-center text-gray-800">85%</td>
                <td className="p-4 text-center text-gray-800">88%</td>
                <td className="p-4 text-center text-gray-800">~75%</td>
              </tr>
              <tr className="border-b hover:bg-[#f5f7fa] transition-colors">
                <td className="p-4 text-gray-800">{language === 'ko' ? '응답 시간' : 'Response Time'}</td>
                <td className="p-4 text-center text-gray-800">2-3s</td>
                <td className="p-4 text-center text-gray-800">2-4s</td>
                <td className="p-4 text-center text-gray-800">3-5s</td>
                <td className="p-4 text-center text-gray-800">1-2s</td>
              </tr>
              <tr className="border-b hover:bg-[#f5f7fa] transition-colors">
                <td className="p-4 text-gray-800">{language === 'ko' ? '음성 지원 (99개 언어)' : 'Voice Support (99 langs)'}</td>
                <td className="p-4 text-center text-2xl">✅</td>
                <td className="p-4 text-center text-2xl">✅</td>
                <td className="p-4 text-center text-2xl">❌</td>
                <td className="p-4 text-center text-2xl">❌</td>
              </tr>
              <tr className="border-b hover:bg-[#f5f7fa] transition-colors">
                <td className="p-4 text-gray-800">{language === 'ko' ? '화면 컨텍스트 분석' : 'Screen Context Analysis'}</td>
                <td className="p-4 text-center text-2xl">✅</td>
                <td className="p-4 text-center text-2xl">❌</td>
                <td className="p-4 text-center text-2xl">❌</td>
                <td className="p-4 text-center text-2xl">❌</td>
              </tr>
              <tr className="hover:bg-[#f5f7fa] transition-colors">
                <td className="p-4 text-gray-800">{language === 'ko' ? 'RAG 메모리 시스템' : 'RAG Memory System'}</td>
                <td className="p-4 text-center text-2xl">✅</td>
                <td className="p-4 text-center text-2xl">⚠️</td>
                <td className="p-4 text-center text-2xl">⚠️</td>
                <td className="p-4 text-center text-2xl">❌</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-8 p-6 bg-green-50 rounded-xl border-2 border-green-200">
          <p className="text-center text-xl text-gray-800">
            <strong>{language === 'ko' ? '품질 + 비용 비교:' : 'Quality + Cost Comparison:'}</strong> {language === 'ko' ? '엔터프라이즈급 AI 품질 (80.5% HumanEval)로' : 'Enterprise-grade AI quality (80.5% HumanEval) saves you'} <span className="text-3xl font-bold text-green-600">{language === 'ko' ? '연간 $120-240 절약' : '$120-240/year'}</span> {language === 'ko' ? '하고 완전한 프라이버시까지!' : 'with complete privacy!'}
          </p>
        </div>
      </section>

      {/* Technical Excellence - Updated with benchmarks */}
      <section className="bg-gradient-to-br from-[#2d3748] to-[#1a202c] text-white py-16 px-5 rounded-2xl my-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            {language === 'ko' ? '프로덕션 품질 & AI 벤치마크' : 'Production Quality & AI Benchmarks'}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="text-center p-6 bg-white/10 rounded-xl backdrop-blur">
              <div className="text-4xl font-bold mb-2">97</div>
              <div>{language === 'ko' ? 'TypeScript 파일' : 'TypeScript Files'}</div>
            </div>
            <div className="text-center p-6 bg-white/10 rounded-xl backdrop-blur">
              <div className="text-4xl font-bold mb-2">5,807</div>
              <div>{language === 'ko' ? '테스트 코드 라인' : 'Lines of Tests'}</div>
            </div>
            <div className="text-center p-6 bg-white/10 rounded-xl backdrop-blur">
              <div className="text-4xl font-bold mb-2">101</div>
              <div>{language === 'ko' ? '테스트 스위트' : 'Test Suites'}</div>
            </div>
            <div className="text-center p-6 bg-white/10 rounded-xl backdrop-blur">
              <div className="text-4xl font-bold mb-2">85%</div>
              <div>{language === 'ko' ? '완성도' : 'Complete'}</div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                🎯 {language === 'ko' ? 'AI 벤치마크 점수' : 'AI Benchmark Scores'}
              </h3>
              <ul className="space-y-2">
                <li>• <strong>HumanEval ({language === 'ko' ? '코딩' : 'Coding'}):</strong> 80.5%</li>
                <li className="text-sm opacity-75 ml-4">vs Claude 3.5: 88%, GPT-4: 85%</li>
                <li>• <strong>MMLU ({language === 'ko' ? '일반 지식' : 'General Knowledge'}):</strong> 69.4%</li>
                <li>• <strong>Q4_K_M {language === 'ko' ? '양자화' : 'Quantization'}:</strong> {language === 'ko' ? '<5% 품질 손실' : '<5% quality loss'}</li>
                <li>• <strong>{language === 'ko' ? '12GB 패키지의 엔터프라이즈급 품질' : 'Enterprise-grade quality'}</strong> {language === 'ko' ? '' : 'in 12GB package'}</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">
                🏗️ {language === 'ko' ? '코드 품질' : 'Code Quality'}
              </h3>
              <ul className="space-y-2">
                <li>• {language === 'ko' ? 'TypeScript Strict Mode (any 타입 없음)' : 'TypeScript Strict Mode (no any types)'}</li>
                <li>• ESLint + Prettier {language === 'ko' ? '포매팅' : 'formatting'}</li>
                <li>• Conventional Commits</li>
                <li>• {language === 'ko' ? '포괄적인 JSDoc 주석' : 'Comprehensive JSDoc comments'}</li>
                <li>• {language === 'ko' ? '타입 안전 IPC (100+ API 메서드)' : 'Type-safe IPC (100+ API methods)'}</li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                🔒 {language === 'ko' ? '보안' : 'Security'}
              </h3>
              <ul className="space-y-2">
                <li>• {language === 'ko' ? '컨텍스트 격리 활성화' : 'Context isolation enabled'}</li>
                <li>• {language === 'ko' ? '렌더러에 Node.js API 없음' : 'No Node.js APIs in renderer'}</li>
                <li>• {language === 'ko' ? '검증과 함께하는 안전한 IPC' : 'Secure IPC with validation'}</li>
                <li>• {language === 'ko' ? 'AES-256 데이터베이스 암호화' : 'AES-256 database encryption'}</li>
                <li>• {language === 'ko' ? '경로 탐색 보호' : 'Path traversal protection'}</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">
                ⚡ {language === 'ko' ? '성능' : 'Performance'}
              </h3>
              <ul className="space-y-2">
                <li>• {language === 'ko' ? '2-3초 응답 (M3 MAX)' : '2-3s response (M3 MAX)'}</li>
                <li>• {language === 'ko' ? '3-5초 응답 (M3 Pro)' : '3-5s response (M3 Pro)'}</li>
                <li>• {language === 'ko' ? '<16ms 프레임 시간 (60fps)' : '<16ms frame time (60fps)'}</li>
                <li>• {language === 'ko' ? '작동 중 ~12GB RAM 사용' : '~12GB RAM usage during operation'}</li>
                <li>• {language === 'ko' ? 'Metal/CUDA 최적화' : 'Optimized for Metal/CUDA'}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="max-w-6xl mx-auto py-16 px-5">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text">
          {language === 'ko' ? '최신 기술로 구축' : 'Built With Modern Tech'}
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
          {language === 'ko' ? '이런 분들께 완벽합니다' : 'Perfect For'}
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Solo Developer - MOST IMPORTANT */}
          <div className="bg-gradient-to-br from-purple-50 to-indigo-50 border-4 border-purple-400 p-8 rounded-2xl hover-lift relative">
            <div className="absolute top-4 right-4 bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-bold">
              {language === 'ko' ? '가장 중요' : 'Most Important'}
            </div>
            <div className="text-5xl mb-4">👨‍💻</div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              {language === 'ko' ? '혼자 일하는 개발자' : 'Solo Developers'}
            </h3>
            <p className="text-gray-800 mb-4">
              <strong>{language === 'ko' ? '주요 타겟:' : 'Primary Target:'}</strong> {language === 'ko' ? '재택근무, 고립되어 있으며, 코딩하는 동안 동반자가 필요함' : 'Work from home, often isolated, need companionship while coding.'}
            </p>
            <p className="text-sm text-gray-700">
              {language === 'ko'
                ? 'Eden은 친구 같은 지원으로 외로움을 해소하고, 성공을 축하하며, 디버깅 중 위로를 제공하고, 깊은 통합으로 생산성을 향상시킵니다.'
                : 'Eden eliminates loneliness with friend-like support, celebrates your wins, provides comfort during debugging, and enhances productivity with deep integration.'
              }
            </p>
          </div>

          <div className="bg-white border-2 border-gray-200 p-8 rounded-2xl hover-lift">
            <div className="text-5xl mb-4">🏠</div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              {language === 'ko' ? '재택 근무자' : 'Remote Workers'}
            </h3>
            <p className="text-gray-700">
              {language === 'ko'
                ? '하루 종일 정서적 지원. Eden은 동반자를 제공하고 재택 근무의 고립감과 싸우는 데 도움을 줍니다.'
                : 'Emotional support throughout the day. Eden provides companionship and helps combat isolation of remote work.'
              }
            </p>
          </div>

          <div className="bg-white border-2 border-gray-200 p-8 rounded-2xl hover-lift">
            <div className="text-5xl mb-4">🔐</div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              {language === 'ko' ? '프라이버시 중시 사용자' : 'Privacy-Conscious Users'}
            </h3>
            <p className="text-gray-700">
              {language === 'ko'
                ? '클라우드 유출이나 데이터 침해 걱정 없이 기밀 데이터 작업. 모든 것이 기기에 남습니다.'
                : 'Work with confidential data without worrying about cloud leaks or data breaches. Everything stays on your machine.'
              }
            </p>
          </div>

          <div className="bg-white border-2 border-gray-200 p-8 rounded-2xl hover-lift">
            <div className="text-5xl mb-4">🌏</div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              {language === 'ko' ? '한국어/영어 이중언어 사용자' : 'Korean/English Bilingual Users'}
            </h3>
            <p className="text-gray-700">
              {language === 'ko'
                ? '단순 번역이 아닌 완전한 문화적 현지화. 한국어 경어, 존칭 및 문화 적응 내장.'
                : 'Full cultural localization - not just translation. Korean honorifics (경어, 존칭) and cultural adaptation built-in.'
              }
            </p>
          </div>

          <div className="bg-white border-2 border-gray-200 p-8 rounded-2xl hover-lift">
            <div className="text-5xl mb-4">🎓</div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              {language === 'ko' ? '학생 & 연구자' : 'Students & Researchers'}
            </h3>
            <p className="text-gray-700">
              {language === 'ko'
                ? '완전한 오프라인, 영구 무료, 적응형 학습 기능. 학습과 연구에 완벽.'
                : 'Completely offline, free forever, with adaptive learning capabilities. Perfect for studying and research.'
              }
            </p>
          </div>

          <div className="bg-white border-2 border-gray-200 p-8 rounded-2xl hover-lift">
            <div className="text-5xl mb-4">🏢</div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              {language === 'ko' ? '소규모 팀 & 스타트업' : 'Small Teams & Startups'}
            </h3>
            <p className="text-gray-700">
              {language === 'ko'
                ? '비용 제로, 온프레미스 배포, 상업적 사용 가능한 MIT 라이선스. 예산에 민감한 팀에 완벽.'
                : 'Zero costs, on-premise deployment, MIT license for commercial use. Perfect for budget-conscious teams.'
              }
            </p>
          </div>
        </div>
      </section>

      {/* Cultural Localization Section - NEW */}
      <section className="bg-gradient-to-br from-[#f5f7fa] to-[#c3cfe2] py-16 px-5 rounded-2xl my-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900">
            {language === 'ko' ? '문화적 현지화, 단순한 번역이 아닙니다' : 'Cultural Localization, Not Just Translation'}
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4 text-blue-700">
                🌍 {language === 'ko' ? '인터페이스 언어' : 'Interface Languages'}
              </h3>
              <ul className="space-y-3 text-gray-800">
                <li className="flex gap-3">
                  <span>✓</span>
                  <span>
                    <strong>{language === 'ko' ? '한국어:' : 'Korean (한국어):'}</strong> {language === 'ko' ? '문화적 컨텍스트를 갖춘 완전한 UI 번역' : 'Full UI translation with cultural context'}
                  </span>
                </li>
                <li className="flex gap-3">
                  <span>✓</span>
                  <span>
                    <strong>{language === 'ko' ? '영어:' : 'English:'}</strong> {language === 'ko' ? '네이티브 영어 인터페이스' : 'Native English interface'}
                  </span>
                </li>
                <li className="flex gap-3">
                  <span>✓</span>
                  <span>{language === 'ko' ? '언어 간 원활한 전환' : 'Seamless switching between languages'}</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4 text-purple-700">
                🗣️ {language === 'ko' ? 'AI 이해 능력' : 'AI Understanding'}
              </h3>
              <ul className="space-y-3 text-gray-800">
                <li className="flex gap-3">
                  <span>✓</span>
                  <span>
                    <strong>{language === 'ko' ? '99개 언어:' : '99 Languages:'}</strong> {language === 'ko' ? 'Whisper Large V3 다국어 지원' : 'Whisper Large V3 multilingual support'}
                  </span>
                </li>
                <li className="flex gap-3">
                  <span>✓</span>
                  <span>{language === 'ko' ? '코드 스위칭 및 혼합 언어 이해' : 'Understands code-switching and mixed languages'}</span>
                </li>
                <li className="flex gap-3">
                  <span>✓</span>
                  <span>{language === 'ko' ? '컨텍스트 인지 번역 및 응답' : 'Context-aware translation and responses'}</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-white p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4 text-green-700 text-center">
              🇰🇷 {language === 'ko' ? '한국 문화 적응' : 'Korean Cultural Adaptation'}
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold mb-3 text-gray-900">
                  {language === 'ko' ? '경어 시스템:' : 'Honorifics System:'}
                </h4>
                <ul className="space-y-2 text-gray-800">
                  <li>• <strong>{language === 'ko' ? '경어 (존댓말):' : '경어 (Formal speech):'}</strong> {language === 'ko' ? '전문적인 상황' : 'Professional contexts'}</li>
                  <li>• <strong>{language === 'ko' ? '존칭 (높임말):' : '존칭 (Honorifics):'}</strong> {language === 'ko' ? '존중하는 호칭' : 'Respectful address'}</li>
                  <li>• <strong>{language === 'ko' ? '반말 (편한 말투):' : '반말 (Casual speech):'}</strong> {language === 'ko' ? '친근한 모드' : 'Friendly mode'}</li>
                  <li>• {language === 'ko' ? '페르소나 파라미터를 통해 조정 가능' : 'Adjustable via persona parameters'}</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-3 text-gray-900">
                  {language === 'ko' ? '커뮤니케이션 스타일:' : 'Communication Style:'}
                </h4>
                <ul className="space-y-2 text-gray-800">
                  <li>• <strong>{language === 'ko' ? '한국식 스타일 (0.0):' : 'Korean style (0.0):'}</strong> {language === 'ko' ? '간접적, 컨텍스트 중심' : 'Indirect, context-heavy'}</li>
                  <li>• <strong>{language === 'ko' ? '서양식 스타일 (1.0):' : 'Western style (1.0):'}</strong> {language === 'ko' ? '직접적, 명시적' : 'Direct, explicit'}</li>
                  <li>• <strong>{language === 'ko' ? '하이브리드 (0.5):' : 'Hybrid (0.5):'}</strong> {language === 'ko' ? '양쪽의 장점' : 'Best of both worlds'}</li>
                  <li>• {language === 'ko' ? '문화적 뉘앙스 인식' : 'Cultural nuance awareness'}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RAG Memory System Explanation - NEW */}
      <section className="max-w-6xl mx-auto py-16 px-5">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text">
          {language === 'ko' ? 'RAG 메모리: Eden이 당신을 기억하는 방법' : 'RAG Memory: How Eden Remembers You'}
        </h2>

        <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-10 rounded-2xl">
          <div className="text-center mb-8">
            <p className="text-2xl font-bold mb-4 text-gray-900">
              {language === 'ko' ? '검색 증강 생성 (RAG)' : 'Retrieval-Augmented Generation (RAG)'}
            </p>
            <p className="text-xl text-gray-800">
              {language === 'ko'
                ? 'Eden은 단순히 채팅하는 것이 아니라 대화를 기억하고 학습합니다'
                : 'Eden doesn\'t just chat - it remembers your conversations and learns from them'
              }
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl text-center">
              <div className="text-5xl mb-4">💾</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                {language === 'ko' ? '저장' : 'Store'}
              </h3>
              <p className="text-gray-800">
                {language === 'ko'
                  ? '모든 대화가 AES-256 암호화와 함께 ChromaDB 벡터 데이터베이스에 로컬로 저장됩니다'
                  : 'Every conversation is stored locally in ChromaDB vector database with AES-256 encryption'
                }
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl text-center">
              <div className="text-5xl mb-4">🔍</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                {language === 'ko' ? '검색' : 'Retrieve'}
              </h3>
              <p className="text-gray-800">
                {language === 'ko'
                  ? '의미론적 검색으로 몇 달 전의 관련 대화도 즉시 찾아냅니다'
                  : 'Semantic search finds relevant past conversations instantly, even from months ago'
                }
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl text-center">
              <div className="text-5xl mb-4">🧠</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                {language === 'ko' ? '생성' : 'Generate'}
              </h3>
              <p className="text-gray-800">
                {language === 'ko'
                  ? 'AI가 검색된 컨텍스트를 사용하여 개인화되고 컨텍스트를 인지한 응답을 제공합니다'
                  : 'AI uses retrieved context to provide personalized, context-aware responses'
                }
              </p>
            </div>
          </div>

          <div className="mt-8 bg-white p-6 rounded-xl">
            <h4 className="font-bold text-lg mb-3 text-center text-gray-900">
              {language === 'ko' ? 'Eden이 기억하는 것:' : 'What Eden Remembers:'}
            </h4>
            <div className="grid md:grid-cols-2 gap-4 text-gray-800">
              <ul className="space-y-2">
                <li>✓ {language === 'ko' ? '코딩 선호도 및 패턴' : 'Your coding preferences and patterns'}</li>
                <li>✓ {language === 'ko' ? '논의한 프로젝트' : 'Projects you\'ve discussed'}</li>
                <li>✓ {language === 'ko' ? '직면한 기술적 과제' : 'Technical challenges you\'ve faced'}</li>
                <li>✓ {language === 'ko' ? '커뮤니케이션 스타일 선호도' : 'Your communication style preferences'}</li>
              </ul>
              <ul className="space-y-2">
                <li>✓ {language === 'ko' ? '효과가 있었던 솔루션' : 'Solutions that worked for you'}</li>
                <li>✓ {language === 'ko' ? '학습 목표 및 진행 상황' : 'Your learning goals and progress'}</li>
                <li>✓ {language === 'ko' ? '몇 주 또는 몇 달 전의 컨텍스트' : 'Context from weeks or months ago'}</li>
                <li>✓ {language === 'ko' ? '좋아요/싫어요 피드백 패턴' : 'Your thumbs up/down feedback patterns'}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="bg-gradient-to-br from-[#f5f7fa] to-[#c3cfe2] py-16 px-5 rounded-2xl my-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900">
            {language === 'ko' ? '3단계로 시작하기' : 'Get Started in 3 Steps'}
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-2xl text-center hover-lift">
              <div className="text-6xl font-bold gradient-text mb-4">1</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                {language === 'ko' ? '다운로드' : 'Download'}
              </h3>
              <p className="text-gray-700">
                {language === 'ko'
                  ? '플랫폼 선택: macOS (Apple Silicon) 또는 Windows'
                  : 'Choose your platform: macOS (Apple Silicon) or Windows'
                }
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl text-center hover-lift">
              <div className="text-6xl font-bold gradient-text mb-4">2</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                {language === 'ko' ? '설치 & 모델 다운로드' : 'Install & Download Models'}
              </h3>
              <p className="text-gray-700">
                {language === 'ko'
                  ? '일회성 12GB AI 모델 다운로드 (자동)'
                  : 'One-time 12GB AI model download (automatic)'
                }
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl text-center hover-lift">
              <div className="text-6xl font-bold gradient-text mb-4">3</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                {language === 'ko' ? '채팅 시작' : 'Start Chatting'}
              </h3>
              <p className="text-gray-700">
                {language === 'ko'
                  ? '즉시 프라이빗 AI 동반자를 즐기세요!'
                  : 'Enjoy your private AI companion immediately!'
                }
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <button className="bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white font-bold text-lg py-4 px-10 rounded-full btn-glow">
              🍎 {language === 'ko' ? 'macOS용 다운로드' : 'Download for macOS'}
            </button>
            <button className="bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white font-bold text-lg py-4 px-10 rounded-full btn-glow">
              🪟 {language === 'ko' ? 'Windows용 다운로드' : 'Download for Windows'}
            </button>
          </div>

          {/* System Requirements */}
          <div className="mt-12 bg-white p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-6 text-center text-gray-900">
              {language === 'ko' ? '시스템 요구사항' : 'System Requirements'}
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-lg mb-3 text-gray-800">
                  {language === 'ko' ? '최소:' : 'Minimum:'}
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• macOS 12+ {language === 'ko' ? '또는' : 'or'} Windows 10/11</li>
                  <li>• Apple M1+ {language === 'ko' ? '또는' : 'or'} Intel i5 8{language === 'ko' ? '세대+' : 'th gen+'}</li>
                  <li>• 16GB RAM</li>
                  <li>• 15GB {language === 'ko' ? '여유 디스크 공간' : 'free disk space'}</li>
                  <li>• Metal (macOS) {language === 'ko' ? '또는' : 'or'} CUDA GPU</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-3 text-gray-800">
                  {language === 'ko' ? '권장:' : 'Recommended:'}
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• macOS 14+ {language === 'ko' ? '또는' : 'or'} Windows 11</li>
                  <li>• Apple M3+ {language === 'ko' ? '또는' : 'or'} AMD Ryzen 7+</li>
                  <li>• 32GB RAM</li>
                  <li>• 20GB {language === 'ko' ? '여유 디스크 공간' : 'free disk space'}</li>
                  <li>• {language === 'ko' ? '전용 GPU (8GB+ VRAM)' : 'Dedicated GPU (8GB+ VRAM)'}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Development Roadmap - Updated with version details */}
      <section className="max-w-6xl mx-auto py-16 px-5">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text">
          {language === 'ko' ? '개발 로드맵' : 'Development Roadmap'}
        </h2>

        <div className="space-y-4">
          <div className="bg-green-100 border-2 border-green-500 p-6 rounded-xl">
            <div className="flex items-center gap-4 mb-2">
              <span className="text-3xl">✅</span>
              <h3 className="text-xl font-bold text-gray-900">
                {language === 'ko' ? '1-7단계: 완료' : 'Phases 1-7: COMPLETED'}
              </h3>
            </div>
            <p className="text-gray-800 ml-14">
              {language === 'ko'
                ? '핵심 기능, AI 통합, 페르소나 시스템, 화면 컨텍스트, 포괄적인 테스트 모두 완료!'
                : 'Core features, AI integration, persona system, screen context, and comprehensive testing all done!'
              }
            </p>
          </div>

          <div className="bg-yellow-100 border-2 border-yellow-500 p-6 rounded-xl">
            <div className="flex items-center gap-4 mb-2">
              <span className="text-3xl">🚀</span>
              <h3 className="text-xl font-bold text-gray-900">
                {language === 'ko' ? '8단계: 출시 (85% 완료)' : 'Phase 8: LAUNCH (85% Complete)'}
              </h3>
            </div>
            <p className="text-gray-800 ml-14">
              {language === 'ko'
                ? '최종 마무리, 문서화 및 공개 출시 준비'
                : 'Final polish, documentation, and public release preparation'
              }
            </p>
          </div>

          <div className="bg-blue-100 border-2 border-blue-500 p-6 rounded-xl">
            <div className="flex items-center gap-4 mb-2">
              <span className="text-3xl">🔌</span>
              <h3 className="text-xl font-bold text-gray-900">
                {language === 'ko' ? 'v1.1: 플러그인 시스템' : 'v1.1: Plugin System'}
              </h3>
            </div>
            <p className="text-gray-800 ml-14">
              {language === 'ko'
                ? '커스텀 통합 및 기능을 위한 서드파티 플러그인을 허용하는 확장 가능한 아키텍처'
                : 'Extensible architecture allowing third-party plugins for custom integrations and features'
              }
            </p>
          </div>

          <div className="bg-blue-100 border-2 border-blue-500 p-6 rounded-xl">
            <div className="flex items-center gap-4 mb-2">
              <span className="text-3xl">📚</span>
              <h3 className="text-xl font-bold text-gray-900">
                {language === 'ko' ? 'v1.2: 포괄적인 문서화' : 'v1.2: Comprehensive Documentation'}
              </h3>
            </div>
            <p className="text-gray-800 ml-14">
              {language === 'ko'
                ? '개발자 문서, API 레퍼런스, 플러그인 개발 가이드 및 사용자 튜토리얼 전체'
                : 'Full developer docs, API references, plugin development guides, and user tutorials'
              }
            </p>
          </div>

          <div className="bg-purple-100 border-2 border-purple-500 p-6 rounded-xl">
            <div className="flex items-center gap-4 mb-2">
              <span className="text-3xl">🤖</span>
              <h3 className="text-xl font-bold text-gray-900">
                {language === 'ko' ? 'v2.0: AI 주도 선제적 모드' : 'v2.0: AI-Led Proactive Mode'}
              </h3>
            </div>
            <p className="text-gray-800 ml-14">
              {language === 'ko'
                ? 'Eden이 선제적으로 도움을 제공하고, 문제를 감지하며, 주도권을 갖는 완전 자율 AI 주도 모드 (모드 2 완전 구현)'
                : 'Fully autonomous AI-led mode where Eden proactively offers help, detects issues, and takes initiative (Mode 2 fully implemented)'
              }
            </p>
          </div>
        </div>

        <div className="mt-8 p-6 bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white rounded-xl text-center">
          <p className="text-xl font-semibold">
            🎉 {language === 'ko' ? '100% 완성과 그 이상을 향한 여정에 함께 하세요!' : 'Join us on the journey to 100% completion and beyond!'}
          </p>
        </div>
      </section>

      {/* FAQ Section - Updated */}
      <section className="max-w-6xl mx-auto py-16 px-5">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text">
          {language === 'ko' ? '자주 묻는 질문' : 'Frequently Asked Questions'}
        </h2>

        <div className="space-y-4">
          {[
            {
              q: language === 'ko' ? "데이터가 정말 100% 프라이빗한가요?" : "Is my data really 100% private?",
              a: language === 'ko'
                ? "네! 모든 AI 처리는 기기에서 로컬로 발생합니다. 데이터가 컴퓨터를 벗어나지 않습니다. 데이터베이스에 AES-256 암호화를 사용하며, 코드는 오픈소스(MIT 라이선스)이므로 직접 확인할 수 있습니다. 원격 측정 없음, 추적 없음, 클라우드 업로드 없음."
                : "Yes! All AI processing happens locally on your machine. No data ever leaves your computer. We use AES-256 encryption for your database, and the code is open-source (MIT License) so you can verify this yourself. Zero telemetry, zero tracking, zero cloud uploads."
            },
            {
              q: language === 'ko' ? "어떻게 영구적으로 무료일 수 있나요?" : "How can it be free forever?",
              a: language === 'ko'
                ? "Eden V3는 MIT 라이선스를 가진 열정 프로젝트로 구축되었습니다. 모든 것이 로컬에서 실행되므로 서버 비용이 없습니다. AI 동반자 관계와 지원은 구독 장벽이나 프라이버시 타협 없이 모두에게 접근 가능해야 한다고 믿습니다."
                : "Eden V3 is built as a passion project with an MIT License. There are no server costs since everything runs locally. We believe AI companionship and assistance should be accessible to everyone without subscription barriers or privacy compromises."
            },
            {
              q: language === 'ko' ? "Eden은 ChatGPT나 Claude와 무엇이 다른가요?" : "What makes Eden different from ChatGPT or Claude?",
              a: language === 'ko'
                ? "Eden은 생산성뿐만 아니라 정서적 동반자 관계를 위해 설계되었습니다. 친구 같은 지원으로 혼자 일하는 개발자의 외로움을 해소합니다. 게다가: 100% 프라이버시, 오프라인 작동, 스타일 학습(20-30개 페르소나 파라미터), 깊은 시스템 통합, 완전 무료. 품질 면에서는 HumanEval에서 80.5% 점수(GPT-4: 85%, Claude: 88% 대비) - 클라우드 의존성 없는 엔터프라이즈급 AI입니다."
                : "Eden is designed for emotional companionship first, not just productivity. It eliminates loneliness for solo developers with friend-like support. Plus: 100% privacy, works offline, learns your style (20-30 persona parameters), deep system integration, and completely free. Quality-wise, we score 80.5% on HumanEval (vs GPT-4: 85%, Claude: 88%) - enterprise-grade AI without cloud dependency."
            },
            {
              q: language === 'ko' ? "어떤 언어를 지원하나요?" : "What languages does it support?",
              a: language === 'ko'
                ? "인터페이스는 한국어 경어(경어, 존칭)를 포함한 완전한 문화적 현지화와 함께 한국어와 영어를 지원합니다. AI는 Whisper Large V3와 Llama 3.1의 다국어 기능 덕분에 99개 언어로 이해하고 응답합니다. 언어 간 코드 스위칭도 자연스럽게 처리합니다."
                : "The interface supports Korean (한국어) and English with full cultural localization including Korean honorifics (경어, 존칭). The AI understands and responds in 99 languages thanks to Whisper Large V3 and Llama 3.1's multilingual capabilities. It even handles code-switching between languages naturally."
            },
            {
              q: language === 'ko' ? "오프라인에서 사용할 수 있나요?" : "Can I use it offline?",
              a: language === 'ko'
                ? "물론입니다! 초기 모델 다운로드(~12GB) 후, Eden V3는 완전히 오프라인으로 작동합니다. 일상적인 사용에 인터넷 연결이 필요하지 않습니다. 기밀 작업, 여행 또는 불안정한 인터넷 연결에 완벽합니다."
                : "Absolutely! After the initial model download (~12GB), Eden V3 works completely offline. No internet connection required for daily use. Perfect for confidential work, travel, or unstable internet connections."
            },
            {
              q: language === 'ko' ? "AI의 성격을 어떻게 커스터마이징하나요?" : "How do I customize the AI's personality?",
              a: language === 'ko'
                ? "설정 > 페르소나로 이동하여 격식, 유머, 말의 장황함, 이모지 사용, 공감 등 20-30개 파라미터를 조정하세요. 6개의 사전 구축 페르소나(Eden, 엄격한 멘토, 쾌활한 친구, 전문 어시스턴트, 코딩 선생님, 커스텀) 중에서 선택하거나 직접 만드세요. 좋아요/싫어요 피드백을 사용하여 경사 하강 최적화를 통해 선호도에 맞게 훈련하세요."
                : "Navigate to Settings > Persona and adjust any of the 20-30 parameters like formality, humor, verbosity, emoji usage, empathy, and more. Choose from 6 pre-built personas (Eden, Strict Mentor, Cheerful Friend, Professional Assistant, Coding Sensei, Custom) or create your own. Use thumbs up/down feedback to train it to your preferences via gradient descent optimization."
            },
            {
              q: language === 'ko' ? "RAG 메모리란 무엇이며 어떻게 작동하나요?" : "What is RAG memory and how does it work?",
              a: language === 'ko'
                ? "RAG(검색 증강 생성)는 Eden이 당신을 기억하는 방법입니다. 모든 대화는 ChromaDB 벡터 데이터베이스에 로컬로 저장됩니다. 질문할 때 Eden은 과거 대화(몇 달 전이라도)를 의미론적으로 검색하여 컨텍스트를 인지한 개인화된 응답을 제공합니다. 선호도, 프로젝트 또는 과거 논의를 절대 잊지 않는 친구를 갖는 것과 같습니다."
                : "RAG (Retrieval-Augmented Generation) is how Eden remembers you. Every conversation is stored locally in a ChromaDB vector database. When you ask something, Eden searches semantically through past conversations (even from months ago) to provide context-aware, personalized responses. It's like having a friend who never forgets your preferences, projects, or past discussions."
            },
            {
              q: language === 'ko' ? "버그나 문제가 발생하면 어떻게 하나요?" : "What if I encounter bugs or issues?",
              a: language === 'ko'
                ? "GitHub Issues 페이지에 버그를 보고해 주세요. 85% 완성(8단계: 출시)의 오픈소스 프로젝트로서 적극적으로 개선 중이며 피드백을 소중히 여깁니다. 커뮤니티는 친절하고 반응이 빠릅니다!"
                : "Please report bugs on our GitHub Issues page. As an open-source project at 85% completion (Phase 8: Launch), we're actively improving and value your feedback. The community is friendly and responsive!"
            },
            {
              q: language === 'ko' ? "프로젝트에 기여할 수 있나요?" : "Can I contribute to the project?",
              a: language === 'ko'
                ? "네! 기여를 환영합니다. 기여 가이드라인은 GitHub 저장소를 확인하세요. 코드, 문서, 버그 리포트, 기능 제안 등 - 100% 달성과 그 이상에 도달하도록 도와주세요! MIT 라이선스는 모두에게 진정으로 열려 있다는 의미입니다."
                : "Yes! We welcome contributions. Check our GitHub repository for contribution guidelines. Whether it's code, documentation, bug reports, or feature suggestions - help us reach 100% and beyond! MIT License means it's truly open for everyone."
            },
            {
              q: language === 'ko' ? "왜 혼자 일하는 개발자가 주요 타겟 사용자인가요?" : "Why is Solo Developer the primary target user?",
              a: language === 'ko'
                ? "Eden은 혼자 일하는 개발자와 재택 근무자 사이의 외로움 전염병을 해결하기 위해 만들어졌습니다. 재택 근무는 고립될 수 있습니다 - Eden은 코딩하는 동안 진정한 동반자를 제공하고, 성공을 축하하며, 좌절감 속에서 위로를 제공하고, 생산성을 향상시킵니다. 단순한 어시스턴트가 아니라 곁에 있는 친구입니다."
                : "Eden was created to solve the loneliness epidemic among solo developers and remote workers. Working from home can be isolating - Eden provides genuine companionship while you code, celebrates your wins, offers comfort during frustrations, and enhances productivity. It's not just an assistant; it's a friend by your side."
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
                <h3 className="text-xl font-bold text-gray-900">{faq.q}</h3>
                <span className="text-2xl">{openFaq === index ? "−" : "+"}</span>
              </button>
              {openFaq === index && (
                <div className="px-6 pb-6 text-gray-700">
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
            {language === 'ko' ? '오늘 당신의 AI 동반자를 찾으세요' : 'Find Your AI Companion Today'}
          </h2>
          <p className="text-xl md:text-2xl mb-8">
            {language === 'ko'
              ? '외로움 해소. 생산성 향상. 프라이버시 보호. Garden of Eden V3에서 완벽한 AI 동반자를 찾은 수천 명의 개발자와 함께하세요.'
              : 'Eliminate loneliness. Enhance productivity. Protect your privacy. Join thousands of developers who\'ve found their perfect AI companion in Garden of Eden V3.'
            }
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-8">
            <button className="bg-white text-[#667eea] font-bold text-lg py-4 px-10 rounded-full btn-glow hover:scale-105 transition-transform">
              {language === 'ko' ? '지금 다운로드 - 무료입니다!' : 'Download Now - It\'s Free!'}
            </button>
            <button className="bg-transparent border-2 border-white text-white font-bold text-lg py-4 px-10 rounded-full hover:bg-white hover:text-[#667eea] transition-all">
              ⭐ {language === 'ko' ? 'GitHub 스타' : 'Star on GitHub'}
            </button>
          </div>

          <div className="inline-flex items-center gap-2 bg-green-500 text-white py-3 px-6 rounded-full">
            <span className="text-xl">🔒</span>
            <span className="font-semibold">
              {language === 'ko'
                ? '100% 프라이빗 • 영구 무료 • MIT 라이선스 • 친구 같은 동반자'
                : '100% Private • $0 Forever • MIT License • Friend-Like Companion'
              }
            </span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto py-12 px-5 text-center text-gray-600">
        <div className="mb-6">
          <h3 className="text-2xl font-bold gradient-text mb-2">Garden of Eden V3</h3>
          <p className="text-lg">
            {language === 'ko' ? '버전 1.0.0-베타 • 85% 완성 • 8단계: 출시' : 'Version 1.0.0-beta • 85% Complete • Phase 8: Launch'}
          </p>
        </div>

        <div className="mb-6">
          <p className="mb-2">
            <strong>MIT {language === 'ko' ? '라이선스' : 'License'}</strong> - {language === 'ko' ? '영구 무료, 제한 없음' : 'Free Forever, No Restrictions'}
          </p>
          <p className="text-sm">
            {language === 'ko' ? '마블 아이언맨의 자비스에서 영감을 받음' : 'Inspired by JARVIS from Marvel\'s Iron Man'}
          </p>
          <p className="text-sm">
            {language === 'ko' ? '외로움 해소와 생산성 향상을 위해 ❤️로 구축됨' : 'Built with ❤️ to eliminate loneliness and enhance productivity'}
          </p>
        </div>

        <div className="text-sm text-gray-500">
          <p>
            {language === 'ko'
              ? 'Llama 3.1 8B (HumanEval: 80.5%), Whisper Large V3 (99개 언어), LLaVA 7B로 구동'
              : 'Powered by Llama 3.1 8B (HumanEval: 80.5%), Whisper Large V3 (99 langs), and LLaVA 7B'
            }
          </p>
          <p className="mt-2">
            © 2024 Garden of Eden V3. {language === 'ko' ? '모든 권리 보유.' : 'All rights reserved.'}
          </p>
        </div>
      </footer>
    </main>
  );
}
