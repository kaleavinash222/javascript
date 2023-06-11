const arrayNumber=[20,11,40,25,37,49,9,90,60,2,19];
console.log(`1.find out all the number of >50.`);
const greaterThan = arrayNumber.filter( (element)=> {
    return element>50;
} );
console.log(greaterThan);

console.log(``);
console.log(`2.find the all even number and log on consol.`);
const evenNumber = arrayNumber.filter( (element)=> {
    return element%2==0;
} );
console.log(evenNumber);

console.log(``);
console.log(`3.find the all odd number and log on consol.`);
const oddNumber = arrayNumber.filter( (element)=> {
    return element%2!=0;
} );
console.log(oddNumber);

console.log(``);
console.log(`3.find the all odd number and log on consol.`);

const multipleOfFive = arrayNumber.filter( (element)=> {
    return element*5;
} );
console.log(multipleOfFive);
