import React from "react";
import FilterButton from "../FilterButton";


const Specie = ({setPageNumber, setSpecies}) => {
    
    let species = [
        "Human",
        "Alien",
        "Humanoid",
        "Poopybutthole",
        "Mythological",
        "Unknown",
        "Animal",
        "Disease",
        "Robot",
        "Cronenberg"
      ];

    return (
        <div className="flex flex-wrap flex-row">
            {species.map((items, index) => (<FilterButton task={setSpecies} setPageNumber={setPageNumber} key={index} name="species" index={index} items={items}/>))}
        </div>
    )
};

export default Specie