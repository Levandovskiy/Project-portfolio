const btnDarkMode = document.querySelector(".dark-mode-btn");   /* Підключаємось до кнопки через клас */ 


if (localStorage.getItem('darkMode') === 'dark') {
	btnDarkMode.classList.add("dark-mode-btn--active");
	document.body.classList.add("dark");
} /* else if (localStorage.setItem("darkMode") === 'light') {
	btnDarkMode.classList.add("dark-mode-btn--active");
	document.body.classList.add('dark');

}*/


//Включаємо ночний режим

btnDarkMode.onclick = function () {   /*Робимо кнопку рухливою */
	btnDarkMode.classList.toggle("dark-mode-btn--active");  
	
	
	const isDark = document.body.classList.toggle('dark');

	if (isDark) {
		localStorage.setItem('darkMode', 'dark')
	} else {
		localStorage.setItem('darkMode', 'light');
	} 
}