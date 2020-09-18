import './styles.css';
import {Todo, TodoList} from './classes'
import {crearTodoHtml} from './js/componentes'
// import {Todo} from './classes/todo.class';// consumiendo recursos de otro doc.
// import {TodoList} from './classes/todo-list.class';


export const todoList = new TodoList();

todoList.todos.forEach(crearTodoHtml);

