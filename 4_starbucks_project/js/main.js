const searchEl = document.querySelector('.search');
const SearchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function () {
  SearchInputEl.focus();
});

SearchInputEl.addEventListener('focus', function () {
  // focused라는 클래스를 추가
  searchEl.classList.add('focused');
  // html 속성을 지정
  SearchInputEl.setAttribute('placeholder', '통합검색');
});
SearchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused');
  SearchInputEl.setAttribute('placeholder', '');
});

const badgeEl = document.querySelector('header .badges');

// _.throttle : lodash cdn 검색하여 가져옴
// _.throttle(함수, 시간(밀리세컨드 단위))
// gsap cdn 검색하여 가져옴
window.addEventListener('scroll', _.throttle(function () {
  console.log(window.scrollY);
  if (window.scrollY > 500) {
    // 배지를 숨겨줌
    // gsap.to(요소, 지속시간, 옵션);
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    });
  } else {
    // 배지 보여줌
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });
  }
  
}, 300));


const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7, // 0.7 1.4 2.1 2.7
    opacity: 1
  });
});

// new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay: true,
  loop: true
})
new Swiper('.promotion .swiper-container', {
  autoplay: {
    delay: 5000 // 5초
  },
  loop: true,
  slidesPerView: 3, // 한번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  
  
  pagination: {
    el: '.promotion .swiper-pagination',  // 페이지 번호 요소 선택자
    clickable: true
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
})


const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion')
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function () {
  // false를 true가 되게 한다
  isHidePromotion = !isHidePromotion
  // if 안에 true 값이 들어감
  if (isHidePromotion) {
    // 숨김처리
    promotionEl.classList.add('hide');
  } else {
    // 보임처리
    promotionEl.classList.remove('hide');
  }
});