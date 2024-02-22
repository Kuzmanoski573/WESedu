const humberger = document.querySelector('.humburger');
const navMenu = document.querySelector('.nav-menu');

humberger.addEventListener('click', () =>{
    humberger.classList.toggle('active');
    navMenu.classList.toggle('active');
});