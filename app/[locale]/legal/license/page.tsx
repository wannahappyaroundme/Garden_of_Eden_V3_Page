import { useTranslations } from 'next-intl';
import { FileCode, GitBranch, Users, Heart, Zap, Globe, Shield, CheckCircle } from 'lucide-react';

export default function LicensePage() {
  const t = useTranslations();

  const permissions = [
    {
      icon: CheckCircle,
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      icon: GitBranch,
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Users,
      gradient: 'from-purple-500 to-violet-500',
    },
    {
      icon: Zap,
      gradient: 'from-orange-500 to-amber-500',
    },
  ];

  const limitations = [
    {
      icon: Shield,
      gradient: 'from-zinc-700 to-zinc-800',
    },
    {
      icon: Globe,
      gradient: 'from-zinc-700 to-zinc-800',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-950 to-zinc-900">
      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-800 rounded-full mb-6">
            <FileCode className="w-4 h-4 text-white" />
            <span className="text-white font-semibold">{t('legal.license.badge')}</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-100 bg-clip-text text-transparent">
            {t('legal.license.title')}
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed mb-8">
            {t('legal.license.intro')}
          </p>
          <div className="p-6 bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-xl border border-zinc-800">
            <p className="text-lg font-semibold text-white mb-2">
              {t('legal.license.licenseType')}
            </p>
            <p className="text-gray-300">
              {t('legal.license.licenseDescription')}
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-16 px-6 bg-gradient-to-br from-zinc-800 to-zinc-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <Heart className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-6">{t('legal.license.philosophy.title')}</h2>
          <p className="text-2xl leading-relaxed mb-8">
            {t('legal.license.philosophy.description')}
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <div className="text-3xl mb-3">🌍</div>
              <p className="font-semibold">{t('legal.license.philosophy.value1')}</p>
            </div>
            <div className="p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <div className="text-3xl mb-3">🔓</div>
              <p className="font-semibold">{t('legal.license.philosophy.value2')}</p>
            </div>
            <div className="p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <div className="text-3xl mb-3">🤝</div>
              <p className="font-semibold">{t('legal.license.philosophy.value3')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Permissions */}
      <section className="py-20 px-6 bg-zinc-950">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-white">{t('legal.license.permissions.title')}</h2>
          <p className="text-center text-gray-400 mb-12 text-lg">
            {t('legal.license.permissions.subtitle')}
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {permissions.map((item, index) => (
              <div
                key={index}
                className="group relative p-6 rounded-xl bg-gradient-to-br from-zinc-900 to-zinc-800 border border-zinc-800 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br ${item.gradient} flex items-center justify-center`}>
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-2 text-white">
                      {t(`legal.license.permissions.permission${index + 1}.title`)}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {t(`legal.license.permissions.permission${index + 1}.description`)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conditions */}
      <section className="py-20 px-6 bg-gradient-to-br from-zinc-900 to-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-white">{t('legal.license.conditions.title')}</h2>
          <p className="text-center text-gray-400 mb-12 text-lg">
            {t('legal.license.conditions.subtitle')}
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {limitations.map((item, index) => (
              <div
                key={index}
                className="group relative p-6 rounded-xl bg-zinc-950 border border-zinc-800 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br ${item.gradient} flex items-center justify-center`}>
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-2 text-white">
                      {t(`legal.license.conditions.condition${index + 1}.title`)}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {t(`legal.license.conditions.condition${index + 1}.description`)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full License Text */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-white">{t('legal.license.fullText.title')}</h2>
          <div className="p-8 bg-zinc-950 rounded-xl border border-zinc-800 font-mono text-sm space-y-4 overflow-x-auto">
            <p className="font-bold text-white">{t('legal.license.fullText.mitTitle')}</p>
            <p className="text-gray-300">{t('legal.license.fullText.copyright')}</p>
            <p className="text-gray-300 leading-relaxed">{t('legal.license.fullText.permissionText')}</p>
            <p className="text-gray-300 leading-relaxed">{t('legal.license.fullText.warrantyText')}</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gradient-to-br from-zinc-800 to-zinc-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">{t('legal.license.cta.title')}</h2>
          <p className="text-xl mb-8 leading-relaxed">
            {t('legal.license.cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/edenartlab/eden"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white text-black rounded-xl font-semibold hover:shadow-xl transition-all duration-300"
            >
              {t('legal.license.cta.viewSource')}
            </a>
            <a
              href="/resources/documentation"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white text-white rounded-xl font-semibold hover:bg-white/20 transition-all duration-300"
            >
              {t('legal.license.cta.documentation')}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
