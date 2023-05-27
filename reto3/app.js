

let button = document.querySelector('.btn')
console.log(button)

let modal = document.querySelector('.modal')
console.log(modal)

button.addEventListener('click', ()=>{
    modal.classList.toggle('active')
})
