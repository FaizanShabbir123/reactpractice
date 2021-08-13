import React from 'react';
import reactDom from 'react-dom';
import './index.css';


function Card (props) {
    return (
        
        <>
            <div className="card flex flex-col items-center bg-white pb-5">
                    <div className="image">
                        <img src={props.imgsrc} alt="" />
                    </div>
                    <div className="content w-11/12 mx-auto flex flex-col items-center">
                        <div className="title brandon-light uppercase pt-5">{props.sname}</div>
                        <div className="desc pt-3 brandon-light">{props.title}</div>
                        <div className="stars pt-2">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                        </div>
                        <div className="add__cart w-full flex justify-between border-2 p-2 mt-5">
                            <h3 className="uppercase font-medium tracking-widest brandon-medium">Add to Cart</h3>
                            <div className="flex gap-x-2">
                            <h3 className="font-bold brandon-medium tracking-widest">$150</h3>
                            <h3 className="line-through font-semibold text-gray-400 tracking-widest brandon-medium">$120</h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card;