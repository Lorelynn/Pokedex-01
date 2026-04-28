import { useState, useEffect } from 'react';

export default function useEvolution(pokemon) {
    const [evolutions, setEvolutions] = useState([]);

    useEffect(() => {
        const fetchEvolutions = async () => {
            if (!pokemon) return;
            
            try {
                const speciesRes = await fetch(pokemon.species.url);
                const speciesData = await speciesRes.json();
                
                const evoRes = await fetch(speciesData.evolution_chain.url);
                const evoData = await evoRes.json();

                let evoList = [];
                let current = evoData.chain;

                while (current) {
                    const urlParts = current.species.url.split('/');
                    const id = urlParts[urlParts.length - 2];
                    
                    evoList.push({
                        name: current.species.name,
                        img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
                    });
                    current = current.evolves_to[0]; // Maju ke evolusi berikutnya
                }
                setEvolutions(evoList);
            } catch (error) {
                console.error("Gagal ambil data evolusi", error);
            }
        };

        fetchEvolutions();
    }, [pokemon]);

    return evolutions; 
}