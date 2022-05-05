import React, {FC} from 'react';
import BoardItem from "../BoardItem/BoardItem";
import classes from './BoardList.module.css'
import {ITodo} from "../../../types/types";

interface BoardListProps {
    todos: ITodo[]
}

const BoardList:FC<BoardListProps> = ({todos}) => {
    return (
        <>
            <ul className={classes.container}>
                {todos.map(todo => <BoardItem key={todo.id} todo={todo}/>)}
            </ul>
        </>
    );
};

export default BoardList;