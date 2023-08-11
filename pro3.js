function shortmaker(array) {
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


  const array1 = shortmaker([2, 3]);
  console.log(array1);

  const array2 = shortmaker([4, 2]);
  console.log(array2);

  const array3= shortmaker([4, 4]);
  console.log(array3);

  const array4 = shortmaker([1, 2]);
  console.log(array4);

  const array5 = shortmaker([4, -2]);
  console.log(array5);




  

function shortmaker(array) {
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

const array6 = shortmaker([2, 3]);
console.log(array6);

const array7 = shortmaker([4, 2]);
console.log(array7);

const array8 = shortmaker([4, 4]);
console.log(array8);

const array9 = shortmaker([1, 2]);
console.log(array9);

const array10 = shortmaker([4, -2]);
console.log(array10);
