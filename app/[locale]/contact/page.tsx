import { useTranslations } from 'next-intl';
import { Mail, Github, MessageCircle, Bug, Lightbulb, HelpCircle, Users, Heart } from 'lucide-react';

export default function ContactPage() {
  const t = useTranslations();

  const contactMethods = [
    {
      icon: Github,
      gradient: 'from-purple-500 to-violet-500',
      link: 'https://github.com/edenartlab/eden',
    },
    {
      icon: Bug,
      gradient: 'from-violet-500 to-purple-500',
      link: 'https://github.com/edenartlab/eden/issues',
    },
    {
      icon: Lightbulb,
      gradient: 'from-purple-600 to-violet-600',
      link: 'https://github.com/edenartlab/eden/discussions',
    },
    {
      icon: Mail,
      gradient: 'from-violet-600 to-purple-600',
      link: 'mailto:support@gardenofeden.app',
    },
  ];

  const community = [
    {
      icon: MessageCircle,
      gradient: 'from-purple-500 to-violet-500',
    },
    {
      icon: Users,
      gradient: 'from-violet-500 to-purple-500',
    },
    {
      icon: Heart,
      gradient: 'from-purple-600 to-violet-600',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-violet-50">
      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full mb-6">
            <HelpCircle className="w-4 h-4 text-purple-600" />
            <span className="text-purple-600 font-semibold">{t('contact.badge')}</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">
            {t('contact.title')}
          </h1>
          <p className="text-xl text-gray-600">
            {t('contact.subtitle')}
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">{t('contact.methods.title')}</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            {t('contact.methods.subtitle')}
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-violet-50 border border-purple-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className={`flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br ${method.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <method.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2 text-gray-900 group-hover:text-purple-600 transition-colors">
                      {t(`contact.methods.method${index + 1}.title`)}
                    </h3>
                    <p className="text-gray-600 mb-3">
                      {t(`contact.methods.method${index + 1}.description`)}
                    </p>
                    <p className="text-sm text-purple-600 font-semibold">
                      {t(`contact.methods.method${index + 1}.action`)} →
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Response Time */}
      <section className="py-16 px-6 bg-gradient-to-br from-violet-50 to-purple-50">
        <div className="max-w-4xl mx-auto">
          <div className="p-8 bg-white rounded-2xl border-2 border-purple-300 shadow-lg">
            <div className="flex items-start gap-4">
              <HelpCircle className="w-8 h-8 text-purple-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-bold mb-4 text-purple-900">
                  {t('contact.responseTime.title')}
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t('contact.responseTime.description')}
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <span className="text-purple-600">•</span>
                    {t('contact.responseTime.github')}
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-purple-600">•</span>
                    {t('contact.responseTime.email')}
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-purple-600">•</span>
                    {t('contact.responseTime.community')}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">{t('contact.community.title')}</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            {t('contact.community.subtitle')}
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {community.map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-gradient-to-br from-purple-50 to-violet-50 border border-purple-200 text-center hover:shadow-lg transition-all duration-300"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mx-auto mb-4`}>
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2">{t(`contact.community.item${index + 1}.title`)}</h3>
                <p className="text-sm text-gray-600">{t(`contact.community.item${index + 1}.description`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gradient-to-br from-purple-600 to-violet-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">{t('contact.cta.title')}</h2>
          <p className="text-xl mb-8 leading-relaxed">
            {t('contact.cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/edenartlab/eden"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white text-purple-600 rounded-xl font-semibold hover:shadow-xl transition-all duration-300"
            >
              {t('contact.cta.github')}
            </a>
            <a
              href="/faq"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white text-white rounded-xl font-semibold hover:bg-white/20 transition-all duration-300"
            >
              {t('contact.cta.faq')}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
