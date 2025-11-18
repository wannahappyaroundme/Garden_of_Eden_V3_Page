"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Heart, Users, Zap, Lock, Sparkles, Brain } from "lucide-react";
import ComingSoonModal from "@/components/ComingSoonModal";

export default function ProductOverviewPage() {
  const t = useTranslations();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const pillars = [
    {
      icon: Heart,
      gradient: "from-white to-gray-100",
    },
    {
      icon: Users,
      gradient: "from-white to-gray-100",
    },
    {
      icon: Zap,
      gradient: "from-white to-gray-100",
    },
  ];

  const problems = [
    { icon: "🔒" },
    { icon: "💰" },
    { icon: "🤖" },
    { icon: "📡" },
    { icon: "🎯" },
    { icon: "🏢" },
  ];

  const solutions = [
    {
      icon: Lock,
      gradient: "from-white to-gray-100",
    },
    {
      icon: Sparkles,
      gradient: "from-white to-gray-100",
    },
    {
      icon: Brain,
      gradient: "from-white to-gray-100",
    },
    {
      icon: Zap,
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
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-radial-white-center">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100/50 backdrop-blur-sm border border-purple-200/60 rounded-full mb-6">
            <span className="text-purple-900 font-semibold">
              🌳 {t("productOverview.badge")} 🌳
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
            {t("productOverview.title")}
            <br />
            {t("productOverview.subtitle")}
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            {t("productOverview.vision")}
          </p>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="py-20 px-6 bg-radial-white-purple">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              {t("productOverview.threePillars.title")}
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => (
              <div
                key={index}
                className="group relative p-8 rounded-2xl bg-white/80 backdrop-blur-sm border border-purple-200/60 hover:border-purple-300 hover:shadow-xl hover:shadow-purple-200/50 transition-all duration-300"
              >
                <div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center mb-6 animate-float`}
                >
                  <pillar.icon className="w-8 h-8 text-purple-700" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">
                  {t(`productOverview.threePillars.pillar${index + 1}.title`)}
                </h3>
                <p className="text-gray-700">
                  {t(
                    `productOverview.threePillars.pillar${
                      index + 1
                    }.description`
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem vs Solution */}
      <section className="py-20 px-6 bg-radial-white-multi">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              {t("productOverview.problemSolution.title")}
            </h2>
          </div>

          {/* Problems */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold mb-8 text-center text-red-600">
              {t("productOverview.problemSolution.problemsTitle")}
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              {problems.map((item, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl bg-white/80 backdrop-blur-sm border border-red-200/60"
                >
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <p className="font-semibold text-red-700">
                    {t(`productOverview.problemSolution.problem${index + 1}`)}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center text-green-700">
              {t("productOverview.problemSolution.solutionsTitle")}
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {solutions.map((item, index) => (
                <div
                  key={index}
                  className="group relative p-6 rounded-xl bg-white/80 backdrop-blur-sm border border-green-200/60 hover:border-green-300 hover:shadow-xl hover:shadow-green-200/50 transition-all duration-300"
                >
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center mb-4`}
                  >
                    <item.icon className="w-6 h-6 text-green-700" />
                  </div>
                  <h4 className="font-bold text-lg mb-2 text-gray-900">
                    {t(
                      `productOverview.problemSolution.solution${
                        index + 1
                      }.title`
                    )}
                  </h4>
                  <p className="text-sm text-gray-700">
                    {t(
                      `productOverview.problemSolution.solution${
                        index + 1
                      }.description`
                    )}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 px-6 bg-radial-white-center">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-gray-900">
            {t("productOverview.visionSection.title")}
          </h2>
          <p className="text-2xl mb-6 leading-relaxed text-gray-700">
            {t("productOverview.visionSection.visionText1")}{" "}
            <span className="font-bold underline text-purple-700">
              {t("productOverview.visionSection.highlight1")}
            </span>
          </p>
          <p className="text-2xl leading-relaxed text-gray-700">
            {t("productOverview.visionSection.visionText2")}{" "}
            <span className="font-bold underline text-purple-700">
              {t("productOverview.visionSection.highlight2")}
            </span>{" "}
            {t("productOverview.visionSection.visionText3")}
          </p>
          <div className="mt-12 p-8 bg-white/80 backdrop-blur-sm rounded-2xl border border-purple-200/60">
            <p className="text-xl italic text-gray-700">
              "{t("productOverview.visionSection.quote")}"
            </p>
          </div>
        </div>
      </section>

      {/* Core Promise */}
      <section className="py-20 px-6 bg-radial-white-purple">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 text-gray-900">
            {t("productOverview.corePromise.title")}
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="p-6">
              <div className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent mb-3">
                {t("productOverview.corePromise.localPercent")}
              </div>
              <p className="font-semibold text-gray-700">
                {t("productOverview.corePromise.local")}
              </p>
            </div>
            <div className="p-6">
              <div className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent mb-3">
                {t("productOverview.corePromise.privatePercent")}
              </div>
              <p className="font-semibold text-gray-700">
                {t("productOverview.corePromise.private")}
              </p>
            </div>
            <div className="p-6">
              <div className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent mb-3">
                {t("productOverview.corePromise.cloudPercent")}
              </div>
              <p className="font-semibold text-gray-700">
                {t("productOverview.corePromise.cloud")}
              </p>
            </div>
            <div className="p-6">
              <div className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent mb-3">
                {t("productOverview.corePromise.subscriptionsPercent")}
              </div>
              <p className="font-semibold text-gray-700">
                {t("productOverview.corePromise.subscriptions")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-radial-white-multi">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            {t("productOverview.cta.title")}
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            {t("productOverview.cta.description")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-violet-600 text-white rounded-xl font-semibold hover:from-purple-700 hover:to-violet-700 hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-300 hover:scale-105"
            >
              {t("productOverview.cta.download")}
            </button>
            <a
              href="/product/features"
              className="px-8 py-4 bg-transparent border-2 border-purple-600 text-purple-700 rounded-xl font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300 hover:scale-105"
            >
              {t("productOverview.cta.features")}
            </a>
          </div>
        </div>
      </section>

      {/* Coming Soon Modal */}
      <ComingSoonModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
