let icon1 = document.querySelector('.icon1');
let icon2 = document.querySelector('.icon2');
let menu = document.querySelector('.menu');
let rightSide_menubar = document.querySelector('.rightSide-menubar');
let list_menubar = document.querySelector('.list-menubar');


icon1.addEventListener('click', ()=>{
    list_menubar.innerHTML = rightSide_menubar.innerHTML;
    menu.style.visibility = 'visible';
    menu.style.opacity = '1';
})

icon2.addEventListener('click', ()=>{
    menu.style.visibility = 'hidden';
    menu.style.opacity = '';
})

let x = window.matchMedia("(min-width:769px)")
x.addEventListener('change',()=>{
    if (x.matches){
        menu.style.visibility = 'hidden';
        menu.style.opacity = '';
    }
})



