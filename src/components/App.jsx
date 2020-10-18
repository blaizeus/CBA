import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Cards from "./Cards";
import GreenButton from "./GreenButton"
import Result from "./Result";
import {HashRouter as Router, Switch, Route,} from 'react-router-dom';


function App() 
{   

    const [correctChoice, setChoice] = useState("");
    var shouldLoad = "";

    const [pros1, setPros1] = useState([0]);
    const [cons1, setCons1] = useState([0]);

    const [pros2, setPros2] = useState([0]);
    const [cons2, setCons2] = useState([0]);

    function loadDecision(opid, factor, rating) {

        if(opid === 1) 
        {   
            
            if(factor === "pro") 
            {
                setPros1(previousItems => {
                    return [
                        ...previousItems,
                        [rating]
                    ]
                })
            }
            else
            {
                setCons1(previousItems => {
                    return [
                        ...previousItems,
                        [rating]
                    ]
                })   
            }
            
        }
        else 
        {
            if(factor === "pro") 
            {
                setPros2(previousItems => {
                    return [
                        ...previousItems,
                        [rating]
                    ]
                })
            }
            else
            {
                setCons2(previousItems => {
                    return [
                        ...previousItems,
                        [rating]
                    ]
                })   
            }
            
        }

    }

    function decision() {

        var option1 = document.getElementsByClassName("option-input-box")[0].value
        var option2 = document.getElementsByClassName("option-input-box")[1].value

       var prosTotal1 = pros1.reduce((accumulator, currentValue) => {
            return Number(accumulator)+Number(currentValue)
            },)
        var consTotal1 = cons1.reduce((accumulator, currentValue) => {
            return Number(accumulator)+Number(currentValue)
            },)
        var prosTotal2 = pros2.reduce((accumulator, currentValue) => {
            return Number(accumulator)+Number(currentValue)
            },)
        var consTotal2 = cons2.reduce((accumulator, currentValue) => {
            return Number(accumulator)+Number(currentValue)
            },)

        const net1 = prosTotal1 - consTotal1
        const net2 = prosTotal2 - consTotal2
        

        if(net1 > net2) 
        {
            setChoice(option1 + " ✔")
        }
        else if (net2 > net1)
        {
            setChoice(option2 + " ✔")
        }
        else    
        {
            setChoice("Your options are equally viable. Flip a coin! 😉")
        }
        

            
    }



    

    function validator() {

        var optionBox1 = document.getElementsByClassName("option-input-box")[0].value
        var optionBox2 = document.getElementsByClassName("option-input-box")[1].value

        
        if(optionBox1 === "" || optionBox2 === "") 
        {
            shouldLoad = "no";
        }
        else 
        {
            shouldLoad = "yessir"
        }

        
        return shouldLoad;
            
    }




    return (
        <Router>
        <div>
            <Switch>
                <Route path="/" exact render={() => {
                    return <div>
                        <Header />
                        <Cards numberOfCards={2} loadDecision={loadDecision} />
                        <GreenButton 
                        loadDecision={loadDecision} 
                        decision={decision} 
                        validator={validator}
                        />
                        <Footer />
                    </div>
                }} />

                <Route path="/results" render={() => {
                    return <div>
                        <Result correctChoice={correctChoice}/>
                    </div>
                }} />
            </Switch>
            
        </div>
        </Router>
    );
 
}

export default App;