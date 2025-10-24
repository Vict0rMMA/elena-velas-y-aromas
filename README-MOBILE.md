# Elena Velas y Aromas - Versión Móvil Optimizada

## 📱 Descripción

Esta es la versión móvil optimizada de la página web de Elena Velas y Aromas. Ha sido diseñada específicamente para ofrecer la mejor experiencia en dispositivos móviles, con un diseño responsivo que se adapta perfectamente a cualquier tamaño de pantalla.

## ✨ Características Principales

### 🎨 Diseño Responsivo
- **Bootstrap 5**: Sistema de rejilla completamente responsivo
- **Mobile-First**: Diseño optimizado primero para móviles
- **Breakpoints**: Adaptación automática a tablets y escritorio
- **Touch-Friendly**: Botones y elementos optimizados para pantallas táctiles

### 🧭 Navegación Intuitiva
- **Menú Hamburguesa**: Navegación colapsable para móviles
- **Smooth Scroll**: Desplazamiento suave entre secciones
- **Active States**: Indicadores visuales de sección activa
- **Fixed Navigation**: Barra de navegación fija con efecto blur

### 🎠 Carrusel de Promociones
- **Responsive**: 1 banner en móvil, 2 en escritorio
- **Indicadores**: Puntos de navegación intuitivos
- **Controles**: Flechas de navegación
- **Auto-play**: Reproducción automática opcional

### 🛍️ Catálogo de Productos
- **Grid Responsivo**: 
  - Móvil: 1 producto por fila
  - Tablet: 2 productos por fila
  - Escritorio: 3 productos por fila
- **Filtros por Categoría**: Amor y Amistad, Baby Shower, Primera Comunión, Navidad
- **Cards Uniformes**: Diseño consistente con imágenes fluidas
- **Modal de Producto**: Vista detallada con opciones de personalización

### 🛒 Carrito de Compras
- **Persistencia**: Guardado en localStorage
- **Contador Visual**: Badge con número de productos
- **Modal Responsivo**: Vista completa del carrito
- **Gestión de Cantidades**: Incrementar/decrementar productos
- **WhatsApp Integration**: Envío directo de pedidos

### 🎯 Optimizaciones Técnicas
- **SEO Optimizado**: Meta tags completos, Open Graph, Twitter Cards
- **Performance**: Lazy loading, animaciones optimizadas
- **PWA Ready**: Service Worker y manifest.json
- **Accessibility**: Contraste adecuado, navegación por teclado
- **Error Handling**: Manejo robusto de errores

## 📁 Estructura de Archivos

```
├── index-mobile.html          # Página principal optimizada para móvil
├── css/
│   ├── style-mobile.css       # Estilos optimizados para móvil
│   └── style.css              # Estilos originales (backup)
├── js/
│   ├── script-mobile.js       # JavaScript optimizado para móvil
│   ├── script.js              # JavaScript original (backup)
│   └── product-config.js      # Configuración de productos
├── assets/
│   ├── logo.png               # Logo de la empresa
│   └── productos/             # Imágenes de productos
└── README-MOBILE.md           # Este archivo
```

## 🚀 Cómo Usar

### 1. Abrir la Página
Simplemente abre `index-mobile.html` en cualquier navegador web.

### 2. Navegación
- **Móvil**: Toca el ícono de hamburguesa (☰) para abrir el menú
- **Escritorio**: Usa el menú horizontal en la parte superior

### 3. Explorar Productos
- Usa los filtros de categoría para ver productos específicos
- Toca cualquier producto para ver opciones de personalización
- Selecciona tamaño y fragancia para ver el precio final

### 4. Agregar al Carrito
- Configura las opciones del producto
- Toca "Agregar al Carrito"
- El contador del carrito se actualizará automáticamente

### 5. Finalizar Compra
- Toca el ícono del carrito para ver tus productos
- Revisa tu pedido y ajusta cantidades si es necesario
- Toca "Comprar por WhatsApp" para enviar tu pedido

## 📱 Características Móviles Específicas

### Touch Interactions
- **Botones grandes**: Mínimo 44px para fácil toque
- **Feedback táctil**: Animaciones de escala en toque
- **Gestos**: Swipe en carrusel de promociones

### Performance
- **Carga rápida**: Imágenes optimizadas y lazy loading
- **Animaciones fluidas**: 60fps en dispositivos móviles
- **Memoria eficiente**: Gestión optimizada del DOM

### Usabilidad
- **Una mano**: Navegación accesible con el pulgar
- **Lectura fácil**: Tipografía legible en pantallas pequeñas
- **Acceso rápido**: Botones de contacto prominentes

## 🎨 Personalización

### Colores
Los colores principales están definidos como variables CSS en `:root`:
```css
:root {
    --primary-color: #667eea;
    --secondary-color: #764ba2;
    --accent-color: #ffd700;
    --success-color: #4ade80;
    /* ... más variables */
}
```

### Fuentes
- **Títulos**: Playfair Display (elegante y legible)
- **Texto**: Montserrat (moderna y clara)

### Animaciones
- **Entrada**: fadeInUp para elementos
- **Hover**: transform y shadow effects
- **Loading**: spinners y estados de carga

## 🔧 Mantenimiento

### Agregar Productos
Edita `js/product-config.js` para agregar nuevos productos:

```javascript
const productConfig = {
    amorYAmistad: [
        {
            id: 'nuevo-producto',
            name: 'Nombre del Producto',
            price: 25000,
            image: 'assets/productos/imagen.png',
            description: 'Descripción del producto',
            sizes: ['Pequeña', 'Mediana', 'Grande'],
            fragrances: ['Fragancia1', 'Fragancia2']
        }
    ]
};
```

### Modificar Promociones
Edita la sección de promociones en `index-mobile.html`:

```html
<div class="carousel-item">
    <div class="promotion-card text-center">
        <div class="promotion-icon mb-3">
            <i class="fas fa-icon"></i>
        </div>
        <h3>Título de Promoción</h3>
        <p>Descripción de la promoción</p>
        <div class="promotion-discount">X% OFF</div>
    </div>
</div>
```

## 📊 Métricas de Performance

### Lighthouse Scores (Objetivo)
- **Performance**: 90+
- **Accessibility**: 95+
- **Best Practices**: 95+
- **SEO**: 100

### Tiempo de Carga
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## 🌐 Compatibilidad

### Navegadores
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

### Dispositivos
- ✅ iOS 14+
- ✅ Android 8+
- ✅ Tablets (iPad, Android)
- ✅ Escritorio (Windows, macOS, Linux)

## 📞 Soporte

Para soporte técnico o preguntas sobre la implementación:
- **Email**: soporte@elena-velas.com
- **WhatsApp**: +57 300 822 0389

## 📄 Licencia

© 2024 Elena Velas y Aromas. Todos los derechos reservados.

---

**Nota**: Esta versión móvil está optimizada para ofrecer la mejor experiencia de usuario en dispositivos móviles, manteniendo la identidad visual de la marca mientras mejora significativamente la usabilidad y el rendimiento.
