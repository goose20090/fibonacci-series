function fibonacci(num) {


  // First two numbers are unique
  let fibArr = [0, 1]

  if (num <= 1){
    return fibArr[num]
  }

  // subsequent numbers are predictable

  for (let i = 2; i <= num; i ++){

    fibArr.push(fibArr[i-1] + fibArr[i-2])
    
  }

  return fibArr[num]

}



if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));
}

module.exports = fibonacci;

// Please add your pseudocode to this file
// And a written explanation of your solution

