import { Component } from '@angular/core';
import { RecipeService } from '../recipes/services/recipe.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-recipe',
  templateUrl: './view-recipe.component.html',
  styleUrls: ['./view-recipe.component.css']
})
export class ViewRecipeComponent {

  constructor(private mockRecipe: RecipeService){}
  recipe = {
    name : 'Mashed Potatoes',
    ingredients : [
      'potato',
      'boiling water',
      'salt',
      'pepper'
    ],
    steps : [
      'Wash the potatoes.',
      'Peel the potatoes',
      'Mash the potatoes',
      'Salt and pepper the mashed potatoes',
      'Eat the mashed potatoes'
    ]
  }

  setRecipe(){
    const newRecipe = this.mockRecipe.getMockRecipe();
    this.recipe = newRecipe;
  }

}
