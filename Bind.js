
// How to use bind 

// some minor examples how bind works ....

const user1 = {
  name: "Zainab",
  age:22,
  time:2006,
  book:'Novels',
};

function greet() {
  alert(`Hello my name is ${this.name} my age is ${this.age} and born on ${this.time}, I like reading ${this.book}`)
}
const testing=greet.bind(user1);
testing()
//Hello my name is Zainab my age is 22