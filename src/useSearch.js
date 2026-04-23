import { useState } from 'react';

function useSearch(data) {
    const [search, setSearch] = useState("");

    const searchFilter = data?.filter((item) => 
        item.name.toLowerCase().includes(search.toLowerCase())
    ) || [];

    return { search, setSearch, searchFilter };
}

export default useSearch;