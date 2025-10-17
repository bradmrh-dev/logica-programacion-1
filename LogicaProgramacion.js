// Solicitar los tres números por prompt
let num1 = parseFloat(prompt("Ingresa el primer número:"));
let num2 = parseFloat(prompt("Ingresa el segundo número:"));
let num3 = parseFloat(prompt("Ingresa el tercer número:"));

// Verificar si los tres números son iguales
if (num1 === num2 && num2 === num3) {
    console.log("Los tres números son iguales:", num1, num2, num3);
} else {
    // Guardar los números en un arreglo
    let numeros = [num1, num2, num3];

    // Ordenar de menor a mayor y [...numeros] para no modificar el arreglo original
    let menorAMayor = [...numeros].sort((a, b) => a - b);

    // Ordenar de mayor a menor
    let mayorAMenor = [...numeros].sort((a, b) => b - a);

    // Imprimir resultados
    console.log("Ordenados de menor a mayor:", menorAMayor.join(", "));
    console.log("Ordenados de mayor a menor:", mayorAMenor.join(", "));

    // Identificar mayor, medio y menor
    let menor = menorAMayor[0];
    let medio = menorAMayor[1];
    let mayor = menorAMayor[2];

    console.log("Mayor:", mayor);
    console.log("Centro:", medio);
    console.log("Menor:", menor);
}
