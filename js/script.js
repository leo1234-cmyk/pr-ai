// DOM이 로드된 후 실행
document.addEventListener('DOMContentLoaded', function() {
    console.log('🎨 My Vibe Branding Site 초기화 중...');
    
    // 전역 변수
    let currentTheme = localStorage.getItem('theme') || 'light';
    let musicEnabled = localStorage.getItem('musicEnabled') === 'true';
    let isScrolling = false;
    let particleCount = 0;
    let mouseX = 0, mouseY = 0;
    
    // 요소 선택
    const themeToggle = document.getElementById('themeToggle');
    const musicToggle = document.getElementById('musicToggle');
    const bgMusic = document.getElementById('bgMusic');
    const cursorFollower = document.querySelector('.cursor-follower');
    const navbar = document.getElementById('navbar');
    const contactForm = document.getElementById('contactForm');
    const navLinks = document.querySelectorAll('.nav-link');
    const interactiveBg = document.querySelector('.interactive-bg');
    const particlesContainer = document.querySelector('.particles-container');
    
    // 초기화 함수들
    initTheme();
    initMusicPlayer();
    initCursorFollower();
    initScrollEffects();
    initNavigation();
    initContactForm();
    initAnimations();
    initInteractiveBackground();
    initParticleSystem();
    initSoundEffects();
    
    console.log('✨ 바이브 코딩 사이트 준비 완료!');
    
    // 테마 초기화 및 토글 기능
    function initTheme() {
        document.documentElement.setAttribute('data-theme', currentTheme);
        updateThemeIcon();
        
        themeToggle.addEventListener('click', toggleTheme);
        
        function toggleTheme() {
            currentTheme = currentTheme === 'light' ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', currentTheme);
            localStorage.setItem('theme', currentTheme);
            updateThemeIcon();
            
            // 테마 변경 애니메이션
            document.body.style.transition = 'all 0.3s ease';
            setTimeout(() => {
                document.body.style.transition = '';
            }, 300);
            
            // 테마 변경 파티클 효과
            createThemeChangeEffect();
            playSound('theme');
            
            console.log(`🌓 테마 변경: ${currentTheme}`);
        }
        
        function updateThemeIcon() {
            const icon = themeToggle.querySelector('.theme-icon');
            icon.textContent = currentTheme === 'light' ? '🌙' : '☀️';
            themeToggle.setAttribute('aria-label', 
                currentTheme === 'light' ? '다크 모드로 변경' : '라이트 모드로 변경'
            );
        }
    }
    
    // 음악 플레이어 초기화
    function initMusicPlayer() {
        updateMusicIcon();
        
        // 음악 파일이 없을 때 대체 처리
        bgMusic.addEventListener('error', function() {
            console.log('🎵 배경 음악 파일을 찾을 수 없습니다.');
            musicToggle.style.opacity = '0.5';
            musicToggle.disabled = true;
        });
        
        musicToggle.addEventListener('click', toggleMusic);
        
        function toggleMusic() {
            musicEnabled = !musicEnabled;
            localStorage.setItem('musicEnabled', musicEnabled);
            updateMusicIcon();
            
            if (musicEnabled) {
                bgMusic.play().catch(e => {
                    console.log('🎵 음악 재생 실패:', e.message);
                    showNotification('음악 재생을 위해 사용자 상호작용이 필요합니다.');
                });
                createMusicWave();
            } else {
                bgMusic.pause();
            }
            
            playSound('music');
            console.log(`🎵 음악 ${musicEnabled ? '재생' : '정지'}`);
        }
        
        function updateMusicIcon() {
            const icon = musicToggle.querySelector('.music-icon');
            icon.textContent = musicEnabled ? '🔊' : '🔇';
            musicToggle.setAttribute('aria-label', 
                musicEnabled ? '음악 끄기' : '음악 켜기'
            );
        }
        
        // 사용자 첫 클릭 시 음악 자동 재생 시도
        document.addEventListener('click', function autoPlayMusic() {
            if (musicEnabled && bgMusic.paused) {
                bgMusic.play().catch(e => console.log('🎵 자동 재생 실패:', e.message));
            }
            document.removeEventListener('click', autoPlayMusic);
        }, { once: true });
    }
    
    // 개선된 마우스 커서 팔로워
    function initCursorFollower() {
        let followerX = 0, followerY = 0;
        let isMoving = false;
        
        document.addEventListener('mousemove', function(e) {
            mouseX = e.clientX;
            mouseY = e.clientY;
            
            // 인터랙티브 배경 업데이트
            updateInteractiveBackground(e.clientX, e.clientY);
            
            if (!isMoving) {
                cursorFollower.classList.add('active');
                isMoving = true;
            }
            
            clearTimeout(cursorFollower.hideTimeout);
            cursorFollower.hideTimeout = setTimeout(() => {
                cursorFollower.classList.remove('active');
                isMoving = false;
            }, 100);
            
            // 마우스 이동 시 파티클 생성
            if (Math.random() < 0.3) {
                createParticle(e.clientX, e.clientY);
            }
        });
        
        document.addEventListener('click', function(e) {
            cursorFollower.classList.add('click');
            setTimeout(() => {
                cursorFollower.classList.remove('click');
            }, 300);
            
            // 클릭 시 파티클 폭발
            createClickExplosion(e.clientX, e.clientY);
            playSound('click');
        });
        
        // 부드러운 팔로잉 애니메이션
        function animateFollower() {
            const dx = mouseX - followerX;
            const dy = mouseY - followerY;
            
            followerX += dx * 0.1;
            followerY += dy * 0.1;
            
            cursorFollower.style.left = followerX + 'px';
            cursorFollower.style.top = followerY + 'px';
            
            requestAnimationFrame(animateFollower);
        }
        
        animateFollower();
        
        // 호버 가능한 요소들에 특별 효과
        const hoverElements = document.querySelectorAll('a, button, .story-card, .vibe-card, .project-card, .keyword, .genre-tag, .color-swatch');
        
        hoverElements.forEach(element => {
            element.addEventListener('mouseenter', () => {
                cursorFollower.style.transform = 'scale(2)';
                cursorFollower.style.opacity = '0.3';
                playSound('hover');
            });
            
            element.addEventListener('mouseleave', () => {
                cursorFollower.style.transform = 'scale(1)';
                cursorFollower.style.opacity = '0.8';
            });
        });
    }
    
    // 인터랙티브 배경 시스템
    function initInteractiveBackground() {
        function updateBackground() {
            const time = Date.now() * 0.001;
            const x = 50 + Math.sin(time) * 10;
            const y = 50 + Math.cos(time * 0.7) * 10;
            
            interactiveBg.style.background = `
                radial-gradient(circle at ${x}% ${y}%, 
                    rgba(99, 102, 241, 0.1) 0%, 
                    rgba(139, 92, 246, 0.05) 25%, 
                    transparent 50%)
            `;
            
            requestAnimationFrame(updateBackground);
        }
        updateBackground();
    }
    
    function updateInteractiveBackground(x, y) {
        const width = window.innerWidth;
        const height = window.innerHeight;
        const xPercent = (x / width) * 100;
        const yPercent = (y / height) * 100;
        
        interactiveBg.style.setProperty('--mouse-x', xPercent + '%');
        interactiveBg.style.setProperty('--mouse-y', yPercent + '%');
    }
    
    // 파티클 시스템
    function initParticleSystem() {
        // 배경 파티클 생성
        setInterval(() => {
            if (particleCount < 50) {
                createRandomParticle();
            }
        }, 1000);
    }
    
    function createParticle(x, y, options = {}) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        const size = options.size || (Math.random() * 6 + 2);
        const color = options.color || getRandomColor();
        const duration = options.duration || (Math.random() * 2 + 1);
        
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        particle.style.background = color;
        particle.style.animationDuration = duration + 's';
        
        particlesContainer.appendChild(particle);
        particleCount++;
        
        setTimeout(() => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
                particleCount--;
            }
        }, duration * 1000);
    }
    
    function createRandomParticle() {
        const x = Math.random() * window.innerWidth;
        const y = window.innerHeight + 10;
        createParticle(x, y);
    }
    
    function createClickExplosion(x, y) {
        for (let i = 0; i < 8; i++) {
            setTimeout(() => {
                const offsetX = (Math.random() - 0.5) * 100;
                const offsetY = (Math.random() - 0.5) * 100;
                createParticle(x + offsetX, y + offsetY, {
                    size: Math.random() * 8 + 4,
                    color: getRandomColor(),
                    duration: 1.5
                });
            }, i * 50);
        }
    }
    
    function getRandomColor() {
        const colors = [
            'var(--primary-color)',
            'var(--secondary-color)',
            'var(--accent-color)',
            '#ff6b6b',
            '#4ecdc4',
            '#45b7d1',
            '#f9ca24',
            '#f0932b'
        ];
        return colors[Math.floor(Math.random() * colors.length)];
    }
    
    // 스크롤 효과 및 네비게이션 하이라이트
    function initScrollEffects() {
        const sections = document.querySelectorAll('.section');
        const observerOptions = {
            threshold: 0.3,
            rootMargin: '-50px 0px'
        };
        
        // Intersection Observer로 섹션 감지
        const sectionObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const sectionId = entry.target.id;
                    updateActiveNavLink(sectionId);
                    
                    // 섹션 진입 시 애니메이션
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    
                    // 섹션 진입 시 특별 효과
                    createSectionEnterEffect(entry.target);
                }
            });
        }, observerOptions);
        
        sections.forEach(section => {
            sectionObserver.observe(section);
            // 초기 상태 설정
            section.style.opacity = '0';
            section.style.transform = 'translateY(20px)';
            section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        });
        
        // 스크롤 시 네비게이션 스타일 변경
        window.addEventListener('scroll', throttle(function() {
            if (window.scrollY > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }, 100));
        
        function updateActiveNavLink(activeSection) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === '#' + activeSection) {
                    link.classList.add('active');
                }
            });
        }
    }
    
    function createSectionEnterEffect(section) {
        const rect = section.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        for (let i = 0; i < 5; i++) {
            setTimeout(() => {
                createParticle(centerX, centerY, {
                    size: Math.random() * 10 + 5,
                    duration: 2
                });
            }, i * 100);
        }
    }
    
    // 부드러운 스크롤 네비게이션
    function initNavigation() {
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                smoothScrollTo(targetId);
                playSound('nav');
            });
        });
    }
    
    // 전역 함수들
    window.smoothScrollTo = function(targetId) {
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 70;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    };
    
    window.createFireworks = function(element) {
        const rect = element.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        for (let i = 0; i < 12; i++) {
            setTimeout(() => {
                const angle = (i / 12) * Math.PI * 2;
                const distance = 50 + Math.random() * 50;
                const x = centerX + Math.cos(angle) * distance;
                const y = centerY + Math.sin(angle) * distance;
                
                createParticle(x, y, {
                    size: Math.random() * 8 + 4,
                    color: getRandomColor(),
                    duration: 2
                });
            }, i * 50);
        }
        
        playSound('fireworks');
        showNotification('🎉 폭죽 터뜨리기!', 'success');
    };
    
    window.profileClick = function() {
        const profile = document.querySelector('.profile-placeholder');
        profile.style.animation = 'none';
        setTimeout(() => {
            profile.style.animation = '';
        }, 10);
        
        createFireworks(profile);
        showNotification('👨‍🏫 안녕하세요! 바이브 코딩 선생님입니다!', 'info');
    };
    
    window.keywordClick = function(element) {
        const keyword = element.textContent;
        createClickExplosion(
            element.getBoundingClientRect().left + element.offsetWidth / 2,
            element.getBoundingClientRect().top + element.offsetHeight / 2
        );
        playSound('keyword');
        showNotification(`✨ "${keyword}" - 좋은 선택이에요!`, 'info');
    };
    
    window.genreClick = function(element) {
        const genre = element.textContent;
        element.style.transform = 'scale(1.3) rotate(720deg)';
        setTimeout(() => {
            element.style.transform = '';
        }, 500);
        
        playSound('genre');
        showNotification(`🎵 ${genre} 음악, 정말 좋아해요!`, 'success');
    };
    
    window.projectClick = function(element) {
        const title = element.querySelector('h3').textContent;
        element.style.filter = 'hue-rotate(180deg)';
        setTimeout(() => {
            element.style.filter = '';
        }, 1000);
        
        createFireworks(element);
        playSound('project');
        showNotification(`🚀 "${title}" 프로젝트에 관심을 가져주셔서 감사해요!`, 'success');
    };
    
    // 연락처 폼 처리
    function initContactForm() {
        if (contactForm) {
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                const formData = {
                    name: document.getElementById('name').value,
                    email: document.getElementById('email').value,
                    message: document.getElementById('message').value
                };
                
                // 폼 유효성 검사
                if (validateForm(formData)) {
                    // 실제 서버로 전송하는 대신 시뮬레이션
                    simulateFormSubmission(formData);
                }
            });
        }
        
        function validateForm(data) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            
            if (!data.name.trim()) {
                showNotification('이름을 입력해주세요.', 'error');
                return false;
            }
            
            if (!emailRegex.test(data.email)) {
                showNotification('올바른 이메일 주소를 입력해주세요.', 'error');
                return false;
            }
            
            if (!data.message.trim()) {
                showNotification('메시지를 입력해주세요.', 'error');
                return false;
            }
            
            return true;
        }
        
        function simulateFormSubmission(data) {
            const submitBtn = contactForm.querySelector('.submit-btn');
            const originalText = submitBtn.textContent;
            
            submitBtn.textContent = '전송 중... ⏳';
            submitBtn.disabled = true;
            
            // 폼 제출 파티클 효과
            createFormSubmitEffect();
            
            // 2초 후 성공 메시지
            setTimeout(() => {
                showNotification('메시지가 성공적으로 전송되었습니다! 곧 연락드리겠습니다. 🎉', 'success');
                contactForm.reset();
                
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                
                playSound('success');
                console.log('📧 폼 데이터:', data);
            }, 2000);
        }
    }
    
    function createFormSubmitEffect() {
        const form = contactForm;
        const rect = form.getBoundingClientRect();
        
        for (let i = 0; i < 20; i++) {
            setTimeout(() => {
                const x = rect.left + Math.random() * rect.width;
                const y = rect.top + Math.random() * rect.height;
                createParticle(x, y, {
                    size: Math.random() * 6 + 3,
                    color: '#10b981',
                    duration: 1.5
                });
            }, i * 50);
        }
    }
    
    // 페이지 로드 시 애니메이션
    function initAnimations() {
        // 키워드 클라우드 랜덤 애니메이션
        const keywords = document.querySelectorAll('.keyword');
        keywords.forEach((keyword, index) => {
            keyword.style.animationDelay = (index * 0.1) + 's';
        });
        
        // 프로젝트 카드 스태거 애니메이션
        const projectCards = document.querySelectorAll('.project-card');
        projectCards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            card.style.transitionDelay = (index * 0.1) + 's';
            
            // Intersection Observer로 카드 애니메이션
            const cardObserver = new IntersectionObserver(function(entries) {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            }, { threshold: 0.1 });
            
            cardObserver.observe(card);
        });
        
        // 컬러 팔레트 호버 효과
        const colorSwatches = document.querySelectorAll('.color-swatch');
        colorSwatches.forEach(swatch => {
            swatch.addEventListener('click', function() {
                const color = getComputedStyle(this).backgroundColor;
                copyToClipboard(color);
                showNotification(`🎨 컬러 코드가 복사되었습니다: ${color}`, 'info');
                
                // 컬러 복사 파티클 효과
                createColorCopyEffect(this);
                playSound('copy');
            });
        });
    }
    
    function createColorCopyEffect(element) {
        const rect = element.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const color = getComputedStyle(element).backgroundColor;
        
        for (let i = 0; i < 6; i++) {
            setTimeout(() => {
                createParticle(centerX, centerY, {
                    size: Math.random() * 4 + 2,
                    color: color,
                    duration: 1
                });
            }, i * 100);
        }
    }
    
    // 음향 효과 시스템
    function initSoundEffects() {
        // Web Audio API를 사용한 사운드 생성
        window.audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }
    
    function playSound(type) {
        if (!window.audioContext) return;
        
        const oscillator = window.audioContext.createOscillator();
        const gainNode = window.audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(window.audioContext.destination);
        
        const sounds = {
            click: { frequency: 800, duration: 0.1 },
            hover: { frequency: 600, duration: 0.05 },
            theme: { frequency: 400, duration: 0.2 },
            music: { frequency: 500, duration: 0.15 },
            nav: { frequency: 700, duration: 0.1 },
            keyword: { frequency: 900, duration: 0.1 },
            genre: { frequency: 650, duration: 0.15 },
            project: { frequency: 750, duration: 0.2 },
            copy: { frequency: 850, duration: 0.1 },
            fireworks: { frequency: 1000, duration: 0.3 },
            success: { frequency: 600, duration: 0.25 }
        };
        
        const sound = sounds[type] || sounds.click;
        
        oscillator.frequency.setValueAtTime(sound.frequency, window.audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(sound.frequency * 0.5, window.audioContext.currentTime + sound.duration);
        
        gainNode.gain.setValueAtTime(0.1, window.audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, window.audioContext.currentTime + sound.duration);
        
        oscillator.start(window.audioContext.currentTime);
        oscillator.stop(window.audioContext.currentTime + sound.duration);
    }
    
    // 특별 효과들
    function createThemeChangeEffect() {
        for (let i = 0; i < 30; i++) {
            setTimeout(() => {
                const x = Math.random() * window.innerWidth;
                const y = Math.random() * window.innerHeight;
                createParticle(x, y, {
                    size: Math.random() * 8 + 4,
                    color: currentTheme === 'dark' ? '#fbbf24' : '#8b5cf6',
                    duration: 2
                });
            }, i * 30);
        }
    }
    
    function createMusicWave() {
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        
        for (let i = 0; i < 16; i++) {
            setTimeout(() => {
                const angle = (i / 16) * Math.PI * 2;
                const distance = 100 + i * 20;
                const x = centerX + Math.cos(angle) * distance;
                const y = centerY + Math.sin(angle) * distance;
                
                createParticle(x, y, {
                    size: 6,
                    color: '#22c55e',
                    duration: 2
                });
            }, i * 100);
        }
    }
    
    // 유틸리티 함수들
    function throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        }
    }
    
    function showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 10px;
            z-index: 10000;
            transform: translateX(100%);
            transition: transform 0.3s ease;
            font-family: var(--font-primary);
            font-weight: 500;
            box-shadow: 0 4px 20px rgba(0,0,0,0.15);
            max-width: 300px;
            word-wrap: break-word;
        `;
        
        document.body.appendChild(notification);
        
        // 알림 표시 시 파티클 효과
        setTimeout(() => {
            const rect = notification.getBoundingClientRect();
            createParticle(rect.left, rect.top + rect.height / 2, {
                size: 8,
                color: type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6',
                duration: 1
            });
        }, 100);
        
        // 애니메이션으로 나타내기
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // 3초 후 제거
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 3000);
    }
    
    function copyToClipboard(text) {
        if (navigator.clipboard) {
            navigator.clipboard.writeText(text).catch(err => {
                console.error('클립보드 복사 실패:', err);
            });
        } else {
            // Fallback for older browsers
            const textArea = document.createElement('textarea');
            textArea.value = text;
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();
            try {
                document.execCommand('copy');
            } catch (err) {
                console.error('클립보드 복사 실패:', err);
            }
            document.body.removeChild(textArea);
        }
    }
    
    // 이스터 에그들
    let konamiCode = [];
    const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA'];
    
    document.addEventListener('keydown', function(e) {
        konamiCode.push(e.code);
        if (konamiCode.length > konamiSequence.length) {
            konamiCode.shift();
        }
        
        if (konamiCode.join(',') === konamiSequence.join(',')) {
            activateVibeMode();
            konamiCode = [];
        }
        
        // 추가 이스터 에그들
        checkSpecialKeys(e);
    });
    
    function checkSpecialKeys(e) {
        // Space + V = 특별 바이브 모드
        if (e.code === 'KeyV' && e.ctrlKey) {
            activateRainbowMode();
        }
        
        // Shift + P = 파티클 폭발
        if (e.code === 'KeyP' && e.shiftKey) {
            createParticleExplosion();
        }
        
        // Alt + M = 음악 모드
        if (e.code === 'KeyM' && e.altKey) {
            activateMusicMode();
        }
    }
    
    function activateVibeMode() {
        showNotification('🌈 SUPER VIBE MODE ACTIVATED! 🌈', 'success');
        
        // 페이지에 특별한 효과 추가
        document.body.style.filter = 'hue-rotate(0deg)';
        let hue = 0;
        
        const vibeInterval = setInterval(() => {
            hue += 5;
            document.body.style.filter = `hue-rotate(${hue}deg)`;
            
            // 랜덤 파티클 생성
            if (Math.random() < 0.3) {
                createParticle(
                    Math.random() * window.innerWidth,
                    Math.random() * window.innerHeight,
                    {
                        size: Math.random() * 10 + 5,
                        color: getRandomColor(),
                        duration: 2
                    }
                );
            }
        }, 100);
        
        // 10초 후 원상복구
        setTimeout(() => {
            clearInterval(vibeInterval);
            document.body.style.filter = '';
            showNotification('바이브 모드 종료! ✨', 'info');
        }, 10000);
        
        console.log('🌈 SUPER VIBE MODE!');
    }
    
    function activateRainbowMode() {
        showNotification('🌈 RAINBOW MODE! 🌈', 'success');
        
        const elements = document.querySelectorAll('.vibe-card, .story-card, .project-card');
        elements.forEach((element, index) => {
            setTimeout(() => {
                element.style.background = 'linear-gradient(45deg, #ff0000, #ff7700, #ffdd00, #00ff00, #0077ff, #3300ff, #7700ff)';
                element.style.backgroundSize = '400% 400%';
                element.style.animation = 'rainbow 2s ease infinite';
                
                setTimeout(() => {
                    element.style.background = '';
                    element.style.animation = '';
                }, 5000);
            }, index * 200);
        });
        
        playSound('fireworks');
    }
    
    function createParticleExplosion() {
        showNotification('💥 PARTICLE EXPLOSION! 💥', 'success');
        
        for (let i = 0; i < 50; i++) {
            setTimeout(() => {
                createParticle(
                    Math.random() * window.innerWidth,
                    Math.random() * window.innerHeight,
                    {
                        size: Math.random() * 12 + 6,
                        color: getRandomColor(),
                        duration: 3
                    }
                );
            }, i * 50);
        }
        
        playSound('fireworks');
    }
    
    function activateMusicMode() {
        showNotification('🎵 MUSIC VISUALIZER MODE! 🎵', 'success');
        
        // 음악에 맞춰 파티클 생성
        let musicInterval = setInterval(() => {
            if (musicEnabled && !bgMusic.paused) {
                for (let i = 0; i < 5; i++) {
                    createParticle(
                        Math.random() * window.innerWidth,
                        window.innerHeight,
                        {
                            size: Math.random() * 8 + 4,
                            color: '#22c55e',
                            duration: 2
                        }
                    );
                }
            }
        }, 200);
        
        setTimeout(() => {
            clearInterval(musicInterval);
            showNotification('음악 시각화 모드 종료! 🎵', 'info');
        }, 10000);
    }
    
    // 성능 모니터링
    function trackPerformance() {
        if ('performance' in window) {
            window.addEventListener('load', function() {
                setTimeout(() => {
                    const perfData = performance.timing;
                    const loadTime = perfData.loadEventEnd - perfData.navigationStart;
                    console.log(`⚡ 페이지 로드 시간: ${loadTime}ms`);
                    
                    if (loadTime > 3000) {
                        console.warn('⚠️ 페이지 로드 시간이 느립니다. 최적화가 필요할 수 있습니다.');
                    }
                }, 0);
            });
        }
    }
    
    trackPerformance();
    
    // 리사이즈 이벤트 처리
    window.addEventListener('resize', throttle(function() {
        console.log('📱 화면 크기 변경:', window.innerWidth, 'x', window.innerHeight);
    }, 250));
    
    // 페이지 가시성 API로 배경 음악 관리
    document.addEventListener('visibilitychange', function() {
        if (document.hidden) {
            if (musicEnabled && !bgMusic.paused) {
                bgMusic.pause();
                console.log('🎵 페이지 숨김으로 음악 일시정지');
            }
        } else {
            if (musicEnabled && bgMusic.paused) {
                bgMusic.play().catch(e => console.log('🎵 페이지 복귀 시 음악 재생 실패:', e.message));
                console.log('🎵 페이지 복귀로 음악 재개');
            }
        }
    });
    
    // 환영 메시지
    setTimeout(() => {
        showNotification('🎨 바이브 코딩 사이트에 오신 것을 환영합니다! 여러 요소들을 클릭해보세요! 😊', 'success');
    }, 2000);
    
    console.log('🎨 바이브 코딩 스크립트 로드 완료!');
    console.log('💡 이스터 에그 힌트:');
    console.log('- 코나미 코드: ↑↑↓↓←→←→BA');
    console.log('- Ctrl + V: 레인보우 모드');
    console.log('- Shift + P: 파티클 폭발');
    console.log('- Alt + M: 음악 시각화');
}); 