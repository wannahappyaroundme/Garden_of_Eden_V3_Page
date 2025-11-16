'use client';

import { useState, useEffect } from 'react';
import { useLocale } from 'next-intl';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const locale = useLocale();
  const pathname = usePathname();

  // 메뉴 항목 (다국어)
  const menuItems = locale === 'ko'
    ? [
        { id: '', label: '홈', path: '' },
        { id: 'about', label: '소개', path: '/about' },
        { id: 'features', label: '기능', path: '/features' },
        { id: 'pricing', label: '가격', path: '/pricing' },
        { id: 'download', label: '다운로드', path: '/download' },
      ]
    : [
        { id: '', label: 'Home', path: '' },
        { id: 'about', label: 'About', path: '/about' },
        { id: 'features', label: 'Features', path: '/features' },
        { id: 'pricing', label: 'Pricing', path: '/pricing' },
        { id: 'download', label: 'Download', path: '/download' },
      ];

  // 현재 활성 페이지 감지
  const currentPath = pathname.replace(`/${locale}`, '') || '';
  const activePage = menuItems.find(item => item.path === currentPath)?.id || '';

  // 스크롤 감지
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-xl shadow-lg'
          : 'bg-white/60 backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href={`/${locale}`}
            className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent hover:from-purple-500 hover:to-violet-500 transition-all"
          >
            Garden of Eden
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <Link
                key={item.id}
                href={`/${locale}${item.path}`}
                className={`font-semibold transition-all duration-300 relative ${
                  activePage === item.id
                    ? 'text-purple-600'
                    : 'text-gray-700 hover:text-purple-600'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
                {activePage === item.id && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-600 to-violet-600"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <svg
              className="w-6 h-6 text-gray-700"
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
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-200"
          >
            <div className="px-6 py-4 space-y-3">
              {menuItems.map((item) => (
                <Link
                  key={item.id}
                  href={`/${locale}${item.path}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block w-full text-left py-2 px-4 rounded-lg font-semibold transition-all ${
                    activePage === item.id
                      ? 'bg-gradient-to-r from-purple-600 to-violet-600 text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
