'use client';

import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { useLocale } from 'next-intl';

export default function TypedText() {
  const el = useRef<HTMLSpanElement>(null);
  const typed = useRef<Typed | null>(null);
  const locale = useLocale();

  useEffect(() => {
    // 언어별 단어 배열
    const words = locale === 'ko'
      ? ['동반자', '절친', '동료', '반쪽']
      : ['companion', 'best friend', 'colleague', 'other half'];

    if (el.current) {
      typed.current = new Typed(el.current, {
        strings: words,
        typeSpeed: 100,        // 타이핑 속도 (ms)
        backSpeed: 50,         // 삭제 속도 (ms)
        backDelay: 2000,       // 삭제 전 대기 시간
        startDelay: 1000,      // 시작 전 대기 시간
        loop: true,            // 무한 반복
        showCursor: true,      // 커서 표시
        cursorChar: '|',       // 커서 모양
        autoInsertCss: true,   // 자동 CSS 삽입
      });
    }

    // Cleanup
    return () => {
      if (typed.current) {
        typed.current.destroy();
      }
    };
  }, [locale]);

  return <span ref={el} className="bg-gradient-to-r from-purple-600 via-violet-600 to-purple-600 bg-clip-text text-transparent font-bold animate-gradient-shift" style={{backgroundSize: '200% 200%'}} />;
}
