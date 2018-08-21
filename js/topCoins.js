
    //Example for object navigation
//console.log(topCoins.data[nameId.Bitcoin].quotes.USD.percent_change_24h)

const topCoins = {
    "data": {
        "1": {
            "id": 1, 
            "name": "Bitcoin", 
            "symbol": "BTC", 
            "website_slug": "bitcoin", 
            "rank": 1, 
            "circulating_supply": 17221125.0, 
            "total_supply": 17221125.0, 
            "max_supply": 21000000.0, 
            "quotes": {
                "USD": {
                    "price": 6485.14324279, 
                    "volume_24h": 3488497041.46545, 
                    "market_cap": 111681462427.0, 
                    "percent_change_1h": -0.12, 
                    "percent_change_24h": 0.67, 
                    "percent_change_7d": 3.15
                }
            }, 
            "last_updated": 1534796423
        }, 
        "1027": {
            "id": 1027, 
            "name": "Ethereum", 
            "symbol": "ETH", 
            "website_slug": "ethereum", 
            "rank": 2, 
            "circulating_supply": 101448686.0, 
            "total_supply": 101448686.0, 
            "max_supply": null, 
            "quotes": {
                "USD": {
                    "price": 287.339675578, 
                    "volume_24h": 1414173620.05216, 
                    "market_cap": 29150232550.0, 
                    "percent_change_1h": -1.05, 
                    "percent_change_24h": -4.07, 
                    "percent_change_7d": -1.14
                }
            }, 
            "last_updated": 1534796383
        }, 
        "52": {
            "id": 52, 
            "name": "XRP", 
            "symbol": "XRP", 
            "website_slug": "ripple", 
            "rank": 3, 
            "circulating_supply": 39372399467.0, 
            "total_supply": 99991874018.0, 
            "max_supply": 100000000000.0, 
            "quotes": {
                "USD": {
                    "price": 0.3413404988, 
                    "volume_24h": 293228152.694644, 
                    "market_cap": 13439394474.0, 
                    "percent_change_1h": 1.05, 
                    "percent_change_24h": -0.71, 
                    "percent_change_7d": 20.31
                }
            }, 
            "last_updated": 1534796409
        }, 
        "1831": {
            "id": 1831, 
            "name": "Bitcoin Cash", 
            "symbol": "BCH", 
            "website_slug": "bitcoin-cash", 
            "rank": 4, 
            "circulating_supply": 17303625.0, 
            "total_supply": 17303625.0, 
            "max_supply": 21000000.0, 
            "quotes": {
                "USD": {
                    "price": 543.870455367, 
                    "volume_24h": 370010412.610357, 
                    "market_cap": 9410930408.0, 
                    "percent_change_1h": -0.68, 
                    "percent_change_24h": -3.76, 
                    "percent_change_7d": 0.95
                }
            }, 
            "last_updated": 1534796376
        }, 
        "1765": {
            "id": 1765, 
            "name": "EOS", 
            "symbol": "EOS", 
            "website_slug": "eos", 
            "rank": 5, 
            "circulating_supply": 906245118.0, 
            "total_supply": 1006245120.0, 
            "max_supply": null, 
            "quotes": {
                "USD": {
                    "price": 5.0875644858, 
                    "volume_24h": 586736145.948478, 
                    "market_cap": 4610580476.0, 
                    "percent_change_1h": -0.98, 
                    "percent_change_24h": -2.8, 
                    "percent_change_7d": 8.23
                }
            }, 
            "last_updated": 1534796375
        }, 
        "512": {
            "id": 512, 
            "name": "Stellar", 
            "symbol": "XLM", 
            "website_slug": "stellar", 
            "rank": 6, 
            "circulating_supply": 18771758250.0, 
            "total_supply": 104204519656.0, 
            "max_supply": null, 
            "quotes": {
                "USD": {
                    "price": 0.222158303, 
                    "volume_24h": 54524709.6987499, 
                    "market_cap": 4170301957.0, 
                    "percent_change_1h": -0.67, 
                    "percent_change_24h": -0.77, 
                    "percent_change_7d": -1.38
                }
            }, 
            "last_updated": 1534796425
        }, 
        "2": {
            "id": 2, 
            "name": "Litecoin", 
            "symbol": "LTC", 
            "website_slug": "litecoin", 
            "rank": 7, 
            "circulating_supply": 57932223.0, 
            "total_supply": 57932223.0, 
            "max_supply": 84000000.0, 
            "quotes": {
                "USD": {
                    "price": 56.5212665568, 
                    "volume_24h": 225646430.733379, 
                    "market_cap": 3274402604.0, 
                    "percent_change_1h": -0.71, 
                    "percent_change_24h": -1.73, 
                    "percent_change_7d": -0.43
                }
            }, 
            "last_updated": 1534796404
        }, 
        "825": {
            "id": 825, 
            "name": "Tether", 
            "symbol": "USDT", 
            "website_slug": "tether", 
            "rank": 8, 
            "circulating_supply": 2722140336.0, 
            "total_supply": 3080109502.0, 
            "max_supply": null, 
            "quotes": {
                "USD": {
                    "price": 1.003603825, 
                    "volume_24h": 2502790977.86653, 
                    "market_cap": 2731950453.0, 
                    "percent_change_1h": 0.25, 
                    "percent_change_24h": 0.26, 
                    "percent_change_7d": -0.08
                }
            }, 
            "last_updated": 1534796433
        }, 
        "2010": {
            "id": 2010, 
            "name": "Cardano", 
            "symbol": "ADA", 
            "website_slug": "cardano", 
            "rank": 9, 
            "circulating_supply": 25927070538.0, 
            "total_supply": 31112483745.0, 
            "max_supply": 45000000000.0, 
            "quotes": {
                "USD": {
                    "price": 0.0984557148, 
                    "volume_24h": 51492380.39102, 
                    "market_cap": 2552668263.0, 
                    "percent_change_1h": 0.16, 
                    "percent_change_24h": -2.96, 
                    "percent_change_7d": -6.01
                }
            }, 
            "last_updated": 1534796438
        }, 
        "328": {
            "id": 328, 
            "name": "Monero", 
            "symbol": "XMR", 
            "website_slug": "monero", 
            "rank": 10, 
            "circulating_supply": 16334852.0, 
            "total_supply": 16334852.0, 
            "max_supply": null, 
            "quotes": {
                "USD": {
                    "price": 98.5557837725, 
                    "volume_24h": 20512615.6497973, 
                    "market_cap": 1609894101.0, 
                    "percent_change_1h": -1.45, 
                    "percent_change_24h": 1.57, 
                    "percent_change_7d": 9.21
                }
            }, 
            "last_updated": 1534796418
        }, 
        "1720": {
            "id": 1720, 
            "name": "IOTA", 
            "symbol": "MIOTA", 
            "website_slug": "iota", 
            "rank": 11, 
            "circulating_supply": 2779530283.0, 
            "total_supply": 2779530283.0, 
            "max_supply": 2779530283.0, 
            "quotes": {
                "USD": {
                    "price": 0.539976084, 
                    "volume_24h": 35929000.623223, 
                    "market_cap": 1500879878.0, 
                    "percent_change_1h": -0.19, 
                    "percent_change_24h": -0.7, 
                    "percent_change_7d": 12.48
                }
            }, 
            "last_updated": 1534796436
        }, 
        "1958": {
            "id": 1958, 
            "name": "TRON", 
            "symbol": "TRX", 
            "website_slug": "tron", 
            "rank": 12, 
            "circulating_supply": 65748111645.0, 
            "total_supply": 99000000000.0, 
            "max_supply": null, 
            "quotes": {
                "USD": {
                    "price": 0.0217929483, 
                    "volume_24h": 96872459.6692523, 
                    "market_cap": 1432845198.0, 
                    "percent_change_1h": -0.47, 
                    "percent_change_24h": -1.09, 
                    "percent_change_7d": 7.8
                }
            }, 
            "last_updated": 1534796378
        }, 
        "1321": {
            "id": 1321, 
            "name": "Ethereum Classic", 
            "symbol": "ETC", 
            "website_slug": "ethereum-classic", 
            "rank": 13, 
            "circulating_supply": 103931293.0, 
            "total_supply": 103931293.0, 
            "max_supply": null, 
            "quotes": {
                "USD": {
                    "price": 13.0439967157, 
                    "volume_24h": 208123286.204555, 
                    "market_cap": 1355679445.0, 
                    "percent_change_1h": -0.21, 
                    "percent_change_24h": -2.41, 
                    "percent_change_7d": 5.19
                }
            }, 
            "last_updated": 1534796433
        }, 
        "131": {
            "id": 131, 
            "name": "Dash", 
            "symbol": "DASH", 
            "website_slug": "dash", 
            "rank": 14, 
            "circulating_supply": 8268478.0, 
            "total_supply": 8268478.0, 
            "max_supply": 18900000.0, 
            "quotes": {
                "USD": {
                    "price": 148.700575101, 
                    "volume_24h": 125600323.782574, 
                    "market_cap": 1229527439.0, 
                    "percent_change_1h": -0.19, 
                    "percent_change_24h": -4.64, 
                    "percent_change_7d": -0.53
                }
            }, 
            "last_updated": 1534796410
        }, 
        "1376": {
            "id": 1376, 
            "name": "NEO", 
            "symbol": "NEO", 
            "website_slug": "neo", 
            "rank": 15, 
            "circulating_supply": 65000000.0, 
            "total_supply": 100000000.0, 
            "max_supply": 100000000.0, 
            "quotes": {
                "USD": {
                    "price": 18.2909933889, 
                    "volume_24h": 53935757.8125169, 
                    "market_cap": 1188914570.0, 
                    "percent_change_1h": -1.64, 
                    "percent_change_24h": -5.15, 
                    "percent_change_7d": 10.38
                }
            }, 
            "last_updated": 1534796431
        }, 
        "2011": {
            "id": 2011, 
            "name": "Tezos", 
            "symbol": "XTZ", 
            "website_slug": "tezos", 
            "rank": 16, 
            "circulating_supply": 607489041.0, 
            "total_supply": 763306930.0, 
            "max_supply": null, 
            "quotes": {
                "USD": {
                    "price": 1.5610863978, 
                    "volume_24h": 5917160.94066138, 
                    "market_cap": 948342879.0, 
                    "percent_change_1h": -0.38, 
                    "percent_change_24h": 13.59, 
                    "percent_change_7d": 21.4
                }
            }, 
            "last_updated": 1534796441
        }, 
        "873": {
            "id": 873, 
            "name": "NEM", 
            "symbol": "XEM", 
            "website_slug": "nem", 
            "rank": 17, 
            "circulating_supply": 8999999999.0, 
            "total_supply": 8999999999.0, 
            "max_supply": null, 
            "quotes": {
                "USD": {
                    "price": 0.1048951458, 
                    "volume_24h": 9951243.09496341, 
                    "market_cap": 944056312.0, 
                    "percent_change_1h": -0.31, 
                    "percent_change_24h": -2.0, 
                    "percent_change_7d": -2.37
                }
            }, 
            "last_updated": 1534796434
        }, 
        "1839": {
            "id": 1839, 
            "name": "Binance Coin", 
            "symbol": "BNB", 
            "website_slug": "binance-coin", 
            "rank": 18, 
            "circulating_supply": 95512523.0, 
            "total_supply": 192443301.0, 
            "max_supply": null, 
            "quotes": {
                "USD": {
                    "price": 9.8213416446, 
                    "volume_24h": 18563708.8348474, 
                    "market_cap": 938061121.0, 
                    "percent_change_1h": -0.13, 
                    "percent_change_24h": -2.13, 
                    "percent_change_7d": -7.76
                }
            }, 
            "last_updated": 1534796438
        }, 
        "3077": {
            "id": 3077, 
            "name": "VeChain", 
            "symbol": "VET", 
            "website_slug": "vechain", 
            "rank": 19, 
            "circulating_supply": 55454734800.0, 
            "total_supply": 86712634466.0, 
            "max_supply": null, 
            "quotes": {
                "USD": {
                    "price": 0.0142179079, 
                    "volume_24h": 37001335.6054424, 
                    "market_cap": 788450311.0, 
                    "percent_change_1h": 3.39, 
                    "percent_change_24h": 0.17, 
                    "percent_change_7d": 85.94
                }
            }, 
            "last_updated": 1534796393
        }, 
        "1437": {
            "id": 1437, 
            "name": "Zcash", 
            "symbol": "ZEC", 
            "website_slug": "zcash", 
            "rank": 20, 
            "circulating_supply": 4618469.0, 
            "total_supply": 4618469.0, 
            "max_supply": null, 
            "quotes": {
                "USD": {
                    "price": 135.035822985, 
                    "volume_24h": 102679365.309508, 
                    "market_cap": 623658729.0, 
                    "percent_change_1h": -2.5, 
                    "percent_change_24h": -5.67, 
                    "percent_change_7d": -8.49
                }
            }, 
            "last_updated": 1534796434
        }, 
        "1808": {
            "id": 1808, 
            "name": "OmiseGO", 
            "symbol": "OMG", 
            "website_slug": "omisego", 
            "rank": 21, 
            "circulating_supply": 140245398.0, 
            "total_supply": 140245398.0, 
            "max_supply": null, 
            "quotes": {
                "USD": {
                    "price": 3.9328169411, 
                    "volume_24h": 46742941.6424412, 
                    "market_cap": 551559478.0, 
                    "percent_change_1h": -0.75, 
                    "percent_change_24h": -4.51, 
                    "percent_change_7d": 6.41
                }
            }, 
            "last_updated": 1534796377
        }, 
        "1214": {
            "id": 1214, 
            "name": "Lisk", 
            "symbol": "LSK", 
            "website_slug": "lisk", 
            "rank": 22, 
            "circulating_supply": 109261618.0, 
            "total_supply": 124502884.0, 
            "max_supply": null, 
            "quotes": {
                "USD": {
                    "price": 3.9265192391, 
                    "volume_24h": 5601553.53903757, 
                    "market_cap": 429017847.0, 
                    "percent_change_1h": 0.22, 
                    "percent_change_24h": 2.44, 
                    "percent_change_7d": 29.41
                }
            }, 
            "last_updated": 1534796431
        }, 
        "1684": {
            "id": 1684, 
            "name": "Qtum", 
            "symbol": "QTUM", 
            "website_slug": "qtum", 
            "rank": 23, 
            "circulating_supply": 88830000.0, 
            "total_supply": 100830000.0, 
            "max_supply": null, 
            "quotes": {
                "USD": {
                    "price": 4.5136492491, 
                    "volume_24h": 135698800.821971, 
                    "market_cap": 400947463.0, 
                    "percent_change_1h": -0.55, 
                    "percent_change_24h": -1.29, 
                    "percent_change_7d": 5.44
                }
            }, 
            "last_updated": 1534796435
        }, 
        "1896": {
            "id": 1896, 
            "name": "0x", 
            "symbol": "ZRX", 
            "website_slug": "0x", 
            "rank": 24, 
            "circulating_supply": 537820636.0, 
            "total_supply": 1000000000.0, 
            "max_supply": null, 
            "quotes": {
                "USD": {
                    "price": 0.7392245065, 
                    "volume_24h": 12423657.5387336, 
                    "market_cap": 397570194.0, 
                    "percent_change_1h": 0.04, 
                    "percent_change_24h": -1.97, 
                    "percent_change_7d": -6.1
                }
            }, 
            "last_updated": 1534796437
        }, 
        "2566": {
            "id": 2566, 
            "name": "Ontology", 
            "symbol": "ONT", 
            "website_slug": "ontology", 
            "rank": 25, 
            "circulating_supply": 151292175.0, 
            "total_supply": 1000000000.0, 
            "max_supply": null, 
            "quotes": {
                "USD": {
                    "price": 2.3699184083, 
                    "volume_24h": 211039860.317626, 
                    "market_cap": 358550110.0, 
                    "percent_change_1h": -1.08, 
                    "percent_change_24h": 1.02, 
                    "percent_change_7d": 81.72
                }
            }, 
            "last_updated": 1534796390
        }, 
        "2083": {
            "id": 2083, 
            "name": "Bitcoin Gold", 
            "symbol": "BTG", 
            "website_slug": "bitcoin-gold", 
            "rank": 26, 
            "circulating_supply": 17189124.0, 
            "total_supply": 17289124.0, 
            "max_supply": 21000000.0, 
            "quotes": {
                "USD": {
                    "price": 19.4504682822, 
                    "volume_24h": 7370844.00828074, 
                    "market_cap": 334336503.0, 
                    "percent_change_1h": -0.14, 
                    "percent_change_24h": -0.66, 
                    "percent_change_7d": 4.07
                }
            }, 
            "last_updated": 1534796379
        }, 
        "1168": {
            "id": 1168, 
            "name": "Decred", 
            "symbol": "DCR", 
            "website_slug": "decred", 
            "rank": 27, 
            "circulating_supply": 8323268.0, 
            "total_supply": 8323268.0, 
            "max_supply": 21000000.0, 
            "quotes": {
                "USD": {
                    "price": 38.4309798406, 
                    "volume_24h": 1702869.48723837, 
                    "market_cap": 319871348.0, 
                    "percent_change_1h": -0.16, 
                    "percent_change_24h": -3.82, 
                    "percent_change_7d": -1.31
                }
            }, 
            "last_updated": 1534796432
        }, 
        "372": {
            "id": 372, 
            "name": "Bytecoin", 
            "symbol": "BCN", 
            "website_slug": "bytecoin-bcn", 
            "rank": 28, 
            "circulating_supply": 183890481254.0, 
            "total_supply": 183890481254.0, 
            "max_supply": 184470000000.0, 
            "quotes": {
                "USD": {
                    "price": 0.00171744, 
                    "volume_24h": 3756813.22082399, 
                    "market_cap": 315820861.0, 
                    "percent_change_1h": -0.9, 
                    "percent_change_24h": -1.11, 
                    "percent_change_7d": 2.05
                }
            }, 
            "last_updated": 1534796422
        }, 
        "1518": {
            "id": 1518, 
            "name": "Maker", 
            "symbol": "MKR", 
            "website_slug": "maker", 
            "rank": 29, 
            "circulating_supply": 668228.0, 
            "total_supply": 1000000.0, 
            "max_supply": null, 
            "quotes": {
                "USD": {
                    "price": 443.515939321, 
                    "volume_24h": 170851.920322103, 
                    "market_cap": 296369667.0, 
                    "percent_change_1h": 0.03, 
                    "percent_change_24h": -1.04, 
                    "percent_change_7d": 3.18
                }
            }, 
            "last_updated": 1534796435
        }, 
        "463": {
            "id": 463, 
            "name": "BitShares", 
            "symbol": "BTS", 
            "website_slug": "bitshares", 
            "rank": 30, 
            "circulating_supply": 2652570000.0, 
            "total_supply": 2652570000.0, 
            "max_supply": 3600570502.0, 
            "quotes": {
                "USD": {
                    "price": 0.110457766, 
                    "volume_24h": 5613121.75223601, 
                    "market_cap": 292996956.0, 
                    "percent_change_1h": -0.41, 
                    "percent_change_24h": -1.16, 
                    "percent_change_7d": -1.78
                }
            }, 
            "last_updated": 1534796422
        }, 
        "2469": {
            "id": 2469, 
            "name": "Zilliqa", 
            "symbol": "ZIL", 
            "website_slug": "zilliqa", 
            "rank": 31, 
            "circulating_supply": 7567802268.0, 
            "total_supply": 12600000000.0, 
            "max_supply": null, 
            "quotes": {
                "USD": {
                    "price": 0.0372824539, 
                    "volume_24h": 14378981.1477038, 
                    "market_cap": 282146240.0, 
                    "percent_change_1h": -0.15, 
                    "percent_change_24h": -3.04, 
                    "percent_change_7d": 21.7
                }
            }, 
            "last_updated": 1534796386
        }, 
        "74": {
            "id": 74, 
            "name": "Dogecoin", 
            "symbol": "DOGE", 
            "website_slug": "dogecoin", 
            "rank": 32, 
            "circulating_supply": 115794191553.0, 
            "total_supply": 115794191553.0, 
            "max_supply": null, 
            "quotes": {
                "USD": {
                    "price": 0.0024188169, 
                    "volume_24h": 2809891.69810316, 
                    "market_cap": 280084943.0, 
                    "percent_change_1h": -0.21, 
                    "percent_change_24h": 0.02, 
                    "percent_change_7d": 4.61
                }
            }, 
            "last_updated": 1534796407
        }, 
        "109": {
            "id": 109, 
            "name": "DigiByte", 
            "symbol": "DGB", 
            "website_slug": "digibyte", 
            "rank": 33, 
            "circulating_supply": 10685975075.0, 
            "total_supply": 10685975075.0, 
            "max_supply": 21000000000.0, 
            "quotes": {
                "USD": {
                    "price": 0.0255960508, 
                    "volume_24h": 1722126.08723823, 
                    "market_cap": 273518761.0, 
                    "percent_change_1h": -0.38, 
                    "percent_change_24h": -3.7, 
                    "percent_change_7d": 3.57
                }
            }, 
            "last_updated": 1534796410
        }, 
        "2099": {
            "id": 2099, 
            "name": "ICON", 
            "symbol": "ICX", 
            "website_slug": "icon", 
            "rank": 34, 
            "circulating_supply": 387431340.0, 
            "total_supply": 800460000.0, 
            "max_supply": null, 
            "quotes": {
                "USD": {
                    "price": 0.6664525784, 
                    "volume_24h": 13311142.6656472, 
                    "market_cap": 258204615.0, 
                    "percent_change_1h": 0.28, 
                    "percent_change_24h": 0.97, 
                    "percent_change_7d": 8.21
                }
            }, 
            "last_updated": 1534796440
        }, 
        "1700": {
            "id": 1700, 
            "name": "Aeternity", 
            "symbol": "AE", 
            "website_slug": "aeternity", 
            "rank": 35, 
            "circulating_supply": 233020472.0, 
            "total_supply": 273685830.0, 
            "max_supply": null, 
            "quotes": {
                "USD": {
                    "price": 1.0483143186, 
                    "volume_24h": 4123599.56934047, 
                    "market_cap": 244278697.0, 
                    "percent_change_1h": -2.0, 
                    "percent_change_24h": -5.2, 
                    "percent_change_7d": -0.66
                }
            }, 
            "last_updated": 1534796436
        }, 
        "1230": {
            "id": 1230, 
            "name": "Steem", 
            "symbol": "STEEM", 
            "website_slug": "steem", 
            "rank": 36, 
            "circulating_supply": 274186459.0, 
            "total_supply": 291160553.0, 
            "max_supply": null, 
            "quotes": {
                "USD": {
                    "price": 0.8818953626, 
                    "volume_24h": 1023776.98927951, 
                    "market_cap": 241803766.0, 
                    "percent_change_1h": -0.63, 
                    "percent_change_24h": -4.09, 
                    "percent_change_7d": -2.34
                }
            }, 
            "last_updated": 1534796431
        }, 
        "1567": {
            "id": 1567, 
            "name": "Nano", 
            "symbol": "NANO", 
            "website_slug": "nano", 
            "rank": 37, 
            "circulating_supply": 133248289.0, 
            "total_supply": 133248289.0, 
            "max_supply": 133248290.0, 
            "quotes": {
                "USD": {
                    "price": 1.8097538798, 
                    "volume_24h": 9900793.79393853, 
                    "market_cap": 241146608.0, 
                    "percent_change_1h": -0.13, 
                    "percent_change_24h": 7.07, 
                    "percent_change_7d": 73.57
                }
            }, 
            "last_updated": 1534796436
        }, 
        "1274": {
            "id": 1274, 
            "name": "Waves", 
            "symbol": "WAVES", 
            "website_slug": "waves", 
            "rank": 38, 
            "circulating_supply": 100000000.0, 
            "total_supply": 100000000.0, 
            "max_supply": null, 
            "quotes": {
                "USD": {
                    "price": 2.128882088, 
                    "volume_24h": 2823551.53235126, 
                    "market_cap": 212888209.0, 
                    "percent_change_1h": -0.37, 
                    "percent_change_24h": -2.0, 
                    "percent_change_7d": 4.9
                }
            }, 
            "last_updated": 1534796435
        }, 
        "1042": {
            "id": 1042, 
            "name": "Siacoin", 
            "symbol": "SC", 
            "website_slug": "siacoin", 
            "rank": 39, 
            "circulating_supply": 36376431215.0, 
            "total_supply": 36376431215.0, 
            "max_supply": null, 
            "quotes": {
                "USD": {
                    "price": 0.0057848116, 
                    "volume_24h": 2205247.81948403, 
                    "market_cap": 210430802.0, 
                    "percent_change_1h": -0.29, 
                    "percent_change_24h": -1.96, 
                    "percent_change_7d": 12.81
                }
            }, 
            "last_updated": 1534796430
        }, 
        "693": {
            "id": 693, 
            "name": "Verge", 
            "symbol": "XVG", 
            "website_slug": "verge", 
            "rank": 40, 
            "circulating_supply": 15172086051.0, 
            "total_supply": 15172086051.0, 
            "max_supply": 16555000000.0, 
            "quotes": {
                "USD": {
                    "price": 0.0137695219, 
                    "volume_24h": 2155969.82574275, 
                    "market_cap": 208912372.0, 
                    "percent_change_1h": -1.19, 
                    "percent_change_24h": -2.77, 
                    "percent_change_7d": 14.64
                }
            }, 
            "last_updated": 1534796427
        }, 
        "1697": {
            "id": 1697, 
            "name": "Basic Attention Token", 
            "symbol": "BAT", 
            "website_slug": "basic-attention-token", 
            "rank": 41, 
            "circulating_supply": 1000000000.0, 
            "total_supply": 1500000000.0, 
            "max_supply": null, 
            "quotes": {
                "USD": {
                    "price": 0.2078055413, 
                    "volume_24h": 2605973.94901618, 
                    "market_cap": 207805541.0, 
                    "percent_change_1h": -1.19, 
                    "percent_change_24h": -5.06, 
                    "percent_change_7d": 5.98
                }
            }, 
            "last_updated": 1534796437
        }, 
        "2403": {
            "id": 2403, 
            "name": "MOAC", 
            "symbol": "MOAC", 
            "website_slug": "moac", 
            "rank": 42, 
            "circulating_supply": 62463334.0, 
            "total_supply": 151205864.0, 
            "max_supply": null, 
            "quotes": {
                "USD": {
                    "price": 3.321516853, 
                    "volume_24h": 118508.617610757, 
                    "market_cap": 207473015.0, 
                    "percent_change_1h": 0.19, 
                    "percent_change_24h": -0.19, 
                    "percent_change_7d": -12.58
                }
            }, 
            "last_updated": 1534796383
        }, 
        "1104": {
            "id": 1104, 
            "name": "Augur", 
            "symbol": "REP", 
            "website_slug": "augur", 
            "rank": 43, 
            "circulating_supply": 11000000.0, 
            "total_supply": 11000000.0, 
            "max_supply": null, 
            "quotes": {
                "USD": {
                    "price": 18.4048556992, 
                    "volume_24h": 3853864.85045477, 
                    "market_cap": 202453413.0, 
                    "percent_change_1h": 0.77, 
                    "percent_change_24h": -1.27, 
                    "percent_change_7d": -6.11
                }
            }, 
            "last_updated": 1534796431
        }, 
        "1789": {
            "id": 1789, 
            "name": "Populous", 
            "symbol": "PPT", 
            "website_slug": "populous", 
            "rank": 44, 
            "circulating_supply": 37004027.0, 
            "total_supply": 53252246.0, 
            "max_supply": 53252246.0, 
            "quotes": {
                "USD": {
                    "price": 4.8618018833, 
                    "volume_24h": 4089333.0632776, 
                    "market_cap": 179906248.0, 
                    "percent_change_1h": 0.32, 
                    "percent_change_24h": -7.28, 
                    "percent_change_7d": 30.41
                }
            }, 
            "last_updated": 1534796436
        }, 
        "1866": {
            "id": 1866, 
            "name": "Bytom", 
            "symbol": "BTM", 
            "website_slug": "bytom", 
            "rank": 45, 
            "circulating_supply": 1002499275.0, 
            "total_supply": 1407000000.0, 
            "max_supply": null, 
            "quotes": {
                "USD": {
                    "price": 0.1722760309, 
                    "volume_24h": 34452278.2522792, 
                    "market_cap": 172706596.0, 
                    "percent_change_1h": -0.61, 
                    "percent_change_24h": -3.33, 
                    "percent_change_7d": 2.9
                }
            }, 
            "last_updated": 1534796439
        }, 
        "2222": {
            "id": 2222, 
            "name": "Bitcoin Diamond", 
            "symbol": "BCD", 
            "website_slug": "bitcoin-diamond", 
            "rank": 46, 
            "circulating_supply": 153756875.0, 
            "total_supply": 156756875.0, 
            "max_supply": 210000000.0, 
            "quotes": {
                "USD": {
                    "price": 1.0783460732, 
                    "volume_24h": 932052.543989814, 
                    "market_cap": 165803122.0, 
                    "percent_change_1h": 0.13, 
                    "percent_change_24h": -2.04, 
                    "percent_change_7d": -9.77
                }
            }, 
            "last_updated": 1534796382
        }, 
        "2603": {
            "id": 2603, 
            "name": "Pundi X", 
            "symbol": "NPXS", 
            "website_slug": "pundi-x", 
            "rank": 47, 
            "circulating_supply": 97188147509.0, 
            "total_supply": 280755195000.0, 
            "max_supply": null, 
            "quotes": {
                "USD": {
                    "price": 0.0016858012, 
                    "volume_24h": 2438540.72597448, 
                    "market_cap": 163839899.0, 
                    "percent_change_1h": -1.54, 
                    "percent_change_24h": -3.27, 
                    "percent_change_7d": 21.05
                }
            }, 
            "last_updated": 1534796387
        }, 
        "2021": {
            "id": 2021, 
            "name": "RChain", 
            "symbol": "RHOC", 
            "website_slug": "rchain", 
            "rank": 48, 
            "circulating_supply": 362005909.0, 
            "total_supply": 870663574.0, 
            "max_supply": 1000000000.0, 
            "quotes": {
                "USD": {
                    "price": 0.4176600148, 
                    "volume_24h": 151552.347652528, 
                    "market_cap": 151195393.0, 
                    "percent_change_1h": 0.53, 
                    "percent_change_24h": -2.59, 
                    "percent_change_7d": 1.79
                }
            }, 
            "last_updated": 1534796441
        }, 
        "1343": {
            "id": 1343, 
            "name": "Stratis", 
            "symbol": "STRAT", 
            "website_slug": "stratis", 
            "rank": 49, 
            "circulating_supply": 98981770.0, 
            "total_supply": 98981770.0, 
            "max_supply": null, 
            "quotes": {
                "USD": {
                    "price": 1.5080460194, 
                    "volume_24h": 871660.932355626, 
                    "market_cap": 149269065.0, 
                    "percent_change_1h": 0.27, 
                    "percent_change_24h": 1.46, 
                    "percent_change_7d": 3.77
                }
            }, 
            "last_updated": 1534796436
        }, 
        "1703": {
            "id": 1703, 
            "name": "Metaverse ETP", 
            "symbol": "ETP", 
            "website_slug": "metaverse", 
            "rank": 50, 
            "circulating_supply": 48636391.0, 
            "total_supply": 56171737.0, 
            "max_supply": 100000000.0, 
            "quotes": {
                "USD": {
                    "price": 2.969109191, 
                    "volume_24h": 3562318.71579036, 
                    "market_cap": 144406755.0, 
                    "percent_change_1h": 0.17, 
                    "percent_change_24h": -5.69, 
                    "percent_change_7d": 14.15
                }
            }, 
            "last_updated": 1534796440
        }, 
        "1455": {
            "id": 1455, 
            "name": "Golem", 
            "symbol": "GNT", 
            "website_slug": "golem-network-tokens", 
            "rank": 51, 
            "circulating_supply": 959242000.0, 
            "total_supply": 1000000000.0, 
            "max_supply": null, 
            "quotes": {
                "USD": {
                    "price": 0.1499888855, 
                    "volume_24h": 2110839.25842381, 
                    "market_cap": 143875638.0, 
                    "percent_change_1h": 0.24, 
                    "percent_change_24h": -2.66, 
                    "percent_change_7d": 3.87
                }
            }, 
            "last_updated": 1534796435
        }, 
        "2087": {
            "id": 2087, 
            "name": "KuCoin Shares", 
            "symbol": "KCS", 
            "website_slug": "kucoin-shares", 
            "rank": 52, 
            "circulating_supply": 90730576.0, 
            "total_supply": 180730576.0, 
            "max_supply": null, 
            "quotes": {
                "USD": {
                    "price": 1.5163095683, 
                    "volume_24h": 203964.622384783, 
                    "market_cap": 137575641.0, 
                    "percent_change_1h": -0.26, 
                    "percent_change_24h": 0.4, 
                    "percent_change_7d": 4.24
                }
            }, 
            "last_updated": 1534796439
        }, 
        "1759": {
            "id": 1759, 
            "name": "Status", 
            "symbol": "SNT", 
            "website_slug": "status", 
            "rank": 53, 
            "circulating_supply": 3470483788.0, 
            "total_supply": 6804870174.0, 
            "max_supply": null, 
            "quotes": {
                "USD": {
                    "price": 0.0387515843, 
                    "volume_24h": 6308384.68657453, 
                    "market_cap": 134486745.0, 
                    "percent_change_1h": -0.26, 
                    "percent_change_24h": -2.03, 
                    "percent_change_7d": 2.41
                }
            }, 
            "last_updated": 1534796437
        }, 
        "1903": {
            "id": 1903, 
            "name": "Hshare", 
            "symbol": "HSR", 
            "website_slug": "hshare", 
            "rank": 54, 
            "circulating_supply": 43380202.0, 
            "total_supply": 43380202.0, 
            "max_supply": 84000000.0, 
            "quotes": {
                "USD": {
                    "price": 3.089410035, 
                    "volume_24h": 19970705.1318795, 
                    "market_cap": 134019230.0, 
                    "percent_change_1h": -0.36, 
                    "percent_change_24h": -1.71, 
                    "percent_change_7d": 1.99
                }
            }, 
            "last_updated": 1534796437
        }, 
        "1521": {
            "id": 1521, 
            "name": "Komodo", 
            "symbol": "KMD", 
            "website_slug": "komodo", 
            "rank": 55, 
            "circulating_supply": 109121790.0, 
            "total_supply": 109121790.0, 
            "max_supply": null, 
            "quotes": {
                "USD": {
                    "price": 1.152627787, 
                    "volume_24h": 278172.587713746, 
                    "market_cap": 125776808.0, 
                    "percent_change_1h": -0.38, 
                    "percent_change_24h": 0.51, 
                    "percent_change_7d": 1.6
                }
            }, 
            "last_updated": 1534796435
        }, 
        "2608": {
            "id": 2608, 
            "name": "Mithril", 
            "symbol": "MITH", 
            "website_slug": "mithril", 
            "rank": 56, 
            "circulating_supply": 376761850.0, 
            "total_supply": 1000000000.0, 
            "max_supply": null, 
            "quotes": {
                "USD": {
                    "price": 0.3269788416, 
                    "volume_24h": 19988993.4161033, 
                    "market_cap": 123193153.0, 
                    "percent_change_1h": -0.48, 
                    "percent_change_24h": -3.2, 
                    "percent_change_7d": -8.26
                }
            }, 
            "last_updated": 1534796390
        }, 
        "2405": {
            "id": 2405, 
            "name": "IOST", 
            "symbol": "IOST", 
            "website_slug": "iostoken", 
            "rank": 57, 
            "circulating_supply": 8400000000.0, 
            "total_supply": 21000000000.0, 
            "max_supply": null, 
            "quotes": {
                "USD": {
                    "price": 0.0143008801, 
                    "volume_24h": 8921302.85660783, 
                    "market_cap": 120127393.0, 
                    "percent_change_1h": -0.45, 
                    "percent_change_24h": -3.22, 
                    "percent_change_7d": 11.35
                }
            }, 
            "last_updated": 1534796386
        }, 
        "1876": {
            "id": 1876, 
            "name": "Dentacoin", 
            "symbol": "DCN", 
            "website_slug": "dentacoin", 
            "rank": 58, 
            "circulating_supply": 325226613094.0, 
            "total_supply": 1963173416169.0, 
            "max_supply": 8000000000000.0, 
            "quotes": {
                "USD": {
                    "price": 0.0003673636, 
                    "volume_24h": 83774.8672703858, 
                    "market_cap": 119476432.0, 
                    "percent_change_1h": 0.12, 
                    "percent_change_24h": -0.56, 
                    "percent_change_7d": 2.62
                }
            }, 
            "last_updated": 1534796439
        }, 
        "1229": {
            "id": 1229, 
            "name": "DigixDAO", 
            "symbol": "DGD", 
            "website_slug": "digixdao", 
            "rank": 59, 
            "circulating_supply": 2000000.0, 
            "total_supply": 2000000.0, 
            "max_supply": null, 
            "quotes": {
                "USD": {
                    "price": 55.9511307693, 
                    "volume_24h": 370419.146504961, 
                    "market_cap": 111902262.0, 
                    "percent_change_1h": -0.68, 
                    "percent_change_24h": -3.79, 
                    "percent_change_7d": 9.26
                }
            }, 
            "last_updated": 1534796432
        }, 
        "291": {
            "id": 291, 
            "name": "MaidSafeCoin", 
            "symbol": "MAID", 
            "website_slug": "maidsafecoin", 
            "rank": 60, 
            "circulating_supply": 452552412.0, 
            "total_supply": 452552412.0, 
            "max_supply": null, 
            "quotes": {
                "USD": {
                    "price": 0.2466583093, 
                    "volume_24h": 1426807.80472941, 
                    "market_cap": 111625813.0, 
                    "percent_change_1h": -0.44, 
                    "percent_change_24h": -0.94, 
                    "percent_change_7d": 3.96
                }
            }, 
            "last_updated": 1534796414
        }, 
        "1320": {
            "id": 1320, 
            "name": "Ardor", 
            "symbol": "ARDR", 
            "website_slug": "ardor", 
            "rank": 61, 
            "circulating_supply": 998999495.0, 
            "total_supply": 998999495.0, 
            "max_supply": 998999495.0, 
            "quotes": {
                "USD": {
                    "price": 0.1106964962, 
                    "volume_24h": 954623.658864163, 
                    "market_cap": 110585744.0, 
                    "percent_change_1h": 0.34, 
                    "percent_change_24h": -1.78, 
                    "percent_change_7d": 0.58
                }
            }, 
            "last_updated": 1534796436
        }, 
        "2502": {
            "id": 2502, 
            "name": "Huobi Token", 
            "symbol": "HT", 
            "website_slug": "huobi-token", 
            "rank": 62, 
            "circulating_supply": 50000200.0, 
            "total_supply": 500000000.0, 
            "max_supply": null, 
            "quotes": {
                "USD": {
                    "price": 2.2039623076, 
                    "volume_24h": 36387703.9931263, 
                    "market_cap": 110198556.0, 
                    "percent_change_1h": -0.01, 
                    "percent_change_24h": -4.46, 
                    "percent_change_7d": 3.57
                }
            }, 
            "last_updated": 1534796386
        }, 
        "1925": {
            "id": 1925, 
            "name": "Waltonchain", 
            "symbol": "WTC", 
            "website_slug": "waltonchain", 
            "rank": 63, 
            "circulating_supply": 40144099.0, 
            "total_supply": 70000000.0, 
            "max_supply": 100000000.0, 
            "quotes": {
                "USD": {
                    "price": 2.6971840643, 
                    "volume_24h": 3670813.7241264, 
                    "market_cap": 108276025.0, 
                    "percent_change_1h": -0.88, 
                    "percent_change_24h": -1.54, 
                    "percent_change_7d": 14.95
                }
            }, 
            "last_updated": 1534796438
        }, 
        "1975": {
            "id": 1975, 
            "name": "ChainLink", 
            "symbol": "LINK", 
            "website_slug": "chainlink", 
            "rank": 64, 
            "circulating_supply": 350000000.0, 
            "total_supply": 1000000000.0, 
            "max_supply": null, 
            "quotes": {
                "USD": {
                    "price": 0.3009534427, 
                    "volume_24h": 1377270.32880592, 
                    "market_cap": 105333705.0, 
                    "percent_change_1h": -0.23, 
                    "percent_change_24h": -0.54, 
                    "percent_change_7d": 13.94
                }
            }, 
            "last_updated": 1534796438
        }, 
        "2062": {
            "id": 2062, 
            "name": "Aion", 
            "symbol": "AION", 
            "website_slug": "aion", 
            "rank": 65, 
            "circulating_supply": 205422840.0, 
            "total_supply": 465934587.0, 
            "max_supply": null, 
            "quotes": {
                "USD": {
                    "price": 0.4916680158, 
                    "volume_24h": 2051019.52474029, 
                    "market_cap": 100999840.0, 
                    "percent_change_1h": -0.46, 
                    "percent_change_24h": -4.69, 
                    "percent_change_7d": 30.21
                }
            }, 
            "last_updated": 1534796439
        }, 
        "213": {
            "id": 213, 
            "name": "MonaCoin", 
            "symbol": "MONA", 
            "website_slug": "monacoin", 
            "rank": 66, 
            "circulating_supply": 61698025.0, 
            "total_supply": 61698025.0, 
            "max_supply": null, 
            "quotes": {
                "USD": {
                    "price": 1.5971811576, 
                    "volume_24h": 437669.430304688, 
                    "market_cap": 98542923.0, 
                    "percent_change_1h": -0.09, 
                    "percent_change_24h": -0.34, 
                    "percent_change_7d": -6.04
                }
            }, 
            "last_updated": 1534796413
        }, 
        "2349": {
            "id": 2349, 
            "name": "Mixin", 
            "symbol": "XIN", 
            "website_slug": "mixin", 
            "rank": 67, 
            "circulating_supply": 441954.0, 
            "total_supply": 1000000.0, 
            "max_supply": null, 
            "quotes": {
                "USD": {
                    "price": 218.099739329, 
                    "volume_24h": 38101.1631848168, 
                    "market_cap": 96390031.0, 
                    "percent_change_1h": -2.66, 
                    "percent_change_24h": -4.34, 
                    "percent_change_7d": -4.38
                }
            }, 
            "last_updated": 1534796385
        }, 
        "2299": {
            "id": 2299, 
            "name": "aelf", 
            "symbol": "ELF", 
            "website_slug": "aelf", 
            "rank": 68, 
            "circulating_supply": 250000000.0, 
            "total_supply": 280000000.0, 
            "max_supply": 1000000000.0, 
            "quotes": {
                "USD": {
                    "price": 0.3833352727, 
                    "volume_24h": 8364467.95120234, 
                    "market_cap": 95833818.0, 
                    "percent_change_1h": -1.69, 
                    "percent_change_24h": -5.32, 
                    "percent_change_7d": -1.67
                }
            }, 
            "last_updated": 1534796385
        }, 
        "1757": {
            "id": 1757, 
            "name": "FunFair", 
            "symbol": "FUN", 
            "website_slug": "funfair", 
            "rank": 69, 
            "circulating_supply": 5010848189.0, 
            "total_supply": 10999873621.0, 
            "max_supply": null, 
            "quotes": {
                "USD": {
                    "price": 0.0190809373, 
                    "volume_24h": 843957.444651796, 
                    "market_cap": 95611680.0, 
                    "percent_change_1h": -0.22, 
                    "percent_change_24h": -2.0, 
                    "percent_change_7d": 13.12
                }
            }, 
            "last_updated": 1534796436
        }, 
        "1908": {
            "id": 1908, 
            "name": "Nebulas", 
            "symbol": "NAS", 
            "website_slug": "nebulas-token", 
            "rank": 70, 
            "circulating_supply": 45500000.0, 
            "total_supply": 100000000.0, 
            "max_supply": 100000000.0, 
            "quotes": {
                "USD": {
                    "price": 2.0611101797, 
                    "volume_24h": 17812512.2347543, 
                    "market_cap": 93780513.0, 
                    "percent_change_1h": -0.72, 
                    "percent_change_24h": 7.88, 
                    "percent_change_7d": 62.64
                }
            }, 
            "last_updated": 1534796439
        }, 
        "2606": {
            "id": 2606, 
            "name": "Wanchain", 
            "symbol": "WAN", 
            "website_slug": "wanchain", 
            "rank": 71, 
            "circulating_supply": 106152493.0, 
            "total_supply": 210000000.0, 
            "max_supply": null, 
            "quotes": {
                "USD": {
                    "price": 0.8780611005, 
                    "volume_24h": 2375464.33528805, 
                    "market_cap": 93208375.0, 
                    "percent_change_1h": -1.23, 
                    "percent_change_24h": -1.55, 
                    "percent_change_7d": 17.53
                }
            }, 
            "last_updated": 1534796392
        }, 
        "2027": {
            "id": 2027, 
            "name": "Cryptonex", 
            "symbol": "CNX", 
            "website_slug": "cryptonex", 
            "rank": 72, 
            "circulating_supply": 45423908.0, 
            "total_supply": 106861533.0, 
            "max_supply": 210000000.0, 
            "quotes": {
                "USD": {
                    "price": 2.0469146154, 
                    "volume_24h": 3240830.46409461, 
                    "market_cap": 92978861.0, 
                    "percent_change_1h": -1.41, 
                    "percent_change_24h": 0.23, 
                    "percent_change_7d": 0.77
                }
            }, 
            "last_updated": 1534796381
        }, 
        "1993": {
            "id": 1993, 
            "name": "Kin", 
            "symbol": "KIN", 
            "website_slug": "kin", 
            "rank": 73, 
            "circulating_supply": 756097560976.0, 
            "total_supply": 10000000000000.0, 
            "max_supply": null, 
            "quotes": {
                "USD": {
                    "price": 0.000122443, 
                    "volume_24h": 421399.917961578, 
                    "market_cap": 92578836.0, 
                    "percent_change_1h": -3.39, 
                    "percent_change_24h": -5.69, 
                    "percent_change_7d": -8.0
                }
            }, 
            "last_updated": 1534796441
        }, 
        "1750": {
            "id": 1750, 
            "name": "GXChain", 
            "symbol": "GXS", 
            "website_slug": "gxchain", 
            "rank": 74, 
            "circulating_supply": 60000000.0, 
            "total_supply": 100000000.0, 
            "max_supply": 100000000.0, 
            "quotes": {
                "USD": {
                    "price": 1.5048163448, 
                    "volume_24h": 1348021.90359561, 
                    "market_cap": 90288981.0, 
                    "percent_change_1h": -0.64, 
                    "percent_change_24h": -1.58, 
                    "percent_change_7d": -0.29
                }
            }, 
            "last_updated": 1534796435
        }, 
        "1698": {
            "id": 1698, 
            "name": "ZenCash", 
            "symbol": "ZEN", 
            "website_slug": "zencash", 
            "rank": 75, 
            "circulating_supply": 4539013.0, 
            "total_supply": 4539013.0, 
            "max_supply": 21000000.0, 
            "quotes": {
                "USD": {
                    "price": 19.8442593295, 
                    "volume_24h": 726036.281935225, 
                    "market_cap": 90073341.0, 
                    "percent_change_1h": 0.9, 
                    "percent_change_24h": -1.37, 
                    "percent_change_7d": 5.67
                }
            }, 
            "last_updated": 1534796436
        }, 
        "1727": {
            "id": 1727, 
            "name": "Bancor", 
            "symbol": "BNT", 
            "website_slug": "bancor", 
            "rank": 76, 
            "circulating_supply": 52288649.0, 
            "total_supply": 76957847.0, 
            "max_supply": null, 
            "quotes": {
                "USD": {
                    "price": 1.6135791574, 
                    "volume_24h": 3750101.49464558, 
                    "market_cap": 84371874.0, 
                    "percent_change_1h": 0.25, 
                    "percent_change_24h": -1.76, 
                    "percent_change_7d": 4.74
                }
            }, 
            "last_updated": 1534796439
        }, 
        "118": {
            "id": 118, 
            "name": "ReddCoin", 
            "symbol": "RDD", 
            "website_slug": "reddcoin", 
            "rank": 77, 
            "circulating_supply": 28808713174.0, 
            "total_supply": 28808713174.0, 
            "max_supply": null, 
            "quotes": {
                "USD": {
                    "price": 0.0027835984, 
                    "volume_24h": 3193781.84920054, 
                    "market_cap": 80191888.0, 
                    "percent_change_1h": 0.65, 
                    "percent_change_24h": 8.53, 
                    "percent_change_7d": 24.08
                }
            }, 
            "last_updated": 1534796411
        }, 
        "2575": {
            "id": 2575, 
            "name": "Bitcoin Private", 
            "symbol": "BTCP", 
            "website_slug": "bitcoin-private", 
            "rank": 78, 
            "circulating_supply": 20521266.0, 
            "total_supply": 20521266.0, 
            "max_supply": 21000000.0, 
            "quotes": {
                "USD": {
                    "price": 3.8884689776, 
                    "volume_24h": 143479.26018714, 
                    "market_cap": 79796305.0, 
                    "percent_change_1h": -2.4, 
                    "percent_change_24h": -6.41, 
                    "percent_change_7d": 12.41
                }
            }, 
            "last_updated": 1534796388
        }, 
        "2682": {
            "id": 2682, 
            "name": "Holo", 
            "symbol": "HOT", 
            "website_slug": "holo", 
            "rank": 79, 
            "circulating_supply": 133214575156.0, 
            "total_supply": 177619433541.0, 
            "max_supply": null, 
            "quotes": {
                "USD": {
                    "price": 0.0005811786, 
                    "volume_24h": 1377062.7658693, 
                    "market_cap": 77421457.0, 
                    "percent_change_1h": -1.22, 
                    "percent_change_24h": -2.28, 
                    "percent_change_7d": -5.05
                }
            }, 
            "last_updated": 1534796387
        }, 
        "1586": {
            "id": 1586, 
            "name": "Ark", 
            "symbol": "ARK", 
            "website_slug": "ark", 
            "rank": 80, 
            "circulating_supply": 104631608.0, 
            "total_supply": 135881608.0, 
            "max_supply": null, 
            "quotes": {
                "USD": {
                    "price": 0.7102693381, 
                    "volume_24h": 1139766.85759531, 
                    "market_cap": 74316623.0, 
                    "percent_change_1h": -0.34, 
                    "percent_change_24h": 3.66, 
                    "percent_change_7d": 4.55
                }
            }, 
            "last_updated": 1534796435
        }, 
        "1414": {
            "id": 1414, 
            "name": "ZCoin", 
            "symbol": "XZC", 
            "website_slug": "zcoin", 
            "rank": 81, 
            "circulating_supply": 5459862.0, 
            "total_supply": 5459862.0, 
            "max_supply": 21400000.0, 
            "quotes": {
                "USD": {
                    "price": 13.5586372293, 
                    "volume_24h": 5043113.23416644, 
                    "market_cap": 74028282.0, 
                    "percent_change_1h": -0.47, 
                    "percent_change_24h": -0.79, 
                    "percent_change_7d": 8.42
                }
            }, 
            "last_updated": 1534796433
        }, 
        "1966": {
            "id": 1966, 
            "name": "Decentraland", 
            "symbol": "MANA", 
            "website_slug": "decentraland", 
            "rank": 82, 
            "circulating_supply": 1050141509.0, 
            "total_supply": 2644403343.0, 
            "max_supply": null, 
            "quotes": {
                "USD": {
                    "price": 0.0702198341, 
                    "volume_24h": 3847917.2791736, 
                    "market_cap": 73740763.0, 
                    "percent_change_1h": -0.63, 
                    "percent_change_24h": -4.07, 
                    "percent_change_7d": -4.29
                }
            }, 
            "last_updated": 1534796380
        }, 
        "558": {
            "id": 558, 
            "name": "Emercoin", 
            "symbol": "EMC", 
            "website_slug": "emercoin", 
            "rank": 83, 
            "circulating_supply": 42118422.0, 
            "total_supply": 42118422.0, 
            "max_supply": null, 
            "quotes": {
                "USD": {
                    "price": 1.749797026, 
                    "volume_24h": 1389657.74688721, 
                    "market_cap": 73698690.0, 
                    "percent_change_1h": -0.12, 
                    "percent_change_24h": 0.44, 
                    "percent_change_7d": -6.91
                }
            }, 
            "last_updated": 1534796424
        }, 
        "2132": {
            "id": 2132, 
            "name": "Power Ledger", 
            "symbol": "POWR", 
            "website_slug": "power-ledger", 
            "rank": 84, 
            "circulating_supply": 374800708.0, 
            "total_supply": 1000000000.0, 
            "max_supply": null, 
            "quotes": {
                "USD": {
                    "price": 0.1924581698, 
                    "volume_24h": 3086520.69832637, 
                    "market_cap": 72133458.0, 
                    "percent_change_1h": -0.25, 
                    "percent_change_24h": 1.07, 
                    "percent_change_7d": 5.3
                }
            }, 
            "last_updated": 1534796440
        }, 
        "1776": {
            "id": 1776, 
            "name": "MCO", 
            "symbol": "MCO", 
            "website_slug": "mco", 
            "rank": 85, 
            "circulating_supply": 15793831.0, 
            "total_supply": 31587682.0, 
            "max_supply": null, 
            "quotes": {
                "USD": {
                    "price": 4.555805045, 
                    "volume_24h": 6354572.91107749, 
                    "market_cap": 71953615.0, 
                    "percent_change_1h": -0.17, 
                    "percent_change_24h": -3.24, 
                    "percent_change_7d": -9.56
                }
            }, 
            "last_updated": 1534796440
        }, 
        "1710": {
            "id": 1710, 
            "name": "Veritaseum", 
            "symbol": "VERI", 
            "website_slug": "veritaseum", 
            "rank": 86, 
            "circulating_supply": 2036645.0, 
            "total_supply": 100000000.0, 
            "max_supply": null, 
            "quotes": {
                "USD": {
                    "price": 35.1401550482, 
                    "volume_24h": 791066.475184119, 
                    "market_cap": 71568037.0, 
                    "percent_change_1h": 0.87, 
                    "percent_change_24h": 9.6, 
                    "percent_change_7d": 66.14
                }
            }, 
            "last_updated": 1534796438
        }, 
        "2492": {
            "id": 2492, 
            "name": "Elastos", 
            "symbol": "ELA", 
            "website_slug": "elastos", 
            "rank": 87, 
            "circulating_supply": 7439732.0, 
            "total_supply": 33871205.0, 
            "max_supply": null, 
            "quotes": {
                "USD": {
                    "price": 9.5164778089, 
                    "volume_24h": 3084335.9172468, 
                    "market_cap": 70800043.0, 
                    "percent_change_1h": -0.56, 
                    "percent_change_24h": -2.38, 
                    "percent_change_7d": 44.1
                }
            }, 
            "last_updated": 1534796386
        }, 
        "2886": {
            "id": 2886, 
            "name": "TaTaTu", 
            "symbol": "TTU", 
            "website_slug": "tatatu", 
            "rank": 88, 
            "circulating_supply": 96727971.0, 
            "total_supply": 10000000000.0, 
            "max_supply": null, 
            "quotes": {
                "USD": {
                    "price": 0.7203492788, 
                    "volume_24h": 292930.671603428, 
                    "market_cap": 69677924.0, 
                    "percent_change_1h": 3.88, 
                    "percent_change_24h": -1.02, 
                    "percent_change_7d": 236.62
                }
            }, 
            "last_updated": 1534796391
        }, 
        "2300": {
            "id": 2300, 
            "name": "WAX", 
            "symbol": "WAX", 
            "website_slug": "wax", 
            "rank": 89, 
            "circulating_supply": 930851783.0, 
            "total_supply": 1850000000.0, 
            "max_supply": null, 
            "quotes": {
                "USD": {
                    "price": 0.073550248, 
                    "volume_24h": 455883.268648124, 
                    "market_cap": 68464379.0, 
                    "percent_change_1h": -0.52, 
                    "percent_change_24h": 0.25, 
                    "percent_change_7d": 0.34
                }
            }, 
            "last_updated": 1534796387
        }, 
        "66": {
            "id": 66, 
            "name": "Nxt", 
            "symbol": "NXT", 
            "website_slug": "nxt", 
            "rank": 90, 
            "circulating_supply": 998999942.0, 
            "total_supply": 998999942.0, 
            "max_supply": 1000000000.0, 
            "quotes": {
                "USD": {
                    "price": 0.068185787, 
                    "volume_24h": 2017533.24082242, 
                    "market_cap": 68117597.0, 
                    "percent_change_1h": -1.12, 
                    "percent_change_24h": -1.27, 
                    "percent_change_7d": -7.5
                }
            }, 
            "last_updated": 1534796408
        }, 
        "2638": {
            "id": 2638, 
            "name": "Cortex", 
            "symbol": "CTXC", 
            "website_slug": "cortex", 
            "rank": 91, 
            "circulating_supply": 149792458.0, 
            "total_supply": 299792458.0, 
            "max_supply": null, 
            "quotes": {
                "USD": {
                    "price": 0.4440676023, 
                    "volume_24h": 6599593.42727293, 
                    "market_cap": 66517978.0, 
                    "percent_change_1h": 0.77, 
                    "percent_change_24h": -4.48, 
                    "percent_change_7d": 80.52
                }
            }, 
            "last_updated": 1534796386
        }, 
        "2874": {
            "id": 2874, 
            "name": "Aurora", 
            "symbol": "AOA", 
            "website_slug": "aurora", 
            "rank": 92, 
            "circulating_supply": 3458639788.0, 
            "total_supply": 10000000000.0, 
            "max_supply": null, 
            "quotes": {
                "USD": {
                    "price": 0.0191348666, 
                    "volume_24h": 123821.840925623, 
                    "market_cap": 66180611.0, 
                    "percent_change_1h": -0.95, 
                    "percent_change_24h": -7.77, 
                    "percent_change_7d": -35.33
                }
            }, 
            "last_updated": 1534796393
        }, 
        "2563": {
            "id": 2563, 
            "name": "TrueUSD", 
            "symbol": "TUSD", 
            "website_slug": "trueusd", 
            "rank": 93, 
            "circulating_supply": 65267803.0, 
            "total_supply": 65267803.0, 
            "max_supply": null, 
            "quotes": {
                "USD": {
                    "price": 1.0007632766, 
                    "volume_24h": 10057060.5443128, 
                    "market_cap": 65317620.0, 
                    "percent_change_1h": -0.05, 
                    "percent_change_24h": 0.12, 
                    "percent_change_7d": -0.36
                }
            }, 
            "last_updated": 1534796387
        }, 
        "1758": {
            "id": 1758, 
            "name": "TenX", 
            "symbol": "PAY", 
            "website_slug": "tenx", 
            "rank": 94, 
            "circulating_supply": 109255861.0, 
            "total_supply": 205218256.0, 
            "max_supply": null, 
            "quotes": {
                "USD": {
                    "price": 0.5820611563, 
                    "volume_24h": 4609254.42274486, 
                    "market_cap": 63593593.0, 
                    "percent_change_1h": 0.05, 
                    "percent_change_24h": -2.59, 
                    "percent_change_7d": 9.57
                }
            }, 
            "last_updated": 1534796436
        }, 
        "1934": {
            "id": 1934, 
            "name": "Loopring", 
            "symbol": "LRC", 
            "website_slug": "loopring", 
            "rank": 95, 
            "circulating_supply": 572074043.0, 
            "total_supply": 1374956262.0, 
            "max_supply": null, 
            "quotes": {
                "USD": {
                    "price": 0.1105143227, 
                    "volume_24h": 1742360.95471904, 
                    "market_cap": 63222375.0, 
                    "percent_change_1h": -0.88, 
                    "percent_change_24h": -4.94, 
                    "percent_change_7d": -2.54
                }
            }, 
            "last_updated": 1534796439
        }, 
        "2591": {
            "id": 2591, 
            "name": "Dropil", 
            "symbol": "DROP", 
            "website_slug": "dropil", 
            "rank": 96, 
            "circulating_supply": 20876686009.0, 
            "total_supply": 30000000000.0, 
            "max_supply": null, 
            "quotes": {
                "USD": {
                    "price": 0.0030005893, 
                    "volume_24h": 434480.593039024, 
                    "market_cap": 62642360.0, 
                    "percent_change_1h": -0.06, 
                    "percent_change_24h": -5.29, 
                    "percent_change_7d": -3.18
                }
            }, 
            "last_updated": 1534796387
        }, 
        "1169": {
            "id": 1169, 
            "name": "PIVX", 
            "symbol": "PIVX", 
            "website_slug": "pivx", 
            "rank": 97, 
            "circulating_supply": 56781166.0, 
            "total_supply": 56781166.0, 
            "max_supply": null, 
            "quotes": {
                "USD": {
                    "price": 1.0976333888, 
                    "volume_24h": 238437.337471372, 
                    "market_cap": 62324904.0, 
                    "percent_change_1h": -0.22, 
                    "percent_change_24h": -3.5, 
                    "percent_change_7d": 7.82
                }
            }, 
            "last_updated": 1534796431
        }, 
        "1982": {
            "id": 1982, 
            "name": "Kyber Network", 
            "symbol": "KNC", 
            "website_slug": "kyber-network", 
            "rank": 98, 
            "circulating_supply": 134132697.0, 
            "total_supply": 215625349.0, 
            "max_supply": null, 
            "quotes": {
                "USD": {
                    "price": 0.4503784334, 
                    "volume_24h": 3582047.2808989, 
                    "market_cap": 60410474.0, 
                    "percent_change_1h": -0.49, 
                    "percent_change_24h": -3.7, 
                    "percent_change_7d": 6.85
                }
            }, 
            "last_updated": 1534796439
        }, 
        "2213": {
            "id": 2213, 
            "name": "QASH", 
            "symbol": "QASH", 
            "website_slug": "qash", 
            "rank": 99, 
            "circulating_supply": 350000000.0, 
            "total_supply": 1000000000.0, 
            "max_supply": null, 
            "quotes": {
                "USD": {
                    "price": 0.1652028356, 
                    "volume_24h": 338606.476992522, 
                    "market_cap": 57820992.0, 
                    "percent_change_1h": 0.29, 
                    "percent_change_24h": -0.71, 
                    "percent_change_7d": 7.21
                }
            }, 
            "last_updated": 1534796382
        }, 
        "2092": {
            "id": 2092, 
            "name": "Nuls", 
            "symbol": "NULS", 
            "website_slug": "nuls", 
            "rank": 100, 
            "circulating_supply": 40000000.0, 
            "total_supply": 40000000.0, 
            "max_supply": null, 
            "quotes": {
                "USD": {
                    "price": 1.4153425022, 
                    "volume_24h": 2351705.30235278, 
                    "market_cap": 56613700.0, 
                    "percent_change_1h": -0.82, 
                    "percent_change_24h": -4.77, 
                    "percent_change_7d": -4.48
                }
            }, 
            "last_updated": 1534796440
        }
    }, 
    "metadata": {
        "timestamp": 1534795944, 
        "num_cryptocurrencies": 1865, 
        "error": null
    }
}

//nameId is an oject contain key-value pairs with crytpocurrency name as key and Id as value {name: id}
//build nameId from topCoins object
const nameId = {}

for (let key in topCoins.data) {
      nameId[topCoins.data[key].name] = topCoins.data[key].id;
    }
console.log(nameId)