var voteEligible = function (age) {
  if (age <= 0 || age >= 130 || age == null) {
    console.log(`Given age is: ${age}, Invalid Data`);
  } else if (age < 18) {
    console.log(`Given age is: ${age}, Not Eligible for Vote`);
  } else {
    console.log(`Given age is: ${age}, Eligible for Vote`);
  }
};
voteEligible(45);
voteEligible(17);
voteEligible(8);
voteEligible(20);
voteEligible(-10);
voteEligible(200);
voteEligible(0);
voteEligible(null);
