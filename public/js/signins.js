
// var bcrypt = require("bcrypt");

// var saltRounds = 10;
var signMeUp = function (user) {
  //signMeUpApi: function (user) {
  $.ajax({
    headers: {
      "Content-Type": "application/json"
    },
    type: "POST",
    url: "/api/members",
    data: JSON.stringify(user)
  }).done(
    function(data) {
      console.log(data.email);
      $(".reg-cl").val("");
      $("#signUpModal").modal("hide");
    })
    .fail(
      function(errorMsg) {
        alert(errorMsg);
      });
};

$("#signUpBtn").click(function (evt) {
  evt.preventDefault();
  var email = $("#registerEmail").val().toLowerCase().trim();
  console.log(email);
  var passwd = $("#registerPassword").val().trim();
  console.log(passwd);
  var user = {
    email: email,
    password: passwd
  };
  signMeUp(user);
});