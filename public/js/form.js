// jQuery code for recipe form to post information to database
var loginId = 1;
var memberEmail = "foodycorner@gmail.com";

$(document).ready(function(){
  var $recipeName = $("#name");
  var $descriptions = $("#description");
  var $ingredients = $("#ingredients");
  var $instructions = $("#instruct");
  var $category = $("#category");
  $(document).on("submit", ".recipe-form", insertRecipe);

  //function below to grab values from form and POST to db
  function insertRecipe(event){
    event.preventDefault();
    var newRecipe = {
      name: $recipeName.val().trim(),
      description: $descriptions.val().trim(),
      ingredients: $ingredients.val().trim(),
      instructions: $instructions.val().trim(),
      CategoryId: $category.val(),
      MemberId: loginId
    };
    $.post("/api/recipes", newRecipe);
    $recipeName.val("");
    $descriptions.val("");
    $ingredients.val("");
    $instructions.val("");
    $category.val("");
    console.log("New Recipe Submitted");
  } 
});