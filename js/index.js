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
  console.log(coinMap);
// below are variables that are used for getting data from query string
    let urlParams = new URLSearchParams(window.location.search);
    let searchData = (urlParams.get(`search`));
    let searchAdd = (urlParams.get(`add`));
    let searchRemove = (urlParams.get(`remove`));

//Adding and removing from the middle main viewing area
    // HANDLE QUERYSTRING 
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
        console.log(splitAdd);
        console.log(searchAdd);
    } else if (searchAdd) {
        splitTemp = [];
        splitTemp = searchAdd.split(",");
        for (item in splitTemp) {
            if (splitTemp[item] !== "null") {
                splitAdd.push(splitTemp[item]);
            };
        };
        searchAdd = splitAdd.join();
        console.log(splitAdd);
        console.log(searchAdd);
    }

//CREATING A MESSAGE TO ALERT USER OF THEIR SELECTED SEARCH TYPE
    let searchMessage;
    switch (searchData) {
        case `rank`:
            searchMain = `https://api.coinmarketcap.com/v2/ticker/?limit=25&sort=rank`;
            searchMessage = `Displaying Top 25 Coins by Market Cap`;
            break;
        case `volume`:
            searchMain = `https://api.coinmarketcap.com/v2/ticker/?limit=25&sort=volume_24h`;
            searchMessage = `Displaying Top 25 Coins by Trade Volume - 24 Hours`;
            break;
        case `volitility`:
            searchMain = `https://api.coinmarketcap.com/v2/ticker/?limit=25&sort=percent_change_24h`;
            searchMessage = `Displaying Top 25 Coins by Volitility - 24 hours`;
            break;
        default:
            searchMain = `https://api.coinmarketcap.com/v2/ticker/?limit=100&sort=rank`;
            searchMessage = `Displaying Top 100 Coins by Market Cap`;
    };
    divMessage = document.getElementById(`searchMessage`);
    divMessage.textContent = (`${searchMessage}`);

// FETCH 
//FROM COINMARKETCAP.COM API
    fetch(`${cors}${searchMain}`)
        .then(response => response.json())
        .then( (data) => {
        console.log(data);
        let coinObjs = data.data;
        let divScroll = document.getElementById(`middleThumb`);

// PREPARE & CREATE DIVS
        let divMiddleMain = document.getElementById(`middleMain`);
        let cardMain = document.createElement(`div`);
            cardMain.className = (`cardMain`);

        let cardAdd = document.createElement(`div`);
            cardAdd.className = (`cardMain`);
            
        let divMainGuts = document.createElement(`div`);
            divMainGuts.className = (`divMainGuts`);
       
    // ITERATE THROUGH RESULTS
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
            //let releaseYear = cryptoNonFinancial[`${exchangeName}`].year;
            let logo = (coinMap[exchangeName].logo ? coinMap[exchangeName].logo : ''); console.log(logo)
            let maxSupply = coinObjs[coinObj].max_supply;
            //let description = cryptoNonFinancial[`${exchangeName}`].description;
            let circulatingSupply = coinObjs[coinObj].circulating_supply;
            let prooftype = coinMap[exchangeName].prooftype;
            let algorithm = coinMap[exchangeName].algorithm;
            //let founder= cryptoNonFinancial[`${exchangeName}`].founder;
            let buy = 'https://poloniex.com/'


            
        
            // POPULATE MAIN CARD
            if (searchAdd) {
                if (Number(searchAdd) === Number(exchangeId)) {
                    // console.log(`searchData: ${searchData}`);
                    // console.log(exchangeId);

                    cardMain.style.background = (`#${lightenColor(intToRGB(hashCode(exchangeName)),20)}`);
                    cardMain.textContent = (`${exchangeName} | ${exchangeSymbol}`);
                    divMiddleMain.appendChild(cardMain);

                    divMainGuts.innerHTML = (`
                    Rank: ${exchangeRank}</p>
                    <p>24hr %Change: ${exchangePct24}</p>
                    <p>Vol: ${exchangeVol24}</p>
                    <p>Price(USD): $${round(exchangePrice, 2)}</p>
                    <p>Mkt Cap: ${marketCap}</p>
                    <p>Max Supply: ${maxSupply}</p>
                    <p>Circulating Supply: ${circSupply}</p>
                    <p><form method="GET">
                    <input type="hidden" name="searchInput" value="">
                    <input type="hidden" name="searchSelect" value="${searchData}">
                    <input type="hidden" name="add" value="${exchangeId}">
                    <button type="submit">REMOVE</button></form></p>
                    `);
                    cardMain.appendChild(divMainGuts);
                };
            };
        };

    // FUNCTION TO ELIMINATE ADDED CARDS FROM THUMBNAILS AREA
        //*****  Consider Removal  *******************
        let difference = function(arrayOne, arrayTwo) {
            // Place your solution here
            let arrayOneSample;
            let arrayTwoSample;
            for (let i = 0; i < arrayOne.length; i++) {
                arrayOneSample = arrayOne[i];
                //console.log(arrayOneSample);
                for (j = 0; j < arrayTwo.length; j++) {
                    arrayTwoSample = arrayTwo[j];
                    //console.log(arrayTwoSample);
                    if (arrayOneSample === arrayTwoSample) {
                        //console.log(arrayOneSample);
                        arrayOne.splice(i, 1);
                        i = i-1;
                    };
                };
            };
            return arrayOne;
        };
        // ***************************
    
    //Creating the thumbnail
        for (let coinObj in difference(coinObjs, splitAdd)) {
            let exchangeName = coinObjs[coinObj].name;
            let exchangeId = coinObjs[coinObj].id;
            let exchangeSymbol = coinObjs[coinObj].symbol;
            let marketCap = coinObjs[coinObj].quotes.USD.market_cap;
            let maxSupply = coinObjs[coinObj].max_supply;
            let circSupply = coinObjs[coinObj].circulating_supply
            let releaseYear;
            let exchangeRank = coinObjs[coinObj].rank;
            let exchangePct24 = coinObjs[coinObj].quotes.USD.percent_change_24h;
            let exchangeVol24 = coinObjs[coinObj].quotes.USD.volume_24h;
            let exchangePrice = coinObjs[coinObj].quotes.USD.price;
            if (searchAdd === null) {
                let divThumb = document.createElement(`div`);
                divThumb.className = (`divThumb`);
                divThumb.textContent = (`${exchangeName} | ${exchangeSymbol}`);
                let divThumbGuts = document.createElement(`div`);
                divThumbGuts.className = (`divThumbGuts`);
                divThumbGuts.innerHTML = (`
                Rank: ${exchangeRank}</p>
                <p>24hr %Change: ${exchangePct24}</p>
                <p>Vol: </br>${exchangeVol24}</p>
                <p>Price(USD): $${round(exchangePrice, 2)}</p>
                <p><form method="GET">
                <input type="hidden" name="search" value="${searchData}">
                <input type="hidden" name="add" value="${exchangeId}">
                <button type="submit">ADD</button></form></p>
                `)
                divThumb.style.background = (`#${lightenColor(intToRGB(hashCode(exchangeName)),20)}`);
                divThumb.appendChild(divThumbGuts);
                divScroll.appendChild(divThumb);
            } else {
                let divThumb = document.createElement(`div`);
                divThumb.className = (`divThumb`);
                divThumb.textContent = (`${exchangeName} | ${exchangeSymbol}`);
                let divThumbGuts = document.createElement(`div`);
                divThumbGuts.className = (`divThumbGuts`);
                divThumbGuts.innerHTML = (`
                Rank: ${exchangeRank}</p>
                <p>24hr % change: ${exchangePct24}</p>
                <p>Vol: </br>${exchangeVol24}</p>
                <p>Price(USD): $${round(exchangePrice, 2)}</p>
                <p><form method="GET">
                <input type="hidden" name="search" value="${searchData}">
                <input type="hidden" name="add" value="${searchAdd},${exchangeId}">
                <button type="submit">ADD</button></form></p>
                `)
                divThumb.style.background = (`#${lightenColor(intToRGB(hashCode(exchangeName)),20)}`);
                divThumb.appendChild(divThumbGuts);
                divScroll.appendChild(divThumb);
            }
        };
    });
});

// python -m SimpleHTTPServer
