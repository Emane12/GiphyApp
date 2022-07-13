import React, {useEffect, useState} from 'react';
import axios from 'axios';

const Giphy = () => {
    const [data, setData] = useState([])
    const [search, setSearch] = useState("")
    useEffect(() => {
        const fetchData = async () => {
            const results = await axios("https://api.giphy.com/v1/gifs/trending", {
                params: {
                    api_key: "bnia5D6xRz5oesNByLQWUMu5o9aT8wKt"
                }
            })
            console.log(results)
            setData(results.data.data)
        };
        fetchData();
    }, []);
    const renderGifs = () => {
        return data.map(m => {
            return (
                <div key={m.id} className="gif">
                    <img src={m.images.fixed_height.url}/>
                </div>
            )
        })
    }

    const handleSearch = event => {
        setSearch(event.target.value)
    }
    const handleSubmit = async event => {
        event.preventDefault();
            const results = await axios("https://api.giphy.com/v1/gifs/search", {
                params: {
                    api_key: "bnia5D6xRz5oesNByLQWUMu5o9aT8wKt",
                    q: search
                }
            })
            setData(results.data.data);
        
    }

    return (
        <div>
    <form className="form-inline">
        <input value={search} onChange={handleSearch} type="text" placeholder="search"
        className="form-control"/>
        <button onClick={handleSubmit} type="text" placeholder="search"
        className="btn btn-primary mx-1">Sumbit</button>
        
    <div className="container">{renderGifs()}</div>
    </form>
    </div> 
    );
}


export default Giphy;