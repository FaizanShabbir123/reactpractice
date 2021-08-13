import React from 'react';

let currDate = new Date();
currDate = currDate.getHours();
let greetings = '';
const cssStyle = {};

if( currDate >= 1 && currDate < 12 ) {
  greetings = 'Good Morning';
  cssStyle.color = "green";
}
else if( currDate >= 12 && currDate < 19 ) {
  greetings = 'Good Afternoon';
  cssStyle.color = "orange";
}
else {
  greetings = 'Good Night';
  cssStyle.color = "black";
}


function hello_msg() {
    return <div className="Message">
                <h1><span style={cssStyle}>{greetings}</span> </h1>
            </div>
}

export default hello_msg;