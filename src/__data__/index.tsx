export const recipeData = [
  {
    id: 1,
    name: "Caesar salad",
    time: 45,
    yield: 8,
    difficult: "Easy",
    type: "Entree",
    price: "Cheap",
    description: `A Caesar salad (also spelled Cesar, César and Cesare) is a green salad of romaine lettuce and croutons dressed with lemon juice 
    (or lime juice), olive oil, egg, Worcestershire sauce, anchovies, garlic, Dijon mustard, Parmesan cheese, and black pepper.`,
    src: require("@/assets/images/recipes/caesar-salad.jpg"),
    alt: `https://fr.freepik.com/photos-gratuite/vue-laterale-salade-cesar-au-poulet-au-parmesan-dans-bol-blanc-planche-bois_8402749.htm#query=salade%20ceasar&position=1&from_view=search&track=ais`,

    nutrition: [
      {
        name: "kcal",
        value: 430,
      },
    ],

    ingredients: [
      {
        name: "Torn croutons",
        elements: [
          {
            name: "loaf day-old country or sourdough bread",
            pound: 1,
          },
          {
            name: "extra-virgin olive oil",
            cup: 0.5,
          },
          {
            name: "Salt",
          },
        ],
      },
      {
        name: "Salad",
        elements: [
          {
            name: "egg yolk at room temperature",
            number: 1,
          },

          {
            name: "neutral oil, such as grapeseed",
            numbers: 0.75,
          },
          {
            name: "lemon juice, more if needed for mayonnaise",
            tbsp: 4,
          },
          {
            name: "anchovy fillets",
            numbers: 8,
          },
          {
            name: "garlic clove, finely grated or pounded with a pinch of salt",
            numbers: 1,
          },
          {
            name: "Chunk of Parmesan, finely grated (about 1 cup), plus more for serving",
            ounce: 3,
          },
          {
            name: "Worcestershire sauce",
            tbsp: 0.75,
          },
          {
            name: "Salt and ground black pepper",
          },
          {
            name: "Romaine lettuce, Little Gem lettuce, chicories, raw or blanched kale, shaved brussels sprouts or Belgian endive",
          },
        ],
      },
    ],

    preparation: [
      {
        description: `
        Make the torn croutons: Heat oven to 400 degrees. Remove the crusts from the bread, then cut into inch-thick slices. 
        Cut each slice into inch-wide strips, and tear each strip into inch-size pieces. Toss with olive oil to coat them evenly, 
        then spread pieces out in a single layer on a baking sheet. (Use a second sheet if needed to prevent crowding.) Toast for 18 to 22 minutes, 
        checking them after 8 minutes. Rotate pans, switch their oven positions and use a metal spatula to turn the croutons so they brown evenly. 
        Bake until they're golden brown and crunchy on the outside, with just a tiny bit of chew on the inside. Season with a light sprinkling of salt if needed. 
        Use immediately; store leftovers in an airtight container for up to 2 days.`,
      },
      {
        description: `
        Meanwhile, make mayonnaise: Place the egg yolk in a deep, medium metal or ceramic bowl. Dampen a tea towel and roll it up into a long log, then form it into a 
        ring on the counter. Place the bowl inside the ring; this will hold the bowl in place while you whisk. (And if whisking by hand is simply out of the question, 
        use a blender, stand mixer or food processor.)`,
      },
      {
        description: `
        Use a ladle or bottle with a nozzle to drip in the neutral oil a drop at a time, while whisking the oil into the yolk. Go. Really. Slowly. And don't stop whisking.
        Once you've added about half the oil, you can start adding a little more oil at once. You want the mayonnaise to be stiff, but if it thickens so much that it's 
        impossible to whisk, add a teaspoon or so of lemon juice to help thin it out.`,
      },
      {
        description: `
        Prepare the dressing: Coarsely chop the anchovies and then pound them into a fine paste using a mortar and pestle. The more you break them down, 
        the better the dressing will be.`,
      },
      {
        desctiption: `
        In a medium bowl, stir together the anchovies, mayonnaise, garlic, lemon juice, vinegar, Parmesan, Worcestershire and pepper. Taste with a leaf of lettuce, 
        then add salt and adjust the acid (the lemon juice and vinegar) as needed, or add a little of each salty ingredient (Worcestershire, anchovies, Parmesan) to the dressing, bit by bit. 
        Adjust the acid, then taste and adjust the salty ingredients until you reach the ideal balance of salt, fat and acid.`,
      },
      {
        description: `
        Use your hands to toss the greens and torn croutons with an abundant amount of dressing in a large bowl to coat evenly. Garnish with Parmesan and black pepper and serve immediately.
        Refrigerate leftover dressing, covered, for up to 3 days.`,
      },
    ],
  },
  {
    id: 2,
    name: "Pancake",
    src: require("@/assets/images/recipes/pancake.jpg"),
    time: 20,
    type: "Breakfast",
    difficult: "Easy",
    price: "Cheap",
    description: `
    A pancake is a thin, flat, circular piece of cooked batter made from milk, flour, and eggs. 
    Pancakes are often rolled up or folded and eaten hot with a sweet or savoury filling inside. In America, 
    pancakes are usually eaten for breakfast, with butter and maple syrup`,
  },
  {
    id: 3,
    name: "Pizza",
    src: require("@/assets/images/recipes/pizza.jpg"),
    time: 60,
    difficult: "Easy",
    type: "Dinner",
    price: "Cheap",
    description: `
    Pizza, dish of Italian origin consisting of a flattened disk of bread dough topped with some 
    combination of olive oil, oregano, tomato, olives, mozzarella or other cheese, and many other ingredients, 
    baked quickly—usually, in a commercial setting, using a wood-fired oven heated to a very high temperature—and served hot.`,
  },
];
