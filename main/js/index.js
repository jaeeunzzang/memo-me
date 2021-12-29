var recipe = document.getElementById("recipe");
var article = document.getElementById("article");
recipe.onclick = goRecipe;
function goRecipe() {
  console.log("click");
  document.location.href = "../category/recipe/recipe.html";
}
