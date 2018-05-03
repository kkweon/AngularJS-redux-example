import * as actions from "./types";

export function createTodo(todoWithoutId) {
    return {
        type: actions.TODO_ADD,
        payload: todoWithoutId,
    };
}

export function updateTodo(todo) {
    return {
        type: actions.TODO_UPDATE,
        payload: todo,
    };
}

export function deleteTodo(todo) {
    return {
        type: actions.TODO_DELETE,
        payload: todo,
    };
}
