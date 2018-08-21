console.log(`coin`);
// const lightenColor = require('./colors.js');

document.addEventListener('DOMContentLoaded', function() {

    let urlParams = new URLSearchParams(window.location.search);
    let searchData = (urlParams.get(`searchSelect`));
    let searchAdd = (urlParams.get(`add`));
    let searchRemove = (urlParams.get(`remove`));
    console.log(searchData);

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

    // PREPARE DIVS FOR POPULATION
    let selectExchange = document.getElementById(`selectMain`);
    // console.log(selectExchange);

    let divMiddleMain = document.getElementById(`middleMain`);
    let cardMain = document.createElement(`div`);
        cardMain.className = (`cardMain`);

    let cardAdd = document.createElement(`div`);
        cardAdd.className = (`cardMain`);
        
    let divMainGuts = document.createElement(`div`);
        divMainGuts.className = (`divMainGuts`);
        
    // FETCH FROM COINMARKETCAP.COM API
    fetch(`https://cors-anywhere.herokuapp.com/https://api.coinmarketcap.com/v2/ticker/?limit=100&sort=rank`)
        .then(response => response.json())
        .then( (data) => {
        console.log(data);
        let coinObjs = data.data;
        let divScroll = document.getElementById(`middleThumb`);

        // ITERATE THROUGH RESULTS
        for (let coinObj in coinObjs) {
            // POPULATE SELECT OPTIONS
            let exchangeName = coinObjs[coinObj].name;
            let exchangeId = coinObjs[coinObj].id;
            let selectOption = document.createElement(`option`);
            selectOption.textContent = (`${exchangeName}`);
            selectOption.value = (`${exchangeId}`);
            selectExchange.appendChild(selectOption);
            if (exchangeId === searchData) {
                selectOption.selected = (true);
            };

            // CONTINUE DECLARING ATTRIBUTE VARIABLES FOR CARDS
            let exchangeSymbol = coinObjs[coinObj].symbol;
            let marketCap = coinObjs[coinObj].quotes.USD.market_cap;
            let maxSupply = coinObjs[coinObj].max_supply;
            let circSupply = coinObjs[coinObj].circulating_supply
            let releaseYear;
            let exchangeRank = coinObjs[coinObj].rank;
            let exchangePct24 = coinObjs[coinObj].quotes.USD.percent_change_24h;
            let exchangeVol24 = coinObjs[coinObj].quotes.USD.volume_24h;
            let exchangePrice = coinObjs[coinObj].quotes.USD.price;

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
                    <p>24hr % change: ${exchangePct24}</p>
                    <p>Vol: ${exchangeVol24}</p>
                    <p>Price(USD): $${exchangePrice}</p>
                    <p>Mkt Cap: ${marketCap}</p>
                    <p>Max Supply: ${maxSupply}</p>
                    <p>Circulating Supply: ${circSupply}</p>
                    <p><form method="GET">
                    <input type="hidden" name="searchInput" value="">
                    <input type="hidden" name="searchSelect" value="${searchData}">
                    <input type="hidden" name="add" value="${coinObjs[coinObj].exchange_id}">
                    <button type="submit">REMOVE</button></form></p>
                    `);
                    cardMain.appendChild(divMainGuts);
                };
            };
        };

        // FUNCTION TO ELIMINATE ADDED CARDS FROM THUMBNAILS
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
                <p>24hr % change: ${exchangePct24}</p>
                <p>Vol: </br>${exchangeVol24}</p>
                <p>Price(USD): $${exchangePrice}</p>
                <p><form method="GET">
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
                <p>Price(USD): $${exchangePrice}</p>
                <p><form method="GET">
                <input type="hidden" name="add" value="${searchAdd},${exchangeId}">
                <button type="submit">ADD</button></form></p>
                `)
                divThumb.style.background = (`#${lightenColor(intToRGB(hashCode(exchangeName)),20)}`);
                divThumb.appendChild(divThumbGuts);
                divScroll.appendChild(divThumb);
            }
        };

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
        function lightenColor(color, percent) {
            var num = parseInt(color,16),
                amt = Math.round(2.55 * percent),
                R = (num >> 16) + amt,
                B = (num >> 8 & 0x00FF) + amt,
                G = (num & 0x0000FF) + amt;
        
                return (0x1000000 + (R<255?R<1?0:R:255)*0x10000 + (B<255?B<1?0:B:255)*0x100 + (G<255?G<1?0:G:255)).toString(16).slice(1);
        };

    }); // COMMENT OUT FOR OFFLINE TESTING
});

// python -m SimpleHTTPServer
