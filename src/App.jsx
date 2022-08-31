import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Caracters from './components/Caracters';
import Search from './components/Search';
import Pagination from './components/Paginate';
import Banner from './components/Banner';
import Filter from './components/Filter';







function App() {

  const [pageNumber, setPageNumber] = useState(1)
  const [fetchedData, updateFetchedData] = useState([])
  const [search, setSearch] = useState("")
  const [status, setStatus] = useState("")
  const [gender, setGender] = useState("")
  const [species, setSpecies] = useState("")



  let { info, results } = fetchedData;



  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
      localStorage.updateFetchedData = JSON.stringify(data)
    })();
  }, [api]);


  return (

    <>
      <Navbar brand={<img src="../logo.png" alt="Logo Rick and Morty" className="w-40 "></img>} />

      <Banner />

      <div className='bg-gradient-to-r from-sky-500 to-indigo-500 relative'>
        <div className="container mx-auto ">

          <div className='flex flex-col'>
            <Search setSearch={setSearch} />

            <Filter
              setStatus={setStatus}
              setPageNumber={setPageNumber}
              setGender={setGender}
              setSpecies={setSpecies}
            />
          </div>

          <Caracters results={results} />

        </div>
        <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber} />
        <footer className='flex flex-row justify-center bg-gray-800'>

          <p className='mt-4 p-4 text-green-600'>Desenvoldido por Thiago Lecheta</p>
        </footer>
      </div>

    </>
  );
}



export default App;
