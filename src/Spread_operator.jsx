import React from 'react';

const Spread_operator = () => {

    const fullname = ['Faizan', 'Shabbir', 23, 'Designer'];
    const arr = [1, ...fullname, 'xyz'];

    console.log(arr);

};

export default Spread_operator();