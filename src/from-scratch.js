const loop0UpTo10 = () => {
  for (let i=0; i<10; i++){
    console.log(i)
  }
};

// console.log("Question 1--------------------")
// loop0UpTo10()
const loop5to10 = () => {
  for (let i=5; i<11; i++){
    console.log(i)
  }
};
// console.log("Question 2--------------------")
// loop5to10()

// you do NOT need an if check
const loopEvenNumbersUpTo10 = () => {
  for (let i=0; i<10; i+=2){
    console.log(i)
  }
};

// console.log("Question 3--------------------")
// loopEvenNumbersUpTo10()

const countdown5to0 = () => {
  for (let i=5; i>=0; i--){
    console.log(i)
  }
};
// console.log("Question 4--------------------")
// countdown5to0()


const loopUpToNum = (num) => {
  for (let i = 0; i < num; i++){
    console.log(i)
  }
};
// console.log("Question 5--------------------")
// loopUpToNum(9)

const fizzbuzz = () => {
  for (let i = 1; i <= 100; i++){
    if (i%3===0 && i %5===0){
      console.log("fizzbuzz")
    }else if (i %3 ===0){
      console.log("fizz")
    }else if (i%5===0){
      console.log("buzz")
    }else{
      console.log(i)
    }
  }
};

console.log("Question 10--------------------")


module.exports = {
  loop0UpTo10,
  loop5to10,
  loopEvenNumbersUpTo10,
  countdown5to0,
  loopUpToNum,
  fizzbuzz,
};
