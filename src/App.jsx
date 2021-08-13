import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Hello_msg from "./Hello_msg";
import Card from "./Cards";
import sdata from './sdata';
import React_hook from "./React_hook";
import Clock from './Clock';
import Form from './Form';
import Spread_operator from './Spread_operator';


const App = () => (
    <>
        <Spread_operator />
        <div className="flex md:flex-row flex-col gap-x-5 gap-y-5 justify-around items-center">
            <Hello_msg />
            <Clock />
            <React_hook />
        </div>

        <hr />

        <Form />

        

        <div className="Netflix_series bg-gray-100 md:p-14 p-5">
            <div className="inner__wrapper">
                <div className="heading flex justify-between">
                    <div className="title md:w-fulltext-2xl text-lg futura">Netflix Series</div>
                    <div className="shop__all uppercase text-sm futura flex justify-end items-center gap-x-2">
                        <i className="fas fa-chevron-right"></i>
                        <p>Shop all</p>
                    </div>
                </div>
                <div className="Cards_wrapper pt-10">
                    <Card 
                        imgsrc= {sdata[0].imgscr}
                        title = {sdata[0].title}
                        sname = {sdata[0].name}
                    />
                    <Card 
                        imgsrc= {sdata[1].imgscr}
                        title = {sdata[1].title}
                        sname = {sdata[1].name}
                    />
                    <Card 
                        imgsrc= {sdata[2].imgscr}
                        title = {sdata[2].title}
                        sname = {sdata[2].name}
                    />
                    <Card 
                        imgsrc= {sdata[3].imgscr}
                        title = {sdata[3].title}
                        sname = {sdata[3].name}
                    />
                </div>
            </div>
        </div>
    </>
);
        


export default App;