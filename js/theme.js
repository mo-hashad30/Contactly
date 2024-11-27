// Theme switcher functionality
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = themeToggle.nextElementSibling.querySelector('i');
    
    // Check for saved theme preference, default to dark if none saved
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    themeToggle.checked = savedTheme === 'light';
    updateIcon(themeIcon, savedTheme === 'light');

    // Handle theme switch
    themeToggle.addEventListener('change', (e) => {
        const isLight = e.target.checked;
        document.documentElement.setAttribute('data-theme', isLight ? 'light' : 'dark');
        localStorage.setItem('theme', isLight ? 'light' : 'dark');
        updateIcon(themeIcon, isLight);
    });
});

function updateIcon(icon, isLight) {
    icon.className = isLight ? 'fas fa-sun' : 'fas fa-moon';
}
