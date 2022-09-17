import React, { useState } from "react";
import classes from './Counter.module.scss';

const Counter = () => {
    const [count, setCount] = useState(0);

    const incriment = () => {
        setCount(count + 1)
    }
    return (
        <div>
            <button className={classes.btn} onClick={incriment}>{ count }</button>
        </div>
    )
};

export default Counter;