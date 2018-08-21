console.log(`coin`);

document.addEventListener('DOMContentLoaded', function() {
    
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
    console.log(searchData);

    let selectExchange = document.getElementById(`selectMain`);
    // console.log(selectExchange);

    let divMiddleLeft = document.getElementById(`middleLeft`);
    let cardMain = document.createElement(`div`);
        cardMain.className = (`cardMain`);

    let cardAdd = document.createElement(`div`);
        cardAdd.className = (`cardMain`);
        
    let divMainGuts = document.createElement(`div`);
        divMainGuts.className = (`divMainGuts`);

    // // COINAPI.IO API
    // fetch("https://cors-anywhere.herokuapp.com/https://rest.coinapi.io/v1/exchanges?apikey=345FCF08-5D2C-432A-8FA1-7B4972E7FD53")
    // .then(response => response.json())
    // .then( (data) => {
        
    // COINMARKETCAP.COM API
    fetch(`https://cors-anywhere.herokuapp.com/https://api.coinmarketcap.com/v2/ticker/?limit=100&sort=rank`)
        .then(response => response.json())
        .then( (data) => {
        console.log(data);
        let coinObjs = data.data;
        let divScroll = document.getElementById(`middleThumb`);

        for (let coinObj in coinObjs) {
            // POPULATE SELECT OPTIONS
            // console.log(coinObjs[coinObj]);
            let exchangeName = coinObjs[coinObj].name;
            let exchangeId = coinObjs[coinObj].id;
            let exchangeSymbol = coinObjs[coinObj].symbol;
            let exchangeRank = coinObjs[coinObj].Rank;
            let exchangePct24 = coinObjs[coinObj].quotes.USD.percent_change_24h;
            let exchangeVol24 = coinObjs[coinObj].quotes.USD.volume_24h;
            let exchangePrice = coinObjs[coinObj].quotes.USD.price;
            // console.log(exchangeName)
            let selectOption = document.createElement(`option`);
            selectOption.textContent = (`${exchangeName}`);
            selectOption.value = (`${exchangeId}`);
            selectExchange.appendChild(selectOption);
            if (exchangeId === searchData) {
                selectOption.selected = (true);
            };

            // POPULATE MAIN CARD
            // if (searchData) {
            //     if (searchData === exchangeId) {
            //         console.log(`searchData: ${searchData}`);
            //         console.log(exchangeId);
                    
            //         cardMain.style.background = (`#${intToRGB(hashCode(exchangeName))}`);
            //         cardMain.textContent = (`${exchangeName}`);
            //         divMiddleLeft.appendChild(cardMain);

            //         divMainGuts.innerHTML = (`
            //         Origin: ${coinObjs[coinObj].data_start.split("T")[1]}</p>
            //         <p>Start:</br>${coinObjs[coinObj].data_trade_start}</p>
            //         <p>End:</br>${coinObjs[coinObj].data_trade_end}</p>
            //         <p>ID:${coinObjs[coinObj].exchange_id}</p>
            //         <p>${coinObjs[coinObj].website}</p>
            //         `);
            //         cardMain.appendChild(divMainGuts);
            //     };
            // };

            // // POPULATE COMPARE CARDS
            // if (searchAdd) {
            //     if (searchAdd === exchangeId) {
            //         console.log(`searchAdd: ${searchAdd}`);
            //         console.log(exchangeId);
                    
            //         cardAdd.style.background = (`#${intToRGB(hashCode(exchangeName))}`);
            //         cardAdd.textContent = (`${exchangeName}`);
            //         divMiddleLeft.appendChild(cardAdd);

            //         divMainGuts.innerHTML = (`
            //         Origin: ${coinObjs[coinObj].data_start.split("T")[1]}</p>
            //         <p>Start:</br>${coinObjs[coinObj].data_trade_start}</p>
            //         <p>End:</br>${coinObjs[coinObj].data_trade_end}</p>
            //         <p>ID:${coinObjs[coinObj].exchange_id}</p>
            //         <p>${coinObjs[coinObj].website}</p>
            //         `);
            //         cardAdd.appendChild(divMainGuts);
            //     };
            // };

            // POPULATE THUMBNAILS
            let divThumb = document.createElement(`div`);
            divThumb.className = (`divThumb`);
            divThumb.textContent = (`${exchangeName} (${exchangeSymbol})`);
            let divThumbGuts = document.createElement(`div`);
            divThumbGuts.className = (`divThumbGuts`);
            divThumbGuts.innerHTML = (`
            Rank: ${exchangeRank}</p>
            <p>24hr % change: </br>${exchangePct24}</p>
            <p>Vol: </br>${exchangeVol24}</p>
            <p>Price: ${exchangePrice}</p>
            <p><form method="GET">
            <input type="hidden" name="searchInput" value="">
            <input type="hidden" name="searchSelect" value="${searchData}">
            <input type="hidden" name="add" value="${coinObjs[coinObj].exchange_id}">
            <button type="submit">ADD</button></form></p>
            `)
            divThumb.style.background = (`#${lightenColor(intToRGB(hashCode(exchangeName)),25)}`);
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
                console.log(c);
                return "00000".substring(0, 6 - c.length) + c;
            };
            function lightenColor(color, percent) {
                var num = parseInt(color,16),
                  amt = Math.round(2.55 * percent),
                  R = (num >> 16) + amt,
                  B = (num >> 8 & 0x00FF) + amt,
                  G = (num & 0x0000FF) + amt;
          
                  return (0x1000000 + (R<255?R<1?0:R:255)*0x10000 + (B<255?B<1?0:B:255)*0x100 + (G<255?G<1?0:G:255)).toString(16).slice(1);
            };
            // function lightenColor(col,amt) {
            //     var usePound = false;
            //     if ( col[0] == "#" ) {
            //         col = col.slice(1);
            //         usePound = true;
            //     }
            
            //     var num = parseInt(col,16);
            
            //     var r = (num >> 16) + amt;
            
            //     if ( r > 255 ) r = 255;
            //     else if  (r < 0) r = 0;
            
            //     var b = ((num >> 8) & 0x00FF) + amt;
            
            //     if ( b > 255 ) b = 255;
            //     else if  (b < 0) b = 0;
            
            //     var g = (num & 0x0000FF) + amt;
            
            //     if ( g > 255 ) g = 255;
            //     else if  ( g < 0 ) g = 0;
            
            //     return (usePound?"#":"") + (g | (b << 8) | (r << 16)).toString(16);
            // };
        };
    }); // COMMENT OUT FOR OFFLINE TESTING
});

// python -m SimpleHTTPServer
