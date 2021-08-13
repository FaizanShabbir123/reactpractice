import React, { useState } from 'react';

const Form = () => {

    const [fullName, setFullName] = useState({
        fname : "",
        lname : "",
        email : "",
        phone : "",
    });

    const InputEvent = (event) => {

        console.log(event.target.value);
        console.log(event.target.name);

        // const value = event.target.value;
        // const name = event.target.name;

        const { value, name } = event.target;

        setFullName((preValue) => {
            // console.log(preValue);

            if(name === 'fName') {
                return {
                    fname : value,
                    lname : preValue.lname,
                    email : preValue.email,
                    phone : preValue.phone,
                };
            }
            else if(name === 'lName') {
                return {
                    fname : preValue.fname,
                    lname : value,
                    email : preValue.email,
                    phone : preValue.phone,
                };
            }
            else if(name === 'email') {
                return {
                    fname : preValue.fname,
                    lname : preValue.lname,
                    email : value,
                    phone : preValue.phone,
                };
            }
            else if(name === 'phone') {
                return {
                    fname : preValue.fname,
                    lname : preValue.lname,
                    email : preValue.email,
                    phone : value,
                };
            }
        });
    };

    const onSubmit = (event) => {

        event.preventDefault();
        alert('Form Submitted');
    }

    return (
        <>
            <form onSubmit={onSubmit} className="flex flex-col gap-y-5 justify-center items-center py-10 bg-gray-200">
                <h1 className="text-3xl"> Hello {fullName.fname} {fullName.lname} </h1>
                <p className="text-2xl text-indigo-500">{fullName.email}</p>
                <p className="text-2xl text-red-300">{fullName.phone}</p>
                <input className="w-2/5 border-2 border-gray-300 text-center p-3" name="fName" type="text" onChange={InputEvent} 
                    placeholder="Enter your first name" value={fullName.fname} />
                <input className="w-2/5 border-2 border-gray-300 text-center p-3" name="lName" type="text" onChange={InputEvent} 
                    placeholder="Enter your last name" value={fullName.lname} />
                <input className="w-2/5 border-2 border-gray-300 text-center p-3" name="email" type="text" onChange={InputEvent} 
                    placeholder="Enter your email address" value={fullName.email} />
                <input className="w-2/5 border-2 border-gray-300 text-center p-3" name="phone" type="text" onChange={InputEvent} 
                    placeholder="Enter your phone number" value={fullName.phone} />
                <button type="submit" className="bg-indigo-400 w-40 py-2 text-white">Submit</button>
            </form>
        </>
    );
};

export default Form;