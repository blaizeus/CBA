import React from 'react';
import { Link } from 'react-router-dom';



function GreenButton(props) 
{   
    
    var myRoute = "./results"



    function resultsPage() 
    {  
        return myRoute;
    }



    function handleBigGreen(event) 
    {   
        var shouldLoad = props.validator()

        if(shouldLoad === "no") 
        {   
            myRoute = "/"
            alert("I cannot read your mind. Please enter two options for me to decide between!")
            event.target.blur()
        }
        else 
        {
            props.decision()
        }
    }

    return <div className="big-green">
        <Link to={resultsPage}>
        <button 
        onClick={handleBigGreen}
        type="button" 
        className="btn btn-outline-light btn-lg"
        >Decide!</button>
        </Link>
        
    </div>
}

export default GreenButton;