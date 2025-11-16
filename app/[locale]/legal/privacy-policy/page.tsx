import { useTranslations } from 'next-intl';
import { Shield, Lock, Eye, Database, FileText, UserCheck, Globe, Info } from 'lucide-react';

export default function PrivacyPolicyPage() {
  const t = useTranslations();

  const sections = [
    {
      icon: Lock,
      gradient: 'from-purple-500 to-violet-500',
    },
    {
      icon: Eye,
      gradient: 'from-violet-500 to-purple-500',
    },
    {
      icon: Database,
      gradient: 'from-purple-600 to-violet-600',
    },
    {
      icon: UserCheck,
      gradient: 'from-violet-600 to-purple-600',
    },
    {
      icon: Globe,
      gradient: 'from-purple-500 to-violet-500',
    },
    {
      icon: FileText,
      gradient: 'from-violet-500 to-purple-500',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-violet-50">
      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full mb-6">
            <Shield className="w-4 h-4 text-purple-600" />
            <span className="text-purple-600 font-semibold">{t('legal.privacyPolicy.badge')}</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">
            {t('legal.privacyPolicy.title')}
          </h1>
          <p className="text-lg text-gray-600 mb-4">
            {t('legal.privacyPolicy.lastUpdated')}
          </p>
          <p className="text-xl text-gray-700 leading-relaxed">
            {t('legal.privacyPolicy.intro')}
          </p>
        </div>
      </section>

      {/* Core Philosophy */}
      <section className="py-16 px-6 bg-gradient-to-br from-purple-600 to-violet-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">{t('legal.privacyPolicy.philosophy.title')}</h2>
          <p className="text-2xl leading-relaxed mb-8">
            {t('legal.privacyPolicy.philosophy.description')}
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <div className="text-4xl font-bold mb-2">100%</div>
              <p className="font-semibold">{t('legal.privacyPolicy.philosophy.stat1')}</p>
            </div>
            <div className="p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <div className="text-4xl font-bold mb-2">0</div>
              <p className="font-semibold">{t('legal.privacyPolicy.philosophy.stat2')}</p>
            </div>
            <div className="p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <div className="text-4xl font-bold mb-2">0</div>
              <p className="font-semibold">{t('legal.privacyPolicy.philosophy.stat3')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Policy Sections */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto space-y-12">
          {sections.map((item, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-violet-50 border border-purple-200 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start gap-6">
                <div className={`flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center`}>
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">
                    {t(`legal.privacyPolicy.section${index + 1}.title`)}
                  </h3>
                  <div className="space-y-3 text-gray-700">
                    <p className="leading-relaxed">
                      {t(`legal.privacyPolicy.section${index + 1}.content`)}
                    </p>
                    {index === 0 && (
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>{t('legal.privacyPolicy.section1.point1')}</li>
                        <li>{t('legal.privacyPolicy.section1.point2')}</li>
                        <li>{t('legal.privacyPolicy.section1.point3')}</li>
                      </ul>
                    )}
                    {index === 2 && (
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>{t('legal.privacyPolicy.section3.point1')}</li>
                        <li>{t('legal.privacyPolicy.section3.point2')}</li>
                        <li>{t('legal.privacyPolicy.section3.point3')}</li>
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-16 px-6 bg-gradient-to-br from-violet-50 to-purple-50">
        <div className="max-w-4xl mx-auto">
          <div className="p-8 bg-white rounded-2xl border-2 border-purple-300 shadow-lg">
            <div className="flex items-start gap-4">
              <Info className="w-8 h-8 text-purple-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-bold mb-4 text-purple-900">
                  {t('legal.privacyPolicy.notice.title')}
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t('legal.privacyPolicy.notice.content')}
                </p>
                <p className="text-gray-600 text-sm">
                  {t('legal.privacyPolicy.notice.contact')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">{t('legal.privacyPolicy.contact.title')}</h2>
          <p className="text-lg text-gray-600 mb-8">
            {t('legal.privacyPolicy.contact.description')}
          </p>
          <div className="inline-flex flex-col gap-2 p-6 bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl border border-purple-200">
            <p className="text-gray-700">
              <span className="font-semibold">{t('legal.privacyPolicy.contact.email')}</span> privacy@gardenofeden.app
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">{t('legal.privacyPolicy.contact.github')}</span> github.com/edenartlab/eden
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
