import { useState } from 'react'
import searchLogo from './assets/searchLogo.png'
import useFetch from '../../pokedex-tes/src/Fetch'

function Home() {

    const [data, loading, error] = useFetch('https://pokeapi.co/api/v2/pokemon?limit=20')

    return (
        <div>
            {data?.map((item) => {

                return(
                    <div 
                        key={item.name}
                    >
                        <p>{item.name}</p>
                        <img src={item.sprites?.front_default} alt={item.name}/>
                    </div>
                )
            })}
        </div>
    )

}

export default Home