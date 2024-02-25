import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  constructor(private slServive: ShoppingListService) {
    
  }

  private recipes: Recipe[] = [
    new Recipe(
      'Spaghetti',
      'Very traditional spaghetti!',
      'https://images.immediate.co.uk/production/volatile/sites/30/2022/09/Spicy-tomato-spaghetti-caf3053.jpg?resize=768,574',
      [new Ingredient('Meat', 1), new Ingredient('French Fries', 20)]
    ),
    new Recipe(
      'Spud',
      'I dont even know this dish',
      'https://www.collinsdictionary.com/images/full/spud_132427382.jpg',
      [new Ingredient('Buns', 2), new Ingredient('Meat', 1)]
    ),
  ];

  getRecipes() {
    // not to change the original data
    return this.recipes.slice();
  }
  
  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slServive.addIngredients(ingredients);
  }
}
