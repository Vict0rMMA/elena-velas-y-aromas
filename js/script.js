// Script principal de la página
document.addEventListener('DOMContentLoaded', function() {
    console.log('Página cargada correctamente');
    
    // Inicializar funcionalidades
    initializeCart();
    initializeProducts();
    initializeContact();
});

// Carrito de compras
let cart = [];

function initializeCart() {
    updateCartDisplay();
}

function addToCart(productId, productName, price, image) {
    const existingItem = cart.find(item => item.id === productId);
  
  if (existingItem) {
        existingItem.quantity += 1;
  } else {
    cart.push({
            id: productId,
            name: productName,
            price: price,
            image: image,
            quantity: 1
        });
    }
    
    updateCartDisplay();
    showCartNotification();
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartDisplay();
}

function updateCartDisplay() {
    const cartCounter = document.querySelector('.cart-counter');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    if (cartCounter) {
        cartCounter.textContent = totalItems;
    }
}

function showCartNotification() {
    // Crear notificación temporal
    const notification = document.createElement('div');
    notification.className = 'cart-notification';
    notification.textContent = 'Producto agregado al carrito';
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #4ade80;
        color: white;
        padding: 1rem 2rem;
        border-radius: 10px;
        z-index: 1000;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

function showCart() {
    // Mostrar modal del carrito
    const cartModal = document.createElement('div');
    cartModal.className = 'cart-modal';
    cartModal.innerHTML = `
        <div class="cart-modal-content">
            <h3>Carrito de Compras</h3>
            <div class="cart-items">
                ${cart.length === 0 ? '<p style="text-align: center; color: #e0e0e0;">Tu carrito está vacío</p>' : cart.map(item => `
                    <div class="cart-item">
                        <img src="${item.image}" alt="${item.name}" onerror="this.src='assets/logo.png'">
                        <div>
                            <h4>${item.name}</h4>
                            <p>$${item.price.toLocaleString('es-CO')} x ${item.quantity}</p>
                        </div>
                        <button onclick="removeFromCart('${item.id}')">Eliminar</button>
                    </div>
                `).join('')}
      </div>
            ${cart.length > 0 ? `
            <div class="cart-total">
                    Total: $${cart.reduce((sum, item) => sum + (item.price * item.quantity), 0).toLocaleString('es-CO')}
      </div>
                <button onclick="checkout()" class="btn">Comprar por WhatsApp</button>
            ` : ''}
            <button onclick="closeCartModal()" class="btn" style="background: #666; margin-top: 1rem;">Cerrar</button>
    </div>
  `;
  
    document.body.appendChild(cartModal);
}

function closeCartModal() {
    const cartModal = document.querySelector('.cart-modal');
    if (cartModal) {
        cartModal.remove();
    }
}

function checkout() {
    if (cart.length === 0) {
        alert('Tu carrito está vacío');
        return;
    }
    
    // Crear mensaje para WhatsApp
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const message = `¡Hola! Me interesa comprar estos productos de Elena Velas y Aromas:\n\n${cart.map(item => 
        `• ${item.name} - $${item.price.toLocaleString('es-CO')} x ${item.quantity}`
    ).join('\n')}\n\nTotal: $${total.toLocaleString('es-CO')}\n\n¿Podrías ayudarme con la compra?`;
    
    const whatsappUrl = `https://api.whatsapp.com/send/?phone=573008220389&text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    // Cerrar modal del carrito
    closeCartModal();
}

// Productos
function initializeProducts() {
    // Cargar productos dinámicamente
    const productsContainer = document.querySelector('.products-grid');
    if (productsContainer) {
        loadAllProducts();
    }
}

function loadAllProducts() {
    const productsContainer = document.querySelector('.products-grid');
    if (!productsContainer) return;

    // Obtener todos los productos de todas las categorías
    const allProducts = [
        ...productConfig.amorYAmistad,
        ...productConfig.babyShower,
        ...productConfig.primeraComunion,
        ...productConfig.navidad
    ];

    // Limpiar contenedor
    productsContainer.innerHTML = '';

    // Crear tarjetas de productos
    allProducts.forEach(product => {
        const productCard = createProductCard(product);
        productsContainer.appendChild(productCard);
    });
}

function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="product-image" onerror="this.src='assets/logo.png'">
        <div class="product-info">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <div class="price">Desde $${product.price.toLocaleString('es-CO')}</div>
            <div class="product-options">
                <select class="size-select" data-product-id="${product.id}">
                    <option value="">Seleccionar tamaño</option>
                    ${product.sizes.map(size => `<option value="${size}">${size}</option>`).join('')}
                </select>
                <select class="fragrance-select" data-product-id="${product.id}">
                    <option value="">Seleccionar fragancia</option>
                    ${product.fragrances.map(fragrance => `<option value="${fragrance}">${fragrance}</option>`).join('')}
                </select>
            </div>
            <button class="btn add-to-cart-btn" data-product-id="${product.id}" onclick="showProductModal('${product.id}')">
                <i class="fas fa-shopping-cart"></i> Agregar al Carrito
            </button>
        </div>
    `;
    return card;
}

function showProductModal(productId) {
    const product = findProductById(productId);
    if (!product) return;

    const modal = document.createElement('div');
    modal.className = 'product-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-modal">&times;</span>
            <div class="modal-header">
                <img src="${product.image}" alt="${product.name}" class="modal-image" onerror="this.src='assets/logo.png'">
                <div class="modal-info">
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                </div>
            </div>
            <div class="modal-body">
                <div class="option-group">
                    <label>Tamaño:</label>
                    <select id="modal-size-select">
                        <option value="">Seleccionar tamaño</option>
                        ${product.sizes.map(size => `<option value="${size}">${size}</option>`).join('')}
                    </select>
                </div>
                <div class="option-group">
                    <label>Fragancia:</label>
                    <select id="modal-fragrance-select">
                        <option value="">Seleccionar fragancia</option>
                        ${product.fragrances.map(fragrance => `<option value="${fragrance}">${fragrance}</option>`).join('')}
                    </select>
                </div>
                <div class="price-display">
                    <span id="modal-price">Selecciona opciones para ver el precio</span>
                </div>
            </div>
            <div class="modal-footer">
                <button class="btn" onclick="addProductToCart('${productId}')" id="add-to-cart-modal">
                    <i class="fas fa-shopping-cart"></i> Agregar al Carrito
                </button>
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    // Event listeners para el modal
    const closeBtn = modal.querySelector('.close-modal');
    const sizeSelect = modal.querySelector('#modal-size-select');
    const fragranceSelect = modal.querySelector('#modal-fragrance-select');
    const priceDisplay = modal.querySelector('#modal-price');
    const addBtn = modal.querySelector('#add-to-cart-modal');

    closeBtn.onclick = () => modal.remove();
    modal.onclick = (e) => {
        if (e.target === modal) modal.remove();
    };

    function updatePrice() {
        const size = sizeSelect.value;
        const fragrance = fragranceSelect.value;
        
        if (size && fragrance) {
            const totalPrice = calculateTotalPrice(product, size, fragrance);
            priceDisplay.textContent = `Precio: $${totalPrice.toLocaleString('es-CO')}`;
            addBtn.disabled = false;
        } else {
            priceDisplay.textContent = 'Selecciona opciones para ver el precio';
            addBtn.disabled = true;
        }
    }

    sizeSelect.onchange = updatePrice;
    fragranceSelect.onchange = updatePrice;
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

function addProductToCart(productId) {
    const product = findProductById(productId);
    if (!product) return;

    const sizeSelect = document.querySelector('#modal-size-select');
    const fragranceSelect = document.querySelector('#modal-fragrance-select');
    
    const size = sizeSelect.value;
    const fragrance = fragranceSelect.value;
    
    if (!size || !fragrance) {
        alert('Por favor selecciona tamaño y fragancia');
        return;
    }

    const totalPrice = calculateTotalPrice(product, size, fragrance);
    const productName = `${product.name} (${size}, ${fragrance})`;
    
    addToCart(productId, productName, totalPrice, product.image);
    
    // Cerrar modal
    document.querySelector('.product-modal').remove();
}

// Contacto
function initializeContact() {
    // Inicializar botones de contacto
    const contactButtons = document.querySelectorAll('.contact-buttons a');
    contactButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            if (href.includes('whatsapp')) {
                window.open(href, '_blank');
            }
        });
    });
}

// Utilidades
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
