import angular from "angular";

// dependencies
import ngRedux from "ng-redux";

// components
import TodoItem from "./todo-item/todo-item.component";
import TodoList from "./todo-list/todo-list.component";
import TodoForm from "./todo-form/todo-form.component";

export default angular
    .module("appTodo", [ngRedux])
    .component(TodoForm.selector, TodoForm)
    .component(TodoItem.selector, TodoItem)
    .component(TodoList.selector, TodoList).name;
