<template>
  <div id="app">
    <Header />
    <main class="main-content">
      <router-view />
    </main>
    <FloatingCart />
    <WhatsAppButton />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import FloatingCart from './components/FloatingCart.vue'
import WhatsAppButton from './components/WhatsAppButton.vue'

export default {
  name: 'App',
  components: {
    Header,
    FloatingCart,
    WhatsAppButton
  }
}
</script>

<style>
.main-content {
  padding-top: 70px;
  min-height: 100vh;
}

/* Smooth transitions */
* {
  transition: all 0.3s ease;
}

/* Touch optimizations */
button, .btn, .touch-target {
  min-height: 44px;
  min-width: 44px;
  touch-action: manipulation;
}

/* Scroll behavior */
html {
  scroll-behavior: smooth;
}

/* Hide scrollbar but keep functionality */
::-webkit-scrollbar {
  width: 0px;
  background: transparent;
}

/* iOS safe area */
@supports (padding: max(0px)) {
  .main-content {
    padding-top: max(70px, env(safe-area-inset-top));
  }
}
</style>
