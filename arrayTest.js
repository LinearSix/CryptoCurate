console.log(`array`);

document.addEventListener('DOMContentLoaded', function() {

    let testArray = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];

    let select = document.getElementById(`select`);
    let option;
    for (let item in testArray) {
        option = document.createElement(`option`);
        option.textContent = (`${testArray[item]}`);
        option.value = (`${testArray[item]}`);
        select.appendChild(option);
    }

    let urlParams = new URLSearchParams(window.location.search);
    let searchAdd = (urlParams.get(`add`));
    let divAdd;
    console.log(searchAdd);

    let addArray = [];
    addArray.push(searchAdd);
    console.log(addArray);

    let divMaster = document.getElementById(`master`);
    console.log(divMaster);

    for (let card in addArray) {
        divAdd = document.createElement(`div`);
        divAdd.textContent = (`${addArray[card]}`);
        console.log(divAdd);
        divMaster.appendChild(divAdd);
    };

});


