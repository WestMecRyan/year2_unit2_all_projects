function test() {
    console.log('test');
}
const users = [{ id: 1, age: 25 }, { id: 2, age: 30 }, { id: 3, age: 18 }, { id: 4, age: 22 }, { id: 5, age: 19 }];
function sortByAge(arr) {
    let sortedArr = [...arr];
    for (let i = 0; i < sortedArr.length; i++) {
        console.log(sortedArr[i]);
    }
}

module.exports = { test, users, sortByAge }