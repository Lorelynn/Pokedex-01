export const getTypeColor = (typeName) => {
    switch (typeName) {
        case 'grass': return '#78C850';
        case 'fire': return '#F08030';
        case 'water': return '#6890F0';
        case 'bug': return '#A8B820'; 
        case 'normal': return '#A8A878';
        case 'poison': return '#A040A0';
        case 'electric': return '#F8D030';
        default: return 'gray'; 
    }
};