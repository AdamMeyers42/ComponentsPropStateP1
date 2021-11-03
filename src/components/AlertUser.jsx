import React from "react";

function AlertUser(props) {
    return (
        <div>
            <button onClick={()=> alert("devCodeCamp!")}>Click me</button>
        </div>
    )
}

export default AlertUser;

