import { useState, useEffect } from 'react'

function AnimeDBApp() {
    const [animeList, setAnimeList] = useState([]);
    const [topAnime, setTopAnime] = useState([]);
    const [mangaList, setMangaList] = useState([]);
    const [topManga, setTopManga] = useState([]);
    const [searchAnime, setSearchAnime] = useState("");
    const [searchManga, setSearchManga] = useState("");

    const GetTopAnime = async() => {
        const temp = await fetch(`https://api.jikan.moe/v3/top/anime/1/bypopularity`)
        .then(res => res.json());

        setTopAnime(temp.top.slice(0,5));
    }

    const GetTopManga = async() => {
        const temp = await fetch(`https://api.jikan.moe/v3/top/manga/1/bypopularity`)
        .then(res => res.json());

        setTopManga(temp.top.slice(0,5));
    }

    const HandleSearchAnime = e => {
        e.preventDefault();

        FetchAnime(searchAnime)
    }
    
    const HandleSearchManga = e => {
        e.preventDefault();

        FetchManga(searchManga)
    }

    const FetchAnime = async (query) => {
        const temp = await fetch(`https://api.jikan.moe/v3/search/anime?q=${query}&order_by=title&sort=asc&limit=9`)
        .then(res => res.json());
        
        setAnimeList(temp.results)
    }

    const FetchManga = async (query) => {
        const temp = await fetch(`https://api.jikan.moe/v3/search/manga?q=${query}&order_by=title&sort=asc&limit=9`)
        .then(res => res.json());
        
        setMangaList(temp.results)
    }

    useEffect(() => {
        GetTopAnime();
        GetTopManga();
    }, [])

    return ( 
        <><div className="cards border pt-4">
            <h1 className='content-wrap'>
                <aside>
                    <nav>
                        <h3 className='d-flex justify-content-center text-warning'>Most Popular Animes</h3>
                        {topAnime.map(anime => (
                            <div className='d-flex justify-content-center mt-md-0 text-md-left'>
                                <a class="btn btn-warning btn-outline-dark my-1"
                                    href={anime.url}
                                    target="_blank"
                                    role="button"
                                    key={anime.mal_id}
                                    rel="noreferrer">
                                    {anime.title}
                                </a>
                            </div>
                        ))}
                    </nav>
                </aside>
            </h1>
            <div className='container'>
                <br />
                <br />
                <h3 className='d-flex justify-content-center text-warning'
                    onSubmit={HandleSearchAnime}>
                    Anime Database</h3>
                <div className='row justify-content-center'>
                    <form className='search-box d-flex col-md-3' onSubmit={HandleSearchAnime}>
                        <input
                            className="form-control text-warning bg-dark btn-outline-warning"
                            type="search"
                            placeholder='Search for an anime...'
                            minlength="5"
                            required
                            value={searchAnime}
                            autoFocus
                            onChange={e => setSearchAnime(e.target.value)} />
                    </form>
                </div>
            </div>
            <br />
            <br />
            <div className='anime-liste'>
                <div className="row">
                    {animeList.map(anime => (
                        <div className="col-4">
                            <a class="text-decoration-none"
                                href={anime.url}>
                                <br />
                                <h3 className='btn-warning btn-sm d-flex justify-content-center'>{anime.title}</h3>
                                <figure className='anime-card d-flex justify-content-center'>
                                    <img src={anime.image_url} alt="Anime Image" />
                                </figure>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
            <br/>
        </div>
        <div className="cards border pt-4">
            <h1 className='content-wrap'>
                <aside>
                    <nav>
                        <h3 className='d-flex justify-content-center text-danger'>Most Popular Mangas</h3>
                        {topManga.map(manga => (
                            <div className='d-flex justify-content-center mt-md-0 text-md-left'>
                                <a class="btn btn-danger btn-outline-dark my-1 text-light"
                                    href={manga.url}
                                    target="_blank"
                                    role="button"
                                    key={manga.mal_id}
                                    rel="noreferrer">
                                    {manga.title}
                                </a>
                            </div>
                        ))}
                    </nav>
                </aside>
            </h1>
            <div className='container'>
                <br />
                <br />
                <h3 className='d-flex justify-content-center text-danger'
                    onSubmit={HandleSearchManga}>
                    Manga Database</h3>
                <div className='row justify-content-center'>
                    <form className='search-box d-flex col-md-3' onSubmit={HandleSearchManga}>
                        <input
                            className="form-control text-danger bg-dark btn-outline-danger"
                            type="search"
                            placeholder='Search for a manga...'
                            minlength="5"
                            required
                            value={searchManga}
                            onChange={e => setSearchManga(e.target.value)} />
                    </form>
                </div>
            </div>
            <br />
            <br />
            <div className='manga-liste'>
                <div className="row">
                    {mangaList.map(manga => (
                        <div className="col-4">
                            <a class="text-decoration-none"
                                href={manga.url}>
                                <br />
                                <h3 className='btn-danger btn-sm d-flex justify-content-center'>{manga.title}</h3>
                                <figure className='manga-card d-flex justify-content-center'>
                                    <img src={manga.image_url} alt="Manga Image" />
                                </figure>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
            <br />
        </div></>
    );
}

export default AnimeDBApp;