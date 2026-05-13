// Function to apply theme and update icons
function applyTheme(theme) {
    const lightIcon = document.getElementById('theme-toggle-light-icon');
    const darkIcon = document.getElementById('theme-toggle-dark-icon');

    if (theme === 'dark') {
        document.documentElement.classList.add('dark');
        if(lightIcon) lightIcon.classList.remove('hidden');
        if(darkIcon) darkIcon.classList.add('hidden');
    } else {
        document.documentElement.classList.remove('dark');
        if(lightIcon) lightIcon.classList.add('hidden');
        if(darkIcon) darkIcon.classList.remove('hidden');
    }
}

// 1. Initial Check: Follow system or previous manual choice
const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const manualTheme = localStorage.getItem('color-theme');

if (manualTheme === 'dark' || (!manualTheme && systemPrefersDark)) {
    document.documentElement.classList.add('dark');
} else {
    document.documentElement.classList.remove('dark');
}

// 2. Listen for system-level changes (e.g., sunset/sunrise mode)
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    if (!localStorage.getItem('color-theme')) { // Only auto-switch if user hasn't set a manual preference
        applyTheme(e.matches ? 'dark' : 'light');
    }
});

