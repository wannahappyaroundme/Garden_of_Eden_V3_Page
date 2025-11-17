import { useTranslations } from 'next-intl';
import { Mail, Github, MessageCircle, Bug, Lightbulb, HelpCircle, Users, Heart } from 'lucide-react';

export default function ContactPage() {
  const t = useTranslations();

  const contactMethods = [
    {
      icon: Github,
      gradient: 'from-white to-gray-100',
      link: 'https://github.com/edenartlab/eden',
    },
    {
      icon: Bug,
      gradient: 'from-white to-gray-100',
      link: 'https://github.com/edenartlab/eden/issues',
    },
    {
      icon: Lightbulb,
      gradient: 'from-white to-gray-100',
      link: 'https://github.com/edenartlab/eden/discussions',
    },
    {
      icon: Mail,
      gradient: 'from-white to-gray-100',
      link: 'mailto:support@gardenofeden.app',
    },
  ];

  const community = [
    {
      icon: MessageCircle,
      gradient: 'from-white to-gray-100',
    },
    {
      icon: Users,
      gradient: 'from-white to-gray-100',
    },
    {
      icon: Heart,
      gradient: 'from-white to-gray-100',
    },
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-full mb-6">
            <HelpCircle className="w-4 h-4 text-white" />
            <span className="text-white font-semibold">{t('contact.badge')}</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            {t('contact.title')}
          </h1>
          <p className="text-xl text-gray-400">
            {t('contact.subtitle')}
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 px-6 bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-white">{t('contact.methods.title')}</h2>
          <p className="text-center text-gray-400 mb-12 text-lg">
            {t('contact.methods.subtitle')}
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-8 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className={`flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br ${method.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <method.icon className="w-8 h-8 text-black" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-gray-300 transition-colors">
                      {t(`contact.methods.method${index + 1}.title`)}
                    </h3>
                    <p className="text-gray-400 mb-3">
                      {t(`contact.methods.method${index + 1}.description`)}
                    </p>
                    <p className="text-sm text-white font-semibold">
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
      <section className="py-16 px-6 bg-black">
        <div className="max-w-4xl mx-auto">
          <div className="p-8 bg-zinc-900 rounded-2xl border border-zinc-800 shadow-lg">
            <div className="flex items-start gap-4">
              <HelpCircle className="w-8 h-8 text-white flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-bold mb-4 text-white">
                  {t('contact.responseTime.title')}
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  {t('contact.responseTime.description')}
                </p>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-center gap-2">
                    <span className="text-white">•</span>
                    {t('contact.responseTime.github')}
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-white">•</span>
                    {t('contact.responseTime.email')}
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-white">•</span>
                    {t('contact.responseTime.community')}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community */}
      <section className="py-20 px-6 bg-zinc-950">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-white">{t('contact.community.title')}</h2>
          <p className="text-center text-gray-400 mb-12 text-lg">
            {t('contact.community.subtitle')}
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {community.map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-zinc-900 border border-zinc-800 text-center hover:shadow-lg hover:border-zinc-700 transition-all duration-300"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mx-auto mb-4`}>
                  <item.icon className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-white">{t(`contact.community.item${index + 1}.title`)}</h3>
                <p className="text-sm text-gray-400">{t(`contact.community.item${index + 1}.description`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">{t('contact.cta.title')}</h2>
          <p className="text-xl mb-8 leading-relaxed text-gray-300">
            {t('contact.cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/edenartlab/eden"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white text-black rounded-xl font-semibold hover:shadow-xl hover:bg-gray-200 transition-all duration-300"
            >
              {t('contact.cta.github')}
            </a>
            <a
              href="/faq"
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-black transition-all duration-300"
            >
              {t('contact.cta.faq')}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
