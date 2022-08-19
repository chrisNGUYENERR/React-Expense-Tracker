import React, { useState, useEffect } from 'react';
import Select from 'react-select';

function Currency(props) {

    const [currency, setCurrency] = useState({
        currency: 'USD'
    });

    const currencyList = [
        {label: 'CHF', value: 'CHF'},
        {label: 'EUR', value: 'EUR'},
        {label: 'USD', value: 'USD'}
    ]

    const onChange = (value) => {
        setCurrency({ currency: value.value});
    }
    console.log(currency)
    
    // useEffect(async () => {
            // const url = `https://api.currencyscoop.com/v1/convert?api_key=38682a93a006c591cf64b773bb3c8f2b&from=${}&to=${currency.currency}&amount=100`
    // })

    return (
        <>
            <Select className='CurrencyList' placeholder='Choose Currency' options={currencyList} onChange={onChange} defaultValue={currencyList[2]} />
        </>
    );
}

export default Currency;