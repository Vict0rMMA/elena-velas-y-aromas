<template>
  <header class="header">
    <div class="header-content">
      <!-- Logo -->
      <div class="logo-section">
        <img src="/assets/logo.png" alt="Elena Velas" class="logo">
        <div class="brand-text">
          <h1>Elena</h1>
          <p>VELAS Y AROMAS</p>
        </div>
      </div>

      <!-- Mobile Menu Button -->
      <button 
        class="mobile-menu-btn"
        @click="toggleMobileMenu"
        :class="{ active: isMobileMenuOpen }"
      >
        <i class="fas fa-bars"></i>
      </button>
    </div>

    <!-- Mobile Menu -->
    <div class="mobile-menu" :class="{ active: isMobileMenuOpen }">
      <div class="mobile-menu-content">
        <nav class="mobile-nav">
          <router-link to="/" @click="closeMobileMenu" class="nav-link">
            <i class="fas fa-home"></i>
            <span>Inicio</span>
          </router-link>
          <router-link to="/products/amor" @click="closeMobileMenu" class="nav-link">
            <i class="fas fa-heart"></i>
            <span>Amor y Amistad</span>
          </router-link>
          <router-link to="/products/baby" @click="closeMobileMenu" class="nav-link">
            <i class="fas fa-baby"></i>
            <span>Baby Shower</span>
          </router-link>
          <router-link to="/products/comunion" @click="closeMobileMenu" class="nav-link">
            <i class="fas fa-church"></i>
            <span>Primera Comunión</span>
          </router-link>
          <router-link to="/products/navidad" @click="closeMobileMenu" class="nav-link">
            <i class="fas fa-tree"></i>
            <span>Navidad</span>
          </router-link>
        </nav>
      </div>
    </div>

    <!-- Mobile Menu Overlay -->
    <div 
      class="mobile-menu-overlay" 
      :class="{ active: isMobileMenuOpen }"
      @click="closeMobileMenu"
    ></div>
  </header>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'Header',
  setup() {
    const isMobileMenuOpen = ref(false)

    const toggleMobileMenu = () => {
      isMobileMenuOpen.value = !isMobileMenuOpen.value
    }

    const closeMobileMenu = () => {
      isMobileMenuOpen.value = false
    }

    return {
      isMobileMenuOpen,
      toggleMobileMenu,
      closeMobileMenu
    }
  }
}
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.95) 0%, rgba(26, 26, 26, 0.95) 100%);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(212, 175, 55, 0.3);
  z-index: 1000;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  padding: 0 20px;
  max-width: 100%;
}

.logo-section {
  display: flex;
  align-items: center;
  gap: 12px;
}

.logo {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 2px 10px rgba(212, 175, 55, 0.3);
}

.brand-text h1 {
  font-family: 'Playfair Display', serif;
  font-size: 1.2rem;
  color: var(--primary-gold);
  margin: 0;
  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
}

.brand-text p {
  font-size: 0.7rem;
  color: var(--text-light);
  margin: 0;
  font-weight: 500;
  letter-spacing: 1px;
}

.mobile-menu-btn {
  background: linear-gradient(135deg, var(--primary-gold) 0%, var(--secondary-gold) 100%);
  border: none;
  border-radius: 12px;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(212, 175, 55, 0.4);
}

.mobile-menu-btn:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 20px rgba(212, 175, 55, 0.5);
}

.mobile-menu-btn.active {
  background: linear-gradient(135deg, #ff4444 0%, #ff6666 100%);
  color: #fff;
}

.mobile-menu {
  position: fixed;
  top: 70px;
  right: -100%;
  width: 280px;
  height: calc(100vh - 70px);
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.98) 0%, rgba(26, 26, 26, 0.98) 100%);
  backdrop-filter: blur(20px);
  border-left: 1px solid rgba(212, 175, 55, 0.3);
  transition: right 0.3s ease;
  z-index: 999;
  overflow-y: auto;
}

.mobile-menu.active {
  right: 0;
}

.mobile-menu-content {
  padding: 20px;
}

.mobile-nav {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 20px;
  background: rgba(0, 0, 0, 0.4);
  border: 1px solid rgba(212, 175, 55, 0.3);
  border-radius: 12px;
  color: var(--text-light);
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  min-height: 50px;
}

.nav-link:hover {
  background: rgba(212, 175, 55, 0.1);
  border-color: var(--primary-gold);
  color: var(--primary-gold);
  transform: translateX(5px);
}

.nav-link i {
  font-size: 1.1rem;
  width: 20px;
  text-align: center;
}

.mobile-menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  z-index: 998;
}

.mobile-menu-overlay.active {
  opacity: 1;
  visibility: visible;
}

/* Responsive */
@media (max-width: 480px) {
  .header {
    height: 60px;
  }
  
  .header-content {
    padding: 0 16px;
  }
  
  .logo {
    width: 35px;
    height: 35px;
  }
  
  .brand-text h1 {
    font-size: 1.1rem;
  }
  
  .brand-text p {
    font-size: 0.65rem;
  }
  
  .mobile-menu-btn {
    width: 40px;
    height: 40px;
    font-size: 1.1rem;
  }
  
  .mobile-menu {
    top: 60px;
    height: calc(100vh - 60px);
    width: 100%;
  }
}
</style>
