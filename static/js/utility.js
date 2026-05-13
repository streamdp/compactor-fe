// Web Share Function
function shareLink(path) {
    const fullUrl = window.location.origin + path;
    if (navigator.share) {
        navigator.share({
            title: 'Shortened Link',
            text: 'Check out this shortened link:',
            url: fullUrl,
        }).catch(console.error);
    } else {
        // Fallback: Copy to clipboard if Share API isn't supported
        copy();
        alert("Share not supported. Link copied to clipboard!");
    }
}

// Dark Mode Logic
const themeToggleBtn = document.getElementById('theme-toggle');
const lightIcon = document.getElementById('theme-toggle-light-icon');
const darkIcon = document.getElementById('theme-toggle-dark-icon');

// Sync icons on page load
if (document.documentElement.classList.contains('dark')) {
    lightIcon.classList.remove('hidden');
} else {
    darkIcon.classList.remove('hidden');
}

themeToggleBtn.addEventListener('click', function() {
    // Toggle the class
    if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('color-theme', 'light');
        lightIcon.classList.add('hidden');
        darkIcon.classList.remove('hidden');
    } else {
        document.documentElement.classList.add('dark');
        localStorage.setItem('color-theme', 'dark');
        darkIcon.classList.add('hidden');
        lightIcon.classList.remove('hidden');
    }
});