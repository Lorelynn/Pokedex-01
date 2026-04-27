
import { useState, useEffect } from 'react';

function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    

    useEffect(() => {
        const fetchData = async () => {
            try {
                const responseList = await fetch(url);
                console.log("Data semua",responseList)
                if (!responseList.ok) {
                    throw new Error("Gagal ambil data dari server");
                }
                const dataList = await responseList.json(); 

                console.log("Data semua", dataList)

                const tugasKurir = dataList.results.map(async (pokemon) => {
                    const responseDetail = await fetch(pokemon.url);
                    const dataDetail = await responseDetail.json(); 
                    return dataDetail;
                });

                const detailedData = await Promise.all(tugasKurir);
                
                console.log("Data", detailedData)
                setData(detailedData);
                
            } catch {
                setError("Internet error"); 
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [url]);

  return [data, loading, error]; 
}

export default useFetch;