function animateMenuItems() {
    const menuItems = document.querySelectorAll('.menu-items li');
    menuItems.forEach((item, index) => {
        setTimeout(() => {
            item.style.opacity = 1;
            item.style.transform = 'translateY(0)';
        }, 100 * index); // Delay of 100ms per item
    });
}

document.addEventListener('DOMContentLoaded', function() {
    var menuToggle = document.querySelector('.menu-toggle');
    var menuContainer = document.querySelector('.menu-container');

    menuToggle.addEventListener('click', function() {
        menuContainer.classList.toggle('active');
        this.classList.toggle('x'); // Only for mobile
        animateMenuItems(); // Animate menu items
    });

    // Close menu when clicked outside
    document.addEventListener('click', function(e) {
        if (!menuContainer.contains(e.target) && menuContainer.classList.contains('active')) {
            menuContainer.classList.remove('active');
            menuToggle.classList.remove('x'); // Only for mobile
        }
    });
});
