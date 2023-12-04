// Usando la función anterior beneficiate de poder conocer el indice del array 
// para crear una función llamada removeItem que pasandole un array y un texto 
// como parametros (los mismos parametros que en el anterior ejercicio) llame a 
// la función anteriormente creada findArrayIndex y obten el indice para 
// posteriormente usar la función de javascript .splice() para eliminar el 
// elemento del array.

// Finalmente retorna el array.

// De nuevo haz varios ejemplos para practicar y comprueba que funcionan 
// correctamente.

const mainCharacters = [
    "Luke",
    "Leia",
    "Han Solo",
    "Chewbacca",
    "Rey",
    "Anakin",
    "Obi-Wan",
  ];
  
  let position = 0;
  
  const findArrayIndex = (array, texto) => array.indexOf(texto) + 1;
  
  position = findArrayIndex(mainCharacters, "Leia");
  
  position ? mainCharacters.splice(position - 1, 1) : console.log("No se ha encontrado ese elemento");

  console.log(mainCharacters);