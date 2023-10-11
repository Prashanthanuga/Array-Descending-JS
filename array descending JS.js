function sortArrayDescending(arr) {
    return arr.sort((a, b) => b - a);
}

// Example usage:
const myArray = [5, 2, 8, 1, 9, 4];
const sortedArray = sortArrayDescending(myArray);
console.log(sortedArray);