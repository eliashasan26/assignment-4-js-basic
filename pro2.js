// Problem 2

function matchFinder(string1, string2) {
  if (typeof string1 !== 'string' || typeof string2 !== 'string') {
    return "First, solve the problem. Then, write the code. – John Johnson!";
  }

  if (string1.includes(string2)) {
    return true;
  } else {
    return false;
  }
}

const sample1 = matchFinder("John doe", "doe");
console.log(sample1); 

const sample2 = matchFinder("javascript", "code");
console.log(sample2);

const sample3 = matchFinder("Peter parkar", "pen");
console.log(sample3);

const sample4 = matchFinder("Peter parkar", "pet");
console.log(sample4);

const sample5 = matchFinder("John doe", 123);
console.log(sample5);          
