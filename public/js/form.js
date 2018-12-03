// jQuery code for recipe form to post information to database

$(document).ready(function(){
  var $recipeName = $("#name");
  var $descriptions = $("#description");
  var $ingredients = $("#ingredients");
  var $instructions = $("#instruct");
  $(document).on("submit", ".recipe-form", insertRecipe);
  function insertRecipe(event){
    event.preventDefault();
    var newRecipe = {
      name: $recipeName.val().trim(),
      description: $descriptions.val().trim(),
      ingredients: $ingredients.val().trim(),
      instructions: $instructions.val().trim()
    };

    $.post("/api/recipes", newRecipe);
    $recipeName.val("");
    $descriptions.val("");
    $ingredients.val("");
    $instructions.val("");
    console.log("New Recipe Submitted");
  }
});