/* CAROLINA ROJAS COLLANTE */
//Arreglo invertido
function invertido(arr) {
    for (let i = 0; i < arr.length / 2; i++) {
        let temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
    return arr;
}

var result = invertido(["a", "b", "c", "d", "e"]);
console.log(result);