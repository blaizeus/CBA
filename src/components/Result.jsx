import React from "react";


function Result(props) 
{   
    
    return <div className="result">

        <p>The correct choice is:</p>
        <h1>{props.correctChoice}Pizza</h1>
        <p>Enjoy your day, knowing that you've made the right decision!</p>
        <hr className="my-4"/>    
        <a className="btn-custom" href="/CBA">Return Home</a>
        
        
    </div>


    



}

export default Result;