//Declaring the variable
const header1 = document.querySelector('.header1');
const header2 = document.querySelector('.header2');
const header3 = document.querySelector('.header3');
const heading = document.querySelector('.heading');
const btn = document.querySelector('.btn');

//setting background color 
var setPray = document.querySelector('body');
setPray.setAttribute('style', 'background-color: whitesmoke; font-size: 20px;');
//setting background color change on button click
btn.addEventListener('click' , ()=>{
setPray.setAttribute('style','background-color: pink; font-size: 20px;');
console.log('Page color change');
heading.style.color = 'blue';
header1.style.color = 'green';
header2.style.color = 'green';
header3.style.color = 'green';
header1.style.fontSize = '25px';
header2.style.fontSize = '25px';
header3.style.fontSize = '25px';
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
