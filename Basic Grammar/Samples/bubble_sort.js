var arr = [64, 34, 25, 12, 22, 11, 90];

console.log("Original array:", arr);

for (var j = 0; j < arr.length - 1; j++) {
    for (var i = 0; i < arr.length - j - 1; i++) { // Optimized by skipping the last j elements
        if (arr[i] > arr[i + 1]) {
            // Swap arr[i] and arr[i+1]
            var temp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = temp;
        }
    }
}

console.log("Sorted array:", arr);