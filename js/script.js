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
                ${cart.map(item => `
                    <div class="cart-item">
                        <img src="${item.image}" alt="${item.name}" width="50">
                        <div>
                            <h4>${item.name}</h4>
                            <p>$${item.price} x ${item.quantity}</p>
                        </div>
                        <button onclick="removeFromCart('${item.id}')">Eliminar</button>
                    </div>
                `).join('')}
      </div>
            <div class="cart-total">
                Total: $${cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)}
      </div>
            <button onclick="checkout()" class="btn">Comprar</button>
    </div>
  `;
  
    document.body.appendChild(cartModal);
}

function checkout() {
    // Redirigir a WhatsApp con los productos
    const message = cart.map(item => 
        `${item.name} - $${item.price} x ${item.quantity}`
    ).join('\n');
    
    const whatsappUrl = `https://api.whatsapp.com/send/?phone=573008220389&text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

// Productos
function initializeProducts() {
    // Cargar productos dinámicamente
    const productsContainer = document.querySelector('.products-grid');
    if (productsContainer) {
        // Aquí se cargarían los productos desde una API o archivo
        console.log('Productos inicializados');
    }
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
