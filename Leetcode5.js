//Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.

//The returned array should be created such that returnedArray[i] = fn(arr[i], i).

const array=[1,2,3];




const map=function(arr, fn) {
    let result=[]
    for(let i=0;i<arr.length; i++){
      result.push(fn(array[i]))
    }
    return result
};

const plusOne=function(n){
  return n*2
}


let transformed=map(array,plusOne)
console.log(transformed)