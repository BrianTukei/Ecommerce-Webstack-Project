$(document).ready(function() {
  // Run test
  $(".signUpButton").click();

  // Check result
  var isVisible = $("#signUpModal").css("display") === "block";
  console.assert(isVisible, "Test Failed: Sign-up modal is not visible.");
  if (isVisible) {
    console.log("Test Passed: Sign-up modal is visible.");
  }
});