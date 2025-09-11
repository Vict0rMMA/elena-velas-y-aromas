import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useWishlistStore = defineStore('wishlist', () => {
  const items = ref([])

  function addToWishlist(product) {
    if (!items.value.find(item => item.id === product.id)) {
      items.value.push(product)
      saveWishlist()
    }
  }

  function removeFromWishlist(productId) {
    const index = items.value.findIndex(item => item.id === productId)
    if (index > -1) {
      items.value.splice(index, 1)
      saveWishlist()
    }
  }

  function toggleWishlist(product) {
    const existingItem = items.value.find(item => item.id === product.id)
    if (existingItem) {
      removeFromWishlist(product.id)
    } else {
      addToWishlist(product)
    }
  }

  function isInWishlist(productId) {
    return items.value.some(item => item.id === productId)
  }

  function saveWishlist() {
    localStorage.setItem('wishlist', JSON.stringify(items.value))
  }

  function loadWishlist() {
    const saved = localStorage.getItem('wishlist')
    if (saved) {
      items.value = JSON.parse(saved)
    }
  }

  return {
    items,
    addToWishlist,
    removeFromWishlist,
    toggleWishlist,
    isInWishlist,
    saveWishlist,
    loadWishlist
  }
})
