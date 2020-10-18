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



    return <div className="col-md-6">
        <h1><strong>Option {props.opid}</strong></h1>
        <div className="input-group mb-3">
            <input 
            className="form-control option-input-box" 
            type="text" 
            placeholder={ph1}
            ></input>
        </div>
            

        <div className="row">
            <div className="col-sm-6">
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
                        onClick={handleClick} 
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

            <div className="col-sm-6">
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
                        <button className="btn btn-outline-secondary" onClick={handleClick}>+</button>
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

</div>


    
    
}

export default OptionCard;