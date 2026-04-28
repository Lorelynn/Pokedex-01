import { useContext, useState } from 'react';
import useFetch from './hooks/useFetch';
import useSearch from './hooks/useSearch'; 
import SearchBar from './SearchBar';
import { PokemonContext } from './context/PokemonContext';

function Home() {

    const {loading, error, searchFilter} = useContext(PokemonContext);

    const [selectedPokemon, setSelectedPokemon] = useState(null);

    return (
        <div className="Home">
            
            <SearchBar/>

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