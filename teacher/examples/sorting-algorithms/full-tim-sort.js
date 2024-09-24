function simplifiedTimsort(arr) {
    const minRun = 32;
    const n = arr.length;

    // Sort small subarrays using insertion sort
    for (let i = 0; i < n; i += minRun) {
        insertionSort(arr, i, Math.min(i + minRun - 1, n - 1));
    }

    // Merge sorted subarrays
    for (let size = minRun; size < n; size *= 2) {
        for (let start = 0; start < n; start += size * 2) {
            const mid = start + size - 1;
            const end = Math.min(start + size * 2 - 1, n - 1);
            if (mid < end) {
                merge(arr, start, mid, end);
            }
        }
    }

    return arr;
}

function insertionSort(arr, left, right) {
    for (let i = left + 1; i <= right; i++) {
        const key = arr[i];
        let j = i - 1;
        while (j >= left && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
}

function merge(arr, left, mid, right) {
    const leftArr = arr.slice(left, mid + 1);
    const rightArr = arr.slice(mid + 1, right + 1);
    let i = 0, j = 0, k = left;

    while (i < leftArr.length && j < rightArr.length) {
        if (leftArr[i] <= rightArr[j]) {
            arr[k++] = leftArr[i++];
        } else {
            arr[k++] = rightArr[j++];
        }
    }

    while (i < leftArr.length) {
        arr[k++] = leftArr[i++];
    }

    while (j < rightArr.length) {
        arr[k++] = rightArr[j++];
    }
}

// Example usage
const arr = [64, 34, 25, 12, 22, 11, 90, 50, 70, 30, 5, 7, 9, 45, 87, 32, 76, 24, 61];
console.log("Original array:", arr);
console.log("Sorted array:", simplifiedTimsort([...arr]));