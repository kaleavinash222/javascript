// ====================================================================================================
console.log(`1.find the gratest number aamongst two number`);
var greaterNumber=function(num1,num2){

    console.log(`  Number : ${num1} , ${num2}`);
    var result= num1>=num2 ? `${num1} : is greater`:`${num2} : is greater`;
    console.log(`->`,result);
}
greaterNumber(10,-10);
greaterNumber(800,899);

// ====================================================================================================
console.log("");
console.log(`2.Cheack -> 29,44,0,101`);
   var isEvenOrOddNum=function(num) {
   var result= num%2==0 ? `${num} : is Even Number` : `${num} : is Odd Number`;
   return result;    
}
var result=isEvenOrOddNum(29);
console.log(`->`,result);
var result=isEvenOrOddNum(44);
console.log(`->`,result);
var result=isEvenOrOddNum(0);
console.log(`->`,result);
var result=isEvenOrOddNum(101);
console.log(`->`,result);

// ====================================================================================================
console.log("");
console.log(`3.Cheak -> which word has even or odd length "JavaScript","developer","Google"`);
var wordLength=function(value){
   var stringlength=value.length;
   console.log(`"${value}"  its length is -> ${stringlength}`);
   var result=stringlength%2==0 ? `${stringlength} : is Even Number`:`${stringlength} : is Odd Number`;
   return result;
   

}
var result=wordLength("JavaScript");
console.log(result);
console.log("");

var result=wordLength("Developer");
console.log(result);
console.log("");

var result=wordLength("Google");
console.log(result);
// ====================================================================================================
