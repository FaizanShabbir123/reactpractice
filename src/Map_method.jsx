import React from 'react';
import reactDom from 'react-dom';
import Card from './Cards';
import sdata from './sdata';


const Map_method = () => {

    return (
        <>
            <div className="Netflix_series bg-gray-100 md:p-14 p-5">
                <div className="inner__wrapper">
                    <div className="heading flex justify-between">
                        <div className="title md:w-fulltext-2xl text-lg futura">Map Method</div>
                        <div className="shop__all uppercase text-sm futura flex justify-end items-center gap-x-2">
                            <i className="fas fa-chevron-right"></i>
                            <p>Shop all</p>
                        </div>
                    </div>
                    <div className="Cards_wrapper pt-10">
                        {sdata.map((val, index) => {
                        // console.log(val);
                        return (
                            <Card 
                                key = {val.id}
                                imgsrc = {val.imgscr}
                                title = {val.title}
                                sname = {val.name}
                            />
                        );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Map_method;