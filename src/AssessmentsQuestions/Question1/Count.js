import React, { useState } from "react";
import "./Count.css";

function Count() {
    const [count, setCount] = useState(0);
    const handleIncrement=()=>{
        setCount(count+1);
        console.log(count)
    };
    const handleDecrement=()=>{
        setCount(count-1);
        console.log(count)
    };
    const handleReset=()=>{
        setCount(count-count);
    }
    return (
        <div id="btns">
            <p id="count"> Count : {count}</p>
            <button id="inc" onClick={handleIncrement}> Increment </button>
            <button id="dec" onClick={handleDecrement}> Decrement </button><br/>
            <button id="reset" onClick={handleReset}> Reset </button>
        </div>
    )
}

export default Count;
