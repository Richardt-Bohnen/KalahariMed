console.log('loaded')
// index page
let burgerOpen = false;
const burger = document.querySelector<HTMLElement>('.burger')!;
const nav = document.querySelector<HTMLElement>('nav')!;
const topLine = document.querySelector<HTMLElement>('.top-line')!;
const bottomLine = document.querySelector<HTMLElement>('.bottom-line')!;

nav.addEventListener('click', () =>{
  nav.style.top = '-1000px';
  topLine.style.display = 'inline';
  bottomLine.style.display = 'inline';
  burgerOpen = false;
})
burger.addEventListener('click', () =>{
  if (burgerOpen === false){
    nav.style.top = '0px';
    topLine.style.display = 'none';
    bottomLine.style.display = 'none';
    burgerOpen = true;
  }else{
    nav.style.top = '-1000px';
    topLine.style.display = 'inline';
    bottomLine.style.display = 'inline';
    burgerOpen = false;
  }
})