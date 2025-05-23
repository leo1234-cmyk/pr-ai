# 🎨 My Vibe Branding Site

**바이브 코딩(Vibe Coding) 철학에 기반한 개인 브랜딩 웹사이트**

전북인공지능고등학교 선생님의 교육 철학과 감성을 담은 인터랙티브 웹사이트입니다.

## 📋 프로젝트 개요

### 🎯 목적
- 교사 본인의 브랜드와 철학, 활동을 표현하는 개인 사이트 구축
- 바이브 코딩(Vibe Coding) 철학에 기반한 학습 및 실습
- 학생들과 함께 코딩의 감성적, 직관적 표현 방식을 탐구

### 👥 대상 사용자
- 교사 본인
- 전북인공지능고등학교 학생들
- 외부 참관자(진로 멘토링, 교내외 전시 등)

## ✨ 주요 기능

### 🏠 섹션 구성
- **Home**: 간결하고 직관적인 첫 인상, 애니메이션 요소
- **About Me**: 교육 철학, 관심 분야 등 서사 중심의 소개
- **My Vibe**: 좋아하는 색, 음악, 키워드, 명언 등을 시각화
- **Projects**: 학생들과의 협업 프로젝트, 바이브 코딩 결과물
- **Contact**: 연락처 폼 및 SNS 연결

### 🎛️ 인터랙티브 기능
- **테마 변경**: 라이트/다크 모드 토글 (🌙/☀️)
- **배경 음악**: 분위기 조성을 위한 음악 제어 (🎵/🔇)
- **마우스 팔로워**: 마우스를 따라다니는 감성적 요소
- **스크롤 애니메이션**: 부드러운 섹션 전환 효과
- **로컬 스토리지**: 사용자 설정 저장 및 복원

### 🎨 바이브 코딩 요소
- **컬러 테마**: 개성 있는 팔레트 직접 설계
- **타이포그래피**: 감정별 폰트 조합 적용
- **인터랙션 기반 설계**: 반응형 시각 요소로 '느낌' 표현
- **음악/사운드**: 페이지 진입 시 분위기 조성

### 🎮 고급 인터랙티브 기능
- **파티클 시스템**: 마우스 움직임과 클릭에 반응하는 파티클 효과
- **인터랙티브 배경**: 마우스 위치에 따라 변화하는 동적 배경
- **3D 카드 효과**: 호버 시 카드들이 3차원으로 회전하는 효과
- **글리치 효과**: 특정 텍스트에 사이버펑크 스타일 글리치 애니메이션
- **홀로그램 효과**: 미래지향적인 홀로그램 스캔 라인 효과
- **음향 피드백**: Web Audio API를 활용한 실시간 사운드 효과
- **폭죽 효과**: 클릭 가능한 요소들의 폭죽 파티클 애니메이션
- **타이핑 효과**: 실시간 타이핑 애니메이션
- **커스텀 커서**: 블렌드 모드를 활용한 고급 커서 효과

### 🎯 클릭 가능한 인터랙티브 요소
- **플로팅 아이콘**: 클릭 시 폭죽 효과 (💫🎨💻🎵)
- **프로필 이미지**: 클릭 시 회전 애니메이션과 인사 메시지
- **키워드 태그**: 각 키워드 클릭 시 파티클 폭발과 개별 메시지
- **음악 장르**: 장르별 회전 애니메이션과 피드백
- **컬러 팔레트**: 색상 클릭 시 복사 + 파티클 효과
- **프로젝트 카드**: 색상 변화와 폭죽 효과
- **스크롤 인디케이터**: 클릭 시 부드러운 스크롤 이동

## 🛠️ 기술 사양

### Frontend Stack
- **HTML5**: 시멘틱 태그 사용 (header, main, section, footer)
- **CSS3**: 
  - Flexbox & Grid 레이아웃
  - CSS Variables for 테마 시스템
  - Keyframes & Transitions 애니메이션
  - 반응형 디자인
- **JavaScript (Vanilla)**:
  - ES6+ 문법 활용
  - Local Storage 데이터 관리
  - Intersection Observer API
  - Performance API 모니터링

### 디자인 시스템
```css
/* 컬러 팔레트 */
--primary-color: #6366f1;    /* 인디고 */
--secondary-color: #8b5cf6;  /* 바이올렛 */
--accent-color: #f59e0b;     /* 앰버 */

/* 타이포그래피 */
--font-primary: 'Noto Sans KR', sans-serif;
--font-accent: 'Dancing Script', cursive;
--font-mono: 'Courier Prime', monospace;
```

## 🚀 설치 및 실행

### 기본 실행
```bash
# 저장소 클론 또는 파일 다운로드
git clone [repository-url]

# 프로젝트 폴더로 이동
cd my-vibe-branding-site

# 브라우저에서 index.html 열기
# 또는 Live Server 등의 로컬 서버 사용
```

### 권장 환경
- **브라우저**: Chrome, Firefox, Safari, Edge (최신 버전)
- **로컬 서버**: Live Server (VS Code Extension) 또는 기타 정적 서버

## 📁 프로젝트 구조

```
my-vibe-branding-site/
├── index.html          # 메인 HTML 파일
├── css/
│   └── style.css       # 스타일시트
├── js/
│   └── script.js       # JavaScript 로직
├── assets/
│   └── audio/
│       └── ambient.mp3 # 배경 음악 (선택사항)
└── README.md           # 프로젝트 문서
```

## 🎵 사용 가이드

### 기본 조작
1. **테마 변경**: 우상단 달/해 아이콘 클릭
2. **음악 토글**: 우상단 음표 아이콘 클릭
3. **네비게이션**: 상단 메뉴 또는 스크롤로 섹션 이동
4. **인터랙션**: 카드, 버튼 등에 마우스 호버

### 숨겨진 기능
- **컬러 팔레트**: 색상 원 클릭 시 색상 코드 복사
- **키워드 클라우드**: 키워드 클릭 시 재미있는 애니메이션
- **이스터 에그**: 코나미 코드 입력 시 특별 효과 😉
  ```
  ↑ ↑ ↓ ↓ ← → ← → B A
  ```

### 🎮 추가 이스터 에그들
- **코나미 코드**: `↑ ↑ ↓ ↓ ← → ← → B A` - SUPER VIBE MODE 활성화
- **Ctrl + V**: 레인보우 모드 - 모든 카드가 무지개 색으로 변화
- **Shift + P**: 파티클 폭발 - 화면 전체에 파티클 폭발 효과
- **Alt + M**: 음악 시각화 모드 - 음악에 맞춰 파티클 생성
- **마우스 움직임**: 자동 파티클 생성 (30% 확률)
- **섹션 진입**: 각 섹션 진입 시 환영 파티클 효과
- **폼 제출**: 성공적인 폼 제출 시 축하 파티클 쇼

## 🎨 바이브 코딩 철학

> "코드에는 작성자의 마음이 담긴다"

### 핵심 가치
- **감성과 기술의 조화**: 단순한 기능 구현을 넘어선 감정 표현
- **개성 있는 창작**: 개발자의 취향과 철학이 담긴 코드
- **직관적 인터랙션**: 사용자가 '느낄' 수 있는 인터페이스
- **협업과 공유**: 각자의 바이브를 나누는 커뮤니티

### 교육적 활용
- 학생들의 개성 있는 포트폴리오 제작 가이드
- 크리에이티브 코딩 워크샵 자료
- 감성적 웹 디자인 학습 도구
- 협업 프로젝트 전시 공간

## 🔧 커스터마이징

### 컬러 테마 변경
```css
:root {
    --primary-color: #your-color;
    --secondary-color: #your-color;
    --accent-color: #your-color;
}
```

### 폰트 변경
```css
:root {
    --font-primary: 'Your-Font', sans-serif;
    --font-accent: 'Your-Accent-Font', cursive;
}
```

### 콘텐츠 수정
`index.html` 파일에서 다음 섹션들을 개인화:
- 소개 텍스트
- 교육 철학
- 프로젝트 목록
- 연락처 정보

## 📱 반응형 지원

- **Desktop**: 1200px 이상 - 풀 레이아웃
- **Tablet**: 768px ~ 1199px - 적응형 그리드
- **Mobile**: 767px 이하 - 단일 컬럼 레이아웃

## 🚀 향후 계획

### 확장 아이디어
- [ ] **AI 감정 테마**: 웹캠을 통한 방문자 분위기 감지 자동 테마 설정
- [ ] **Wall of Vibes**: 학생들의 바이브 코딩 페이지 모음 섹션
- [ ] **실시간 코멘트**: 방문자 피드백 시스템
- [ ] **3D 인터랙션**: Three.js를 활용한 3차원 요소
- [ ] **음성 인터랙션**: Web Speech API 활용

### 성능 최적화
- [ ] 이미지 최적화 및 lazy loading
- [ ] CSS/JS 번들링 및 압축
- [ ] PWA 지원
- [ ] SEO 최적화

## 🤝 기여 방법

1. Fork 생성
2. Feature 브랜치 생성 (`git checkout -b feature/amazing-feature`)
3. 변경사항 커밋 (`git commit -m 'Add amazing feature'`)
4. 브랜치에 Push (`git push origin feature/amazing-feature`)
5. Pull Request 생성

## 📝 라이선스

이 프로젝트는 교육 목적으로 제작되었으며, MIT 라이선스를 따릅니다.

## 📞 연락처

- **Email**: teacher@vibecoding.com
- **GitHub**: @vibecoding
- **Instagram**: @vibecoding

---

**Made with ❤️ by Vibe Coding Teacher**

*"The best way to predict the future is to create it." - Peter Drucker* 