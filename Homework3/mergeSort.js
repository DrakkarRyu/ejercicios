const mergeSort = arr => {
    if (arr.length < 2) {
        return arr;
    }

    const middle = parseInt(arr.length / 2) | 0;
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);
    const merge = (left, right) => {
        const result = [];
        let x = y = 0;

        while (x < left.length && y < right.length) {
            result.push((left[x] < right[y]) ? left[x++] : right[y++]);
        }

        return [...result, ...left.slice(x), ...right.slice(y)];
    }

    return merge(mergeSort(left), mergeSort(right));
}

const arr = [54, 26, 93, 17, 77, 31, 44, 55, 20];
const result = mergeSort(arr);
console.log(result);