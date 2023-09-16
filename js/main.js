const btnDarkMode = document.querySelector(".dark-mode-btn");   /* Підключаємось до кнопки через клас */ 

btnDarkMode.onclick = function () {   /*Робимо кнопку рухливою */
	btnDarkMode.classList.toggle("dark-mode-btn--active");   
	
	document.body.classList.toggle('dark')
}