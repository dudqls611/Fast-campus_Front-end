// let boxEl = document.querySelector(".box");

// console.log(boxEl);

// boxEl.addEventListener('click', function () {
//   console.log("Click!!");
//   boxEl.classList.add('active');
//   console.log(
//     boxEl.classList.contains('active')
//   );
//   boxEl.classList.remove("active");
//   console.log(
//     boxEl.classList.contains('active')
//   );
// });

// const boxElss = document.querySelectorAll('.box');

// boxElss.forEach(function (boxEl, indexx) {
//   boxEl.classList.add(`order-${indexx + 1}`);
//   console.log(indexx, boxEl);
// });

const boxEl = document.querySelector('.box');

console.log(boxEl.textContent);

boxEl.textContent = "zerobeen";
console.log(boxEl.textContent);

const a = 'Hello';
// split: 문자를 인수 기준으로 쪼개서 배열로 반환.
// reverse: 배열을 뒤집기.
// join: 배열을 인수 기준으로 문자로 병합해 반환. 
const b = a.split('').reverse().join(''); //메소드 체이닝 이라고 한다.
console.log(a);
console.log(b);

