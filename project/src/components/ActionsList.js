import React from "react";
import Action from "./Action";

function ActionsList(props) {
    return (
        <div>
            {props.actions.map(action => 
                <Action
                action={action}
                key={action.id}
                />
            )}
        </div>
    )
}

export default ActionsList;