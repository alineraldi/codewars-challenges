// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

// Array can contain numbers or strings. X can be either.

// Return true if the array contains the value, false if not.

function check(a, x) {
    for (i = 0; i < a.length; i++){
      if (a[i] === x){
        return true
      }
    }
    return false
  }
let a = [3, 4, 5, 6]
let x = 4
result = check(a, x)
console.log(result)