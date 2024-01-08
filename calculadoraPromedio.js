let nombre = prompt("Ingrese su nombre");
let Materia = prompt("nombre de la materia");

let notaA, notaB, notaC;

while (true) {
  notaA = parseFloat(prompt("Ingresa la primera nota (0-10):"));
  if (!isNaN(notaA) && notaA >= 0 && notaA <= 10) {
    break;
  }
}

while (true) {
  notaB = parseFloat(prompt("Ingresa la segunda nota (0-10):"));
  if (!isNaN(notaB) && notaB >= 0 && notaB <= 10) {
    break;
  }
}

while (true) {
  notaC = parseFloat(prompt("Ingresa la tercera nota (0-10):"));
  if (!isNaN(notaC) && notaC >= 0 && notaC <= 10) {
    break;
  }
}

console.log(`Notas ingresadas: ${notaA}, ${notaB}, ${notaC}`);

let promedio = (notaA + notaB + notaC) / 3;

if (promedio >= 7) {
  alert(nombre + ", ¡felicidades! Has aprobado con un promedio de " + promedio);
} else {
  alert(
    nombre +
      ", gracias por tu esfuerzo. Nos vemos pronto en clase. El promedio obtenido es " +
      promedio
  );
}
console.log(`Promedio: ${promedio}`);
