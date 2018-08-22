document.addEventListener('DOMContentLoaded', function() {
    console.log(`we are connected`);
// Cors Anywhere!    
    let cors = `https://cors-anywhere.herokuapp.com/`
//coinMap is a nested objectwith coin name as key and value contianing object with name, ticker, and CoinMarketCap ID 
    const coinMap = {};
    //building of coinMap using data from Crypto Compare (in a static js file)
    for (let key in cryptoCompData.Data) {
        coinMap[cryptoCompData.Data[key].CoinName] = {}
        coinMap[cryptoCompData.Data[key].CoinName].name = cryptoCompData.Data[key].CoinName
        coinMap[cryptoCompData.Data[key].CoinName].ticker = cryptoCompData.Data[key].Symbol
        coinMap[cryptoCompData.Data[key].CoinName].logo = `https://www.cryptocompare.com${cryptoCompData.Data[key].ImageUrl}`
        coinMap[cryptoCompData.Data[key].CoinName].algorithm = cryptoCompData.Data[key].Algorithm
        coinMap[cryptoCompData.Data[key].CoinName].proofType = cryptoCompData.Data[key].ProofType
    }
    //using topCoins from Coin Market Cap to add search ID to coinMap
    for (let key in coinMap) {
        coinMap[key].id = nameId[coinMap[key].name]
    }
    //manually added Tron because it was being bi**h
    coinMap.TRON= {}
    coinMap.TRON.logo = `https://cdn.freebiesupply.com/logos/large/2x/tron-logo-png-transparent.png`
    // console.log(coinMap)
// below are variables that are used for getting data from query string
    let urlParams = new URLSearchParams(window.location.search);
    let searchData = (urlParams.get(`search`));
    let searchLimit = (urlParams.get(`limit`));
    let searchAdd = (urlParams.get(`add`));
    let searchRemove = (urlParams.get(`remove`));

//Adding and removing from the middle main viewing area
    // HANDLE QUERYSTRING 
    let limit;
    if (searchLimit) {
        switch (searchLimit) {
            case `25`:
                limit = document.getElementById(`25`);
                limit.checked = true;
                break;
            case `50`:
                limit = document.getElementById(`50`);
                limit.checked = true;
                break;
            case `100`:
                limit = document.getElementById(`100`);
                limit.checked = true;
                break;
            default:
                limit = document.getElementById(`25`);
                limit.checked = true;
        };
    };
    let splitAdd = [];
    let splitTemp;
    if (searchAdd && searchRemove) {
        splitTemp = [];
        splitTemp = searchAdd.split(",");
        for (item in splitTemp) {
            if (splitTemp[item] !== "null" && splitTemp[item] !== searchRemove) {
                splitAdd.push(splitTemp[item]);
            };
        };
        searchAdd = splitAdd.join();
    } else if (searchAdd) {
        splitTemp = [];
        splitTemp = searchAdd.split(",");
        for (item in splitTemp) {
            if (splitTemp[item] !== "null") {
                splitAdd.push(splitTemp[item]);
            };
        };
        searchAdd = splitAdd.join();
    };

//CREATING A MESSAGE TO ALERT USER OF THEIR SELECTED SEARCH TYPE
    let searchMessage;
    switch (searchData) {
        case `rank`:
            searchMain = `https://api.coinmarketcap.com/v2/ticker/?limit=${searchLimit}&sort=rank`;
            searchMessage = `Displaying Top ${searchLimit} Coins by Market Cap`;
            break;
        case `volume`:
            searchMain = `https://api.coinmarketcap.com/v2/ticker/?limit=${searchLimit}&sort=volume_24h`;
            searchMessage = `Displaying Top ${searchLimit} Coins by Trade Volume - 24 Hours`;
            break;
        case `volitility`:
            searchMain = `https://api.coinmarketcap.com/v2/ticker/?limit=${searchLimit}&sort=percent_change_24h`;
            searchMessage = `Displaying Top ${searchLimit} Coins by Volitility - 24 hours`;
            break;
        default:
            searchMain = `https://api.coinmarketcap.com/v2/ticker/?limit=25&sort=rank`;
            searchMessage = `Displaying Top 25 Coins by Market Cap`;
            limit = document.getElementById(`25`);
                limit.checked = true;
    };
    divMessage = document.getElementById(`searchMessage`);
    divMessage.textContent = (`${searchMessage}`);

// FETCH 
//FROM COINMARKETCAP.COM API
    fetch(`${cors}${searchMain}`)
        .then(response => response.json())
        .then( (data) => {
        // console.log(data);
        let coinObjs = data.data;
        let divScroll = document.getElementById(`middleThumb`);

// PREPARE & CREATE DIVS
        
       
    // ITERATE THROUGH RESULTS
        let buy = 'https://poloniex.com/';    
        for (let coinObj in coinObjs) {
            // POPULATE SELECT OPTIONS
            let exchangeName = coinObjs[coinObj].name; 
            let exchangeId = coinObjs[coinObj].id;
            let exchangeSymbol = coinObjs[coinObj].symbol;
            let marketCap = coinObjs[coinObj].quotes.USD.market_cap;
            let circSupply = coinObjs[coinObj].circulating_supply
            let exchangeRank = coinObjs[coinObj].rank;
            let exchangePct24 = coinObjs[coinObj].quotes.USD.percent_change_24h;
            let exchangeVol24 = coinObjs[coinObj].quotes.USD.volume_24h;
            let exchangePrice = coinObjs[coinObj].quotes.USD.price;
    //This is where things start getting finicky. To get full functionality back, comment out lines 115 - 123        
            let logo = (coinMap[`${exchangeName}`].logo ? `${coinMap[`${exchangeName}`].logo}` :'https://opengameart.org/sites/default/files/Coin_0.png') ; console.log(logo)
            let releaseYear = (cryptoNonFinancialArray.includes(exchangeName) ? cryptoNonFinancial[`${exchangeName}`].year : "")
            let maxSupply = coinObjs[coinObj].max_supply; 
            let description = (cryptoNonFinancialArray.includes(exchangeName) ? cryptoNonFinancial[`${exchangeName}`].description : "")
            let circulatingSupply = coinObjs[coinObj].circulating_supply; 
            let proofType = coinMap[exchangeName].proofType; 
            let algorithm = coinMap[exchangeName].algorithm;
            let founder= (cryptoNonFinancialArray.includes(exchangeName) ? cryptoNonFinancial[`${exchangeName}`].founder : "")
                    
            // console.log(algorithm);
            
            let divMiddleMain = document.getElementById(`middleMain`);
            let cardMain = document.createElement(`div`);
                cardMain.className = (`cardMain`);
            let cardAdd = document.createElement(`div`);
                cardAdd.className = (`cardMain`);
            
            let divMainGuts = document.createElement(`div`);
                divMainGuts.className = (`divMainGuts`);
            
            // if the current element matches one in the querystring add array
            // make a BIG card
            if (splitAdd.includes(`${exchangeId}`)) {
                let addData;
                let persistData;
                let limitData;
                if (searchAdd) {
                    addData = `<input type="hidden" name="add" value="${searchAdd}"></input>`;
                } else {
                    addData = ``;
                };
                if (searchData) {
                    persistData = `<input type="hidden" name="search" value="${searchData}"></input>`;
                } else {
                    persistData = ``;
                };
                if (searchLimit) {
                    limitData = `<input type="hidden" name="limit" value="${searchLimit}"></input>`;
                } else {
                    limitData = ``;
                };
                cardMain.style.border = (`3px solid #${lightenColor(intToRGB(hashCode(exchangeName)),20)}`);
                cardMain.innerHTML = (`
                <form method="GET"><nobr>${exchangeName} | ${exchangeSymbol}<button class="remove" type="submit">X</button></nobr>
                ${limitData}
                ${persistData}
                ${addData}
                <input type="hidden" name="remove" value="${exchangeId}"></form>
                `);
                divMainGuts.innerHTML = (`
                <img src="${logo}" alt="logo" class="mainLogo" height ="100px" width ="100px" align="left">
                Rank: ${exchangeRank}<br>
                
                <p>24hr %Change: ${exchangePct24}</p>
                <p>Vol: ${exchangeVol24}</p>
                <p>Price(USD): $${round(exchangePrice, 6)}</p>
                <p>Mkt Cap: ${marketCap}</p>
                <p>Max Supply: </p>
                <p>Circulating Supply: ${circSupply}</p>
                
                `);
                divMainGuts.style.border = (`2px solid #${lightenColor(intToRGB(hashCode(exchangeName)),20)}`);
                cardMain.appendChild(divMainGuts);
                divMiddleMain.appendChild(cardMain);
            } else {
                // make a thumbnail
                let addData;
                if (searchAdd) {
                    addData = `<input type="hidden" name="add" value="${searchAdd},${exchangeId}"></input>`;
                } else {
                    addData = `<input type="hidden" name="add" value="${exchangeId}"></input>`;
                };
                let limitData;
                if (searchLimit) {
                    limitData = `<input type="hidden" name="limit" value="${searchLimit}"></input>`;
                } else {
                    limitData = ``;
                };
                // make thumb a big button
                let thumbForm = document.createElement(`form`);
                    thumbForm.method = (`GET`);
                let thumbButton = document.createElement(`button`);
                    thumbButton.type = (`submit`);
                    thumbButton.className = (`thumbButton`);
                let divThumb = document.createElement(`div`);
                divThumb.className = (`divThumb`);
                divThumb.textContent = (`${exchangeName}`);
                let divThumbGuts = document.createElement(`div`);
                divThumbGuts.className = (`divThumbGuts`);
                divThumbGuts.style.border = (`2px solid #${lightenColor(intToRGB(hashCode(exchangeName)),20)}`);
                divThumbGuts.innerHTML = (`
                ${exchangeSymbol}
                    <br><img src="${logo}" alt="logo" height = "100px" width = "100px" align="center" style="margin:7px">
                <input type="hidden" name="search" value="${searchData}">
                ${limitData}
                ${addData}
                `)
                divThumb.style.border = (`2px solid #${lightenColor(intToRGB(hashCode(exchangeName)),20)}`);
                divThumb.appendChild(divThumbGuts);
                thumbButton.appendChild(divThumb);
                thumbForm.appendChild(thumbButton);
                divScroll.appendChild(thumbForm);
            };
        };
    });
});

// python -m SimpleHTTPServer
