/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports=getLoveTrianglesCount=preferences=>preferences.filter((value,index,array)=>array[array[value-1]-1]==index+1).length/3;
