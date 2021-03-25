function breakOut(array, changeValue, stopValue) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === stopValue) {
      break;
    } else {
      array[i] = changeValue;
    }
  }
  return array;
}

function keepGoing(array, changeValue, skipValue) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === skipValue) {
      continue;
    } else {
      array[i] = changeValue;
    }
  }
  return array;
}

function findBy(array, findFn) {
  for (let i = 0; i < array.length; i++) {
    if (findFn(array[i] === false) {
      return null;
    } else {
      return array[i];
    }
}

function findFn(array, index, value) {
  let result = find(array, (value) => array[index] === value);
  return result;
}
