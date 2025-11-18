'use client';

import { useTranslations } from 'next-intl';
import { HelpCircle, Plus, Minus, Star, Settings, Lock } from 'lucide-react';
import { useState } from 'react';
import ComingSoonModal from "@/components/ComingSoonModal";

export default function FAQPage() {
  const t = useTranslations();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const faqs = [
    { question: 'faq.q1', answer: 'faq.a1' },
    { question: 'faq.q2', answer: 'faq.a2' },
    { question: 'faq.q3', answer: 'faq.a3' },
    { question: 'faq.q4', answer: 'faq.a4' },
    { question: 'faq.q5', answer: 'faq.a5' },
    { question: 'faq.q6', answer: 'faq.a6' },
    { question: 'faq.q7', answer: 'faq.a7' },
    { question: 'faq.q8', answer: 'faq.a8' },
    { question: 'faq.q9', answer: 'faq.a9' },
    { question: 'faq.q10', answer: 'faq.a10' },
  ];

  const categories = [
    {
      title: 'faq.categories.general',
      icon: Star,
      faqs: faqs.slice(0, 3),
    },
    {
      title: 'faq.categories.technical',
      icon: Settings,
      faqs: faqs.slice(3, 6),
    },
    {
      title: 'faq.categories.privacy',
      icon: Lock,
      faqs: faqs.slice(6, 10),
    },
  ];

  return (
    <div className="min-h-screen bg-radial-white">
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 bg-radial-white-center">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100/50 backdrop-blur-sm border border-purple-200/60 rounded-full mb-6">
            <HelpCircle className="w-4 h-4 text-purple-700" />
            <span className="text-purple-900 font-semibold">{t('faq.badge')}</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
            {t('faq.title')}
          </h1>
          <p className="text-xl text-gray-700">
            {t('faq.subtitle')}
          </p>
        </div>
      </section>

      {/* FAQ Categories */}
      {categories.map((category, catIndex) => (
        <section key={catIndex} className={`py-16 px-6 ${catIndex % 2 === 0 ? 'bg-radial-white-purple' : 'bg-radial-white-multi'}`}>
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center animate-float">
                <category.icon className="w-7 h-7 text-purple-700" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">{t(category.title)}</h2>
            </div>
            <div className="space-y-4">
              {category.faqs.map((faq, index) => {
                const globalIndex = catIndex * 10 + index;
                const isOpen = openIndex === globalIndex;

                return (
                  <div
                    key={index}
                    className="rounded-xl border border-purple-200/60 bg-white/80 backdrop-blur-sm overflow-hidden hover:shadow-xl hover:shadow-purple-200/50 hover:border-purple-300 transition-all duration-300"
                  >
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : globalIndex)}
                      className="w-full p-6 text-left flex items-center justify-between gap-4 group"
                    >
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-purple-700 transition-colors">
                        {t(faq.question)}
                      </h3>
                      <div className="flex-shrink-0">
                        {isOpen ? (
                          <Minus className="w-5 h-5 text-purple-600" />
                        ) : (
                          <Plus className="w-5 h-5 text-purple-600 group-hover:text-purple-700 transition-colors" />
                        )}
                      </div>
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-6">
                        <div className="pt-2 border-t border-purple-200/60">
                          <p className="text-gray-700 leading-relaxed mt-4">
                            {t(faq.answer)}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-20 px-6 bg-radial-white-center">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">{t('faq.cta.title')}</h2>
          <p className="text-xl mb-8 leading-relaxed text-gray-700">
            {t('faq.cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-violet-600 text-white rounded-xl font-semibold hover:from-purple-700 hover:to-violet-700 hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-300 hover:scale-105"
            >
              {t('faq.cta.download')}
            </button>
            <a
              href="/contact"
              className="px-8 py-4 bg-transparent border-2 border-purple-600 text-purple-700 rounded-xl font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300 hover:scale-105"
            >
              {t('faq.cta.contact')}
            </a>
          </div>
        </div>
      </section>

      {/* Coming Soon Modal */}
      <ComingSoonModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
