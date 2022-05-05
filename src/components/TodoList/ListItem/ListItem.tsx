import React, {FC} from 'react';
import classes from './ListItem.module.css'
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {useActions} from "../../../hooks/useActions";
import {ITodo} from "../../../types/types";

interface ListItemProps {
    todo: ITodo
}

const ListItem: FC<ListItemProps> = ({todo}) => {
    const {changeCompletedTodo} = useActions()
    const users = useTypedSelector(state => state.users.users)
    const [user] = users.filter(user => user.id === todo['userId'])
    return (
        <li onClick={() => changeCompletedTodo(todo.id)} className={classes.container}>
            <div className={classes.user}>
                <p style={{backgroundColor: user.color}}>{user.name.split(' ')[0][0]}{user.name.split(' ')[1][0]}</p>
            </div>
            <p className={classes.title}>{todo.title}</p>
            <p className={classes.completed}>{todo.completed}</p>
        </li>
    );
};

export default ListItem;