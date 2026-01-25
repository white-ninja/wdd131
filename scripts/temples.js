// 1️⃣ Footer: Current Year
const yearSpan = document.getElementById('year');
const today = new Date();
yearSpan.textContent = today.getFullYear();

// 2️⃣ Footer: Last Modified
const lastModifiedSpan = document.getElementById('lastModified');
lastModifiedSpan.textContent = document.lastModified;

// 3️⃣ Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger-btn');
const navMenu = document.querySelector('nav ul');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('show');  // toggle class to show/hide menu

        // Toggle hamburger symbol between ☰ and X
        if (hamburger.textContent === '☰') {
            hamburger.textContent = 'X'; // X symbol
        } else {
            hamburger.textContent = '☰';
        }   
    });
}