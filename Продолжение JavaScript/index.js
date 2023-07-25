



//! Продолжение JavaScript
//! Урок 6. Семинар. Основы событий в JavaScript
// <p class="super__element">Привет</p>

// <img src="https://placeimg.com/50/50/animals" alt="">
// <img src="https://placeimg.com/50/50/arch" alt="">
// <img src="https://placeimg.com/50/50/nature" alt="">
// <img src="https://placeimg.com/50/50/people" alt="">
// <img src="https://placeimg.com/50/50/tech" alt="">
// <img src="https://placeimg.com/50/50/tech/grayscale" alt="">
// <img src="https://placeimg.com/50/50/tech/sepia" alt="">

// <br>

// <button>Кнопка</button>
// <button class="super__element">Кнопка с классом btn</button>
// <button>Кнопка</button>

// <br>

// <textarea></textarea>

// <br>

// <ul>
//   <li>
//     <button>Кнопка 1</button>
//   </li>
//   <li>
//     <button>Кнопка 2</button>
//   </li>
//   <li>
//     <button>Кнопка 3</button>
//   </li>
//   <li>
//     <button>Кнопка 4</button>
//   </li>
// </ul>

// <script>
//   "use strict";


// 1. Необходимо вывести сообщение в консоль "все теги прогрузились", когда все теги будут созданы браузером.

// document.addEventListener('DOMContentLoaded', function () {
// 	console.log('Все теги прогрузились');
// });

// 2. Необходимо вывести сообщение в консоль "страница загрузилась", когда все ресурсы страницы будут загружены.

// window.addEventListener('load', function () {
// 	console.log('Страница загрузилась');
// });

// 3. При клике на какой-либо тег на странице в консоль должно выводиться сообщение наподобие:
// - Класс "super_element" присутствует в элементе "div".
// - сообщение должно определять присутствует или отсутствует класс "super_element"
// - у элемента, а также выводить в нижнем регистре верный тег в данной строке, по
// - которому был совершен клик.
// - Необходимо использовать делегирование.

// document.addEventListener('click', function (event) {
// 	if (event.target.classList.contains('super_element')) {
// 		console.log(`Класс "super_element" присутствует в элементе "${event.target.tagName.toLowerCase()}".`);
// 	} else {
// 		console.log(`Класс "super_element" отсутствует в элементе "${event.target.tagName.toLowerCase()}".`);
// 	}
// });


// 4. Сделайте, чтобы при наведении на textarea в консоли появлялось сообщение: "Вы навели на textarea."

// const textarea = document.querySelector('textarea');

// textarea.addEventListener('mouseover', function () {
// 	console.log('Вы навели на textarea.');
// });


// 5. Необходимо повесить событие клика на тег ul. В обработчике события в консоль необходимо выводить текст, который записан внутри элемента кнопки, по которой был произведен клик. Если клик был не по кнопке, то ничего выводить не нужно. Необходимо использовать делегирование.


// const ulElement = document.querySelector('ul');


// ulElement.addEventListener('click', function (event) {

// 	if (event.target.tagName === 'BUTTON') {

// 		console.log(event.target.textContent);
// 	}
// });
// 6. Вопрос: Почему в console.log пишется сначала текст из 5 задания и только потом выводится текст из 3 задания, если мы кликаем по кнопкам в ul? Ответ необходимо написать здесь же, под этим комментарием, своими словами.

//! При клике на кнопки в ul происходит вызов соответствующей функции, в которой происходит событие console.log. Поскольку действия в JavaScript выполняются асинхронно, при нажатии на кнопку функция console.log из 5 задания начинает выполняться первой, независимо от того, в каком порядке кнопки были нажаты. Затем, после завершения работы функции console.log из 5 задания, выполняется функция console.log из 3 задания. Поэтому в консоли сначала выводится текст из 5 задания, а только потом - из 3 задания.

// 7. С помощью JS необходимо изменить цвет заднего фона каждого второго тега li.
// const liElements = document.querySelectorAll('li');


// for (let i = 1; i < liElements.length; i += 2) {

// 	liElements[i].style.backgroundColor = 'grey';
// }