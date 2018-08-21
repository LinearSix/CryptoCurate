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
module.exports = difference;