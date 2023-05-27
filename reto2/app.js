

let container = document.querySelector('.container2')

let button = document.querySelectorAll('.collapsible')

let contenido = document.querySelector('.content')


container.addEventListener('click', (e)=>{
    e.target.parentElement.classList.toggle('active')
})

