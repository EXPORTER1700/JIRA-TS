import {TodosActions, TodosActionTypes, TodosState} from "../../types/todos";

const defaultState: TodosState = {
    todos: [],
}

const nextCompleted = (completed: string): string => {
    switch (completed) {
        case ('To do'):
            return 'In progress'
        case ('In progress'):
            return 'Done'
        default:
            return completed
    }
}

export const todosReducer = (state = defaultState, action: TodosActions) => {
    switch (action.type) {
        case (TodosActionTypes.ADD_MANY_TODOS):
            return {...state, todos: [...state.todos, ...action.payload]}
        case (TodosActionTypes.CHANGE_COMPLETED_TODO):
            return {
                ...state,
                todos: [...state.todos.map(todo => todo.id === action.payload ? {
                    ...todo,
                    completed: nextCompleted(todo.completed)
                } : todo)
                ]
            }
        default:
            return state
    }
}
