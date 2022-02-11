import React, { useEffect, useState } from 'react'
import CurrencyRow from '../../../components/CurrencyRow'

const EXCHANGE_URL = 'http://api.exchangeratesapi.io/v1/latest?access_key=b829997a02bd659ea56a5082e758010b'

function ExchangeApp() {  
    const [currencyOptions, setCurrencyOptions] = useState([])
    const [fromCurrency, setFromCurrency] = useState()
    const [toCurrency, setToCurrency] = useState()
    const [exchangeRate, setExchangeRate] = useState()
    const [amount, setAmount] = useState(1)
    const [amountInFromCurrency, setAmountInFromCurrency] = useState(true)

    let toAmount, fromAmount
    if (amountInFromCurrency) {
        fromAmount = amount
        toAmount = amount * exchangeRate
    } else {
        toAmount = amount
        fromAmount = amount / exchangeRate
    }

    useEffect(() => {
        fetch(EXCHANGE_URL)
        .then(res => res.json())
        .then(data => {
            const firstCurrency = Object.keys(data.rates)[0]
            setCurrencyOptions([data.base, ...Object.keys(data.rates)])
            setFromCurrency(data.base)
            setToCurrency(firstCurrency)
            setExchangeRate(data.rates[firstCurrency])
        })
    }, [])

    useEffect(() => {
        if (fromCurrency != null && toCurrency != null) {
            fetch(`${EXCHANGE_URL}?base=${fromCurrency}&symbols=${toCurrency}`)
            .then(res => res.json())
            .then(data => setExchangeRate(data.rates[toCurrency]))
        }
    }, [fromCurrency, toCurrency])

    function handleFromAmountChange(e) {
        setAmount(e.target.value)
        setAmountInFromCurrency(true)
    }

    function handleToAmountChange(e) {
        setAmount(e.target.value)
        setAmountInFromCurrency(false)
    }

    return (
        <>
        <div className="g cards border text-light center">
            <h1 className='d-flex justify-content-center'>Converter</h1>
            <CurrencyRow 
                currencyOptions={currencyOptions}
                selectedCurrency={fromCurrency}
                onChangeCurrency={e => setFromCurrency(e.target.value)}
                onChangeAmount={handleFromAmountChange}
                amount={fromAmount}
            />
            <div className="d-flex justify-content-center text-light pt-4">=</div>
            <CurrencyRow 
                currencyOptions={currencyOptions}
                selectedCurrency={toCurrency}
                onChangeCurrency={e => setToCurrency(e.target.value)}
                onChangeAmount={handleToAmountChange}
                amount={toAmount}
            />
            <br/>
        </div>
        </>
    );
}

export default ExchangeApp;