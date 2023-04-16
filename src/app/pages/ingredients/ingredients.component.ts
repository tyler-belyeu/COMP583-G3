import { Component } from '@angular/core';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent {

  fruits: Array<string> = ['Apple', 'Orange', 'Banana'];

  addIngredient(s: string){
    this.fruits.push(s);
  }

  removeIngredient(s: string){
    this.fruits = this.fruits.filter(h => h !== s);
  }
}
