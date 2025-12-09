var arr = [64, 34, 25, 12, 22, 11, 90];

console.log("Original array:", arr);

for (var i = 0; i < arr.length - 1; i++) {
    var min_idx = i;
    for (var j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[min_idx]) {
            min_idx = j;
        }
    }
    // Swap arr[i] and arr[min_idx]
    var temp = arr[i];
    arr[i] = arr[min_idx];
    arr[min_idx] = temp;
}

console.log("Sorted array:", arr); 