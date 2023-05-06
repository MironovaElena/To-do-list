//создаем константу для поля ввода, где пользователь будет её изменять
const inputField =document.querySelector(".inputField");

//получаем доступ кнопке
const btn = document.querySelector(".btn");

//создаем константу где все дела будет подвешивать пользователь
const toDoContainer =document.querySelector(".toDoContainer");

btn.addEventListener('click',()=>{
    //console.log(btn);
    const item =document.createElement('li');//создаем il, чтобы потом его подвесить через html
    //console.log(item);
    item.innerText = inputField.value; //получаем доступ к тому, что напсал пользователь 
    item.classList.add('toDoAdded'); //добавляем стиль на новый элемент 
    toDoContainer.appendChild(item); //привязываем детей к родителю appendChild
    inputField.value =''; //опустошаем графу после добавления

    item.addEventListener('click',()=>{
        item.classList.add('toDoCompleted'); //вычеркиваем дела
    })
    
    item.addEventListener('dblclick',function(){
        toDoContainer.removeChild(item);// удаляем с помощью двух кликов
    })
})