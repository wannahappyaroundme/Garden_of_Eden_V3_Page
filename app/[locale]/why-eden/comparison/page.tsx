import { useTranslations } from 'next-intl';
import { Check, X, DollarSign, Shield, Zap, Settings, Users, Globe } from 'lucide-react';

export default function ComparisonPage() {
  const t = useTranslations();

  const comparisonData = [
    {
      feature: 'Price',
      icon: DollarSign,
      eden: { value: 'Free', highlight: true, detail: '$0 forever' },
      chatgpt: { value: '$20/month', highlight: false, detail: '$240/year' },
      copilot: { value: '$10/month', highlight: false, detail: '$120/year' },
      claude: { value: '$20/month', highlight: false, detail: '$240/year' },
    },
    {
      feature: 'Privacy',
      icon: Shield,
      eden: { value: '100% Local', highlight: true, detail: 'No data leaves your machine' },
      chatgpt: { value: 'Cloud (OpenAI)', highlight: false, detail: 'Data sent to servers' },
      copilot: { value: 'Cloud (Microsoft)', highlight: false, detail: 'Code sent to servers' },
      claude: { value: 'Cloud (Anthropic)', highlight: false, detail: 'Data sent to servers' },
    },
    {
      feature: 'Offline Mode',
      icon: Globe,
      eden: { value: 'Yes', highlight: true, detail: 'Works without internet' },
      chatgpt: { value: 'No', highlight: false, detail: 'Requires internet' },
      copilot: { value: 'No', highlight: false, detail: 'Requires internet' },
      claude: { value: 'No', highlight: false, detail: 'Requires internet' },
    },
    {
      feature: 'Customizable Personality',
      icon: Settings,
      eden: { value: '10 parameters', highlight: true, detail: 'Fully adjustable' },
      chatgpt: { value: 'No', highlight: false, detail: 'Fixed personality' },
      copilot: { value: 'No', highlight: false, detail: 'Fixed personality' },
      claude: { value: 'No', highlight: false, detail: 'Fixed personality' },
    },
    {
      feature: 'Learning System',
      icon: Users,
      eden: { value: 'Yes (local)', highlight: true, detail: 'Gradient descent optimization' },
      chatgpt: { value: 'Yes (cloud)', highlight: false, detail: 'Trains on your data' },
      copilot: { value: 'Yes (cloud)', highlight: false, detail: 'Trains on your data' },
      claude: { value: 'Yes (cloud)', highlight: false, detail: 'Claims not to train' },
    },
    {
      feature: 'Response Time',
      icon: Zap,
      eden: { value: '2-4s', highlight: false, detail: 'Local processing' },
      chatgpt: { value: '<1s', highlight: true, detail: 'Massive data centers' },
      copilot: { value: '<1s', highlight: true, detail: 'Cloud infrastructure' },
      claude: { value: '<1s', highlight: true, detail: 'Cloud infrastructure' },
    },
    {
      feature: 'Model Size',
      icon: Users,
      eden: { value: '7B params', highlight: false, detail: '4.7GB download' },
      chatgpt: { value: '100B+ params', highlight: true, detail: 'Not disclosed' },
      copilot: { value: 'Unknown', highlight: false, detail: 'Not disclosed' },
      claude: { value: '100B+ params', highlight: true, detail: 'Not disclosed' },
    },
    {
      feature: 'Open Source',
      icon: Globe,
      eden: { value: 'Yes (MIT)', highlight: true, detail: 'Audit the code' },
      chatgpt: { value: 'No', highlight: false, detail: 'Proprietary' },
      copilot: { value: 'No', highlight: false, detail: 'Proprietary' },
      claude: { value: 'No', highlight: false, detail: 'Proprietary' },
    },
    {
      feature: 'Voice Input',
      icon: Users,
      eden: { value: 'Yes', highlight: true, detail: 'Whisper STT' },
      chatgpt: { value: 'Yes (web)', highlight: false, detail: 'Web only' },
      copilot: { value: 'No', highlight: false, detail: 'Not available' },
      claude: { value: 'No', highlight: false, detail: 'Not available' },
    },
    {
      feature: 'Screen Context',
      icon: Globe,
      eden: { value: 'Yes (LLaVA)', highlight: true, detail: 'Local vision' },
      chatgpt: { value: 'No', highlight: false, detail: 'Not available' },
      copilot: { value: 'No', highlight: false, detail: 'Not available' },
      claude: { value: 'No', highlight: false, detail: 'Not available' },
    },
  ];

  const costSavings = [
    { service: 'ChatGPT Plus', monthly: 20, annual: 240, threeYear: 720, color: 'from-purple-500 to-violet-500' },
    { service: 'Claude Pro', monthly: 20, annual: 240, threeYear: 720, color: 'from-violet-500 to-purple-500' },
    { service: 'GitHub Copilot', monthly: 10, annual: 120, threeYear: 360, color: 'from-purple-500 to-pink-500' },
  ];

  const dataOwnership = [
    {
      aspect: 'Data Storage',
      eden: 'Your Mac only',
      others: 'Company servers',
      edenGood: true,
    },
    {
      aspect: 'Training on Your Data',
      eden: 'Never',
      others: 'Yes (most services)',
      edenGood: true,
    },
    {
      aspect: 'Offline Capability',
      eden: 'Full functionality',
      others: 'None',
      edenGood: true,
    },
    {
      aspect: 'Open Source',
      eden: 'Yes (MIT)',
      others: 'No',
      edenGood: true,
    },
    {
      aspect: 'Audit Trail',
      eden: 'Complete',
      others: 'None',
      edenGood: true,
    },
    {
      aspect: 'Data Retention',
      eden: 'You control',
      others: 'Company controls',
      edenGood: true,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-violet-50">
      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-6">
            <Shield className="w-4 h-4 text-blue-600" />
            <span className="text-blue-600 font-semibold">{t('whyEdenComparison.badge')}</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">
            {t('whyEdenComparison.title')}
            <br />
            {t('whyEdenComparison.subtitle')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('whyEdenComparison.description')}
          </p>
        </div>
      </section>

      {/* Main Comparison Table */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto overflow-x-auto">
          <table className="w-full min-w-[800px]">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="text-left p-4 font-bold text-gray-700">{t('whyEdenComparison.table.feature')}</th>
                <th className="p-4">
                  <div className="text-center">
                    <p className="font-bold text-xl bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent mb-1">
                      {t('whyEdenComparison.table.eden')}
                    </p>
                    <p className="text-xs text-green-600 font-semibold">{t('whyEdenComparison.table.free')}</p>
                  </div>
                </th>
                <th className="p-4">
                  <div className="text-center">
                    <p className="font-bold text-lg mb-1">ChatGPT Plus</p>
                    <p className="text-xs text-gray-600">$20/month</p>
                  </div>
                </th>
                <th className="p-4">
                  <div className="text-center">
                    <p className="font-bold text-lg mb-1">GitHub Copilot</p>
                    <p className="text-xs text-gray-600">$10/month</p>
                  </div>
                </th>
                <th className="p-4">
                  <div className="text-center">
                    <p className="font-bold text-lg mb-1">Claude Pro</p>
                    <p className="text-xs text-gray-600">$20/month</p>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, index) => (
                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <row.icon className="w-5 h-5 text-gray-600" />
                      <span className="font-semibold text-gray-900">{row.feature}</span>
                    </div>
                  </td>
                  <td className="p-4 text-center">
                    <div className={`inline-block px-4 py-2 rounded-lg ${row.eden.highlight ? 'bg-green-100' : 'bg-gray-50'}`}>
                      <p className={`font-bold ${row.eden.highlight ? 'text-green-700' : 'text-gray-700'}`}>
                        {row.eden.value}
                      </p>
                      <p className="text-xs text-gray-600 mt-1">{row.eden.detail}</p>
                    </div>
                  </td>
                  <td className="p-4 text-center">
                    <div className={`inline-block px-4 py-2 rounded-lg ${row.chatgpt.highlight ? 'bg-blue-100' : 'bg-gray-50'}`}>
                      <p className={`font-semibold ${row.chatgpt.highlight ? 'text-blue-700' : 'text-gray-700'}`}>
                        {row.chatgpt.value}
                      </p>
                      <p className="text-xs text-gray-600 mt-1">{row.chatgpt.detail}</p>
                    </div>
                  </td>
                  <td className="p-4 text-center">
                    <div className={`inline-block px-4 py-2 rounded-lg ${row.copilot.highlight ? 'bg-blue-100' : 'bg-gray-50'}`}>
                      <p className={`font-semibold ${row.copilot.highlight ? 'text-blue-700' : 'text-gray-700'}`}>
                        {row.copilot.value}
                      </p>
                      <p className="text-xs text-gray-600 mt-1">{row.copilot.detail}</p>
                    </div>
                  </td>
                  <td className="p-4 text-center">
                    <div className={`inline-block px-4 py-2 rounded-lg ${row.claude.highlight ? 'bg-blue-100' : 'bg-gray-50'}`}>
                      <p className={`font-semibold ${row.claude.highlight ? 'text-blue-700' : 'text-gray-700'}`}>
                        {row.claude.value}
                      </p>
                      <p className="text-xs text-gray-600 mt-1">{row.claude.detail}</p>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Cost Savings Calculator */}
      <section className="py-20 px-6 bg-gradient-to-br from-violet-50 to-purple-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">{t('whyEdenComparison.savings.title')}</h2>
          <p className="text-center text-gray-600 mb-16">{t('whyEdenComparison.savings.subtitle')}</p>
          <div className="grid md:grid-cols-3 gap-8">
            {costSavings.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200">
                <h3 className="text-xl font-bold mb-6 text-center">{service.service}</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">{t('whyEdenComparison.savings.monthly')}</span>
                    <span className="font-bold text-red-600">${service.monthly}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">{t('whyEdenComparison.savings.annual')}</span>
                    <span className="font-bold text-red-600">${service.annual}</span>
                  </div>
                  <div className="border-t-2 border-gray-200 pt-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-gray-900">{t('whyEdenComparison.savings.threeYear')}</span>
                      <span className="text-2xl font-bold text-red-600">${service.threeYear}</span>
                    </div>
                    <div className={`w-full h-2 bg-gradient-to-r ${service.color} rounded-full`} />
                  </div>
                </div>
                <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200 text-center">
                  <p className="text-sm text-green-800 font-semibold">
                    {t('whyEdenComparison.savings.save', { amount: service.threeYear })}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center p-8 bg-gradient-to-r from-purple-600 to-violet-600 rounded-2xl text-white">
            <p className="text-3xl font-bold mb-2">{t('whyEdenComparison.savings.edenFree')}</p>
            <p className="text-xl">{t('whyEdenComparison.savings.mit')}</p>
          </div>
        </div>
      </section>

      {/* Privacy & Data Ownership */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">{t('whyEdenComparison.privacy.title')}</h2>
          <div className="space-y-4">
            {dataOwnership.map((item, index) => (
              <div key={index} className="grid md:grid-cols-3 gap-4 p-6 rounded-xl bg-gray-50 border border-gray-200">
                <div className="font-bold text-gray-900">{item.aspect}</div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-600" />
                  <span className="font-semibold text-green-700">{item.eden}</span>
                </div>
                <div className="flex items-center gap-2">
                  <X className="w-5 h-5 text-red-600" />
                  <span className="text-gray-600">{item.others}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Verdict */}
      <section className="py-20 px-6 bg-gradient-to-br from-purple-600 to-violet-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">{t('whyEdenComparison.verdict.title')}</h2>
          <p className="text-2xl leading-relaxed mb-6">
            {t('whyEdenComparison.verdict.description1')} <span className="font-bold underline">{t('whyEdenComparison.verdict.highlight')}</span> {t('whyEdenComparison.verdict.description2')}
          </p>
          <p className="text-3xl font-bold">
            {t('whyEdenComparison.verdict.conclusion')}
          </p>
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-bold mb-4">{t('whyEdenComparison.verdict.cloudAI.title')}</h3>
              <ul className="text-left space-y-2 text-white/90">
                <li>• {t('whyEdenComparison.verdict.cloudAI.item1')}</li>
                <li>• {t('whyEdenComparison.verdict.cloudAI.item2')}</li>
                <li>• {t('whyEdenComparison.verdict.cloudAI.item3')}</li>
                <li>• {t('whyEdenComparison.verdict.cloudAI.item4')}</li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-bold mb-4">{t('whyEdenComparison.verdict.eden.title')}</h3>
              <ul className="text-left space-y-2 text-white/90">
                <li>• {t('whyEdenComparison.verdict.eden.item1')}</li>
                <li>• {t('whyEdenComparison.verdict.eden.item2')}</li>
                <li>• {t('whyEdenComparison.verdict.eden.item3')}</li>
                <li>• {t('whyEdenComparison.verdict.eden.item4')}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">{t('whyEdenComparison.cta.title')}</h2>
          <p className="text-xl text-gray-600 mb-8">
            {t('whyEdenComparison.cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/download"
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-violet-600 text-white rounded-xl font-semibold hover:shadow-xl transition-all"
            >
              {t('whyEdenComparison.cta.download')}
            </a>
            <a
              href="/product/features"
              className="px-8 py-4 bg-white border-2 border-blue-600 text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-all"
            >
              {t('whyEdenComparison.cta.features')}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
