import { useState, useEffect } from 'react';
import { getTypeColor } from '../color'; 
import useEvolution from './useEvolution';

export default function usePokemonModal(pokemon) {
    const [activeTab, setActiveTab] = useState('About');
    const evolutions = useEvolution(pokemon);

    useEffect(() => {
        if (pokemon) setActiveTab('About');
    }, [pokemon]);

    if (!pokemon) return { isOpen: false };

    const primaryType = pokemon.types?.[0]?.type?.name || 'normal';
    const themeColor = getTypeColor(primaryType);
    
    const formatId = (id) => `#${String(id).padStart(3, '0')}`;
    const imageUrl = pokemon.sprites?.other?.['official-artwork']?.front_default || pokemon.sprites?.front_default;

    return {
        isOpen: true,
        activeTab, 
        setActiveTab, 
        evolutions, 
        themeColor, 
        formatId, 
        imageUrl
    };
}