import React from "react";

const Caracters = ({ results = [] }) => {



    return (
        <div className="flex lg:flex-row flex-wrap	justify-around ">
            {results.map((item, index) => (
                <div key={index} className="flex-col lg:w-2/5">
                    <div className=" flex flex-col lg:flex-row m-4 lg:rounded-xl border-solid border-2 border-green-500 shadow-md shadow-slay-300">
                        <img src={item.image} alt="" className="lg:w-2/5 lg:rounded-l-xl" />
                        <div className="lg:w-3/5 bg-gray-800 p-4 rounded-r-xl ">
                            <div className="text-2xl text-green-600 mb-2 mt-4 p-2  border-l-8 border-cyan-500 font-semibold">{item.name}</div>
                            <div className="flex flex-row pl-5 space-x-2">
                                {(() => {
                                    if (item.status === "Dead") {
                                        return (
                                            <div className="text-base font-medium text-white text-center mb-1  bg-red-900 rounded">{item.status}</div>
                                        )
                                    } else if (item.status === "Alive") {
                                        return (
                                            <div className="text-base font-medium text-white mb-1 bg-green-900 rounded">{item.status}</div>
                                        )
                                    } else {
                                        return (
                                            <div className="text-base font-medium text-white mb-1  rounded">{item.status} | </div>
                                        )
                                    }
                                })()}

                                <div className="text-base font-medium text-white mb-2 pr-2">| {item.gender} | </div>
                                <div className="text-base font-medium text-white mb-2 pr-2 "> {item.species}</div>
                            </div>
                            <div className="text-base font-medium text-white mb-2  pl-5"> <p className="text-sm font-light text-gray-500 tracking-widest leading-relaxed"> Origem:</p>{item.origin.name}</div>
                            <div className="text-base font-medium text-white mb-2  pl-5"> <p className="text-sm font-light text-gray-500 tracking-widest leading-relaxed"> Localidade:</p> {item.location.name}</div>
                        </div>
                    </div>
                </div>

            ))}
        </div>
    )
}


export default Caracters