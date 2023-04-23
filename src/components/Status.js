import React from "react";
import '../assets/css/Status.css';

export default function Status({status}) {
  var onlineStatus;
  if(status === "active"){
    onlineStatus = "Active";
  } else if(status === "in_active"){
    onlineStatus = "InActive";
  }else if(status === "blocked"){
    onlineStatus = "Blocked";
  }

  return (
      <>
          <div className="status">
            <span className={status}>{onlineStatus}</span>
          </div>
      </>
  )
}
