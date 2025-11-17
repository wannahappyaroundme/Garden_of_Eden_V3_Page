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
    <div className="min-h-screen bg-black">
      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-full mb-6">
            <Shield className="w-4 h-4 text-white" />
            <span className="text-white font-semibold">{t('legal.privacyPolicy.badge')}</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            {t('legal.privacyPolicy.title')}
          </h1>
          <p className="text-lg text-gray-400 mb-4">
            {t('legal.privacyPolicy.lastUpdated')}
          </p>
          <p className="text-xl text-gray-300 leading-relaxed">
            {t('legal.privacyPolicy.intro')}
          </p>
        </div>
      </section>

      {/* Core Philosophy */}
      <section className="py-16 px-6 bg-zinc-950 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">{t('legal.privacyPolicy.philosophy.title')}</h2>
          <p className="text-2xl leading-relaxed mb-8 text-gray-300">
            {t('legal.privacyPolicy.philosophy.description')}
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-zinc-900 rounded-xl border border-zinc-800">
              <div className="text-4xl font-bold mb-2 text-white">100%</div>
              <p className="font-semibold text-gray-300">{t('legal.privacyPolicy.philosophy.stat1')}</p>
            </div>
            <div className="p-6 bg-zinc-900 rounded-xl border border-zinc-800">
              <div className="text-4xl font-bold mb-2 text-white">0</div>
              <p className="font-semibold text-gray-300">{t('legal.privacyPolicy.philosophy.stat2')}</p>
            </div>
            <div className="p-6 bg-zinc-900 rounded-xl border border-zinc-800">
              <div className="text-4xl font-bold mb-2 text-white">0</div>
              <p className="font-semibold text-gray-300">{t('legal.privacyPolicy.philosophy.stat3')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Policy Sections */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-4xl mx-auto space-y-12">
          {sections.map((item, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start gap-6">
                <div className={`flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center`}>
                  <item.icon className="w-7 h-7 text-black" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4 text-white">
                    {t(`legal.privacyPolicy.section${index + 1}.title`)}
                  </h3>
                  <div className="space-y-3 text-gray-300">
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
      <section className="py-16 px-6 bg-zinc-950">
        <div className="max-w-4xl mx-auto">
          <div className="p-8 bg-zinc-900 rounded-2xl border border-zinc-800 shadow-lg">
            <div className="flex items-start gap-4">
              <Info className="w-8 h-8 text-white flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-bold mb-4 text-white">
                  {t('legal.privacyPolicy.notice.title')}
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  {t('legal.privacyPolicy.notice.content')}
                </p>
                <p className="text-gray-400 text-sm">
                  {t('legal.privacyPolicy.notice.contact')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">{t('legal.privacyPolicy.contact.title')}</h2>
          <p className="text-lg text-gray-400 mb-8">
            {t('legal.privacyPolicy.contact.description')}
          </p>
          <div className="inline-flex flex-col gap-2 p-6 bg-zinc-900 rounded-xl border border-zinc-800">
            <p className="text-gray-300">
              <span className="font-semibold text-white">{t('legal.privacyPolicy.contact.email')}</span> privacy@gardenofeden.app
            </p>
            <p className="text-gray-300">
              <span className="font-semibold text-white">{t('legal.privacyPolicy.contact.github')}</span> github.com/edenartlab/eden
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
