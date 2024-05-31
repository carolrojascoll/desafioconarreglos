/* CAROLINA ROJAS COLLANTE */
//Arreglo de Fibonacci
function Fibonacci(n) {
    var fibArr = [0, 1];
    while (fibArr.length < n) {
        let nextFib = fibArr[fibArr.length - 1] + fibArr[fibArr.length - 2];
        fibArr.push(nextFib);
    }
    return fibArr;
}

var result = Fibonacci(10);
console.log(result); 