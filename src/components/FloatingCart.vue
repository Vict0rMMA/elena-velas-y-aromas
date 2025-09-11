<template>
  <div class="floating-cart">
    <!-- Cart Button -->
    <button 
      class="cart-btn"
      @click="toggleCart"
      :class="{ 'has-items': cartStore.totalItems > 0 }"
    >
      <i class="fas fa-shopping-cart"></i>
      <span v-if="cartStore.totalItems > 0" class="cart-count">
        {{ cartStore.totalItems }}
      </span>
    </button>

    <!-- Cart Modal -->
    <div class="cart-modal" :class="{ active: cartStore.isOpen }">
      <div class="cart-header">
        <h3>🛒 Tu Carrito</h3>
        <button class="close-btn" @click="closeCart">
          <i class="fas fa-times"></i>
        </button>
      </div>

      <div class="cart-content">
        <div v-if="cartStore.items.length === 0" class="empty-cart">
          <i class="fas fa-shopping-cart"></i>
          <p>Tu carrito está vacío</p>
          <router-link to="/" class="btn btn-primary" @click="closeCart">
            Ver Productos
          </router-link>
        </div>

        <div v-else class="cart-items">
          <div 
            v-for="item in cartStore.items" 
            :key="item.id"
            class="cart-item"
          >
            <img :src="item.image" :alt="item.name" class="item-image">
            <div class="item-details">
              <h4>{{ item.name }}</h4>
              <p class="item-price">${{ formatPrice(item.price) }}</p>
              <div class="quantity-controls">
                <button @click="decreaseQuantity(item.id)" class="qty-btn">-</button>
                <span class="quantity">{{ item.quantity }}</span>
                <button @click="increaseQuantity(item.id)" class="qty-btn">+</button>
              </div>
            </div>
            <button @click="removeItem(item.id)" class="remove-btn">
              <i class="fas fa-trash"></i>
            </button>
          </div>
        </div>
      </div>

      <div v-if="cartStore.items.length > 0" class="cart-footer">
        <div class="cart-total">
          <span>Total: ${{ formatPrice(cartStore.totalPrice) }}</span>
        </div>
        <button class="btn btn-primary checkout-btn" @click="goToCheckout">
          <i class="fas fa-whatsapp"></i>
          Finalizar Compra
        </button>
      </div>
    </div>

    <!-- Cart Overlay -->
    <div 
      class="cart-overlay" 
      :class="{ active: cartStore.isOpen }"
      @click="closeCart"
    ></div>
  </div>
</template>

<script>
import { useCartStore } from '../stores/cart'
import { useRouter } from 'vue-router'

export default {
  name: 'FloatingCart',
  setup() {
    const cartStore = useCartStore()
    const router = useRouter()

    const toggleCart = () => {
      cartStore.toggleCart()
    }

    const closeCart = () => {
      cartStore.closeCart()
    }

    const increaseQuantity = (productId) => {
      const item = cartStore.items.find(item => item.id === productId)
      if (item) {
        cartStore.updateQuantity(productId, item.quantity + 1)
      }
    }

    const decreaseQuantity = (productId) => {
      const item = cartStore.items.find(item => item.id === productId)
      if (item) {
        cartStore.updateQuantity(productId, item.quantity - 1)
      }
    }

    const removeItem = (productId) => {
      cartStore.removeFromCart(productId)
    }

    const formatPrice = (price) => {
      return new Intl.NumberFormat('es-CO').format(price)
    }

    const goToCheckout = () => {
      const message = `Hola 👋, quiero comprar estos productos:\n\n${cartStore.items.map(item => 
        `• ${item.name} x${item.quantity} - $${formatPrice(item.price * item.quantity)}`
      ).join('\n')}\n\nTotal: $${formatPrice(cartStore.totalPrice)}`
      
      const whatsappUrl = `https://api.whatsapp.com/send/?phone=573008220389&text=${encodeURIComponent(message)}`
      window.open(whatsappUrl, '_blank')
      closeCart()
    }

    return {
      cartStore,
      toggleCart,
      closeCart,
      increaseQuantity,
      decreaseQuantity,
      removeItem,
      formatPrice,
      goToCheckout
    }
  }
}
</script>

<style scoped>
.floating-cart {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
}

.cart-btn {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary-gold) 0%, var(--secondary-gold) 100%);
  border: none;
  color: #000;
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(212, 175, 55, 0.4);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.cart-btn:hover {
  transform: scale(1.1);
  box-shadow: 0 6px 25px rgba(212, 175, 55, 0.5);
}

.cart-btn.has-items {
  animation: pulse 2s infinite;
}

.cart-count {
  position: absolute;
  top: -5px;
  right: -5px;
  background: #ff4444;
  color: #fff;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  font-weight: bold;
  border: 2px solid #000;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
}

.cart-modal {
  position: fixed;
  bottom: 90px;
  right: 20px;
  width: 320px;
  max-height: 70vh;
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.95) 0%, rgba(26, 26, 26, 0.95) 100%);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(212, 175, 55, 0.3);
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  transform: translateY(100%) scale(0.8);
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  z-index: 1001;
}

.cart-modal.active {
  transform: translateY(0) scale(1);
  opacity: 1;
  visibility: visible;
}

.cart-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 1px solid rgba(212, 175, 55, 0.3);
}

.cart-header h3 {
  color: var(--primary-gold);
  font-size: 1.2rem;
  margin: 0;
}

.close-btn {
  background: none;
  border: none;
  color: var(--text-light);
  font-size: 1.2rem;
  cursor: pointer;
  padding: 5px;
  border-radius: 50%;
  transition: all 0.3s ease;
}

.close-btn:hover {
  background: rgba(255, 68, 68, 0.2);
  color: #ff4444;
}

.cart-content {
  max-height: 400px;
  overflow-y: auto;
  padding: 20px;
}

.empty-cart {
  text-align: center;
  padding: 40px 20px;
}

.empty-cart i {
  font-size: 3rem;
  color: var(--primary-gold);
  margin-bottom: 16px;
}

.empty-cart p {
  color: var(--text-light);
  margin-bottom: 20px;
}

.cart-items {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.cart-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 12px;
  border: 1px solid rgba(212, 175, 55, 0.2);
}

.item-image {
  width: 50px;
  height: 50px;
  border-radius: 8px;
  object-fit: cover;
}

.item-details {
  flex: 1;
}

.item-details h4 {
  color: var(--text-light);
  font-size: 0.9rem;
  margin: 0 0 4px 0;
  line-height: 1.3;
}

.item-price {
  color: var(--primary-gold);
  font-weight: 600;
  font-size: 0.9rem;
  margin: 0 0 8px 0;
}

.quantity-controls {
  display: flex;
  align-items: center;
  gap: 8px;
}

.qty-btn {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: var(--primary-gold);
  border: none;
  color: #000;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.qty-btn:hover {
  background: var(--secondary-gold);
  transform: scale(1.1);
}

.quantity {
  color: var(--text-light);
  font-weight: 600;
  min-width: 20px;
  text-align: center;
}

.remove-btn {
  background: none;
  border: none;
  color: #ff4444;
  cursor: pointer;
  padding: 8px;
  border-radius: 50%;
  transition: all 0.3s ease;
}

.remove-btn:hover {
  background: rgba(255, 68, 68, 0.2);
  transform: scale(1.1);
}

.cart-footer {
  padding: 20px;
  border-top: 1px solid rgba(212, 175, 55, 0.3);
}

.cart-total {
  text-align: center;
  margin-bottom: 16px;
}

.cart-total span {
  color: var(--primary-gold);
  font-size: 1.2rem;
  font-weight: bold;
}

.checkout-btn {
  width: 100%;
  padding: 12px;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.cart-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  z-index: 999;
}

.cart-overlay.active {
  opacity: 1;
  visibility: visible;
}

/* Responsive */
@media (max-width: 480px) {
  .floating-cart {
    bottom: 16px;
    right: 16px;
  }
  
  .cart-btn {
    width: 55px;
    height: 55px;
    font-size: 1.3rem;
  }
  
  .cart-modal {
    bottom: 80px;
    right: 16px;
    left: 16px;
    width: auto;
  }
}
</style>
