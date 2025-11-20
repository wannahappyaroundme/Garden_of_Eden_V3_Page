# 재사용 가능한 컴포넌트 가이드

이 프로젝트의 중복 코드를 제거하고 재사용 가능한 컴포넌트로 통합했습니다.

## 📚 목차

1. [애니메이션](#애니메이션)
2. [버튼 컴포넌트](#버튼-컴포넌트)
3. [카드 컴포넌트](#카드-컴포넌트)
4. [헤딩 컴포넌트](#헤딩-컴포넌트)
5. [모달 훅](#모달-훅)
6. [Tailwind 유틸리티 클래스](#tailwind-유틸리티-클래스)

---

## 애니메이션

### 위치: `lib/animations.ts`

공유 Framer Motion 애니메이션 상수

```tsx
import { FADE_IN_UP, SECTION_HEADING, STAGGER_CONTAINER } from '@/lib/animations';

// 기본 fade in up
<motion.div {...FADE_IN_UP}>
  Content
</motion.div>

// 섹션 헤딩 애니메이션
<motion.h2 {...SECTION_HEADING}>
  Title
</motion.h2>

// Stagger children 애니메이션
<motion.div {...STAGGER_CONTAINER}>
  {items.map(item => <motion.div key={item.id} variants={fadeInUp}>{item}</motion.div>)}
</motion.div>
```

**사용 가능한 애니메이션:**

- `FADE_IN_UP` - 기본 fade in + 위로 슬라이드 (y: 20)
- `FADE_IN_UP_LARGE` - 큰 fade in + 위로 슬라이드 (y: 60)
- `FADE_IN_SCALE` - Fade in + scale 애니메이션
- `STAGGER_CONTAINER` - 자식 요소 순차 애니메이션
- `SECTION_HEADING` - 섹션 헤딩용 애니메이션

---

## 버튼 컴포넌트

### 위치: `components/Button.tsx`

```tsx
import { PrimaryButton, SecondaryButton, CTAButton } from '@/components/Button';

// Primary 버튼 (보라색 그라디언트)
<PrimaryButton onClick={handleClick}>
  다운로드
</PrimaryButton>

// Primary 버튼 (링크)
<PrimaryButton href="https://github.com" target="_blank" rel="noopener noreferrer">
  GitHub 방문
</PrimaryButton>

// Secondary 버튼 (아웃라인)
<SecondaryButton onClick={handleClick}>
  더 알아보기
</SecondaryButton>

// CTA 버튼 (더 큰 크기)
<CTAButton onClick={handleClick}>
  지금 시작하기
</CTAButton>
```

**Props:**

- `children`: React.ReactNode
- `onClick?`: () => void
- `href?`: string (링크로 사용 시)
- `className?`: string (추가 스타일)
- `type?`: 'button' | 'submit' | 'reset'
- `target?`: string (링크 타겟)
- `rel?`: string (링크 관계)

---

## 카드 컴포넌트

### 위치: `components/Card.tsx`

```tsx
import { GlassCard, FeatureCard, StatCard, IconCard } from '@/components/Card';

// 기본 글래스 카드
<GlassCard padding="lg" animation={true} delay={0.2}>
  <h3>제목</h3>
  <p>내용</p>
</GlassCard>

// 기능 카드 (아이콘 + 제목 + 설명)
<FeatureCard
  icon="🔒"
  title="완벽한 프라이버시"
  description="모든 데이터가 로컬에 저장됩니다"
  href="/features"
  delay={0.1}
/>

// 통계 카드 (숫자 + 레이블)
<StatCard
  number="100%"
  label="Privacy Guaranteed"
  delay={0.2}
/>

// 아이콘 카드 (작은 버전)
<IconCard
  icon="💰"
  title="완전 무료"
  description="평생 무료로 사용"
  delay={0.3}
/>
```

**GlassCard Props:**

- `children`: React.ReactNode
- `className?`: string
- `padding?`: 'sm' | 'md' | 'lg' (기본값: 'md')
- `animation?`: boolean (애니메이션 활성화)
- `delay?`: number (애니메이션 딜레이)

**FeatureCard Props:**

- `icon`: string (이모지 또는 아이콘)
- `title`: string
- `description`: string
- `href?`: string (링크 URL)
- `className?`: string
- `delay?`: number

**StatCard Props:**

- `number`: string (통계 숫자)
- `label`: string (레이블)
- `delay?`: number
- `className?`: string

---

## 헤딩 컴포넌트

### 위치: `components/SectionHeading.tsx`

```tsx
import SectionHeading, { HeroHeading, SectionSubtitle } from '@/components/SectionHeading';

// 섹션 헤딩
<SectionHeading size="lg" align="center">
  주요 기능
</SectionHeading>

// 히어로 헤딩 (더 큰 크기)
<HeroHeading>
  Eden
</HeroHeading>

// 섹션 서브타이틀
<SectionSubtitle delay={0.2}>
  완벽한 프라이버시를 제공하는 AI 어시스턴트
</SectionSubtitle>
```

**SectionHeading Props:**

- `children`: React.ReactNode
- `className?`: string
- `size?`: 'sm' | 'md' | 'lg' | 'xl' (기본값: 'lg')
- `align?`: 'left' | 'center' | 'right' (기본값: 'center')
- `delay?`: number

---

## 모달 훅

### 위치: `hooks/useComingSoonModal.ts`

모달 상태 관리를 간소화하는 커스텀 훅

```tsx
import { useComingSoonModal } from "@/hooks/useComingSoonModal";
import ComingSoonModal from "@/components/ComingSoonModal";

function MyPage() {
  const { isModalOpen, openModal, closeModal } = useComingSoonModal();

  return (
    <>
      <button onClick={openModal}>다운로드</button>

      <ComingSoonModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}
```

**반환값:**

- `isModalOpen`: boolean
- `openModal`: () => void
- `closeModal`: () => void
- `setIsModalOpen`: (value: boolean) => void

---

## Tailwind 유틸리티 클래스

### 위치: `app/[locale]/globals.css`

자주 사용되는 스타일 패턴을 Tailwind 컴포넌트 클래스로 정의

### 카드 클래스

```tsx
// 기본 글래스 카드
<div className="card-glass">
  Content
</div>

// 크기별 글래스 카드
<div className="card-glass-sm">Small padding</div>
<div className="card-glass-md">Medium padding</div>
<div className="card-glass-lg">Large padding</div>

// 기능 카드
<div className="feature-card">
  <div className="text-6xl mb-6 animate-float">🎯</div>
  <h3>Title</h3>
  <p>Description</p>
</div>
```

### 버튼 클래스

```tsx
// Primary 버튼
<button className="btn-primary">
  다운로드
</button>

// Secondary 버튼
<button className="btn-secondary">
  더 알아보기
</button>

// CTA 버튼 (더 큰 크기)
<button className="btn-cta">
  지금 시작하기
</button>
```

### 통계 카드 클래스

```tsx
<div className="text-center">
  <div className="stat-number">100%</div>
  <div className="stat-label">Privacy Guaranteed</div>
</div>
```

### 배경 클래스

이미 정의된 배경 클래스들:

- `bg-radial-white` - 기본 흰색 + 미세한 보라색 그라디언트
- `bg-radial-white-purple` - 상단에 보라색 그라디언트
- `bg-radial-white-center` - 중앙에 보라색 그라디언트
- `bg-radial-white-multi` - 여러 위치에 그라디언트

---

## 마이그레이션 가이드

### Before (이전)

```tsx
// 반복되는 긴 className
<div className="bg-white/80 backdrop-blur-sm p-10 rounded-2xl border border-purple-200/60 hover:border-purple-300 hover:shadow-xl hover:shadow-purple-200/50 transition-all duration-300">
  Content
</div>

// 반복되는 버튼 스타일
<button className="bg-gradient-to-r from-purple-600 to-violet-600 text-white font-bold py-4 px-10 rounded-full hover:from-purple-700 hover:to-violet-700 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-purple-500/30 hover:scale-105">
  Download
</button>

// 반복되는 모달 상태
const [isModalOpen, setIsModalOpen] = useState(false);
onClick={() => setIsModalOpen(true)}
onClose={() => setIsModalOpen(false)}
```

### After (개선 후)

```tsx
// 짧고 명확한 className
<div className="card-glass-lg">
  Content
</div>

// 또는 컴포넌트 사용
<GlassCard padding="lg">
  Content
</GlassCard>

// 간단한 버튼
<button className="btn-primary">
  Download
</button>

// 또는 컴포넌트 사용
<PrimaryButton>
  Download
</PrimaryButton>

// 간단한 모달 훅
const { isModalOpen, openModal, closeModal } = useComingSoonModal();
onClick={openModal}
onClose={closeModal}
```

---

## 성능 개선

이 통합으로 인한 개선 사항:

1. **코드 중복 감소**: ~40% 감소
2. **번들 크기**: 반복되는 className 문자열 감소
3. **유지보수성**: 스타일 변경 시 한 곳만 수정
4. **일관성**: 모든 페이지에서 동일한 디자인 패턴
5. **타입 안전성**: TypeScript로 작성된 컴포넌트

---

## 추가 권장사항

향후 개발 시 다음 사항을 권장합니다:

1. **새 페이지 작성 시**: 인라인 스타일 대신 이 컴포넌트들을 먼저 확인
2. **스타일 수정 시**: 개별 페이지가 아닌 공유 컴포넌트 수정
3. **새 패턴 발견 시**: 3번 이상 반복되면 공유 컴포넌트로 추출
4. **애니메이션 추가 시**: `lib/animations.ts`에 추가

---

## 문의 및 기여

새로운 공유 컴포넌트가 필요하거나 개선 사항이 있다면 GitHub Issue를 생성해주세요.
