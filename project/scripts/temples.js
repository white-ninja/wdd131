// ==========================================
// TEMPLE EXPLORER APPLICATION
// ==========================================
// Features: Dynamic temple filtering, search, favorites, and modal details
// Data Source: Church of Jesus Christ Temples Database
// Last Updated: February 2026

// ==========================================
// TEMPLE DATA (ARRAY OF OBJECTS)
// ==========================================

const temples = [
    {
        id: 1,
        name: "Salt Lake City Utah Temple",
        region: "North America",
        dedicated: "1893-04-06",
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-15669-main.jpg",
        description: "The iconic Salt Lake City Temple, located in Utah, is a symbol of faith and beauty for members across North America."
    },
    {
        id: 2,
        name: "Aba Nigeria Temple",
        region: "Africa",
        dedicated: "2005-08-07",
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/aba-nigeria-temple/aba-nigeria-temple-5087-main.jpg",
        description: "A stunning temple in Aba, Nigeria, serving members across Africa."
    },
    {
        id: 3,
        name: "Accra Ghana Temple",
        region: "Africa",
        dedicated: "2004-01-11",
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple/accra-ghana-temple-13760-main.jpg",
        description: "A beautiful temple located in Accra, Ghana, serving members across West Africa."
    },
    {
        id: 4,
        name: "Rome Italy Temple",
        region: "Europe",
        dedicated: "2019-03-10",
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-2642-main.jpg",
        description: "An architecturally stunning temple located in Rome, Italy."
    },
    {
        id: 5,
        name: "Bern Switzerland Temple",
        region: "Europe",
        dedicated: "1955-09-15",
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/bern-switzerland-temple/bern-switzerland-temple-54641-main.jpg",
        description: "A beautiful temple in Bern, Switzerland."
    },
    {
        id: 6,
        name: "Mexico City Mexico Temple",
        region: "North America",    
        dedicated: "1983-12-02",
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/mexico-city-mexico-temple/mexico-city-mexico-temple-4060-main.jpg",
        description: "A stunning temple located in Mexico City, Mexico."
    },
    {
        id: 7,
        name: "Tokyo Japan Temple",
        region: "Asia", 
        dedicated: "1980-10-29",
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/tokyo-japan-temple/tokyo-japan-temple-26340-main.jpg",
        description: "A beautiful temple located in Tokyo, Japan."
    },
    {
        id: 8,
        name: "Dallas Texas Temple",
        region: "North America",
        dedicated: "1984-10-24",
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/dallas-texas-temple/dallas-texas-temple-55240-main.jpg",
        description: "A beautiful temple located in Dallas, Texas."
    },
    {
        id: 9,
        name: "Manhattan New York Temple",
        region: "North America",
        dedicated: "2004-06-13",
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/manhattan-new-york-temple/manhattan-new-york-temple-40080-main.jpg",
        description: "A beautiful temple located in Manhattan, New York."
    },
    {
        id: 10,
        name: "Brasilia Brazil Temple",
        region: "South America",
        dedicated: "2023-10-17",
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/brasilia-brazil-temple/brasilia-brazil-temple-39184-main.jpg",
        description: "A beautiful temple located in Brasilia, Brazil."
    },
    {
        id: 11, 
        name: "Washington D.C. Temple",
        region: "North America",
        dedicated: "1974-11-19",
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/washington-d.c.-temple/washington-d.c.-temple-14992-main.jpg",
        description: "A beautiful temple located in Kensington, Maryland, United States."
    },
    {
        id: 12,
        name: "Melbourne Australia Temple",
        region: "Australia",
        dedicated: "2000-06-16",
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/melbourne-australia-temple/melbourne-australia-temple-58608-main.jpg",
        description: "A beautiful temple located in Melbourne, Australia."
    },
    {
        id: 13,
        name: "London England Temple",
        region: "Europe",
        dedicated: "1958-09-07",
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/london-england-temple/london-england-temple-56886-main.jpg",
        description: "A beautiful temple located in London, England."
    },
    {
        id: 14,
        name: "Arequipa Peru Temple",
        region: "South America",
        dedicated: "2019-12-15",
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/arequipa-peru-temple/arequipa-peru-temple-7186-main.jpg",
        description: "A beautiful temple located in Arequipa, Peru."
    },
    {
        id: 15,
        name: "Payson Utah Temple",
        region: "North America",
        dedicated: "2015-06-16",
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/payson-utah-temple/payson-utah-temple-62834-main.jpg",
        description: "A beautiful temple located in Payson, Utah, United States."
    },
    {
        id: 16,
       name: "Nauvoo Illinois Temple",
       region: "North America",
       dedicated: "2002-06-27",
       imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/nauvoo-illinois-temple/nauvoo-illinois-temple-50576-main.jpg",
       description: "A beautiful temple located in Nauvoo, Illinois, United States."
    },
    {
        id: 17,
        name: "Phnom Penh Cambodia Temple",
        region: "Asia",
        dedicated: "2026-05-21",
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/phnom-penh-cambodia-temple/phnom-penh-cambodia-temple-65747-main.jpg",
        description: "A beautiful temple located in Phnom Penh, Cambodia."
    },
    {
        id: 18,
        name: "Hong Kong China Temple",
        region: "Asia",
        dedicated: "1996-05-21",
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/hong-kong-china-temple/hong-kong-china-temple-28125-main.jpg",
        description: "A beautiful temple located in Hong Kong, China."
    },
    {
        id: 19,
        name: "Manila Philippines Temple",
        region: "Asia",
        dedicated: "1984-09-27",
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/_temp/029-Manila-Philippines-Temple.jpg",
        description: "A beautiful temple located in Manila, Philippines."
    },
    {
        id: 20,
        name: "Nairobi Kenya Temple",
        region: "Africa",
        dedicated: "2025-05-18",
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/nairobi-kenya-temple/nairobi-kenya-temple-60488-main.jpg",
        description: "A beautiful temple located in Nairobi, Kenya."
    },
    {
        id: 21,
        name: "Quito Ecuador Temple",
        region: "South America",
        dedicated: "2022-11-22",
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/quito-ecuador-temple/quito-ecuador-temple-31202-main.jpg",
        description: "A beautiful temple located in Quito, Ecuador."
    },
    {
        id: 22,
        name: "San Salvador El Salvador Temple",
        region: "Central America",
        dedicated: "1984-05-21",
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/_temp/135-San-Salvador-El-Salvador-Temple.jpg",
        description: "A beautiful temple located in San Salvador, El Salvador."
    },
    {
        id: 23,
        name: "Santiago Chile Temple",
        region: "South America",
        dedicated: "1984-05-21",
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/_temp/024-Santiago-Chile-Temple.jpg",
        description: "A beautiful temple located in Santiago, Chile."
    },
    {
        id: 24,
        name: "Bangkok Thailand Temple",
        region: "Asia",
        dedicated: "2023-10-22",
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/bangkok-thailand-temple/bangkok-thailand-temple-40037-main.jpg",
        description: "A beautiful temple located in Bangkok, Thailand."
    },
    {
        id: 25,
        name: "Abidjan Ivory Coast Temple",
        region: "Africa",
        dedicated: "2025-05-25",
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/abidjan-ivory-coast-temple/abidjan-ivory-coast-temple-58993-main.jpg",
        description: "A beautiful temple located in Abidjan, Cote d'Ivoire."
    },
    {
        id: 26,
        name: "Johannesburg South Africa Temple",
        region: "Africa",
        dedicated: "1985-05-25",
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/johannesburg-south-africa-temple/johannesburg-south-africa-temple-22475-main.jpg",
        description: "A beautiful temple located in Johannesburg, South Africa."
    },
    {
        id: 27,
        name: "San Diego California Temple",
        region: "North America",
        dedicated: "1993-04-30",
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/san-diego-california-temple/san-diego-california-temple-9060-main.jpg",
        description: "A beautiful temple located in San Diego, California."
    },
    {
        id: 28,
        name: "Laie Hawaii Temple",
        region: "North America",
        dedicated: "1919-11-27",
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/laie-hawaii-temple/laie-hawaii-temple-7370-main.jpg",
        description: "A beautiful temple located in Laie, Hawaii."
    }
];


// ==========================================
// SELECT CONTAINERS & DOM ELEMENTS
// ==========================================

const featuredContainer = document.querySelector("#featured-temples");
const searchInput = document.querySelector("#search");
const regionFilter = document.querySelector("#region-filter");
const sortFilter = document.querySelector("#sort-filter");
const favoritesOnlyCheckbox = document.querySelector("#favorites-only");

const modal = document.querySelector("#temple-modal");
const modalImage = document.querySelector("#modal-image");
const modalTitle = document.querySelector("#modal-title");
const modalRegion = document.querySelector("#modal-region");
const modalDedicated = document.querySelector("#modal-dedicated");
const modalDescription = document.querySelector("#modal-description");
const closeModal = document.querySelector(".close-modal");

// ==========================================
// MODAL MANAGEMENT
// ==========================================

function openModal(temple) {
    if (!modal) return;
    
    modalImage.src = temple.imageUrl;
    modalImage.alt = temple.name;
    modalTitle.textContent = temple.name;
    modalRegion.textContent = "Region: " + temple.region;
    modalDedicated.textContent = "Dedicated: " + temple.dedicated;
    modalDescription.textContent = temple.description;

    modal.classList.remove("hidden");
}

if (closeModal) {
    closeModal.addEventListener("click", () => {
        if (modal) modal.classList.add("hidden");
    });
}

// Close modal when clicking outside content
window.addEventListener("click", (e) => {
    if (modal && e.target === modal) {
        modal.classList.add("hidden");
    }
});

// ==========================================
// FAVORITES SYSTEM (localStorage)
// ==========================================

function getFavorites() {
    return JSON.parse(localStorage.getItem("favoriteTemples")) || [];
}

function saveFavorites(favorites) {
    localStorage.setItem("favoriteTemples", JSON.stringify(favorites));
}

function toggleFavorite(id) {
    let favorites = getFavorites();

    if (favorites.includes(id)) {
        favorites = favorites.filter(favId => favId !== id);
    } else {
        favorites.push(id);
    }

    saveFavorites(favorites);
    renderTemples(getFilteredTemples());
}


// ==========================================
// FILTER + SEARCH LOGIC
// ==========================================

function getFilteredTemples() {

    let filtered = [...temples]; // start with all temples

    // REGION FILTER
    if (regionFilter && regionFilter.value !== "all") {
        filtered = filtered.filter(temple => temple.region === regionFilter.value);
    }

    // SEARCH FILTER
    if (searchInput && searchInput.value.trim() !== "") {
        const searchTerm = searchInput.value.toLowerCase();
        filtered = filtered.filter(temple =>
            temple.name.toLowerCase().includes(searchTerm)
        );
    }

    // FAVORITES ONLY
    if (favoritesOnlyCheckbox && favoritesOnlyCheckbox.checked) {
        const favorites = getFavorites();
        filtered = filtered.filter(temple =>
            favorites.includes(temple.id)
        );
    }

    // SORTING
    if (sortFilter) {
        if (sortFilter.value === "newest") {
            filtered.sort((a, b) => new Date(b.dedicated) - new Date(a.dedicated));
        } else {
            filtered.sort((a, b) => new Date(a.dedicated) - new Date(b.dedicated));
        }
    }

    return filtered;
}



// ==========================================
// RENDER FUNCTION
// ==========================================

function renderTemples(templeList) {

    if (!featuredContainer) return;

    if (templeList.length === 0) {
        featuredContainer.innerHTML = `<p>No temples match your search criteria.</p>`;
        return;
    }

    const favorites = getFavorites();

    const templeCards = templeList.map(temple => `
       <article class="temple-card" data-id="${temple.id}">
            <img src="${temple.imageUrl}" 
                 alt="${temple.name}" 
                 loading="lazy">

            <div class="temple-card-content">
                <h3>${temple.name}</h3>
                <p><strong>Region:</strong> ${temple.region}</p>
                <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
                <p>${temple.description}</p>

            <button class="favorite-btn ${favorites.includes(temple.id) ? "active" : ""}" 
                data-id="${temple.id}">
                ${favorites.includes(temple.id) ? "★ Favorited" : "☆ Add to Favorites"}
                </button>
            </div>
        </article>
    `).join("");

    featuredContainer.innerHTML = templeCards;

    // Add click listeners to cards
    document.querySelectorAll(".temple-card").forEach(card => {
    card.addEventListener("click", () => {
        const id = parseInt(card.dataset.id);
        const selectedTemple = temples.find(t => t.id === id);
        openModal(selectedTemple);
    });
    });

    // Favorite button click
document.querySelectorAll(".favorite-btn").forEach(button => {
    button.addEventListener("click", (e) => {
        e.stopPropagation(); // prevent modal from opening
        const id = parseInt(button.dataset.id);
        toggleFavorite(id);
    });
});

}

// ==========================================
// EVENT LISTENERS
// ==========================================

if (searchInput) {
    searchInput.addEventListener("input", () => {
        renderTemples(getFilteredTemples());
    });
}

if (regionFilter) {
    regionFilter.addEventListener("change", () => {
        renderTemples(getFilteredTemples());
    });
}

if (sortFilter) {
    sortFilter.addEventListener("change", () => {
        renderTemples(getFilteredTemples());
    });
}

if (favoritesOnlyCheckbox) {
    favoritesOnlyCheckbox.addEventListener("change", () => {
        renderTemples(getFilteredTemples());
    });
}


// ==========================================
// INITIALIZE
// ==========================================

if (featuredContainer) {

    // If we are on the home page → show only 3 temples
    if (window.location.pathname.includes("index.html") || 
        window.location.pathname === "/" ||
        window.location.pathname.endsWith("/")) {

        renderTemples(temples.slice(0, 3));

    } else {

        // On temples page → show full dynamic system
        renderTemples(getFilteredTemples());
    }
}


