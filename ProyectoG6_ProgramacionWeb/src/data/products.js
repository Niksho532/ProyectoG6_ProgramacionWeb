export const categories = [
  { 
    id: 'frutas', 
    nombre: 'Frutas y verduras', 
    imagen: '/images/categories/fruta.png' 
  },
  { 
    id: 'carnes', 
    nombre: 'Carnes, aves y pescado', 
    imagen: '/images/categories/pollo.png' 
  },
  { 
    id: 'abarrotes', 
    nombre: 'Abarrotes', 
    imagen: '/images/categories/arroz.png' 
  },
  { 
    id: 'limpieza', 
    nombre: 'Limpieza', 
    imagen: '/images/categories/limpieza.png' 
  },
];

const bestSellersData = [
  {
    id: 'pollo',
    nombre: 'Pollo Entero Fresco con Menudencia',
    precio: '16.40',
    unidad: 'x kg',
    categoria: 'Carnes, aves y pescado',
    imagen: '/images/products/pollo.png',
    descripcion: 'Pollo fresco de granja, criado sin hormonas y con los mejores estándares de calidad. Incluye menudencia.',
    presentacion: '1 unidad aproximadamente 2 kg',
    marca: 'San Fernando'
  },
  {
    id: 'zanahoria',
    nombre: 'Zanahoria',
    precio: '2.99',
    unidad: 'x kg',
    categoria: 'Frutas y verduras',
    imagen: '/images/products/zanahoria.png',
    descripcion: 'Zanahoria fresca, rica en vitamina A y betacarotenos. Ideal para ensaladas, guisos o jugos nutritivos.',
    presentacion: 'Paquete aproximadamente 1 kg',
    origen: 'Nacional'
  },
  {
    id: 'azucar',
    nombre: 'Azúcar rubia BELL\'S',
    precio: '3.85',
    unidad: 'un',
    categoria: 'Abarrotes',
    imagen: '/images/products/azucar.png',
    descripcion: 'Azúcar rubia de caña, menos procesada que el azúcar blanca, conserva parte de la melaza de la caña de azúcar.',
    presentacion: '1 kg',
    marca: 'BELL\'S'
  },
  {
    id: 'avena',
    nombre: 'Avena QUAKER tradicional',
    precio: '12.80',
    unidad: 'un',
    categoria: 'Abarrotes',
    imagen: '/images/products/avena.png',
    descripcion: 'Avena en hojuelas tradicional, 100% natural, sin aditivos ni conservantes. Fuente rica de fibra y nutrientes esenciales.',
    presentacion: '600 g',
    marca: 'QUAKER'
  },
  {
    id: 'cafe',
    nombre: 'Café instantáneo ALTOMAYO',
    precio: '23.90',
    unidad: 'un',
    categoria: 'Abarrotes',
    imagen: '/images/products/cafe.png',
    descripcion: 'Café soluble liofilizado elaborado con granos selectos de café peruano cultivado en las alturas de la selva norte.',
    presentacion: '190 g',
    marca: 'ALTOMAYO'
  },
];

const allProducts = [
  ...bestSellersData,
  {
    id: 'palta',
    nombre: 'Palta',
    precio: '8.90',
    unidad: 'x kg',
    categoria: 'Frutas y verduras',
    imagen: '/images/products/palta.png',
    descripcion: 'El aguacate es el fruto del árbol del mismo nombre, de hoja perenne de la familia de las lauráceas con forma de pera, en su interior posee una única y gran semilla de color claro.',
    presentacion: '0.6 kg',
    origen: 'Nacional'
  },
  {
    id: 'platano',
    nombre: 'Plátano de seda',
    precio: '3.99',
    unidad: 'x kg',
    categoria: 'Frutas y verduras',
    imagen: '/images/products/platano.png',
    descripcion: 'Plátano de seda fresco, rico en potasio y carbohidratos. Fruta versátil ideal para el desayuno o como snack.',
    presentacion: '1 kg aproximadamente',
    origen: 'Nacional'
  },
  {
    id: 'manzana',
    nombre: 'Manzana Delicia',
    precio: '4.50',
    unidad: 'x kg',
    categoria: 'Frutas y verduras',
    imagen: '/images/products/manzana.png',
    descripcion: 'Manzana Delicia de pulpa crujiente y dulce, con un balance perfecto entre dulzor y acidez.',
    presentacion: '1 kg aproximadamente',
    origen: 'Importado'
  },
  {
    id: 'uvas',
    nombre: 'Uvas',
    precio: '11.99',
    unidad: 'x kg',
    categoria: 'Frutas y verduras',
    imagen: '/images/products/uvas.png',
    descripcion: 'Uvas verdes sin semillas, dulces y jugosas. Perfectas para consumir directamente o preparar postres.',
    presentacion: '500 g aproximadamente',
    origen: 'Nacional'
  },
  {
    id: 'pera',
    nombre: 'Pera',
    precio: '6.49',
    unidad: 'x kg',
    categoria: 'Frutas y verduras',
    imagen: '/images/products/pera.png',
    descripcion: 'Pera dulce y jugosa, rica en fibra y de textura suave. Ideal para consumir fresca o en postres.',
    presentacion: '1 kg aproximadamente',
    origen: 'Importado'
  },
  {
    id: 'manzana-roja',
    nombre: 'Manzana roja',
    precio: '5.79',
    unidad: 'x kg',
    categoria: 'Frutas y verduras',
    imagen: '/images/products/manzana-roja.png',
    descripcion: 'Manzana roja de pulpa firme y sabor dulce. Excelente fuente de fibra y antioxidantes.',
    presentacion: '1 kg aproximadamente',
    origen: 'Nacional'
  },
  {
    id: 'pitahaya',
    nombre: 'Pitahaya',
    precio: '8.99',
    unidad: 'x kg',
    categoria: 'Frutas y verduras',
    imagen: '/images/products/pitahaya.png',
    descripcion: 'Fruta tropical exótica de pulpa dulce con pequeñas semillas comestibles. Rica en vitamina C y antioxidantes.',
    presentacion: '500 g aproximadamente',
    origen: 'Nacional'
  },
  {
    id: 'sandia',
    nombre: 'Sandía',
    precio: '1.99',
    unidad: 'x kg',
    categoria: 'Frutas y verduras',
    imagen: '/images/products/sandia.png',
    descripcion: 'Sandía dulce y refrescante, ideal para combatir el calor. Rica en agua y con pocas calorías.',
    presentacion: '3 kg aproximadamente',
    origen: 'Nacional'
  },
  {
    id: 'papel',
    nombre: 'Papel higiénico ELITE',
    precio: '15.90',
    unidad: 'un',
    categoria: 'Limpieza',
    imagen: '/images/products/papel.png',
    descripcion: 'Papel higiénico doble hoja, suave y resistente. Triple acción: suavidad, resistencia y rendimiento.',
    presentacion: 'Paquete x 4 rollos',
    marca: 'ELITE'
  },
  {
    id: 'detergente',
    nombre: 'Detergente ARIEL',
    precio: '18.50',
    unidad: 'un',
    categoria: 'Limpieza',
    imagen: '/images/products/detergente.png',
    descripcion: 'Detergente en polvo con tecnología de limpieza profunda. Elimina las manchas más difíciles incluso en agua fría.',
    presentacion: '2 kg',
    marca: 'ARIEL'
  },
  {
    id: 'lejia',
    nombre: 'Lejía CLOROX',
    precio: '5.90',
    unidad: 'un',
    categoria: 'Limpieza',
    imagen: '/images/products/lejia.png',
    descripcion: 'Lejía tradicional que limpia, desinfecta y elimina el 99.9% de los gérmenes y bacterias.',
    presentacion: '1 L',
    marca: 'CLOROX'
  },
  {
    id: 'leche',
    nombre: 'Leche evaporada GLORIA',
    precio: '4.20',
    unidad: 'un',
    categoria: 'Abarrotes',
    imagen: '/images/products/leche.png',
    descripcion: 'Leche evaporada parcialmente descremada, fortificada con vitaminas A y D. Ideal para toda la familia.',
    presentacion: '400 g',
    marca: 'GLORIA'
  },
  {
    id: 'arroz',
    nombre: 'Arroz extra COSTEÑO',
    precio: '17.90',
    unidad: 'un',
    categoria: 'Abarrotes',
    imagen: '/images/categories/arroz.png',
    descripcion: 'Arroz extra de grano largo y entero. No se pega y rinde más. Ideal para acompañar tus comidas diarias.',
    presentacion: '5 kg',
    marca: 'COSTEÑO'
  }
];

export const products = allProducts;
export const bestSellers = bestSellersData;
export const topCategories = categories;


export const newProducts = allProducts.slice(-6);