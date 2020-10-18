import React from "react";


function Result(props) 
{   
    
    return <div className="jumbotron result">
        <p className="lead">The correct choice is:</p>
        <h1 className="display-4">{props.correctChoice}</h1>
        <p className="lead">Enjoy your day, knowing that you've made the right decision!</p>
        <hr className="my-4"/>
        <button 
            type="button" 
            className="btn btn-outline-light btn-lg">
            <a className="return" href="/CBA">Return Home</a>
        </button>
        
        

    </div>


    



}

export default Result;