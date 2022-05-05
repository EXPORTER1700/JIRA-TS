import {useMemo} from "react";
import {ITodo} from "../types/types";

export const useSearchTodo = (todos: ITodo[], search: string) => {
    const searchedTodos = useMemo(() => {
        return todos.filter(todo => todo.title.toLowerCase().includes(search.toLowerCase()))
    }, [todos, search])
    return searchedTodos
}

export const useTodos = (todos: ITodo[], search: string, completed: string) => {
    const searchedTodos = useSearchTodo(todos, search)
    const sortedAndSearchedTodos = useMemo(() => {
        if (completed === 'All') return searchedTodos
        return searchedTodos.filter(todo => todo.completed === completed)
    }, [todos, completed, search])
    return sortedAndSearchedTodos
}