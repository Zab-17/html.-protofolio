function calculator() {
  var questionOne = prompt("what is your name");
  alert(
    "hello " +
      questionOne +
      " welcome to my bitch calculator , time to find out if u are indeed a bitch"
  );
  var questionTwo = prompt(
    "do you workout or do any form of physical exercise regularly ?? (USE Yes OR No ONLY MATR8EISH)"
  );
  if (questionTwo === "Yes") {
    alert(" Bravo, you are not so much of a bitch afterall");
    var questionThree = prompt(
      "How many times do u work out a week (use numbers only)"
    );
    if (questionThree <= 3) {
      alert("you are 70% a bitch and you need to get ur shit together");
    } else if ((questionThree = 4)) {
      alert(
        "you are 40% a bitch so there is still hope for u if u focus and get ur shit together"
      );
    } else if ((questionThree = 5)) {
      alert(
        "you are 40% a bitch so there is still hope for u if u focus and get ur shit together"
      );
    } else if (questionThree >= 6) {
      alert(
        "you are a G and u belong to the elite group of alphas in this world, keep it up G"
      );
    }
  } else if (questionTwo === "No") {
    alert("you are completely and utterly a bitch block me ");
  }
}
calculator();
