import { useTranslations } from "next-intl";
import {
  Mail,
  Github,
  MessageCircle,
  Bug,
  Lightbulb,
  HelpCircle,
  Users,
  Heart,
} from "lucide-react";

export default function ContactPage() {
  const t = useTranslations();

  const contactMethods = [
    {
      icon: Github,
      gradient: "from-white to-gray-100",
      link: "https://github.com/Garden_of_Eden_V3/eden",
    },
    {
      icon: Bug,
      gradient: "from-white to-gray-100",
      link: "https://github.com/Garden_of_Eden_V3/eden/issues",
    },
    {
      icon: Lightbulb,
      gradient: "from-white to-gray-100",
      link: "https://github.com/Garden_of_Eden_V3/eden/discussions",
    },
    {
      icon: Mail,
      gradient: "from-white to-gray-100",
      link: "mailto:bu5119@hanyang.ac.kr",
    },
  ];

  const community = [
    {
      icon: MessageCircle,
      gradient: "from-white to-gray-100",
    },
    {
      icon: Users,
      gradient: "from-white to-gray-100",
    },
    {
      icon: Heart,
      gradient: "from-white to-gray-100",
    },
  ];

  return (
    <div className="min-h-screen bg-radial-white">
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 bg-radial-white-center">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100/50 backdrop-blur-sm border border-purple-200/60 rounded-full mb-6">
            <HelpCircle className="w-4 h-4 text-purple-700" />
            <span className="text-purple-900 font-semibold">
              {t("contact.badge")}
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
            {t("contact.title")}
          </h1>
          <p className="text-xl text-gray-700">{t("contact.subtitle")}</p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 px-6 bg-radial-white-purple">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
            {t("contact.methods.title")}
          </h2>
          <p className="text-center text-gray-700 mb-12 text-lg">
            {t("contact.methods.subtitle")}
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-8 rounded-2xl bg-white/80 backdrop-blur-sm border border-purple-200/60 hover:border-purple-300 hover:shadow-xl hover:shadow-purple-200/50 transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div
                    className={`flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <method.icon className="w-8 h-8 text-purple-700" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2 text-gray-900 group-hover:text-purple-700 transition-colors">
                      {t(`contact.methods.method${index + 1}.title`)}
                    </h3>
                    <p className="text-gray-700 mb-3">
                      {t(`contact.methods.method${index + 1}.description`)}
                    </p>
                    <p className="text-sm text-purple-700 font-semibold">
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
      <section className="py-16 px-6 bg-radial-white-multi">
        <div className="max-w-4xl mx-auto">
          <div className="p-8 bg-white/80 backdrop-blur-sm rounded-2xl border border-purple-200/60 shadow-lg">
            <div className="flex items-start gap-4">
              <HelpCircle className="w-8 h-8 text-purple-700 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  {t("contact.responseTime.title")}
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t("contact.responseTime.description")}
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <span className="text-purple-600">•</span>
                    {t("contact.responseTime.github")}
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-purple-600">•</span>
                    {t("contact.responseTime.email")}
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-purple-600">•</span>
                    {t("contact.responseTime.community")}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community */}
      <section className="py-20 px-6 bg-radial-white-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
            {t("contact.community.title")}
          </h2>
          <p className="text-center text-gray-700 mb-12 text-lg">
            {t("contact.community.subtitle")}
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {community.map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-white/80 backdrop-blur-sm border border-purple-200/60 text-center hover:shadow-xl hover:shadow-purple-200/50 hover:border-purple-300 transition-all duration-300"
              >
                <div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center mx-auto mb-4 animate-float`}
                >
                  <item.icon className="w-8 h-8 text-purple-700" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">
                  {t(`contact.community.item${index + 1}.title`)}
                </h3>
                <p className="text-sm text-gray-700">
                  {t(`contact.community.item${index + 1}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-radial-white-purple">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            {t("contact.cta.title")}
          </h2>
          <p className="text-xl mb-8 leading-relaxed text-gray-700">
            {t("contact.cta.description")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/Garden_of_Eden_V3/eden"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-violet-600 text-white rounded-xl font-semibold hover:from-purple-700 hover:to-violet-700 hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-300 hover:scale-105"
            >
              {t("contact.cta.github")}
            </a>
            <a
              href="/faq"
              className="px-8 py-4 bg-transparent border-2 border-purple-600 text-purple-700 rounded-xl font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300 hover:scale-105"
            >
              {t("contact.cta.faq")}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
