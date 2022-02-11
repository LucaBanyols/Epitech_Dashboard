import React, { useState } from "react"

function WikiApp() {
    const [search, setSearch] = useState("")
    const [results, setResults] = useState([])
    const [searchInfo, setSearchInfo] = useState({})

    const handleSearch = async e => {
        e.preventDefault();
        if (search === '') return;

        const endpoint = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${search}`

        const response = await fetch(endpoint)

        if (!response.ok) {
            throw Error(response.statusText)
        }

        const json = await response.json()

        setResults(json.query.search)
        setSearchInfo(json.query.searchinfo)
    }

    return (
        <div className="WikiApp cards border pt-4 text-light">
            <header>
            <h1 className="d-flex justify-content-center text-info"> Wiki Seeker </h1>
            <section className="search d-flex justify-content-center">
            <form className="search-box" onSubmit={handleSearch}>
                <input
                type="text"
                className="form-control"
                placeholder="Search on WikiApp"
                value={search}
                autoFocus
                onChange={e => setSearch(e.target.value)}
                />
            </form>
        </section>
            {(searchInfo.totalhits) ? <p className="d-flex justify-content-center"> Search Results: {searchInfo.totalhits} </p> : ''}
            <br/>
        </header>
        <div className="results">
            {results.map((result, i) => {
                const url = `https://en.wikipedia.org/?curid=${result.pageid}`

                return (
                    <div>
                        <div className="container cards border border-info pt-4 col-11 rounded mx-auto w-75" key={i}>
                            <h3 className="d-flex justify-content-center text-info"> {result.title} </h3>
                            <p dangerouslySetInnerHTML={{__html: result.snippet}} ></p>
                            <div className="d-flex justify-content-center">
                                <a className="btn btn-sm btn-primary btn-outline-dark" href={url} target="_blank" rel="nofollow">Read More</a>
                            </div>
                            <br/>
                        </div>
                        <br/>
                    </div>
                )
            })}
            <br/>
        </div>
    </div>
    )
}

export default WikiApp