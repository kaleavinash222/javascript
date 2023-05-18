console.log(`1.write a function voteEligibility() with one arg--> age to cheack whether he or she is eligible for votiing or not.`);
function voteEligibilty(age) {
    console.log(`Candidate Age : ${age}`);
  if (age<=0 || age>120 || age==undefined || age==null) {
    console.log(`InValid Data`);
  } else if (age <= 18) {
    console.log(`You are not eligible for vote.`);
  } else {
    console.log(`You are eligible for vote.`);
  }
  console.log("");
}
voteEligibilty(45);
voteEligibilty(17);
voteEligibilty(8);
voteEligibilty(20);
voteEligibilty(-10);
voteEligibilty(200);
voteEligibilty(0);
voteEligibilty(undefined);
voteEligibilty(null);
