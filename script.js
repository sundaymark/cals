const num1 = document.querySelector('.num1');
const num2 = document.querySelector('.num2');
const add = document.querySelector('.add');
add.addEventListener('click', function(){
    if(num1.value === '' && num2.value === ''){
        alert('please enter a value');
    }
})