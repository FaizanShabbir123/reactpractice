import { add } from 'lodash';
import React from 'react';
import reactDom from 'react-dom';

function Calc() {
    return (
        <>
            <ul>
                <li> Sum Of two numbers is {add(40, 4)} </li>
                <li> Sub Of two numbers is {sub(40, 4)} </li>
                <li> Div Of two numbers is {div(40, 4)} </li>
                <li> Mult Of two numbers is {mult(40, 4)} </li>
            </ul>
        </>
    );
}

export default Calc;