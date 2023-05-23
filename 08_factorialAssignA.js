function factorialOfNumber(num) {
    let factorial=1;
    
    if (num==null || isNaN==num ) {
        return `Invalid Number  : ${num}`;
    } 
  
    else {
        for (let index = num; index >=1; index--) {
            factorial= factorial*index;
       }
       return `factorial of ${num}  : ${factorial}`;
    }   
}

let factoNumber5=factorialOfNumber(5);
console.log(factoNumber5);
let factoNumber3=factorialOfNumber(3);
 console.log(factoNumber3);

var factoNumberNull= factorialOfNumber(null);
console.log(factoNumberNull);

var factoNumber8= factorialOfNumber(8);
console.log(factoNumber8);

var factoNumberUndefind= factorialOfNumber(undefined);
console.log(factoNumberUndefind);

var factoNumber9= factorialOfNumber(9);
console.log(factoNumber9);

var factoNumber0= factorialOfNumber(0);
console.log(factoNumber0);
