
//Given an integer array nums, a reducer function fn, and an initial value init, return the final result obtained by executing the fn function on each element of the array, sequentially, passing in the return value from the calculation on the preceding element.


const array=[1,2,5];

const reduce=(arr,fn,init=0)=>{
  let finalResult=init
   for(let i=0;i<arr.length;i++){
    
    finalResult= fn(finalResult,arr[i])
  }
//  console.log(finalResult)
 return finalResult
}

const func=(accu,curr)=>{
  return accu+curr
}

console.log(reduce(array,func))