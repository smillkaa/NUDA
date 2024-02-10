document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const menuContainer = document.querySelector('.menu-container');

    // Toggle menu visibility and animate menu items
    menuToggle.addEventListener('click', function(e) {
        e.stopPropagation(); // Prevent click from propagating to document
        const isActive = menuContainer.classList.toggle('active');
        this.classList.toggle('x', isActive); // Toggle class for visual feedback, e.g., 'X' icon
        if (isActive) {
            animateMenuItems(); // Only animate items when activating the menu
        } else {
            resetMenuItems(); // Reset menu items for next animation
        }
    });

    // Close menu when clicked outside
    document.addEventListener('click', function(e) {
        if (!menuContainer.contains(e.target) && menuContainer.classList.contains('active')) {
            menuContainer.classList.remove('active');
            menuToggle.classList.remove('x');
            resetMenuItems(); // Reset menu items for next animation
        }
    });

    // Optional: Close menu when clicking on the dimmed background
    menuContainer.addEventListener('click', function(e) {
        if (e.target === menuContainer) {
            menuContainer.classList.remove('active');
            menuToggle.classList.remove('x');
            resetMenuItems();
        }
    });
});

function animateMenuItems() {
    const menuItems = document.querySelectorAll('.menu-items li');
    menuItems.forEach((item, index) => {
        setTimeout(() => {
            item.style.opacity = 1;
            item.style.transform = 'translateY(0)';
        }, 100 * index); // Delay of 100ms per item
    });
}

function resetMenuItems() {
    const menuItems = document.querySelectorAll('.menu-items li');
    menuItems.forEach((item) => {
        item.style.opacity = 0;
        item.style.transform = 'translateY(-20px)';
    });
}
