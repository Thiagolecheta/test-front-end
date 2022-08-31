import React from "react";

const Search = ({ setSearch }) =>{
    let searchBtn = (e) => {
        e.preventDefault();
      };

    return (
    <form className="container flex justify-center items-center mx-auto w-full pt-8 mt-4 mb-2 sm:p-4">
        <input 
        onChange={(e) => {
            setSearch(e.target.value);
          }}
        type="text" placeholder="Pesquise pelo nome" className=" w-full p-3 rounded-l-md"/>
        <button onClick={searchBtn} className=" bg-green-600 text-white p-3 w-64 rounded-r-md hover:bg-green-400 hover:border-2 hover:border-green-600">Pesquisar</button>
    </form>
    );
};

export default Search;