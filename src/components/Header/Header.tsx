import React, {FC} from 'react';
import CustomLink from "../../ui/CustomLink/CustomLink";
import classes from './Header.module.css'
import {Link} from "react-router-dom";

const Header: FC = () => {
    return (
        <div className={classes.container}>
            <Link className={classes.logo} to='/'>JIRA</Link>
            <nav className={classes.nav}>
                <CustomLink to="/">Ticket list</CustomLink>
                <CustomLink to="board">Board</CustomLink>
            </nav>
        </div>
    );
};

export default Header;