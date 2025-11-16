import { useTranslations } from 'next-intl';
import { Check, Clock, Star, Target, Users, TrendingUp } from 'lucide-react';

export default function RoadmapPage() {
  const t = useTranslations();

  const releases = [
    {
      version: 'v3.0.4',
      status: 'completed',
      quarter: 'Q1 2025',
      title: 'Cloud Backup & Complete Documentation',
      description: 'Current stable release with Google OAuth integration',
      features: [
        '✅ Google OAuth integration',
        '✅ Google Drive backup (persona settings only)',
        '✅ Complete documentation overhaul',
        '✅ SERVICE.md, DEPLOYMENT.md, MARKETING.md',
        '✅ 15,000+ words of user docs',
      ],
    },
    {
      version: 'v3.1.0',
      status: 'in-progress',
      quarter: 'Q2 2025',
      title: 'Windows Support',
      description: 'Bring Garden of Eden V3 to Windows users',
      features: [
        'Windows 10/11 build (MSI installer)',
        'Windows-specific screen capture',
        'Windows TTS integration',
        'Ollama Windows support',
        'Code signing (Windows Authenticode)',
        'Installation guide for Windows',
      ],
    },
    {
      version: 'v3.2.0',
      status: 'planned',
      quarter: 'Q2 2025',
      title: 'Advanced RAG',
      description: 'Upgrade memory system with better embeddings',
      features: [
        'BGE-M3 embeddings (replace TF-IDF)',
        'LanceDB vector database',
        'RAFT hallucination reduction',
        'Improved context retrieval',
        'Memory visualization UI',
        'Export/import memory database',
      ],
    },
    {
      version: 'v3.3.0',
      status: 'planned',
      quarter: 'Q3 2025',
      title: 'Internet Access',
      description: 'Enable AI to search web and fetch URLs',
      features: [
        'Web search integration (DuckDuckGo, SearX)',
        'URL fetching (privacy-preserving)',
        'Website summarization',
        'News aggregation',
        'Privacy controls (opt-in)',
        'Content filtering',
      ],
    },
    {
      version: 'v3.4.0',
      status: 'planned',
      quarter: 'Q3-Q4 2025',
      title: 'Plugin System',
      description: 'Allow users to extend functionality',
      features: [
        'Plugin API architecture',
        'JavaScript/TypeScript plugin support',
        'Plugin marketplace (GitHub-based)',
        'Sandboxed execution',
        'Permission system',
        'Example plugins (weather, calculator, etc.)',
      ],
    },
    {
      version: 'v4.0.0',
      status: 'planned',
      quarter: 'Q1 2026',
      title: 'Multiple Personas',
      description: 'Save and switch between persona profiles',
      features: [
        'Multiple persona profiles',
        'Quick persona switching',
        'Persona import/export',
        'Community persona marketplace',
        'Persona sharing (JSON)',
        'Persona versioning',
      ],
    },
  ];

  const timeline = [
    { quarter: '2024 Q4', progress: 100, label: 'Phases 1-8 Complete (v3.0.0)' },
    { quarter: '2025 Q1', progress: 100, label: 'Phase 9 Complete (v3.0.4)' },
    { quarter: '2025 Q2', progress: 20, label: 'Phase 10: Windows Build' },
    { quarter: '2025 Q3', progress: 0, label: 'Phase 11: Advanced Features' },
    { quarter: '2025 Q4', progress: 0, label: 'Phase 12: Plugin System' },
    { quarter: '2026 Q1', progress: 0, label: 'Phase 13: AI Enhancements' },
  ];

  const communityRequests = [
    { feature: 'Windows Support', votes: 46, version: 'v3.1.0' },
    { feature: 'Internet Access', votes: 32, version: 'v3.3.0' },
    { feature: 'Plugin System', votes: 28, version: 'v3.4.0' },
    { feature: 'Multiple Personas', votes: 24, version: 'v4.0.0' },
    { feature: 'Linux Build', votes: 18, version: 'Backlog' },
    { feature: 'Calendar Integration', votes: 15, version: 'Backlog' },
  ];

  const philosophy = [
    '🔒 Privacy First - Never compromise on privacy',
    '💻 Local First - Cloud is always optional',
    '🎉 Free Forever - Core app will always be free',
    '📖 Open Source - MIT license, no exceptions',
    '👥 Community-Driven - Users guide development',
    '⚡ Fast - Response time <5s always',
    '🌍 Accessible - Works for everyone',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-violet-50">
      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full mb-6">
            <Target className="w-4 h-4 text-purple-600" />
            <span className="text-purple-600 font-semibold">{t('productRoadmap.badge')}</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">
            {t('productRoadmap.title')}
            <br />
            {t('productRoadmap.subtitle')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
            {t('productRoadmap.vision')}
          </p>
          <p className="text-lg text-gray-500 italic">
            {t('productRoadmap.visionEn')}
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">{t('productRoadmap.timeline.title')}</h2>
          <div className="space-y-4">
            {timeline.map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full ${item.progress === 100 ? 'bg-purple-500' : item.progress > 0 ? 'bg-violet-500 animate-pulse' : 'bg-gray-300'}`} />
                    <span className="font-bold text-lg">{item.quarter}</span>
                  </div>
                  <span className="text-sm text-gray-600">{item.progress}% complete</span>
                </div>
                <p className="text-gray-700 mb-3">{item.label}</p>
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-1000 ${
                      item.progress === 100
                        ? 'bg-gradient-to-r from-purple-500 to-violet-500'
                        : item.progress > 0
                        ? 'bg-gradient-to-r from-violet-500 to-purple-500'
                        : 'bg-gray-300'
                    }`}
                    style={{ width: `${item.progress}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Releases */}
      <section className="py-20 px-6 bg-gradient-to-br from-violet-50 to-purple-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">{t('productRoadmap.releases.title')}</h2>
          <div className="space-y-8">
            {releases.map((release, index) => (
              <div
                key={index}
                className={`relative p-8 rounded-2xl border-2 ${
                  release.status === 'completed'
                    ? 'bg-purple-50 border-purple-300'
                    : release.status === 'in-progress'
                    ? 'bg-violet-50 border-violet-300 shadow-lg'
                    : 'bg-white border-gray-200'
                }`}
              >
                {release.status === 'in-progress' && (
                  <div className="absolute -top-3 -right-3">
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-purple-600 to-violet-600 text-white text-sm font-bold rounded-full">
                      <Clock className="w-4 h-4" />
                      {t('productRoadmap.releases.inProgress')}
                    </span>
                  </div>
                )}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl font-bold">{release.version}</h3>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-semibold rounded-full">
                        {release.quarter}
                      </span>
                      {release.status === 'completed' && <Check className="w-6 h-6 text-green-600" />}
                    </div>
                    <p className="text-xl text-gray-700 font-semibold mb-2">{release.title}</p>
                    <p className="text-gray-600">{release.description}</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-3">
                  {release.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className={`p-3 rounded-lg ${
                        release.status === 'completed'
                          ? 'bg-green-100 text-green-900'
                          : release.status === 'in-progress'
                          ? 'bg-blue-100 text-blue-900'
                          : 'bg-gray-50 text-gray-700'
                      }`}
                    >
                      <p className="text-sm">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Requests */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">{t('productRoadmap.community.title')}</h2>
            <p className="text-xl text-gray-600">{t('productRoadmap.community.subtitle')}</p>
          </div>
          <div className="space-y-4">
            {communityRequests.map((request, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-6 rounded-xl bg-gradient-to-r from-violet-50 to-purple-50 border border-purple-200 hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-purple-600" />
                    <span className="text-2xl font-bold text-purple-600">#{index + 1}</span>
                  </div>
                  <div>
                    <p className="font-bold text-lg">{request.feature}</p>
                    <p className="text-sm text-gray-600">Planned for {request.version}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-purple-200">
                  <Users className="w-4 h-4 text-purple-600" />
                  <span className="font-bold text-purple-600">{request.votes} {t('productRoadmap.community.votes')}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <a
              href="https://github.com/wannahappyaroundme/Garden_of_Eden_V3/discussions"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-xl font-semibold hover:bg-purple-700 transition-all"
            >
              <Star className="w-5 h-5" />
              {t('productRoadmap.community.vote')}
            </a>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 px-6 bg-gradient-to-br from-purple-600 to-violet-600 text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">{t('productRoadmap.philosophy.title')}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {philosophy.map((principle, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <p className="text-lg">{principle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">{t('productRoadmap.metrics.title')}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-violet-50 to-purple-50 border border-purple-200">
              <p className="text-sm text-gray-600 mb-2">{t('productRoadmap.metrics.current')}</p>
              <div className="text-5xl font-bold text-purple-600 mb-4">✅</div>
              <ul className="text-left space-y-2 text-gray-700">
                <li>✅ 100% local processing</li>
                <li>✅ &lt;10MB binary size</li>
                <li>✅ 2-4s response time</li>
                <li>✅ 10 persona parameters</li>
                <li>✅ Voice + screen context</li>
              </ul>
            </div>
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-violet-50 border border-violet-200">
              <p className="text-sm text-gray-600 mb-2">{t('productRoadmap.metrics.goal2026')}</p>
              <div className="text-5xl font-bold text-violet-600 mb-4">🎯</div>
              <ul className="text-left space-y-2 text-gray-700">
                <li>📊 10,000+ downloads</li>
                <li>⭐ 1,000+ GitHub stars</li>
                <li>🧪 80%+ test coverage</li>
                <li>⚡ &lt;2s response time</li>
                <li>💻 3 platforms support</li>
              </ul>
            </div>
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-violet-50 border border-purple-200">
              <p className="text-sm text-gray-600 mb-2">{t('productRoadmap.metrics.goal2027')}</p>
              <div className="text-5xl font-bold text-purple-600 mb-4">🚀</div>
              <ul className="text-left space-y-2 text-gray-700">
                <li>📈 100,000+ downloads</li>
                <li>⭐ 10,000+ GitHub stars</li>
                <li>👥 Self-sustaining community</li>
                <li>🎨 Multi-modal AI</li>
                <li>⚡ Sub-1s response time</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gradient-to-br from-violet-50 to-purple-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">{t('productRoadmap.cta.title')}</h2>
          <p className="text-xl text-gray-600 mb-8">
            {t('productRoadmap.cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/wannahappyaroundme/Garden_of_Eden_V3/discussions"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-violet-600 text-white rounded-xl font-semibold hover:shadow-xl transition-all"
            >
              {t('productRoadmap.cta.discussions')}
            </a>
            <a
              href="https://github.com/wannahappyaroundme/Garden_of_Eden_V3/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white border-2 border-purple-600 text-purple-600 rounded-xl font-semibold hover:bg-purple-50 transition-all"
            >
              {t('productRoadmap.cta.features')}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
