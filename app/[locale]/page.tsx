"use client";

import { useTranslations } from 'next-intl';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { useState } from "react";

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const t = useTranslations();

  return (
    <main className="min-h-screen bg-white">
      {/* Language Switcher - Fixed Top Right */}
      <LanguageSwitcher />

      {/* Hero Section - Improved Contrast & Translation */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#667eea] to-[#764ba2] text-white py-16 md:py-20 px-4 md:px-5 rounded-[20px] text-center animate-fadeInUp">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 md:mb-6 animate-float text-white-shadow">
            {t('hero.title')}
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl mb-3 md:mb-4 font-semibold text-white-shadow">
            {t('hero.subtitle')}
          </p>
          <p className="text-lg sm:text-xl md:text-2xl mb-4 md:mb-6 font-medium text-white-shadow">
            {t('hero.tagline')}
          </p>

          {/* Privacy Badge */}
          <div className="inline-flex flex-wrap items-center justify-center gap-2 bg-white text-gray-900 py-3 px-6 md:px-8 rounded-full mb-6 md:mb-8 shadow-lg font-semibold text-sm sm:text-base">
            <span className="text-xl md:text-2xl">🔒</span>
            <span>{t('hero.privacyBadge')}</span>
          </div>

          <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 font-bold">
            <strong>{t('hero.noCompromise')}</strong>
          </p>

          {/* CTA Buttons - Mobile Responsive */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center px-4">
            <button className="w-full sm:w-auto bg-white text-[#667eea] font-bold text-base md:text-lg py-3 md:py-4 px-8 md:px-10 rounded-full btn-glow hover:scale-105 transition-transform shadow-xl">
              {t('hero.downloadButton')}
            </button>
            <button className="w-full sm:w-auto bg-white/10 backdrop-blur border-2 border-white text-white font-bold text-base md:text-lg py-3 md:py-4 px-8 md:px-10 rounded-full hover:bg-white hover:text-[#667eea] transition-all shadow-xl">
              ⭐ {t('hero.githubButton')}
            </button>
          </div>
        </div>
      </section>

      {/* Three Pillars Section - NEW */}
      <section className="max-w-6xl mx-auto py-16 px-5">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text">
          {t('pillars.title')}
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-purple-50 to-indigo-100 p-8 rounded-2xl text-center hover-lift border border-purple-200">
            <div className="text-6xl mb-4">❤️</div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              {t('pillars.loneliness.title')}
            </h3>
            <p className="text-gray-800 leading-relaxed">
              {t('pillars.loneliness.description')}
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-cyan-100 p-8 rounded-2xl text-center hover-lift border border-blue-200">
            <div className="text-6xl mb-4">🤝</div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              {t('pillars.support.title')}
            </h3>
            <p className="text-gray-800 leading-relaxed">
              {t('pillars.support.description')}
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-8 rounded-2xl text-center hover-lift border border-green-200">
            <div className="text-6xl mb-4">⚡</div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              {t('pillars.productivity.title')}
            </h3>
            <p className="text-gray-800 leading-relaxed">
              {t('pillars.productivity.description')}
            </p>
          </div>
        </div>

        <div className="mt-12 p-6 bg-gradient-to-r from-[#ffeaa7] to-[#fdcb6e] rounded-xl text-center border-2 border-yellow-400">
          <p className="text-xl font-semibold text-gray-900">
            🎯 <strong>{t('pillars.jarvisNote')}</strong> - {t('pillars.jarvisDescription')}
          </p>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="max-w-6xl mx-auto py-16 px-5">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text">
          {t('problemSolution.title')}
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Problems */}
          <div className="bg-gradient-to-br from-red-50 to-orange-100 p-8 rounded-2xl border-2 border-red-200">
            <h3 className="text-2xl font-bold mb-6 text-red-800">
              ❌ {t('problemSolution.problems.title')}
            </h3>
            <ul className="space-y-4 text-gray-900">
              <li className="flex gap-3">
                <span>😔</span>
                <span>
                  <strong>{t('problemSolution.problems.noEmotional')}</strong>{' '}
                  {t('problemSolution.problems.noEmotionalDesc')}
                </span>
              </li>
              <li className="flex gap-3">
                <span>🔓</span>
                <span>
                  <strong>{t('problemSolution.problems.privacy')}</strong>{' '}
                  {t('problemSolution.problems.privacyDesc')}
                </span>
              </li>
              <li className="flex gap-3">
                <span>💸</span>
                <span>
                  <strong>{t('problemSolution.problems.expensive')}</strong>{' '}
                  {t('problemSolution.problems.expensiveDesc')}
                </span>
              </li>
              <li className="flex gap-3">
                <span>📡</span>
                <span>
                  <strong>{t('problemSolution.problems.internet')}</strong>{' '}
                  {t('problemSolution.problems.internetDesc')}
                </span>
              </li>
              <li className="flex gap-3">
                <span>🤖</span>
                <span>
                  <strong>{t('problemSolution.problems.generic')}</strong>{' '}
                  {t('problemSolution.problems.genericDesc')}
                </span>
              </li>
              <li className="flex gap-3">
                <span>⛓️</span>
                <span>
                  <strong>{t('problemSolution.problems.limited')}</strong>{' '}
                  {t('problemSolution.problems.limitedDesc')}
                </span>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-8 rounded-2xl border-2 border-green-200">
            <h3 className="text-2xl font-bold mb-6 text-green-800">
              ✅ {t('problemSolution.solutions.title')}
            </h3>
            <ul className="space-y-4 text-gray-900">
              <li className="flex gap-3">
                <span>❤️</span>
                <span>
                  <strong>{t('problemSolution.solutions.emotional')}</strong>{' '}
                  {t('problemSolution.solutions.emotionalDesc')}
                </span>
              </li>
              <li className="flex gap-3">
                <span>🔒</span>
                <span>
                  <strong>{t('problemSolution.solutions.privacy')}</strong>{' '}
                  {t('problemSolution.solutions.privacyDesc')}
                </span>
              </li>
              <li className="flex gap-3">
                <span>🆓</span>
                <span>
                  <strong>{t('problemSolution.solutions.free')}</strong>{' '}
                  {t('problemSolution.solutions.freeDesc')}
                </span>
              </li>
              <li className="flex gap-3">
                <span>✈️</span>
                <span>
                  <strong>{t('problemSolution.solutions.offline')}</strong>{' '}
                  {t('problemSolution.solutions.offlineDesc')}
                </span>
              </li>
              <li className="flex gap-3">
                <span>🎯</span>
                <span>
                  <strong>{t('problemSolution.solutions.learns')}</strong>{' '}
                  {t('problemSolution.solutions.learnsDesc')}
                </span>
              </li>
              <li className="flex gap-3">
                <span>🔗</span>
                <span>
                  <strong>{t('problemSolution.solutions.integration')}</strong>{' '}
                  {t('problemSolution.solutions.integrationDesc')}
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
            {t('stats.title')}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover-lift">
              <div className="text-5xl font-bold gradient-text mb-2">100%</div>
              <div className="text-gray-800 font-medium">
                {t('stats.privacy')}
              </div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover-lift">
              <div className="text-5xl font-bold gradient-text mb-2">$0</div>
              <div className="text-gray-800 font-medium">
                {t('stats.cost')}
              </div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover-lift">
              <div className="text-5xl font-bold gradient-text mb-2">2-3s</div>
              <div className="text-gray-800 font-medium">
                {t('stats.response')}
              </div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover-lift">
              <div className="text-5xl font-bold gradient-text mb-2">12GB</div>
              <div className="text-gray-800 font-medium">
                {t('stats.models')}
              </div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover-lift">
              <div className="text-5xl font-bold gradient-text mb-2">20-30</div>
              <div className="text-gray-800 font-medium">
                {t('stats.parameters')}
              </div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover-lift">
              <div className="text-5xl font-bold gradient-text mb-2">85%</div>
              <div className="text-gray-800 font-medium">
                {t('stats.complete')}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dual Mode System Section - NEW */}
      <section className="max-w-6xl mx-auto py-16 px-5">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text">
          {t('dualMode.title')}
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border-2 border-blue-200">
            <div className="flex items-center gap-4 mb-6">
              <div className="text-5xl">🙋</div>
              <div>
                <h3 className="text-2xl font-bold text-blue-900">
                  {t('dualMode.mode1.title')}
                </h3>
                <p className="text-blue-700">
                  {t('dualMode.mode1.subtitle')}
                </p>
              </div>
            </div>
            <ul className="space-y-3 text-gray-800">
              <li className="flex gap-3">
                <span>✓</span>
                <span>{t('dualMode.mode1.feature1')}</span>
              </li>
              <li className="flex gap-3">
                <span>✓</span>
                <span>{t('dualMode.mode1.feature2')}</span>
              </li>
              <li className="flex gap-3">
                <span>✓</span>
                <span>{t('dualMode.mode1.feature3')}</span>
              </li>
              <li className="flex gap-3">
                <span>✓</span>
                <span>{t('dualMode.mode1.feature4')}</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl border-2 border-purple-200">
            <div className="flex items-center gap-4 mb-6">
              <div className="text-5xl">🤖</div>
              <div>
                <h3 className="text-2xl font-bold text-purple-900">
                  {t('dualMode.mode2.title')}
                </h3>
                <p className="text-purple-700">
                  {t('dualMode.mode2.subtitle')}
                </p>
              </div>
            </div>
            <ul className="space-y-3 text-gray-800">
              <li className="flex gap-3">
                <span>✓</span>
                <span>{t('dualMode.mode2.feature1')}</span>
              </li>
              <li className="flex gap-3">
                <span>✓</span>
                <span>{t('dualMode.mode2.feature2')}</span>
              </li>
              <li className="flex gap-3">
                <span>✓</span>
                <span>{t('dualMode.mode2.feature3')}</span>
              </li>
              <li className="flex gap-3">
                <span>✓</span>
                <span>{t('dualMode.mode2.feature4')}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 p-6 bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white rounded-xl text-center">
          <p className="text-xl font-semibold text-white-shadow">
            🎯 <strong>{t('dualMode.bestOfBoth')}</strong> {t('dualMode.bestOfBothDesc')}
          </p>
        </div>
      </section>

      {/* Design Philosophy Section - NEW */}
      <section className="max-w-6xl mx-auto py-16 px-5">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text">
          {t('designPhilosophy.title')}
        </h2>

        <div className="bg-gradient-to-br from-[#f5f7fa] to-[#c3cfe2] p-10 rounded-2xl border-2 border-gray-300">
          <div className="text-center mb-8">
            <p className="text-2xl font-bold mb-4 text-gray-900">{t('designPhilosophy.subtitle')}</p>
            <p className="text-xl text-gray-800">
              {t('designPhilosophy.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-center mb-4">
                <span className="text-4xl">⚡</span>
                <h3 className="text-xl font-bold mt-2 text-gray-900">
                  {t('designPhilosophy.level1.title')}
                </h3>
                <p className="text-sm text-gray-600">~1 {t('designPhilosophy.level1.time')}</p>
              </div>
              <p className="text-gray-800">
                {t('designPhilosophy.level1.description')}
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-center mb-4">
                <span className="text-4xl">🔍</span>
                <h3 className="text-xl font-bold mt-2 text-gray-900">
                  {t('designPhilosophy.level2.title')}
                </h3>
                <p className="text-sm text-gray-600">~3 {t('designPhilosophy.level2.time')}</p>
              </div>
              <p className="text-gray-800">
                {t('designPhilosophy.level2.description')}
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-center mb-4">
                <span className="text-4xl">🌐</span>
                <h3 className="text-xl font-bold mt-2 text-gray-900">
                  {t('designPhilosophy.level3.title')}
                </h3>
                <p className="text-sm text-gray-600">~10 {t('designPhilosophy.level3.time')}</p>
              </div>
              <p className="text-gray-800">
                {t('designPhilosophy.level3.description')}
              </p>
            </div>
          </div>

          <div className="mt-8 p-6 bg-white rounded-xl border-2 border-green-200">
            <h4 className="font-bold text-lg mb-3 text-green-800">
              🔒 {t('designPhilosophy.privacyTitle')}
            </h4>
            <ul className="grid md:grid-cols-2 gap-3 text-gray-800">
              <li className="flex gap-2">
                <span>✓</span>
                <span>{t('designPhilosophy.privacyFeature1')}</span>
              </li>
              <li className="flex gap-2">
                <span>✓</span>
                <span>{t('designPhilosophy.privacyFeature2')}</span>
              </li>
              <li className="flex gap-2">
                <span>✓</span>
                <span>{t('designPhilosophy.privacyFeature3')}</span>
              </li>
              <li className="flex gap-2">
                <span>✓</span>
                <span>{t('designPhilosophy.privacyFeature4')}</span>
              </li>
              <li className="flex gap-2">
                <span>✓</span>
                <span>{t('designPhilosophy.privacyFeature5')}</span>
              </li>
              <li className="flex gap-2">
                <span>✓</span>
                <span>{t('designPhilosophy.privacyFeature6')}</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Features Deep Dive - Updated */}
      <section className="max-w-6xl mx-auto py-16 px-5">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text">
          {t('features.title')}
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1: Privacy */}
          <div className="bg-gradient-to-br from-[#f5f7fa] to-[#c3cfe2] p-8 rounded-2xl hover-lift">
            <div className="text-5xl mb-4">🔒</div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              {t('features.privacy.title')}
            </h3>
            <ul className="space-y-2 text-gray-800">
              <li>• {t('features.privacy.item1')}</li>
              <li>• {t('features.privacy.item2')}</li>
              <li>• {t('features.privacy.item3')}</li>
              <li>• {t('features.privacy.item4')}</li>
              <li>• {t('features.privacy.item5')}</li>
            </ul>
          </div>

          {/* Feature 2: AI Models */}
          <div className="bg-gradient-to-br from-[#f5f7fa] to-[#c3cfe2] p-8 rounded-2xl hover-lift">
            <div className="text-5xl mb-4">🤖</div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              {t('features.aiModels.title')}
            </h3>
            <ul className="space-y-2 text-gray-800">
              <li>• {t('features.aiModels.item1')}</li>
              <li>• {t('features.aiModels.item2')}</li>
              <li>• {t('features.aiModels.item3')}</li>
              <li>• {t('features.aiModels.item4')}</li>
              <li>• {t('features.aiModels.item5')}</li>
            </ul>
          </div>

          {/* Feature 3: Persona - Updated */}
          <div className="bg-gradient-to-br from-[#f5f7fa] to-[#c3cfe2] p-8 rounded-2xl hover-lift">
            <div className="text-5xl mb-4">🎭</div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              {t('features.persona.title')}
            </h3>
            <ul className="space-y-2 text-gray-800">
              <li>• {t('features.persona.item1')}</li>
              <li>• {t('features.persona.item2')}</li>
              <li>• {t('features.persona.item3')}</li>
              <li>• {t('features.persona.item4')}</li>
              <li>• {t('features.persona.item5')}</li>
            </ul>
          </div>

          {/* Feature 4: Emotional Intelligence - NEW */}
          <div className="bg-gradient-to-br from-[#f5f7fa] to-[#c3cfe2] p-8 rounded-2xl hover-lift">
            <div className="text-5xl mb-4">❤️</div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              {t('features.emotional.title')}
            </h3>
            <ul className="space-y-2 text-gray-800">
              <li>• {t('features.emotional.item1')}</li>
              <li>• {t('features.emotional.item2')}</li>
              <li>• {t('features.emotional.item3')}</li>
              <li>• {t('features.emotional.item4')}</li>
              <li>• {t('features.emotional.item5')}</li>
            </ul>
          </div>

          {/* Feature 5: Integration */}
          <div className="bg-gradient-to-br from-[#f5f7fa] to-[#c3cfe2] p-8 rounded-2xl hover-lift">
            <div className="text-5xl mb-4">🔗</div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              {t('features.integration.title')}
            </h3>
            <ul className="space-y-2 text-gray-800">
              <li>• {t('features.integration.item1')}</li>
              <li>• {t('features.integration.item2')}</li>
              <li>• {t('features.integration.item3')}</li>
              <li>• {t('features.integration.item4')}</li>
              <li>• {t('features.integration.item5')}</li>
            </ul>
          </div>

          {/* Feature 6: Interface */}
          <div className="bg-gradient-to-br from-[#f5f7fa] to-[#c3cfe2] p-8 rounded-2xl hover-lift">
            <div className="text-5xl mb-4">🎨</div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              {t('features.interface.title')}
            </h3>
            <ul className="space-y-2 text-gray-800">
              <li>• {t('features.interface.item1')}</li>
              <li>• {t('features.interface.item2')}</li>
              <li>• {t('features.interface.item3')}</li>
              <li>• {t('features.interface.item4')}</li>
              <li>• {t('features.interface.item5')}</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Personas Section - NEW */}
      <section className="max-w-6xl mx-auto py-16 px-5">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 gradient-text">
          {t('personas.title')}
        </h2>
        <p className="text-xl text-center mb-12 text-gray-700">
          {t('personas.subtitle')}
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-purple-50 to-indigo-100 p-6 rounded-2xl border-2 border-purple-200 hover-lift">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xl font-bold text-gray-900">🌟 {t('personas.eden.name')}</h3>
              <span className="bg-purple-200 text-purple-800 px-3 py-1 rounded-full text-xs font-semibold">{t('personas.eden.tag')}</span>
            </div>
            <p className="text-gray-700 mb-2">{t('personas.eden.description')}</p>
            <p className="text-sm text-gray-600">{t('personas.eden.details')}</p>
          </div>

          <div className="bg-gradient-to-br from-red-50 to-orange-100 p-6 rounded-2xl border-2 border-red-200 hover-lift">
            <h3 className="text-xl font-bold text-gray-900 mb-3">👔 {t('personas.strictMentor.name')}</h3>
            <p className="text-gray-700 mb-2">{t('personas.strictMentor.description')}</p>
            <p className="text-sm text-gray-600">{t('personas.strictMentor.details')}</p>
          </div>

          <div className="bg-gradient-to-br from-yellow-50 to-amber-100 p-6 rounded-2xl border-2 border-yellow-200 hover-lift">
            <h3 className="text-xl font-bold text-gray-900 mb-3">🎉 {t('personas.cheerfulFriend.name')}</h3>
            <p className="text-gray-700 mb-2">{t('personas.cheerfulFriend.description')}</p>
            <p className="text-sm text-gray-600">{t('personas.cheerfulFriend.details')}</p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-cyan-100 p-6 rounded-2xl border-2 border-blue-200 hover-lift">
            <h3 className="text-xl font-bold text-gray-900 mb-3">💼 {t('personas.professional.name')}</h3>
            <p className="text-gray-700 mb-2">{t('personas.professional.description')}</p>
            <p className="text-sm text-gray-600">{t('personas.professional.details')}</p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-6 rounded-2xl border-2 border-green-200 hover-lift">
            <h3 className="text-xl font-bold text-gray-900 mb-3">🥋 {t('personas.sensei.name')}</h3>
            <p className="text-gray-700 mb-2">{t('personas.sensei.description')}</p>
            <p className="text-sm text-gray-600">{t('personas.sensei.details')}</p>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-slate-100 p-6 rounded-2xl border-2 border-gray-300 hover-lift">
            <h3 className="text-xl font-bold text-gray-900 mb-3">🎨 {t('personas.custom.name')}</h3>
            <p className="text-gray-700 mb-2">{t('personas.custom.description')}</p>
            <p className="text-sm text-gray-600">{t('personas.custom.details')}</p>
          </div>
        </div>
      </section>

      {/* Comparison Table - Enhanced */}
      <section className="max-w-6xl mx-auto py-16 px-5">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text">
          {t('comparison.title')}
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-2xl shadow-xl border-collapse overflow-hidden">
            <thead className="bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white">
              <tr>
                <th className="p-4 text-left font-bold">{t('comparison.feature')}</th>
                <th className="p-4 text-center font-bold bg-green-600">{t('comparison.edenV3')}</th>
                <th className="p-4 text-center font-bold">{t('comparison.chatgptPlus')}</th>
                <th className="p-4 text-center font-bold">{t('comparison.claudePro')}</th>
                <th className="p-4 text-center font-bold">{t('comparison.githubCopilot')}</th>
              </tr>
            </thead>
            <tbody className="text-gray-800">
              <tr className="border-b border-gray-200 hover:bg-gray-50">
                <td className="p-4 font-semibold">{t('comparison.emotionalCompanionship')}</td>
                <td className="p-4 text-center bg-green-50 font-bold text-green-700">✅ ❤️</td>
                <td className="p-4 text-center">❌</td>
                <td className="p-4 text-center">❌</td>
                <td className="p-4 text-center">❌</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50">
                <td className="p-4 font-semibold">{t('comparison.privacy')}</td>
                <td className="p-4 text-center bg-green-50 font-bold text-green-700">✅ 🔒</td>
                <td className="p-4 text-center">❌</td>
                <td className="p-4 text-center">❌</td>
                <td className="p-4 text-center">❌</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50">
                <td className="p-4 font-semibold">{t('comparison.costPerYear')}</td>
                <td className="p-4 text-center bg-green-50 font-bold text-green-700">$0 🆓</td>
                <td className="p-4 text-center">$240</td>
                <td className="p-4 text-center">$240</td>
                <td className="p-4 text-center">$120</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50">
                <td className="p-4 font-semibold">{t('comparison.worksOffline')}</td>
                <td className="p-4 text-center bg-green-50 font-bold text-green-700">✅ ✈️</td>
                <td className="p-4 text-center">❌</td>
                <td className="p-4 text-center">❌</td>
                <td className="p-4 text-center">❌</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50">
                <td className="p-4 font-semibold">{t('comparison.personaCustomization')}</td>
                <td className="p-4 text-center bg-green-50 font-bold text-green-700">✅<br/>{t('comparison.personaParams')}</td>
                <td className="p-4 text-center">Limited</td>
                <td className="p-4 text-center">Limited</td>
                <td className="p-4 text-center">❌</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50">
                <td className="p-4 font-semibold">{t('comparison.adaptiveLearning')}</td>
                <td className="p-4 text-center bg-green-50 font-bold text-green-700">✅ 🎯</td>
                <td className="p-4 text-center">Limited</td>
                <td className="p-4 text-center">Limited</td>
                <td className="p-4 text-center">Limited</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50">
                <td className="p-4 font-semibold">{t('comparison.deepIntegration')}</td>
                <td className="p-4 text-center bg-green-50 font-bold text-green-700">✅ 🔗</td>
                <td className="p-4 text-center">❌</td>
                <td className="p-4 text-center">❌</td>
                <td className="p-4 text-center">IDE only</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50">
                <td className="p-4 font-semibold">{t('comparison.openSource')}</td>
                <td className="p-4 text-center bg-green-50 font-bold text-green-700">✅ MIT</td>
                <td className="p-4 text-center">❌</td>
                <td className="p-4 text-center">❌</td>
                <td className="p-4 text-center">❌</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50">
                <td className="p-4 font-semibold">{t('comparison.humanEvalScore')}</td>
                <td className="p-4 text-center bg-green-50 font-bold text-green-700">80.5%</td>
                <td className="p-4 text-center">85%</td>
                <td className="p-4 text-center">88%</td>
                <td className="p-4 text-center">~70%</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50">
                <td className="p-4 font-semibold">{t('comparison.responseTime')}</td>
                <td className="p-4 text-center bg-green-50 font-bold text-green-700">2-3s ⚡</td>
                <td className="p-4 text-center">1-2s</td>
                <td className="p-4 text-center">1-2s</td>
                <td className="p-4 text-center">1-2s</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50">
                <td className="p-4 font-semibold">{t('comparison.voiceSupport')}</td>
                <td className="p-4 text-center bg-green-50 font-bold text-green-700">✅ 🗣️</td>
                <td className="p-4 text-center">✅</td>
                <td className="p-4 text-center">❌</td>
                <td className="p-4 text-center">❌</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50">
                <td className="p-4 font-semibold">{t('comparison.screenContext')}</td>
                <td className="p-4 text-center bg-green-50 font-bold text-green-700">✅ 📸</td>
                <td className="p-4 text-center">Limited</td>
                <td className="p-4 text-center">Limited</td>
                <td className="p-4 text-center">❌</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-4 font-semibold">{t('comparison.ragMemory')}</td>
                <td className="p-4 text-center bg-green-50 font-bold text-green-700">✅ 🧠</td>
                <td className="p-4 text-center">Limited</td>
                <td className="p-4 text-center">Limited</td>
                <td className="p-4 text-center">❌</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-emerald-100 rounded-xl border-2 border-green-200 text-center">
          <p className="text-xl font-semibold text-gray-900">
            💡 <strong>{t('comparison.qualityCostComparison')}</strong> {t('comparison.qualityCostDescription')} <span className="text-green-700 font-bold">{t('comparison.savingsAmount')}</span> {t('comparison.withPrivacy')}
          </p>
        </div>
      </section>

      {/* Technical Excellence Section - NEW */}
      <section className="max-w-6xl mx-auto py-16 px-5">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text">
          {t('technical.title')}
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl border-2 border-blue-200">
            <div className="text-4xl font-bold gradient-text mb-2">350+</div>
            <div className="text-gray-800 font-medium">{t('technical.stat1')}</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl border-2 border-green-200">
            <div className="text-4xl font-bold gradient-text mb-2">15k+</div>
            <div className="text-gray-800 font-medium">{t('technical.stat2')}</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-100 rounded-xl border-2 border-purple-200">
            <div className="text-4xl font-bold gradient-text mb-2">300+</div>
            <div className="text-gray-800 font-medium">{t('technical.stat3')}</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-yellow-50 to-amber-100 rounded-xl border-2 border-yellow-200">
            <div className="text-4xl font-bold gradient-text mb-2">85%</div>
            <div className="text-gray-800 font-medium">{t('technical.stat4')}</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#f5f7fa] to-[#c3cfe2] p-8 rounded-2xl border-2 border-gray-300 mb-8">
          <h3 className="text-2xl font-bold mb-6 text-gray-900 text-center">
            🏆 {t('technical.benchmarks.title')}
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl">
              <p className="font-bold text-gray-900 mb-2">{t('technical.benchmarks.humanEval')} <span className="text-green-600">80.5%</span></p>
              <p className="text-sm text-gray-600">{t('technical.benchmarks.humanEvalComparison')}</p>
            </div>
            <div className="bg-white p-6 rounded-xl">
              <p className="font-bold text-gray-900 mb-2">{t('technical.benchmarks.mmlu')} <span className="text-blue-600">68.4%</span></p>
              <p className="text-sm text-gray-600">{t('technical.benchmarks.quantization')} {t('technical.benchmarks.quantizationValue')}</p>
            </div>
          </div>
          <p className="mt-4 text-center text-gray-800 font-semibold">{t('technical.benchmarks.enterpriseGrade')}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl border-2 border-blue-200">
            <h4 className="font-bold text-lg mb-4 text-blue-800">💎 {t('technical.codeQuality.title')}</h4>
            <ul className="space-y-2 text-gray-800 text-sm">
              <li>✓ {t('technical.codeQuality.item1')}</li>
              <li>✓ {t('technical.codeQuality.item2')}</li>
              <li>✓ {t('technical.codeQuality.item3')}</li>
              <li>✓ {t('technical.codeQuality.item4')}</li>
              <li>✓ {t('technical.codeQuality.item5')}</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl border-2 border-green-200">
            <h4 className="font-bold text-lg mb-4 text-green-800">🔐 {t('technical.security.title')}</h4>
            <ul className="space-y-2 text-gray-800 text-sm">
              <li>✓ {t('technical.security.item1')}</li>
              <li>✓ {t('technical.security.item2')}</li>
              <li>✓ {t('technical.security.item3')}</li>
              <li>✓ {t('technical.security.item4')}</li>
              <li>✓ {t('technical.security.item5')}</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl border-2 border-purple-200">
            <h4 className="font-bold text-lg mb-4 text-purple-800">⚡ {t('technical.performance.title')}</h4>
            <ul className="space-y-2 text-gray-800 text-sm">
              <li>✓ {t('technical.performance.item1')}</li>
              <li>✓ {t('technical.performance.item2')}</li>
              <li>✓ {t('technical.performance.item3')}</li>
              <li>✓ {t('technical.performance.item4')}</li>
              <li>✓ {t('technical.performance.item5')}</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Tech Stack - Visual */}
      <section className="bg-gradient-to-br from-[#667eea] to-[#764ba2] py-16 px-5 rounded-2xl my-16">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-white">
            {t('techStack.title')}
          </h2>
          <div className="flex flex-wrap justify-center gap-6 text-white">
            <div className="bg-white/10 backdrop-blur px-6 py-3 rounded-full font-semibold">Electron</div>
            <div className="bg-white/10 backdrop-blur px-6 py-3 rounded-full font-semibold">React</div>
            <div className="bg-white/10 backdrop-blur px-6 py-3 rounded-full font-semibold">TypeScript</div>
            <div className="bg-white/10 backdrop-blur px-6 py-3 rounded-full font-semibold">Llama 3.1 8B</div>
            <div className="bg-white/10 backdrop-blur px-6 py-3 rounded-full font-semibold">Whisper Large V3</div>
            <div className="bg-white/10 backdrop-blur px-6 py-3 rounded-full font-semibold">LLaVA 7B</div>
            <div className="bg-white/10 backdrop-blur px-6 py-3 rounded-full font-semibold">ChromaDB</div>
            <div className="bg-white/10 backdrop-blur px-6 py-3 rounded-full font-semibold">SQLite</div>
            <div className="bg-white/10 backdrop-blur px-6 py-3 rounded-full font-semibold">i18next</div>
            <div className="bg-white/10 backdrop-blur px-6 py-3 rounded-full font-semibold">Vitest</div>
            <div className="bg-white/10 backdrop-blur px-6 py-3 rounded-full font-semibold">Playwright</div>
          </div>
        </div>
      </section>

      {/* Use Cases - Updated */}
      <section className="max-w-6xl mx-auto py-16 px-5">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text">
          {t('useCases.title')}
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-red-50 to-pink-100 p-8 rounded-2xl border-2 border-red-200 hover-lift relative">
            <div className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
              {t('useCases.soloDeveloper.badge')}
            </div>
            <div className="text-5xl mb-4">👤</div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">{t('useCases.soloDeveloper.title')}</h3>
            <p className="text-sm font-semibold text-red-800 mb-2">{t('useCases.soloDeveloper.primaryTarget')}</p>
            <p className="text-gray-700 mb-3">{t('useCases.soloDeveloper.description')}</p>
            <p className="text-gray-800 font-medium">{t('useCases.soloDeveloper.details')}</p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-cyan-100 p-8 rounded-2xl border-2 border-blue-200 hover-lift">
            <div className="text-5xl mb-4">🏠</div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">{t('useCases.remoteWorker.title')}</h3>
            <p className="text-gray-800">{t('useCases.remoteWorker.description')}</p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-8 rounded-2xl border-2 border-green-200 hover-lift">
            <div className="text-5xl mb-4">🔒</div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">{t('useCases.privacyConscious.title')}</h3>
            <p className="text-gray-800">{t('useCases.privacyConscious.description')}</p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-pink-100 p-8 rounded-2xl border-2 border-purple-200 hover-lift">
            <div className="text-5xl mb-4">🇰🇷🇺🇸</div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">{t('useCases.bilingual.title')}</h3>
            <p className="text-gray-800">{t('useCases.bilingual.description')}</p>
          </div>

          <div className="bg-gradient-to-br from-yellow-50 to-amber-100 p-8 rounded-2xl border-2 border-yellow-200 hover-lift">
            <div className="text-5xl mb-4">🎓</div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">{t('useCases.students.title')}</h3>
            <p className="text-gray-800">{t('useCases.students.description')}</p>
          </div>

          <div className="bg-gradient-to-br from-indigo-50 to-blue-100 p-8 rounded-2xl border-2 border-indigo-200 hover-lift">
            <div className="text-5xl mb-4">🚀</div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">{t('useCases.teams.title')}</h3>
            <p className="text-gray-800">{t('useCases.teams.description')}</p>
          </div>
        </div>
      </section>

      {/* Localization Section - NEW */}
      <section className="max-w-6xl mx-auto py-16 px-5">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text">
          {t('localization.title')}
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-2xl border-2 border-blue-200">
            <h3 className="text-2xl font-bold mb-6 text-blue-900">🌐 {t('localization.interfaceLanguages.title')}</h3>
            <ul className="space-y-3 text-gray-800">
              <li>
                <strong>{t('localization.interfaceLanguages.korean')}</strong><br/>
                <span className="text-sm">{t('localization.interfaceLanguages.koreanDesc')}</span>
              </li>
              <li>
                <strong>{t('localization.interfaceLanguages.english')}</strong><br/>
                <span className="text-sm">{t('localization.interfaceLanguages.englishDesc')}</span>
              </li>
              <li className="text-sm text-gray-700">✓ {t('localization.interfaceLanguages.seamless')}</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-pink-100 p-8 rounded-2xl border-2 border-purple-200">
            <h3 className="text-2xl font-bold mb-6 text-purple-900">🗣️ {t('localization.aiUnderstanding.title')}</h3>
            <ul className="space-y-3 text-gray-800">
              <li>
                <strong>{t('localization.aiUnderstanding.languages99')}</strong><br/>
                <span className="text-sm">{t('localization.aiUnderstanding.languages99Desc')}</span>
              </li>
              <li className="text-sm">✓ {t('localization.aiUnderstanding.codeSwitching')}</li>
              <li className="text-sm">✓ {t('localization.aiUnderstanding.contextAware')}</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-red-50 to-pink-100 p-8 rounded-2xl border-2 border-red-200">
            <h3 className="text-2xl font-bold mb-6 text-red-900">🇰🇷 {t('localization.koreanCulture.title')}</h3>
            <div className="space-y-4 text-gray-800">
              <div>
                <p className="font-semibold mb-2">{t('localization.koreanCulture.honorificsTitle')}</p>
                <ul className="text-sm space-y-1 ml-4">
                  <li>• <strong>{t('localization.koreanCulture.formal')}</strong> {t('localization.koreanCulture.formalDesc')}</li>
                  <li>• <strong>{t('localization.koreanCulture.honorific')}</strong> {t('localization.koreanCulture.honorificDesc')}</li>
                  <li>• <strong>{t('localization.koreanCulture.casual')}</strong> {t('localization.koreanCulture.casualDesc')}</li>
                  <li>✓ {t('localization.koreanCulture.adjustable')}</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold mb-2">{t('localization.koreanCulture.communicationTitle')}</p>
                <ul className="text-sm space-y-1 ml-4">
                  <li>• <strong>{t('localization.koreanCulture.korean')}</strong> {t('localization.koreanCulture.koreanDesc')}</li>
                  <li>• <strong>{t('localization.koreanCulture.western')}</strong> {t('localization.koreanCulture.westernDesc')}</li>
                  <li>• <strong>{t('localization.koreanCulture.hybrid')}</strong> {t('localization.koreanCulture.hybridDesc')}</li>
                  <li>✓ {t('localization.koreanCulture.nuance')}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RAG Memory Section - NEW */}
      <section className="max-w-6xl mx-auto py-16 px-5">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 gradient-text">
          {t('ragMemory.title')}
        </h2>
        <p className="text-xl text-center mb-8 text-gray-700 font-semibold">{t('ragMemory.subtitle')}</p>
        <p className="text-lg text-center mb-12 text-gray-600">{t('ragMemory.description')}</p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-2xl text-center border-2 border-blue-200">
            <div className="text-6xl mb-4">💾</div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">{t('ragMemory.store.title')}</h3>
            <p className="text-gray-800">{t('ragMemory.store.description')}</p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-8 rounded-2xl text-center border-2 border-green-200">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">{t('ragMemory.retrieve.title')}</h3>
            <p className="text-gray-800">{t('ragMemory.retrieve.description')}</p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-pink-100 p-8 rounded-2xl text-center border-2 border-purple-200">
            <div className="text-6xl mb-4">✨</div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">{t('ragMemory.generate.title')}</h3>
            <p className="text-gray-800">{t('ragMemory.generate.description')}</p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#f5f7fa] to-[#c3cfe2] p-8 rounded-2xl border-2 border-gray-300">
          <h4 className="text-2xl font-bold mb-6 text-center text-gray-900">🧠 {t('ragMemory.remembersTitle')}</h4>
          <div className="grid md:grid-cols-2 gap-4 text-gray-800">
            <div className="flex gap-3">
              <span>✓</span>
              <span>{t('ragMemory.remembers1')}</span>
            </div>
            <div className="flex gap-3">
              <span>✓</span>
              <span>{t('ragMemory.remembers2')}</span>
            </div>
            <div className="flex gap-3">
              <span>✓</span>
              <span>{t('ragMemory.remembers3')}</span>
            </div>
            <div className="flex gap-3">
              <span>✓</span>
              <span>{t('ragMemory.remembers4')}</span>
            </div>
            <div className="flex gap-3">
              <span>✓</span>
              <span>{t('ragMemory.remembers5')}</span>
            </div>
            <div className="flex gap-3">
              <span>✓</span>
              <span>{t('ragMemory.remembers6')}</span>
            </div>
            <div className="flex gap-3">
              <span>✓</span>
              <span>{t('ragMemory.remembers7')}</span>
            </div>
            <div className="flex gap-3">
              <span>✓</span>
              <span>{t('ragMemory.remembers8')}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Getting Started Section - Updated */}
      <section className="max-w-6xl mx-auto py-16 px-5">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text">
          {t('gettingStarted.title')}
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-2xl text-center hover-lift border-2 border-blue-200">
            <div className="text-6xl font-bold text-blue-600 mb-4">{t('gettingStarted.step1.number')}</div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">{t('gettingStarted.step1.title')}</h3>
            <p className="text-gray-800">{t('gettingStarted.step1.description')}</p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-8 rounded-2xl text-center hover-lift border-2 border-green-200">
            <div className="text-6xl font-bold text-green-600 mb-4">{t('gettingStarted.step2.number')}</div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">{t('gettingStarted.step2.title')}</h3>
            <p className="text-gray-800">{t('gettingStarted.step2.description')}</p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-pink-100 p-8 rounded-2xl text-center hover-lift border-2 border-purple-200">
            <div className="text-6xl font-bold text-purple-600 mb-4">{t('gettingStarted.step3.number')}</div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">{t('gettingStarted.step3.title')}</h3>
            <p className="text-gray-800">{t('gettingStarted.step3.description')}</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button className="bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white font-bold text-lg py-4 px-10 rounded-full btn-glow hover:scale-105 transition-transform shadow-xl">
            🍎 {t('gettingStarted.downloadMacOS')}
          </button>
          <span className="text-center text-gray-500 font-semibold self-center">{t('gettingStarted.or')}</span>
          <button className="bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white font-bold text-lg py-4 px-10 rounded-full btn-glow hover:scale-105 transition-transform shadow-xl">
            🪟 {t('gettingStarted.downloadWindows')}
          </button>
        </div>

        <div className="bg-gradient-to-br from-[#f5f7fa] to-[#c3cfe2] p-8 rounded-2xl border-2 border-gray-300">
          <h3 className="text-2xl font-bold mb-6 text-center text-gray-900">💻 {t('gettingStarted.systemRequirements.title')}</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-bold text-lg mb-3 text-gray-900">{t('gettingStarted.systemRequirements.minimum')}</h4>
              <ul className="space-y-2 text-gray-800">
                <li>• {t('gettingStarted.systemRequirements.minItem1')}</li>
                <li>• {t('gettingStarted.systemRequirements.minItem2')}</li>
                <li>• {t('gettingStarted.systemRequirements.minItem3')}</li>
                <li>• {t('gettingStarted.systemRequirements.minItem4')}</li>
                <li>• {t('gettingStarted.systemRequirements.minItem5')}</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-3 text-green-800">{t('gettingStarted.systemRequirements.recommended')}</h4>
              <ul className="space-y-2 text-gray-800">
                <li>• {t('gettingStarted.systemRequirements.recItem1')}</li>
                <li>• {t('gettingStarted.systemRequirements.recItem2')}</li>
                <li>• {t('gettingStarted.systemRequirements.recItem3')}</li>
                <li>• {t('gettingStarted.systemRequirements.recItem4')}</li>
                <li>• {t('gettingStarted.systemRequirements.recItem5')}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Section - NEW */}
      <section className="max-w-6xl mx-auto py-16 px-5">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text">
          {t('roadmap.title')}
        </h2>

        <div className="space-y-6">
          <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-6 rounded-2xl border-2 border-green-200">
            <h3 className="text-xl font-bold mb-3 text-green-800">✅ {t('roadmap.phase17.title')}</h3>
            <p className="text-gray-800">{t('roadmap.phase17.description')}</p>
          </div>

          <div className="bg-gradient-to-br from-yellow-50 to-amber-100 p-6 rounded-2xl border-2 border-yellow-200">
            <h3 className="text-xl font-bold mb-3 text-yellow-800">🚀 {t('roadmap.phase8.title')}</h3>
            <p className="text-gray-800">{t('roadmap.phase8.description')}</p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-cyan-100 p-6 rounded-2xl border-2 border-blue-200">
            <h3 className="text-xl font-bold mb-3 text-blue-800">🔌 {t('roadmap.v11.title')}</h3>
            <p className="text-gray-800">{t('roadmap.v11.description')}</p>
          </div>

          <div className="bg-gradient-to-br from-indigo-50 to-purple-100 p-6 rounded-2xl border-2 border-indigo-200">
            <h3 className="text-xl font-bold mb-3 text-indigo-800">📚 {t('roadmap.v12.title')}</h3>
            <p className="text-gray-800">{t('roadmap.v12.description')}</p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-pink-100 p-6 rounded-2xl border-2 border-purple-200">
            <h3 className="text-xl font-bold mb-3 text-purple-800">🤖 {t('roadmap.v20.title')}</h3>
            <p className="text-gray-800">{t('roadmap.v20.description')}</p>
          </div>
        </div>

        <p className="text-center mt-8 text-xl font-semibold text-gray-900">
          🎉 {t('roadmap.joinJourney')}
        </p>
      </section>

      {/* FAQ Section - Enhanced */}
      <section className="max-w-6xl mx-auto py-16 px-5">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text">
          {t('faq.title')}
        </h2>

        <div className="space-y-4">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
            <div
              key={num}
              className="bg-white border-2 border-gray-200 rounded-2xl overflow-hidden hover-lift"
            >
              <button
                onClick={() => setOpenFaq(openFaq === num ? null : num)}
                className="w-full text-left p-6 font-bold text-lg text-gray-900 flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <span>{t(`faq.q${num}`)}</span>
                <span className="text-2xl">{openFaq === num ? '−' : '+'}</span>
              </button>
              {openFaq === num && (
                <div className="px-6 pb-6 text-gray-800 leading-relaxed">
                  {t(`faq.a${num}`)}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="max-w-6xl mx-auto py-16 px-5 text-center">
        <div className="bg-gradient-to-br from-[#667eea] to-[#764ba2] text-white p-12 md:p-16 rounded-3xl shadow-2xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white-shadow">
            {t('finalCta.title')}
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-white-shadow">
            {t('finalCta.subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button className="bg-white text-[#667eea] font-bold text-lg py-4 px-10 rounded-full btn-glow hover:scale-105 transition-transform shadow-xl">
              {t('finalCta.downloadButton')}
            </button>
            <button className="bg-white/10 backdrop-blur border-2 border-white text-white font-bold text-lg py-4 px-10 rounded-full hover:bg-white hover:text-[#667eea] transition-all shadow-xl">
              ⭐ {t('finalCta.githubButton')}
            </button>
          </div>

          <div className="inline-flex flex-wrap items-center justify-center gap-2 bg-white/20 backdrop-blur py-3 px-6 rounded-full text-white font-semibold">
            {t('finalCta.badge')}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-12 px-5 rounded-t-3xl mt-16">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4">{t('footer.title')}</h3>
          <p className="text-gray-300 mb-4">{t('footer.version')}</p>
          <p className="text-gray-300 mb-2">
            <strong>{t('footer.license')}</strong> - {t('footer.licenseDesc')}
          </p>
          <p className="text-gray-400 mb-2 text-sm">
            {t('footer.inspiration')}
          </p>
          <p className="text-gray-400 mb-4 text-sm">
            {t('footer.builtWith')}
          </p>
          <p className="text-gray-400 text-xs mb-4">
            {t('footer.poweredBy')}
          </p>
          <p className="text-gray-500 text-sm">{t('footer.copyright')}</p>
        </div>
      </footer>
    </main>
  );
}
