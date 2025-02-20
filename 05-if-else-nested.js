function dreamJob(isGotPlacement) {
  if (isGotPlacement) {
    console.log("I will buy clothes for my Family");

    var isMNC = true;

    if (isMNC) {
      console.log("I will have US Trip");
    } else {
      console.log("I will GOA trip");
    }
  } else {
    console.log("I will one Hanky for me");
  }
}

dreamJob(true);

function marriageEligibility(gender, age) {
  if (gender == "Male" && age >= 21) {
    console.log(`Congrats. Ji le apani jindagi ${gender}, age${age} `);
  } else if (gender == "Female" && age >= 18) {
    console.log(`Congrats Girl. ${gender}, ${age}`);
  } else {
    console.log(`Nasib Phuta.. ${gender} ${age}`);
  }
}
marriageEligibility("Male", 17);
marriageEligibility("Male", 25);
marriageEligibility("Female", 28);
marriageEligibility("Male", 16);
marriageEligibility("Other", 35);
marriageEligibility("Other", 41);
