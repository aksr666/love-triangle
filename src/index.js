/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = getLoveTrianglesCount = preferences => preferences.filter((value, index, array) => { 
  let a = value; 
  let b = array[a - 1]; 
  let c = array[b - 1]
  return c == index + 1 && a !== b && b !== c;
}).length / 3;
