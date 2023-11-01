//Exercise # 6--------------------------------------------
//Realizar una función que realice el algoritmo de burbuja.
 //Entrada [3, 6, 12, 5, 100, 1 ]
//Salida [1, 3, 5, 6, 12, 100]
let numbers = [3, 6, 12, 5, 100, 1];
function bubbleSort(arr) {
  for (let j = 0; j < arr.length  -1; j++){
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
      }
    } 
  }return arr;
}



console.log(bubbleSort(numbers));