function selectionSort(array) {
    let min;
    for (let i = 0; i < array.length; i++) {
        min = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[min]) min = j;
        }
        if (min !== i) {
            let temp = array[i];
            array[i] = array[min];
            array[min] = temp;
        }
    }
    return array;
}



let myArray = [4, 2, 6, 5, 1, 3];
selectionSort(myArray);
console.log(myArray);


/*
    EXPECTED OUTPUT:
    ----------------
    [ 1, 2, 3, 4, 5, 6 ]

*/