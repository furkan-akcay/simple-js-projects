// Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

// Event listeners
document.addEventListener("DOMContentLoaded", getTodosFromLocalStorage);
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterTodo);

// functions
function templateTodo(todo) {
    // To do div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    // create li
    const newTodo = document.createElement("li");
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);

    newTodo.innerText = todo;

    // check mark button
    const completedButton = document.createElement("button");
    completedButton.classList.add("complete-btn");
    completedButton.innerHTML = "<i class='fas fa-check'></i>";
    todoDiv.appendChild(completedButton);

    // trash button
    const trashButton = document.createElement("button");
    trashButton.classList.add("trash-btn");
    trashButton.innerHTML = "<i class='fas fa-trash'></i>";
    todoDiv.appendChild(trashButton);

    // append to list
    todoList.appendChild(todoDiv);
}

function addTodo(event) {
    // Prevent form from submitting
    event.preventDefault();
    templateTodo(todoInput.value);
    // store locale
    todos = new TodosLocalStorage();
    todos.store(todoInput.value);
    // clear input value
    todoInput.value = "";
}

function deleteCheck(e) {
    const element = e.target;
    const todo = element.parentElement;
    const todoText = todo.childNodes[0].innerText;
    const todos = new TodosLocalStorage();

    // delete
    if (element.classList[0] === "trash-btn") {
        // animation
        todo.classList.add("fall");
        todo.addEventListener("transitionend", () => {
            todo.remove();
        });
        // destroy from local
        todos.destroy(todoText);
    }

    // check
    if (element.classList[0] === "complete-btn") {
        todo.classList.toggle("completed");
        todos.complete(todoText);
    }
}

function filterTodo(e) {
    const todos = todoList.childNodes;
    todos.forEach((todo) => {
        switch (e.target.value) {
            case "all":
                todo.style.display = "flex";
                break;

            case "completed":
                todo.classList.contains("completed")
                    ? (todo.style.display = "flex")
                    : (todo.style.display = "none");
                break;

            case "uncompleted":
                !todo.classList.contains("completed")
                    ? (todo.style.display = "flex")
                    : (todo.style.display = "none");
                break;
        }
    });
}

class TodosLocalStorage {
    constructor() {
        let todos;
        if (localStorage.getItem("todos") === null) {
            todos = [];
        } else {
            todos = JSON.parse(localStorage.getItem("todos"));
        }
        this.todos = todos;
    }

    get() {
        this.todos.forEach((todo) => {
            templateTodo(todo[0]);
        });
    }

    set() {
        localStorage.setItem("todos", JSON.stringify(this.todos));
    }

    store(todo) {
        this.todos.push([todo, 0]);
        this.set();
    }

    destroy(todo) {
        const index = this.todos.indexOf(todo);
        this.todos.splice(index, 1);
        this.set();
    }

    complete(todo) {
        this.todos.forEach((item) => {
            item[0] == todo ? (item[1] = item[1] == 0 ? 1 : 0) : "";
        });
        this.set();
    }
}

function getTodosFromLocalStorage() {
    const todos = new TodosLocalStorage();
    todos.get();
}
