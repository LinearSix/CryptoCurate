document.addEventListener('DOMContentLoaded', function() {
    console.log('this is connected')
    // coinMap is a nested objectwith coin name as key and value contianing object with name, ticker, and CoinMarketCap ID 
    const coinMap = {};
    //building of coinMap using data from Crypto Compare (in a static js file)
    for (let key in cryptoCompData.Data) {
        coinMap[cryptoCompData.Data[key].CoinName] = {}
        coinMap[cryptoCompData.Data[key].CoinName].name = cryptoCompData.Data[key].CoinName
        coinMap[cryptoCompData.Data[key].CoinName].ticker = cryptoCompData.Data[key].Symbol
    }
    //using topCoins from Coin Market Cap to add search ID to coinMap
    for (let key in coinMap) {
        coinMap[key].id = nameId[coinMap[key].name]
    }
    
    

    console.log(coinMap)
    
    // const corsAnywhere = "https://cors-anywhere.herokuapp.com/"

    // fetch(`${corsAnywhere}https://www.cryptocompare.com/api/data/coinlist/`)
    // .then(response => response.json())
    // .then( (data) => {
    //     console.log(data)
    //   console.log(data.Data["BTC"])

    // })

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

    // ATTRIBUTES TO LOOK FOR
    // market cap
    // coins in circulation
    // year of origin
    // anything about the team
    // anything about the consensus method like “proof of work“
    // price
    // % price gain or price loss over given time
    // anything about philosophy or purpose of coin would be fantastic- basically what is the value prop.

    // COINAPI.IO
    // https://docs.coinapi.io/#introduction
    // X-CoinAPI-Key: 345FCF08-5D2C-432A-8FA1-7B4972E7FD53
    // FETCH URL: https://rest.coinapi.io/v1/exchanges?apikey=345FCF08-5D2C-432A-8FA1-7B4972E7FD53

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

    let urlParams = new URLSearchParams(window.location.search);
    let searchData = (urlParams.get(`searchSelect`));
    let searchAdd = (urlParams.get(`add`));
    //console.log(searchData);

    let selectExchange = document.getElementById(`selectMain`);
    // console.log(selectExchange);

    let divMiddleLeft = document.getElementById(`middleLeft`);
    let cardMain = document.createElement(`div`);
        cardMain.className = (`cardMain`);

    let cardAdd = document.createElement(`div`);
        cardAdd.className = (`cardMain`);
        
    let divMainGuts = document.createElement(`div`);
        divMainGuts.className = (`divMainGuts`);
    
    // COMMENT OUT NEXT FOUR LINES FOR OFFLINE TESTING
    fetch("https://cors-anywhere.herokuapp.com/https://rest.coinapi.io/v1/exchanges?apikey=345FCF08-5D2C-432A-8FA1-7B4972E7FD53")
    .then(response => response.json())
    .then( (data) => {
        //console.log(data);
        let coinObjs = data;//testData; 
        let divScroll = document.getElementById(`middleRight`);

        for (let coinObj in coinObjs) {
            // POPULATE SELECT OPTIONS
            // console.log(coinObjs[coinObj]);
            let exchangeName = coinObjs[coinObj].name;
            let exchangeId = coinObjs[coinObj].exchange_id;
            // console.log(exchangeName)
            let selectOption = document.createElement(`option`);
            selectOption.textContent = (`${exchangeName}`);
            selectOption.value = (`${exchangeId}`);
            selectExchange.appendChild(selectOption);
            if (exchangeId === searchData) {
                selectOption.selected = (true);
            };

            // POPULATE MAIN CARD
            if (searchData) {
                if (searchData === exchangeId) {
                    //console.log(`searchData: ${searchData}`);
                    //console.log(exchangeId);
                    
                    cardMain.style.background = (`#${intToRGB(hashCode(exchangeName))}`);
                    cardMain.textContent = (`${exchangeName}`);
                    divMiddleLeft.appendChild(cardMain);

                    divMainGuts.innerHTML = (`
                    Origin: ${coinObjs[coinObj].data_start.split("T")[1]}</p>
                    <p>Start:</br>${coinObjs[coinObj].data_trade_start}</p>
                    <p>End:</br>${coinObjs[coinObj].data_trade_end}</p>
                    <p>ID:${coinObjs[coinObj].exchange_id}</p>
                    <p>${coinObjs[coinObj].website}</p>
                    `);
                    cardMain.appendChild(divMainGuts);
                };
            };

            // POPULATE COMPARE CARDS
            if (searchAdd) {
                if (searchAdd === exchangeId) {
                    //console.log(`searchAdd: ${searchAdd}`);
                    //console.log(exchangeId);
                    
                    cardAdd.style.background = (`#${intToRGB(hashCode(exchangeName))}`);
                    cardAdd.textContent = (`${exchangeName}`);
                    divMiddleLeft.appendChild(cardAdd);

                    divMainGuts.innerHTML = (`
                    Origin: ${coinObjs[coinObj].data_start.split("T")[1]}</p>
                    <p>Start:</br>${coinObjs[coinObj].data_trade_start}</p>
                    <p>End:</br>${coinObjs[coinObj].data_trade_end}</p>
                    <p>ID:${coinObjs[coinObj].exchange_id}</p>
                    <p>${coinObjs[coinObj].website}</p>
                    `);
                    cardAdd.appendChild(divMainGuts);
                };
            };

            // POPULATE THUMBNAILS
            let divThumb = document.createElement(`div`);
            divThumb.className = (`divThumb`);
            divThumb.textContent = (`${exchangeName}`);
            let divThumbGuts = document.createElement(`div`);
            divThumbGuts.className = (`divThumbGuts`);
            divThumbGuts.innerHTML = (`
            Origin: ${coinObjs[coinObj].data_start.split("T")[1]}</p>
            <p>Start:</br>${coinObjs[coinObj].data_trade_start}</p>
            <p>End:</br>${coinObjs[coinObj].data_trade_end}</p>
            <p>${coinObjs[coinObj].website}</p>
            <p><form method="GET">
            <input type="hidden" name="searchInput" value="">
            <input type="hidden" name="searchSelect" value="${searchData}">
            <input type="hidden" name="add" value="${coinObjs[coinObj].exchange_id}">
            <button type="submit">ADD</button></form></p>
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
