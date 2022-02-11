import React, { useState, useEffect } from "react";
import axios from "axios";
import CharacterGird from "../../../components/BBCharacterGrid"
import BBSearch from "../../../components/BBSearch";

function BreakingBadApp() {
    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [query, setQuery] = useState('')

    useEffect(() => {
        const fetchItems = async () => {
            const result = await axios (`https://www.breakingbadapi.com/api/characters?name=${query}`)

            setItems(result.data)
            setIsLoading(false)
        }

        fetchItems()
    }, [query])

    return (
        
        <div className="container cards border pt-4">
            <h1 className='d-flex justify-content-center text-success'>Breaking Bad Characters Database</h1>
            <br/>
            <BBSearch getQuery={(q) => setQuery(q)}/>
            <br/>
            <div className="row">
                <CharacterGird isLoading={isLoading} items={items} />
            </div>
        </div>
    );
}

export default BreakingBadApp;