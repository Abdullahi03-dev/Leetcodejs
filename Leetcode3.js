


const expect=function (val){
  return {
    toBe:function(value){
    if(value===val){
      return true
    }else{
   return 'Error'
    }
  },
  notToBe:function(value){
    if(value===val){
     return 'Error'
    }else{
      return true
    }
  }
  }
  
    
  }
  


; // true
console.log(expect(5).toBe(null))
console.log(expect(5).notToBe(null))
//expect(5).notToBe(5); // throws "Equal"
 