document.addEventListener('DOMContentLoaded',()=>{
    let usuario = document.querySelector('#username');
    let password = document.querySelector('#password');
    let saludo = document.querySelector('#saludo');
    let form = document.querySelector('form');
    
    form.addEventListener('submit',(evnt)=>{
        evnt.preventDefault();
        saludo.innerHTML = `Hola ${usuario.value} recuerda que tu password es ${password.value}`;
        
        
    })
    
    console.log(saludo)









})