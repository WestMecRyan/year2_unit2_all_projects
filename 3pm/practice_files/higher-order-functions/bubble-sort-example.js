function test() {
    console.log('this is a test');
}
const users = [{ id: 1, age: 25, salary: 25000 }, { id: 2, age: 19, salary: 62000 }, { id: 3, age: 30, salary: 40000 }, { id: 4, age: 22, salary: 2500000 }, { id: 5, age: 18, salary: 13000 }];
function sortByKey(arr, key) {
    // make a new array using a clone of the passed in array using spread syntax
    let sortedArr = [...arr]
    let n = sortedArr.length;
    let isSwapped;
    // repeat the loop for the number of items to ensure every item is bubbled
    for (let i = 0; i < n - 1; i++) {
        // console.log('logged item', sortedArr[i]);
        // compare each (jth) item against the next item and increment until end of array (less the number of loops)
        isSwapped = false;
        for (let j = 0; j < n - i - 1; j++) {
            if (sortedArr[j][key] > sortedArr[j + 1][key]) {
                isSwapped = true;
                // create a variable 'temp' and set to current value of jth item of array
                // temp = {id: 1, age: 25}
                // let temp = sortedArr[j];
                // sortedArr[j] = sortedArr[j + 1];
                // sortedArr[j + 1] = temp;
                [sortedArr[j], sortedArr[j + 1]] = [sortedArr[j + 1], sortedArr[j]];
            }
        }
        if (!isSwapped) {
            break;
        }
    }
    return sortedArr;
}

module.exports = { test, users, sortByKey }