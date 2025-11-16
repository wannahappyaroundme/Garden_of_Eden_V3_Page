import { useTranslations } from 'next-intl';
import { Shield, Lock, Eye, Server, Database, Key } from 'lucide-react';

export default function PrivacyPage() {
  const t = useTranslations();

  const privacyPrinciples = [
    { icon: Lock },
    { icon: Eye },
    { icon: Database },
    { icon: Server },
    { icon: Key },
    { icon: Shield },
  ];

  const principleKeys = [
    'whyEdenPrivacy.principles.principle1',
    'whyEdenPrivacy.principles.principle2',
    'whyEdenPrivacy.principles.principle3',
    'whyEdenPrivacy.principles.principle4',
    'whyEdenPrivacy.principles.principle5',
    'whyEdenPrivacy.principles.principle6',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-violet-50">
      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full mb-6">
            <Shield className="w-4 h-4 text-purple-600" />
            <span className="text-purple-600 font-semibold">{t('whyEdenPrivacy.badge')}</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">
            {t('whyEdenPrivacy.title')}
            <br />
            {t('whyEdenPrivacy.subtitle')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('whyEdenPrivacy.description')}
          </p>
        </div>
      </section>

      {/* Privacy Principles */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">{t('whyEdenPrivacy.principles.title')}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {privacyPrinciples.map((item, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-violet-50 border border-purple-200 hover:shadow-xl transition-all"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-violet-500 flex items-center justify-center mb-6">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{t(`${principleKeys[index]}.title`)}</h3>
                <p className="text-gray-600">{t(`${principleKeys[index]}.description`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 px-6 bg-gradient-to-br from-purple-600 to-violet-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">{t('whyEdenPrivacy.philosophy.title')}</h2>
          <p className="text-2xl leading-relaxed">
            {t('whyEdenPrivacy.philosophy.description')}
          </p>
        </div>
      </section>
    </div>
  );
}
