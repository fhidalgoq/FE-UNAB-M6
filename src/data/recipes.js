export const authors = [
  {
    slug: 'ana-perez',
    name: 'Ana Pérez',
    bio: 'Pastelera profesional enfocada en postres tradicionales con toques modernos.',
    specialties: ['Postres', 'Panadería'],
    avatar:
      'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=160&h=160&q=80',
  },
  {
    slug: 'luis-romero',
    name: 'Luis Romero',
    bio: 'Mixólogo y barista con pasión por bebidas frescas y aromáticas.',
    specialties: ['Bebidas', 'Coctelería'],
    avatar:
      'https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?auto=format&fit=crop&w=160&h=160&q=80',
  },
  {
    slug: 'maria-gomez',
    name: 'María Gómez',
    bio: 'Chef amante de la cocina de mar que equilibra sabores latinos y mediterráneos.',
    specialties: ['Mariscos', 'Platos principales'],
    avatar:
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=160&h=160&q=80',
  },
]

export const recipes = [
  {
    id: '1',
    title: 'Tarta de Manzana Caramelizada',
    category: 'postres',
    authorSlug: 'ana-perez',
    readyIn: '50 minutos',
    servings: 8,
    summary: 'Una tarta crujiente con relleno cremoso de manzanas y caramelo casero.',
    image:
      'https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      '4 manzanas verdes',
      '1 lámina de masa quebrada',
      '80 g de mantequilla',
      '100 g de azúcar morena',
      '1 cdta de canela',
    ],
    steps: [
      'Precalienta el horno a 180 °C.',
      'Cocina las manzanas en mantequilla, azúcar y canela hasta caramelizar.',
      'Coloca la mezcla sobre la masa en un molde y hornea 35 minutos.',
      'Deja reposar 10 minutos antes de servir.',
    ],
  },
  {
    id: '2',
    title: 'Cheesecake Frío de Frutos Rojos',
    category: 'postres',
    authorSlug: 'ana-perez',
    readyIn: '4 horas',
    servings: 6,
    summary: 'Pastel cremoso sin horno con cobertura de frutos rojos macerados.',
    image:
      'https://images.unsplash.com/photo-1505253758473-96b7015fcd40?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      '200 g de galletas tipo María',
      '90 g de mantequilla derretida',
      '400 g de queso crema',
      '200 ml de crema para batir',
      '150 g de frutos rojos frescos',
    ],
    steps: [
      'Tritura las galletas y mezcla con la mantequilla para formar la base.',
      'Bate el queso crema con la crema y vierte sobre la base en un molde.',
      'Refrigera por 3 horas y termina con los frutos rojos macerados.',
    ],
  },
  {
    id: '3',
    title: 'Limonada de Menta y Jengibre',
    category: 'bebidas',
    authorSlug: 'luis-romero',
    readyIn: '10 minutos',
    servings: 4,
    summary: 'Bebida fría y refrescante con notas cítricas y especiadas.',
    image:
      'https://images.unsplash.com/photo-1497534446932-c925b458314e?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      '4 limones frescos',
      '1 litro de agua fría',
      '30 g de jengibre rallado',
      'Hojas de menta al gusto',
      'Endulzante natural',
    ],
    steps: [
      'Licúa el jugo de limón con el jengibre, agua y endulzante.',
      'Cuela la mezcla, agrega menta fresca y sirve con hielo.',
    ],
  },
  {
    id: '4',
    title: 'Ceviche de Camarón con Mango',
    category: 'principales',
    authorSlug: 'maria-gomez',
    readyIn: '25 minutos',
    servings: 4,
    summary: 'Camarones marinados en cítricos con mango dulce y toque de chile.',
    image:
      'https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      '500 g de camarones limpios',
      '1 mango maduro en cubos',
      'Jugo de 5 limones',
      '1 chile rojo picado',
      'Cilantro fresco picado',
    ],
    steps: [
      'Marine los camarones en jugo de limón durante 15 minutos.',
      'Agrega mango, chile y cilantro, mezcla y rectifica sal.',
      'Sirve frío acompañado de tostadas de maíz.',
    ],
  },
]

export const categories = [
  {
    key: 'postres',
    name: 'Postres',
    description: 'Dulces y postres para cerrar cualquier comida con broche de oro.',
    image:
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80',
  },
  {
    key: 'bebidas',
    name: 'Bebidas',
    description: 'Preparaciones refrescantes y energizantes para cualquier momento.',
    image:
      'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=600&q=80',
  },
  {
    key: 'principales',
    name: 'Platos Principales',
    description: 'Recetas completas para el plato fuerte de tu menú.',
    image:
      'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=600&q=80',
  },
]

export function findRecipeById(id) {
  return recipes.find((recipe) => recipe.id === id)
}

export function recipesByCategory(key) {
  return recipes.filter((recipe) => recipe.category === key)
}

export function findAuthor(slug) {
  return authors.find((author) => author.slug === slug)
}

export function recipesByAuthor(slug) {
  return recipes.filter((recipe) => recipe.authorSlug === slug)
}
