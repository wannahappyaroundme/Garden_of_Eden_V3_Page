import { useTranslations } from 'next-intl';
import { Users, MessageCircle, AlertCircle, Star, Github, Mail } from 'lucide-react';

export default function CommunityPage() {
  const t = useTranslations();

  const channels = [
    {
      icon: Github,
      title: 'GitHub Discussions',
      description: 'Ask questions, share ideas, and connect with the community',
      link: 'https://github.com/wannahappyaroundme/Garden_of_Eden_V3/discussions',
      color: 'from-purple-500 to-violet-500',
    },
    {
      icon: AlertCircle,
      title: 'GitHub Issues',
      description: 'Report bugs and request features',
      link: 'https://github.com/wannahappyaroundme/Garden_of_Eden_V3/issues',
      color: 'from-violet-500 to-purple-500',
    },
    {
      icon: Star,
      title: 'Star on GitHub',
      description: 'Show your support and stay updated',
      link: 'https://github.com/wannahappyaroundme/Garden_of_Eden_V3',
      color: 'from-purple-600 to-violet-600',
    },
    {
      icon: Mail,
      title: 'Email',
      description: 'Contact: bu5119@hanyang.ac.kr',
      link: 'mailto:bu5119@hanyang.ac.kr',
      color: 'from-violet-600 to-purple-600',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-violet-50 pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full mb-6">
            <Users className="w-4 h-4 text-purple-600" />
            <span className="text-purple-600 font-semibold">{t('resourcesCommunity.badge')}</span>
          </div>
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">
            {t('resourcesCommunity.title')}
          </h1>
          <p className="text-xl text-gray-600">
            {t('resourcesCommunity.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {channels.map((channel, index) => (
            <a
              key={index}
              href={channel.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-8 rounded-2xl bg-white border border-gray-200 hover:shadow-2xl transition-all"
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${channel.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <channel.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">{channel.title}</h3>
              <p className="text-gray-600">{channel.description}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
