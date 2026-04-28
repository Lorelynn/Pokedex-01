import { useContext, useState } from 'react';
import useFetch from './hooks/useFetch';
import useSearch from './hooks/useSearch'; 
import SearchBar from './SearchBar';
import { PokemonContext } from './context/PokemonContext';
import { getTypeColor } from './color'
import PokemonModal from './PokemonModal'

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
                            const primaryType = item.types?.[0]?.type?.name || 'normal';
                            const cardColor = getTypeColor(primaryType);
                            return(
                                <div 
                                    className={`pokemon-list bg-${primaryType}`} 
                                    key={item.name}
                                    style={{ backgroundColor: cardColor, cursor: 'pointer' }}
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

            <PokemonModal 
                pokemon={selectedPokemon} 
                onClose={() => setSelectedPokemon(null)} 
            />

        </div>
    );
}

export default Home;