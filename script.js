//Нашли все кнопки с data-category
const category = document.querySelectorAll('[data-category]');

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
      item.classList.add('hidden');
    })

    // выбрать нужные карточки товара и показать их
    //найдем все селекторы с таким же id
    const CardTov = document.querySelectorAll('#' + this.dataset.category);
    CardTov.forEach(function (elem) {
      elem.classList.remove('hidden');
    })
  })
});




