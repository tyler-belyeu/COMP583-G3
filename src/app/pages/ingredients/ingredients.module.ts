import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { IngredientsComponent } from './ingredients.component';

const routes: Routes = [
  {
    path: '',
    component: IngredientsComponent
  }
  ]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class IngredientsModule { }
