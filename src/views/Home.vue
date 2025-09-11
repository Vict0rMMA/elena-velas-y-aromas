<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-content">
        <h1 class="hero-title">
          ✨ Donde el aroma y la luz se encuentran ✨
        </h1>
        <p class="hero-subtitle">
          Velas artesanales que iluminan tus momentos especiales
        </p>
        <router-link to="/products" class="btn btn-primary hero-btn">
          Ver Catálogo
        </router-link>
      </div>
    </section>

    <!-- Promotions Section -->
    <section class="promotions-section">
      <div class="promotion-banner">
        <span class="promotion-emoji">🔥</span>
        <strong>2x1 en velas decorativas</strong>
      </div>
      <div class="promotion-banner">
        <span class="promotion-emoji">🚚</span>
        <strong>Envío gratis por compras mayores a $50.000</strong>
      </div>
    </section>

    <!-- Categories Section -->
    <section class="categories-section">
      <h2 class="section-title">Nuestras Categorías</h2>
      <div class="catalog-buttons">
        <router-link to="/products/amor" class="category-card">
          <span class="emoji">💝</span>
          <span class="text">Amor y Amistad</span>
        </router-link>
        <router-link to="/products/baby" class="category-card">
          <span class="emoji">👶</span>
          <span class="text">Baby Shower</span>
        </router-link>
        <router-link to="/products/comunion" class="category-card">
          <span class="emoji">✝️</span>
          <span class="text">Primera Comunión</span>
        </router-link>
        <router-link to="/products/navidad" class="category-card">
          <span class="emoji">🎄</span>
          <span class="text">Navidad</span>
        </router-link>
      </div>
    </section>

    <!-- Featured Products -->
    <section class="featured-section">
      <h2 class="section-title">⭐ Productos Destacados</h2>
      <div class="products-container">
        <div class="products-grid">
          <div 
            v-for="product in featuredProducts" 
            :key="product.id"
            class="product-card"
          >
            <div class="product-image-container">
              <img :src="product.image" :alt="product.name" class="product-image">
              <button 
                class="wishlist-btn"
                @click="toggleWishlist(product)"
                :class="{ active: wishlistStore.isInWishlist(product.id) }"
              >
                <i :class="wishlistStore.isInWishlist(product.id) ? 'fas fa-heart' : 'far fa-heart'"></i>
              </button>
            </div>
            <div class="product-info">
              <h3 class="product-title">{{ product.name }}</h3>
              <p class="product-price">${{ formatPrice(product.price) }}</p>
              <button 
                class="add-to-cart"
                @click="addToCart(product)"
              >
                <i class="fas fa-shopping-cart"></i>
                Añadir al carrito
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Trust Section -->
    <section class="trust-section">
      <h3 class="trust-title">⭐ Lo que dicen nuestros clientes</h3>
      
      <div class="reviews-grid">
        <div class="review-card">
          <div class="review-stars">⭐⭐⭐⭐⭐</div>
          <div class="review-text">"Las velas más hermosas que he visto. Aromas increíbles!"</div>
        </div>
        <div class="review-card">
          <div class="review-stars">⭐⭐⭐⭐⭐</div>
          <div class="review-text">"Excelente calidad y entrega rápida. 100% recomendado!"</div>
        </div>
      </div>
      
      <div class="best-sellers">
        <h4>🏆 Velas más vendidas</h4>
        <p>Corazón Rosas, Peonía Grande, Mariposa 2 Mechas</p>
      </div>
      
      <div class="security-badge">
        <i class="fas fa-shield-alt"></i>
        <span>Pagos 100% seguros</span>
      </div>
    </section>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useCartStore } from '../stores/cart'
import { useWishlistStore } from '../stores/wishlist'

export default {
  name: 'Home',
  setup() {
    const cartStore = useCartStore()
    const wishlistStore = useWishlistStore()
    
    const featuredProducts = ref([
      {
        id: 1,
        name: 'Corazón Rosas',
        price: 25000,
        image: '/assets/productos/2.png'
      },
      {
        id: 2,
        name: 'Peonía Grande',
        price: 30000,
        image: '/assets/productos/3.png'
      },
      {
        id: 3,
        name: 'Mariposa 2 Mechas',
        price: 28000,
        image: '/assets/productos/4.png'
      },
      {
        id: 4,
        name: 'Vela Navidad',
        price: 22000,
        image: '/assets/productos/navidad.jpeg'
      }
    ])

    const addToCart = (product) => {
      cartStore.addToCart(product)
      // Show success feedback
      showSuccessMessage('Producto agregado al carrito')
    }

    const toggleWishlist = (product) => {
      wishlistStore.toggleWishlist(product)
    }

    const formatPrice = (price) => {
      return new Intl.NumberFormat('es-CO').format(price)
    }

    const showSuccessMessage = (message) => {
      // Create temporary success message
      const successDiv = document.createElement('div')
      successDiv.textContent = message
      successDiv.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: #4CAF50;
        color: white;
        padding: 12px 24px;
        border-radius: 8px;
        z-index: 10000;
        font-weight: 600;
        box-shadow: 0 4px 15px rgba(76, 175, 80, 0.3);
      `
      document.body.appendChild(successDiv)
      
      setTimeout(() => {
        successDiv.remove()
      }, 2000)
    }

    onMounted(() => {
      cartStore.loadCart()
      wishlistStore.loadWishlist()
    })

    return {
      featuredProducts,
      cartStore,
      wishlistStore,
      addToCart,
      toggleWishlist,
      formatPrice
    }
  }
}
</script>

<style scoped>
.home {
  min-height: 100vh;
}

/* Hero Section */
.hero-section {
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.8) 0%, rgba(26, 26, 26, 0.8) 100%),
              url('/assets/productos/2.png') center/cover;
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 40px 20px;
  position: relative;
  overflow: hidden;
}

.hero-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at center, rgba(212, 175, 55, 0.1) 0%, transparent 70%);
  animation: waveEffect 20s ease-in-out infinite;
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 600px;
}

.hero-title {
  font-family: 'Playfair Display', serif;
  font-size: 2.5rem;
  color: var(--primary-gold);
  margin-bottom: 20px;
  text-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
  line-height: 1.2;
}

.hero-subtitle {
  font-size: 1.2rem;
  color: var(--text-light);
  margin-bottom: 30px;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.5;
}

.hero-btn {
  font-size: 1.1rem;
  padding: 15px 30px;
  border-radius: 25px;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

/* Promotions Section */
.promotions-section {
  background: linear-gradient(135deg, #ff4444 0%, #ff6666 100%);
  margin: 20px;
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0 5px 20px rgba(255, 68, 68, 0.3);
  position: relative;
  overflow: hidden;
}

.promotions-section::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  animation: shimmer 3s infinite;
}

.promotion-banner {
  background: linear-gradient(135deg, var(--primary-gold) 0%, var(--secondary-gold) 100%);
  color: #000;
  padding: 15px 20px;
  border-radius: 12px;
  margin-bottom: 10px;
  text-align: center;
  font-weight: 600;
  box-shadow: 0 3px 10px rgba(212, 175, 55, 0.3);
  position: relative;
  z-index: 2;
}

.promotion-banner:last-child {
  margin-bottom: 0;
}

.promotion-emoji {
  font-size: 1.5rem;
  margin-right: 8px;
}

/* Categories Section */
.categories-section {
  padding: 40px 20px;
}

.section-title {
  font-family: 'Playfair Display', serif;
  font-size: 2rem;
  color: var(--primary-gold);
  text-align: center;
  margin-bottom: 30px;
  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
}

.catalog-buttons {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  max-width: 400px;
  margin: 0 auto;
}

.category-card {
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.8) 0%, rgba(26, 26, 26, 0.8) 100%);
  border: 1px solid rgba(212, 175, 55, 0.3);
  border-radius: 16px;
  padding: 30px 20px;
  text-align: center;
  text-decoration: none;
  color: var(--text-light);
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}

.category-card:hover {
  transform: translateY(-5px);
  border-color: var(--primary-gold);
  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.6);
}

.category-card .emoji {
  font-size: 2.5rem;
  display: block;
}

.category-card .text {
  color: var(--primary-gold);
  font-weight: 600;
  font-size: 1rem;
}

/* Featured Products */
.featured-section {
  padding: 40px 20px;
}

.products-container {
  overflow-x: auto;
  padding: 10px 0;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.products-container::-webkit-scrollbar {
  display: none;
}

.products-grid {
  display: flex;
  gap: 20px;
  padding: 0 5px;
  min-width: max-content;
}

.product-card {
  background: var(--card-bg);
  border: 1px solid var(--border-gold);
  border-radius: 16px;
  padding: 20px;
  min-width: 250px;
  max-width: 250px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  position: relative;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.6);
}

.product-image-container {
  position: relative;
  margin-bottom: 15px;
}

.product-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 12px;
  border: 1px solid rgba(212, 175, 55, 0.2);
}

.wishlist-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  background: rgba(0, 0, 0, 0.7);
  border: none;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 10;
}

.wishlist-btn:hover {
  background: rgba(255, 0, 0, 0.8);
  transform: scale(1.1);
}

.wishlist-btn.active {
  color: #ff4444;
  background: rgba(255, 68, 68, 0.2);
}

.product-info {
  text-align: center;
}

.product-title {
  color: var(--text-light);
  font-size: 1.1rem;
  margin-bottom: 8px;
  line-height: 1.3;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.product-price {
  color: var(--primary-gold);
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: 15px;
  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
}

.add-to-cart {
  width: 100%;
  background: linear-gradient(135deg, var(--primary-gold) 0%, var(--secondary-gold) 100%);
  border: none;
  border-radius: 12px;
  padding: 12px;
  color: #000;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 3px 10px rgba(212, 175, 55, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.add-to-cart:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(212, 175, 55, 0.5);
}

/* Trust Section */
.trust-section {
  background: rgba(0, 0, 0, 0.6);
  margin: 20px;
  border-radius: 15px;
  padding: 20px;
  border: 1px solid rgba(212, 175, 55, 0.3);
}

.trust-title {
  color: var(--primary-gold);
  text-align: center;
  margin-bottom: 20px;
  font-size: 1.5rem;
}

.reviews-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  margin-bottom: 20px;
}

.review-card {
  background: rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  padding: 15px;
  text-align: center;
  border: 1px solid rgba(212, 175, 55, 0.2);
}

.review-stars {
  color: #FFD700;
  font-size: 1.2rem;
  margin-bottom: 8px;
}

.review-text {
  font-size: 0.8rem;
  color: var(--text-light);
  line-height: 1.4;
}

.best-sellers {
  background: linear-gradient(135deg, rgba(212, 175, 55, 0.1) 0%, rgba(212, 175, 55, 0.05) 100%);
  border: 2px solid rgba(212, 175, 55, 0.3);
  border-radius: 12px;
  padding: 15px;
  margin-bottom: 15px;
  text-align: center;
}

.best-sellers h4 {
  color: var(--primary-gold);
  margin-bottom: 10px;
  font-size: 1.1rem;
}

.best-sellers p {
  color: var(--text-light);
  font-size: 0.9rem;
  margin: 0;
}

.security-badge {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  color: var(--success);
  font-size: 0.9rem;
}

/* Responsive */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2rem;
  }
  
  .hero-subtitle {
    font-size: 1rem;
  }
  
  .section-title {
    font-size: 1.5rem;
  }
  
  .catalog-buttons {
    grid-template-columns: 1fr;
    max-width: 300px;
  }
  
  .category-card {
    padding: 25px 20px;
  }
  
  .category-card .emoji {
    font-size: 2rem;
  }
  
  .reviews-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .hero-section {
    min-height: 50vh;
    padding: 30px 16px;
  }
  
  .hero-title {
    font-size: 1.8rem;
  }
  
  .hero-subtitle {
    font-size: 0.9rem;
  }
  
  .promotions-section {
    margin: 16px;
    padding: 16px;
  }
  
  .categories-section,
  .featured-section {
    padding: 30px 16px;
  }
  
  .trust-section {
    margin: 16px;
    padding: 16px;
  }
  
  .product-card {
    min-width: 220px;
    max-width: 220px;
  }
}
</style>
