
function fabinoNumber(num) {
    
 var num1=0;
 var num2=1;
var result;
console.log(`1 to 10 fibonacci Series Number.`);
for (let i =1; i<=num; i++) {
     result=num1+num2;
     console.log(result);

    num1=num2;
    num2=result;
    }
 }
fabinoNumber(10);