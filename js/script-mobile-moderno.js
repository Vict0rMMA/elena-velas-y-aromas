// Elena Velas y Aromas - Mobile Moderno JavaScript

// Global variables
let cart = [];
let currentCategory = 'all';
let currentProduct = null;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    console.log('Elena Velas y Aromas - Mobile Moderno version loaded');
    
    // Initialize all components
    initializeNavigation();
    initializeCart();
    initializeProducts();
    initializeCategoryFilters();
    initializeModals();
    initializeScrollEffects();
    initializeWhatsAppFloat();
    
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
                const offsetTop = targetElement.offsetTop - 80;
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

// WhatsApp Float Button
function initializeWhatsAppFloat() {
    const whatsappBtn = document.querySelector('.whatsapp-btn');
    if (whatsappBtn) {
        whatsappBtn.addEventListener('click', function(e) {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    }
}

// Cart functions
function initializeCart() {
    const savedCart = localStorage.getItem('elena-cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
    updateCartDisplay();
}

function addToCart(productId, productName, price, image, option) {
    const existingItem = cart.find(item => 
        item.id === productId && item.option === option
    );
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: productId,
            name: productName,
            price: price,
            image: image,
            option: option,
            quantity: 1,
            timestamp: Date.now()
        });
    }
    
    updateCartDisplay();
    saveCartToStorage();
    showCartNotification();
}

function removeFromCart(productId, option) {
    cart = cart.filter(item => 
        !(item.id === productId && item.option === option)
    );
    updateCartDisplay();
    saveCartToStorage();
    
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
    const existingNotification = document.querySelector('.cart-notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    const notification = document.createElement('div');
    notification.className = 'cart-notification';
    notification.innerHTML = `
        <i class="fas fa-check-circle me-2"></i>
        Producto agregado al carrito
    `;
    
    document.body.appendChild(notification);
    
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
                    <p>${item.option}</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <span class="text-success fw-bold">$${itemTotal.toLocaleString('es-CO')}</span>
                        <div class="d-flex align-items-center">
                            <button class="btn btn-sm btn-outline-secondary" onclick="updateQuantity('${item.id}', '${item.option}', ${item.quantity - 1})">
                                <i class="fas fa-minus"></i>
                            </button>
                            <span class="mx-2">${item.quantity}</span>
                            <button class="btn btn-sm btn-outline-secondary" onclick="updateQuantity('${item.id}', '${item.option}', ${item.quantity + 1})">
                                <i class="fas fa-plus"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <button class="btn btn-sm btn-outline-danger" onclick="removeFromCart('${item.id}', '${item.option}')">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `;
    }).join('');
    
    cartItemsContainer.innerHTML = cartItemsHTML;
    cartTotalElement.textContent = `$${total.toLocaleString('es-CO')}`;
}

function updateQuantity(productId, option, newQuantity) {
    if (newQuantity <= 0) {
        removeFromCart(productId, option);
        return;
    }
    
    const item = cart.find(item => 
        item.id === productId && item.option === option
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
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const message = `¡Hola! Me interesa comprar estos productos de Elena Velas y Aromas:\n\n${cart.map(item => 
        `• ${item.name} (${item.option}) - $${item.price.toLocaleString('es-CO')} x ${item.quantity}`
    ).join('\n')}\n\nTotal: $${total.toLocaleString('es-CO')}\n\n¿Podrías ayudarme con la compra?`;
    
    const whatsappUrl = `https://api.whatsapp.com/send/?phone=573008220389&text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
    
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
    
    productsGrid.innerHTML = `
        <div class="col-12 text-center py-5">
            <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Cargando productos...</span>
            </div>
        </div>
    `;
    
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
            ...productConfigModerno.amorYAmistad,
            ...productConfigModerno.babyShower,
            ...productConfigModerno.primeraComunion,
            ...productConfigModerno.navidad
        ];
    } else {
        products = productConfigModerno[category] || [];
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
    
    // Add event listeners for product cards
    const productCards = productsGrid.querySelectorAll('.product-card');
    productCards.forEach(card => {
        const selectElement = card.querySelector('.product-select');
        const priceElement = card.querySelector('.product-price');
        const addButton = card.querySelector('.add-to-cart');
        
        if (selectElement && priceElement && addButton) {
            selectElement.addEventListener('change', function() {
                const selectedOption = this.options[this.selectedIndex];
                if (selectedOption.value) {
                    const price = selectedOption.dataset.price;
                    priceElement.textContent = `$${parseInt(price).toLocaleString('es-CO')}`;
                    addButton.disabled = false;
                    addButton.style.opacity = '1';
                } else {
                    priceElement.textContent = `Desde $${product.defaultPrice.toLocaleString('es-CO')}`;
                    addButton.disabled = true;
                    addButton.style.opacity = '0.6';
                }
            });
            
            addButton.addEventListener('click', function() {
                const selectedOption = selectElement.options[selectElement.selectedIndex];
                if (selectedOption.value) {
                    const price = parseInt(selectedOption.dataset.price);
                    const optionText = selectedOption.textContent;
                    
                    addToCart(product.id, product.name, price, product.image, optionText);
                } else {
                    alert('Por favor selecciona una opción');
                }
            });
        }
    });
    
    const cards = productsGrid.querySelectorAll('.product-card');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
        card.classList.add('animate__animated', 'animate__fadeInUp');
    });
}

function createProductCard(product) {
    const optionsHTML = product.options.map(option => 
        `<option value="${option.value}" data-price="${option.price}">${option.label}</option>`
    ).join('');
    
    return `
        <div class="col-lg-4 col-md-6 col-12">
            <div class="product-card">
                <img src="${product.image}" alt="${product.name}" class="product-image" onerror="this.src='assets/logo.png'" ondblclick="openImageModal('${product.image}', '${product.name}')">
                <div class="product-info">
                    <h3 class="product-title">${product.name}</h3>
                    <p class="product-description">${product.description}</p>
                    
                    <select class="product-select">
                        <option value="">Seleccionar opción</option>
                        ${optionsHTML}
                    </select>
                    
                    <div class="product-price">Desde $${product.defaultPrice.toLocaleString('es-CO')}</div>
                    
                    <button class="add-to-cart" disabled style="opacity: 0.6;">
                        <i class="fas fa-shopping-cart me-2"></i>Añadir al carrito
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
            
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            currentCategory = category;
            loadProducts(category);
            
            const productsSection = document.getElementById('catalogo');
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
    const productModal = document.getElementById('productModal');
    if (productModal) {
        productModal.addEventListener('hidden.bs.modal', function() {
            currentProduct = null;
        });
    }
    
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
    
    document.getElementById('modalProductImage').src = product.image;
    document.getElementById('modalProductImage').alt = product.name;
    document.getElementById('modalProductName').textContent = product.name;
    document.getElementById('modalProductDescription').textContent = product.description;
    
    const optionSelect = document.getElementById('modalOptionSelect');
    optionSelect.innerHTML = '<option value="">Seleccionar opción</option>' +
        product.options.map(option => `<option value="${option.value}" data-price="${option.price}">${option.label}</option>`).join('');
    
    document.getElementById('modalPrice').textContent = 'Selecciona una opción para ver el precio';
    
    optionSelect.onchange = calculateModalPrice;
    
    const modal = new bootstrap.Modal(document.getElementById('productModal'));
    modal.show();
}

function calculateModalPrice() {
    if (!currentProduct) return;
    
    const optionSelect = document.getElementById('modalOptionSelect');
    const priceDisplay = document.getElementById('modalPrice');
    const addButton = document.getElementById('addToCartModalBtn');
    
    const selectedOption = optionSelect.options[optionSelect.selectedIndex];
    if (selectedOption.value) {
        const price = parseInt(selectedOption.dataset.price);
        priceDisplay.textContent = `$${price.toLocaleString('es-CO')}`;
        addButton.disabled = false;
    } else {
        priceDisplay.textContent = 'Selecciona una opción para ver el precio';
        addButton.disabled = true;
    }
}

function addToCartFromModal() {
    if (!currentProduct) return;
    
    const optionSelect = document.getElementById('modalOptionSelect');
    const selectedOption = optionSelect.options[optionSelect.selectedIndex];
    
    if (!selectedOption.value) {
        alert('Por favor selecciona una opción');
        return;
    }
    
    const price = parseInt(selectedOption.dataset.price);
    const optionText = selectedOption.textContent;
    
    addToCart(currentProduct.id, currentProduct.name, price, currentProduct.image, optionText);
    
    const modal = bootstrap.Modal.getInstance(document.getElementById('productModal'));
    if (modal) {
        modal.hide();
    }
}

function findProductById(productId) {
    const allProducts = [
        ...productConfigModerno.amorYAmistad,
        ...productConfigModerno.babyShower,
        ...productConfigModerno.primeraComunion,
        ...productConfigModerno.navidad
    ];
    return allProducts.find(p => p.id === productId);
}

// Image Modal function (from original)
function openImageModal(imageSrc, imageAlt) {
    const modal = document.createElement('div');
    modal.className = 'image-modal';
    modal.innerHTML = `
        <div class="image-modal-content">
            <span class="image-modal-close">&times;</span>
            <img src="${imageSrc}" alt="${imageAlt}" class="image-modal-img">
            <div class="image-modal-caption">${imageAlt}</div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    modal.onclick = function(e) {
        if (e.target === modal || e.target.classList.contains('image-modal-close')) {
            modal.remove();
        }
    };
}

// Scroll effects
function initializeScrollEffects() {
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
    
    const elementsToAnimate = document.querySelectorAll('.product-card, .contact-card');
    elementsToAnimate.forEach(el => observer.observe(el));
}

// Utility functions
function formatPrice(price) {
    return new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP'
    }).format(price);
}

// Touch-friendly interactions
function initializeTouchEvents() {
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
    if (window.performance && window.performance.timing) {
        const loadTime = window.performance.timing.loadEventEnd - window.performance.timing.navigationStart;
        console.log(`Page load time: ${loadTime}ms`);
    }
});
