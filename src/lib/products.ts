import { Product } from './types';

// Product data store
export const productsData: Record<string, Product> = {
  'pants-1': {
    id: 'pants-1',
    name: 'Брюки Союз 2.0',
    price: '5000 ₽',
    image: '/ASSETS/DSC09365.jpg',
    category: 'clothing',
    description: {
      rus: 'Брюки из плотного хлопка с вышивкой логотипа СОЮЗ. Свободный крой, удобные карманы и эластичный пояс.',
      eng: 'Pants made of thick cotton with СОЮЗ logo embroidery. Relaxed fit, comfortable pockets and elastic waistband.'
    },
    sizes: ['S', 'M', 'L', 'XL'],
    modelInfo: {
      rus: ['Брюки на модели размера L. Рост модели 180 см.'],
      eng: ['Pants on model in size L. Model height 180 cm.']
    }
  },
  'hoodie-1': {
    id: 'hoodie-1',
    name: 'Худи Союз',
    price: '5000 ₽',
    image: '/ASSETS/DSC09470.jpg',
    category: 'clothing',
    description: {
      rus: 'Худи из мягкого хлопка с вышивкой логотипа СОЮЗ. Свободный крой и удобный капюшон.',
      eng: 'Hoodie made of soft cotton with СОЮЗ logo embroidery. Relaxed fit and comfortable hood.'
    },
    sizes: ['S', 'M', 'L', 'XL']
  },
  'tshirt-daktil': {
    id: 'tshirt-daktil',
    name: 'Футболка Союз',
    price: '2500 ₽',
    image: '/ASSETS/items/дактиль.jpg',
    category: 'clothing',
    description: {
      rus: 'Футболка из 100% хлопка с авторским принтом.',
      eng: '100% cotton t-shirt with original print.'
    },
    sizes: ['S', 'M', 'L', 'XL']
  },
  'tshirt-skelet': {
    id: 'tshirt-skelet',
    name: 'Футболка Союз',
    price: '2500 ₽',
    image: '/ASSETS/items/SKEKETDUO.jpg',
    category: 'clothing',
    description: {
      rus: 'Футболка из 100% хлопка с авторским принтом.',
      eng: '100% cotton t-shirt with original print.'
    },
    sizes: ['S', 'M', 'L', 'XL']
  },
  'tshirt-okrug': {
    id: 'tshirt-okrug',
    name: 'Футболка Округ',
    price: '3000 ₽',
    image: '/ASSETS/items/okrug.jpg',
    category: 'friends',
    brand: 'Округ',
    description: {
      rus: 'Коллаборация с брендом Округ. Лимитированная серия.',
      eng: 'Collaboration with Округ brand. Limited edition.'
    },
    sizes: ['S', 'M', 'L', 'XL']
  },
  'longsleeve-flame': {
    id: 'longsleeve-flame',
    name: 'Лонгслив Союз',
    price: '3500 ₽',
    image: '/ASSETS/items/flamelong.jpg',
    category: 'clothing',
    description: {
      rus: 'Лонгслив из мягкого хлопка с авторским принтом.',
      eng: 'Soft cotton longsleeve with original print.'
    },
    sizes: ['S', 'M', 'L', 'XL']
  },
  'top-pink': {
    id: 'top-pink',
    name: 'Топ Союз',
    price: '2000 ₽',
    image: '/ASSETS/items/toppink.jpg',
    category: 'clothing',
    description: {
      rus: 'Стильный топ с логотипом СОЮЗ.',
      eng: 'Stylish top with СОЮЗ logo.'
    },
    sizes: ['S', 'M', 'L']
  },
  'top-bantik': {
    id: 'top-bantik',
    name: 'Топ Союз',
    price: '2000 ₽',
    image: '/ASSETS/items/topBANTIK.jpg',
    category: 'clothing',
    description: {
      rus: 'Стильный топ с логотипом СОЮЗ и декоративным бантом.',
      eng: 'Stylish top with СОЮЗ logo and decorative bow.'
    },
    sizes: ['S', 'M', 'L']
  },
  'top-cherry': {
    id: 'top-cherry',
    name: 'Топ Союз',
    price: '2000 ₽',
    image: '/ASSETS/items/topcherry.jpg',
    category: 'clothing',
    description: {
      rus: 'Стильный топ с принтом вишни и логотипом СОЮЗ.',
      eng: 'Stylish top with cherry print and СОЮЗ logo.'
    },
    sizes: ['S', 'M', 'L']
  },
  'tshirt-pong': {
    id: 'tshirt-pong',
    name: 'Футболка Союз',
    price: '2500 ₽',
    image: '/ASSETS/items/ponger.jpg',
    category: 'clothing',
    description: {
      rus: 'Футболка из 100% хлопка с авторским принтом.',
      eng: '100% cotton t-shirt with original print.'
    },
    sizes: ['S', 'M', 'L', 'XL']
  },
  'bag-1': {
    id: 'bag-1',
    name: 'Чехол для очков СОЮЗ',
    price: '1000 ₽',
    image: '/ASSETS/items/bagf.jpg',
    category: 'accessories',
    description: {
      rus: 'Защитный чехол для очков с логотипом СОЮЗ.',
      eng: 'Protective glasses case with СОЮЗ logo.'
    },
    sizes: ['Один размер']
  },
  'key-holder': {
    id: 'key-holder',
    name: 'Ки-холдер',
    price: '1000 ₽',
    image: '/ASSETS/items/keyholder.jpg',
    category: 'accessories',
    description: {
      rus: 'Стильный держатель для ключей с логотипом СОЮЗ.',
      eng: 'Stylish key holder with СОЮЗ logo.'
    },
    sizes: ['Один размер']
  }
};

// Helper function to get products by category
export function getProductsByCategory(category: string) {
  return Object.values(productsData).filter(product => product.category === category);
}

// Helper function to get all products in the specified order
export function getAllProducts() {
  // Define the order of product IDs
  const orderedIds = [
    'pants-1',
    'hoodie-1',
    'tshirt-daktil',
    'tshirt-skelet',
    'tshirt-okrug',
    'longsleeve-flame',
    'top-pink',
    'top-bantik',
    'top-cherry',
    'tshirt-pong',
    'bag-1',
    'key-holder'
  ];

  // Return products in the specified order
  return orderedIds.map(id => productsData[id]);
}