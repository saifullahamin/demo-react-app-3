import React from "react";

function Message(props){
    return(
        <div>
            <h1>The counter value is: {props.value}</h1>
        </div>
    );
}

export default Message;