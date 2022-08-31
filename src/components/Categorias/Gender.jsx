import React from "react";
import FilterButton from "../FilterButton";


const Gender = ({setPageNumber, setGender}) => {
    let genders = ["female", "male", "genderless", "unknown"]

    return (
        <div className="flex flex-wrap flex-row">
            {genders.map((items, index) => (<FilterButton 
            task={setGender}
            setPageNumber={setPageNumber}
            key={index} 
            name="gender" 
            index={index} 
            items={items}/>))}
        </div>
    )
};

export default Gender