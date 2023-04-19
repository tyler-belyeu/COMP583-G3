import { Component } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent {

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
