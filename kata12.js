const chooseRecipe = function(bakeryA, bakeryB, recipes) {
  let isWithA = false;
  let isWithB = false;

  const ingredientCheck = function(bakery, recipe) {
    for (const ingredient of bakery) {
      if (ingredient === recipe.ingredients[0] || ingredient === recipe.ingredients[1])
        return true;
    }
  };

  for (const recipe of recipes) {
    isWithA = ingredientCheck(bakeryA, recipe);
    isWithB = ingredientCheck(bakeryB, recipe);
    if (isWithA === true && isWithB === true)
      return recipe.name;
  }

};

let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
  {
    name: 'Coconut Sponge Cake',
    ingredients: ['coconut', 'cake base']
  },
  {
    name: 'Persian Cheesecake',
    ingredients: ['saffron', 'cream cheese']
  },
  {
    name: 'Custard Surprise',
    ingredients: ['custard', 'ground beef']
  }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
  {
    name: 'Potato Ganache',
    ingredients: ['potatoes', 'chocolate']
  },
  {
    name: 'Sweet Fish',
    ingredients: ['anchovies', 'honey']
  },
  {
    name: "Nima's Famous Dijon Raisins",
    ingredients: ['dijon mustard', 'raisins']
  }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));