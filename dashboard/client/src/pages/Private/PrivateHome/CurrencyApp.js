import React, {useState, useEffect} from "react";
import Axios from "axios";
import Coin from "../../../components/Coin";

function CurrencyApp() {

    const [coins, setCoins] = useState([])
    const [search, setSearch] = useState("");

    useEffect(() => {
        Axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&sparkline=false`).then(result => {
            setCoins(result.data);
            //console.log(result.data);
        }).catch(error => console.log(error));
    })

    const handleChange = e => {
        e.preventDefault();

        setSearch(e.target.value);
    }

    const filteredCoins = coins.filter(coin =>
        coin.name.toLowerCase().includes(search.toLowerCase())
        )

  return (
    <>
        <div className="CurrencyApp">
            <div className="container border text-light pt-4">
                <div className="cards">
                    <div className="coin-search">
                        <h1 className="coin-text">Search a currency</h1>
                        <form className="col-md-3">
                            <input type="text" className="form-control" name="crypto" autoComplete="off" placeholder="Type Crypto" autoFocus onChange={handleChange} />
                        </form>
                    </div>
                </div>
                <table class="table table-responsive table-dark table-fixed">
                    <thead>
                        <tr>
                            <th scope="col">Crypto</th>
                            <th scope="col">Symbol</th>
                            <th scope="col">Price</th>
                            <th scope="col">Volume</th>
                            <th scope="col">Price Change</th>
                            <th scope="col">Market Cap</th>
                        </tr>
                    </thead>
                    <tbody>
                    {filteredCoins.map(coin => {
                    return (
                    <Coin
                    key={coin.id}
                    name={coin.name}
                    image={coin.image}
                    symbol={coin.symbol}
                    marketcap={coin.market_cap}
                    price={coin.current_price}
                    priceChange={coin.price_change_percentage_24h}
                    volume={coin.total_volume} />
                        )
                    })}
                    </tbody>
                </table>
            </div>
        </div>
    </>
  );
}

export default CurrencyApp;
