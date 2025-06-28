//Easy
//Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.



const createCounter = function(init) {
  let count=init
    return {
      increment:function(){
        count+=1
        return count
      },
      decrement:function(){
        count-=1
       return count
     },
     reset:function(){
    //   count=init
       return init
    },
  }
};

const counter = createCounter(5)
console.log(counter.increment()); // 6
console.log(counter.reset()); // 5
console.log(counter.decrement()); // 4