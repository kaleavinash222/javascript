var myNumber=0=='';
console.log(myNumber);//true

myNumber=0=='0';
console.log(myNumber);//true

myNumber=0==false;
console.log(myNumber);//true

myNumber=null==undefined;
console.log(myNumber);//true

myNumber=1==[1];
console.log(myNumber);//true

myNumber=1==true;
console.log(myNumber);//true

myNumber=='1';
console.log(myNumber);//true

