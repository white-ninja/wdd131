const form = document.querySelector("#contact-form");

if (form) {
    // Get form inputs
    const nameInput = form.querySelector("input[type='text']");
    const emailInput = form.querySelector("input[type='email']");
    const messageInput = form.querySelector("textarea");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        // Get and trim values
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const message = messageInput.value.trim();

        // Validate inputs
        if (!name || !email || !message) {
            alert("Please fill out all fields.");
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        // Name validation (at least 2 characters)
        if (name.length < 2) {
            alert("Name must be at least 2 characters long.");
            return;
        }

        // Message validation (at least 10 characters)
        if (message.length < 10) {
            alert("Message must be at least 10 characters long.");
            return;
        }

        // Success message
        alert("Message sent successfully! Thank you for reaching out.");
        form.reset();
    });
}

