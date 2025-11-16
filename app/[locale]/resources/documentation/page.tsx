import { useTranslations } from 'next-intl';
import { Book, FileText, Code, HelpCircle, Github, MessageCircle } from 'lucide-react';

export default function DocumentationPage() {
  const t = useTranslations();

  const resources = [
    {
      icon: Book,
      title: 'User Guide',
      description: 'Complete guide to using Garden of Eden V3',
      link: 'https://github.com/wannahappyaroundme/Garden_of_Eden_V3/wiki',
      color: 'from-purple-500 to-violet-500',
    },
    {
      icon: FileText,
      title: 'Quick Start',
      description: '5-minute guide to get started',
      link: 'https://github.com/wannahappyaroundme/Garden_of_Eden_V3/blob/main/docs/QUICKSTART.md',
      color: 'from-violet-500 to-purple-500',
    },
    {
      icon: Code,
      title: 'GitHub Wiki',
      description: 'Technical documentation',
      link: 'https://github.com/wannahappyaroundme/Garden_of_Eden_V3/wiki',
      color: 'from-purple-600 to-violet-600',
    },
    {
      icon: HelpCircle,
      title: 'Troubleshooting',
      description: 'Common issues and solutions',
      link: 'https://github.com/wannahappyaroundme/Garden_of_Eden_V3/wiki/Troubleshooting',
      color: 'from-violet-600 to-purple-600',
    },
    {
      icon: Github,
      title: 'GitHub Repository',
      description: 'Source code and releases',
      link: 'https://github.com/wannahappyaroundme/Garden_of_Eden_V3',
      color: 'from-purple-500 to-violet-500',
    },
    {
      icon: MessageCircle,
      title: 'Discussions',
      description: 'Ask questions and share ideas',
      link: 'https://github.com/wannahappyaroundme/Garden_of_Eden_V3/discussions',
      color: 'from-violet-500 to-purple-500',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-violet-50 pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">
            {t('resourcesDocumentation.title')}
          </h1>
          <p className="text-xl text-gray-600">
            {t('resourcesDocumentation.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <a
              key={index}
              href={resource.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-8 rounded-2xl bg-white border border-gray-200 hover:shadow-2xl transition-all"
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${resource.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <resource.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">{resource.title}</h3>
              <p className="text-gray-600">{resource.description}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
