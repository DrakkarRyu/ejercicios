function insertionSort(data, gap) {
  for (let i = gap; i < data.length; i++) {
    let position = i;
    while (position >= gap && data[position] < data[position - gap]) {
      const temp = data[position - gap];
      data[position - gap] = data[position];
      data[position] = temp;
      position = position - gap;
    }
  }
}

const items = [54, 26, 93, 17, 77, 31, 44, 55, 20];
insertionSort(items, 3);
console.log(items);
