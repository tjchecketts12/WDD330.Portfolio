import utils from './utils.js';
import ls from './ls.js';

document.querySelector('#addBtn').onclick = newTodo; 

function loadTodos(){
    const todoList = ls.getTodoList(); 
     todoList.forEach(todo => {
         const el = createTodoElement(todo)
         addToList(el);
     })
}


function newTodo (){
    const todo = createTodo(); 
    const todoDiv = createTodoElement(todo); 
    addToList(todoDiv); 
    ls.saveTodo(todo);
}

function createTodo(){
    const input = document.querySelector('#todoInput'); 
    const newTodo = {id: Date.now(), content: input.value, completed: false}
    input.value = ''; 
    return newTodo;
}

function createTodoElement(todo){
    ///todo div 
    const todoDiv = document.createElement('div'); 
    todoDiv.classList.add('todo'); 

    //complete btn
     const completeBtn = document.createElement('button'); 
     completeBtn.setAttribute('data-completed', todo.completed, 'data-content', todo.content);  
    completeBtn.classList.add('complete-btn'); 
    completeBtn.innerText = "Complete"; 
    completeBtn.onclick = crossedOut;

    //todo content 
    const todoContent = document.createElement('div'); 
    todoContent.innerText = todo.content; 
    todoContent.classList.add('todo-content'); 


    //delete btn 
     const deleteBtn = document.createElement('button');
    // const deleteBtn = document.querySelector('#delete');  
    deleteBtn.setAttribute('data-id', todo.id); 
    deleteBtn.classList.add('todo-delete-btn'); 
    deleteBtn.innerText = "X"; 
    deleteBtn.onclick = deleteTodo;
    


    todoDiv.appendChild(completeBtn); 
    todoDiv.appendChild(todoContent); 
    todoDiv.appendChild(deleteBtn); 

    return todoDiv;

}

function addToList(todoDiv){
    // add to the document 
    document.querySelector('#todos').appendChild(todoDiv); 

}




// Event Handlers 
function deleteTodo(e){
    const btn = e.currentTarget; 
    ls.deleteTodo(btn.getAttribute('data-id'));
    document.querySelector('#todos').innerHTML = ''; 
     loadTodos();
}

function crossedOut(e){
    const btn = e.currentTarget; 
    ls.crossedOut(btn.getAttribute('data-completed', 'data-content'));
    // /document.querySelector('#todos').innerHTML = ''; 
    //  loadTodos();
}