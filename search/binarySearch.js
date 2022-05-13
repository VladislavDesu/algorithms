const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let count = 0;

const binarySearch = (array, item) => {
    let start = 0;
    let end = array.length;
    let middle;
    let found = false;
    let position = -1;

    while (!found && start <= end) {
        count += 1;
        middle = Math.floor((start + end) / 2);

        if (array[middle] === item) {
            found = true;
            position = middle;
            return position;
        }

        if (item < array[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
    }

    return position;
};

const recursiveBinarySearch = (array, item, start, end) => {
    count += 1;

    let middle = Math.floor((start + end) / 2);
    if (array[middle] === item)  return middle

    if (item < array[middle]) {
        return recursiveBinarySearch(array, item, 0, middle - 1);
    } else {
        return recursiveBinarySearch(array, item, middle + 1, end);
    }
};

const item = 0;

console.log(binarySearch(array, item));
console.log(recursiveBinarySearch(array, item, 0, array.length));
console.log(count);