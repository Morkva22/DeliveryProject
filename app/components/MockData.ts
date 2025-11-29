export type Item = {
  id: string;
  type: string;
  title: string;
  image: any;
  oldPrice?: string;
  newPrice: string;
  size42?: string;
  selectedSize: number;
  isNew?: boolean;
  description?: string;
  weight32?: string;
  weight42?: string;
};

const defaultWeight32 = '480 g';
const defaultWeight42 = '720 g';

const baseMockItemData: Item[] = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      type: 'pizza',
      title: 'Pepperoni',
      isNew: true,
      image: require('../../assets/images/homeScreen/paperoni.png'),
      oldPrice: '$14.99',
      newPrice: '$9.99',
      size42:'$12.99',
      description: 'Classic pizza with mozzarella and pepperoni sausage.',
      selectedSize: 32,
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      type: 'pizza',
      title: 'Mozzarella pizza',
      isNew: false,
      image:require('../../assets/images/homeScreen/pizza-margarita.png'),
      oldPrice: '$12.99',
      newPrice: '$8.99',
      description: 'Delicious pizza with Italian mozzarella. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      size42:'$10.99',
      selectedSize: 32,
    },
  
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      type: 'pizza',
      title: 'Vegetarian pizza ',
      isNew: true,
      image:require('../../assets/images/homeScreen/pizza-vegetarian.png'),
      oldPrice: '$15.99',
      newPrice: '$10.99',
      size42:'$12.99',
      selectedSize: 32,
      description: 'Italian vegetarian pizza with tomatoes, mushrooms, peppers, onion, and black olives. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
  
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d73',
      type: 'pizza',
      title: 'Salami pizza ',
      isNew: true,
      image:require('../../assets/images/homeScreen/pizza-Salami.png'),
      oldPrice: '$11.99',
      newPrice: '$9.99',
      size42:'$11.99',
      selectedSize: 32,
      description: 'Italian pizza with tomato base, salami, tomato, mozzarella, garlic sauce, oregano. ',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d74',
      type: 'pizza',
      title: 'Napoletana ',
      isNew: false,
      image:require('../../assets/images/homeScreen/pizza-Neopolitana.png'),
      oldPrice: '$13.99',
      newPrice: '$10.99',
      size42:'$11.99',
      selectedSize: 32,
      description: 'Italian pizza with with tomatoes, mozzarella, mushrooms, ham, oregano. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
  
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d82',
      type: 'pizza',
      title: 'Seafood pizza ',
      isNew: false,
      image:require('../../assets/images/homeScreen/seafood-pizza.png'),
      oldPrice: '$19.99',
      newPrice: '$17.99',
      size42:'$19.99',
      selectedSize: 32,
      description: 'Italian pizza with mozzarella, salmon, mussels, calamari, tomato, lemon, pesto sauce, oregano, tomato sauce.',
    },
  
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d35',
      type: 'pizza',
      title: 'Smoked salmon ',
      isNew: true,
      image:require('../../assets/images/homeScreen/pizza-smoked-salmon.png'),
      oldPrice: '$18.99',
      newPrice: '$16.99',
      size42:'$18.99',
      selectedSize: 32,
      description: 'Italian pizza with pesto sauce, smoked salmon and mozzarella cheese.',
    },
  
    {
      id: 'bd7acbea-c2b2-46c2-aed5-3ad53abb28ba',
      type: 'pizza',
      title: 'Hawaiian pizza ',
      isNew: false,
      image:require('../../assets/images/homeScreen/hawaiian-pizza.png'),
      oldPrice: '$15.99',
      newPrice: '$10.99',
      size42:'$12.99',
      selectedSize: 32,
      description: 'Italian pizza with pizza sauce, chicken, pineapple, tomato, hollandaise cheese, mozzarella cheese.',
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-5ad53abb2836',
      type: 'pizza',
      title: 'Spajsi kurka pizza ',
      isNew: false,
      image:require('../../assets/images/homeScreen/spajsi-kurka-pizza.png'),
      oldPrice: '$16.99',
      newPrice: '$13.99',
      size42:'$15.99',
      selectedSize: 32,
      description: 'Italian pizza with tomato sauce, mozzarella cheese, chicken, corn, sweet chili sauce.',
    },
    {
      id: '58694a0f-3da1-471f-bd96-135571e29d25',
      type: 'pizza',
      title: '4 cheeses pizza ',
      isNew: false,
      image:require('../../assets/images/homeScreen/pizza-fourchees.png'),
      oldPrice: '$18.99',
      newPrice: '$16.99',
      size42:'$18.99',
      selectedSize: 32,
      description: 'Italian pizza with blue or mature cheese, soft (emmental or gruyere) or cream cheese (robiola or stracchino) and hard cheese (parmesan or pecorino, grated).',
    },
  
  
];


export const mockItemData: Item[] = baseMockItemData.map((item) => ({
  ...item,
  weight32: item.weight32 ?? defaultWeight32,
  weight42: item.weight42 ?? defaultWeight42,
}));

const baseMockOnEndReachedData: Item[] = [
 {
   id: '58694a0f-3da1-471f-bd96-146932e29d94',
   type: 'pizza',
   title: 'Caesar pizza ',
   isNew: true,
   image: require('../../assets/images/homeScreen/pizza-caesar.png'),
   oldPrice: '$15.99',
   newPrice: '$12.99',
   size42:'$14.99',
   selectedSize: 32,
   description: 'Italian pizza with chicken breast, mozzarella cheese, parmesan cheese, quail eggs, tomatoes, iceberg lettuce, provan herbs, béchamel sauce.',
  },
  {
    id: '58694a0f-3da1-471f-bd96-146971e29d25',
    type: 'pizza',
    title: 'Margarita ',
    isNew: false,
    image: require('../../assets/images/homeScreen/pizza-margarita.png'),
    oldPrice: '$14.99',
    newPrice: '$11.99',
    size42:'$13.99',
    selectedSize: 32,
    description: 'Italian pizza with mozzarella cheese, tomatoes and tomato sauce.',
  },
  {
    id: '58694a0f-3da1-471f-bd25-12571e45d36',
    type: 'pizza',
    title: 'BBQ Pizza ',
    isNew: true,
    image: require('../../assets/images/homeScreen/pizza-bbq.png'),
    oldPrice: '$16.99',
    newPrice: '$13.99',
    size42:'$15.99',
    selectedSize: 32,
    description: 'Italian pizza with BBQ sauce,mozzarella cheese,prosciutto,bacon,game sausages,fried mushrooms,pickled cucumber,olives,greens.',
  },

  {
    id: '58294a0f-5da1-221f-bd26-148961e29p46',
    type: 'pizza',
    title: 'Very cheesy Pizza ',
    isNew: false,
    image: require('../../assets/images/homeScreen/pizza-5syrov.png'),
    oldPrice: '$19.99',
    newPrice: '$17.99',
    size42:'$19.99',
    selectedSize: 32,
    description: 'Italian pizza with mozzarella cheese, parmesan cheese, Dor Blue cheese, cheddar cheese slice, feta cheese, cream sauce.',
  },

  {
    id: '5825a0f-3da5-471f-bd25-185571e29d63',
    type: 'pizza',
    title: 'Karbonara pizza ',
    isNew: true,
    image: require('../../assets/images/homeScreen/karbonara-pizza.png'),
    oldPrice: '$14.99',
    newPrice: '$12.99',
    size42:'$14.99',
    selectedSize: 32,
    description: 'Italian pizza with cream sauce, mozzarella cheese, rosemary, bacon, boiled egg, parmesan cheese, capers, cherry tomato.',
  },


]

export const mockOnEndReachedData: Item[] = baseMockOnEndReachedData.map((item) => ({
  ...item,
  weight32: item.weight32 ?? defaultWeight32,
  weight42: item.weight42 ?? defaultWeight42,
}));



export const mockVegetables = [
  {
    id: '1',
    title: 'Mushrooms ',
    image: require('../../assets/images/pizzaToppings/vegetables/mushrooms.jpg'),
    price: '$1.29',
    weight:'50 g'
  },
  {
    id: '2',
    title: 'Arugula',
    image: require('../../assets/images/pizzaToppings/vegetables/arugula.jpg'),
    price: '$1.99',
    weight:'50 g'
  },
  {
    id: '3',
    title: 'Olives ',
    image: require('../../assets/images/pizzaToppings/vegetables/olives.jpg'),
    price: '$1.10',
    weight:'50 g'
  },
  {
    id: '4',
    title: 'Pepper ',
    image: require('../../assets/images/pizzaToppings/vegetables/peppers.jpg'),
    price: '$1.50',
    weight:'50 g'
  },
  {
    id: '5',
    title: 'Corn ',
    image: require('../../assets/images/pizzaToppings/vegetables/corn.jpg'),
    price: '$1.25',
    weight:'50 g'
  },
  {
    id: '6',
    title: 'Cucumber ',
    image: require('../../assets/images/pizzaToppings/vegetables/cucumber.jpg'),
    price: '$1.15',
    weight:'50 g'
  },
  {
    id: '7',
    title: 'Onion ',
    image: require('../../assets/images/pizzaToppings/vegetables/onion.jpg'),
    price: '$0.99',
    weight:'50 g'
  },

]

export const mockMeats = [
  {
    id: '8',
    title: ' Bacon',
    image: require('../../assets/images/pizzaToppings/meats/bacon.jpg'),
    price: '$2',
    weight:'50 g'
  },
  {
    id: '9',
    title: 'Chicken',
    image: require('../../assets/images/pizzaToppings/meats/chicken.jpg'),
    price: '$1.40',
    weight:'50 g'
  },
  {
    id: '10',
    title: ' Ham',
    image: require('../../assets/images/pizzaToppings/meats/ham.jpg'),
    price: '$1.80',
    weight:'50 g'
  },
  {
    id: '11',
    title: 'Pepperoni ',
    image: require('../../assets/images/pizzaToppings/meats/pepperoni.jpg'),
    price: '$1.70',
    weight:'50 g'
  },
  {
    id: '12',
    title: ' Salami',
    image: require('../../assets/images/pizzaToppings/meats/salami.jpg'),
    price: '$1.70',
    weight:'50 g'
  },
  {
    id: '13',
    title: 'Smoked-sausage ',
    image: require('../../assets/images/pizzaToppings/meats/smoked-sausage.jpg'),
    price: '$1.80',
    weight:'50 g'
  },

]


// export const mockCheese = [
//   {
//     id: '14',
//     title: ' Feta',
//     image: require('../../assets/images/pizzaToppings/cheese/feta.jpg'),
//     price: '$1.20',
//     weight:'50 g'
//   },
//   {
//     id: '15',
//     title: 'Blue-cheese',
//     image: require('../../assets/images/pizzaToppings/cheese/blue-cheese.jpg'),
//     price: '$1.99',
//     weight:'50 g'
//   },
//   {
//     id: '16',
//     title: 'Mozzarella',
//     image: require('../../assets/images/pizzaToppings/cheese/mozzarella.jpg'),
//     price: '$1.30',
//     weight:'50 g'
//   },
//   {
//     id: '17',
//     title: 'Parmesan ',
//     image: require('../../assets/images/pizzaToppings/cheese/parmesan.jpg'),
//     price: '$1.99',
//     weight:'50 g'
//   },
//   {
//     id: '18',
//     title: ' Maasdam',
//     image: require('../../assets/images/pizzaToppings/cheese/maasdam.jpg'),
//     price: '$1.80',
//     weight:'50 g'
//   },
//   {
//     id: '19',
//     title: 'Feta-greek ',
//     image: require('../../assets/images/pizzaToppings/cheese/feta-greek.jpg'),
//     price: '$1.15',
//     weight:'50 g'
//   },

// ]

// export const mockFish = [
//   {
//     id: '20',
//     title: ' Salmon',
//     image: require('../../assets/images/pizzaToppings/fish/salmon.jpg'),
//     price: '$2.35',
//     weight:'50 g'
//   },
//   {
//     id: '21',
//     title: 'Shrimps',
//     image: require('../../assets/images/pizzaToppings/fish/shrimps.jpg'),
//     price: '$2.50',
//     weight:'50 g'
//   },
//   {
//     id: '22',
//     title: ' Crab-stick',
//     image: require('../../assets/images/pizzaToppings/fish/crab-stick.jpg'),
//     price: '$2.15',
//     weight:'50 g'
//   },

// ]

// export const mockDrinks = [
//   {
//     id: '23',
//     type: 'drink',
//     title: ' Pepsi',
//     image: require('../../assets/images/drinkScreen/pepsi.jpg'),
//     price: '$2.35',
//     volume:'1 l'
//   },
//   {
//     id: '24',
//     title: 'Redbull',
//     type: 'drink',
//     image: require('../../assets/images/drinkScreen/redbull.jpg'),
//     price: '$2.50',
//     volume:'0.5 l'
//   },
//   {
//     id: '25',
//     title: ' Schweppes tangerine',
//     type: 'drink',
//     image: require('../../assets/images/drinkScreen/schweppes.jpg'),
//     price: '$2.15',
//     volume:'0.33 l'
//   },
//   {
//     id: '26',
//     title: ' Schweppes lemon',
//     type: 'drink',
//     image: require('../../assets/images/drinkScreen/schweppes-lemon.jpg'),
//     price: '$2.15',
//     volume:'0.75 l'
//   },
//   {
//     id: '27',
//     type: 'drink',
//     title: ' Chupa Chups Orange',
//     image: require('../../assets/images/drinkScreen/chupaChups.jpg'),
//     price: '$2.15',
//     volume:'0.345 l'
//   },
//   // {
//   //   id: '28',
//   //   title: ' Chupa Chups Grape',
//   //   image: require('../images/drinkScreen/chupaChup.jpg'),
//   //   price: '$2.15',
//   //   weight:'0.345 l'
//   // },
//   {
//     id: '29',
//     type: 'drink',
//     title: ' Borjomi',
//     image: require('../../assets/images/drinkScreen/borjomi.jpg'),
//     price: '$2.15',
//     volume:'0.5 l'
//   },
//   {
//     id: '30',
//     type: 'drink',
//     title: ' Morshynska low carbonated',
//     image: require('../../assets/images/drinkScreen/morshinskaya-slab-gaz.jpg'),
//     price: '$2.15',
//     volume:'0.75 l'
//   },
//   {
//     id: '31',
//     type: 'drink',
//     title: ' Morshynska non-carbonated',
//     image: require('../../assets/images/drinkScreen/morshinskay.jpg'),
//     price: '$2.15',
//     volume:'0.75 l'
//   },




// ]
