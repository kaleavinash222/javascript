function stringBasics() {
    console.log("My dream company name is Google");
}
stringBasics();

var hobby1="Playing Criket";
var hobby2="Swimming";
var hobby3="Editing";
console.log("My hobby1 = ",hobby1," , My hobby2 = ",hobby2," , My hobby3 = ",hobby3);
console.log("______________________________________________");

var totalhobby1char=hobby1.length;
console.log("Total Hobby1 char is = ",totalhobby1char);

var totalhobby2char=hobby2.length;
console.log("Total Hobby2 char is = ",totalhobby2char);

var totalHobby3Char=hobby3.length;
console.log("Total Hobby3 Char is = ",totalHobby3Char);

var myName = "Elon Musk";
var result = myName.startsWith("E");
console.log(` Is ${myName} starts with character E: ${result}`);

var result = myName.startsWith("Elon");
console.log(` Is ${myName} starts with character "Elon" : ${result}`);

var result = myName.startsWith("elon");
console.log(` Is ${myName} starts with character "elon" : ${result}`);


var myName = "Elon Musk";
var result = myName.endsWith("k");
console.log(` Is ${myName} ends with character "k" : ${result}`);

var myName = "Elon Musk";
var result = myName.endsWith("Musk");
console.log(` Is ${myName} ends with character "Musk" : ${result}`);

var myName = "Elon Musk";
var result = myName.endsWith("b");
console.log(` Is ${myName} ends with character "b" : ${result}`);



