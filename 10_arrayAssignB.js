const arrayNumber = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];

console.log(
  `1.finde the total element available or length and log on console.`
);
let arrayLength = arrayNumber.length;
console.log(`Total length of array : ${arrayLength}`);
console.log(``);

console.log(`2.log the first element and last element in array.`);
let firstElement = arrayNumber[0];
console.log(`First Element in array : ${firstElement}`);
let lastElement = arrayNumber.slice(arrayNumber.length - 1);
console.log(`Last Element in array : ${lastElement}`);
console.log(``);

console.log(`3.third last element using length property & log console.`);
let thirdLastElement = arrayNumber[arrayNumber.length - 3];
console.log(`Third Last Element : ${thirdLastElement}`);
console.log(``);

console.log(`4.find the all even number using for loop.`);
for (let index = 0; index <= arrayNumber.length; index++) {
  let char = arrayNumber[index];
  if (char % 2 == 0) {
    console.log(`Even number in array : ${char}`);
  }
}

console.log(``);
console.log(`5.find the all odd number in array.`);
for (let index = 0; index <= arrayNumber.length; index++) {
  let char = arrayNumber[index];
  if (char % 2 == 1) {
    console.log(`Odd number in array : ${char}`);
  }
}

console.log(``);
console.log(
  `6.find the all even position element from array sum it & log on consol.`
);
var sum = 0;
for (let index = 0; index < arrayNumber.length; index++) {
  if (index % 2 == 0) {
    let char = arrayNumber[index];
    sum = sum + char;
  }
}
console.log(`Even position element it's sum : ${sum}`);

console.log(``);
let sumTotal = 0;
console.log(
  `7.find the odd number positin element from array sum it & log console.`
);
for (let index = 0; index < arrayNumber.length; index++) {
  if (index % 2 != 0) {
    let char = arrayNumber[index];
    sumTotal = sumTotal + char;
  }
}
console.log(`Odd position element it sum : ${sumTotal}`);

console.log(``);
let sumChar = 0;
console.log(`8.find the sum of all element in array.`);
for (let index = 0; index < arrayNumber.length; index++) {
  let char = arrayNumber[index];
  sumChar = sumChar + char;
}
console.log(`Sum of all element in array : ${sumChar}`);

console.log(``);
console.log(`9.find the number which is multiple of 5.`);
for (let index = 0; index < arrayNumber.length; index++) {
  let char = arrayNumber[index];
  if (char % 5 == 0) {
    console.log(`number is multiple of 5 : ${char}`);
  }
}

console.log(``);
console.log(`10.is number 115 availble in arrayNumber?.`);
let available = arrayNumber.includes(115);
console.log(available);

console.log(``);
console.log(`11.is number 23 availble in arrayNumber?.`);
let available23 = arrayNumber.includes(23);
console.log(available23);

console.log(``);
console.log(`12.Insert number 55,66 before index 3.`);
arrayNumber.splice(3, 0, 55, 66);
console.log(arrayNumber);

console.log(``);
console.log(`13.delete 3 element starting from index 4.`);
arrayNumber.splice(4, 3);
console.log(arrayNumber);
