
const openMenu = document.querySelector('.header-burger');




header-burger.addEventListener('click',show);
header-burger.addEventListener('click',close);

function show(){
    header-burger.style.display = 'flex';
    header-burger.style.top = '0';
}
function close(){
    header-burger.style.top = '-100%';
}