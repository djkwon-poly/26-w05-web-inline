// DOM 로드 완료 후 실행
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    const navItems = document.querySelectorAll('.nav-links a');

    // 모바일 햄버거 메뉴 토글 기능
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            const isOpen = navLinks.classList.toggle('active');
            menuToggle.classList.toggle('open', isOpen);
            menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        });

        // 메뉴 링크 클릭 시 모바일 메뉴 자동 닫기
        navItems.forEach(item => {
            item.addEventListener('click', () => {
                navLinks.classList.remove('active');
                menuToggle.classList.remove('open');
                menuToggle.setAttribute('aria-expanded', 'false');
            });
        });

        // 메뉴 외부 클릭 시 메뉴 닫기
        document.addEventListener('click', (e) => {
            if (!menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
                navLinks.classList.remove('active');
                menuToggle.classList.remove('open');
                menuToggle.setAttribute('aria-expanded', 'false');
            }
        });
    }

    // 서비스 카드 클릭 시 안내 인터랙션
    const serviceLinks = document.querySelectorAll('.service-card a');
    serviceLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            console.log('서비스 상담 링크 클릭');
        });
    });
});

