/* CAROLINA ROJAS COLLANTE */
//Mejor que el promedio
function promedio(arr) {
    var sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    var average = sum / arr.length;
    var count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > average) {
            count++;
        }
    }
    return count;
}

var result = promedio([6, 8, 3, 10, -2, 5, 9]);
console.log(result); 