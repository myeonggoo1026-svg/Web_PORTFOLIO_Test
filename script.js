// 타이핑 효과
const heroText = 'WELCOME TO MY PORTFOLIO\n신입 개발자 김명진입니다';
const textElement = document.getElementById('hero-text');
const cursor = document.getElementById('cursor');

let index = 0;

function typeWriter() {
  if (index < heroText.length) {
    if (heroText[index] === '\n') {
      textElement.innerHTML += '<br>';
    } else {
      textElement.innerHTML += heroText[index];
    }
    index++;
    setTimeout(typeWriter, 80);
  } else {
    // 타이핑 종료 후 커서 깜빡임
    cursor.classList.add('blink');
  }
}

window.addEventListener('load', typeWriter);

// 네비게이션 부드러운 스크롤
document.querySelectorAll('.nav-menu a').forEach((link) => {
  link.addEventListener('click', function (e) {
    e.preventDefault(); // 기본 점프 막기

    const targetId = this.getAttribute('href').substring(1);
    const target = document.getElementById(targetId);

    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// 스크롤 버튼
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}
