# 🚀 Elena Velas y Aromas - Vue.js Mobile App

## ✨ Nueva Versión con Vue.js 3 + Vite

Esta es una versión completamente nueva de tu página móvil usando **Vue.js 3** con **Vite**, específicamente optimizada para dispositivos móviles.

### 🛠️ Tecnologías Implementadas

- **Vue.js 3** - Framework JavaScript moderno
- **Vite** - Build tool ultra rápido
- **Pinia** - Gestión de estado
- **Vue Router** - Navegación SPA
- **PWA** - Progressive Web App
- **CSS Grid & Flexbox** - Layouts responsivos
- **LocalStorage** - Persistencia de datos

### 📱 Características Móviles

- ✅ **Diseño 100% móvil-first**
- ✅ **PWA instalable como app**
- ✅ **Carrito flotante con animaciones**
- ✅ **Lista de deseos persistente**
- ✅ **Navegación fluida**
- ✅ **Optimización táctil**
- ✅ **Carga ultra rápida**
- ✅ **Funciona offline**

### 🚀 Instalación y Uso

#### 1. Instalar dependencias
```bash
npm install
```

#### 2. Ejecutar en desarrollo
```bash
npm run dev
```

#### 3. Construir para producción
```bash
npm run build
```

#### 4. Previsualizar producción
```bash
npm run preview
```

### 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── Header.vue      # Navegación móvil
│   ├── FloatingCart.vue # Carrito flotante
│   └── WhatsAppButton.vue # Botón WhatsApp
├── views/              # Páginas principales
│   └── Home.vue        # Página principal
├── stores/             # Gestión de estado
│   ├── cart.js         # Store del carrito
│   └── wishlist.js     # Store de deseos
├── router/             # Configuración de rutas
│   └── index.js        # Rutas de la app
├── assets/             # Recursos estáticos
│   └── style.css       # Estilos globales
├── App.vue             # Componente raíz
└── main.js             # Punto de entrada
```

### 🎨 Características de Diseño

#### **Header Móvil**
- Logo compacto con marca
- Menú hamburguesa funcional
- Navegación deslizable

#### **Hero Section**
- Fondo con imagen de producto
- Texto centrado y elegante
- Botón CTA prominente

#### **Categorías**
- Grid 2x2 en móvil
- Cards con iconos grandes
- Efectos hover suaves

#### **Productos**
- Carrusel horizontal
- Cards estilo Instagram
- Botones de acción claros

#### **Carrito Flotante**
- Botón circular dorado
- Modal deslizable
- Contador de productos
- Integración WhatsApp

### 🔧 Configuración PWA

La app está configurada como PWA con:
- **Manifest.json** - Configuración de app
- **Service Worker** - Cache y offline
- **Iconos** - Para instalación
- **Meta tags** - Para iOS/Android

### 📱 Optimizaciones Móviles

#### **Rendimiento**
- Lazy loading de imágenes
- Code splitting automático
- Minificación optimizada
- Cache inteligente

#### **UX/UI**
- Touch targets de 44px mínimo
- Scroll suave
- Animaciones optimizadas
- Feedback visual inmediato

#### **Accesibilidad**
- Navegación por teclado
- Contraste optimizado
- Textos legibles
- Iconos descriptivos

### 🚀 Despliegue

#### **Vercel (Recomendado)**
```bash
npm run build
# Subir carpeta 'dist' a Vercel
```

#### **Netlify**
```bash
npm run build
# Arrastrar carpeta 'dist' a Netlify
```

#### **GitHub Pages**
```bash
npm run build
# Subir contenido de 'dist' a gh-pages
```

### 📊 Ventajas vs HTML Tradicional

| Característica | HTML Tradicional | Vue.js 3 |
|----------------|------------------|----------|
| **Rendimiento** | ⭐⭐ | ⭐⭐⭐⭐⭐ |
| **Mantenimiento** | ⭐⭐ | ⭐⭐⭐⭐⭐ |
| **Escalabilidad** | ⭐⭐ | ⭐⭐⭐⭐⭐ |
| **UX Móvil** | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| **PWA** | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| **Carga** | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ |

### 🎯 Próximos Pasos

1. **Instalar dependencias**: `npm install`
2. **Ejecutar desarrollo**: `npm run dev`
3. **Probar en móvil**: Abrir en dispositivo
4. **Construir producción**: `npm run build`
5. **Desplegar**: Subir a Vercel/Netlify

### 📞 Soporte

Si necesitas ayuda con la implementación:
- Revisa la documentación de Vue.js 3
- Consulta la guía de Vite
- Verifica la configuración PWA

---

**¡Tu página móvil ahora es una app profesional! 🚀📱**
