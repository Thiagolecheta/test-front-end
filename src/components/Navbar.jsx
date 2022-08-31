import React from 'react'




const Navbar = ({ brand }) => {
    return (
        <nav className="bg-transparent p-4 z-40 relative" >
            <div className="container mx-auto">
                <a href="/" className="text-green-500 text-uppercase text-3xl flex justify-center items-center">
                    {brand}
                </a>
            </div>
        </nav>

    );

}


export default Navbar