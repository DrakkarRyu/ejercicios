console.time('loop');

function mergeTwoArrays(arr1, arr2) {
    let combinatedArrays = [];
    while (arr1.length && arr2.length) {
        //finding my first
        let firstElement
        if (arr1[0] < arr2[0]) {
            firstElement = arr1.shift();
        } else {
            firstElement = arr2.shift();
        }
        combinatedArrays.push(firstElement);
    }
    combinatedArrays = combinatedArrays.concat(arr1).concat(arr2);
    return combinatedArrays;
}
console.timeEnd('loop');

const arr1 = [2, 5, 9, 21, 23];
const arr2 = [3, 6, 11];
const result = mergeTwoArrays(arr1, arr2);
console.log(result);

// segunda forma de resolverlo 
/*
function mergeArrays(array1, array2) {
    let newArray = [];
    let i = 0;
    let j = 0;
    let k = 0;

    while (i < array1.length && j < array2.length) {
        if (array1[i] < array2[j]) {
            newArray[k] = array1[i];
            i++;
        } else {
            newArray[k] = array2[j];
            j++;
        }
        k++;
    }

    // arreglo 1 (i)
    while (i < array1.length) {
        newArray[k] = array1[i];
        i++;
        k++;
    }

    // arreglo 2 (j)
    while (j < array2.length) {
        newArray[k] = array1[j];
        j++;
        k++;
    }
    return newArray;
}

*/