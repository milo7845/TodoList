let input = document.getElementById('input');
let addInput = document.getElementById('add-input');
let todos = document.getElementById('todos');

addInput.addEventListener('click' , function() {
       var todo = document.createElement('p');
    //    this.parentElement.className= "todo"
    todo.className = "todo";
    todo.innerText = input.value;
    todos.appendChild(todo);
    input.value = ""


    todo.addEventListener('click' , function() {
        todo.style.textDecoration = 'line-through'
    } ) 

    todo.addEventListener('dblclick', function() {
        todos.removeChild(todo);
    } ) 



})


setInterval(()=>{
    const time = document.querySelector("#time");
let date = new Date();
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
let day_night = "AM";
if(hours > 12){
    day_night = "PM";
    hours = hours - 12;
}
if(hours < 10){
    hours = "0" + hours ;
}
if(minutes < 10){
    minutes =  "0" + minutes ;
}
if(seconds < 10){
    seconds =  "0" + seconds ;
}
time.textContent = hours + ":" + minutes + ":" + seconds + " " +  day_night;
})