import { Component } from '@angular/core';

@Component({
  selector: 'app-view-recipe',
  templateUrl: './view-recipe.component.html',
  styleUrls: ['./view-recipe.component.css']
})
export class ViewRecipeComponent {
  recipe = {
    title : 'Mashed Potatoes',
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
}
