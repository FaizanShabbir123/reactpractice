import React from 'react';

const SlotM = (props) => {
    let x = props.x;
    let y = props.y;
    let z = props.z;

    if ( x===y && y===z ) {
        return (
            <>
                <div className="Machine flex justify-center items-center p-5">

                    <h1> {x} {y} {z}  </h1> <br />
                    <h1 className="pl-5">This is Matching</h1>
                </div>
            </>
        );
    }
    else {
        return (
            <>
                <div className="Machine flex justify-center items-center p-5">

                    <h1> {x} {y} {z}  </h1> <br />
                    <h1 className="pl-5">This is not Matching</h1>
                    <hr />
                </div>
            </>
        );
    }
};

export default SlotM;