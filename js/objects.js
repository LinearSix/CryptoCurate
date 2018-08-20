
//nameId is an oject contain key-value pairs with crytpocurrency name as key and Id as value {name: id}
const nameId = {}
//cryptoNonFinancial is an object of information about 38 coins. 
const cryptoNonFinancial = [
    {
      "Currency": "Bitcoin",
      "Release": 2009,
      "Status": "Active",
      "Symbol": "BTC,[4][5]XBT, ₿",
      "Founder(s)": "Satoshi Nakamoto[nt 1]",
      "Hash Algorithm": "SHA-256d[6][7]",
      "Programming language of implementation": "C++[8]",
      "Consensus Algorithm": "PoW[7][9]",
      "Notes": "The first decentralized ledger currency. Cryptocurrency with the most famous, popular, notable and highest market capitalization."
    },
    {
      "Currency": "Litecoin",
      "Release": 2011,
      "Status": "Active",
      "Symbol": "LTC, Ł",
      "Founder(s)": "Charlie Lee",
      "Hash Algorithm": "Scrypt",
      "Programming language of implementation": "C++[10]",
      "Consensus Algorithm": "PoW",
      "Notes": "The first cryptocurrency to use Scrypt as a hashing algorithm."
    },
    {
      "Currency": "Namecoin",
      "Release": 2011,
      "Status": "Active",
      "Symbol": "NMC",
      "Founder(s)": "Vincent Durham[11][12]",
      "Hash Algorithm": "SHA-256d",
      "Programming language of implementation": "C++[13]",
      "Consensus Algorithm": "PoW",
      "Notes": "Also acts as an alternative, decentralized DNS."
    },
    {
      "Currency": "SwiftCoin",
      "Release": 2011,
      "Status": "Active",
      "Symbol": "STC",
      "Founder(s)": "Daniel Bruno",
      "Hash Algorithm": "SHA-256",
      "Programming language of implementation": "",
      "Consensus Algorithm": "PoW",
      "Notes": "First digital coin with theoretical value based on the work required to produce electricity. First block chain to support currency creation by interest paid on debt. Solidus Bond proto smart-contract. One of the first digital coins patented in the US. First block chain to support encrypted mail with attachments."
    },
    {
      "Currency": "Bytecoin",
      "Release": 2012,
      "Status": "Active",
      "Symbol": "BCN",
      "Founder(s)": "",
      "Hash Algorithm": "CryptoNote",
      "Programming language of implementation": "C++[14]",
      "Consensus Algorithm": "PoW",
      "Notes": "First cryptocurrency based on the CryptoNote algorithm. Focused on user privacy through impassive and anonymous transactions"
    },
    {
      "Currency": "Peercoin",
      "Release": 2012,
      "Status": "Active",
      "Symbol": "PPC",
      "Founder(s)": "Sunny King",
      "Hash Algorithm": "SHA-256d[16]",
      "Programming language of implementation": "C++[17]",
      "Consensus Algorithm": "PoW & PoS",
      "Notes": "The first cryptocurrency to use POW and POS functions."
    },
    {
      "Currency": "Dogecoin",
      "Release": 2013,
      "Status": "Active",
      "Symbol": "DOGE, XDG, Ð",
      "Founder(s)": "Jackson Palmer",
      "Hash Algorithm": "Scrypt[19]",
      "Programming language of implementation": "C++[20]",
      "Consensus Algorithm": "PoW",
      "Notes": "Based on an internet meme."
    },
    {
      "Currency": "Feathercoin",
      "Release": "2013[21]",
      "Status": "Active",
      "Symbol": "FTC, ₣",
      "Founder(s)": "Peter Bushnell,Brasenose College of Oxford University",
      "Hash Algorithm": "NeoScrypt",
      "Programming language of implementation": "C++[22]",
      "Consensus Algorithm": "N/A",
      "Notes": "Approx. 60 seconds block time"
    },
    {
      "Currency": "Gridcoin",
      "Release": "2013[23][24]",
      "Status": "Active",
      "Symbol": "GRC",
      "Founder(s)": "Rob Hälford [25]",
      "Hash Algorithm": "Scrypt",
      "Programming language of implementation": "C++[26]",
      "Consensus Algorithm": "Decentralized PoS",
      "Notes": "The first cryptocurrency linked to citizen science through the Berkeley Open Infrastructure for Network Computing[27][28]"
    },
    {
      "Currency": "Nxt",
      "Release": 2013,
      "Status": "Active",
      "Symbol": "NXT",
      "Founder(s)": "BCNext",
      "Hash Algorithm": "SHA-256d[37]",
      "Programming language of implementation": "Java[38]",
      "Consensus Algorithm": "PoS",
      "Notes": "Specifically designed as a flexible platform to build applications and financial services around its protocol."
    },
    {
      "Currency": "Primecoin",
      "Release": 2013,
      "Status": "Active",
      "Symbol": "XPM",
      "Founder(s)": "Sunny King",
      "Hash Algorithm": "1CC/2CC/TWN[29]",
      "Programming language of implementation": "TypeScript, C++[30]",
      "Consensus Algorithm": "PoW[29]",
      "Notes": "Uses the finding of prime chains composed of Cunningham chains and bi-twin chains for proof-of-work, which can lead to useful byproducts."
    },
    {
      "Currency": "Ripple",
      "Release": 2013,
      "Status": "Active",
      "Symbol": "XRP[33]",
      "Founder(s)": "Chris Larsen &",
      "Hash Algorithm": "ECDSA[35]",
      "Programming language of implementation": "C++[36]",
      "Consensus Algorithm": "Consensus",
      "Notes": "Designed for peer to peer debt transfer. Not based on bitcoin."
    },
    {
      "Currency": "Auroracoin",
      "Release": 2014,
      "Status": "Active",
      "Symbol": "AUR",
      "Founder(s)": "Baldur Odinsson",
      "Hash Algorithm": "Scrypt",
      "Programming language of implementation": "C++[40]",
      "Consensus Algorithm": "PoW",
      "Notes": "Created as an alternative to fiat currency in Iceland."
    },
    {
      "Currency": "Coinye",
      "Release": 2014,
      "Status": "Inactive",
      "Symbol": "KOI, COYE",
      "Founder(s)": "",
      "Hash Algorithm": "Scrypt",
      "Programming language of implementation": "",
      "Consensus Algorithm": "PoW",
      "Notes": "Used American hip hop artist Kanye West as its mascot, abandoned after trademark lawsuit."
    },
    {
      "Currency": "Dash",
      "Release": 2014,
      "Status": "Active",
      "Symbol": "DASH",
      "Founder(s)": "Evan Duffield &",
      "Hash Algorithm": "X11",
      "Programming language of implementation": "C++[42]",
      "Consensus Algorithm": "PoW & Proof of Service[nt 2]",
      "Notes": "A bitcoin-based currency featuring instant transactions, decentralized governance and budgeting, and private transactions."
    },
    {
      "Currency": "MazaCoin",
      "Release": 2014,
      "Status": "Active",
      "Symbol": "MZC",
      "Founder(s)": "BTC Oyate Initiative",
      "Hash Algorithm": "SHA-256d",
      "Programming language of implementation": "C++[44]",
      "Consensus Algorithm": "PoW",
      "Notes": "The underlying software is derived from that of another cryptocurrency, ZetaCoin."
    }, 
    {
      "Currency": "Monero",
      "Release": 2014,
      "Status": "Active",
      "Symbol": "XMR",
      "Founder(s)": "Monero Core Team",
      "Hash Algorithm": "CryptoNight[45]",
      "Programming language of implementation": "C++[46]",
      "Consensus Algorithm": "PoW",
      "Notes": "Privacy-centric coin using the CryptoNote protocol with improvements for scalability and decentralization."
    },
    {
      "Currency": "NEM",
      "Release": 2014,
      "Status": "Active",
      "Symbol": "XEM",
      "Founder(s)": "UtopianFuture (pseudonym)",
      "Hash Algorithm": "SHA3-512",
      "Programming language of implementation": "Java[47]",
      "Consensus Algorithm": "POI",
      "Notes": "The first hybrid public/private blockchain solution built from scratch, and first to use the Proof of Importance algorithm using EigenTrust++ reputation system."
    },
    {
      "Currency": "NEO",
      "Release": 2014,
      "Status": "Active",
      "Symbol": "NEO",
      "Founder(s)": "Da Hongfei & Erik Zhang",
      "Hash Algorithm": "SHA-256 & RIPEMD160",
      "Programming language of implementation": "C#[43]",
      "Consensus Algorithm": "dBFT",
      "Notes": "Chinese based cryptocurrency (formerly ANT Shares which produce ANT Coins) name change August 2017 to NEO and GAs, these enable the development of digital assets and smart contracts."
    },
    {
      "Currency": "PotCoin",
      "Release": 2014,
      "Status": "Active",
      "Symbol": "POT",
      "Founder(s)": "Potcoin core dev team",
      "Hash Algorithm": "Scrypt",
      "Programming language of implementation": "C++[48]",
      "Consensus Algorithm": "PoS",
      "Notes": "Developed to service the legalized cannabis industry"
    },
    {
      "Currency": "Stellar",
      "Release": 2014,
      "Status": "Active",
      "Symbol": "XLM",
      "Founder(s)": "Jed McCaleb",
      "Hash Algorithm": "Stellar Consensus Protocol (SCP) [56]",
      "Programming language of implementation": "C, C++[57]",
      "Consensus Algorithm": "Stellar Consensus Protocol (SCP) [56]",
      "Notes": "Open-source, decentralized global financial network. The usage is for remittances, micropayments, services for the underbanked, mobile money/branches and professional setups."
    },
    {
      "Currency": "Synereo AMP",
      "Release": 2014,
      "Status": "Active",
      "Symbol": "AMP",
      "Founder(s)": "Dor Konforty & Greg Meredith[49]",
      "Hash Algorithm": "PoS",
      "Programming language of implementation": "Scala, Java[50]",
      "Consensus Algorithm": "PoS",
      "Notes": "Trying to create a world computer, Synereo’s 2.0 tech stack incorporates all faculties needed to support decentralized computation without central servers.[51]"
    },
    {
      "Currency": "Titcoin",
      "Release": 2014,
      "Status": "Active",
      "Symbol": "TIT",
      "Founder(s)": "Edward Mansfield & Richard Allen[52]",
      "Hash Algorithm": "SHA-256d",
      "Programming language of implementation": "TypeScript, C++[53]",
      "Consensus Algorithm": "PoW",
      "Notes": "The first cryptocurrency to be nominated for a major adult industry award.[54]"
    },
    {
      "Currency": "Verge",
      "Release": 2014,
      "Status": "Active",
      "Symbol": "XVG",
      "Founder(s)": "Sunerok",
      "Hash Algorithm": "Scrypt, x17, groestl, blake2s, and lyra2rev2",
      "Programming language of implementation": "C, C++[55]",
      "Consensus Algorithm": "PoW",
      "Notes": ""
    },
    {
      "Currency": "Vertcoin",
      "Release": 2014,
      "Status": "Active",
      "Symbol": "VTC",
      "Founder(s)": "Bushido",
      "Hash Algorithm": "Lyra2RE[58]",
      "Programming language of implementation": "C++[59]",
      "Consensus Algorithm": "PoW",
      "Notes": "Next-gen ASIC resistance and first to implement stealth addresses."
    },
    {
      "Currency": "Ethereum",
      "Release": 2015,
      "Status": "Active",
      "Symbol": "ETH",
      "Founder(s)": "Vitalik Buterin[60]",
      "Hash Algorithm": "Ethash[61]",
      "Programming language of implementation": "C++, Go[62]",
      "Consensus Algorithm": "PoW",
      "Notes": "Supports Turing-complete smart contracts."
    },
    {
      "Currency": "Ethereum Classic",
      "Release": 2015,
      "Status": "Active",
      "Symbol": "ETC",
      "Founder(s)": "",
      "Hash Algorithm": "Ethash[61]",
      "Programming language of implementation": "",
      "Consensus Algorithm": "PoW",
      "Notes": "An alternative version of Ethereum[63]whose blockchain does not include the DAO Hard-fork.[64][65] Supports Turing-complete smart contracts."
    },
    {
      "Currency": "Tether",
      "Release": 2015,
      "Status": "Active",
      "Symbol": "USDT",
      "Founder(s)": "Jan Ludovicus van der Velde[66]",
      "Hash Algorithm": "Omnicore [67]",
      "Programming language of implementation": "",
      "Consensus Algorithm": "PoW",
      "Notes": "Tether is backed by the USD so that one tether is exactly equal to US$1. It is commonly used to convert other cryptocurrencies to USD.[68]"
    },
    {
      "Currency": "Decred",
      "Release": 2016,
      "Status": "Active",
      "Symbol": "DCR",
      "Founder(s)": "",
      "Hash Algorithm": "Blake-256",
      "Programming language of implementation": "Go[69]",
      "Consensus Algorithm": "PoW/PoS Hybrid",
      "Notes": "Built in governance and hybrid PoW/PoS."
    },
    {
      "Currency": "Waves Platform",
      "Release": 2016,
      "Status": "Active",
      "Symbol": "WAVES",
      "Founder(s)": "Sasha Ivanov",
      "Hash Algorithm": "PoS",
      "Programming language of implementation": "Scala, JavaScript[70]",
      "Consensus Algorithm": "PoS",
      "Notes": "Open blockchain platform, featuring token creation, distributed exchange and fast, high volume, transactions designed for ease of use[71] and mass adoption."
    },
    {
      "Currency": "Zcash",
      "Release": 2016,
      "Status": "Active",
      "Symbol": "ZEC",
      "Founder(s)": "Zooko Wilcox",
      "Hash Algorithm": "Equihash",
      "Programming language of implementation": "C++[72]",
      "Consensus Algorithm": "PoW",
      "Notes": "The first open, permissionless financial system employing zero-knowledge security."
    },
    {
      "Currency": "Bitcoin Cash",
      "Release": 2017,
      "Status": "Active",
      "Symbol": "BCH[73]",
      "Founder(s)": "",
      "Hash Algorithm": "SHA-256d",
      "Programming language of implementation": "",
      "Consensus Algorithm": "PoW",
      "Notes": "Hard fork from Bitcoin, Increased Block size from 1mb to 8mb"
    },
    {
      "Currency": "BitConnect",
      "Release": 2017,
      "Status": "Active",
      "Symbol": "BCC",
      "Founder(s)": "",
      "Hash Algorithm": "",
      "Programming language of implementation": "",
      "Consensus Algorithm": "",
      "Notes": "BitConnect is an open source all in one bitcoin and crypto community platform designed to provide multiple investment opportunities with cryptocurrency education"
    },
    {
      "Currency": "EOS.IO",
      "Release": 2017,
      "Status": "Active",
      "Symbol": "EOS",
      "Founder(s)": "Dan Larimer",
      "Hash Algorithm": "",
      "Programming language of implementation": "WebAssembly, Rust, C, C++[74]",
      "Consensus Algorithm": "delegated PoS",
      "Notes": "Feeless Smart contract platform for decentralized applications and decentralized autonomous corporationswith a block time of 500 ms.[74]"
    },
    {
      "Currency": "Bitcoin Private",
      "Release": 2018,
      "Status": "Active",
      "Symbol": "BTCP",
      "Founder(s)": "",
      "Hash Algorithm": "Equihash",
      "Programming language of implementation": "C++[79]",
      "Consensus Algorithm": "PoW",
      "Notes": "private, decentralized, fast, open source, community-driven coin implementing zkSNARK for privacy protection/anonymous payments. Hardfork (co-fork) of BTC and ZClassic"
    },
    {
      "Currency": "Cardano",
      "Release": 2018,
      "Status": "Active",
      "Symbol": "ADA",
      "Founder(s)": "Charles Hoskinson & Jeremy Wood",
      "Hash Algorithm": "",
      "Programming language of implementation": "Haskell[75]",
      "Consensus Algorithm": "Ouroboros PoS",
      "Notes": ""
    },
    {
      "Currency": "KodakCoin",
      "Release": 2018,
      "Status": "Inactive",
      "Symbol": "",
      "Founder(s)": "Kodak and WENN Digital",
      "Hash Algorithm": "Ethash[76]",
      "Programming language of implementation": "",
      "Consensus Algorithm": "",
      "Notes": "KodakCoin is a \"photographer-centric\" blockchain cryptocurrency used for payments for licensing photographs."
    },
    {
      "Currency": "Petro",
      "Release": 2018,
      "Status": "Active",
      "Symbol": "",
      "Founder(s)": "Venezuela Government",
      "Hash Algorithm": "onixCoin[77]",
      "Programming language of implementation": "C++[78]",
      "Consensus Algorithm": "",
      "Notes": "First cryptocurrency backed by Venezuela's reserves of oil."
    }
  ]
  
  console.log(cryptoNonFinancial[0].Currency)
  console.log(cryptoNonFinancial.length)
  
  for (let i = 0; i < cryptoNonFinancial.length; i++) {
      let name = cryptoNonFinancial[i].Currency;
      nameId[name] = 0;
    } 

    console.log(nameId)

