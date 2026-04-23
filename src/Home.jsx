import { useState } from 'react';
import useFetch from './Fetch';
import useSearch from './useSearch'; 
import SearchBar from './SearchBar';

function Home() {
    const [data, loading, error] = useFetch('https://pokeapi.co/api/v2/pokemon?limit=20');
    
    const [selectedPokemon, setSelectedPokemon] = useState(null);

    const { search, setSearch, searchFilter } = useSearch(data);

    return (
        <div className="Home">
            
            <SearchBar search={search} setSearch={setSearch} />

            <div className='home-content'>
                <h1>Pokemon List</h1>

                {loading ? (
                    <p>Lagi Loading...</p>
                ) : error ? (
                    <p>Waduh: {error}</p>
                ) : (
                    <div className='list'>
                        {searchFilter?.map((item) => {
                            return(
                                <div 
                                    className="pokemon-list" 
                                    key={item.name}
                                    style={{ cursor: 'pointer' }}
                                    onClick={() => setSelectedPokemon(item)}
                                >
                                    <p>{item.name}</p>
                                    <img src={item.sprites?.front_default} alt={item.name}/>
                                </div>
                            )
                        })}
                    </div>
                )}
            </div>

        </div>
    );
}

export default Home;