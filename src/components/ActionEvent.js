import React from 'react'
import '../assets/css/ActionEvent.css';

export default function ActionEvent({action}) {
    var actionClass = action;
    let actionValue;
    if (action === "invited") {
      actionValue = "Remove";
    } else if (action === "not_invited") {
      actionValue = "Invite";
    }

    return(
        <button className={actionClass?`${actionClass} btn`:""}>
            {actionValue}
        </button>
    );
}
