

var signIn = function (user) {
  $.ajax({
    headers: {
      "Content-Type": "application/json"
    },
    type: "POST",
    url: "/api/members/login",
    data: JSON.stringify(user)
  }).done(
    function(data) {
      console.log("login");
      console.log(data.email);
      console.log(data.password);
      console.log(data.id);
      loginId = data.id;
      memberEmail = data.password;
      $(".log-cl").val("");
      console.log("success**");
      return true;
    })
    .fail(
      function(errorMsg) {
        console.log(errorMsg);
      });
};

var signMeUp = function (user) {
  $.ajax({
    headers: {
      "Content-Type": "application/json"
    },
    type: "POST",
    url: "/api/members",
    data: JSON.stringify(user)
  }).done(
    function(data) {
      console.log("signup");
      console.log(data.email);
      console.log(data.password);
      console.log(data.id);
      loginId = data.id;
      memberEmail = data.password;
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
  var passwd = $("#registerPassword").val().trim();
  var user = {
    email: email,
    password: passwd
  };
  signMeUp(user);
});

$("#signInBtn").click(function (evt) {
  evt.preventDefault();
  var email = $("#email").val().toLowerCase().trim();
  var passwd = $("#password").val().trim();
  var user = {
    email: email,
    password: passwd
  };
  signIn(user);
});

