import React, { useState } from 'react';

const React_hook = () => {

    const state = useState();
    // console.log(state);

    const [count, setCount] = useState(0);

    const IncNum = () => {
            
        setCount(count + 1);
        // console.log("clicked " + count ++);
    };

    return (
        <div className="Btn_click flex items-center gap-x-7">
            <button onClick={IncNum} className="w-40 py-2 bg-indigo-300 text-white">Click Me</button>
            <h1 className="text-3xl">{count}</h1>
        </div>
    );
};

export default React_hook;