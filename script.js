//Нашли все кнопки с data-category
const category = document.querySelectorAll('[data-category]');
//console.log(category);
//найти все карточки товара
const CardTovars = document.querySelectorAll('[data-category-tov]');

//для каждого элемента из этого списка применим функцию
category.forEach(function (item) {

  //при нажатии на кнопку будет выполняться следующая функция
  item.addEventListener('click', function () {
    //для каждого элемента с этим селектором удалим класс
    const button = document.querySelectorAll('.button_category');
    button.forEach(function (item) {
      item.classList.remove('button_color');
    })
    //теперь добавим этот класс для нажатого элемента
    this.classList.add('button_color');

    //скрыть все карточки товаров
    CardTovars.forEach(function (item) {
      item.classList.add('hiddens');
    })
    redrawPhoto(imagesCenter);
    // выбрать нужные карточки товара и показать их
    //найдем все селекторы с таким же id
    const CardTov = document.querySelectorAll('.' + this.dataset.category);
    //console.log(CardTov);
    CardTov.forEach(function (elem) {
      elem.classList.remove('hiddens');
    })
  })
});


//slider 
//дети массивов слайдеров
const imagesLeft = Array.from(document.querySelector('.slider_left').children);
const imagesCenter = Array.from(document.querySelector('.slider_center').children);
const imagesRight = Array.from(document.querySelector('.slider_right').children);
//console.log(imagesCenter);

//let categorytov = 'sneakers';
//функция, которая меняет фотки при пролистывании
function redrawPhoto(arr) {
  //мне нужно менять блоки, а в примере меняются картинки
  //допустим, если у дивов нет тега hidden, мы его добавляем, в противном случае удаляем
  const array = Array.from(arr);
  //console.log(array);
  for (let i = 0; i < array.length; i++) {
    if (arr[i].hidden == true) {
      arr[i].hidden = false;
    }
    else arr[i].hidden = true;
  }
}
//console.log(categorytov);
//console.log(CardTovars);
//function shiftPhoto(arrow) {
//const w = window.innerWidth >= 768 ? 2 : 1;
//if (window.innerWidth > 768) { const w = 6; }
//else if (window.innerWidth <= 320) { const w = 1; }
//else { const w = 4; }

//if (arrow == 'left') {
//slice вырезает и возвращает указанную часть массива
//category = category.slice(w).concat(category.slice(0, w));
//} else if (arrow == 'right') {
// category = category.slice(-w).concat(category.slice(0, -w));
// }
//   category[categorytov] = category[categorytov].slice(w).concat(category[categorytov].slice(0, w));
// } else if (arrow == 'right') {
//   category[categorytov] = category[categorytov].slice(-w).concat(category[categorytov].slice(0, -w));
// }
//}
//найти div с классом slider
const slider = document.querySelector('.slider');
//console.log(slider);

const buttonLeft = document.querySelector('.button_slider_left');
const buttonRight = document.querySelector('.button_slider_right');

function sliderLeft() {
  redrawPhoto(imagesRight);
  buttonLeft.removeEventListener('click', sliderRight);
  buttonRight.removeEventListener('click', sliderLeft);
  slider.classList.add('move_left');
  //shiftPhoto('left');
};

function sliderRight() {
  redrawPhoto(imagesLeft);
  buttonLeft.removeEventListener('click', sliderRight);
  buttonRight.removeEventListener('click', sliderLeft);
  slider.classList.add('move_right');
  //shiftPhoto('right');
};

slider.addEventListener('animationend', () => {
  redrawPhoto(imagesCenter);
  slider.classList.remove('move_left');
  slider.classList.remove('move_right');
  buttonLeft.addEventListener('click', sliderRight);
  buttonRight.addEventListener('click', sliderLeft);
});

buttonLeft.addEventListener('click', sliderRight);
buttonRight.addEventListener('click', sliderLeft);
