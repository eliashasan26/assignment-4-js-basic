// function canPay(changeArray, totalDue) {
//     const sum = changeArray.reduce((acc, curr) => acc + curr, 0);
//     if (sum >= totalDue) {
//         return true;
//     } 
//     else if (sum < totalDue) {
//         return false;
//     } 
//     else if (changeArray.length === 0) {
//         return "Your change array is empty.";
//     }
// }

// // Example usages:
// const totalTk1 = canPay([1, 2, 5], 10);
// console.log(totalTk1);

// const totalTk2 = canPay([1, 5, 5], 10)
// console.log(totalTk2);  

// const totalTk3 = canPay([], 5);
// console.log("Your change array is empty", totalTk3);




// function canPay(changeArray, totalDue) {
//     if (changeArray.length === 0) {
//       return "The change array is empty.";
//     }
  
//     const totalChange = changeArray.reduce((sum, current) => sum + current, 0);
  
//     if (totalChange >= totalDue) {
//       return true;
//     } 
//     else {
//       return false;
//     }
//   }
  
//   const changeArray1 = [1, 2, 5];
//   const totalDue1 = 10;
//   const result1 = canPay(changeArray1, totalDue1);
//   console.log(result1);
  
//   const changeArray2 = [1, 5, 5];
//   const totalDue2 = 10;
//   const result2 = canPay(changeArray2, totalDue2);
//   console.log(result2);

//   const changeArray3 = [[], 5];
//   const totalDue3 = 10;
//   const result3 = canPay(changeArray2, totalDue2);
//   console.log(result3);

//   // const totalTk3 = canPay([], 5);
// // console.log("Your change array is empty", totalTk3);
  


// function canPay(changeArray, totalDue) {
//     const sum = changeArray.reduce((acc, curr) => acc + curr, 0);
//     if (sum >= totalDue) {
//         return true;
//     } 
//     else if (sum < totalDue) {
//         return false;
//     } 
// }

// // Example usages:
// const totalTk1 = canPay([1, 2, 5], 10);
// console.log(totalTk1);

// const totalTk2 = canPay([1, 5, 5], 10)
// console.log(totalTk2);  

// // জাভাস্ক্রিপ্টে সবসময় শেষ ফাংশনটা গ্রহণ করে। তাই উপরের ফাংশন দুইটি একসাথে দেবার পর কাজ করছে না। তাই এটি আলাদা করা হয়েছে এবং এটা কমেন্ট করলে উপরের ফাংশন দুইটি undefined মুছে যাবে।

// function canPay(changeArray){
//   if (changeArray.length === 0) {
//     return "Your change array is empty.";
// }
// }

// const totalTk3 = canPay([], 5);
// console.log(totalTk3);