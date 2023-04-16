import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'signin',
    loadChildren: () => import('./pages/signin/signin.module')
      .then(m => m.SigninModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module')
      .then(m => m.HomeModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module')
      .then(m => m.SignupModule)
  },{
    path: 'ingredients',
    loadChildren: () => import('./pages/ingredients/ingredients.module')
      .then(m => m.IngredientsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
