import React from "react";


const FilterButton = ({ name, index, items, task, setPageNumber, species }) => {
  return (
    <div className="flex ">
      <style jsx>
        {`
        
          input[type="radio"] {
            display: none;
          }
        `}
      </style>
      <div className="form-check ">
        <input
          onClick={() => {
            setPageNumber(1)
            task(items)
            species(items)
          }}




          className="form-check-input appearance-none rounded-lg h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none 
            transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
          type="radio"
          name={name}
          id={`${name} - ${index}`} />
        <label className=" flex flex-col flex-wrap form-check-label inline-block px-6 py-2 m-2 border-2 border-green-500 text-white-500 font-medium text-xs leading-tight 
            uppercase rounded-lg hover:bg-green-600 focus:outline-none focus:ring-0 transition duration-150 ease-in-out" for={`${name} - ${index}`}>
          {items}
        </label>
      </div>
    </div>

  )


};


export default FilterButton