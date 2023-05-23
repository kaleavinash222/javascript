console.log(`given string count Total Number of char "a" & "A"`);
function countCharA(str) {
    console.log(str);
  let count1 = 0;
  let count2 = 0;
  for (let index = 0; index <= str.length; index++) {
    var char1 = str.charAt(index);
    if (char1 == "a" || char1 == "A") {
      count1++;
    }
    // else {
    //   var char2 = str.charAt(index);
    //   if (char1 == "A") {
    //     count2++;
    //   }
    // }
  }
  console.log(` Total char "a" & "A" is : ${count1}`);
  console.log(``);
}
countCharA("I Am Learning JavaScript, The Language of Internet.");
countCharA("My favourite movie is LAggAn");
