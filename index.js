//HAMBURGER ICON
const icons = document.querySelectorAll('.icon');
icons.forEach (icon => {  
  icon.addEventListener('click', (event) => {
    icon.classList.toggle("open");
  });
});


// MENU LIST ON CLICK
const menuToggle = document.querySelector('.navigator')
const buttonClick = document.querySelector('.nav-icon-5')
buttonClick.addEventListener('click', ()=>{
    menuToggle.classList.toggle('openMenu')
})

// HEADER BACKGROUND CHANGE ON SCROLL
document.addEventListener('scroll', ()=>{
  const header = document.querySelector("header")
  if(window.scrollY > 100){
    header.classList.add('scrolled')
    header.classList.remove('unscroll')
  }else{
    header.classList.remove('scrolled')
    header.classList.add('unscroll')
  }
})

