const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");
const body = document.body;

// Клонируем меню, чтобы задать свои стили для мобильной версии
const menu = document.querySelector("#menu").cloneNode(1);

// При клике на иконку hamb вызываем ф-ию hambHandler
hamb.addEventListener("click", hambHandler);

// Выполняем действия при клике ..
function hambHandler(e) {
  e.preventDefault();
  // Переключаем стили элементов при клике
  popup.classList.toggle("open");
  hamb.classList.toggle("active");
  body.classList.toggle("noscroll");
  renderPopup();
}

// Здесь мы рендерим элементы в наш попап
function renderPopup() {
  popup.appendChild(menu);
}

// Код для закрытия меню при нажатии на ссылку
const links = Array.from(menu.children);

// Для каждого элемента меню при клике вызываем ф-ию
links.forEach((link) => {
  link.addEventListener("click", closeOnClick);
});

// Закрытие попапа при клике на меню
function closeOnClick() {
  popup.classList.remove("open");
  hamb.classList.remove("active");
  body.classList.remove("noscroll");
}

let slideIndex = 1;
/* Вызываем функцию, которая реализована ниже: */
        showSlides(slideIndex);

/* Увеличиваем индекс на 1 — показываем следующий слайд: */
        function nextSlide() {
           showSlides(slideIndex += 1);
        }

/* Уменьшаем индекс на 1 — показываем предыдущий слайд: */
        function previousSlide() {
           showSlides(slideIndex -= 1);  
        }

/* Устанавливаем текущий слайд: */
        function currentSlide(n) {
           showSlides(slideIndex = n);
        }

/* Функция перелистывания: */
        function showSlides(n) {
    /* Обращаемся к элементам с названием класса "item", то есть к картинкам: */
           let slides = document.getElementsByClassName("item");
    
    /* Проверяем количество слайдов: */
            if (n > slides.length) {
               slideIndex = 1
            }
            if (n < 1) {
               slideIndex = slides.length
            }
  
    /* Проходим по каждому слайду в цикле for: */
            for (let slide of slides) {
               slide.style.display = "none";
            }
    /* Делаем элемент блочным: */
            slides[slideIndex - 1].style.display = "flex";    
        }