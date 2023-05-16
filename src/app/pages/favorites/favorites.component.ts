import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent {

  constructor(private router: Router){}
  navigateToPage(url: string) {
    this.router.navigateByUrl(url);
  }

  recipes: Array<string> = [
    'Turkey Cilantro Pizza',
    'Creamy Chicken Enchilada',
    'Oven Roast Beef',
    'Cheddar Rice Skillet',
  ]

  unFavorite(s: string){
    this.recipes = this.recipes.filter(h => h !== s);
  }
}
