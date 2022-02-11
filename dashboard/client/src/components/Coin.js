import React from 'react'

const Coin = ({ name, image, symbol, price, volume, priceChange, marketcap }) => {
    return (
        <tr>
            <th scope="row">
                <div className="row">
                    <div className="col-md-2">
                        <img className="w-75" src={image} alt="crypto" />
                    </div>
                    <div className="col">
                        <h1>{name}</h1>
                    </div>
                </div>
            </th>
            <td>{symbol.toUpperCase()}</td>
            <td>${price}</td>
            <td>${volume.toLocaleString()}</td>
            {!priceChange ? null :
                    priceChange < 0 ? (
                        <td className="text-danger">{priceChange.toFixed(2)}%</td>
                    ) : (
                        <td className="text-success">{priceChange.toFixed(2)}%</td>
                    )}
            {!marketcap ? null : <td>Mkt Cap: ${marketcap.toLocaleString()}</td>}
        </tr>
    )
}

export default Coin
