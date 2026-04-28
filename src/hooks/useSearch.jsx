import {useState, useEffect} from 'react'

export default function useSearch(data) {
    const [search, setSearch] = useState("");
    const [searchFilter, setSearchFilter] = useState([]);

    useEffect(() => {
        if (!data) {
            setSearchFilter([]);
            return;
        }
        const hasil = data.filter((item) => 
            item.name.toLowerCase().includes(search.toLowerCase())
        );
        setSearchFilter(hasil);
    }, [search, data]);

    return { search, setSearch, searchFilter };
}