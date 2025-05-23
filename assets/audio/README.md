# 🎵 Audio Assets

이 폴더는 My Vibe Branding Site의 배경 음악 파일을 저장하는 곳입니다.

## 📁 필요한 파일

### ambient.mp3
- **용도**: 배경 음악
- **권장 길이**: 2-5분 (루프 재생)
- **장르**: Ambient, Lo-fi, Chill 등
- **볼륨**: 낮은 볼륨 (사용자 집중 방해 방지)

## 🎼 음악 추천

### 무료 음악 소스
1. **YouTube Audio Library**
   - 저작권 걱정 없는 무료 음악
   - https://www.youtube.com/audiolibrary

2. **Freesound.org**
   - Creative Commons 라이선스 음악
   - https://freesound.org

3. **Pixabay Music**
   - 무료 상업적 이용 가능
   - https://pixabay.com/music

4. **Incompetech**
   - Kevin MacLeod의 무료 음악
   - https://incompetech.com

### 바이브 코딩에 적합한 장르
- **Ambient**: 분위기 조성
- **Lo-fi Hip Hop**: 집중력 향상
- **Jazz Instrumentals**: 세련된 느낌
- **Nature Sounds**: 편안한 분위기
- **Minimal Techno**: 현대적 감각

## 🔧 음악 파일 준비 방법

### 1. 다운로드
무료 음악 사이트에서 적절한 음악 다운로드

### 2. 변환 (필요시)
```bash
# FFmpeg를 사용한 MP3 변환
ffmpeg -i input.wav -b:a 128k output.mp3
```

### 3. 파일명 변경
다운로드한 파일을 `ambient.mp3`로 이름 변경

### 4. 이 폴더에 저장
`assets/audio/ambient.mp3` 경로에 파일 저장

## ⚡ 성능 최적화

### 권장 설정
- **비트레이트**: 128kbps (웹용 적정)
- **샘플레이트**: 44.1kHz
- **파일 크기**: 5MB 이하 권장

### 압축 예시
```bash
# 고품질 유지하면서 파일 크기 줄이기
ffmpeg -i input.mp3 -b:a 128k -ar 44100 compressed.mp3
```

## 🚫 음악 없이 사용하기

음악 파일이 없어도 사이트는 정상 작동합니다:

1. **자동 처리**: JavaScript에서 음악 파일 로드 실패 시 자동으로 음악 버튼 비활성화
2. **오류 없음**: 콘솔에 안내 메시지만 출력
3. **기능 유지**: 다른 모든 기능은 정상 동작

## 📋 라이선스 주의사항

### 반드시 확인할 것
- [ ] 상업적 이용 가능 여부
- [ ] 출처 표기 필요 여부
- [ ] 변경/편집 허용 여부
- [ ] 재배포 조건

### 안전한 사용을 위한 팁
1. **Creative Commons** 라이선스 음악 선택
2. **Public Domain** 음악 사용
3. **로열티 프리** 음악 구매 고려
4. **출처 표기** 항상 준수

## 🎵 음악 교체 방법

### 새로운 음악으로 변경하기
1. 새 음악 파일을 `ambient.mp3`로 저장
2. 브라우저 캐시 새로고침 (Ctrl+F5)
3. 음악 토글 버튼으로 재생 확인

### 여러 음악 지원 (고급)
JavaScript 수정으로 랜덤 음악 재생 구현 가능:

```javascript
const musicFiles = [
    'assets/audio/ambient1.mp3',
    'assets/audio/ambient2.mp3',
    'assets/audio/ambient3.mp3'
];

const randomMusic = musicFiles[Math.floor(Math.random() * musicFiles.length)];
bgMusic.src = randomMusic;
```

## 💡 추천 키워드

음악 검색 시 유용한 키워드들:
- "ambient background music"
- "lo-fi study beats"
- "creative commons chill"
- "royalty free ambient"
- "coding background music"
- "minimal instrumental"

---

**🎼 좋은 음악이 좋은 바이브를 만듭니다!** 