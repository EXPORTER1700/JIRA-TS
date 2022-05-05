import React, {FC} from 'react';
import classes from "./BoardItem.module.css";
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {useActions} from "../../../hooks/useActions";
import {ITodo} from "../../../types/types";

interface BoardItemProps {
    todo: ITodo
}

const BoardItem: FC<BoardItemProps> = ({todo}) => {
    const {changeCompletedTodo} = useActions()
    const users = useTypedSelector(state => state.users.users)
    const [user] = users.filter(user => user.id === todo['userId'])
    return (
        <li onClick={() => changeCompletedTodo(todo.id)} className={classes.container}>
            <div className={classes.user}>
                <p style={{backgroundColor: user.color}}>{user.name.split(' ')[0][0]}{user.name.split(' ')[1][0]}</p>
            </div>
            <p className={classes.title}>{todo.title}</p>
        </li>
    );
};

export default BoardItem;