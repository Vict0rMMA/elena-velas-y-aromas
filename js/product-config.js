// Configuración de productos
const productConfig = {
    // Catálogo de Amor y Amistad
    amorYAmistad: [
        {
            id: 'amor-1',
            name: 'Vela Corazón Rosa',
            price: 25000,
            image: 'assets/productos/2.png',
            description: 'Vela aromática en forma de corazón, perfecta para regalar en el día del amor y la amistad.',
            sizes: ['Pequeña', 'Mediana', 'Grande'],
            fragrances: ['Rosa', 'Vainilla', 'Fresa']
        },
        {
            id: 'amor-2',
            name: 'Vela Cupido',
            price: 30000,
            image: 'assets/productos/3.png',
            description: 'Vela decorativa con diseño de cupido, ideal para crear un ambiente romántico.',
            sizes: ['Mediana', 'Grande'],
            fragrances: ['Chocolate', 'Canela', 'Miel']
        }
    ],
    
    // Catálogo de Baby Shower
    babyShower: [
        {
            id: 'baby-1',
            name: 'Vela Bebé Azul',
            price: 20000,
            image: 'assets/productos/catalogo de baby shower/1.png',
            description: 'Vela temática para baby shower, disponible en azul y rosa.',
            sizes: ['Pequeña', 'Mediana'],
            fragrances: ['Lavanda', 'Manzanilla', 'Algodón']
        },
        {
            id: 'baby-2',
            name: 'Vela Bebé Rosa',
            price: 20000,
            image: 'assets/productos/catalogo de baby shower/2.png',
            description: 'Vela temática para baby shower en color rosa.',
            sizes: ['Pequeña', 'Mediana'],
            fragrances: ['Rosa', 'Vainilla', 'Fresa']
        }
    ],
    
    // Catálogo de Primera Comunión
    primeraComunion: [
        {
            id: 'comunion-1',
            name: 'Vela Cruz Blanca',
            price: 35000,
            image: 'assets/productos/catalogo de primera comunion/1.png',
            description: 'Vela decorativa con cruz, perfecta para primera comunión.',
            sizes: ['Mediana', 'Grande'],
            fragrances: ['Incienso', 'Mirra', 'Sándalo']
        }
    ],
    
    // Catálogo de Navidad
    navidad: [
        {
            id: 'navidad-1',
            name: 'Vela Árbol Navideño',
            price: 40000,
            image: 'assets/productos/catalogo de navidad/2.jpg',
            description: 'Vela decorativa con forma de árbol de navidad.',
            sizes: ['Mediana', 'Grande'],
            fragrances: ['Pino', 'Canela', 'Naranja']
        }
    ]
};

// Configuración de precios por tamaño
const priceMultipliers = {
    'Pequeña': 1.0,
    'Mediana': 1.5,
    'Grande': 2.0
};

// Configuración de fragancias
const fragrances = {
    'Rosa': { price: 0, description: 'Aroma suave y romántico' },
    'Vainilla': { price: 0, description: 'Aroma dulce y cálido' },
    'Fresa': { price: 0, description: 'Aroma frutal y fresco' },
    'Chocolate': { price: 5000, description: 'Aroma rico y tentador' },
    'Canela': { price: 3000, description: 'Aroma especiado y acogedor' },
    'Miel': { price: 2000, description: 'Aroma dulce y natural' },
    'Lavanda': { price: 0, description: 'Aroma relajante y calmante' },
    'Manzanilla': { price: 0, description: 'Aroma suave y tranquilizante' },
    'Algodón': { price: 0, description: 'Aroma limpio y fresco' },
    'Incienso': { price: 8000, description: 'Aroma sagrado y místico' },
    'Mirra': { price: 8000, description: 'Aroma antiguo y espiritual' },
    'Sándalo': { price: 10000, description: 'Aroma exótico y relajante' },
    'Pino': { price: 5000, description: 'Aroma forestal y navideño' },
    'Naranja': { price: 3000, description: 'Aroma cítrico y energizante' }
};

// Función para obtener productos por categoría
function getProductsByCategory(category) {
    return productConfig[category] || [];
}

// Función para calcular precio total
function calculateTotalPrice(product, size, fragrance) {
    const basePrice = product.price;
    const sizeMultiplier = priceMultipliers[size] || 1.0;
    const fragrancePrice = fragrances[fragrance]?.price || 0;
    
    return Math.round((basePrice * sizeMultiplier) + fragrancePrice);
}

// Función para obtener información de fragancia
function getFragranceInfo(fragrance) {
    return fragrances[fragrance] || { price: 0, description: 'Aroma estándar' };
}

// Exportar configuración
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        productConfig,
        priceMultipliers,
        fragrances,
        getProductsByCategory,
        calculateTotalPrice,
        getFragranceInfo
    };
}
