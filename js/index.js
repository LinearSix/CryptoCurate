document.addEventListener('DOMContentLoaded', function() {
    console.log(`we are connected`);
// Cors Anywhere!    
    let cors = `https://cors-anywhere.herokuapp.com/`
//coinMap is a nested objectwith coin name as key and value contianing object with name, ticker, and CoinMarketCap ID 
    const coinMap = {};
//build coinMap using data from Crypto Compare - in a static js file
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
    //manually added Tron because it was being b****
    coinMap.TRON= {}
    coinMap.TRON.logo = `https://cdn.freebiesupply.com/logos/large/2x/tron-logo-png-transparent.png`
    let coinMapArray = [];
    for (let coin in coinMap) {
    coinMapArray.push(coin);
    }; 
// Variables used for getting data from query string
    let urlParams = new URLSearchParams(window.location.search);
    let searchData = (urlParams.get(`search`));
    let searchLimit = (urlParams.get(`limit`));
    let searchAdd = (urlParams.get(`add`));
    let searchRemove = (urlParams.get(`remove`));

//Adding and removing from primary viewing area
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

//Alert user of selected search type
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
    //from CoinMarketCap.com API
    fetch(`${cors}${searchMain}`)
        .then(response => response.json())
        .then( (data) => {
        // console.log(data);
        let coinObjs = data.data;
        let divScroll = document.getElementById(`middleThumb`);

// PREPARE & CREATE DIVS       
    let buy = 'https://poloniex.com/';    
    for (let coinObj in coinObjs) {
        let coinName = coinObjs[coinObj].name; 
        let coinId = coinObjs[coinObj].id;
        let ticker = coinObjs[coinObj].symbol;
        let marketCap = coinObjs[coinObj].quotes.USD.market_cap;
        let circSupply = coinObjs[coinObj].circulating_supply
        let rank = coinObjs[coinObj].rank;
        let exPerc24h = coinObjs[coinObj].quotes.USD.percent_change_24h;
        let exVol24h = coinObjs[coinObj].quotes.USD.volume_24h;
        let price = coinObjs[coinObj].quotes.USD.price;
        let logo = (coinMapArray.includes(coinName) ? coinMap[coinName].logo :"https://opengameart.org/sites/default/files/Coin_0.png");
        let year = (cryptoNonFinancialArray.includes(coinName) ? `Since ${cryptoNonFinancial[coinName].year}` : "----------")
        let maxSupply = (coinObjs[coinObj].max_supply === null ? "unlimited" : coinObjs[coinObj].max_supply);
        let description = (cryptoNonFinancialArray.includes(coinName) ? cryptoNonFinancial[`${coinName}`].description : "")
        let proofType = (coinMapArray.includes(coinName) ? coinMap[coinName].proofType :"");
        let algorithm = (coinMapArray.includes(coinName) ? coinMap[coinName].algorithm :"");
        let founder= (cryptoNonFinancialArray.includes(coinName) ? cryptoNonFinancial[`${coinName}`].founder : "unknown")
                                
        let divMiddleMain = document.getElementById(`middleMain`);
        let cardMain = document.createElement(`div`);
            cardMain.className = (`cardMain`);
        let cardAdd = document.createElement(`div`);
            cardAdd.className = (`cardMain`);       
        let divMainGuts = document.createElement(`div`);
            divMainGuts.className = (`divMainGuts`);
            
        // if the current element matches one in the querystring add array
        // make a BIG card
        if (splitAdd.includes(`${coinId}`)) {
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
            cardMain.style.border = (`3px solid #${lightenColor(intToRGB(hashCode(coinName)),20)}`);
                cardMain.innerHTML = (`
                <form method="GET"><nobr>${coinName}<button class="remove" type="submit">X</button></nobr>
                ${limitData}
                ${persistData}
                ${addData}
                <input type="hidden" name="remove" value="${coinId}"></form>
                `);
            divMainGuts.innerHTML = (`
                <img src="${logo}" alt="logo" class="mainLogo" height ="100px" width ="100px" style="float:left;">
                <font style="font-size:18px;" style="text-align:top;"><b>${ticker}</b></font>
                <br><font style="font-size:11px;">${year}</font>
                <p><font style="font-size:12px;"><b>$${round(price, 6)}</b></font>
                <p><font style="font-size:10px;"><b>#${rank} in Market Cap</b></font>
                <br><font style="font-size:10px;">($${marketCap})</font>
                <p><font style="font-size:10px;">24h Change <b>${exPerc24h}%</b></font>
                <br><font style="font-size:10px;">24h Exchange Vol <b>${exVol24h}</b></font>
                <br><font style="font-size:10px;">Max Supply <b>${maxSupply}</b></font>
                <br><font style="font-size:10px;">Circulating Supply <b>${circSupply}</b></font>
                <br><font style="font-size:10px;">Consensus Type <b>${proofType}</b></font>
                <br><font style="font-size:10px;">Hash Algorithm <b>${algorithm}</b></font>
                <br><font style="font-size:10px;">Founder(s) <b>${founder}</b></font>
                <p><font style="font-size:8px;"><i>${description}</i></font>
                `);
            divMainGuts.style.border = (`2px solid #${lightenColor(intToRGB(hashCode(coinName)),20)}`);
            cardMain.appendChild(divMainGuts);
            divMiddleMain.appendChild(cardMain);
        } else {
            // make thumbnail
            let addData;
            if (searchAdd) {
                addData = `<input type="hidden" name="add" value="${searchAdd},${coinId}"></input>`;
            } else {
                addData = `<input type="hidden" name="add" value="${coinId}"></input>`;
            };
            let limitData;
            if (searchLimit) {
                limitData = `<input type="hidden" name="limit" value="${searchLimit}"></input>`;
            } else {
                limitData = ``;
            };
            // make thumb into big card aka 'thumbButton'
            let thumbForm = document.createElement(`form`);
                thumbForm.method = (`GET`);
            let thumbButton = document.createElement(`button`);
                thumbButton.type = (`submit`);
                thumbButton.className = (`thumbButton`);
            let divThumb = document.createElement(`div`);
            divThumb.className = (`divThumb`);
            divThumb.textContent = (`${coinName}`);
            let divThumbGuts = document.createElement(`div`);
            divThumbGuts.className = (`divThumbGuts`);
            divThumbGuts.style.border = (`2px solid #${lightenColor(intToRGB(hashCode(coinName)),20)}`);
            divThumbGuts.innerHTML = (`
            ${ticker}
                <br><img src="${logo}" alt="logo" height = "100px" width = "100px" align="center" style="margin:7px">
            <input type="hidden" name="search" value="${searchData}">
            ${limitData}
            ${addData}
            `)
            divThumb.style.border = (`2px solid #${lightenColor(intToRGB(hashCode(coinName)),20)}`);
            divThumb.appendChild(divThumbGuts);
            thumbButton.appendChild(divThumb);
            thumbForm.appendChild(thumbButton);
            divScroll.appendChild(thumbForm);
            };
        };
    });
});

