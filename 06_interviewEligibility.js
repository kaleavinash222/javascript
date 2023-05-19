
console.log(`Function ecpression with no return value to cheack TCS Interview Eligibility.`);
var interviewEligibility = function (gradScore,  hscScore,  sscScore,  candidateName){
console.log(``);
  console.log(`CandidateName : ${candidateName}`);
  console.log(`gradScore     : ${gradScore}`);
  console.log(` hscScore     : ${hscScore}`);
  console.log(` sscScore     : ${sscScore}`);
  

  if (gradScore >= 70 || hscScore >= 80 || sscScore > 90) {
    console.log(` Congrates ${candidateName}, you are eligible for TCS interview`);
  } else {
    console.log(` Unfortunately ${candidateName},you are not elogible for interview.`);
  }
}
interviewEligibility(80,86,90,"Avinash");
interviewEligibility(70,65,55,"Mahesh");
interviewEligibility(60,70,88,"Kiran");
