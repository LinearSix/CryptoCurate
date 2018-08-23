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
let testArray = [1, 2, 3, 4, 5];

// ROUNDING FUNCTION
let round = function(value, decimals) {
    return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
};