console.log(`1.write a normal function "maleMarriageEligibilty" with 3 argument gender,age and boyName.`);
function maleMarriageEligibility(gender,age,boyName) {
    console.log(`  Gender : ${gender}    Age : ${age}    Name : ${boyName}`);
    var result=gender=="male" && age>=21 ? `  Hey '${boyName}' You are Eligible for Marriage.`:`  Hey '${boyName}' you are Not Eligible for Marriage.`;
    return result;
}
var result=maleMarriageEligibility("male",25,"Bilgates");
console.log(result);
console.log("");

var result=maleMarriageEligibility("male",17,"Stew Jobs");
console.log(result);

// ==================================================================================================
console.log("_____________________________________________________________________");
console.log(`2.write a function "femaleMarriageEligibility()" with 3 arg gender,age & girlName.`);

function femaleMarriageEligibility(gender,age,girlName) {
    console.log(`  Gender : ${gender}       Age : ${age}       girlName : ${girlName}`);
    var result=gender=="female" && age>=18 ?`  Hey '${girlName}' you are eligible for marriage.`:`  Hey '${girlName}' you are not eligible for marriage.`;
     return result;
    
}
var result=femaleMarriageEligibility("female",16,"Jenifer");
console.log(result);
console.log("");

 var result=femaleMarriageEligibility("female",27,"Malinda Gates");
 console.log(result);