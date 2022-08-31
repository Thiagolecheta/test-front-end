import React from "react";
import Gender from './Categorias/Gender'
import Specie from './Categorias/Specie'
import Status from "./Categorias/Status";


const Filter = ({ setStatus, setPageNumber, setGender, setSpecies }) => {

    let clear = () => {
        setStatus("");
        setPageNumber("");
        setSpecies("");
        setGender("");
    }

    return (
        <div className="container flex flex-col  justify-start items-start mx-auto w-full text-white sm:p-4">
            <div className="bg-green-600 text-white rounderd-lg w-full flex justify-between items-center p-2 text-base"> Filtro de Pesquisa:
                <button onClick={clear} className="bg-transparent rounded-md border-2 my-2 p-1 ">
                    Limpar Filtro
                </button>
            </div>
            <div className="flex flex-col  w-full">
                <div className="flex  border-2 border-transparent border-b-green-500 p-2 mt-2 w-full">
                    <Status setPageNumber={setPageNumber} setStatus={setStatus} />
                </div>
                <div className="flex flex-col border-2 border-transparent border-b-green-500 p-2 mt-2">
                    <Gender setPageNumber={setPageNumber} setGender={setGender} />
                </div>
                <div className="flex flex-col  border-2 border-transparent border-b-green-500 p-2 mt-2 w-full">
                    <Specie setPageNumber={setPageNumber} setSpecies={setSpecies} />
                </div>
            </div>

        </div>
    )
};

export default Filter