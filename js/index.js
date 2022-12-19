let nome =document.getElementById('name');
let sobrenome = document.getElementById('lastName');
let email = document.getElementById('email');
let senha = document.getElementById('password');
let check = document.getElementById('check');

let form = document.getElementById('form')
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    console.log(nome.value);
    console.log(sobrenome.value);
    console.log(email.value);
    console.log(senha.value);
    console.log(check.value);
})

let input =document.getElementById('submit')
input.addEventListener('click', (e)=>{
    e.preventDefault();
    console.log(nome.value);
    console.log(sobrenome.value);
    console.log(email.value);
    console.log(senha.value);
    console.log(check.value);
})