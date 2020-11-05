import { logDOM } from "@testing-library/react";
import React, {useState} from "react";
import random from "../random";



function OptionCard(props) 
{

    if(props.opid == "1") 
    {
        var ph1 = random[0].op1ph1;
        var ph2 = random[0].op1ph2;
        var ph3 = random[0].op1ph3;
    }
    else 
    {
        var ph1 = random[0].op2ph1;
        var ph2 = random[0].op2ph2;
        var ph3 = random[0].op2ph3;
    }




    const [pro, setPro] = useState("");
    const [proList, setProList] = useState([]);

    const [con, setCon] = useState("");
    const [conList, setConList] = useState([]);




    function handleChange(event) 
    {   
        (event.target.name === "new pro text")?
        setPro(event.target.value) :  setCon(event.target.value)  
    }

    function handleClick(event)
    {   
        


        do 
        {
            var rating = prompt("How important is this out of 10?");  
            if(isNaN(rating) === true || rating=== "" || rating>10 || rating === null)  {alert("Must enter number between 1 and 10!")}
        }
        while(isNaN(rating) === true || rating=== "" || rating>10 || rating === null)


        (event.target.name === "new pro button")?

        setProList(previousItems => {
            const factor = "pro";
            setPro("")
            props.loadDecision(props.opid, factor, rating);
               return [
                    ...previousItems,
                    [pro,rating]
                ]
            }
        ) :
        setConList(previousItems => {
            const factor = "con";
            setCon("")
            props.loadDecision(props.opid, factor, rating);
            return [
                 ...previousItems,
                 [con,rating]
             ]
         }
     )

        event.target.blur()

    }

    function fixCardHeight(event) 
    {       
        var element1 = document.getElementsByClassName("half-column")[0];
        var element2 = document.getElementsByClassName("half-column")[1];
        var element3 = document.getElementsByClassName("half-column")[2];
        var element4 = document.getElementsByClassName("half-column")[3];
        var li1Length = document.getElementsByTagName("ul")[0].children.length;
        var li2Length = document.getElementsByTagName("ul")[1].children.length;
        var li3Length = document.getElementsByTagName("ul")[2].children.length;
        var li4Length = document.getElementsByTagName("ul")[3].children.length;
        var liArray = [li1Length, li2Length, li3Length, li4Length]
        var proOrCon;
        var maxLi = Math.max(...liArray)
        var specificLi;

        (event.target.name === "new pro button")?
        proOrCon = "pro" : proOrCon = "con"
        
        if(props.opid == "1") {
            if(proOrCon === "pro") {
                specificLi = 0;   
            }
            else {
                specificLi = 1;
            }
        }
        else {
            if(proOrCon === "pro") {
                specificLi = 2;
            }
            else {
                specificLi = 3;

            }
        }

        console.log("specific Li is " + specificLi);



        if(maxLi == document.getElementsByTagName("ul")[specificLi].children.length) {
            console.log("Exceeding max");
            
            if(maxLi > 0) {
                var thisElement = document.getElementsByClassName("half-column")[specificLi]
                var ogHeight = thisElement.offsetHeight;
                var liHeight = document.getElementsByClassName("rating")[0].offsetHeight;
                var newHeight = ogHeight + liHeight;
                element1.style.height = newHeight + "px";
                element2.style.height = newHeight + "px";
                element3.style.height = newHeight + "px";
                element4.style.height = newHeight + "px";
                
            }
            else {
                var thisElement = document.getElementsByClassName("half-column")[specificLi]
                var ogHeight = thisElement.offsetHeight;
                var newHeight = ogHeight + 40;
                element1.style.height = newHeight + "px";
                element2.style.height = newHeight + "px";
                element3.style.height = newHeight + "px";
                element4.style.height = newHeight + "px";
            }
        }
        
    }



    function clickBox(event) 
    {   if(props.opid == "1") 
        {
            var currentOption = document.getElementsByClassName("option-input-box")
            if(currentOption[0].value === "") 
            {
                alert("Please enter an Option for Option 1!")
                event.target.blur()
            }
        }
        else 
        {
            var currentOption = document.getElementsByClassName("option-input-box")
            if(currentOption[1].value === "") 
            {
                alert("Please enter an Option for Option 2!")
                event.target.blur()
            }
        }
    }

    


    return <div className="option-card">

        <h1><strong>Option {props.opid}</strong></h1>

        <div className="input-group mb-3">
            <input 
            className="form-control option-input-box" 
            type="text" 
            placeholder={ph1}
            ></input>
        </div>
            
        <div className="half-column">
            <h1>Pros</h1>
            <div className="input-group mb-3">
                <input 
                className="form-control"
                onClick={clickBox}
                onChange={handleChange} 
                type="text" 
                placeholder={ph2}
                value={pro}
                name="new pro text"
                ></input>
                <div className="input-group-append">
                    <button 
                    className="btn btn-outline-secondary" 
                    onClick={(event) => {
                        handleClick(event);
                        fixCardHeight(event);
                        }} 
                    name="new pro button" 
                    >+</button>
                </div>
            </div>
            <ul>
                {proList.map(eachPro => {
                    return <li>
                    <div className="list-text" >{eachPro[0]}</div>
                    <div className="rating">{eachPro[1]}</div>
                    </li>
                })}
            </ul>
        </div>

        <div className="half-column">
            <h1>Cons</h1>
            <div className="input-group mb-3">
                <input 
                className="form-control"
                onClick={clickBox}
                onChange={handleChange} 
                type="text" 
                placeholder={ph3}
                value={con}
                ></input>
                <div className="input-group-append">
                    <button 
                    className="btn btn-outline-secondary" 
                    onClick={(event) => {
                        handleClick(event);
                        fixCardHeight(event);
                        }}
                    >+</button>
                </div>
            </div>         
            <ul>
                {conList.map(eachCon => {
                    return <li>
                    <div className="list-text" >{eachCon[0]}</div>
                    <div className="rating">{eachCon[1]}</div>
                    </li>
                })}
            </ul>
        </div>

</div>

    
}

export default OptionCard;