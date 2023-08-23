import React, { useState } from "react";
import { Tilt } from "react-tilt";

const Card = (props) => {
  const defaultOptions = {
    reverse: true, // reverse the tilt direction
    max: 35, // max tilt rotation (degrees)
    perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000, // Speed of the enter/exit transition
    transition: true, // Set a transition on enter/exit.
    axis: null, // What axis should be disabled. Can be X or Y.
    reset: true, // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
  };

  return (
    <Tilt options={defaultOptions}>
      <div className="  p-5">
        <div className="p-3  h-72 bg-blue-400 rounded-xl text-black flex justify-center flex-col items-center flex-wrap ">
          <img width={150} height={150} src={props.image} alt="" />
          <h1 className="text-2xl">Name : {props.name}</h1>
          <h2>User name : {props.username}</h2>
          <h2>Email : {props.email}</h2>
        </div>
      </div>
    </Tilt>
  );
};

export default Card;
