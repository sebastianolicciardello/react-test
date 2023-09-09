import { useEffect, useState } from "react";

export const useFetch = (url) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch(url)
        .then(res=>res.json())
        .then(json=> {
            setItems(json);
        })
        .catch(error => {
          console.error('Errore durante la richiesta API:', error);
        });
}, []);

return [items];

}