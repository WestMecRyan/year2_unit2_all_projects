function test() {
    console.log('test');
}
const users = [{ id: 1, age: 25 }, { id: 2, age: 30 }, { id: 3, age: 18 }, { id: 4, age: 22 }, { id: 5, age: 19 }];
function sortByAge(arr) {
    // create a new array from a copy of passed in array with spread syntax
    let sortedArr = [...arr];
    // Ensure every item of the array is sorted
    for (let i = 0; i < sortedArr.length; i++) {
        // console.log(sortedArr[i]);
        // move the next largest number to end through swaps
        for (let j = 0; j < sortedArr.length - 1; j++) {
            // check if first item's age is greater than second item's age
            if (sortedArr[j].age > sortedArr[j + 1].age) {
                // users [{id: 1, age: 25}, {id: 2, age: 20}]
                // sortedArr = [{id: 1, age: 25}, {id: 2, age: 20}]
                // temp = {id:1, age: 25}
                let temp = sortedArr[j];
                sortedArr[j] = sortedArr[j + 1];
                sortedArr[j + 1] = temp;
            }
        }
    }
    return sortedArr;
}

module.exports = { test, users, sortByAge }