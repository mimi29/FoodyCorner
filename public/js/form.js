// jQuery code for recipe form to post information to database
$(function(){
  var $recipeName = $("#name");
  var $descriptions = $("#description");
  var $ingredients = $("#ingredients");
  var $instructions = $("#instruct");
  $(".recipe-form").on("submit", function(event){
    event.preventDefault();
    var newRecipe = {
      name: $recipeName.val().trim(),
      description: $descriptions.val().trim(),
      ingredients: $ingredients.val().trim(),
      instructions: $instructions.val().trim()
    };
    $.ajax("/api/recipes", {
      method: "POST",
      data: newRecipe
    })
      .then(function(){
        console.log("new recipe submitted");
      });
  });
});


