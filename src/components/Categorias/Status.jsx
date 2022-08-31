import React from "react";
import FilterButton from "../FilterButton";


const Status = ({setStatus, setPageNumber}) => {
    
    let status = ["Alive", "Dead", "Unknown"]

    return (
        <div className="flex flex-wrap flex-row">
            {status.map((items, index) => (<FilterButton task={setStatus} setPageNumber={setPageNumber} key={index} name="status" index={index} items={items}/>))}
        </div>
    )
};

export default Status