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
            name: 'Set Primera Comunión 1',
            description: 'Velas especiales para primera comunión',
            image: 'assets/productos/catalogo de primera comunion/1.png',
            options: [
                { value: 'detal', label: 'Detal - $25,000', price: 25000 },
                { value: 'mayorista', label: 'Mayorista - $20,000', price: 20000 }
            ],
            defaultPrice: 25000
        },
        {
            id: 'comunion-2',
            name: 'Set Primera Comunión 2',
            description: 'Diseños religiosos elegantes',
            image: 'assets/productos/catalogo de primera comunion/2.png',
            options: [
                { value: 'detal', label: 'Detal - $28,000', price: 28000 },
                { value: 'mayorista', label: 'Mayorista - $22,000', price: 22000 }
            ],
            defaultPrice: 28000
        },
        {
            id: 'comunion-3',
            name: 'Set Primera Comunión 3',
            description: 'Velas bendecidas con fe',
            image: 'assets/productos/catalogo de primera comunion/3.png',
            options: [
                { value: 'detal', label: 'Detal - $30,000', price: 30000 },
                { value: 'mayorista', label: 'Mayorista - $24,000', price: 24000 }
            ],
            defaultPrice: 30000
        },
        {
            id: 'comunion-4',
            name: 'Set Primera Comunión 4',
            description: 'Diseños únicos y especiales',
            image: 'assets/productos/catalogo de primera comunion/4.png',
            options: [
                { value: 'detal', label: 'Detal - $26,000', price: 26000 },
                { value: 'mayorista', label: 'Mayorista - $21,000', price: 21000 }
            ],
            defaultPrice: 26000
        },
        {
            id: 'comunion-5',
            name: 'Set Primera Comunión 5',
            description: 'Velas bendecidas con fe',
            image: 'assets/productos/catalogo de primera comunion/5.png',
            options: [
                { value: 'detal', label: 'Detal - $32,000', price: 32000 },
                { value: 'mayorista', label: 'Mayorista - $26,000', price: 26000 }
            ],
            defaultPrice: 32000
        },
        {
            id: 'comunion-6',
            name: 'Set Primera Comunión 6',
            description: 'Diseños religiosos elegantes',
            image: 'assets/productos/catalogo de primera comunion/6.png',
            options: [
                { value: 'detal', label: 'Detal - $27,000', price: 27000 },
                { value: 'mayorista', label: 'Mayorista - $22,000', price: 22000 }
            ],
            defaultPrice: 27000
        },
        {
            id: 'comunion-7',
            name: 'Set Primera Comunión 7',
            description: 'Velas especiales para primera comunión',
            image: 'assets/productos/catalogo de primera comunion/7.png',
            options: [
                { value: 'detal', label: 'Detal - $29,000', price: 29000 },
                { value: 'mayorista', label: 'Mayorista - $23,000', price: 23000 }
            ],
            defaultPrice: 29000
        },
        {
            id: 'comunion-8',
            name: 'Set Primera Comunión 8',
            description: 'Diseños únicos y especiales',
            image: 'assets/productos/catalogo de primera comunion/8.png',
            options: [
                { value: 'detal', label: 'Detal - $31,000', price: 31000 },
                { value: 'mayorista', label: 'Mayorista - $25,000', price: 25000 }
            ],
            defaultPrice: 31000
        }
    ],
    
    // Catálogo de Navidad
    navidad: [
        { id: 'navidad-2',  name: 'VELA DEGRADE LARGA MARCADA', image: 'assets/productos/catalogo de navidad/2.jpg',  options: [ { value: 'detal-bolsa', label: 'Detal Bolsa - $17,500', price: 17500 }, { value: 'detal-caja', label: 'Detal Caja - $18,500', price: 18500 }, { value: 'mayorista-bolsa', label: 'Mayorista Bolsa - $15,500', price: 15500 }, { value: 'mayorista-caja', label: 'Mayorista Caja - $16,900', price: 16900 } ], defaultPrice: 17500 },
        { id: 'navidad-3',  name: 'VELA MARCADA', image: 'assets/productos/catalogo de navidad/3.jpg',  options: [ { value: 'detal-bolsa-grande', label: 'Detal Bolsa Grande - $10,800', price: 10800 }, { value: 'detal-caja-grande', label: 'Detal Caja Grande - $12,500', price: 12500 }, { value: 'detal-bolsa-pequena', label: 'Detal Bolsa Pequeña - $10,500', price: 10500 }, { value: 'detal-caja-pequena', label: 'Detal Caja Pequeña - $11,500', price: 11500 }, { value: 'mayorista-bolsa-grande', label: 'Mayorista Bolsa Grande - $9,800', price: 9800 }, { value: 'mayorista-caja-grande', label: 'Mayorista Caja Grande - $11,500', price: 11500 }, { value: 'mayorista-bolsa-pequena', label: 'Mayorista Bolsa Pequeña - $9,000', price: 9000 }, { value: 'mayorista-caja-pequena', label: 'Mayorista Caja Pequeña - $10,500', price: 10500 } ], defaultPrice: 10800 },
        { id: 'navidad-4',  name: 'VELA DEGRADE PEQUEÑA', image: 'assets/productos/catalogo de navidad/4.jpg',  options: [ { value: 'detal-bolsa', label: 'Detal Bolsa - $15,500', price: 15500 }, { value: 'detal-caja', label: 'Detal Caja - $17,000', price: 17000 }, { value: 'mayorista-bolsa', label: 'Mayorista Bolsa - $14,000', price: 14000 }, { value: 'mayorista-caja', label: 'Mayorista Caja - $15,900', price: 15900 } ], defaultPrice: 15500 },
        { id: 'navidad-5',  name: 'VELA MIRELLA', image: 'assets/productos/catalogo de navidad/5.jpg',  options: [ { value: 'detal-bolsa', label: 'Detal Bolsa - $16,900', price: 16900 }, { value: 'detal-caja', label: 'Detal Caja - $17,500', price: 17500 }, { value: 'mayorista-bolsa', label: 'Mayorista Bolsa - $15,500', price: 15500 }, { value: 'mayorista-caja', label: 'Mayorista Caja - $16,800', price: 16800 } ], defaultPrice: 16900 },
        { id: 'navidad-6',  name: 'VELA BLANCA LARGA MARCADA', image: 'assets/productos/catalogo de navidad/6.jpg',  options: [ { value: 'detal-bolsa', label: 'Detal Bolsa - $10,800', price: 10800 }, { value: 'mayorista-bolsa', label: 'Mayorista Bolsa - $9,800', price: 9800 } ], defaultPrice: 10800 },
        { id: 'navidad-7',  name: 'VELA DORADA', image: 'assets/productos/catalogo de navidad/7.jpg',  options: [ { value: 'detal-bolsa', label: 'Detal Bolsa - $16,900', price: 16900 }, { value: 'detal-caja', label: 'Detal Caja - $17,500', price: 17500 }, { value: 'mayorista-bolsa', label: 'Mayorista Bolsa - $15,500', price: 15500 }, { value: 'mayorista-caja', label: 'Mayorista Caja - $16,800', price: 16800 } ], defaultPrice: 16900 },
        { id: 'navidad-8',  name: 'VELA NAVIDAD', image: 'assets/productos/catalogo de navidad/8.jpg',  options: [ { value: 'detal-bolsa', label: 'Detal Bolsa Tul 6x - $18,500', price: 18500 }, { value: 'detal-caja', label: 'Detal Caja 6x - $19,000', price: 19000 }, { value: 'mayorista-bolsa', label: 'Mayorista Bolsa Tul 6x - $16,800', price: 16800 }, { value: 'mayorista-caja', label: 'Mayorista Caja 6x - $17,500', price: 17500 } ], defaultPrice: 18500 },
        { id: 'navidad-9',  name: 'CAJA VELA PROPOSITO X6 UNIDADES', image: 'assets/productos/catalogo de navidad/9.jpg',  options: [ { value: 'detal-bolsa', label: 'Detal Bolsa Tul 6x - $18,500', price: 18500 }, { value: 'detal-caja', label: 'Detal Caja 6x - $19,000', price: 19000 }, { value: 'mayorista-bolsa', label: 'Mayorista Bolsa Tul 6x - $16,800', price: 16800 }, { value: 'mayorista-caja', label: 'Mayorista Caja 6x - $17,500', price: 17500 } ], defaultPrice: 18500 },
        { id: 'navidad-10', name: 'VELA PROPOSITO INDIVIDUAL', image: 'assets/productos/catalogo de navidad/10.jpg', options: [ { value: 'detal', label: 'Detal - $3,400', price: 3400 }, { value: 'mayorista', label: 'Mayorista - $2,900', price: 2900 } ], defaultPrice: 3400 },
        { id: 'navidad-12', name: 'ARBOL NAVIDAD', image: 'assets/productos/catalogo de navidad/12.jpg', options: [ { value: 'detal-bolsa', label: 'Detal Bolsa - $9,700', price: 9700 }, { value: 'detal-caja', label: 'Detal Caja - $11,500', price: 11500 }, { value: 'mayorista-bolsa', label: 'Mayorista Bolsa - $7,900', price: 7900 }, { value: 'mayorista-caja', label: 'Mayorista Caja - $9,500', price: 9500 } ], defaultPrice: 9700 },
        { id: 'navidad-13', name: 'ARBOL NAVIDAD PINO PEQUEÑO', image: 'assets/productos/catalogo de navidad/13.jpg', options: [ { value: 'detal-bolsa', label: 'Detal Bolsa - $5,600', price: 5600 }, { value: 'detal-caja', label: 'Detal Caja - $6,500', price: 6500 }, { value: 'mayorista-bolsa', label: 'Mayorista Bolsa - $4,100', price: 4100 }, { value: 'mayorista-caja', label: 'Mayorista Caja - $5,500', price: 5500 } ], defaultPrice: 5600 },
        { id: 'navidad-14', name: 'ARBOL NAVIDAD PINO GRANDE', image: 'assets/productos/catalogo de navidad/14.jpg', options: [ { value: 'detal-bolsa', label: 'Detal Bolsa - $6,500', price: 6500 }, { value: 'detal-caja', label: 'Detal Caja - $8,500', price: 8500 }, { value: 'mayorista-bolsa', label: 'Mayorista Bolsa - $5,900', price: 5900 }, { value: 'mayorista-caja', label: 'Mayorista Caja - $7,500', price: 7500 } ], defaultPrice: 6500 },
        { id: 'navidad-15', name: 'PESEBRE ESTRELLA ARCO', image: 'assets/productos/catalogo de navidad/15.jpg', options: [ { value: 'detal-bolsa', label: 'Detal Bolsa - $7,500', price: 7500 }, { value: 'detal-caja', label: 'Detal Caja - $8,900', price: 8900 }, { value: 'mayorista-bolsa', label: 'Mayorista Bolsa - $6,100', price: 6100 }, { value: 'mayorista-caja', label: 'Mayorista Caja - $7,900', price: 7900 } ], defaultPrice: 7500 },
        { id: 'navidad-16', name: 'PESEBRE ESTRELLA NAVIDAD', image: 'assets/productos/catalogo de navidad/16.jpg', options: [ { value: 'detal-bolsa', label: 'Detal Bolsa - $6,500', price: 6500 }, { value: 'detal-caja', label: 'Detal Caja - $7,900', price: 7900 }, { value: 'mayorista-bolsa', label: 'Mayorista Bolsa - $5,100', price: 5100 }, { value: 'mayorista-caja', label: 'Mayorista Caja - $6,800', price: 6800 } ], defaultPrice: 6500 },
        { id: 'navidad-17', name: 'PESEBRE ARBOL NAVIDAD', image: 'assets/productos/catalogo de navidad/17.jpg', options: [ { value: 'detal-bolsa', label: 'Detal Bolsa - $6,900', price: 6900 }, { value: 'detal-caja', label: 'Detal Caja - $8,400', price: 8400 }, { value: 'mayorista-bolsa', label: 'Mayorista Bolsa - $6,500', price: 6500 }, { value: 'mayorista-caja', label: 'Mayorista Caja - $7,900', price: 7900 } ], defaultPrice: 6900 },
        { id: 'navidad-18', name: 'PESEBRE CASA NAVIDAD', image: 'assets/productos/catalogo de navidad/18.jpg', options: [ { value: 'detal-bolsa', label: 'Detal Bolsa - $7,500', price: 7500 }, { value: 'detal-caja', label: 'Detal Caja - $9,500', price: 9500 }, { value: 'mayorista-bolsa', label: 'Mayorista Bolsa - $6,800', price: 6800 }, { value: 'mayorista-caja', label: 'Mayorista Caja - $8,800', price: 8800 } ], defaultPrice: 7500 },
        { id: 'navidad-19', name: 'PESEBRE CHOZA', image: 'assets/productos/catalogo de navidad/19.jpg', options: [ { value: 'detal-bolsa', label: 'Detal Bolsa - $6,500', price: 6500 }, { value: 'detal-caja', label: 'Detal Caja - $7,500', price: 7500 }, { value: 'mayorista-bolsa', label: 'Mayorista Bolsa - $5,600', price: 5600 }, { value: 'mayorista-caja', label: 'Mayorista Caja - $6,900', price: 6900 } ], defaultPrice: 6500 },
        { id: 'navidad-20', name: 'BOLA NAVIDAD PESEBRE', image: 'assets/productos/catalogo de navidad/20.jpg', options: [ { value: 'detal-bolsa', label: 'Detal Bolsa - $9,000', price: 9000 }, { value: 'detal-caja', label: 'Detal Caja - $10,500', price: 10500 }, { value: 'mayorista-bolsa', label: 'Mayorista Bolsa - $8,500', price: 8500 }, { value: 'mayorista-caja', label: 'Mayorista Caja - $9,900', price: 9900 } ], defaultPrice: 9000 },
        { id: 'navidad-21', name: 'BOLA NAVIDAD', image: 'assets/productos/catalogo de navidad/21.jpg', options: [ { value: 'detal-bolsa', label: 'Detal Bolsa - $8,000', price: 8000 }, { value: 'detal-caja', label: 'Detal Caja - $9,700', price: 9700 }, { value: 'mayorista-bolsa', label: 'Mayorista Bolsa - $7,500', price: 7500 }, { value: 'mayorista-caja', label: 'Mayorista Caja - $8,500', price: 8500 } ], defaultPrice: 8000 },
        { id: 'navidad-22', name: 'MUÑECO DE NIEVE', image: 'assets/productos/catalogo de navidad/22.jpg', options: [ { value: 'detal-bolsa', label: 'Detal Bolsa - $6,500', price: 6500 }, { value: 'detal-caja', label: 'Detal Caja - $7,500', price: 7500 }, { value: 'mayorista-bolsa', label: 'Mayorista Bolsa - $5,000', price: 5000 }, { value: 'mayorista-caja', label: 'Mayorista Caja - $6,500', price: 6500 } ], defaultPrice: 6500 },
        { id: 'navidad-23', name: 'ANGEL GRANDE Y PEQUEÑO', image: 'assets/productos/catalogo de navidad/23.jpg', options: [ { value: 'detal-grande-bolsa', label: 'Detal Grande Bolsa - $5,500', price: 5500 }, { value: 'detal-pequeno-bolsa', label: 'Detal Pequeño Bolsa - $4,500', price: 4500 }, { value: 'mayorista-grande-bolsa', label: 'Mayorista Grande Bolsa - $4,500', price: 4500 }, { value: 'mayorista-pequeno-bolsa', label: 'Mayorista Pequeño Bolsa - $4,000', price: 4000 } ], defaultPrice: 5500 },
        { id: 'navidad-24', name: 'PESEBRE MINI POLI', image: 'assets/productos/catalogo de navidad/24.jpg', options: [ { value: 'detal-bolsa', label: 'Detal Bolsa - $5,500', price: 5500 }, { value: 'detal-caja', label: 'Detal Caja - $6,700', price: 6700 }, { value: 'mayorista-bolsa', label: 'Mayorista Bolsa - $4,500', price: 4500 }, { value: 'mayorista-caja', label: 'Mayorista Caja - $5,500', price: 5500 } ], defaultPrice: 5500 },
        { id: 'navidad-25', name: 'PEONIA GRANDE', image: 'assets/productos/catalogo de navidad/25.jpg', options: [ { value: 'detal-bolsa', label: 'Detal Bolsa - $4,200', price: 4200 }, { value: 'detal-caja', label: 'Detal Caja - $5,000', price: 5000 }, { value: 'mayorista-bolsa', label: 'Mayorista Bolsa - $3,800', price: 3800 }, { value: 'mayorista-caja', label: 'Mayorista Caja - $4,500', price: 4500 } ], defaultPrice: 4200 },
        { id: 'navidad-26', name: 'POLI MEDIANO NAVIDAD', image: 'assets/productos/catalogo de navidad/26.jpg', options: [ { value: 'detal-bolsa', label: 'Detal Bolsa - $6,500', price: 6500 }, { value: 'detal-caja', label: 'Detal Caja - $7,500', price: 7500 }, { value: 'mayorista-bolsa', label: 'Mayorista Bolsa - $5,500', price: 5500 }, { value: 'mayorista-caja', label: 'Mayorista Caja - $6,800', price: 6800 } ], defaultPrice: 6500 },
        { id: 'navidad-27', name: 'MUÑECO AÑO VIEJO', image: 'assets/productos/catalogo de navidad/27.jpg', options: [ { value: 'detal-bolsa', label: 'Detal Bolsa Tul - $16,000', price: 16000 }, { value: 'detal-caja', label: 'Detal Caja - $18,500', price: 18500 }, { value: 'mayorista-bolsa', label: 'Mayorista Bolsa Tul - $15,000', price: 15000 }, { value: 'mayorista-caja', label: 'Mayorista Caja - $17,500', price: 17500 } ], defaultPrice: 16000 }
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
