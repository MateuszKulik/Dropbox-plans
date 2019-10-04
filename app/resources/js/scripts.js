



// Hamburger menu


var hamburger = document.querySelector('.js-main-nav__hamburger');

var main_nav_list = document.querySelector('.js-main-nav__list');

var hamburger_line = document.querySelectorAll('.js-hamburger__line');



hamburger.addEventListener("click", function(){
	main_nav_list.classList.toggle('is-invincible');
	
	hamburger_line.forEach(function(line){
		line.classList.toggle('is-closed');
	});
});


