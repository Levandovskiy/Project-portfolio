const btnDarkMode = document.querySelector(".dark-mode-btn");   /* Підключаємось до кнопки через клас */ 

btnDarkMode.onclick = function () {
	btnDarkMode.classList.toggle("dark-mode-btn--active");
}