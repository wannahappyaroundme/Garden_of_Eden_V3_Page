import { useTranslations } from 'next-intl';
import { Shield, Lock, Eye, Database, FileText, UserCheck, Globe, Info } from 'lucide-react';

export default function PrivacyPolicyPage() {
  const t = useTranslations();

  const sections = [
    {
      icon: Lock,
      gradient: 'from-white to-gray-100',
    },
    {
      icon: Eye,
      gradient: 'from-white to-gray-100',
    },
    {
      icon: Database,
      gradient: 'from-white to-gray-100',
    },
    {
      icon: UserCheck,
      gradient: 'from-white to-gray-100',
    },
    {
      icon: Globe,
      gradient: 'from-white to-gray-100',
    },
    {
      icon: FileText,
      gradient: 'from-white to-gray-100',
    },
  ];

  return (
    <div className="min-h-screen bg-radial-white">
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 bg-radial-white-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100/50 backdrop-blur-sm border border-purple-200/60 rounded-full mb-6">
            <Shield className="w-4 h-4 text-purple-700" />
            <span className="text-purple-900 font-semibold">{t('legal.privacyPolicy.badge')}</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-violet-600 to-purple-500 bg-clip-text text-transparent">
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
      <section className="py-16 px-6 bg-radial-white-purple">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-violet-600 to-purple-500 bg-clip-text text-transparent">{t('legal.privacyPolicy.philosophy.title')}</h2>
          <p className="text-2xl leading-relaxed mb-8 text-gray-700">
            {t('legal.privacyPolicy.philosophy.description')}
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-white/80 backdrop-blur-sm rounded-xl border border-purple-200/60">
              <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">100%</div>
              <p className="font-semibold text-gray-700">{t('legal.privacyPolicy.philosophy.stat1')}</p>
            </div>
            <div className="p-6 bg-white/80 backdrop-blur-sm rounded-xl border border-purple-200/60">
              <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">0</div>
              <p className="font-semibold text-gray-700">{t('legal.privacyPolicy.philosophy.stat2')}</p>
            </div>
            <div className="p-6 bg-white/80 backdrop-blur-sm rounded-xl border border-purple-200/60">
              <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">0</div>
              <p className="font-semibold text-gray-700">{t('legal.privacyPolicy.philosophy.stat3')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Policy Sections */}
      <section className="py-20 px-6 bg-radial-white-multi">
        <div className="max-w-4xl mx-auto space-y-12">
          {sections.map((item, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-white/80 backdrop-blur-sm border border-purple-200/60 hover:border-purple-300 hover:shadow-xl hover:shadow-purple-200/50 transition-all duration-300"
            >
              <div className="flex items-start gap-6">
                <div className={`flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center`}>
                  <item.icon className="w-7 h-7 text-purple-700" />
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
      <section className="py-16 px-6 bg-radial-white-center">
        <div className="max-w-4xl mx-auto">
          <div className="p-8 bg-white/80 backdrop-blur-sm rounded-2xl border border-purple-200/60 shadow-lg">
            <div className="flex items-start gap-4">
              <Info className="w-8 h-8 text-purple-700 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
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
      <section className="py-20 px-6 bg-radial-white-purple">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-violet-600 to-purple-500 bg-clip-text text-transparent">{t('legal.privacyPolicy.contact.title')}</h2>
          <p className="text-lg text-gray-700 mb-8">
            {t('legal.privacyPolicy.contact.description')}
          </p>
          <div className="inline-flex flex-col gap-2 p-6 bg-white/80 backdrop-blur-sm rounded-xl border border-purple-200/60">
            <p className="text-gray-700">
              <span className="font-semibold text-gray-900">{t('legal.privacyPolicy.contact.email')}</span> privacy@gardenofeden.app
            </p>
            <p className="text-gray-700">
              <span className="font-semibold text-gray-900">{t('legal.privacyPolicy.contact.github')}</span> github.com/edenartlab/eden
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
