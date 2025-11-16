import { useTranslations } from 'next-intl';
import { Heart, Users, Zap, Lock, Sparkles, Brain } from 'lucide-react';

export default function ProductOverviewPage() {
  const t = useTranslations();

  const pillars = [
    {
      icon: Heart,
      gradient: 'from-rose-500 to-pink-500',
    },
    {
      icon: Users,
      gradient: 'from-violet-500 to-purple-500',
    },
    {
      icon: Zap,
      gradient: 'from-amber-500 to-orange-500',
    },
  ];

  const problems = [
    { icon: '🔒' },
    { icon: '💰' },
    { icon: '🤖' },
    { icon: '📡' },
    { icon: '🎯' },
    { icon: '🏢' },
  ];

  const solutions = [
    {
      icon: Lock,
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      icon: Sparkles,
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Brain,
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: Zap,
      gradient: 'from-orange-500 to-red-500',
    },
    {
      icon: Users,
      gradient: 'from-teal-500 to-green-500',
    },
    {
      icon: Heart,
      gradient: 'from-rose-500 to-pink-500',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-violet-50">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full mb-6">
            <span className="text-purple-600 font-semibold">🌳 {t('productOverview.badge')}</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">
            {t('productOverview.title')}
            <br />
            {t('productOverview.subtitle')}
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            {t('productOverview.vision')}
          </p>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">{t('productOverview.threePillars.title')}</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => (
              <div
                key={index}
                className="group relative p-8 rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 hover:border-transparent hover:shadow-2xl transition-all duration-300"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${pillar.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${pillar.gradient} flex items-center justify-center mb-6`}>
                  <pillar.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{t(`productOverview.threePillars.pillar${index + 1}.title`)}</h3>
                <p className="text-gray-600">{t(`productOverview.threePillars.pillar${index + 1}.description`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem vs Solution */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">{t('productOverview.problemSolution.title')}</h2>
          </div>

          {/* Problems */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold mb-8 text-center text-red-600">
              {t('productOverview.problemSolution.problemsTitle')}
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              {problems.map((item, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl bg-red-50 border border-red-200"
                >
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <p className="font-semibold text-red-900">{t(`productOverview.problemSolution.problem${index + 1}`)}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center text-green-600">
              {t('productOverview.problemSolution.solutionsTitle')}
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {solutions.map((item, index) => (
                <div
                  key={index}
                  className="group relative p-6 rounded-xl bg-white border border-gray-200 hover:border-transparent hover:shadow-xl transition-all duration-300"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300`} />
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-4`}>
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-lg mb-2">{t(`productOverview.problemSolution.solution${index + 1}.title`)}</h4>
                  <p className="text-sm text-gray-600">{t(`productOverview.problemSolution.solution${index + 1}.description`)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-purple-600 to-violet-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">{t('productOverview.visionSection.title')}</h2>
          <p className="text-2xl mb-6 leading-relaxed">
            {t('productOverview.visionSection.visionText1')} <span className="font-bold underline">{t('productOverview.visionSection.highlight1')}</span>
          </p>
          <p className="text-2xl leading-relaxed">
            {t('productOverview.visionSection.visionText2')} <span className="font-bold underline">{t('productOverview.visionSection.highlight2')}</span> {t('productOverview.visionSection.visionText3')}
          </p>
          <div className="mt-12 p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
            <p className="text-xl italic">
              "{t('productOverview.visionSection.quote')}"
            </p>
          </div>
        </div>
      </section>

      {/* Core Promise */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">{t('productOverview.corePromise.title')}</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="p-6">
              <div className="text-5xl font-bold text-purple-600 mb-3">{t('productOverview.corePromise.localPercent')}</div>
              <p className="font-semibold text-gray-900">{t('productOverview.corePromise.local')}</p>
            </div>
            <div className="p-6">
              <div className="text-5xl font-bold text-purple-600 mb-3">{t('productOverview.corePromise.privatePercent')}</div>
              <p className="font-semibold text-gray-900">{t('productOverview.corePromise.private')}</p>
            </div>
            <div className="p-6">
              <div className="text-5xl font-bold text-purple-600 mb-3">{t('productOverview.corePromise.cloudPercent')}</div>
              <p className="font-semibold text-gray-900">{t('productOverview.corePromise.cloud')}</p>
            </div>
            <div className="p-6">
              <div className="text-5xl font-bold text-purple-600 mb-3">{t('productOverview.corePromise.subscriptionsPercent')}</div>
              <p className="font-semibold text-gray-900">{t('productOverview.corePromise.subscriptions')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gradient-to-br from-purple-50 to-violet-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">{t('productOverview.cta.title')}</h2>
          <p className="text-xl text-gray-600 mb-8">
            {t('productOverview.cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/download"
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-violet-600 text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300"
            >
              {t('productOverview.cta.download')}
            </a>
            <a
              href="/product/features"
              className="px-8 py-4 bg-white border-2 border-purple-600 text-purple-600 rounded-xl font-semibold hover:bg-purple-50 transition-all duration-300"
            >
              {t('productOverview.cta.features')}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
