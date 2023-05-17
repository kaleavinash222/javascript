console.log(`1.Function Expreesion with no return value to check interview eligibility.`);
var inerviewEligibility=function(gradScore,hscScore,sscScore,candidateName){
    console.log(`CandidateName : ${candidateName}`);
    console.log(`GardSore      : ${gradScore}`);
    console.log(`HSCscore      : ${hscScore}`);
    console.log(`SSCscore      : ${sscScore}`);
    var result=gradScore>=70 || hscScore>=80 || sscScore>90 ? `Congrates ${candidateName}, you are eligible for TCS interview.`:`Unfortunately ${candidateName}, you are not Eligible for TCS interview.`;
    console.log(result);
    console.log("");
}
inerviewEligibility(80,86,90,"Avinash");
inerviewEligibility(70,65,55,"Mahesh");
inerviewEligibility(60,79,88,"Kiran");

