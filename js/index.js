document.addEventListener('DOMContentLoaded', function() {   
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
    //add search ID from Coin Market Cap to coinMap
    for (let key in coinMap) {
        coinMap[key].id = nameId[coinMap[key].name]
    }
    //manually added Tron because it was being a butt
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

// check users choice of radio buttons for return quantity and keep their choice checked
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
    fetch(`${searchMain}`)
        .then(response => response.json())
        .then( (data) => {
        let divScroll = document.getElementById(`middleThumb`);

// PREPARE & CREATE DIVS       
    let cardCount = 0; 
    for (let coinObj in data.data) {
        let logo = (coinMapArray.includes(data.data[coinObj].name) ? coinMap[data.data[coinObj].name].logo :"https://opengameart.org/sites/default/files/Coin_0.png");
        let year = (cryptoNonFinancialArray.includes(data.data[coinObj].name) ? cryptoNonFinancial[`${data.data[coinObj].name}`].year : "")
        let description = (cryptoNonFinancialArray.includes(data.data[coinObj].name) ? cryptoNonFinancial[`${data.data[coinObj].name}`].description : "")
        let proofType = (coinMapArray.includes(data.data[coinObj].name) ? coinMap[data.data[coinObj].name].proofType :"");
        let algorithm = (coinMapArray.includes(data.data[coinObj].name) ? coinMap[data.data[coinObj].name].algorithm :"");
        let founder= (cryptoNonFinancialArray.includes(data.data[coinObj].name) ? cryptoNonFinancial[`${data.data[coinObj].name}`].founder : "")                    
            document.createElement(`div`).className = (`cardMain`);
            document.createElement(`div`).className = (`cardMain`);       
            document.createElement(`div`).className = (`divMainGuts`);
            
        // if the current element matches one in the querystring add array
        // make a BIG card
        if (splitAdd.includes(`${data.data[coinObj].id}`) && cardCount < 5) {
            cardCount++;

            // check URL for passed data and keep it alive with hidden fields
            let addData = (searchAdd ? `<input type="hidden" name="add" value="${searchAdd}"></input>` : ``);
            let persistData = (searchData ? `<input type="hidden" name="search" value="${searchData}"></input>` : ``);
            let limitData = (searchLimit ? `<input type="hidden" name="limit" value="${searchLimit}"></input>` : ``);
            cardMain.style.border = (`3px solid #${lightenColor(intToRGB(hashCode(coinName)),20)}`);
                cardMain.innerHTML = (`
                <form method="GET"><nobr>${coinName}<button class="remove" type="submit">X</button></nobr>
                ${limitData}
                ${persistData}
                ${addData}
                <input type="hidden" name="remove" value="${data.data[coinObj].id}"></form>
                `);
            document.createElement(`div`).innerHTML = (`
                <img src="${logo}" alt="logo" class="mainLogo" height ="100px" width ="100px" style="float:left;">
                <font style="font-size:18px;" style="text-align:top;"><b>${data.data[coinObj].symbol}</b></font>
                <br><font style="font-size:11px;">Since ${year}</font>
                <p><font style="font-size:12px;"><b>$${round(data.data[coinObj].quotes.USD.price, 6)}</b></font>
                <p><font style="font-size:10px;"><b>#${data.data[coinObj].rank} in Market Cap</b></font>
                <br><font style="font-size:10px;">($${data.data[coinObj].quotes.USD.market_cap})</font>
                <p><font style="font-size:10px;">%Change 24h <b>${data.data[coinObj].quotes.USD.percent_change_24h}</b></font>
                <br><font style="font-size:10px;">Exchange Vol 24h <b>${data.data[coinObj].quotes.USD.volume_24h}</b></font>
                <br><font style="font-size:10px;">Max Supply <b>${data.data[coinObj].max_supply}</b></font>
                <br><font style="font-size:10px;">Circulating Supply <b>${data.data[coinObj].circulating_supply}</b></font>
                <br><font style="font-size:10px;">Consensus Type <b>${proofType}</b></font>
                <br><font style="font-size:10px;">Hash Algorithm <b>${algorithm}</b></font>
                <br><font style="font-size:10px;">Founder(s) <b>${founder}</b></font>
                <p><font style="font-size:8px;"><i>${description}</i></font>
                `);
            document.createElement(`div`).style.border = (`2px solid #${lightenColor(intToRGB(hashCode(data.data[coinObj].name)),20)}`);
            document.createElement(`div`).appendChild(document.createElement(`div`));
            document.getElementById(`middleMain`).appendChild(document.createElement(`div`));
            divScroll.style.height = (`300px`);
        } else {
            // make thumbnail
            // check URL for passed data and keep it alive with hidden fields
            let addData = (searchAdd ? `<input type="hidden" name="add" value="${searchAdd},${coinId}"></input>` : `<input type="hidden" name="add" value="${coinId}"></input>`)
            let limitData = (searchLimit ? `<input type="hidden" name="limit" value="${searchLimit}"></input>` : ``)
            // this makes each thumbnail a button encapsulated in a form
            let thumbForm = document.createElement(`form`);
                thumbForm.method = (`GET`);
            let thumbButton = document.createElement(`button`);
                thumbButton.type = (`submit`);
                thumbButton.className = (`thumbButton`);
            let divThumb = document.createElement(`div`);
            divThumb.className = (`divThumb`);
            divThumb.textContent = (`${data.data[coinObj].name}`);
            let divThumbGuts = document.createElement(`div`);
            divThumbGuts.className = (`divThumbGuts`);
            divThumbGuts.style.border = (`2px solid #${lightenColor(intToRGB(hashCode(data.data[coinObj].name)),20)}`);
            divThumbGuts.innerHTML = (`
            ${data.data[coinObj].symbol}
                <br><img src="${logo}" alt="logo" height = "100px" width = "100px" align="center" style="margin:7px">
            <input type="hidden" name="search" value="${searchData}">
            ${limitData}
            ${addData}
            `)
            divThumb.style.border = (`2px solid #${lightenColor(intToRGB(hashCode(data.data[coinObj].name)),20)}`);
            divThumb.appendChild(divThumbGuts);
            thumbButton.appendChild(divThumb);
            thumbForm.appendChild(thumbButton);
            divScroll.appendChild(thumbForm);
            };
        };
    });
});

