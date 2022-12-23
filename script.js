const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-btn');
const toodoList = document.querySelector('.todo-list');
todoButton.addEventListener('click', addTodo);
toodoList.addEventListener('click', deleteCheck);

function addTodo(e){
     if(todoInput.value !== ''){
        e.preventDefault();
        const todoDiv = document.createElement('div');
        todoDiv.classList.add('todo');
        const newTodo = document.createElement('li');
        newTodo.innerText= todoInput.value;
        newTodo.classList.add('todo-item');
        todoDiv.appendChild(newTodo);
        toodoList.appendChild(todoDiv);
        todoInput.value = '';
        const completedButton = document.createElement('button');
        completedButton.innerHTML = '<i class="fas fa-check"></i>';
        completedButton.classList.add('completed-btn');
        todoDiv.appendChild(completedButton);
        const trashButton = document.createElement('button');
        trashButton.innerHTML = '<i class="fas fa-trash"></i>';
        trashButton.classList.add('trash-btn');
        todoDiv.appendChild(trashButton);
    }else{
        alert('Please Enter a Task')
    }    
}