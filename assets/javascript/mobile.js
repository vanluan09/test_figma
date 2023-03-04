var logo = document.querySelector('.logo');
var navbar = document.querySelector('.navbar');
var header = document.querySelector('.header');

function openMenu() {
    navbar.classList.add('open');
}

function closeMenu() {
    navbar.classList.remove('open');
}

logo.addEventListener('click', openMenu);


var navbarItems = document.querySelectorAll('.navbar-item-link');

for (var i = 0; i < navbarItems.length; i++) {
    navbarItem = navbarItems[i];
    navbarItem.onclick = function() {
        navbar.classList.remove('open');
    }
}
