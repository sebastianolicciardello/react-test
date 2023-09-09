
import { useEffect } from "react";
import { useState } from "react";

export default function Effect() {
const [count, setCount] = useState(0);
const [json, setJson] = useState({});

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => setJson(json));
    }, [count]);

    return(
        <>
            <div className="text-red-500 font-bold">Effect</div>
            <button onClick={() => setCount(count +1 )}>Count: {count}</button>
            <pre>{JSON.stringify(json)}</pre>
        </>
    );

}