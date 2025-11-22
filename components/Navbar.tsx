"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface SubMenuItem {
  id: string;
  label: string;
  path: string;
}

interface MenuItem {
  id: string;
  label: string;
  path?: string;
  submenu?: SubMenuItem[];
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const nextIntlLocale = useLocale();

  // Extract locale from pathname - pathname is source of truth for static export
  const locale = React.useMemo(() => {
    const segments = pathname.split("/").filter(Boolean);
    const firstSegment = segments[0];

    // Priority: pathname first, then useLocale fallback
    if (firstSegment === "ko") return "ko";
    if (firstSegment === "en") return "en";

    // Fallback to useLocale
    return nextIntlLocale || "en";
  }, [pathname, nextIntlLocale]);

  // 메뉴 항목 (다국어 + 드롭다운) - 5개로 간소화
  const menuItems: MenuItem[] =
    locale === "ko"
      ? [
          { id: "home", label: "홈", path: "/" },
          {
            id: "product",
            label: "제품",
            submenu: [
              { id: "overview", label: "소개", path: "/product/overview" },
              { id: "features", label: "기능", path: "/features" },
              { id: "technology", label: "기술", path: "/product/technology" },
            ],
          },
          { id: "why-eden", label: "왜 Eden인가?", path: "/why-eden" },
          { id: "download", label: "다운로드", path: "/download" },
          {
            id: "resources",
            label: "리소스",
            submenu: [
              {
                id: "documentation",
                label: "문서",
                path: "/resources/documentation",
              },
              { id: "faq", label: "FAQ", path: "/faq" },
              { id: "contact", label: "문의하기", path: "/contact" },
            ],
          },
        ]
      : [
          { id: "home", label: "Home", path: "/" },
          {
            id: "product",
            label: "Product",
            submenu: [
              { id: "overview", label: "Overview", path: "/product/overview" },
              { id: "features", label: "Features", path: "/features" },
              {
                id: "technology",
                label: "Technology",
                path: "/product/technology",
              },
            ],
          },
          { id: "why-eden", label: "Why Eden?", path: "/why-eden" },
          { id: "download", label: "Download", path: "/download" },
          {
            id: "resources",
            label: "Resources",
            submenu: [
              {
                id: "documentation",
                label: "Documentation",
                path: "/resources/documentation",
              },
              { id: "faq", label: "FAQ", path: "/faq" },
              { id: "contact", label: "Contact", path: "/contact" },
            ],
          },
        ];

  // 현재 활성 페이지 감지 - locale을 올바르게 처리
  const getPathWithoutLocale = () => {
    const segments = pathname.split("/").filter(Boolean);
    // 첫 번째 segment가 locale이면 제거
    if (segments[0] === locale) {
      return "/" + segments.slice(1).join("/");
    }
    return pathname || "/";
  };

  const currentPath = getPathWithoutLocale();

  const isPathActive = (path: string) => {
    if (path === "/") return currentPath === "/";
    return currentPath.startsWith(path);
  };

  const getActiveSection = () => {
    for (const item of menuItems) {
      if (item.path && isPathActive(item.path)) return item.id;
      if (item.submenu) {
        for (const subItem of item.submenu) {
          if (isPathActive(subItem.path)) return item.id;
        }
      }
    }
    return "";
  };

  const activePage = getActiveSection();

  // 스크롤 감지
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 드롭다운 외부 클릭 감지
  useEffect(() => {
    const handleClickOutside = () => setOpenDropdown(null);
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-xl shadow-lg border-b border-purple-200/60"
          : "bg-white/80 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href={`/${locale}`}
            className="flex items-center hover:opacity-80 transition-opacity"
          >
            <Image
              src="/logo.png"
              alt="Eden Logo"
              width={120}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            {menuItems.map((item) => (
              <div
                key={item.id}
                className="relative group"
                onMouseEnter={() => item.submenu && setOpenDropdown(item.id)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {item.submenu ? (
                  // Dropdown menu item
                  <div className="relative">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setOpenDropdown(
                          openDropdown === item.id ? null : item.id
                        );
                      }}
                      className={`flex items-center gap-1 font-semibold transition-all duration-300 ${
                        activePage === item.id
                          ? "text-purple-700"
                          : "text-gray-600 hover:text-purple-600"
                      }`}
                    >
                      {item.label}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          openDropdown === item.id ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {activePage === item.id && (
                      <motion.div
                        layoutId="activeSection"
                        className="absolute -bottom-6 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-600 to-violet-600"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}

                    {/* Dropdown panel */}
                    <AnimatePresence>
                      {openDropdown === item.id && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-6 w-48 bg-white rounded-lg shadow-xl border border-purple-200/60 overflow-hidden"
                        >
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.id}
                              href={`/${locale}${subItem.path}`}
                              className={`block px-4 py-3 text-sm font-medium transition-all duration-300 ${
                                isPathActive(subItem.path)
                                  ? "bg-purple-100 text-purple-700 font-bold"
                                  : "text-gray-600 hover:bg-purple-50 hover:text-purple-600"
                              }`}
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  // Regular menu item
                  <Link
                    href={`/${locale}${item.path}`}
                    className={`font-semibold transition-all duration-300 relative ${
                      activePage === item.id
                        ? "text-purple-700"
                        : "text-gray-600 hover:text-purple-600"
                    }`}
                  >
                    {item.label}
                    {activePage === item.id && (
                      <motion.div
                        layoutId="activeSection"
                        className="absolute -bottom-6 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-600 to-violet-600"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-purple-100 transition-colors"
          >
            <svg
              className="w-6 h-6 text-purple-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/95 backdrop-blur-xl border-t border-purple-200/60"
          >
            <div className="px-6 py-4 space-y-2 max-h-[70vh] overflow-y-auto">
              {menuItems.map((item) => (
                <div key={item.id}>
                  {item.submenu ? (
                    // Mobile dropdown
                    <div>
                      <button
                        onClick={() =>
                          setOpenDropdown(
                            openDropdown === item.id ? null : item.id
                          )
                        }
                        className={`flex items-center justify-between w-full text-left py-2 px-4 rounded-lg font-semibold transition-all ${
                          activePage === item.id
                            ? "bg-purple-100 text-purple-700"
                            : "text-gray-700 hover:bg-purple-50"
                        }`}
                      >
                        {item.label}
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            openDropdown === item.id ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {openDropdown === item.id && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="ml-4 mt-1 space-y-1"
                          >
                            {item.submenu.map((subItem) => (
                              <Link
                                key={subItem.id}
                                href={`/${locale}${subItem.path}`}
                                onClick={() => {
                                  setIsMobileMenuOpen(false);
                                  setOpenDropdown(null);
                                }}
                                className={`block py-2 px-4 rounded-lg text-sm font-medium transition-all ${
                                  isPathActive(subItem.path)
                                    ? "bg-gradient-to-r from-purple-600 to-violet-600 text-white"
                                    : "text-gray-600 hover:bg-purple-100"
                                }`}
                              >
                                {subItem.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    // Regular mobile item
                    <Link
                      href={`/${locale}${item.path}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block w-full text-left py-2 px-4 rounded-lg font-semibold transition-all ${
                        activePage === item.id
                          ? "bg-gradient-to-r from-purple-600 to-violet-600 text-white"
                          : "text-gray-700 hover:bg-purple-50"
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
