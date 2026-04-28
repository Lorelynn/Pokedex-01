import { useContext } from 'react';
import searchLogo from './assets/searchLogo.png';
import { PokemonContext } from './context/PokemonContext';

function SearchBar() {

    const { search, setSearch } = useContext(PokemonContext)

    return (
        <div className='Search'>
            <img src={searchLogo} alt='search'/>
            <input  
                type='text' 
                placeholder='Search'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />  
        </div>
    );
}

export default SearchBar;