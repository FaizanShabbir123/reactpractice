import React, { useState } from 'react';

const Clock = () => {

    let time = new Date().toLocaleTimeString();

    const [ctime, setCtime] = useState(time);

    const UpdateTime = () => {
        
        time = new Date().toLocaleTimeString();
        setCtime(time);
    };

    setInterval(UpdateTime, 1000);

    return (
        <>
            <h1 className="text-3xl text-green-400">{ctime}</h1>
        </>
    );
};

export default Clock;