const shellSort = arr => {
    const gap = arr.length;
    let x = 1;
    while (x < gap / 3) {
        x = 3 * x + 1;
    }
    while (x >= 1) {
        for (let i = x; i < gap; i++) {
            for (let j = i; j >= x && arr[j] < arr[j - x]; j -= x) {
                [arr[j], arr[j - x]] = [arr[j - x], arr[j]];
            }
        }
        x = (x - 1) / 3;
    }

    return arr;
}

let arr = [54, 26, 93, 17, 77, 31, 44, 55, 20];
const result = shellSort(arr)
console.log(result)