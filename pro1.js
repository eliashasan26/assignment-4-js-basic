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

