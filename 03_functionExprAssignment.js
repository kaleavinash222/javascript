console.log(`1.Write a function expression to get squre of the number ex-->5,6,25,100.`);
var functiomExpression=function squreExpression(a) {
    var result=a*a;
    return result;

}
var result=functiomExpression(5);
console.log(`Squre of 5 is : ${result}`);
var result1=functiomExpression(6);
console.log(`Squre of 6 is : ${result1}`);
var result3=functiomExpression(25);
console.log(`Squre of 25 is: ${result3}`);
var result4=functiomExpression(100);
console.log(`Squre of 100 is : ${result4}`);
console.log("");

console.log(`2.cheack and log type of function `);
console.log(`  TypeOf function : ${typeof functiomExpression}`);
console.log("");

console.log(`4.Write a Function Expression two argu and should swap the passed values 
  and log on consol before swap and after swap values inside function itself`);
  console.log("");

var swapfunctionExpression=function swapTwoValues(value1,value2) {

    console.log(`  Before swapping value1 : ${value1}        value2 : ${value2}` );

    temp=value1;
    value1=value2;
    value2=temp;

    console.log(`  After swapping value1 = ${value1}         value2 = ${value2}`);
console.log("");
    
}
swapfunctionExpression("virat","Anushka");
swapfunctionExpression(1000,2000);


var stringValues=function stringFunctionExpression() {
    console.log(`5.write a FE which can perform steps for string "JS the most popular language of internet"`);
    var givenString="JS the most popular language of internet";
    console.log(`  given String : ${givenString}`);

    var stringLength=givenString.length;
    console.log(`  A.find the total char available in the string.`);
    console.log(`  Total char is : ${stringLength}`);
    console.log("");

    
    
}
stringValues();


