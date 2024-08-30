// You get an array of numbers, return the sum of all of the positives ones.

function positiveSum(arr) {
    let sum = 0
    for(i = 0; i < arr.length; i++){
      if (arr[i] > 0){
        sum += arr [i]
      }
    }
    return sum
}
  
let arr = [1, -4, 7, 12]
result = positiveSum(arr)
console.log(result)