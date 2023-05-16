import { Component } from '@angular/core';
import { GptService } from './gpt.service';
import { RecipeService } from '../recipes/services/recipe.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent {

  constructor(
    private chat: GptService,
    private mockRecipes: RecipeService,
    private router: Router
  ){
  }

  generateRecipe(){
   // this.chat.generateText(this.chat.promptPrefix);
    console.log(this.chat.submit('This is a test'));
    
  }

  getMockRecipe(){
    const data = this.mockRecipes.getMockRecipe();
    console.log(data);
    this.navigateToPage('view-recipe');
  }

  fruits: Array<string> = ['Apple', 'Orange', 'Banana'];

  addIngredient(s: string){
    this.fruits.push(s);
  }

  removeIngredient(s: string){
    this.fruits = this.fruits.filter(h => h !== s);
  }

  navigateToPage(url: string) {
    this.router.navigateByUrl(url);
  }
}
export type Recipe = {
  name: string,
  ingredients: Array<string>,
  steps: Array<string>
}
