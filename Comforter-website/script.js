import { fetchData, postData } from './modules/api.js';
import { renderGallery } from './modules/ui.js';
import { debounce } from './modules/utils.js';


document.addEventListener('DOMContentLoaded', async () => {
    try {
        const comforters = await fetchData(); // Fetch comforter data from API
        renderGallery(comforters); // Render comforter gallery
        
        // Add event listener for search input
        const searchInput = document.getElementById('searchInput');
        searchInput.addEventListener('input', debounce(async () => {
            const searchTerm = searchInput.value.trim();
            const filteredComforters = await fetchData(searchTerm); // Fetch filtered comforters
            renderGallery(filteredComforters); // Render filtered comforter gallery
        }, 300));
        
        // Example of user manipulation of data within the API (POST request)
        const newComforter = { name: 'New Comforter', price: 50 };
        const response = await postData(newComforter);
        console.log(response); // Log the response from POST request
    } catch (error) {
        console.error('Error:', error);
    }
});