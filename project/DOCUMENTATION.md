# Temple & Heritage Visit Planner - Project Documentation

**Version:** 1.0  
**Last Updated:** February 17, 2026  
**Author:** Emmanuel Ariyo

---

## Project Overview

The **Temple & Heritage Visit Planner** is a comprehensive web application designed to help members of The Church of Jesus Christ of Latter-day Saints explore, plan, and budget for meaningful visits to temples and heritage sites around the world.

### Key Features
- **Temple Explorer**: Browse and search a global collection of temples with detailed information
- **Budget Planner**: Track income and expenses for your temple visits
- **Advanced Filtering**: Filter temples by region, search by name, and manage favorites
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop devices
- **Dark Mode**: Comfortable viewing in low-light environments
- **Local Storage**: Persistent data storage for favorites and transactions
- **Accessibility**: WCAG-compliant with full keyboard navigation support

---

## File Structure

```
project/
├── index.html                 # Home page with hero section and featured temples
├── temples.html               # Temple explorer with filters and favorites
├── planner.html               # Budget planner for trip expenses
├── contact.html               # Contact form for user inquiries
├── references.html            # Citations and resource credits
├── DOCUMENTATION.md           # This file
├── styles/
│   ├── main.css              # Comprehensive styling (consolidated)
│   └── siteplan.css          # Site plan specific styles
├── scripts/
│   ├── main.js               # Core functionality (nav, dark mode, year)
│   ├── temples.js            # Temple explorer logic and data
│   ├── planner.js            # Budget planner functionality
│   └── contact.js            # Contact form validation
└── images/
    └── logo.webp             # Application logo
```

---

## Technologies Used

- **HTML5**: Semantic markup with accessibility features
- **CSS3**: Modern styling with CSS Variables, Grid, and Flexbox
- **JavaScript ES6+**: Interactive features with localStorage API
- **localStorage API**: Browser-based data persistence
- **Google Fonts**: Professional typography (Merriweather, Open Sans, Playfair Display, Roboto)

---

## Component Documentation

### 1. HTML Pages

#### `index.html` - Home Page
- Hero section with call-to-action
- Featured temples grid (first 3 temple cards)
- "Why Use Our Planner" benefits section
- Navigation to all main sections

#### `temples.html` - Temple Explorer
- Search functionality (real-time filtering)
- Region-based filtering (8 global regions)
- Sorting options (newest/oldest dedicated dates)
- Favorites management system
- Interactive modal detail view
- 28 temples in the global database

#### `planner.html` - Budget Planner
- Income/Expense tracking
- Real-time total calculations
- Transaction list with click-to-delete
- localStorage persistence
- Form validation and error handling

#### `contact.html` - Contact Form
- Name, email, and message inputs
- Form validation:
  - Email format validation
  - Minimum character requirements
  - Required field checks
- User feedback via alerts

#### `references.html` - References & Credits
- Comprehensive citation list
- Links to resource origins
- Data source attribution

### 2. CSS (`styles/main.css`)

**Design System Variables:**
```css
--primary-color: #2E4057 (Deep Blue)
--secondary-color: #F6AE2D (Gold)
--background-color: #F4F4F4 (Light Gray)
--white: #ffffff
--text-color: #333
--max-width: 1100px
```

**Major Components:**
- Header & Navigation (responsive)
- Hero Section (background image gradient)
- Grid Layouts (auto-fit responsive cards)
- Temple Cards (hover effects, favorite buttons)
- Modal Dialog (animated pop-up)
- Budget Forms (labeled inputs)
- Transaction List (income/expense styling)
- Footer (consistent branding)
- Dark Mode (complete color scheme)

**Responsive Breakpoints:**
- **Desktop**: Full 3-column grid, expanded navigation
- **Tablet (≤768px)**: 2-column grid, hamburger menu
- **Mobile (≤480px)**: Single column, touch-optimized buttons

### 3. JavaScript Files

#### `main.js` - Core Utilities
**Functions:**
- `menuToggle()`: Mobile navigation toggle
- `darkModeToggle()`: Dark/light mode switching with persistence
- `yearUpdate()`: Auto-update copyright year
- `skipLink()`: Accessibility enhancement

**Key Features:**
- localStorage integration for dark mode preference
- ARIA attributes for accessibility
- Event delegation pattern

#### `temples.js` - Temple Explorer (452 lines)
**Data:** 28 temple objects with ID, name, region, dedication date, image URL, description

**Functions:**
- `getFavorites()`: Retrieve favorited temples from localStorage
- `saveFavorites(favorites)`: Save favorites to localStorage
- `toggleFavorite(id)`: Add/remove temple from favorites
- `getFilteredTemples()`: Apply all active filters
- `renderTemples(templeList)`: Generate and display temple cards
- `openModal(temple)`: Display temple detail modal

**Features:**
- Multi-layered filtering (region, search, favorites)
- Sorting by dedication date (newest/oldest)
- Real-time search as you type
- Modal detail view with temple information
- Favorite star indicators
- Different behavior for home page vs. temples page

#### `planner.js` - Budget Planner (120 lines)
**Data Structure:**
```javascript
{
  description: string,
  amount: number,
  type: "income" | "expense",
  date: string (ISO format)
}
```

**Functions:**
- `calculateTotals()`: Sum income/expenses and compute balance
- `renderTransactions()`: Display all transactions
- `saveTransactions()`: Persist to localStorage

**Features:**
- Real-time calculation updates
- Click-to-delete transactions
- Input validation (non-empty, positive amounts)
- Enter key support for quick adding
- Empty state message

#### `contact.js` - Contact Form (45 lines)
**Validation Rules:**
- Name: Min 2 characters
- Email: Valid email format (regex)
- Message: Min 10 characters
- All fields: Required (non-empty after trim)

**Feedback:** User alerts for validation failures and success

---

## Key Features Explained

### Dark Mode
- Toggle via moon icon in header
- Preference saved to localStorage
- Applied to all major components
- High contrast for readability

### Favorites System
- Click star icon to add/remove from favorites
- Stored in browser's localStorage
- "View Favorites Only" filter option
- Persistent across sessions

### Responsive Design
Three-tier approach:
1. **CSS Grid/Flexbox** for fluid layouts
2. **Media Queries** for breakpoint-specific adjustments
3. **Mobile-First** development strategy

### Accessibility Features
- Semantic HTML5 elements
- ARIA labels on interactive elements
- Keyboard navigation support
- "Skip to main content" link
- Sufficient color contrast ratios
- Form labels with explicit associations

---

## Data Management

### localStorage API Usage

**Favorites:***
```javascript
localStorage.setItem("favoriteTemples", JSON.stringify([1, 5, 12]));
```

**Transactions:**
```javascript
localStorage.setItem("transactions", JSON.stringify([
  {description: "Hotel", amount: 150, type: "expense", date: "2/17/2026"}
]));
```

**Dark Mode:**
```javascript
localStorage.setItem("darkMode", true);
```

---

## Browser Compatibility

- Chrome/Chromium (Latest 2 versions)
- Firefox (Latest 2 versions)
- Safari (Latest 2 versions)
- Edge (Latest version)
- Mobile browsers (iOS Safari, Chrome Mobile)

**Note:** localStorage requires browser support (all modern browsers)

---

## Validation & Error Handling

### Form Validation (Contact Form)
```javascript
- Email regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
- Name minimum: 2 characters
- Message minimum: 10 characters
```

### Planner Validation
```javascript
- Amount must be positive number > 0
- Description must be non-empty string
- Type must be one of: "income", "expense"
```

### Error Messages
- User-friendly alerts for form errors
- "No results" message for empty filtered results
- "No transactions" message in empty state

---

## Performance Optimizations

1. **Lazy Loading**: Images use `loading="lazy"` attribute
2. **CSS Variables**: Single source of truth for colors
3. **Event Delegation**: Efficient event listener management
4. **Local Storage**: Fast, persistent data access
5. **Minified Assets**: Production-ready stylesheets

---

## Future Enhancement Ideas

1. **Data Export**: Export transactions as CSV/PDF
2. **Multiple Users**: Login/registration system
3. **Real Database**: Replace localStorage with backend API
4. **Trip Planning**: Itinerary builder with dates
5. **Multiple Currencies**: Automatic currency conversion
6. **Mobile App**: React Native/Flutter version
7. **Social Features**: Share favorite temple lists
8. **Admin Panel**: Manage temple database
9. **Statistics**: Visual charts and spending analysis
10. **Notifications**: Reminders for trip planning

---

## Testing Checklist

- [ ] All pages load without console errors
- [ ] Mobile navigation toggles correctly
- [ ] Dark mode persists after page reload
- [ ] Favorites system works and persists
- [ ] Search filters in real-time
- [ ] Region filter properly narrows results
- [ ] Sort by dedication date works (both directions)
- [ ] Modal opens/closes correctly
- [ ] Contact form validates all fields
- [ ] Budget planner calculations are accurate
- [ ] Transactions persist after page reload
- [ ] Delete transaction works correctly
- [ ] All links navigate correctly
- [ ] Footer year updates automatically
- [ ] Responsive design works at all breakpoints

---

## Credits & References

**Data Sources:**
- The Church of Jesus Christ of Latter-day Saints Official Website
- churchofjesuschristtemples.org
- Official Church Media Library

**Fonts:**
- Google Fonts (Merriweather, Open Sans, Playfair Display, Roboto)

**Icons:**
- Unicode Symbols

**Code References:**
- MDN Web Docs (mozilla.org)
- W3Schools.com
- FreeCodeCamp.org

**Inspired By:**
- Professional travel planning websites
- Modern web design best practices
- Responsive web design patterns

---

## Maintenance Notes

### Regular Updates Needed
- Update temple database as new temples are announced
- Refresh external image URLs as needed
- Monitor localStorage for quota issues
- Update copyright year annually

### Common Issues & Solutions

**Issue:** Favorites not persisting
**Solution:** Check browser's localStorage limit (usually 5-10MB)

**Issue:** Images not loading
**Solution:** Verify image URLs are still active on Church website

**Issue:** Dark mode not persisting
**Solution:** Ensure localStorage is enabled in browser settings

---

## License

This project is created for educational purposes. All temple data and official imagery used with attribution to The Church of Jesus Christ of Latter-day Saints.

---

**Questions or Suggestions?** Use the Contact form to reach out!
