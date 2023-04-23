import React from 'react'
import '../assets/css/Progress.css';

export default function Progress({ProgressTotal,progressComplete,progressSize}) {

    var downloadProgress = (x,y)=>{
        return (x * 100) / y;
    };

    var value = downloadProgress(parseFloat(progressComplete),parseFloat(ProgressTotal));
    return (
        <>
                <div className="progress-bar-info">
                    <div className="progress-info-value" style={{ width:value?value+"%":"0%"}}></div>
                </div>
                <p className="progress-info">{progressComplete?progressComplete:0} {progressSize?progressSize:"Size"} of {ProgressTotal?ProgressTotal:0} {progressSize?progressSize:"Size"}</p>
        </>
  );
}

