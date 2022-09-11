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