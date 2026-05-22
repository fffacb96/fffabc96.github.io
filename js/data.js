// Load painting data from embedded JSON
function getPaintingsData() {
    const dataElement = document.getElementById('paintings-data');
    if (!dataElement) return [];
    try {
        return JSON.parse(dataElement.textContent);
    } catch (e) {
        console.error('Failed to parse paintings data:', e);
        return [];
    }
}

// Initialize: Parse and make data globally available
window.paintingsData = getPaintingsData();
