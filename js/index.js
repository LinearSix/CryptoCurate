console.log(`coin`);

document.addEventListener('DOMContentLoaded', function() {

    // ATTRIBUTES TO LOOK FOR
    // market cap
    // coins in circulation
    // year of origin
    // anything about the team
    // anything about the consensus method like “proof of work“
    // price
    // % price gain or price loss over given time
    // anything about philosophy or purpose of coin would be fantastic- basically what is the value prop.

    // COIN MARKET CAP API
    // endpoint overview
    // https://pro.coinmarketcap.com/api/v1#section/Endpoint-Overview
    // include in header
    // X-CMC_PRO_API_KEY: 00ca39a2-10a7-4617-8eef-897fa860bd8b
    // Example API call
    // https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest
    // https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?sort=market_cap&start=0&limit=10&cryptocurrency_type=tokens&convert=USD,BTC

    // COINAPI.IO
    // https://docs.coinapi.io/#introduction
    // X-CoinAPI-Key: 345FCF08-5D2C-432A-8FA1-7B4972E7FD53
    // Plan name: Free
    // https://rest.coinapi.io/

    // data_end:"2018-08-18"
    // data_orderbook_end:"2018-08-18T15:27:54.8920000Z"
    // data_orderbook_start:"2017-12-18T21:50:58.3910192Z"
    // data_quote_end:"2018-08-18T15:27:54.8920000Z"
    // data_quote_start:"2017-12-18T21:50:58.3910192Z"
    // data_start:"2017-07-14"
    // data_symbols_count:394
    // data_trade_count:460919764
    // data_trade_end:"2018-08-18T15:27:39.8240000Z"
    // data_trade_start:"2017-07-14T04:00:00.3760000Z"
    // exchange_id:"BINANCE"
    // name:"Binance"
    // website:"https://www.binance.com/"

    // TEST OBJECT FOR OFFLINE TESTING
    const testData = [
        {"name": "BitCoin", "exchange_id": "000001"},
        {"name": "Binance", "exchange_id": "000002"},
        {"name": "GDAX", "exchange_id": "000003"},
        {"name": "Bitstamp Ltd.", "exchange_id": "000004"},
        {"name": "OKCoin CNY", "exchange_id": "000005"},
        {"name": "Bittrex", "exchange_id": "000006"},
        {"name": "POLONIEX", "exchange_id": "000007"},
        {"name": "Bitfinex", "exchange_id": "000008"},
        {"name": "Kraken", "exchange_id": "000009"},
        {"name": "Huobi Pro", "exchange_id": "000010"},
        {"name": "BitCorn", "exchange_id": "000011"},
        {"name": "Beonce", "exchange_id": "000012"},
        {"name": "GODAX", "exchange_id": "000013"},
        {"name": "Bittramp Ltd.", "exchange_id": "000014"},
        {"name": "OKCon CNY", "exchange_id": "000015"},
        {"name": "T-rex", "exchange_id": "000016"},
        {"name": "COLONIEX", "exchange_id": "000017"},
        {"name": "Bitfinger", "exchange_id": "000018"},
        {"name": "Krooked", "exchange_id": "000019"},
        {"name": "Hubby Pro", "exchange_id": "000020"},
    ]

    // I DON'T THINK THIS IS ACTUALLY DOING ANYTHING
    let headerCoinApi = new Headers({
        'X-CoinAPI-Key': '345FCF08-5D2C-432A-8FA1-7B4972E7FD53',
        'Accept': 'application/json',
        'Accept-Encoding': 'deflate, gzip'
    });

    let selectExchange = document.getElementById(`selectMain`);
    // console.log(selectExchange);
    
    // COMMENT OUT NEXT FOUR LINES FOR OFFLINE TESTING
    fetch("https://cors-anywhere.herokuapp.com/https://rest.coinapi.io/v1/exchanges?apikey=345FCF08-5D2C-432A-8FA1-7B4972E7FD53")
    .then(response => response.json())
    .then( (data) => {
        // console.log(data);
        let coinObjs = data;//testData; 
        let divScroll = document.getElementById(`middleRight`);
        let divThumbColor;

        for (let coinObj in coinObjs) {
            // POPULATE SELECT OPTIONS
            console.log(coinObjs[coinObj]);
            let exchangeName = coinObjs[coinObj].name;
            let exchangeId = coinObjs[coinObj].exchange_id;
            // console.log(exchangeName)
            let selectOption = document.createElement(`option`);
            selectOption.textContent = (`${exchangeName}`);
            selectOption.value = (`${exchangeId}`);
            selectExchange.appendChild(selectOption);

            // POPULATE THUMBNAILS
            // let startArr = coinObjs[coinObj].data_trade_start;
            // startArr.split(`T`, 17);
            // let start = startArr[0];
            // console.log(start);

            let divThumb = document.createElement(`div`);
            divThumb.className = (`divThumb`);
            divThumb.textContent = (`${exchangeName}`);
            let divThumbGuts = document.createElement(`div`);
            divThumbGuts.className = (`divThumbGuts`);
            divThumbGuts.innerHTML = (`
            Origin: ${coinObjs[coinObj].data_start.split("T")[1]}</p>
            <p>Start:</br>${coinObjs[coinObj].data_trade_start}</p>
            <p>End:</br>${coinObjs[coinObj].data_trade_end}</p>
            <p>ID:${coinObjs[coinObj].exchange_id}</p>
            <p>${coinObjs[coinObj].website}</p>
            `)
            divThumb.style.background = (`#${intToRGB(hashCode(exchangeName))}`);
            divThumb.appendChild(divThumbGuts);
            divScroll.appendChild(divThumb);
            
            // COLOR GENERATOR
            function hashCode(str) { // java String#hashCode
                let hash = 0;
                for (let i = 0; i < str.length; i++) {
                    hash = str.charCodeAt(i) + ((hash << 5) - hash);
                }
                return hash;
            } 
            function intToRGB(i){
                let c = (i & 0x00FFFFFF)
                .toString(16)
                .toUpperCase();
                
                return "00000".substring(0, 6 - c.length) + c;
            };
        };
    }); // COMMENT OUT FOR OFFLINE TESTING
});

// python -m SimpleHTTPServer
