
var listElement = document.querySelector('#app ul');
var inputElemente = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

function renderTodos() {
    listElement.innerHTML = '';

    for(todo of todos){
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        var linkElemente = document.createElement('a');
        linkElemente.setAttribute('href', '#');
        var linkText = document.createTextNode('  Excluir');

        var pos = todos.indexOf(todo);
        linkElemente.setAttribute('onclick', 'deleteTodo('+ pos +')');

        linkElemente.appendChild(linkText);
        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElemente);
        listElement.appendChild(todoElement);
    }
}

renderTodos();

function addTodo(){
    var todoText = inputElemente.value;

    todos.push(todoText);
    inputElemente.value = '';
    renderTodos();
    saveToStorage();
}

buttonElement.onclick = addTodo;

function deleteTodo(pos){
    todos.splice(pos, 1);
    renderTodos();
    saveToStorage();
}

function saveToStorage(){
    localStorage.setItem('list_todos', JSON.stringify(todos));
}