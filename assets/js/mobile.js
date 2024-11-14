document.addEventListener('DOMContentLoaded', function () {
    const navToggle = document.getElementById('navToggle');
    const mobileMenu = document.getElementById('mobileMenu');

    // Toggle mobile menu when hamburger is clicked
    navToggle.addEventListener('click', function (e) {
        e.stopPropagation(); // Prevent the event from bubbling up to the document
        toggleMobileMenu();
    });

    // Close mobile menu if clicking outside of it
    document.addEventListener('click', function (e) {
        const targetElement = e.target; // Clicked element
        if (!mobileMenu.contains(targetElement) && !navToggle.contains(targetElement)) {
            closeMobileMenu();
        }
    });

    // Close the mobile menu when a menu item is clicked
    mobileMenu.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
            closeMobileMenu();
        });
    });

    // Function to toggle the mobile menu
    function toggleMobileMenu() {
        if (mobileMenu.classList.contains('show')) {
            closeMobileMenu();
        } else {
            openMobileMenu();
        }
    }

    // Function to open the mobile menu
    function openMobileMenu() {
        mobileMenu.classList.add('show');
        mobileMenu.style.opacity = '1';
        mobileMenu.style.visibility = 'visible';
    }

    // Function to close the mobile menu
    function closeMobileMenu() {
        mobileMenu.classList.remove('show');
        mobileMenu.style.opacity = '0';
        mobileMenu.style.visibility = 'hidden';
    }

    // Ensure smooth transition using CSS for opacity and visibility
    mobileMenu.style.transition = 'opacity 0.3s ease, visibility 0.3s ease';

    // Prevent display issues on page load
    mobileMenu.style.opacity = '0';
    mobileMenu.style.visibility = 'hidden';
});