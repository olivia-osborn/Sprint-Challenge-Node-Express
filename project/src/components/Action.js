import React from "react";

function Action(props) {
    return (
        <div>
            <li>{props.action.description}</li>
        </div>
    )
}

export default Action;