const createEmptyDrumArray = () => new Array(16).fill(false);
// Drum Arrays
let kicks = createEmptyDrumArray();
let snares = createEmptyDrumArray();
let hiHats = createEmptyDrumArray();
let rideCymbals = createEmptyDrumArray();

// Toma el nombre de cada uno de los arrays
const getDrumArrayByName = (name) => {
  switch (name) {
    case 'kicks':
      return kicks;
    case 'snares':
      return snares;
    case 'hiHats':
      return hiHats;
    case 'rideCymbals':
      return rideCymbals;
    default:
      return;
  }
}
// Toma el valor del array y del index para poder ver cual es.
let toggleDrum = (arr, index) => {
  const drum = getDrumArrayByName(arr);
  if (!drum || index > 15 || index < 0) {
    return;
  }
  drum[index] = !drum[index];
}

// Toma el valor del array y lo setea con un valor falso.
const clear = (arr) => {
  const drum = getDrumArrayByName(arr);
  if (drum) {
    drum.fill(false);
  }
}

// Toma el valor del array e invierte su valor de entrada
const invert = (arr) => {
  const drum = getDrumArrayByName(arr);
  if (!drum) {
    return;
  }
  for (let i = 0; i < drum.length; i++) {
    drum[i] = !drum[i];
  }
}

