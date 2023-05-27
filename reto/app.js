
let button = document.getElementById('btn');
console.log(button)

let listas = document.querySelector('.dropdown-content');
console.log(listas);

button.addEventListener('click', ()=>{
    listas.classList.toggle('altura')
})