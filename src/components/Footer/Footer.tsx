import React, {FC} from 'react';
import classes from './Footer.module.css'

const Footer:FC = () => {
    return (
        <div className={classes.container}>
            <p className={classes.year}>2022</p>
        </div>
    );
};

export default Footer;