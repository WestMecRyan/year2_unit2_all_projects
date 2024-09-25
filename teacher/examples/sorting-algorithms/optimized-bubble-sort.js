function sortByAge(arr) {
    let sortedArr = [...arr];
    let n = sortedArr.length;
    let isSwapped;

    for (let i = 0; i < n - 1; i++) {
        isSwapped = false;

        for (let j = 0; j < n - i - 1; j++) {
            if (sortedArr[j].age > sortedArr[j + 1].age) {
                // let temp = sortedUsers[j];// let temp = age.5
                // sortedUsers[j] = sortedUsers[j + 1]; //sortedUsers[0] = sortedUsers[1]
                // sortedUsers[j + 1] = temp; // sortedUsers[1] = temp
                // Swap the elements
                [sortedArr[j], sortedArr[j + 1]] = [sortedArr[j + 1], sortedArr[j]];
                isSwapped = true;
            }
        }

        // If no swapping occurred, array is already sorted
        if (!isSwapped) {
            break;
        }
    }

    return sortedArr;
}