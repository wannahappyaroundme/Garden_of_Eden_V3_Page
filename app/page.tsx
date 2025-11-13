"use client";

import { useState } from "react";

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#667eea] to-[#764ba2] text-white py-20 px-5 rounded-[20px] text-center animate-fadeInUp">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-float">
            Garden of Eden V3
          </h1>
          <p className="text-2xl md:text-3xl mb-4">
            Your AI Assistant That Respects Your Privacy
          </p>
          <p className="text-xl md:text-2xl mb-6 opacity-90">
            The Only 100% Local AI Assistant Inspired by JARVIS
          </p>

          {/* Privacy Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#10b981] to-[#059669] text-white py-3 px-8 rounded-full mb-8 shadow-lg">
            <span className="text-2xl">🔒</span>
            <span className="font-semibold">100% Private - Zero Data Leaves Your Machine</span>
          </div>

          <p className="text-xl mb-8">
            <strong>No Cloud • No Subscriptions • No Compromises</strong>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <button className="bg-white text-[#667eea] font-bold text-lg py-4 px-10 rounded-full btn-glow hover:scale-105 transition-transform">
              Download for Free
            </button>
            <button className="bg-transparent border-2 border-white text-white font-bold text-lg py-4 px-10 rounded-full hover:bg-white hover:text-[#667eea] transition-all">
              ⭐ Star on GitHub
            </button>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="max-w-6xl mx-auto py-16 px-5">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text">
          Why Garden of Eden V3?
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Problems */}
          <div className="bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-6 text-red-700">❌ Problems with Cloud AI</h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex gap-3">
                <span>🔓</span>
                <span><strong>Privacy Concerns:</strong> Your data sent to cloud servers</span>
              </li>
              <li className="flex gap-3">
                <span>💸</span>
                <span><strong>Expensive Subscriptions:</strong> $20-40/month forever</span>
              </li>
              <li className="flex gap-3">
                <span>📡</span>
                <span><strong>Internet Dependency:</strong> Can't work offline</span>
              </li>
              <li className="flex gap-3">
                <span>🤖</span>
                <span><strong>Generic Responses:</strong> Doesn't learn your style</span>
              </li>
              <li className="flex gap-3">
                <span>⛓️</span>
                <span><strong>Limited Integration:</strong> Disconnected from your workflow</span>
              </li>
              <li className="flex gap-3">
                <span>🔒</span>
                <span><strong>No Control:</strong> Closed-source black box</span>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-6 text-green-700">✅ Eden V3 Solutions</h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex gap-3">
                <span>🔒</span>
                <span><strong>100% Privacy:</strong> All processing on your machine</span>
              </li>
              <li className="flex gap-3">
                <span>🆓</span>
                <span><strong>Free Forever:</strong> Zero cost, MIT License</span>
              </li>
              <li className="flex gap-3">
                <span>✈️</span>
                <span><strong>Works Offline:</strong> No internet required after setup</span>
              </li>
              <li className="flex gap-3">
                <span>🎯</span>
                <span><strong>Learns Your Style:</strong> 28 persona parameters</span>
              </li>
              <li className="flex gap-3">
                <span>🔗</span>
                <span><strong>Deep Integration:</strong> Files, Git, screen, calendar</span>
              </li>
              <li className="flex gap-3">
                <span>🌟</span>
                <span><strong>Full Control:</strong> Open-source, customizable</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Key Statistics */}
      <section className="bg-gradient-to-br from-[#f5f7fa] to-[#c3cfe2] py-16 px-5 rounded-2xl my-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">By the Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover-lift">
              <div className="text-5xl font-bold gradient-text mb-2">100%</div>
              <div className="text-gray-700">Privacy Guaranteed</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover-lift">
              <div className="text-5xl font-bold gradient-text mb-2">$0</div>
              <div className="text-gray-700">Forever Free</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover-lift">
              <div className="text-5xl font-bold gradient-text mb-2">2-3s</div>
              <div className="text-gray-700">Response Time</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover-lift">
              <div className="text-5xl font-bold gradient-text mb-2">12GB</div>
              <div className="text-gray-700">AI Models Locally</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover-lift">
              <div className="text-5xl font-bold gradient-text mb-2">28</div>
              <div className="text-gray-700">Persona Parameters</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover-lift">
              <div className="text-5xl font-bold gradient-text mb-2">85%</div>
              <div className="text-gray-700">Complete</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Deep Dive */}
      <section className="max-w-6xl mx-auto py-16 px-5">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text">
          Powerful Features
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1: Privacy */}
          <div className="bg-gradient-to-br from-[#f5f7fa] to-[#c3cfe2] p-8 rounded-2xl hover-lift">
            <div className="text-5xl mb-4">🔒</div>
            <h3 className="text-2xl font-bold mb-4">Privacy You Can Trust</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• All 12GB AI models run locally</li>
              <li>• AES-256 encrypted database</li>
              <li>• Zero telemetry, zero tracking</li>
              <li>• Works completely offline</li>
              <li>• Open-source (MIT License)</li>
            </ul>
          </div>

          {/* Feature 2: AI Models */}
          <div className="bg-gradient-to-br from-[#f5f7fa] to-[#c3cfe2] p-8 rounded-2xl hover-lift">
            <div className="text-5xl mb-4">🤖</div>
            <h3 className="text-2xl font-bold mb-4">Powerful Local AI</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Llama 3.1 8B (4.92GB)</li>
              <li>• Whisper Large V3 (3.09GB)</li>
              <li>• LLaVA 7B (4.37GB)</li>
              <li>• System TTS (native)</li>
              <li>• 2-3s response on M3 MAX</li>
            </ul>
          </div>

          {/* Feature 3: Persona */}
          <div className="bg-gradient-to-br from-[#f5f7fa] to-[#c3cfe2] p-8 rounded-2xl hover-lift">
            <div className="text-5xl mb-4">🎭</div>
            <h3 className="text-2xl font-bold mb-4">AI That Learns Your Style</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• 28 customizable parameters</li>
              <li>• 6 pre-built personalities</li>
              <li>• Gradient descent optimization</li>
              <li>• RAG memory system</li>
              <li>• Thumbs up/down feedback</li>
            </ul>
          </div>

          {/* Feature 4: Screen Context */}
          <div className="bg-gradient-to-br from-[#f5f7fa] to-[#c3cfe2] p-8 rounded-2xl hover-lift">
            <div className="text-5xl mb-4">👁️</div>
            <h3 className="text-2xl font-bold mb-4">Screen Context Analysis</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Level 1: Active window (~1s)</li>
              <li>• Level 2: Last 10 minutes (~3s)</li>
              <li>• Level 3: Full project (~10s)</li>
              <li>• Privacy controls included</li>
              <li>• Blur sensitive areas</li>
            </ul>
          </div>

          {/* Feature 5: Integration */}
          <div className="bg-gradient-to-br from-[#f5f7fa] to-[#c3cfe2] p-8 rounded-2xl hover-lift">
            <div className="text-5xl mb-4">🔗</div>
            <h3 className="text-2xl font-bold mb-4">Deep System Integration</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• File system read/write</li>
              <li>• Git operations (commit, push)</li>
              <li>• Workspace detection</li>
              <li>• Calendar integration</li>
              <li>• Webhook support</li>
            </ul>
          </div>

          {/* Feature 6: Interface */}
          <div className="bg-gradient-to-br from-[#f5f7fa] to-[#c3cfe2] p-8 rounded-2xl hover-lift">
            <div className="text-5xl mb-4">💬</div>
            <h3 className="text-2xl font-bold mb-4">Beautiful Interface</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• KakaoTalk-style chat design</li>
              <li>• Streaming token display</li>
              <li>• Dark mode support</li>
              <li>• Korean + English (i18next)</li>
              <li>• Dynamic Island notifications</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="max-w-6xl mx-auto py-16 px-5">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text">
          How We Compare
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-2xl shadow-lg overflow-hidden">
            <thead>
              <tr className="bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white">
                <th className="p-5 text-left">Feature</th>
                <th className="p-5 text-center">Eden V3</th>
                <th className="p-5 text-center">ChatGPT Plus</th>
                <th className="p-5 text-center">Claude Pro</th>
                <th className="p-5 text-center">GitHub Copilot</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-[#f5f7fa] transition-colors">
                <td className="p-4">100% Privacy</td>
                <td className="p-4 text-center text-2xl">✅</td>
                <td className="p-4 text-center text-2xl">❌</td>
                <td className="p-4 text-center text-2xl">❌</td>
                <td className="p-4 text-center text-2xl">❌</td>
              </tr>
              <tr className="border-b hover:bg-[#f5f7fa] transition-colors">
                <td className="p-4">Cost (per year)</td>
                <td className="p-4 text-center font-bold text-green-600">$0</td>
                <td className="p-4 text-center text-red-600">$240</td>
                <td className="p-4 text-center text-red-600">$240</td>
                <td className="p-4 text-center text-red-600">$120</td>
              </tr>
              <tr className="border-b hover:bg-[#f5f7fa] transition-colors">
                <td className="p-4">Works Offline</td>
                <td className="p-4 text-center text-2xl">✅</td>
                <td className="p-4 text-center text-2xl">❌</td>
                <td className="p-4 text-center text-2xl">❌</td>
                <td className="p-4 text-center text-2xl">❌</td>
              </tr>
              <tr className="border-b hover:bg-[#f5f7fa] transition-colors">
                <td className="p-4">Customization (28 params)</td>
                <td className="p-4 text-center text-2xl">✅</td>
                <td className="p-4 text-center text-2xl">⚠️</td>
                <td className="p-4 text-center text-2xl">⚠️</td>
                <td className="p-4 text-center text-2xl">❌</td>
              </tr>
              <tr className="border-b hover:bg-[#f5f7fa] transition-colors">
                <td className="p-4">Adaptive Learning</td>
                <td className="p-4 text-center text-2xl">✅</td>
                <td className="p-4 text-center text-2xl">❌</td>
                <td className="p-4 text-center text-2xl">❌</td>
                <td className="p-4 text-center text-2xl">❌</td>
              </tr>
              <tr className="border-b hover:bg-[#f5f7fa] transition-colors">
                <td className="p-4">Deep System Integration</td>
                <td className="p-4 text-center text-2xl">✅</td>
                <td className="p-4 text-center text-2xl">❌</td>
                <td className="p-4 text-center text-2xl">❌</td>
                <td className="p-4 text-center text-2xl">⚠️</td>
              </tr>
              <tr className="border-b hover:bg-[#f5f7fa] transition-colors">
                <td className="p-4">Open Source</td>
                <td className="p-4 text-center text-2xl">✅</td>
                <td className="p-4 text-center text-2xl">❌</td>
                <td className="p-4 text-center text-2xl">❌</td>
                <td className="p-4 text-center text-2xl">❌</td>
              </tr>
              <tr className="border-b hover:bg-[#f5f7fa] transition-colors">
                <td className="p-4">Response Time</td>
                <td className="p-4 text-center">2-3s</td>
                <td className="p-4 text-center">2-4s</td>
                <td className="p-4 text-center">3-5s</td>
                <td className="p-4 text-center">1-2s</td>
              </tr>
              <tr className="border-b hover:bg-[#f5f7fa] transition-colors">
                <td className="p-4">Voice Support</td>
                <td className="p-4 text-center text-2xl">✅</td>
                <td className="p-4 text-center text-2xl">✅</td>
                <td className="p-4 text-center text-2xl">❌</td>
                <td className="p-4 text-center text-2xl">❌</td>
              </tr>
              <tr className="border-b hover:bg-[#f5f7fa] transition-colors">
                <td className="p-4">Screen Analysis</td>
                <td className="p-4 text-center text-2xl">✅</td>
                <td className="p-4 text-center text-2xl">❌</td>
                <td className="p-4 text-center text-2xl">❌</td>
                <td className="p-4 text-center text-2xl">❌</td>
              </tr>
              <tr className="hover:bg-[#f5f7fa] transition-colors">
                <td className="p-4">RAG Memory System</td>
                <td className="p-4 text-center text-2xl">✅</td>
                <td className="p-4 text-center text-2xl">⚠️</td>
                <td className="p-4 text-center text-2xl">⚠️</td>
                <td className="p-4 text-center text-2xl">❌</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-8 p-6 bg-green-50 rounded-xl border-2 border-green-200">
          <p className="text-center text-xl">
            <strong>Cost Comparison:</strong> Eden V3 saves you <span className="text-3xl font-bold text-green-600">$120-240/year</span> compared to alternatives!
          </p>
        </div>
      </section>

      {/* Technical Excellence */}
      <section className="bg-gradient-to-br from-[#2d3748] to-[#1a202c] text-white py-16 px-5 rounded-2xl my-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Production Quality
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="text-center p-6 bg-white/10 rounded-xl backdrop-blur">
              <div className="text-4xl font-bold mb-2">97</div>
              <div>TypeScript Files</div>
            </div>
            <div className="text-center p-6 bg-white/10 rounded-xl backdrop-blur">
              <div className="text-4xl font-bold mb-2">5,807</div>
              <div>Lines of Tests</div>
            </div>
            <div className="text-center p-6 bg-white/10 rounded-xl backdrop-blur">
              <div className="text-4xl font-bold mb-2">101</div>
              <div>Test Suites</div>
            </div>
            <div className="text-center p-6 bg-white/10 rounded-xl backdrop-blur">
              <div className="text-4xl font-bold mb-2">85%</div>
              <div>Complete</div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">🏗️ Code Quality</h3>
              <ul className="space-y-2">
                <li>• TypeScript Strict Mode (no any types)</li>
                <li>• ESLint + Prettier formatting</li>
                <li>• Conventional Commits</li>
                <li>• Comprehensive JSDoc comments</li>
                <li>• Type-safe IPC (100+ API methods)</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">🔒 Security</h3>
              <ul className="space-y-2">
                <li>• Context isolation enabled</li>
                <li>• No Node.js APIs in renderer</li>
                <li>• Secure IPC with validation</li>
                <li>• AES-256 database encryption</li>
                <li>• Path traversal protection</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="max-w-6xl mx-auto py-16 px-5">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text">
          Built With Modern Tech
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[
            "Electron 39.1",
            "React 18.2",
            "TypeScript 5.3+",
            "Vite 7.2",
            "node-llama-cpp 3.14",
            "ChromaDB 1.7",
            "better-sqlite3 11.7",
            "Zustand 4.4",
            "shadcn/ui",
            "Tailwind CSS 3.4",
            "i18next 23.7",
            "Jest + Playwright"
          ].map((tech, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#667eea] to-[#764ba2] text-white p-6 rounded-xl text-center font-semibold hover:scale-105 transition-transform"
            >
              {tech}
            </div>
          ))}
        </div>
      </section>

      {/* Use Cases */}
      <section className="max-w-6xl mx-auto py-16 px-5">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text">
          Perfect For
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white border-2 border-gray-200 p-8 rounded-2xl hover-lift">
            <div className="text-5xl mb-4">👨‍💻</div>
            <h3 className="text-2xl font-bold mb-4">Developers</h3>
            <p className="text-gray-600">
              Code generation, debugging assistance, Git operations, and seamless file management.
            </p>
          </div>

          <div className="bg-white border-2 border-gray-200 p-8 rounded-2xl hover-lift">
            <div className="text-5xl mb-4">🔐</div>
            <h3 className="text-2xl font-bold mb-4">Privacy-Conscious Users</h3>
            <p className="text-gray-600">
              Work with confidential data without worrying about cloud leaks or data breaches.
            </p>
          </div>

          <div className="bg-white border-2 border-gray-200 p-8 rounded-2xl hover-lift">
            <div className="text-5xl mb-4">🌏</div>
            <h3 className="text-2xl font-bold mb-4">Bilingual Users</h3>
            <p className="text-gray-600">
              Full Korean + English support with familiar KakaoTalk-style interface.
            </p>
          </div>

          <div className="bg-white border-2 border-gray-200 p-8 rounded-2xl hover-lift">
            <div className="text-5xl mb-4">⚡</div>
            <h3 className="text-2xl font-bold mb-4">Productivity Enthusiasts</h3>
            <p className="text-gray-600">
              Deep integration, keyboard shortcuts, screen awareness, and RAG memory.
            </p>
          </div>

          <div className="bg-white border-2 border-gray-200 p-8 rounded-2xl hover-lift">
            <div className="text-5xl mb-4">🎓</div>
            <h3 className="text-2xl font-bold mb-4">Students & Researchers</h3>
            <p className="text-gray-600">
              Completely offline, free forever, with adaptive learning capabilities.
            </p>
          </div>

          <div className="bg-white border-2 border-gray-200 p-8 rounded-2xl hover-lift">
            <div className="text-5xl mb-4">🏢</div>
            <h3 className="text-2xl font-bold mb-4">Small Teams & Startups</h3>
            <p className="text-gray-600">
              Zero costs, on-premise deployment, MIT license for commercial use.
            </p>
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="bg-gradient-to-br from-[#f5f7fa] to-[#c3cfe2] py-16 px-5 rounded-2xl my-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Get Started in 3 Steps
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-2xl text-center hover-lift">
              <div className="text-6xl font-bold gradient-text mb-4">1</div>
              <h3 className="text-2xl font-bold mb-4">Download</h3>
              <p className="text-gray-600">
                Choose your platform: macOS (Apple Silicon) or Windows
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl text-center hover-lift">
              <div className="text-6xl font-bold gradient-text mb-4">2</div>
              <h3 className="text-2xl font-bold mb-4">Install & Download Models</h3>
              <p className="text-gray-600">
                One-time 12GB AI model download (automatic)
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl text-center hover-lift">
              <div className="text-6xl font-bold gradient-text mb-4">3</div>
              <h3 className="text-2xl font-bold mb-4">Start Chatting</h3>
              <p className="text-gray-600">
                Enjoy your private AI assistant immediately!
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <button className="bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white font-bold text-lg py-4 px-10 rounded-full btn-glow">
              🍎 Download for macOS
            </button>
            <button className="bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white font-bold text-lg py-4 px-10 rounded-full btn-glow">
              🪟 Download for Windows
            </button>
          </div>

          {/* System Requirements */}
          <div className="mt-12 bg-white p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-6 text-center">System Requirements</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-lg mb-3 text-gray-700">Minimum:</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• macOS 12+ or Windows 10/11</li>
                  <li>• Apple M1+ or Intel i5 8th gen+</li>
                  <li>• 16GB RAM</li>
                  <li>• 15GB free disk space</li>
                  <li>• Metal (macOS) or CUDA GPU</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-3 text-gray-700">Recommended:</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• macOS 14+ or Windows 11</li>
                  <li>• Apple M3+ or AMD Ryzen 7+</li>
                  <li>• 32GB RAM</li>
                  <li>• 20GB free disk space</li>
                  <li>• Dedicated GPU (8GB+ VRAM)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Development Roadmap */}
      <section className="max-w-6xl mx-auto py-16 px-5">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text">
          Development Roadmap
        </h2>

        <div className="space-y-4">
          <div className="bg-green-100 border-2 border-green-500 p-6 rounded-xl">
            <div className="flex items-center gap-4 mb-2">
              <span className="text-3xl">✅</span>
              <h3 className="text-xl font-bold">Phases 1-7: COMPLETED</h3>
            </div>
            <p className="text-gray-700 ml-14">
              Core features, AI integration, persona system, and testing all done!
            </p>
          </div>

          <div className="bg-yellow-100 border-2 border-yellow-500 p-6 rounded-xl">
            <div className="flex items-center gap-4 mb-2">
              <span className="text-3xl">🚀</span>
              <h3 className="text-xl font-bold">Phase 8: LAUNCH (85% Complete)</h3>
            </div>
            <p className="text-gray-700 ml-14">
              Final polish, documentation, and public release preparation
            </p>
          </div>

          <div className="bg-blue-100 border-2 border-blue-500 p-6 rounded-xl">
            <div className="flex items-center gap-4 mb-2">
              <span className="text-3xl">🔮</span>
              <h3 className="text-xl font-bold">Future: v1.1 - v2.0</h3>
            </div>
            <p className="text-gray-700 ml-14">
              Plugin system (v1.1), comprehensive docs (v1.2), AI-led proactive mode (v2.0)
            </p>
          </div>
        </div>

        <div className="mt-8 p-6 bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white rounded-xl text-center">
          <p className="text-xl font-semibold">
            🎉 Join us on the journey to 100% completion!
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-6xl mx-auto py-16 px-5">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {[
            {
              q: "Is my data really 100% private?",
              a: "Yes! All AI processing happens locally on your machine. No data ever leaves your computer. We use AES-256 encryption for your database, and the code is open-source so you can verify this yourself."
            },
            {
              q: "How can it be free forever?",
              a: "Eden V3 is built as a passion project with an MIT License. There are no server costs since everything runs locally. We believe AI assistance should be accessible to everyone without subscription barriers."
            },
            {
              q: "What languages does it support?",
              a: "The interface supports Korean and English. The AI can understand and respond in 99 languages thanks to Whisper Large V3 and Llama 3.1's multilingual capabilities."
            },
            {
              q: "Can I use it offline?",
              a: "Absolutely! After the initial model download (~12GB), Eden V3 works completely offline. No internet connection required for daily use."
            },
            {
              q: "How do I customize the AI's personality?",
              a: "Navigate to Settings > Persona and adjust any of the 28 parameters like formality, humor, verbosity, emoji usage, and more. You can also use thumbs up/down feedback to train it to your preferences."
            },
            {
              q: "How does it compare to ChatGPT or Claude in quality?",
              a: "While cloud models may have larger parameter counts, Eden V3's Llama 3.1 8B provides excellent quality for most tasks. The trade-off for complete privacy and customization is worth it for many users. Plus, it learns YOUR style over time."
            },
            {
              q: "What if I encounter bugs or issues?",
              a: "Please report bugs on our GitHub Issues page. As an open-source project at 85% completion, we're actively improving and value your feedback!"
            },
            {
              q: "Can I contribute to the project?",
              a: "Yes! We welcome contributions. Check our GitHub repository for contribution guidelines. Help us reach 100% and beyond!"
            }
          ].map((faq, index) => (
            <div
              key={index}
              className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:border-[#667eea] transition-colors"
            >
              <button
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="w-full p-6 text-left flex justify-between items-center"
              >
                <h3 className="text-xl font-bold">{faq.q}</h3>
                <span className="text-2xl">{openFaq === index ? "−" : "+"}</span>
              </button>
              {openFaq === index && (
                <div className="px-6 pb-6 text-gray-600">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-[#667eea] to-[#764ba2] text-white py-20 px-5 rounded-2xl text-center my-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Take Back Control of Your AI
          </h2>
          <p className="text-xl md:text-2xl mb-8">
            Join the movement towards privacy-first AI. Download Garden of Eden V3 today and experience true AI freedom.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-8">
            <button className="bg-white text-[#667eea] font-bold text-lg py-4 px-10 rounded-full btn-glow hover:scale-105 transition-transform">
              Download Now - It's Free!
            </button>
            <button className="bg-transparent border-2 border-white text-white font-bold text-lg py-4 px-10 rounded-full hover:bg-white hover:text-[#667eea] transition-all">
              ⭐ Star on GitHub
            </button>
          </div>

          <div className="inline-flex items-center gap-2 bg-green-500 text-white py-3 px-6 rounded-full">
            <span className="text-xl">🔒</span>
            <span className="font-semibold">100% Private • $0 Forever • MIT License</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto py-12 px-5 text-center text-gray-600">
        <div className="mb-6">
          <h3 className="text-2xl font-bold gradient-text mb-2">Garden of Eden V3</h3>
          <p className="text-lg">Version 1.0.0-beta • 85% Complete • Phase 8: Launch</p>
        </div>

        <div className="mb-6">
          <p className="mb-2">
            <strong>MIT License</strong> - Free Forever, No Restrictions
          </p>
          <p className="text-sm">
            Inspired by JARVIS from Marvel's Iron Man
          </p>
          <p className="text-sm">
            Built with ❤️ by Solo Developer
          </p>
        </div>

        <div className="text-sm text-gray-500">
          <p>
            Powered by Llama 3.1, Whisper Large V3, and LLaVA 7B
          </p>
          <p className="mt-2">
            © 2024 Garden of Eden V3. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
