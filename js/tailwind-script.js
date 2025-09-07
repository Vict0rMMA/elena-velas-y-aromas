// Script específico para Tailwind CSS
document.addEventListener('DOMContentLoaded', function() {
    // Configuración de Tailwind
    if (typeof tailwind !== 'undefined') {
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        primary: '#667eea',
                        secondary: '#764ba2',
                        accent: '#ffd700'
        }
      }
    }
  };
    }
    
    // Funcionalidades específicas de Tailwind
    initializeTailwindComponents();
});

function initializeTailwindComponents() {
    // Animaciones con Tailwind
    const animatedElements = document.querySelectorAll('.animate-fade-in');
    animatedElements.forEach(element => {
        element.classList.add('opacity-0', 'translate-y-4');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.remove('opacity-0', 'translate-y-4');
                    entry.target.classList.add('opacity-100', 'translate-y-0');
                }
            });
        });
        
        observer.observe(element);
    });
    
    // Hover effects
    const hoverElements = document.querySelectorAll('.hover-lift');
    hoverElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.classList.add('transform', 'scale-105');
        });
        
        element.addEventListener('mouseleave', function() {
            this.classList.remove('transform', 'scale-105');
        });
    });
}

// Utilidades de Tailwind
function addTailwindClasses(element, classes) {
    element.classList.add(...classes.split(' '));
}

function removeTailwindClasses(element, classes) {
    element.classList.remove(...classes.split(' '));
}

// Componentes reutilizables con Tailwind
function createTailwindButton(text, variant = 'primary') {
    const button = document.createElement('button');
    
    const baseClasses = 'px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105';
    const variantClasses = {
        primary: 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600',
        secondary: 'bg-gray-700 text-white hover:bg-gray-600',
        success: 'bg-green-500 text-white hover:bg-green-600',
        danger: 'bg-red-500 text-white hover:bg-red-600'
    };
    
    button.className = `${baseClasses} ${variantClasses[variant]}`;
    button.textContent = text;
    
    return button;
}

function createTailwindCard(title, content, image = null) {
    const card = document.createElement('div');
    card.className = 'bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300';
    
    let cardContent = `
        <h3 class="text-xl font-bold text-yellow-400 mb-4">${title}</h3>
        <p class="text-gray-300 mb-4">${content}</p>
    `;
    
    if (image) {
        cardContent = `
            <img src="${image}" alt="${title}" class="w-full h-48 object-cover rounded-lg mb-4">
            ${cardContent}
        `;
    }
    
    card.innerHTML = cardContent;
    return card;
}
