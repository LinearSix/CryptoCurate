console.log(`array`);

document.addEventListener('DOMContentLoaded', function() {

    

    // each thumb has an add link

    // when add link is clicked, create large version to left of window and shorten thumbnail area

    // when another add link is clicked, add large version next to first large version, etc...

    // hold add data in array in querystring 



    let testArray = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];

    let urlParams = new URLSearchParams(window.location.search);
    // assign value of "add" to variable
    let searchAdd = (urlParams.get(`add`));
    let splitAdd = [];
    if (searchAdd) {
        splitAdd = searchAdd.split(",");
        splitAdd.splice(0, 1);
        console.log(splitAdd);
    } else {
        splitAdd = [];
    }

    // populate div with thumbs of array items
    let divMasterLeft = document.getElementById(`masterRight`);
    let formLarge;

    for (let add in splitAdd) {
        // create large style div inside its own form
        formLarge = document.createElement(`div`);
        formLarge.innerHTML = (`
        <form method="GET">
        <div class="divFull">${splitAdd[add]}
        <input type="hidden" name="remove" value="${splitAdd[add]}">
        <button type="submit">REMOVE</button>
        </div>
        </form>
        `);
        divMasterLeft.appendChild(formLarge);
    };

    // cmopare large and thumb arrays for difference
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
    // populate div with thumbs of array items
    let divMasterRight = document.getElementById(`masterRight`);
    let formThumb;

    for (let item in difference(testArray, splitAdd)) {

        formThumb = document.createElement(`div`);
        formThumb.innerHTML = (`
        <form method="GET">
        <div class="divThumb">${testArray[item]}
        <input type="hidden" name="add" value="${searchAdd},${testArray[item]}">
        <button type="submit">ADD</button>
        </div>
        </form>
        `);
        divMasterRight.appendChild(formThumb);
    };
});

