console.log(`1.No argument & no return value.`);
let functionNoarg = ()=>{
    console.log(`"Good Morning, Today is Monday"`);
}
functionNoarg();


console.log(``);
console.log(`2. 3 argument and no return value.`);

let functionThreeArg=(num1,num2,num3=1)=>{
    let result=num1*num2*num3;
    console.log(`Multiplication of three number -> ${num1},${num2},${num3} : ${result}`);
}
functionThreeArg(5,5,2);
functionThreeArg(10,4);

console.log(``);
console.log(`3.5 Argument and return value.`);
let functionFiveArg=(num1,num2,num3,num4,num5)=>{
    let result=num1+num2+num3+num4+num5;
    return result;
}
let result=functionFiveArg(100,100,200,349,756);
console.log(`Addition of five no : ${result}`);
let resultString=functionFiveArg("I am ","learning ","ES6 ","feutures ","in depth.");
console.log(`Concat five String : ${resultString}`);
