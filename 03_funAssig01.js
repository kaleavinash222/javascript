function fun1(){
    console.log("fun1() No Argument Function");
}
fun1();
function fun2(){
    console.log("fun2() No Argument Function");
}
fun2();
console.log("___________________________________");

console.log("Using Arguments");
function personalDetails(firstName,lastName,collageName) {
    console.log("My Name is   : ",firstName," ",lastName);
    console.log("Collage Name : ",collageName);
}
personalDetails("Avinash","Kale","Balbhim collage");



console.log("___________________________________");

console.log("Using Two Aeguments");
function swapValueDude(arg1,arg2) {
    console.log("Before Swaping");
    console.log("Arg1 = ",arg1);
    console.log("Arg2 = ",arg2);

temp=arg1;
arg1=arg2;
arg2=temp;
console.log("After Swapping");
console.log("Arg1 = ",arg1);
console.log("Arg2 = ",arg2);
console.log("________________________________");

}
swapValueDude("Virat","Anushka");
swapValueDude(1000,2000);

function addThreeValues(a,b,c) {
    console.log("Argument With Addition");
   var result=a+b+c;
    console.log("Addition = ",result);
}
addThreeValues(10.23,600,40);
addThreeValues("Hello","Good","Morning");

//Using return value

function addition(num1, num2) {
    var result  = num1 + num2;// result = 300
    return result;
}
var returnValue = addition(100, 200);
console.log("Addition of number is: ", returnValue);
var returnResult = addition(890.400, 600.3456);
console.log("Addition of number is: ", returnResult);