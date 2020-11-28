import React from "react";

function AnotherMessage(props){
    return(
        <div>
            <h1>The counter value is: {props.value}</h1>
        </div>
    );
}

export default AnotherMessage;