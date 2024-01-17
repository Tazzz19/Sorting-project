function insertionSort(arr) {
    const n = arr.length;
  
    for (let i = 1; i < n; i++) {
      const key = arr[i];
      let j = i - 1;
      while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j--;
      }
  
      arr[j + 1] = key;
    }
  
    return arr;
  }
  
  const arrayToSort = [5, 2, 4, 6, 1, 3];
  const sortedArray = insertionSort(arrayToSort);
  console.log(sortedArray);
  