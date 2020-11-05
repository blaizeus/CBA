import React from "react";
import OptionCard from "./OptionCard";
import random from "../random";
import { logDOM } from "@testing-library/react";

function Cards(props) 
{

    var myOptions = []; 
    var randomNumber = Math.floor(Math.random()*random.length)

    for (let i = 0; i < props.numberOfCards; i++) 
    {
        myOptions[i] = i+1;
    }


    return (
    
        <div className="options">
            {myOptions.map((eachOption, index) => {
                return <OptionCard randomNumber={randomNumber} opid={eachOption} loadDecision={props.loadDecision}/>
            })}
        </div>
    

)}

export default Cards;