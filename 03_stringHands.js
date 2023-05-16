function stringHandsOn() {
var givenString="  Hey you are doing good, keep it up   "; 
console.log("1.Print the string as it is on consol");
console.log("  String is : ",givenString);   
console.log("");

console.log("2.Calculate length of the string");
console.log("  Befire remove length is = ",givenString.length);
console.log("");

console.log("3.Remove the leading and traling extra spaces and its length");
var trimemedString=givenString.trim();
console.log("  After trim string : ",trimemedString);
console.log("  After remove string length is = ",trimemedString.length);
console.log("");

console.log("4.Print the total number extra spaces count that is removed in step 3");
var removeSpacesLength=givenString.length-trimemedString.length;
console.log("  removed spaces = ",removeSpacesLength);
console.log("");

console.log(`5.Print the first and last character on the same line after trim.`);
console.log(`  first char is : ${trimemedString.charAt(0)}   last char is : ${trimemedString.charAt(trimemedString.length-1)}`);
console.log("");

console.log(`6.Print the count of total words available in the string after step 3.`);
var splitwords=trimemedString.split(" ");
console.log(`  Total words are : ${splitwords}`);
console.log("");

console.log(`7.Print the index of word "good" from the given string`);
console.log(`  Index of "goog" word : ${trimemedString.lastIndexOf('good')}`); //0,1,2,3----18,19
console.log("");

console.log(`8.Print the substring starting from index 22,using suvstring() and slice.`);
console.log(`  starting from index 22 using "substring()" : ${trimemedString.substring(22)}`);
console.log(`  starting from index 22 using "slice() : "${trimemedString.slice(22)}`);
console.log("");

console.log(`9.cheack is string ends with word "up" after step 3.`);
console.log(`  Is ends with word : ${trimemedString.includes('up')}`);
console.log("");

console.log(`10.Cheack is string start with word "Hey" after trimming`);
console.log(`   Is starts with word : ${trimemedString.includes('Hey')}`);
    
}
stringHandsOn();