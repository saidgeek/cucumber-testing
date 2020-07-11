const assert = require("assert");
const { Given, When, Then } = require("cucumber");

const isItFriday = (today) => {
  switch (today) {
    case "Friday":
      return "TGIF";
    default:
      return "Nope";
  }
};

Given("today is {string}", function (givenDay) {
  this.today = givenDay;
});

When("I ask whether it's Friday yet", function () {
  this.actualAnswer = isItFriday(this.today);
});

Then("I should be told {string}", function (exp) {
  assert.equal(this.actualAnswer, exp);
});
