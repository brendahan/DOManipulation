//Declaring the variable
const btn = document.querySelector('.btn');

//setting background color 
var setPray = document.querySelector('body');
setPray.setAttribute('style', 'background-color: purple; font-size: 20px;');
//setting background color change on button click
btn.addEventListener('click' , ()=>{
setPray.setAttribute('style','background-color: pink; font-size: 20px;');
console.log('Page color change');
})

//Normal function
function hello(){
    console.log('hey');
}
hello();

//ES6 function
const helloy = ()=>{
console.log('es6');
}
helloy();

