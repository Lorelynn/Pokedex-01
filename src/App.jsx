import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'

import Navbar from './layout/Navbar'
import Home from './Home'
import { PokemonContext } from './context/PokemonContext';

import useFetch from './hooks/useFetch'
import useSearch from './hooks/useSearch'

function App() {
  const [data, loading, error] = useFetch('https://pokeapi.co/api/v2/pokemon?limit=20');
  const { search, setSearch, searchFilter } = useSearch(data);
  
  const allData = { data, loading, error, search, setSearch, searchFilter };

  return (
    <>
      <PokemonContext.Provider value={allData}>
        <BrowserRouter>
          <Navbar/>

          <Routes>

            <Route 
              path='/'
              element={<Home />}

            ></Route>

          </Routes>
        </BrowserRouter>
      </PokemonContext.Provider>

    </>
  )
}

export default App
