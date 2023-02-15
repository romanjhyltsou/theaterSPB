const btnLine = document.querySelector('.menu__btn');
const menuMobList  = document.querySelector('.menu__mobile');
const menuMobileItem = document.querySelectorAll('.menu__mobile__item');
const mobileClose = document.querySelector('.menu__mobile__close');

const menuMobileItemClose = () =>{
    menuMobList.classList.remove('menu__mobile__list_active');
}

for(let i = 0; i < menuMobileItem.length; i++) {
    menuMobileItem[i].addEventListener('click', (e) => {
        menuMobileItemClose();  
    });
}


btnLine.addEventListener('click', () => {
        menuMobList.classList.toggle('menu__mobile__list_active');
});

mobileClose.addEventListener('click', ()=>{
    menuMobList.classList.remove('menu__mobile__list_active');
})