
//RECIPE BOOK PROGRAM 

const API_KEY = //"TODO";

async function getRecipes(){
    const response = await fetch(`https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}`);
    const data = await response.json();
    return data.recipes;
}
init();
async function init() {
    const recipes = await getRecipes();
}