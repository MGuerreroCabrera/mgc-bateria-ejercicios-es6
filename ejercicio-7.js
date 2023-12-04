// 7.1 Dado el siguiente array, haz una suma de todos las notas de los examenes de 
// los alumnos usando la función .reduce().

const exams = [
    {name: 'Yuyu Cabeza Crack', score: 5}, 
    {name: 'Maria Aranda Jimenez', score: 1}, 
    {name: 'Cristóbal Martínez Lorenzo', score: 6}, 
    {name: 'Mercedez Regrera Brito', score: 7},
    {name: 'Pamela Anderson', score: 3},
    {name: 'Enrique Perez Lijó', score: 6},
    {name: 'Pedro Benitez Pacheco', score: 8},
    {name: 'Ayumi Hamasaki', score: 4},
    {name: 'Robert Kiyosaki', score: 2},
    {name: 'Keanu Reeves', score: 10}
];

const sum = exams.reduce((acc, currentScore) => acc + currentScore.score, 0);
// console.log(sum);

// 7.2 Dado el mismo array, haz una suma de todos las notas de los examenes de los 
// alumnos que esten aprobados usando la función .reduce().

// Utilizamos el método reduce para sumar las notas mayores que 5
const sumPassed = exams.reduce((acc, currentScore) => {
    // Verificamos si la nota es mayor o igual que 5 antes de sumar
    if (currentScore.score >= 5) {
      return acc + currentScore.score;
    } else {
      return acc;
    }
  }, 0);
  
console.log('La suma de las notas mayores o iguales a 5 es:', sumPassed);

// 7.3 Dado el mismo array, haz la media de las notas de todos los examenes .reduce().

const average = exams.reduce((acc, currentScore) => acc += currentScore.score / exams.length, 0);

console.log("La media de todos los exámenes es: ", average.toFixed(2));