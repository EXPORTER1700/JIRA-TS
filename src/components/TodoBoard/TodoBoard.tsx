import React, {FC, useState} from 'react';
import BoardList from "./BoardList/BoardList";
import classes from './TodoBoard.module.css'
import Loader from "../../ui/Loader/Loader";
import {useTypedSelector} from "../../hooks/useTypedSelector";

const TodoBoard: FC = () => {
    const {users} = useTypedSelector(state => state.users)
    const {todos} = useTypedSelector(state => state.todos)
    const [num, setNum] = useState(5)
    if (!todos.length || !users.length) return <Loader/>
    const toDoTodo = todos.filter(todo => todo.completed === 'To do')
    const inProgressTodo = todos.filter(todo => todo.completed === 'In progress')
    const doneTodo = todos.filter(todo => todo.completed === 'Done')
    const incrementNum = () => {
        if (num + 5 <= todos.length) {
            setNum(prevState => prevState + 5)
        } else {
            setNum(todos.length)
        }
    }
    return (
        <div className={classes.container}>
            <div className={classes.cards}>
                <div className={classes.card}>
                    <p className={classes.description}>To do</p>
                    <BoardList todos={toDoTodo.slice(0, num)}/>
                </div>
                <div className={classes.card}>
                    <p className={classes.description}>In progress</p>
                    <BoardList todos={inProgressTodo.slice(0, num)}/>
                </div>
                <div className={classes.card}>
                    <p className={classes.description}>Done</p>
                    <BoardList todos={doneTodo.slice(0, num)}/>
                </div>
            </div>
            {toDoTodo.length > num || inProgressTodo.length > num || doneTodo.length > num
                ? <button className={classes.button} onClick={incrementNum}>Show more</button>
                : null
            }
        </div>
    );
};

export default TodoBoard;