console.log(
  `Count the total number vowels including small capitals vowels for String="I am very good IT Developer"`
);
var str = "I am very good IT Developer";
var count = 0;
for (let index = 0; index < str.length; index++) {
  var char = str.charAt(index);
  //vowals are  a,e,i,o,u   A,E,I,O,U
  if (
    char == "a" ||
    char == "e" ||
    char == "i" ||
    char == "o" ||
    char == "u" ||
    char == "A" ||
    char == "E" ||
    char == "I" ||
    char == "O" ||
    char == "U"
  ) {
    console.log(`vowals : ${char}`);
    count++;
  }
}
console.log(`Total vowels are : ${count}`);
console.log(``);

console.log(`2.write function to get the sum cubeof number fron 1 to 5`);

function cubeNumber(num) {
  var sum = 0;
  for (let index = 0; index <= num; index++) {
    sum = sum + index * index * index;
  }
  console.log(`Sum of qube number 1 to 5 : ${sum}`);
  console.log(``);
}
cubeNumber(5);

console.log(`3.log only odd posistioned char on console.`);
function oddPosistionedChar(givenString) {
    console.log(`"${givenString}"`);
  var str = "";
  for (let index = 0; index < givenString.length; index++) {
    var result = givenString.charAt(index);

    if (index % 2 != 0 && result != " ") {
      str = str + result;
    }
  }
  console.log(str);
  console.log(``);

}

oddPosistionedChar("Hard work always pays back");
oddPosistionedChar("Soon I Will be Angular IT Champ");
