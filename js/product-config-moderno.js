// Configuración de productos basada en index-moderno.html
const productConfigModerno = {
    // Catálogo de Amor y Amistad (basado en index-moderno.html)
    amorYAmistad: [
        {
            id: 'product-2',
            name: 'MARIPOSA 2 MECHAS',
            description: 'Vela con forma de mariposa de 2 mechas',
            image: 'assets/productos/2.png',
            options: [
                { value: 'detal-bolsa', label: 'Detal Bolsa - $5,900', price: 5900 },
                { value: 'detal-caja', label: 'Detal Caja - $7,000', price: 7000 },
                { value: 'mayorista-bolsa', label: 'Mayorista Bolsa - $5,200', price: 5200 },
                { value: 'mayorista-caja', label: 'Mayorista Caja - $6,500', price: 6500 }
            ],
            defaultPrice: 5900
        },
        {
            id: 'product-3',
            name: 'POLI MEDIANO MANO CORAZÓN',
            description: 'Vela con forma de mano haciendo corazón',
            image: 'assets/productos/3.png',
            options: [
                { value: 'detal-bolsa', label: 'Detal Bolsa - $2,900', price: 2900 },
                { value: 'detal-caja', label: 'Detal Caja - $3,700', price: 3700 },
                { value: 'mayorista-bolsa', label: 'Mayorista Bolsa - $2,600', price: 2600 },
                { value: 'mayorista-caja', label: 'Mayorista Caja - $3,400', price: 3400 }
            ],
            defaultPrice: 2900
        },
        {
            id: 'product-4',
            name: 'MARGARITA COLOMBINA',
            description: 'Vela con aroma de margarita colombiana',
            image: 'assets/productos/4.png',
            options: [
                { value: 'detal', label: 'Detal - $3,700', price: 3700 },
                { value: 'mayorista', label: 'Mayorista - $3,000', price: 3000 }
            ],
            defaultPrice: 3700
        },
        {
            id: 'product-5',
            name: 'PEONIA MEDIANA',
            description: 'Vela con forma de peonía mediana',
            image: 'assets/productos/5.png',
            options: [
                { value: 'detal-bolsa', label: 'Detal Bolsa - $4,900', price: 4900 },
                { value: 'detal-caja', label: 'Detal Caja - $6,200', price: 6200 },
                { value: 'mayorista-bolsa', label: 'Mayorista Bolsa - $4,400', price: 4400 },
                { value: 'mayorista-caja', label: 'Mayorista Caja - $5,600', price: 5600 }
            ],
            defaultPrice: 4900
        },
        {
            id: 'product-6',
            name: 'FLORES CON AROMA EMPAQUE ESPECIAL',
            description: 'Flores con aroma en empaque especial',
            image: 'assets/productos/6.png',
            options: [
                { value: 'detal-bolsa', label: 'Detal Bolsa - $6,900', price: 6900 },
                { value: 'detal-caja', label: 'Detal Caja - $8,500', price: 8500 },
                { value: 'mayorista-bolsa', label: 'Mayorista Bolsa - $6,200', price: 6200 },
                { value: 'mayorista-caja', label: 'Mayorista Caja - $7,600', price: 7600 }
            ],
            defaultPrice: 6900
        },
        {
            id: 'product-7',
            name: 'MATERA VELA CORAZÓN ROSAS',
            description: 'Matera con velas en forma de corazón y rosas',
            image: 'assets/productos/7.png',
            options: [
                { value: 'detal-bolsa', label: 'Detal Bolsa - $8,900', price: 8900 },
                { value: 'detal-caja', label: 'Detal Caja - $10,500', price: 10500 },
                { value: 'mayorista-bolsa', label: 'Mayorista Bolsa - $8,000', price: 8000 },
                { value: 'mayorista-caja', label: 'Mayorista Caja - $9,300', price: 9300 }
            ],
            defaultPrice: 8900
        },
        {
            id: 'product-8',
            name: 'CORAZÓN ROSAS',
            description: 'Vela en forma de corazón con rosas',
            image: 'assets/productos/8.png',
            options: [
                { value: 'detal-bolsa', label: 'Detal Bolsa - $3,900', price: 3900 },
                { value: 'detal-caja', label: 'Detal Caja - $4,900', price: 4900 },
                { value: 'mayorista-bolsa', label: 'Mayorista Bolsa - $3,500', price: 3500 },
                { value: 'mayorista-caja', label: 'Mayorista Caja - $4,300', price: 4300 }
            ],
            defaultPrice: 3900
        },
        {
            id: 'product-9',
            name: 'VELA CORAZÓN GRANDE',
            description: 'Vela en forma de corazón grande',
            image: 'assets/productos/9.png',
            options: [
                { value: 'detal-bolsa', label: 'Detal Bolsa - $5,500', price: 5500 },
                { value: 'detal-caja', label: 'Detal Caja - $6,800', price: 6800 },
                { value: 'mayorista-bolsa', label: 'Mayorista Bolsa - $4,900', price: 4900 },
                { value: 'mayorista-caja', label: 'Mayorista Caja - $6,100', price: 6100 }
            ],
            defaultPrice: 5500
        },
        {
            id: 'product-10',
            name: 'MARIPOSA 2 MECHAS',
            description: 'Vela con forma de mariposa de 2 mechas (variante)',
            image: 'assets/productos/10.png',
            options: [
                { value: 'detal-bolsa', label: 'Detal Bolsa - $5,900', price: 5900 },
                { value: 'detal-caja', label: 'Detal Caja - $7,000', price: 7000 },
                { value: 'mayorista-bolsa', label: 'Mayorista Bolsa - $5,200', price: 5200 },
                { value: 'mayorista-caja', label: 'Mayorista Caja - $6,500', price: 6500 }
            ],
            defaultPrice: 5900
        }
    ],
    
    // Catálogo de Baby Shower
    babyShower: [
        {
            id: 'baby-1',
            name: 'Vela Bebé Azul',
            description: 'Vela temática para baby shower, disponible en azul y rosa.',
            image: 'assets/productos/catalogo de baby shower/1.png',
            options: [
                { value: 'detal', label: 'Detal - $15,000', price: 15000 },
                { value: 'mayorista', label: 'Mayorista - $12,000', price: 12000 }
            ],
            defaultPrice: 15000
        },
        {
            id: 'baby-2',
            name: 'Vela Bebé Rosa',
            description: 'Vela temática para baby shower en color rosa.',
            image: 'assets/productos/catalogo de baby shower/2.png',
            options: [
                { value: 'detal', label: 'Detal - $15,000', price: 15000 },
                { value: 'mayorista', label: 'Mayorista - $12,000', price: 12000 }
            ],
            defaultPrice: 15000
        }
    ],
    
    // Catálogo de Primera Comunión
    primeraComunion: [
        {
            id: 'comunion-1',
            name: 'Vela Cruz Blanca',
            description: 'Vela decorativa con cruz, perfecta para primera comunión.',
            image: 'assets/productos/catalogo de primera comunion/1.png',
            options: [
                { value: 'detal', label: 'Detal - $25,000', price: 25000 },
                { value: 'mayorista', label: 'Mayorista - $20,000', price: 20000 }
            ],
            defaultPrice: 25000
        }
    ],
    
    // Catálogo de Navidad
    navidad: [
        {
            id: 'navidad-1',
            name: 'Vela Árbol Navideño',
            description: 'Vela decorativa con forma de árbol de navidad.',
            image: 'assets/productos/catalogo de navidad/2.jpg',
            options: [
                { value: 'detal', label: 'Detal - $20,000', price: 20000 },
                { value: 'mayorista', label: 'Mayorista - $16,000', price: 16000 }
            ],
            defaultPrice: 20000
        }
    ]
};

// Función para obtener productos por categoría
function getProductsByCategory(category) {
    return productConfigModerno[category] || [];
}

// Función para obtener todos los productos
function getAllProducts() {
    return [
        ...productConfigModerno.amorYAmistad,
        ...productConfigModerno.babyShower,
        ...productConfigModerno.primeraComunion,
        ...productConfigModerno.navidad
    ];
}

// Función para encontrar producto por ID
function findProductById(productId) {
    const allProducts = getAllProducts();
    return allProducts.find(p => p.id === productId);
}

// Función para obtener precio por opción
function getPriceByOption(product, optionValue) {
    const option = product.options.find(opt => opt.value === optionValue);
    return option ? option.price : product.defaultPrice;
}

// Exportar configuración
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        productConfigModerno,
        getProductsByCategory,
        getAllProducts,
        findProductById,
        getPriceByOption
    };
}
