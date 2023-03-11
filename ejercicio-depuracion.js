/* Crea un nuevo fichero JS que contenga las siguientes líneas
- Una función que admita un parámetro "num", y devuelva una lista con esa cantidad de números de la secuencia de Fibonacci (Por ejemplo: num = 6 => Resultado [1, 1, 2, 3, 5, 8])
- Ejecuta la depuración de VSCode para visualizar la ejecución de la función */
function fibonacci(num) {
    var a = 1, b = 0, temp;
    var array = [];
    while (num > 0){
        temp = a;
        a = a + b;
        b = temp;
        num--;
        array.push(b);
    }
    return array;
}
console.log(fibonacci(6)); // [1, 1, 2, 3, 5, 8]