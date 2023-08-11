// Problem-1

function cubeNumber(number) {
    let result = 1;
    for (let i = 0; i < 3; i++) {
      result *= number;
    }
    return "First, solve the problem. Then, write the code. – John Johnson! "+ result;
  }
  
  const inputNumber = 5;
  const cubeResult = cubeNumber(inputNumber);
  console.log(cubeResult);
  
  
  
  
  function cubeNumber(number) {
    const cube = Math.pow(number, 3);
    return "Be thine own palace, or the world's thy jail. - John Donne! " + cube;
  }
  
  const number = 5;
  const result = cubeNumber(number);
  console.log(result);





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






//   Problem 3

function shortMaker(array) {
    if (array.length !== 2 || !Array.isArray(array)) {
      return "Invalid input!";
    }

    const [num1, num2] = array;

    if (num1 < 0 || num2 < 0) {
      return "Invalid input!";
    }

    if (num1 === num2) {
      return "equal";
    }

    const sortedArray = [num1, num2].sort((a, b) => b - a);
    return sortedArray;
  }


  const array1 = shortMaker([2, 3]);
  console.log(array1);

  const array2 = shortMaker([4, 2]);
  console.log(array2);

  const array3= shortMaker([4, 4]);
  console.log(array3);

  const array4 = shortMaker([1, 2]);
  console.log(array4);

  const array5 = shortMaker([4, -2]);
  console.log(array5);




  

function shortMaker(array) {
  const num1 = array[0];
  const num2 = array[1];

  if (num1 < 0 || num2 < 0) {
    return "invalid input!";
  }


  else if (num1 === num2) {
    return 'equal';
  }

  else {
    if (num1 > num2) {
      return [num1, num2];
    }
    else {
      return [num2, num1];
    };
  }
}

const array6 = shortMaker([2, 3]);
console.log(array6);

const array7 = shortMaker([4, 2]);
console.log(array7);

const array8 = shortMaker([4, 4]);
console.log(array8);

const array9 = shortMaker([1, 2]);
console.log(array9);

const array10 = shortMaker([4, -2]);
console.log(array10);




// Problem 4

function findAddress(obj) {
    if (typeof obj !== "object") {
        return "Please, provide me a valid object!";
    }
    else {
        const street = obj.street || "No Information";
        const house = obj.house || "No Information";
        const society = obj.society || "No Information";
        return `${street}, ${house}, ${society}`;
    }


}


const obj0 = {
    street: 10,
    house: "15A",
    society: "Earth Perfect",
}
const output0 = findAddress(obj0);
console.log(output0);






function findAddress(obj) {
    if (typeof obj !== "object") {
        return "Please, provide me a valid object!";
    }
    else {
        const street = obj.street || "No Information";
        const house = obj.house || "_";
        const society = obj.society || "No Information";
        return `${street}, ${house}, ${society}`;
    }
}


const obj1 = {
    street: 10,
    society: "Earth Perfect",
}
const output1 = findAddress(obj1);
console.log(output1);





function findAddress(obj) {
    if (typeof obj !== "object") {
        return "Please, provide me a valid object!";
    }
    else {
        const street = obj.street || "No Information";
        const house = obj.house || "_";
        const society = obj.society || "_";
        return `${street}, ${house}, ${society}`;
    }
}


const obj2 = {
    street: 10,
}
const output2 = findAddress(obj2);
console.log(output2);


// Second Type Method of Previous Part

function findAddress(obj) {
    if (typeof obj !== "object") {
        return "Please, provide me a valid object!";
    }
    else {
        const street = obj.street || "No Information";
        const house = obj.house || "_";
        const society = obj.society || "_";
        console.log (street, house, society);
    }

}


const obj3 = {
    street: 10,
}
const output3 = findAddress(obj3);
console.log(output3);












function findAddress(obj) {
    const output = [obj.street, obj.house, obj.society];
    return output;
  }

  // Example usage:
  const input4 = { street: 10, house: "15A", society: "Earth Perfect" };
  const output4 = findAddress(input4);
  console.log(output4);



function findAddress(obj) {
    const output = [obj.street, obj.house, obj.society];
    return output;
  }

  // Example usage:
  const input5 = { street: 10, house: "-", society: "Earth Perfect" };
  const output5 = findAddress(input5);
  console.log(output5);



function findAddress(obj) {
    const output = [obj.street, obj.house, obj.society];
    return output;
}

// Example usage:
const input6 = { street: 10, house: "-", society: "-" };
const output6 = findAddress(input6);
console.log(output6);






function findAddress(obj) {
    for (const property in obj) {
        console.log(`${obj[property]}`);
    }
}

const object7 = { street: 10, house: "15A", society: "Earth Perfect" };



findAddress(object);
function findAddress(obj) {
    for (const property in obj) {
        console.log(`${obj[property]}`);
    }
}

const object8 = { street: 10, house: "-", society: "Earth Perfect" };



findAddress(object);
function findAddress(obj) {
    for (const property in obj) {
        console.log(`${obj[property]}`);
    }
}

const object9 = { street: 10, house: "-", society: "-" };
findAddress(object);



// Problem 5

function canPay(changeArray, totalDue) {
    const sum = changeArray.reduce((acc, curr) => acc + curr, 0);
    if (sum >= totalDue) {
        return true;
    } 
    else if (sum < totalDue) {
        return false;
    } 
    else if (changeArray.length === 0) {
        return "Your change array is empty.";
    }
}

// Example usages:
const totalTk1 = canPay([1, 2, 5], 10);
console.log(totalTk1);

const totalTk2 = canPay([1, 5, 5], 10)
console.log(totalTk2);  

const totalTk3 = canPay([], 5);
console.log("Your change array is empty", totalTk3);




function canPay(changeArray, totalDue) {
    if (changeArray.length === 0) {
      return "The change array is empty.";
    }
  
    const totalChange = changeArray.reduce((sum, current) => sum + current, 0);
  
    if (totalChange >= totalDue) {
      return true;
    } 
    else {
      return false;
    }
  }
  
  const changeArray1 = [1, 2, 5];
  const totalDue1 = 10;
  const result1 = canPay(changeArray1, totalDue1);
  console.log(result1);
  
  const changeArray2 = [1, 5, 5];
  const totalDue2 = 10;
  const result2 = canPay(changeArray2, totalDue2);
  console.log(result2);

  const changeArray3 = [[], 5];
  const totalDue3 = 10;
  const result3 = canPay(changeArray2, totalDue2);
  console.log(result3);


  


function canPay(changeArray, totalDue) {
    const sum = changeArray.reduce((acc, curr) => acc + curr, 0);
    if (sum >= totalDue) {
        return true;
    } 
    else if (sum < totalDue) {
        return false;
    } 
}

// Example usages:
const totalTk4 = canPay([1, 2, 5], 10);
console.log(totalTk4);

const totalTk5 = canPay([1, 5, 5], 10)
console.log(totalTk5);  

// // জাভাস্ক্রিপ্টে সবসময় শেষ ফাংশনটা গ্রহণ করে। তাই উপরের ফাংশন দুইটি একসাথে দেবার পর কাজ করছে না। তাই এটি আলাদা করা হয়েছে এবং এটা কমেন্ট করলে উপরের ফাংশন দুইটি undefined মুছে যাবে।

function canPay(changeArray){
  if (changeArray.length === 0) {
    return "Your change array is empty.";
}
}

const totalTk6 = canPay([], 5);
console.log(totalTk6);