if (!localStorage.getItem('theme')) {
    // If not, set it to 'light' as the default value
    localStorage.setItem('theme', 'light');
}
const darkhead = document.querySelector('.darkhead');
function toggleDarkMode() {
    // Check current theme in localStorage
    let theme = localStorage.getItem("theme");

    
    if (theme === "dark") {
        document.documentElement.classList.remove("dark-mode");
        darkhead.innerHTML = '<i class="fa-regular fa-moon"></i> Dark Mode';
        localStorage.setItem("theme", "light"); // Store preference
    } else {
        document.documentElement.classList.add("dark-mode");
        darkhead.innerHTML = '<i class="fa-regular fa-sun"></i> Light Mode';
        localStorage.setItem("theme", "dark"); // Store preference
    }
}



// const darkhead = document.getElementsByClassName("darkhead");
darkhead.addEventListener("click", toggleDarkMode);
darkhead.addEventListener("click", () => {
    console.log("Dark mode toggled");
})



document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("theme") === "dark") {
        document.documentElement.classList.add("dark-mode");
    }
});

