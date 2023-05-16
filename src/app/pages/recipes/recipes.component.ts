import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent {

  constructor(private router: Router){}
  navigateToPage(url: string) {
    this.router.navigateByUrl(url);
  }

  removeRecipe(s: string){
    this.recipes = this.recipes.filter(h => h !== s);
  }

  recipes: Array<string> = [
    'Chicken Cauliflower Soup with Cheese Biscuits',
    'Chicken Hills and Tortilla Valleys',
    'Turkey Cilantro Pizza',
    'Creamy Chicken Enchilada',
    'Jeweled Gravy over Noodles with Pot Roast',
    'Oven Roast Beef',
    'Cheddar Rice Skillet',
    'Minestrone Soup with Cheese Bread'
  ]
}
