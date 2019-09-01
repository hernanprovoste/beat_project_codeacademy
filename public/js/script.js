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

let toggleDrum = (arr, index) => {
  const drum = getDrumArrayByName(drumArrayName);
  if (!drum || index > 15 || index < 0) {
    return;
  }
  drum[index] = !drum[index];
}