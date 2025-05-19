const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
const themeSwitch = document.querySelector('#theme-switch');
const body = document.querySelector('body');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active');
}

themeSwitch.onclick = () =>{
    body.classList.toggle('lightmode')
}

const typed = new Typed(".auto-type",{
    strings:["Web Developer","Programmer","Designer"],
    typeSpeed : 50,
    backSpeed : 50,
    loop : true,
})

//Contact Form

const scriptURL = 'https://script.google.com/macros/s/AKfycbxAVUGSgfVJ-O3_PuhtB64IZ5aEVHIviuGUDhLmEnnyFuP-XAbfxjPFT2upHF7fIQ2g/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  
  e.preventDefault()
  
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! Form is submitted" ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})