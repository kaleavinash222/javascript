
const arrayFruits=["Banana","Orange","Apple","Mango","WaterMelon"];

console.log(arrayFruits);
console.log(`1.Log the first and last element on consol.`);

let firstElement=arrayFruits.slice(0,1);
console.log(` First Element : ${firstElement}`);

let lastElement=arrayFruits.slice(arrayFruits.length-1);
console.log(` Last Element : ${lastElement}`);
console.log(``);


console.log(`2.Add element "Papaya" before element "banana".`);
arrayFruits.unshift("Papaya");
console.log(arrayFruits);
console.log(``);

console.log(`3.Remove "mango" from the array.`);
arrayFruits.splice(4,1);
console.log(arrayFruits);
console.log(``);

console.log(`4.Add element or insert element "Pineapple" at the last position.`);
arrayFruits.push("Pineapple");
console.log(arrayFruits);
console.log(``);

console.log(`5.insert and element-"Dragon fruit" before "water melon".`);
arrayFruits.splice(4,0,"Deagon fruit");
console.log(arrayFruits);
console.log(``);

console.log(`6.Replace an element "Orange" with "kivi".`);
arrayFruits.splice(2,1,"Kivi");
console.log(arrayFruits);
console.log(``);

console.log(`7.log the element starting from index 1 to 4`);
let oneToFour=arrayFruits.slice(1,5);
console.log(oneToFour);
console.log(``);

console.log(`8.only select last 3 elements`);
let lastThree=arrayFruits.slice(arrayFruits.length-3);
console.log(lastThree);


