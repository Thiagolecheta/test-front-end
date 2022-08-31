import React from "react";


const Pagination = ({ pageNumber, setPageNumber }) => {

    const prox = () => {
        setPageNumber((x) => x + 1)
    }
    const ant = () => {
        if (pageNumber === 1) return
        setPageNumber((x) => x - 1)
    }

    return (
        <div className="container mx-auto flex justify-center gap-2 p-4 pt-4">
            <button onClick={ant} className=" bg-green-500 text-white w-40 p-2 rounded">Pagina anterior</button>
            <button onClick={prox} className=" bg-green-500 text-white  w-40 p-2 rounded">Proxima pagina</button>
        </div>
    )
}


export default Pagination