'use client';

import { useTranslations } from 'next-intl';
import { HelpCircle, Plus, Minus } from 'lucide-react';
import { useState } from 'react';

export default function FAQPage() {
  const t = useTranslations();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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
      icon: '🌟',
      faqs: faqs.slice(0, 3),
    },
    {
      title: 'faq.categories.technical',
      icon: '⚙️',
      faqs: faqs.slice(3, 6),
    },
    {
      title: 'faq.categories.privacy',
      icon: '🔒',
      faqs: faqs.slice(6, 10),
    },
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-full mb-6">
            <HelpCircle className="w-4 h-4 text-white" />
            <span className="text-white font-semibold">{t('faq.badge')}</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            {t('faq.title')}
          </h1>
          <p className="text-xl text-gray-400">
            {t('faq.subtitle')}
          </p>
        </div>
      </section>

      {/* FAQ Categories */}
      {categories.map((category, catIndex) => (
        <section key={catIndex} className={`py-16 px-6 ${catIndex % 2 === 0 ? 'bg-zinc-950' : 'bg-black'}`}>
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-4xl">{category.icon}</span>
              <h2 className="text-3xl font-bold text-white">{t(category.title)}</h2>
            </div>
            <div className="space-y-4">
              {category.faqs.map((faq, index) => {
                const globalIndex = catIndex * 10 + index;
                const isOpen = openIndex === globalIndex;

                return (
                  <div
                    key={index}
                    className="rounded-xl border border-zinc-800 bg-zinc-900 overflow-hidden hover:shadow-lg hover:border-zinc-700 transition-all duration-300"
                  >
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : globalIndex)}
                      className="w-full p-6 text-left flex items-center justify-between gap-4 group"
                    >
                      <h3 className="text-lg font-semibold text-white group-hover:text-gray-300 transition-colors">
                        {t(faq.question)}
                      </h3>
                      <div className="flex-shrink-0">
                        {isOpen ? (
                          <Minus className="w-5 h-5 text-white" />
                        ) : (
                          <Plus className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                        )}
                      </div>
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-6">
                        <div className="pt-2 border-t border-zinc-800">
                          <p className="text-gray-300 leading-relaxed mt-4">
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
      <section className="py-20 px-6 bg-zinc-950 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">{t('faq.cta.title')}</h2>
          <p className="text-xl mb-8 leading-relaxed text-gray-300">
            {t('faq.cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/download"
              className="px-8 py-4 bg-white text-black rounded-xl font-semibold hover:shadow-xl hover:bg-gray-200 transition-all duration-300"
            >
              {t('faq.cta.download')}
            </a>
            <a
              href="/contact"
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-black transition-all duration-300"
            >
              {t('faq.cta.contact')}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
