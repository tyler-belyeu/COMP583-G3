import { Component } from '@angular/core';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent {

  recipes: Array<string> = [
    'Turkey Cilantro Pizza',
    'Creamy Chicken Enchilada',
    'Oven Roast Beef',
    'Cheddar Rice Skillet',
  ]
}
