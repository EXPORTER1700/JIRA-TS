import {ITodo} from "./types";


export interface TodosState {
    todos: ITodo[]
}

export enum TodosActionTypes {
    ADD_MANY_TODOS = 'ADD_MANY_TODOS',
    CHANGE_COMPLETED_TODO = 'CHANGE_COMPLETED_TODO'
}

interface AddManyTodosAction {
    type: TodosActionTypes.ADD_MANY_TODOS
    payload: ITodo[]
}

interface ChangeCompletedTodoAction {
    type: TodosActionTypes.CHANGE_COMPLETED_TODO,
    payload: number
}

export type TodosActions = AddManyTodosAction | ChangeCompletedTodoAction