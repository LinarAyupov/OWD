const menuBtn = document.querySelector('.menu')
menuBtn.addEventListener('click',()=> {
	document.querySelector('.menu-nav').classList.toggle('menu-nav__active')
})