import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Footer() {
  const t = useTranslations();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Eden</h3>
            <p className="text-gray-400 text-sm">{t("footer.description")}</p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold text-white mb-4">
              {t("footer.product")}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/product/overview"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {t("footer.overview")}
                </Link>
              </li>
              <li>
                <Link
                  href="/features"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {t("footer.features")}
                </Link>
              </li>
              <li>
                <Link
                  href="/product/technology"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {t("footer.technology")}
                </Link>
              </li>
              <li>
                <Link
                  href="/download"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {t("footer.download")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-white mb-4">
              {t("footer.resources")}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/resources/documentation"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {t("footer.documentation")}
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {t("footer.faq")}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {t("footer.contact")}
                </Link>
              </li>
              <li>
                <a
                  href="https://github.com/wannahappyaroundme/Garden_of_Eden_V3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-white mb-4">
              {t("footer.legal")}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/legal/privacy-policy"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {t("footer.privacyPolicy")}
                </Link>
              </li>
              <li>
                <Link
                  href="/legal/terms-of-service"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {t("footer.termsOfService")}
                </Link>
              </li>
              <li>
                <Link
                  href="/legal/license"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {t("footer.license")}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>
            © {currentYear} Eden. {t("footer.allRightsReserved")}
          </p>
          <p>
            {t("footer.madeWith")} <span className="text-white">💜</span>{" "}
            {t("footer.forPrivacy")}
          </p>
        </div>
      </div>
    </footer>
  );
}
