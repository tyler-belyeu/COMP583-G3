import { Injectable } from '@angular/core';
import { range } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor() { }

  recipes: Array<Recipe> = [
    {
      "name": "Chicken Cauliflower Soup with Cheese Biscuits",
      "ingredients": [
        "1 tablespoon olive oil",
        "1 pound boneless, skinless chicken breasts, chopped into bite-sized pieces",
        "1 onion, chopped",
        "2 cloves garlic, minced",
        "1 head cauliflower, chopped",
        "4 cups chicken broth",
        "1 cup heavy cream",
        "1 cup shredded cheddar cheese",
        "1 tablespoon chopped fresh thyme",
        "Salt and pepper, to taste",
        "2 cups all-purpose flour",
        "1 tablespoon baking powder",
        "1/2 teaspoon salt",
        "1/2 cup unsalted butter, cold and cubed",
        "1 cup shredded cheddar cheese",
        "3/4 cup whole milk",
        "2 tablespoons chopped fresh parsley"
      ],
      "steps": [
        "In a large pot, heat the olive oil over medium heat.",
        "Add the chicken and cook until browned, about 5 minutes.",
        "Add the onion and garlic and cook until softened, about 3 minutes.",
        "Add the cauliflower and chicken broth and bring to a simmer.",
        "Cover and cook until the cauliflower is tender, about 10 minutes.",
        "Use an immersion blender to puree the soup until smooth.",
        "Stir in the heavy cream, cheddar cheese, and thyme.",
        "Season with salt and pepper to taste.",
        "Preheat the oven to 425°F (220°C).",
        "In a large bowl, whisk together the flour, baking powder, and salt.",
        "Add the butter and use a pastry cutter or your fingers to cut it into the flour mixture until it resembles coarse crumbs.",
        "Stir in the cheddar cheese and milk until just combined.",
        "Drop the dough by spoonfuls onto a baking sheet lined with parchment paper.",
        "Bake for 12-15 minutes, or until the biscuits are golden brown and cooked through.",
        "Serve the soup with the cheese biscuits and garnish with fresh parsley."
      ]
    },
    {
      "name": "Chicken Hills and Tortilla Valleys",
      "ingredients": [
        "1 tablespoon olive oil",
        "1 pound boneless, skinless chicken breasts, chopped into bite-sized pieces",
        "1 onion, chopped",
        "2 cloves garlic, minced",
        "1 bell pepper, chopped",
        "1 teaspoon ground cumin",
        "1 teaspoon chili powder",
        "1/2 teaspoon paprika",
        "1/2 teaspoon dried oregano",
        "Salt and pepper, to taste",
        "1 can diced tomatoes, drained",
        "1/2 cup frozen corn",
        "6 corn tortillas, cut into strips",
        "1/2 cup shredded cheddar cheese",
        "Sour cream, for serving",
        "Chopped fresh cilantro, for serving"
      ],
      "steps": [
        "In a large skillet, heat the olive oil over medium heat.",
        "Add the chicken and cook until browned, about 5 minutes.",
        "Add the onion, garlic, and bell pepper and cook until softened, about 3 minutes.",
        "Stir in the cumin, chili powder, paprika, oregano, salt, and pepper.",
        "Add the diced tomatoes and frozen corn and cook until heated through, about 3 minutes.",
        "Stir in the tortilla strips and cook until crispy, about 5 minutes.",
        "Sprinkle the cheddar cheese over the top of the mixture and cover the skillet with a lid.",
        "Cook until the cheese is melted and bubbly, about 3 minutes.",
        "Serve hot with a dollop of sour cream and a sprinkle of chopped cilantro on top."
        ]
        },
        {
          "name": "Turkey Cilantro Pizza",
          "ingredients": [
          "1 pizza crust",
          "1/2 cup tomato sauce",
          "1/2 teaspoon dried oregano",
          "1/4 teaspoon garlic powder",
          "1/4 teaspoon onion powder",
          "Salt and pepper, to taste",
          "1/2 cup cooked and shredded turkey",
          "1/4 cup chopped fresh cilantro",
          "1/4 cup chopped red onion",
          "1/4 cup sliced black olives",
          "1/2 cup shredded mozzarella cheese",
          "1/4 cup grated Parmesan cheese"
          ],
          "steps": [
          "Preheat the oven to 425°F (220°C).",
          "Spread the tomato sauce over the pizza crust, leaving a 1-inch border around the edges.",
          "Sprinkle the oregano, garlic powder, onion powder, salt, and pepper over the tomato sauce.",
          "Top the pizza with the shredded turkey, cilantro, red onion, and black olives.",
          "Sprinkle the mozzarella and Parmesan cheeses over the top.",
          "Bake for 12-15 minutes, or until the crust is golden brown and the cheese is melted and bubbly.",
          "Slice and serve hot."
          ]
          },
          {
            "name": "Creamy Chicken Enchilada",
            "ingredients": [
            "1 tablespoon olive oil",
            "1 pound boneless, skinless chicken breasts, chopped into bite-sized pieces",
            "1 onion, chopped",
            "2 cloves garlic, minced",
            "1 teaspoon ground cumin",
            "1 teaspoon chili powder",
            "1/2 teaspoon paprika",
            "Salt and pepper, to taste",
            "1 can diced green chilies, drained",
            "1 can cream of chicken soup",
            "1/2 cup sour cream",
            "1/4 cup chopped fresh cilantro",
            "8-10 corn tortillas",
            "1 cup shredded cheddar cheese"
            ],
            "steps": [
            "Preheat the oven to 350°F (175°C).",
            "In a large skillet, heat the olive oil over medium heat.",
            "Add the chicken and cook until browned, about 5 minutes.",
            "Add the onion and garlic and cook until softened, about 3 minutes.",
            "Stir in the cumin, chili powder, paprika, salt, and pepper.",
            "Add the diced green chilies, cream of chicken soup, sour cream, and cilantro and stir until well combined.",
            "Spread a thin layer of the chicken mixture over the bottom of a 9x13-inch baking dish.",
            "Place a tortilla on a work surface and spoon about 1/4 cup of the chicken mixture down the center of the tortilla.",
            "Roll the tortilla up and place it seam-side down in the baking dish.",
            "Repeat with the remaining tortillas and chicken mixture, arranging the enchiladas in the baking dish.",
            "Sprinkle the shredded cheddar cheese over the top of the enchiladas.",
            "Bake for 20-25 minutes, or until the cheese is melted and bubbly and the enchiladas are heated through.",
            "Serve hot with additional cilantro and sour cream, if desired."
            ]
            },
            {
              "name": "Jeweled Gravy over Noodles with Pot Roast",
              "ingredients": [
              "2-3 pound pot roast",
              "1 tablespoon olive oil",
              "Salt and pepper, to taste",
              "1 onion, chopped",
              "2 cloves garlic, minced",
              "1 cup beef broth",
              "1 cup dry red wine",
              "2 tablespoons tomato paste",
              "1 tablespoon Worcestershire sauce",
              "1 tablespoon cornstarch",
              "1/4 cup cold water",
              "1/4 cup chopped fresh parsley",
              "1/4 cup chopped fresh chives",
              "1/4 cup dried cranberries",
              "1/4 cup chopped pistachios",
              "8 ounces egg noodles"
              ],
              "steps": [
              "Preheat the oven to 350°F (175°C).",
              "In a large Dutch oven or oven-safe pot, heat the olive oil over medium-high heat.",
              "Season the pot roast with salt and pepper and place it in the pot.",
              "Cook the pot roast until browned on all sides, about 8-10 minutes.",
              "Add the onion and garlic and cook until softened, about 3 minutes.",
              "Stir in the beef broth, red wine, tomato paste, and Worcestershire sauce.",
              "Cover the pot and bake for 2-3 hours, or until the pot roast is tender and fully cooked.",
              "Remove the pot roast from the pot and let it rest for 10-15 minutes before slicing.",
              "Meanwhile, prepare the jeweled gravy by straining the cooking liquid into a saucepan and bringing it to a boil over medium-high heat.",
              "In a small bowl, whisk together the cornstarch and cold water until smooth.",
              "Stir the cornstarch mixture into the boiling cooking liquid and cook until the gravy has thickened, about 2-3 minutes.",
              "Stir in the parsley, chives, cranberries, and pistachios.",
              "Cook the egg noodles according to package instructions.",
              "To serve, place a bed of cooked egg noodles on each plate, top with sliced pot roast, and spoon the jeweled gravy over the top."
              ]
              }
    
    
  ]

  getMockRecipe(): Recipe{
    return this.recipes[Math.floor(Math.random() * this.recipes.length)];
  }

}

export type Recipe = {
  name: string,
  ingredients: Array<string>,
  steps: Array<string>
}
