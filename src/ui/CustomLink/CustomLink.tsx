import React, {FC, ReactNode} from 'react';
import {Link, useMatch} from "react-router-dom";
import styles from './customLink.module.css'

interface CustomLinkProps {
    children: ReactNode
    to: string
}

const CustomLink: FC<CustomLinkProps> = ({children, to, ...props}) => {
    const match = useMatch({
        path: to,
        end: to.length === 1
    })
    const classes = [styles.link]
    if (match) classes.push(styles.active)
    return (
        <Link to={to} className={classes.join(' ')} {...props}>
            {children}
        </Link>
    );
};

export default CustomLink;