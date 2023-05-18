// implicit conversion to string
//numeric string used with '+' gives string type
let result;
result='3'+2;
console.log(result); //32

result='3'+true;
console.log(result);//3true

result='3'+undefined;
console.log(result); //3undefind

result='3'+null;
console.log(result);//3null


//implicit boolean conversion to number
//if boolean is used true=1 and false=0
result='4'-true;
console.log(result);//3     true value is 1  4-1=3

result=4+true;
console.log(result);//5    4+1=5

result=4+false;
console.log(result);//4   4+0=4

//implicit String conversion to Number
//numeric string used with -,/,* results number type
result='4'-'2';
console.log(result);//2         4-2=2    

result='4'-2;
console.log(result);//2          4-2=2

result='4'*2;
console.log(result);//8          4*2=8

result='4'/2;
console.log(result);//2        4/2=2

//undefind used with number boolean or null given NaN
result=4+undefined;
console.log(result);//NaN

result=4-undefined;
console.log(result);//NaN

result=true+undefined;
console.log(result);//NaN

result=null+undefined;
console.log(result);//NaN

//Explicit Conversion: convert number string and boolean values to number in that case we can use Number();
//String to number

result=Number('334');
console.log(result);//334 type  number

result=Number('324e-1');
console.log(result);//32.4

//boolean to number
result=Number(true);
console.log(result);//1

result=Number(false);
console.log(result);//0

//if string as an invalid number the result will be NaN

result=Number('hello');
console.log(result);//NaN

result=Number(undefined);
console.log(result);//NaN

result=Number(NaN);
console.log(result);//NaN

//Explicit conversion: string to number using + operator
var numberInString="100";
console.log(typeof numberInString); //string

var myNumber=+numberInString;
console.log(typeof myNumber); //number

//Explicit conversion: number to string data type conversion using toString()method
var myNumber=100;
console.log(typeof myNumber);

var afterConversion=myNumber.toString();
console.log(typeof afterConversion);
