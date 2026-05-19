# 4J - 행사장 수용인원 자동계산

> AI 기반 행사장 수용인원 자동 계산 및 실시간 혼잡도 모니터링 서비스
>
> **Demo:** https://4j-mgqp.vercel.app/
> **GitHub:** https://github.com/HeeJeShin/4j

---

## 프로젝트 개요

사내 AI Boost Challenge 해커톤 (1박 2일)에서 개발한 서비스.
행사장 도면을 AI로 분석하고, 수용인원을 자동 계산하며, 실시간 혼잡도를 모니터링하는 기능 제공.

**팀 구성:** 기획 1, 프론트엔드 3

**담당 역할:**
- Google Gemini AI 연동 및 프롬프트 설계
- AI 응답 파싱 및 수용인원 계산 로직 구현

---

## 기술 스택

| 분류 | 기술 |
|------|------|
| Framework | Next.js 16, React 19 |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 4, Emotion |
| UI Components | Material-UI (MUI) 7 |
| AI | Google Gemini (`gemini-2.5-flash`) |
| Package Manager | pnpm |

---

## 핵심 기능

### 1. 3단계 워크플로우

**Step 1: 행사 정보 입력**
- 행사명, 총 면적(㎡), 행사 유형 선택
- 행사 유형: 스탠딩 / 연회형 / 극장형 / 강의형

**Step 2: AI 도면 분석 (선택)**
- 도면 이미지 업로드 → Google Gemini Vision AI 분석
- 분석 항목: 부스 수, 빈 공간 비율, 출입구 수, 구역 구분, 특수 시설

**Step 3: 결과 표시**
- 권장 수용인원 (Level 2 - 쾌적)
- 최대 수용인원 (Level 3 - 혼잡)
- 5단계 혼잡도 레벨별 인원 표시
- 비상구 처리량 기반 안전 노트

### 2. 실시간 혼잡도 모니터링 (`/monitor`)
> 실시간 모니터링 시뮬레이션은 간이 데이터로 진행하였습니다.

- 실시간 입장객 수 시뮬레이션
- 혼잡도 레벨 시각화 (Level 1~5)
- 카카오톡 알림 시뮬레이션 (iPhone 목업)
- Level 3 이상 시 경고 알림
- 최근 20건 입장 이력 테이블

---

## 구현 상세

### AI 연동 (Gemini Vision API)

**파일:** `src/app/api/analyze/route.ts`

```typescript
// 이미지 → Base64 인코딩
const base64 = Buffer.from(await image.arrayBuffer()).toString("base64");

// Gemini API 호출
const result = await model.generateContent([
  { inlineData: { mimeType: image.type, data: base64 } },
  prompt  // JSON 출력 형식 지정 프롬프트
]);

// JSON 파싱 (마크다운 코드블록 제거)
const jsonMatch = text.match(/```json\s*([\s\S]*?)\s*```/) ||
                  text.match(/```\s*([\s\S]*?)\s*```/);
```

**프롬프트 설계 포인트:**
- JSON 스키마 명시로 구조화된 응답 유도
- 도면이 아닌 이미지 감지 시 `isFloorPlan: false` 반환
- 면적 추정 실패 시 부스 기반 계산으로 폴백

### 수용인원 계산 로직

**파일:** `src/app/api/calculate/route.ts`

**행사 유형별 파라미터:**
```typescript
const SPACE_PER_PERSON = {
  standing: 0.5,    // 콘서트, 페스티벌
  banquet: 1.5,     // 테이블 배치
  theater: 0.8,     // 좌석 배치
  classroom: 2.0    // 세미나, 교육
};

const STANDARD_DENSITY = {
  standing: 2.0,    // 명/㎡
  banquet: 0.7,
  theater: 1.2,
  classroom: 0.5
};
```

**계산 공식:**
```
1. 물리적 최대 = 총 면적 ÷ 인당 공간

2. 혼잡도 기반 수용인원:
   - Level 1 (안전):     면적 × 밀도 × 30%
   - Level 2 (쾌적):     면적 × 밀도 × 50% ← 권장
   - Level 3 (혼잡):     면적 × 밀도 × 70% ← 최대
   - Level 4 (과밀):     면적 × 밀도 × 90%
   - Level 5 (위험):     면적 × 밀도 × 110%

3. 출입구 처리량 제한:
   - 출입구당 ~275명 처리 가능
   - 권장 ≤ min(Level2, 출입구 처리량)

4. 안전 보정:
   - 모든 값에 15% 감소 적용 (×0.85)
```

### 실시간 모니터링 시뮬레이션

**파일:** `src/app/monitor/page.tsx`

**Ref 기반 클로저 관리:**
```typescript
// 인터벌 콜백에서 최신 상태 참조를 위한 패턴
const currentCountRef = useRef(currentCount);
useEffect(() => {
  currentCountRef.current = currentCount;
}, [currentCount]);
```

**랜덤 입장객 생성:**
```typescript
const getRandomCount = useCallback(() => {
  const current = currentCountRef.current;
  const variation = current * (Math.random() * 0.35 - 0.15); // -15% ~ +20%
  const newCount = Math.round(current + variation);
  return Math.max(0, Math.min(newCount, level5 * 1.1)); // 상한 제한
}, [level5]);
```

---

## 컴포넌트 구조

```
src/
├── app/
│   ├── api/
│   │   ├── analyze/route.ts    # Gemini Vision AI 분석
│   │   └── calculate/route.ts  # 수용인원 계산
│   ├── monitor/page.tsx        # 실시간 모니터링
│   ├── page.tsx                # 메인 (3단계 워크플로우)
│   └── globals.css             # 애니메이션 정의
├── components/
│   ├── common/
│   │   ├── Button.tsx          # MUI 래퍼
│   │   ├── Input.tsx           # MUI 래퍼
│   │   ├── Select.tsx          # MUI 래퍼
│   │   ├── FileUpload.tsx      # 파일 업로드
│   │   ├── CongestionLevel.tsx # 혼잡도 바
│   │   ├── ProgressStepper.tsx # 스텝 표시
│   │   └── Skeleton.tsx        # 로딩 스켈레톤
│   ├── layout/
│   │   └── Header.tsx          # 헤더
│   └── steps/
│       ├── Step1EventInfo.tsx  # 행사 정보 입력
│       ├── Step2Analysis.tsx   # AI 분석
│       └── Step3Results.tsx    # 결과 표시
└── types/
    └── index.ts                # 타입 정의
```

---

## 주요 타입 정의

```typescript
export type VenueType = "standing" | "banquet" | "theater" | "classroom";

export interface EventInfo {
  eventName: string;
  totalArea: number;
  venueType: VenueType;
  floorPlan?: File;
}

export interface AnalysisResult {
  boothCount: number;
  emptySpaceRatio: number;
  entranceCount: number;
  zones: string[];
  features: string[];
  estimatedTotalArea: number;
  // ...
}

export interface CalculationResult {
  capacities: {
    level1: number;
    level2: number;
    level3: number;
    level4: number;
    level5: number;
  };
  result: {
    recommended: number;
    maximum: number;
    safetyNote: string | null;
  };
}
```

---

## UX 패턴

### 로딩 상태
- `Skeleton` 컴포넌트로 AI 분석 중 로딩 표시
- `animate-pulse` 애니메이션

### 에러 처리
- 도면 아닌 이미지: 감지된 내용 표시 + 이모지 피드백
- API 할당량 초과: 모달로 안내 + 대안 제시
- 일반 오류: alert 메시지

### 시각적 피드백
- 혼잡도 레벨별 색상 (녹색 → 노랑 → 빨강)
- 진행 단계 표시 (ProgressStepper)
- 접이식 정보 패널

---

## 환경 변수

```
GOOGLE_AI_API_KEY=xxx    # Gemini API 키
USE_MOCK_DATA=true       # 개발용 목업 데이터 사용
MOCK_ERROR=quota         # 할당량 오류 시뮬레이션
```
