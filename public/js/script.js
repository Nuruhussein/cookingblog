let addIngredientsBtn = document.getElementById("addIngredientsBtn");
let ingredientList = document.querySelector(".ingredientList");
let ingredeintDiv = document.querySelectorAll(".ingredeintDiv")[0];
// //////////cloneNode(true) is the central point//////////////
addIngredientsBtn.addEventListener("click", function () {
  let newIngredients = ingredeintDiv.cloneNode(true);
  let input = newIngredients.getElementsByTagName("input")[0];
  input.value = "";
  ingredientList.appendChild(newIngredients);
});

///////from w3school///

// addIngredientsBtn.addEventListener("click", function () {
//   let newdiv = document.createElement("div");
//   let value = document.createElement("input");
//   newdiv.appendChild(value);
//   console.log(newdiv);
//   ingredientList.appendChild(newdiv);
// });
