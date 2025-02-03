// Given an array of integers, return a new array with each value doubled.

function maps(x){
    let result = []
    for(i = 0; i < x.length; i++){
      result.push(x[i] * 2)
    }
    return result
  }
  
  let x = [1, 2, 3]
  doubleX = maps(x)
  console.log(doubleX)