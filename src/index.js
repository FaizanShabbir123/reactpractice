import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App";
import Map_method from "./Map_method";
import SlotM from "./Slot_machine";


ReactDOM.render(
  <>
    <App />
    <Map_method />
    <div className="Machine md:w-2/5 w-11/12 mx-auto flex flex-col gap-y-5 justify-center items-center p-5 border-2 border-black my-10">
      <h1 className="text-center text-3xl pt-5"> 🎰 Welcome to <span className="font-bold">Slot Machine Game</span> 🎰 </h1>
      <h3 className="border-b-2 border-gray-300">
        <SlotM x="🙂" y="🙂" z="🙂" />
      </h3>
      <h3 className="border-b-2 border-gray-300">
        <SlotM x="🍓" y="🍎" z="🙂" />
      </h3>
      <h3 className="border-b-2 border-gray-300">
        <SlotM x="👟" y="👟" z="👟" />
      </h3>
      
    </div>
    
  </>,
  document.getElementById('root')
);