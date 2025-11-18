"use client";

import { useState } from "react";
import { useTranslations } from 'next-intl';
import { Code, Database, Cpu, Shield, Zap, Globe, Layers, Box } from 'lucide-react';
import ComingSoonModal from "@/components/ComingSoonModal";

export default function TechnologyPage() {
  const t = useTranslations();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const techStack = {
    core: [
      {
        category: 'Framework',
        icon: Box,
        items: [
          { name: 'Tauri 2.9', description: 'Rust backend + React frontend', highlight: '7.1MB build (vs 285MB Electron)' },
        ],
      },
      {
        category: 'Language',
        icon: Code,
        items: [
          { name: 'TypeScript 5.3+', description: 'Strict mode', highlight: 'Type-safe development' },
        ],
      },
      {
        category: 'State Management',
        icon: Database,
        items: [
          { name: 'Zustand', description: 'Lightweight, persistent', highlight: 'Simple & fast' },
        ],
      },
    ],
    ai: [
      {
        category: 'LLM',
        icon: Cpu,
        items: [
          { name: 'qwen2.5:7b', description: '7B parameters, Q4_K_M quantization', highlight: '4.7GB model size' },
          { name: 'Llama 3.2', description: 'Alternative model option', highlight: '3B/7B variants' },
          { name: 'Phi-3', description: 'Microsoft small language model', highlight: 'Fast inference' },
        ],
      },
      {
        category: 'Runtime',
        icon: Zap,
        items: [
          { name: 'Ollama', description: 'Local model runtime', highlight: 'Metal acceleration on macOS' },
        ],
      },
      {
        category: 'Speech & Vision',
        icon: Globe,
        items: [
          { name: 'Whisper-small', description: 'Speech-to-text via Xenova/transformers', highlight: 'Korean + English' },
          { name: 'LLaVA 7B', description: 'Vision model for screen analysis', highlight: 'Privacy-first image processing' },
        ],
      },
      {
        category: 'Embeddings',
        icon: Layers,
        items: [
          { name: 'TF-IDF', description: '128-dim vectors', highlight: 'Fast retrieval' },
          { name: 'BGE-M3 (planned)', description: 'Advanced embeddings', highlight: 'Better context understanding' },
        ],
      },
    ],
    backend: [
      {
        category: 'Database',
        icon: Database,
        items: [
          { name: 'SQLite', description: 'via rusqlite', highlight: 'AES-256 encrypted' },
        ],
      },
      {
        category: 'Async Runtime',
        icon: Zap,
        items: [
          { name: 'Tokio', description: 'Rust async runtime', highlight: 'High performance' },
        ],
      },
      {
        category: 'HTTP Client',
        icon: Globe,
        items: [
          { name: 'reqwest', description: 'For Ollama API', highlight: 'Async HTTP' },
        ],
      },
    ],
    frontend: [
      {
        category: 'UI Framework',
        icon: Box,
        items: [
          { name: 'React 18', description: 'Latest features', highlight: 'Concurrent rendering' },
          { name: 'shadcn/ui', description: 'Headless, accessible', highlight: 'Beautiful components' },
        ],
      },
      {
        category: 'Styling',
        icon: Layers,
        items: [
          { name: 'Tailwind CSS', description: 'Utility-first', highlight: 'Rapid development' },
        ],
      },
      {
        category: 'Markdown & i18n',
        icon: Code,
        items: [
          { name: 'react-markdown', description: 'With rehype-highlight', highlight: 'Code syntax highlighting' },
          { name: 'i18next', description: 'Internationalization', highlight: 'Korean + English' },
        ],
      },
    ],
  };

  const performance = [
    { metric: 'Response Time', value: '2-4s', note: 'qwen2.5:7b on M1/M2' },
    { metric: 'Memory Usage', value: '10-14GB', note: 'Ollama ~12GB + App ~2GB' },
    { metric: 'Startup Time', value: '<2s', note: 'Warm start, <6s cold start' },
    { metric: 'Model Size', value: '4.7GB', note: 'Q4_K_M quantization' },
    { metric: 'Build Size', value: '7.1MB', note: 'Tauri (vs 285MB Electron)' },
    { metric: 'Database', value: '<10MB', note: 'Grows with conversations' },
  ];

  const architecture = [
    {
      layer: 'User Interface',
      tech: 'React + Tailwind CSS',
      description: 'KakaoTalk-style chat, voice input, screen context',
      color: 'from-white to-gray-100',
    },
    {
      layer: 'Application Logic',
      tech: 'TypeScript + Zustand',
      description: 'State management, persona system, learning optimization',
      color: 'from-white to-gray-100',
    },
    {
      layer: 'IPC Bridge',
      tech: 'Tauri Commands',
      description: 'Type-safe communication between frontend and backend',
      color: 'from-white to-gray-100',
    },
    {
      layer: 'Backend Services',
      tech: 'Rust + Tokio',
      description: 'File ops, Git integration, screen capture, webhooks',
      color: 'from-white to-gray-100',
    },
    {
      layer: 'AI Runtime',
      tech: 'Ollama + Whisper + LLaVA',
      description: 'Local LLM inference, speech-to-text, vision',
      color: 'from-white to-gray-100',
    },
    {
      layer: 'Data Layer',
      tech: 'SQLite + AES-256',
      description: 'Encrypted conversations, persona settings, RAG memory',
      color: 'from-white to-gray-100',
    },
  ];

  return (
    <div className="min-h-screen bg-radial-white">
      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full mb-6">
            <Cpu className="w-4 h-4 text-gray-900" />
            <span className="text-gray-900 font-semibold">{t('productTechnology.badge')}</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
            {t('productTechnology.title')}
            <br />
            {t('productTechnology.subtitle')}
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            {t('productTechnology.description')}
          </p>
        </div>
      </section>

      {/* Architecture Layers */}
      <section className="py-20 px-6 bg-radial-white-purple">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">{t('productTechnology.architecture.title')}</h2>
          <div className="space-y-4">
            {architecture.map((layer, index) => (
              <div
                key={index}
                className="group relative p-6 rounded-xl bg-white/80 backdrop-blur-sm border border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-300"
              >
                <div className="relative flex items-center gap-6">
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${layer.color} flex items-center justify-center flex-shrink-0 border border-gray-200`}>
                    <Layers className="w-8 h-8 text-gray-900" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-1 text-gray-900">{layer.layer}</h3>
                    <p className="text-sm text-gray-900 font-semibold mb-2">{layer.tech}</p>
                    <p className="text-gray-600">{layer.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack - Core */}
      <section className="py-20 px-6 bg-radial-white-multi">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">{t('productTechnology.core.title')}</h2>
          <p className="text-center text-gray-700 mb-16">{t('productTechnology.core.subtitle')}</p>
          <div className="grid md:grid-cols-3 gap-8">
            {techStack.core.map((section, idx) => (
              <div key={idx} className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-white border border-gray-200 flex items-center justify-center">
                    <section.icon className="w-6 h-6 text-gray-900" />
                  </div>
                  <h3 className="font-bold text-xl text-gray-900">{section.category}</h3>
                </div>
                <div className="space-y-4">
                  {section.items.map((item, i) => (
                    <div key={i}>
                      <p className="font-semibold text-gray-900">{item.name}</p>
                      <p className="text-sm text-gray-600">{item.description}</p>
                      <p className="text-xs text-gray-900 font-medium mt-1">{item.highlight}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI & ML Stack */}
      <section className="py-20 px-6 bg-radial-white-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">{t('productTechnology.ai.title')}</h2>
          <p className="text-center text-gray-700 mb-16">{t('productTechnology.ai.subtitle')}</p>
          <div className="grid md:grid-cols-2 gap-8">
            {techStack.ai.map((section, idx) => (
              <div key={idx} className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-white border border-gray-200 flex items-center justify-center">
                    <section.icon className="w-6 h-6 text-gray-900" />
                  </div>
                  <h3 className="font-bold text-xl text-gray-900">{section.category}</h3>
                </div>
                <div className="space-y-4">
                  {section.items.map((item, i) => (
                    <div key={i} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                      <p className="font-semibold text-gray-900">{item.name}</p>
                      <p className="text-sm text-gray-600">{item.description}</p>
                      <p className="text-xs text-gray-900 font-medium mt-1">{item.highlight}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-20 px-6 bg-radial-white-purple">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">{t('productTechnology.performance.title')}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {performance.map((item, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-300 text-center">
                <p className="text-sm text-gray-600 mb-2">{item.metric}</p>
                <p className="text-4xl font-bold text-gray-900 mb-2">{item.value}</p>
                <p className="text-xs text-gray-500">{item.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Privacy */}
      <section className="py-20 px-6 bg-radial-white-multi">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Shield className="w-12 h-12 text-gray-900" />
            <h2 className="text-4xl font-bold text-gray-900">{t('productTechnology.security.title')}</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-bold mb-4 text-gray-900">{t('productTechnology.security.local')}</h3>
              <p className="text-gray-700">{t('productTechnology.security.localDesc')}</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-bold mb-4 text-gray-900">{t('productTechnology.security.encrypted')}</h3>
              <p className="text-gray-700">{t('productTechnology.security.encryptedDesc')}</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-bold mb-4 text-gray-900">{t('productTechnology.security.backup')}</h3>
              <p className="text-gray-700">{t('productTechnology.security.backupDesc')}</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-bold mb-4 text-gray-900">{t('productTechnology.security.opensource')}</h3>
              <p className="text-gray-700">{t('productTechnology.security.opensourceDesc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-radial-white-center">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">{t('productTechnology.cta.title')}</h2>
          <p className="text-xl text-gray-700 mb-8">
            {t('productTechnology.cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-8 py-4 bg-black text-white rounded-xl font-semibold hover:bg-gray-900 hover:shadow-2xl transition-all hover:scale-105"
            >
              {t('productTechnology.cta.download')}
            </button>
            <a
              href="https://github.com/wannahappyaroundme/Garden_of_Eden_V3"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-transparent border-2 border-black text-gray-900 rounded-xl font-semibold hover:bg-black hover:text-white transition-all hover:scale-105"
            >
              {t('productTechnology.cta.github')}
            </a>
          </div>
        </div>
      </section>

      {/* Coming Soon Modal */}
      <ComingSoonModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
