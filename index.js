// Script for Accessibility Toggle and Options
const accessibilityToggle = document.getElementById("accessibility-toggle");
const accessibilityOptions = document.getElementById("accessibility-options");
const themeToggle = document.getElementById("theme-toggle");
const increaseFont = document.getElementById("increase-font");
const decreaseFont = document.getElementById("decrease-font");

let currentFontSize = 16; // Base font size in px

// Toggle accessibility options visibility
accessibilityToggle.addEventListener("click", () => {
    accessibilityOptions.style.display =
        accessibilityOptions.style.display === "flex" ? "none" : "flex";
});

// Toggle Dark/Light Theme
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");
    themeToggle.textContent = document.body.classList.contains("light-theme") ? "☀️" : "🌙";
});

// Increase Font Size
increaseFont.addEventListener("click", () => {
    if (currentFontSize < 22) { // Limit font size increase
        currentFontSize += 2;
        document.documentElement.style.setProperty("--font-size-base", `${currentFontSize / 16}rem`);
    }
});

// Decrease Font Size
decreaseFont.addEventListener("click", () => {
    if (currentFontSize > 12) { // Limit font size decrease
        currentFontSize -= 2;
        document.documentElement.style.setProperty("--font-size-base", `${currentFontSize / 16}rem`);
    }
});
