// ================================
// MOBILE NAVIGATION TOGGLE
// ================================

const menuToggle = document.querySelector("#menu-toggle");
const primaryNav = document.querySelector("#primary-nav");

if (menuToggle) {
    menuToggle.addEventListener("click", () => {
        primaryNav.classList.toggle("show");

        // Accessibility improvement
        const isExpanded = primaryNav.classList.contains("show");
        menuToggle.setAttribute("aria-expanded", isExpanded);
    });

    // Close navigation when a link is clicked
    document.querySelectorAll("#primary-nav a").forEach(link => {
        link.addEventListener("click", () => {
            primaryNav.classList.remove("show");
            menuToggle.setAttribute("aria-expanded", false);
        });
    });
}

// ================================
// AUTO UPDATE FOOTER YEAR
// ================================

const yearSpan = document.querySelector("#year");
const currentYear = new Date().getFullYear();

if (yearSpan) {
    yearSpan.textContent = currentYear;
}

// ================================
// AUTO UPDATE LAST UPDATED DATE/TIME
// ================================

const lastUpdatedSpan = document.querySelector("#last-updated");

if (lastUpdatedSpan) {
    const now = new Date();
    const options = {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    };
    lastUpdatedSpan.textContent = now.toLocaleString('en-US', options);
}

// ================================
// DARK MODE TOGGLE
// ================================

const darkToggle = document.querySelector("#dark-toggle");

if (darkToggle) {
    darkToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        const isDarkMode = document.body.classList.contains("dark-mode");
        localStorage.setItem("darkMode", isDarkMode);
        darkToggle.setAttribute("aria-label", isDarkMode ? "Toggle Light Mode" : "Toggle Dark Mode");
    });

    // Restore dark mode preference
    if (localStorage.getItem("darkMode") === "true") {
        document.body.classList.add("dark-mode");
        darkToggle.setAttribute("aria-label", "Toggle Light Mode");
    }
}

// ================================
// SKIP TO MAIN CONTENT
// ================================

// Accessibility: allow users to skip navigation
const body = document.body;
const skipLink = document.createElement("a");
skipLink.href = "#main";
skipLink.textContent = "Skip to main content";
skipLink.style.position = "absolute";
skipLink.style.top = "-40px";
skipLink.style.left = "0";
skipLink.style.backgroundColor = "var(--primary-color)";
skipLink.style.color = "var(--white)";
skipLink.style.padding = "8px";
skipLink.style.zIndex = "100";

skipLink.addEventListener("focus", () => {
    skipLink.style.top = "0";
});

skipLink.addEventListener("blur", () => {
    skipLink.style.top = "-40px";
});

body.insertBefore(skipLink, body.firstChild);


