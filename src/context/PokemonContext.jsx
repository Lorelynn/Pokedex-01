import { createContext } from "react";

export const PokemonContext = createContext();

export function PokemonProvider({ children }) {
  const [data, loading, error] = useFetch('https://pokeapi.co/api/v2/pokemon?limit=20');
  const { search, setSearch, searchFilter } = useSearch(data);

  const nilaiSiaran = { data, loading, error, search, setSearch, searchFilter };

  return (
    <PokemonContext.Provider value={nilaiSiaran}>
      {children}
    </PokemonContext.Provider>
  );
}