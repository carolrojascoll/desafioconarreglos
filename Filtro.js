/* CAROLINA ROJAS COLLANTE */
//Filtro paso alto
function filtropaso(arr, cutoff) {
    var filteredArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > cutoff) {
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}

var result = filtropaso([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); 