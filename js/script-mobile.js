// Elena Velas y Aromas - Mobile Optimized JavaScript

// Global variables
let cart = [];
let currentCategory = 'all';
let currentProduct = null;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    console.log('Elena Velas y Aromas - Mobile version loaded');
    
    // Initialize all components
    initializeNavigation();
    initializeCart();
    initializeProducts();
    initializeCategoryFilters();
    initializeModals();
    initializeScrollEffects();
    
    // Load initial products
    loadProducts(currentCategory);
});

// Navigation functions
function initializeNavigation() {
    const navbar = document.getElementById('mainNav');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Smooth scroll for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                const navbarCollapse = document.getElementById('navbarNav');
                if (navbarCollapse.classList.contains('show')) {
                    const bsCollapse = new bootstrap.Collapse(navbarCollapse);
                    bsCollapse.hide();
                }
                
                // Update active link
                navLinks.forEach(l => l.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });
    
    // Set active link on scroll
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section[id], header[id]');
        const scrollPos = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });
}

// Cart functions
function initializeCart() {
    // Load cart from localStorage
    const savedCart = localStorage.getItem('elena-cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
    updateCartDisplay();
}

function addToCart(productId, productName, price, image, size, fragrance) {
    const existingItem = cart.find(item => 
        item.id === productId && item.size === size && item.fragrance === fragrance
    );
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: productId,
            name: productName,
            price: price,
            image: image,
            size: size,
            fragrance: fragrance,
            quantity: 1,
            timestamp: Date.now()
        });
    }
    
    updateCartDisplay();
    saveCartToStorage();
    showCartNotification();
}

function removeFromCart(productId, size, fragrance) {
    cart = cart.filter(item => 
        !(item.id === productId && item.size === size && item.fragrance === fragrance)
    );
    updateCartDisplay();
    saveCartToStorage();
    
    // Refresh cart modal if open
    const cartModal = document.getElementById('cartModal');
    if (cartModal && cartModal.classList.contains('show')) {
        displayCartItems();
    }
}

function updateCartDisplay() {
    const cartCounter = document.getElementById('cartCounter');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    if (cartCounter) {
        cartCounter.textContent = totalItems;
        cartCounter.style.display = totalItems > 0 ? 'block' : 'none';
    }
}

function saveCartToStorage() {
    localStorage.setItem('elena-cart', JSON.stringify(cart));
}

function showCartNotification() {
    // Remove existing notification
    const existingNotification = document.querySelector('.cart-notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create new notification
    const notification = document.createElement('div');
    notification.className = 'cart-notification';
    notification.innerHTML = `
        <i class="fas fa-check-circle me-2"></i>
        Producto agregado al carrito
    `;
    
    document.body.appendChild(notification);
    
    // Auto remove after 3 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 3000);
}

function showCart() {
    const cartModal = new bootstrap.Modal(document.getElementById('cartModal'));
    displayCartItems();
    cartModal.show();
}

function displayCartItems() {
    const cartItemsContainer = document.getElementById('cartItems');
    const cartTotalElement = document.getElementById('cartTotal');
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `
            <div class="text-center py-4">
                <i class="fas fa-shopping-cart fa-3x text-muted mb-3"></i>
                <p class="text-muted">Tu carrito está vacío</p>
                <button class="btn btn-primary" data-bs-dismiss="modal">
                    <i class="fas fa-shopping-bag me-2"></i>Continuar Comprando
                </button>
            </div>
        `;
        cartTotalElement.textContent = '$0';
        return;
    }
    
    let total = 0;
    const cartItemsHTML = cart.map(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        
        return `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}" class="cart-item-image" onerror="this.src='assets/logo.png'">
                <div class="cart-item-info">
                    <h6>${item.name}</h6>
                    <p>${item.size} - ${item.fragrance}</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <span class="text-success fw-bold">$${itemTotal.toLocaleString('es-CO')}</span>
                        <div class="d-flex align-items-center">
                            <button class="btn btn-sm btn-outline-secondary" onclick="updateQuantity('${item.id}', '${item.size}', '${item.fragrance}', ${item.quantity - 1})">
                                <i class="fas fa-minus"></i>
                            </button>
                            <span class="mx-2">${item.quantity}</span>
                            <button class="btn btn-sm btn-outline-secondary" onclick="updateQuantity('${item.id}', '${item.size}', '${item.fragrance}', ${item.quantity + 1})">
                                <i class="fas fa-plus"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <button class="btn btn-sm btn-outline-danger" onclick="removeFromCart('${item.id}', '${item.size}', '${item.fragrance}')">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `;
    }).join('');
    
    cartItemsContainer.innerHTML = cartItemsHTML;
    cartTotalElement.textContent = `$${total.toLocaleString('es-CO')}`;
}

function updateQuantity(productId, size, fragrance, newQuantity) {
    if (newQuantity <= 0) {
        removeFromCart(productId, size, fragrance);
        return;
    }
    
    const item = cart.find(item => 
        item.id === productId && item.size === size && item.fragrance === fragrance
    );
    
    if (item) {
        item.quantity = newQuantity;
        updateCartDisplay();
        saveCartToStorage();
        displayCartItems();
    }
}

function checkout() {
    if (cart.length === 0) {
        alert('Tu carrito está vacío');
        return;
    }
    
    // Create WhatsApp message
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const message = `¡Hola! Me interesa comprar estos productos de Elena Velas y Aromas:\n\n${cart.map(item => 
        `• ${item.name} (${item.size}, ${item.fragrance}) - $${item.price.toLocaleString('es-CO')} x ${item.quantity}`
    ).join('\n')}\n\nTotal: $${total.toLocaleString('es-CO')}\n\n¿Podrías ayudarme con la compra?`;
    
    const whatsappUrl = `https://api.whatsapp.com/send/?phone=573008220389&text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    
    // Close modal
    const cartModal = bootstrap.Modal.getInstance(document.getElementById('cartModal'));
    if (cartModal) {
        cartModal.hide();
    }
}

// Product functions
function initializeProducts() {
    // Products will be loaded by category filters
}

function loadProducts(category) {
    const productsGrid = document.getElementById('productsGrid');
    if (!productsGrid) return;
    
    // Show loading state
    productsGrid.innerHTML = `
        <div class="col-12 text-center py-5">
            <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Cargando productos...</span>
            </div>
        </div>
    `;
    
    // Simulate loading delay for better UX
    setTimeout(() => {
        displayProducts(category);
    }, 500);
}

function displayProducts(category) {
    const productsGrid = document.getElementById('productsGrid');
    if (!productsGrid) return;
    
    let products = [];
    
    if (category === 'all') {
        products = [
            ...productConfig.amorYAmistad,
            ...productConfig.babyShower,
            ...productConfig.primeraComunion,
            ...productConfig.navidad
        ];
    } else {
        products = productConfig[category] || [];
    }
    
    if (products.length === 0) {
        productsGrid.innerHTML = `
            <div class="col-12 text-center py-5">
                <i class="fas fa-search fa-3x text-muted mb-3"></i>
                <p class="text-muted">No se encontraron productos en esta categoría</p>
            </div>
        `;
        return;
    }
    
    const productsHTML = products.map(product => createProductCard(product)).join('');
    productsGrid.innerHTML = productsHTML;
    
    // Add animation to cards
    const cards = productsGrid.querySelectorAll('.product-card');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
        card.classList.add('animate__animated', 'animate__fadeInUp');
    });
}

function createProductCard(product) {
    return `
        <div class="col-lg-4 col-md-6 col-12">
            <div class="product-card">
                <img src="${product.image}" alt="${product.name}" class="product-image" onerror="this.src='assets/logo.png'">
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <div class="price">Desde $${product.price.toLocaleString('es-CO')}</div>
                    <button class="btn btn-primary add-to-cart-btn" onclick="showProductModal('${product.id}')">
                        <i class="fas fa-shopping-cart me-2"></i>Ver Opciones
                    </button>
                </div>
            </div>
        </div>
    `;
}

// Category filter functions
function initializeCategoryFilters() {
    const filterButtons = document.querySelectorAll('[data-category]');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Load products for category
            currentCategory = category;
            loadProducts(category);
            
            // Scroll to products section
            const productsSection = document.getElementById('products');
            if (productsSection) {
                const offsetTop = productsSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Modal functions
function initializeModals() {
    // Product modal event listeners
    const productModal = document.getElementById('productModal');
    if (productModal) {
        productModal.addEventListener('hidden.bs.modal', function() {
            // Reset modal content
            currentProduct = null;
        });
    }
    
    // Cart modal event listeners
    const cartModal = document.getElementById('cartModal');
    if (cartModal) {
        cartModal.addEventListener('shown.bs.modal', function() {
            displayCartItems();
        });
    }
}

function showProductModal(productId) {
    const product = findProductById(productId);
    if (!product) return;
    
    currentProduct = product;
    
    // Update modal content
    document.getElementById('modalProductImage').src = product.image;
    document.getElementById('modalProductImage').alt = product.name;
    document.getElementById('modalProductName').textContent = product.name;
    document.getElementById('modalProductDescription').textContent = product.description;
    
    // Populate size options
    const sizeSelect = document.getElementById('modalSizeSelect');
    sizeSelect.innerHTML = '<option value="">Seleccionar tamaño</option>' +
        product.sizes.map(size => `<option value="${size}">${size}</option>`).join('');
    
    // Populate fragrance options
    const fragranceSelect = document.getElementById('modalFragranceSelect');
    fragranceSelect.innerHTML = '<option value="">Seleccionar fragancia</option>' +
        product.fragrances.map(fragrance => `<option value="${fragrance}">${fragrance}</option>`).join('');
    
    // Reset price display
    document.getElementById('modalPrice').textContent = 'Selecciona opciones para ver el precio';
    
    // Add event listeners for price calculation
    sizeSelect.onchange = calculateModalPrice;
    fragranceSelect.onchange = calculateModalPrice;
    
    // Show modal
    const modal = new bootstrap.Modal(document.getElementById('productModal'));
    modal.show();
}

function calculateModalPrice() {
    if (!currentProduct) return;
    
    const size = document.getElementById('modalSizeSelect').value;
    const fragrance = document.getElementById('modalFragranceSelect').value;
    const priceDisplay = document.getElementById('modalPrice');
    const addButton = document.getElementById('addToCartModalBtn');
    
    if (size && fragrance) {
        const totalPrice = calculateTotalPrice(currentProduct, size, fragrance);
        priceDisplay.textContent = `$${totalPrice.toLocaleString('es-CO')}`;
        addButton.disabled = false;
    } else {
        priceDisplay.textContent = 'Selecciona opciones para ver el precio';
        addButton.disabled = true;
    }
}

function addToCartFromModal() {
    if (!currentProduct) return;
    
    const size = document.getElementById('modalSizeSelect').value;
    const fragrance = document.getElementById('modalFragranceSelect').value;
    
    if (!size || !fragrance) {
        alert('Por favor selecciona tamaño y fragancia');
        return;
    }
    
    const totalPrice = calculateTotalPrice(currentProduct, size, fragrance);
    const productName = `${currentProduct.name}`;
    
    addToCart(currentProduct.id, productName, totalPrice, currentProduct.image, size, fragrance);
    
    // Close modal
    const modal = bootstrap.Modal.getInstance(document.getElementById('productModal'));
    if (modal) {
        modal.hide();
    }
}

function findProductById(productId) {
    const allProducts = [
        ...productConfig.amorYAmistad,
        ...productConfig.babyShower,
        ...productConfig.primeraComunion,
        ...productConfig.navidad
    ];
    return allProducts.find(p => p.id === productId);
}

// Scroll effects
function initializeScrollEffects() {
    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__animated', 'animate__fadeInUp');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const elementsToAnimate = document.querySelectorAll('.product-card, .promotion-card, .contact-card, .about-section');
    elementsToAnimate.forEach(el => observer.observe(el));
}

// Utility functions
function formatPrice(price) {
    return new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP'
    }).format(price);
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Touch-friendly interactions
function initializeTouchEvents() {
    // Add touch feedback to buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('touchstart', function() {
            this.style.transform = 'scale(0.95)';
        });
        
        button.addEventListener('touchend', function() {
            this.style.transform = '';
        });
    });
}

// Initialize touch events when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeTouchEvents);

// Service Worker registration for PWA
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
            .then(function(registration) {
                console.log('SW registered: ', registration);
            })
            .catch(function(registrationError) {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

// Error handling
window.addEventListener('error', function(e) {
    console.error('JavaScript error:', e.error);
});

// Performance monitoring
window.addEventListener('load', function() {
    // Log performance metrics
    if (window.performance && window.performance.timing) {
        const loadTime = window.performance.timing.loadEventEnd - window.performance.timing.navigationStart;
        console.log(`Page load time: ${loadTime}ms`);
    }
});
