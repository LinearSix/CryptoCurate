console.log(`coin`);

document.addEventListener('DOMContentLoaded', function() {

    // COIN MARKET CAP API
    // endpoint overview
    // https://pro.coinmarketcap.com/api/v1#section/Endpoint-Overview
    // include in header
    // X-CMC_PRO_API_KEY: 00ca39a2-10a7-4617-8eef-897fa860bd8b
    // Example API call
    // https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest
    // https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?sort=market_cap&start=0&limit=10&cryptocurrency_type=tokens&convert=USD,BTC

    // let headerCMC = new Headers({
    //     'Content-Type': 'text/plain',
    //     'Access-Control-Allow-Origin': '*',
    //     'X-CMC_PRO_API_KEY': '00ca39a2-10a7-4617-8eef-897fa860bd8b'
    //   });

    // fetch(`https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest`, { headers: headerCMC })
    //   .then(response => response.json())
    //   .then( (data) => {
    //     console.log(data);
    // });

    // COINAPI.IO
    // https://docs.coinapi.io/#introduction
    // X-CoinAPI-Key: 345FCF08-5D2C-432A-8FA1-7B4972E7FD53
    // Plan name: Free
    // https://rest.coinapi.io/

    let headerCoinApi = new Headers({
        'X-CoinAPI-Key': '345FCF08-5D2C-432A-8FA1-7B4972E7FD53',
        'Accept': 'application/json',
        'Accept-Encoding': 'deflate, gzip'
    });

    let selectExchange = document.getElementById(`select`);
    // console.log(selectExchange);
    
    fetch("https://cors-anywhere.herokuapp.com/https://rest.coinapi.io/v1/exchanges?apikey=345FCF08-5D2C-432A-8FA1-7B4972E7FD53")
    .then(response => response.json())
    .then( (data) => {
        // log some returned data
        // console.log(data);
        let coinObjs = data;

        for (let coinObj in coinObjs) {
            // console.log(coinObjs[coinObj]);
            let exchangeName = coinObjs[coinObj].name;
            let exchangeId = coinObjs[coinObj].exchange_id;
            // console.log(exchangeName)
            let selectOption = document.createElement(`option`);
            selectOption.textContent = (`${exchangeName}`);
            selectOption.value = (`${exchangeId}`);
            selectExchange.appendChild(selectOption);
        };
    });
});

// python -m SimpleHTTPServer
