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
  },
  {
    path: 'recipes',
    loadChildren: () => import('./pages/recipes/recipes.module')
      .then(m => m.RecipesModule)
  },
  {
    path: 'favorites',
    loadChildren: () => import('./pages/favorites/favorites.module')
      .then(m => m.FavoritesModule)
  },
  {
    path: 'view-recipe',
    loadChildren: () => import('./pages/view-recipe/view-recipe.module')
      .then(m => m.ViewRecipeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
