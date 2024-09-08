const header = document.querySelector('header')


function anima(){


header.classList.toggle('rolagem' , window.scrollY > 0)    



}


window.addEventListener('scroll' , anima)