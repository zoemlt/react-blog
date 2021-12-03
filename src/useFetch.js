import { useState, useEffect} from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url)
            .then(res => {
                if (!res.ok) {
                    throw Error("Could not fetch data");
                }
                return res.json();
            })
            .then(data => {
                setData(data);
                setError(null);
            })
            .catch(err => {
                setError(err.message);
            })
            .finally(() => setIsPending(false));
    }, [url]);
    // whenever the url changes, it will rerun to fetch data

    return { data, isPending, error };
}

export default useFetch;