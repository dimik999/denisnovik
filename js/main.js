const openBtn = document.querySelector('#opbtn');
const closeBtn = document.querySelector('#clbtn');
const mobMenu = document.querySelector('#mobmenu');

function openMobMenu() {
    mobMenu.classList.add('meow');
}

function closeMobMenu() {
    mobMenu.classList.remove('meow');
}

openBtn.addEventListener('click', openMobMenu);
closeBtn.addEventListener('click', closeMobMenu);
