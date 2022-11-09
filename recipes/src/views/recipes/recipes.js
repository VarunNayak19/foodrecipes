import React from "react";
import "./recipes.css";

const Recipes = ({ recipeData }) => {
  let recipeId = localStorage.getItem("indexForRecipes");
  console.log(recipeId);
  console.log(recipeData[recipeId]);
  let recipe = recipeData[recipeId];
  console.log(recipe);
  return (
    <div className="recipeContainer">
      <div className="recipeHead">
        <img src={recipe.recipe.image} alt="img" className="recipeImage" />
        <h1 className="recipeName">{recipe.recipe.label}</h1>
      </div>
    </div>
  );
};

export default Recipes;
