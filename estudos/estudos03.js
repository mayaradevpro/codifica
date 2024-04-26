function binarySearch(arr, target) {
    arr.sort();
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid; 
        } else if (arr[mid] < target) {
            left = mid + 1; 
        } else {
            right = mid - 1; 
        }
    }
    return -1; 
}

const arr = [4,11,2,192,1,22,49,33];
const target = 33;
const result = binarySearch(arr, target);
if (result !== -1) {
    console.log(`O elemento ${target} foi encontrado`);
} else {
    console.log(`O elemento ${target} não foi encontrado no array.`);
}