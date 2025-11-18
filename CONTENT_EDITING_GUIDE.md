# 콘텐츠 수정 가이드 (Content Editing Guide)

Eden Proejct 웹사이트의 콘텐츠를 수정하는 방법을 안내합니다.

---

## 📝 목차

1. [번역 텍스트 수정하기](#1-번역-텍스트-수정하기)
2. [타이핑 애니메이션 단어 변경하기](#2-타이핑-애니메이션-단어-변경하기)
3. [주요 페이지별 파일 위치](#3-주요-페이지별-파일-위치)
4. [빌드 및 미리보기](#4-빌드-및-미리보기)
5. [자주 묻는 질문](#5-자주-묻는-질문)

---

## 1. 번역 텍스트 수정하기

모든 페이지의 텍스트 내용은 **JSON 번역 파일**에 저장되어 있습니다.

### 📂 번역 파일 위치

```
/messages/
├── ko.json  # 한국어 번역
└── en.json  # 영어 번역
```

### ✏️ 수정 방법

1. **한국어 텍스트 수정**: `/messages/ko.json` 파일 열기
2. **영어 텍스트 수정**: `/messages/en.json` 파일 열기
3. 원하는 키를 찾아 값(value)을 수정

### 예시: 메인 페이지 제목 변경하기

**파일**: `/messages/ko.json`

```json
{
  "hero": {
    "title": "완전한 프라이버시를 가진 AI", // ← 이 부분을 수정
    "subtitle": "당신의",
    "description": "Eden Proejct는 100% 로컬에서 작동하는 AI 어시스턴트입니다."
  }
}
```

**파일**: `/messages/en.json`

```json
{
  "hero": {
    "title": "AI with Complete Privacy", // ← 이 부분을 수정
    "subtitle": "Your",
    "description": "Eden Proejct is an AI assistant that runs 100% locally."
  }
}
```

### 🔑 주요 섹션별 키 구조

| 페이지/섹션 | JSON 키             | 설명                             |
| ----------- | ------------------- | -------------------------------- |
| 메인 페이지 | `hero.*`            | 히어로 섹션 (제목, 부제목, 설명) |
| 기능 소개   | `features.*`        | 주요 기능 설명                   |
| 제품 개요   | `productOverview.*` | 제품 소개 페이지                 |
| FAQ         | `faq.*`             | 자주 묻는 질문                   |
| 법적 고지   | `legal.*`           | 개인정보처리방침, 이용약관 등    |
| 연락처      | `contact.*`         | 문의하기 페이지                  |

---

## 2. 타이핑 애니메이션 단어 변경하기

메인 페이지에서 **"동반자", "절친", "동료", "반쪽"** 처럼 계속 바뀌는 타이핑 효과의 단어를 변경할 수 있습니다.

### 📂 파일 위치

```
/components/TypedText.tsx
```

### ✏️ 수정 방법

파일을 열고 13-16번째 줄의 배열을 수정하세요:

```tsx
const words =
  locale === "ko"
    ? ["동반자", "절친", "동료", "반쪽"] // ← 한국어 단어 수정
    : ["companion", "best friend", "colleague", "other half"]; // ← 영어 단어 수정
```

### 예시: 단어 추가/변경

```tsx
const words =
  locale === "ko"
    ? ["친구", "파트너", "조력자", "협력자", "동료"] // 5개로 늘림
    : ["friend", "partner", "helper", "collaborator", "ally"];
```

### ⚙️ 애니메이션 속도 조절

같은 파일의 19-24번째 줄에서 속도를 조절할 수 있습니다:

```tsx
typed.current = new Typed(el.current, {
  strings: words,
  typeSpeed: 100, // 타이핑 속도 (숫자가 작을수록 빠름)
  backSpeed: 50, // 삭제 속도 (숫자가 작을수록 빠름)
  backDelay: 2000, // 삭제 전 대기 시간 (밀리초)
  startDelay: 1000, // 시작 전 대기 시간 (밀리초)
  loop: true,
  showCursor: true,
  cursorChar: "|", // 커서 모양 변경 가능 (예: '_', '▌')
});
```

---

## 3. 주요 페이지별 파일 위치

### 🏠 메인 페이지

**파일**: `/app/[locale]/page.tsx`

- 히어로 섹션 (Hero Section)
- CTA 버튼
- 주요 기능 카드

### 📄 제품 (Product) 페이지

| 페이지    | 파일 경로                                   |
| --------- | ------------------------------------------- |
| 제품 개요 | `/app/[locale]/product/overview/page.tsx`   |
| 주요 기능 | `/app/[locale]/features/page.tsx`           |
| 기술 스택 | `/app/[locale]/product/technology/page.tsx` |
| 로드맵    | `/app/[locale]/product/roadmap/page.tsx`    |

### 🔐 왜 Eden인가? (Why Eden) 페이지

| 페이지          | 파일 경로                                    |
| --------------- | -------------------------------------------- |
| 프라이버시 우선 | `/app/[locale]/why-eden/privacy/page.tsx`    |
| 경쟁사 비교     | `/app/[locale]/why-eden/comparison/page.tsx` |

### 📚 리소스 (Resources) 페이지

| 페이지   | 파일 경로                                        |
| -------- | ------------------------------------------------ |
| 문서     | `/app/[locale]/resources/documentation/page.tsx` |
| 커뮤니티 | `/app/[locale]/resources/community/page.tsx`     |
| FAQ      | `/app/[locale]/faq/page.tsx`                     |

### ⚖️ 법적 고지 (Legal) 페이지

| 페이지            | 파일 경로                                       |
| ----------------- | ----------------------------------------------- |
| 개인정보처리방침  | `/app/[locale]/legal/privacy-policy/page.tsx`   |
| 이용약관          | `/app/[locale]/legal/terms-of-service/page.tsx` |
| 오픈소스 라이선스 | `/app/[locale]/legal/license/page.tsx`          |

### 📞 기타 페이지

| 페이지    | 파일 경로                         |
| --------- | --------------------------------- |
| 문의하기  | `/app/[locale]/contact/page.tsx`  |
| 가격      | `/app/[locale]/pricing/page.tsx`  |
| 다운로드  | `/app/[locale]/download/page.tsx` |
| 회사 소개 | `/app/[locale]/about/page.tsx`    |

---

## 4. 빌드 및 미리보기

### 🚀 개발 서버 실행 (실시간 미리보기)

수정 사항을 실시간으로 확인하려면:

```bash
npm run dev
```

브라우저에서 `http://localhost:3000` 열기

### 🏗️ 프로덕션 빌드

배포 전 최종 빌드 테스트:

```bash
npm run build
```

### 📦 빌드된 사이트 미리보기

```bash
npm run start
```

---

## 5. 자주 묻는 질문

### Q1. 번역 파일을 수정했는데 반영이 안 돼요

**A**: 개발 서버를 재시작하세요:

1. 터미널에서 `Ctrl+C`로 서버 중지
2. `npm run dev`로 다시 실행

### Q2. 새로운 페이지를 추가하고 싶어요

**A**:

1. `/app/[locale]/새폴더/page.tsx` 파일 생성
2. `/messages/ko.json`과 `/messages/en.json`에 번역 추가
3. `/components/Navbar.tsx`의 메뉴에 링크 추가

### Q3. 이미지를 변경하고 싶어요

**A**: `/public/` 폴더에 이미지를 넣고, 페이지에서 다음과 같이 사용:

```tsx
<img src="/your-image.png" alt="설명" />
```

### Q4. 색상을 변경하고 싶어요

**A**:

- **보라색 계열**: `purple-600`, `violet-600` 클래스 사용 중
- **그라데이션**: `from-purple-600 to-violet-600`
- Tailwind CSS 클래스를 각 페이지의 `className`에서 수정

### Q5. 글꼴(폰트)를 변경하고 싶어요

**A**: `/app/[locale]/layout.tsx` 파일에서 폰트 설정 변경

### Q6. 언어 토글 위치를 변경하고 싶어요

**A**: `/components/LanguageSwitcher.tsx`의 16번째 줄:

- **중앙**: `left-1/2 -translate-x-1/2`
- **우측**: `right-4`
- **좌측**: `left-4`

---

## 📞 추가 도움이 필요하신가요?

- **GitHub Issues**: [문제 제기하기](https://github.com/wannahappyaroundme/Garden_of_Eden_V3/issues)
- **GitHub Discussions**: [질문하기](https://github.com/wannahappyaroundme/Garden_of_Eden_V3/discussions)
- **이메일**: bu5119@hanyang.ac.kr

---

**마지막 업데이트**: 2025년 1월
**버전**: Eden Proejct Website 2.0
