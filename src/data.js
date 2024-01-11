const items = [
  // Breakfast
  {
    category: 'breakfast',
    item_name: 'pancakes',
    image: ['../public/images/pancakes.jpg'],
    description: 'Delicious fluffy pancakes served with syrup.',
    price: 7.99,
  },
  {
    category: 'breakfast',
    item_name: 'omelette',
    image: ['../public/images/omelette.jpg'],
    description: 'A classic omelette with your choice of fillings.',
    price: 8.99,
  },
  {
    category: 'breakfast',
    item_name: 'avocado-toast',
    image: ['../public/images/avocado-toast.jpg'],
    description:
      'Toasted bread topped with fresh avocado slices and seasonings.',
    price: 9.99,
  },
  {
    category: 'breakfast',
    item_name: 'fruit-parfait',
    image: ['../public/images/fruit-parfait.jpeg'],
    description: 'A refreshing parfait with layers of yogurt and fresh fruits.',
    price: 6.99,
  },
  {
    category: 'breakfast',
    item_name: 'smoothie-bowl',
    image: ['../public/images/smoothie-bowl.jpeg'],
    description:
      'A nutritious bowl of blended fruits topped with granola and seeds.',
    price: 8.99,
  },

  // Lunch
  {
    category: 'lunch',
    item_name: 'chicken-Caesar-salad',
    image: ['../public/images/chicken-Caesar-salad.jpg'],
    description:
      'Fresh salad with grilled chicken, Caesar dressing, and croutons.',
    price: 10.99,
  },
  {
    category: 'lunch',
    item_name: 'vegetarian-wrap',
    image: ['../public/images/vegetarian-wrap.jpg'],
    description:
      'A flavorful wrap filled with a variety of vegetarian ingredients.',
    price: 9.99,
  },
  {
    category: 'lunch',
    item_name: 'quinoa-bowl',
    image: ['../public/images/quinoa-bowl.jpg'],
    description:
      'Nutritious bowl with quinoa, vegetables, and a tasty dressing.',
    price: 11.99,
  },
  {
    category: 'lunch',
    item_name: 'Caprese-sandwich',
    image: ['../public/images/Caprese-sandwich.webp'],
    description: 'Classic sandwich with mozzarella, tomatoes, and basil.',
    price: 8.99,
  },
  {
    category: 'lunch',
    item_name: 'sushi-rolls',
    image: ['../public/images/sushi-rolls.jpg'],
    description: 'Assorted sushi rolls with fresh fish and vegetables.',
    price: 12.99,
  },

  // Dinner
  {
    category: 'dinner',
    item_name: 'grilled-salmon',
    image: ['../public/images/grilled-salmon.jpg'],
    description: 'Grilled salmon fillet with a side of vegetables.',
    price: 15.99,
  },
  {
    category: 'dinner',
    item_name: 'spaghetti-bolognese',
    image: ['../public/images/spaghetti-bolognese.avif'],
    description: 'Classic spaghetti with savory bolognese sauce.',
    price: 12.99,
  },
  {
    category: 'dinner',
    item_name: 'stuffed-bell-peppers',
    image: ['../public/images/stuffed-bell-peppers.webp'],
    description:
      'Bell peppers stuffed with a delicious mixture of rice and vegetables.',
    price: 11.99,
  },
  {
    category: 'dinner',
    item_name: 'vegetable-curry',
    image: ['../public/images/vegetable-curry.jpg'],
    description: 'A flavorful vegetable curry served with rice.',
    price: 13.99,
  },
]

const categories = [...new Set(items.map((item) => item.category))]
categories.unshift('All')

export { categories, items }
