@AGENTS.md

# 포트폴리오 사이트 가이드

## 디자인 컨셉
**블루/화이트** - 깔끔하고 전문적인 느낌

---

## 색상 시스템 (필수 준수)

### Primary Colors (메인)
```
blue-600     : 메인 컬러 (버튼, 강조, 링크)
blue-500     : 호버 상태
blue-50      : 연한 배경 (섹션 하이라이트)
blue-100     : 배지, 태그 배경
```

### Neutral Colors (기본)
```
gray-900     : 제목, 본문 텍스트
gray-700     : 서브 텍스트
gray-600     : 설명 텍스트
gray-500     : 캡션, 플레이스홀더
gray-200     : 테두리 (border)
gray-100     : 코드 배경
gray-50      : 섹션 배경
white        : 카드 배경
```

### Accent Colors (포인트 - 최소한으로 사용)
```
green-600    : 성공, 완료, 긍정적 수치
red-500      : 에러, 삭제
amber-500    : 경고, 주의
```

### 사용 금지
- ❌ 그라데이션 남발 (gradient-to-r 등) - 꼭 필요한 경우만
- ❌ purple, pink, indigo, violet 등 파란색 계열 외 색상
- ❌ 섹션마다 다른 색상 테마 사용

### 좋은 예시
```tsx
// 섹션 배경
<div className="bg-blue-50 rounded-xl p-6 border border-blue-100">

// 카드
<div className="bg-white rounded-lg border border-gray-200 p-4">

// 버튼
<button className="bg-blue-600 text-white hover:bg-blue-500">

// 배지
<span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">
```

---

## 컴포넌트 구조 규칙

### 폴더 구조
```
/app/projects/{project-name}/
├── page.tsx                    # 메인 페이지 (import만)
├── _components/                # 컴포넌트 폴더
│   ├── index.ts                # export 모음
│   ├── Header.tsx
│   ├── HeroSection.tsx
│   ├── {Feature}Section.tsx    # 기능별 섹션
│   ├── TechStackSection.tsx
│   └── Footer.tsx
└── _data/
    └── constants.ts            # 상수 데이터
```

### page.tsx 패턴
```tsx
"use client";

import {
  Header,
  HeroSection,
  // ...섹션들
  Footer,
} from "./_components";

const ProjectPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-5xl mx-auto px-6 py-12">
        <HeroSection />
        {/* 섹션들 */}
      </main>
      <Footer />
    </div>
  );
};

export default ProjectPage;
```

### 섹션 컴포넌트 패턴
```tsx
export const FeatureSection = () => {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">섹션 제목</h2>

      {/* 메인 컨텐츠 박스 */}
      <div className="bg-blue-50 rounded-xl p-6 border border-blue-100 mb-6">
        {/* 내용 */}
      </div>

      {/* 서브 컨텐츠 */}
      <div className="bg-white rounded-xl border border-gray-200 p-4">
        {/* 내용 */}
      </div>
    </section>
  );
};
```

---

## 포트폴리오 페이지 구성 (필수)

각 프로젝트 페이지는 아래 순서로 구성:

```
1. HeroSection      - 프로젝트 소개, 기간, 팀 구성, 링크
2. MetricsSection   - 성과 (숫자는 text-blue-600으로 강조)
3. ProblemSolvingSection - 문제 해결 방식 (협업/프로세스 문제)
4. ApproachesSection     - 기술적 접근법 (내가 구현한 것)
5. ArchitectureSection   - 프로젝트 아키텍처 (해당되는 경우)
6. TechStackSection      - 기술 스택
```

### 문제 해결 카드 구조 (문제 → 해결 → 효과)
```tsx
<div className="bg-white rounded-xl border border-gray-200 p-5">
  <h3 className="font-bold text-gray-900 mb-3">{title}</h3>
  <div className="grid md:grid-cols-3 gap-4">
    <div className="bg-gray-50 rounded-lg p-4">
      <p className="text-xs font-medium text-gray-500 mb-2">문제</p>
      <p className="text-sm text-gray-700">{problem}</p>
    </div>
    <div className="bg-gray-50 rounded-lg p-4">
      <p className="text-xs font-medium text-gray-500 mb-2">해결</p>
      <p className="text-sm text-gray-700">{solution}</p>
    </div>
    <div className="bg-gray-50 rounded-lg p-4">
      <p className="text-xs font-medium text-gray-500 mb-2">효과</p>
      <p className="text-sm font-medium text-blue-600">{effect}</p>
    </div>
  </div>
</div>
```

### _data 폴더 구조
```
_data/
├── constants.ts    # 기술스택 등 상수
└── {project}.ts    # 면접용 상세 정보
    ├── problemSolving[]   # 문제 해결 사례 (협업/프로세스)
    ├── approaches[]       # 기술적 접근법
    ├── techStackDetails   # 기술 스택 상세
    └── interviewQA[]      # 면접 예상 Q&A
```

### 기술 스택 배지 스타일 (Header와 통일)
```tsx
<span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full font-medium">
  {tech}
</span>
```

---

## 코드 블록 스타일

### 코드 미리보기
```tsx
<div className="text-xs font-mono bg-gray-900 text-gray-100 rounded p-3">
  <div className="text-gray-500">// 주석</div>
  <div><span className="text-purple-400">const</span> example = ...</div>
</div>
```

### 코드 하이라이팅 색상
```
text-purple-400  : 키워드 (const, import, export, if, return)
text-yellow-300  : 함수명, 메서드
text-green-300   : 문자열
text-blue-300    : 속성명
text-orange-300  : 타입
text-gray-500    : 주석
```

---

## 주의사항

1. **색상 일관성**: 프로젝트별로 다른 테마 색상 사용 금지 (전시회=blue, 스마트관광=emerald 이런 거 X)
2. **그라데이션 자제**: 아이콘 배경 정도만 허용
3. **섹션 구분**: `mb-16`으로 통일
4. **카드 스타일**: `rounded-xl border border-gray-200` 통일
5. **폰트 크기**: 제목 `text-2xl`, 소제목 `text-lg`, 본문 `text-sm`

---

## PDF 생성 방법 (HTML → PDF)

puppeteer를 사용하여 HTML을 PDF로 변환합니다.

### 이력서 HTML 파일
- `resume_styled.html` - 기본 이력서
- `resume_oliveyoung.html` - 올리브영 지원용

### HTML 스타일 필수 요소
```html
<!-- 폰트 -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css">

<!-- 기본 스타일 -->
body { font-family: 'Pretendard'; font-size: 10pt; padding: 40px 50px; max-width: 210mm; }
h1 { font-size: 24pt; }
h2 { font-size: 14pt; border-bottom: 2px solid #111; }
h3 { font-size: 12pt; }
```

### PDF 생성 스크립트 (`/tmp/generate-pdf.js`)
```javascript
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  // HTML 파일 경로를 첫 번째 인자로 전달
  await page.goto(`file://${process.argv[2]}`, { waitUntil: 'networkidle0' });
  await page.pdf({
    path: process.argv[3] || '신희제_프론트엔드개발자_이력서.pdf',
    format: 'A4',
    margin: { top: '20mm', right: '15mm', bottom: '20mm', left: '15mm' },
    printBackground: true
  });
  await browser.close();
  console.log('PDF generated successfully!');
})();
```

### 실행
```bash
# puppeteer 설치 (최초 1회)
cd /tmp && npm init -y && npm install puppeteer

# PDF 생성 (HTML 파일 경로, 출력 PDF 경로)
node /tmp/generate-pdf.js "/Users/ezpmp/IdeaProjects/pro/resume_styled.html" "/Users/ezpmp/IdeaProjects/pro/public/신희제_프론트엔드개발자_이력서.pdf"
```
