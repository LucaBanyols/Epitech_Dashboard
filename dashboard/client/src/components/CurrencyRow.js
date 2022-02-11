import React from 'react'

export default function CurrencyRow(props) {
    const {
        currencyOptions,
        selectedCurrency,
        onChangeCurrency,
        onChangeAmount,
        amount
    } = props
    return (
        <div className="container">
            <div className="row justify-content-center text-light pt-4">
                <div className="col-4">
                    <input type="number" className="input form-control" value={amount} onChange={onChangeAmount}/>
                </div>
                <div className="col-1">
                    <select value={selectedCurrency} className="form-control" autoFocus onChange={onChangeCurrency}>
                        {currencyOptions.map(option => (
                            <option key={option} value={option}>{option} </option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    )
}