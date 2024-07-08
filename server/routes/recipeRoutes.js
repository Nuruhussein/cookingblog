const express = require("express");

const router = express.Router();
const recipeController = require("../controllers/recipeController");
/**
 * App Routes
 */
router.get("/", recipeController.homepage);
router.get("/categories", recipeController.exploreCategories);
router.get("/recipe/:id", recipeController.exploreRecipe);
router.get("/categories/:name", recipeController.exploreCategoriesById); ////by name
// name was sended from href but id  accepted in ths route and then id sent as params to controller why
// "the answer is tekebayu manm bihon wannaaw yetelakewu message naw mntekemewu";
router.post("/search", recipeController.searchRecipe);
router.get("/explore-latest", recipeController.exploreLatest);
router.get("/explore-random", recipeController.exploreRandom);
router.get("/submit-recipe", recipeController.submitRecipe);
router.post("/submit-recipe", recipeController.submitRecipeOnPost);
module.exports = router;
