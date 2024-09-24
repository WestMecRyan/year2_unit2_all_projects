function test() {
    console.log('this is a test');
}
const users = [{ id: 1, age: 25 }, { id: 2, age: 19 }, { id: 3, age: 30 }, { id: 4, age: 22 }, { id: 5, age: 18 }];
function sortByAge(arr) {
    let sortedArr = [...arr]
    for (let i = 0; i < sortedArr.length; i++) {
        // console.log('logged item', sortedArr[i]);
        for (let j = 0; j < sortedArr.length - 1; j++) {
            if (sortedArr[j].age > sortedArr[j + 1].age) {
                let temp = sortedArr[j];
                sortedArr[j] = sortedArr[j + 1];
                sortedArr[j + 1] = temp;
            }
        }
    }
    return sortedArr;
}

module.exports = { test, users, sortByAge }