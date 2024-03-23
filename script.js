const hamburger = document.querySelector('.hamburger');
const mainMenu = document.querySelector('.offscreen');
hamburger.addEventListener('click',() =>{
    hamburger.classList.toggle('is-active');
    mainMenu.classList.toggle('onnscreen');
})