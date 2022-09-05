let arr = [5, 8, 6, 1, 3, 7, 4, 6, 9];

function selectionSort(arr) {
  let n = arr.length;

  let min = i;
  for (let j = i + 1; j < n; j++) {
    if (arr[j] < arr[min]) {
      min = j;
    }
  }
  if (min != i) {
    let temp = arr[i];
    arr[i] = arr[min];
    arr[min] = temp;
  }
  return arr;
}
selectionSort(arr);
console.log(arr);
