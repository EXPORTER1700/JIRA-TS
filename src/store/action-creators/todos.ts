import {Dispatch} from "redux";
import {TodosActions, TodosActionTypes} from "../../types/todos";
import {ITodo} from "../../types/types";

export const fetchTodos = () => {
    return function (dispatch: Dispatch<TodosActions>) {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(res => res.json())
            .then(todos => todos.map((todo: ITodo) => ({...todo, completed: 'To do'})))
            .then(data => dispatch({type: TodosActionTypes.ADD_MANY_TODOS, payload: data}))
    }
}
export const changeCompletedTodo = (payload: number) => ({type: TodosActionTypes.CHANGE_COMPLETED_TODO, payload})