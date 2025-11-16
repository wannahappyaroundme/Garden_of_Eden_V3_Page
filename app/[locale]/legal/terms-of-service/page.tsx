import { useTranslations } from 'next-intl';
import { FileText, CheckCircle, AlertTriangle, Scale, Users, Shield, Zap, Ban } from 'lucide-react';

export default function TermsOfServicePage() {
  const t = useTranslations();

  const sections = [
    {
      icon: CheckCircle,
      gradient: 'from-purple-500 to-violet-500',
    },
    {
      icon: Scale,
      gradient: 'from-violet-500 to-purple-500',
    },
    {
      icon: Users,
      gradient: 'from-purple-600 to-violet-600',
    },
    {
      icon: Shield,
      gradient: 'from-violet-600 to-purple-600',
    },
    {
      icon: Zap,
      gradient: 'from-purple-500 to-violet-500',
    },
    {
      icon: Ban,
      gradient: 'from-violet-500 to-purple-500',
    },
    {
      icon: AlertTriangle,
      gradient: 'from-purple-600 to-violet-600',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-violet-50">
      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full mb-6">
            <FileText className="w-4 h-4 text-purple-600" />
            <span className="text-purple-600 font-semibold">{t('legal.termsOfService.badge')}</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">
            {t('legal.termsOfService.title')}
          </h1>
          <p className="text-lg text-gray-600 mb-4">
            {t('legal.termsOfService.lastUpdated')}
          </p>
          <p className="text-xl text-gray-700 leading-relaxed">
            {t('legal.termsOfService.intro')}
          </p>
        </div>
      </section>

      {/* Key Points */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">{t('legal.termsOfService.keyPoints.title')}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-gradient-to-br from-purple-50 to-violet-50 border border-purple-200">
              <div className="text-3xl mb-3">✅</div>
              <h3 className="font-bold mb-2">{t('legal.termsOfService.keyPoints.point1.title')}</h3>
              <p className="text-sm text-gray-600">{t('legal.termsOfService.keyPoints.point1.description')}</p>
            </div>
            <div className="p-6 rounded-xl bg-gradient-to-br from-purple-50 to-violet-50 border border-purple-200">
              <div className="text-3xl mb-3">🔒</div>
              <h3 className="font-bold mb-2">{t('legal.termsOfService.keyPoints.point2.title')}</h3>
              <p className="text-sm text-gray-600">{t('legal.termsOfService.keyPoints.point2.description')}</p>
            </div>
            <div className="p-6 rounded-xl bg-gradient-to-br from-purple-50 to-violet-50 border border-purple-200">
              <div className="text-3xl mb-3">⚖️</div>
              <h3 className="font-bold mb-2">{t('legal.termsOfService.keyPoints.point3.title')}</h3>
              <p className="text-sm text-gray-600">{t('legal.termsOfService.keyPoints.point3.description')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Terms Sections */}
      <section className="py-20 px-6 bg-gradient-to-br from-violet-50 to-purple-50">
        <div className="max-w-4xl mx-auto space-y-8">
          {sections.map((item, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-white border border-purple-200 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start gap-6">
                <div className={`flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center`}>
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">
                    {t(`legal.termsOfService.section${index + 1}.title`)}
                  </h3>
                  <div className="space-y-3 text-gray-700">
                    <p className="leading-relaxed">
                      {t(`legal.termsOfService.section${index + 1}.content`)}
                    </p>
                    {index === 0 && (
                      <ul className="list-disc list-inside space-y-2 ml-4 text-gray-600">
                        <li>{t('legal.termsOfService.section1.point1')}</li>
                        <li>{t('legal.termsOfService.section1.point2')}</li>
                        <li>{t('legal.termsOfService.section1.point3')}</li>
                      </ul>
                    )}
                    {index === 2 && (
                      <ul className="list-disc list-inside space-y-2 ml-4 text-gray-600">
                        <li>{t('legal.termsOfService.section3.point1')}</li>
                        <li>{t('legal.termsOfService.section3.point2')}</li>
                        <li>{t('legal.termsOfService.section3.point3')}</li>
                      </ul>
                    )}
                    {index === 5 && (
                      <ul className="list-disc list-inside space-y-2 ml-4 text-gray-600">
                        <li>{t('legal.termsOfService.section6.point1')}</li>
                        <li>{t('legal.termsOfService.section6.point2')}</li>
                        <li>{t('legal.termsOfService.section6.point3')}</li>
                        <li>{t('legal.termsOfService.section6.point4')}</li>
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Important Disclaimer */}
      <section className="py-16 px-6 bg-gradient-to-br from-purple-600 to-violet-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">{t('legal.termsOfService.disclaimer.title')}</h2>
          <p className="text-xl leading-relaxed mb-8">
            {t('legal.termsOfService.disclaimer.content')}
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <h3 className="font-bold text-lg mb-2">{t('legal.termsOfService.disclaimer.warranty.title')}</h3>
              <p className="text-sm">{t('legal.termsOfService.disclaimer.warranty.description')}</p>
            </div>
            <div className="p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <h3 className="font-bold text-lg mb-2">{t('legal.termsOfService.disclaimer.liability.title')}</h3>
              <p className="text-sm">{t('legal.termsOfService.disclaimer.liability.description')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">{t('legal.termsOfService.contact.title')}</h2>
          <p className="text-lg text-gray-600 mb-8">
            {t('legal.termsOfService.contact.description')}
          </p>
          <div className="inline-flex flex-col gap-2 p-6 bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl border border-purple-200">
            <p className="text-gray-700">
              <span className="font-semibold">{t('legal.termsOfService.contact.email')}</span> legal@gardenofeden.app
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">{t('legal.termsOfService.contact.github')}</span> github.com/edenartlab/eden
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
