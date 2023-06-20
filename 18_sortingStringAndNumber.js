const arrayNumber=[10,5,"a","b","h",11];
var stringArray=[];
var numberArray=[];

arrayNumber.forEach(element => {
   if (typeof(element)==="string") {
      stringArray.push(element);
      stringArray.sort();
   }
   if (typeof(element)==="number") {
      numberArray.push(element);  
      numberArray.sort((no1,no2) =>{
      return no1>no2 ? 1 : -1;   
      }); 
   }
   
});
console.log(`Given Array : ${arrayNumber}`);
console.log(`Number :${numberArray}`);
console.log(`Alphabetes :${stringArray}`);

