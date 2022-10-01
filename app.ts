const sum = (arr: number[]): number => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};

const find_pivot = (arr: number[], length: number): number => {
  let pivot = 0;
  for (let i = 0; i < length; i++) {
    if (sum(arr.slice(0, i)) === sum(arr.slice(i + 1, length))) {
      pivot = i;
    } else {
      pivot = -1;
    }
  }
  return pivot;
};
