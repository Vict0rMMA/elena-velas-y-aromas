<template>
  <div class="whatsapp-float">
    <button 
      class="whatsapp-btn"
      @click="openWhatsApp"
      :title="tooltipText"
    >
      <i class="fab fa-whatsapp"></i>
    </button>
    <div class="whatsapp-tooltip" v-if="showTooltip">
      {{ tooltipText }}
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'

export default {
  name: 'WhatsAppButton',
  setup() {
    const showTooltip = ref(false)
    const tooltipText = '¡Chatea con nosotros!'

    const openWhatsApp = () => {
      const message = encodeURIComponent("Hola 👋, estoy interesado en las velas. ¿Me das más información?")
      const phoneNumber = "573008220389"
      const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`
      window.open(url, '_blank')
    }

    let tooltipTimer = null

    const showTooltipHandler = () => {
      showTooltip.value = true
      if (tooltipTimer) clearTimeout(tooltipTimer)
      tooltipTimer = setTimeout(() => {
        showTooltip.value = false
      }, 3000)
    }

    const hideTooltipHandler = () => {
      if (tooltipTimer) clearTimeout(tooltipTimer)
      showTooltip.value = false
    }

    onMounted(() => {
      // Show tooltip after 3 seconds
      setTimeout(() => {
        showTooltipHandler()
      }, 3000)
    })

    onUnmounted(() => {
      if (tooltipTimer) clearTimeout(tooltipTimer)
    })

    return {
      showTooltip,
      tooltipText,
      openWhatsApp
    }
  }
}
</script>

<style scoped>
.whatsapp-float {
  position: fixed;
  bottom: 20px;
  left: 20px;
  z-index: 1000;
}

.whatsapp-btn {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, #4CAF50 0%, #66BB6A 100%);
  border: none;
  color: #fff;
  font-size: 1.8rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(76, 175, 80, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.whatsapp-btn:hover {
  transform: scale(1.1);
  box-shadow: 0 6px 25px rgba(76, 175, 80, 0.5);
}

.whatsapp-btn:active {
  transform: scale(0.95);
}

.whatsapp-tooltip {
  position: absolute;
  bottom: 70px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.9);
  color: #fff;
  padding: 8px 12px;
  border-radius: 8px;
  font-size: 0.8rem;
  white-space: nowrap;
  opacity: 0;
  animation: fadeInTooltip 0.3s ease forwards;
  pointer-events: none;
}

.whatsapp-tooltip::after {
  content: '';
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  border: 5px solid transparent;
  border-top-color: rgba(0, 0, 0, 0.9);
}

@keyframes fadeInTooltip {
  from {
    opacity: 0;
    transform: translateX(-50%) translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
}

/* Responsive */
@media (max-width: 480px) {
  .whatsapp-float {
    bottom: 16px;
    left: 16px;
  }
  
  .whatsapp-btn {
    width: 55px;
    height: 55px;
    font-size: 1.6rem;
  }
  
  .whatsapp-tooltip {
    bottom: 65px;
    font-size: 0.75rem;
    padding: 6px 10px;
  }
}
</style>
