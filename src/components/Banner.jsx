import React from "react";

const Banner = ({ }) => {
    return (
        <>
            <img src="../bg.jpg" alt="" className=" -mt-32 absolute w-full h-full z-0 bg-cover bg-center opacity-25 " />
            <div className="flex h-auto w-auto bg-blue-900 -mt-32" >

                <div className="flex flex-col lg:flex-row mx-auto container items-center m-32">
                    <div className="z-50 p-8 m-8 relative ">
                        <h1 className="text-white text-5xl font-bold mt-2">Rick and Morty</h1>
                        <p className="text-white text-base font-normal mt-3 tracking-wide leading-relaxed ">O show gira em torno das aventuras dos membros da família Smith, que consiste nos pais Jerry e Beth, seus
                            filhos Summer e Morty, e o pai de Beth,chamado Rick Sanchez, que mora com eles como hóspede. De acordo com Justin Roiland, a família
                            mora fora da cidade de Seattle, no estado norte-americano de Washington.[2] No entanto, as aventuras de Rick e Morty ocorrem em um número infinito
                            de realidades, com os personagens viajando para outros planetas e dimensões através de portais usando o veículo voador de Rick.</p>
                    </div>

                    <img src="../imgrickand.png" alt="" className=" animate-[bounce_5s_ease-in-out_infinite] w-96 w-96 z-40" />
                </div>




            </div>
        </>
    );

}


export default Banner