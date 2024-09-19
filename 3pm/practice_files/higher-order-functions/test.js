const numbers = [2, 4, 6, 8]
function testMap() {
    return numbers.map(num => num * 2);
}

// function testForEach() {
//     numbers.forEach(num => num * 2);
// }

const doubled = numbers.forEach(num => num * 2);
// const numbers2 = testMap();

// console.log(numbers2);
module.exports = { numbers, testMap, doubled }