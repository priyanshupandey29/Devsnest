import "./Button.css";
import { useState } from 'react';


function Button() {
    const [count , setcount] = useState(0);
    return (
        <div className="btn">
            <button onClick={() =>
                setcount(count + 1)}>{count}</button>
        </div>
    )
}

export default Button