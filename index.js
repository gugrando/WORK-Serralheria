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
    console.log('funcioandno')
    menuToggle.classList.toggle('openMenu')
})