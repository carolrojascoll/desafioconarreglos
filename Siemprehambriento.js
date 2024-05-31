/* CAROLINA ROJAS COLLANTE */
//siempreHambriento
function siempreHambriento(arr) {
    let hayComida = false;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "comida") {
            console.log("delicioso");
            hayComida = true;
        }
    }
    if (!hayComida) {
        console.log("Tengo hambre");
    }
}

siempreHambriento([3.14, "comida", "pastel", true, "comida"]);
//  muestra "delicioso, delicioso"
siempreHambriento([4, 1, 5, 7, 2]);
//  muestra "Tengo hambre"
