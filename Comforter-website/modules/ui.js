export function renderGallery(comforters) {
    const galleryElement = document.getElementById('comforterGallery');
    galleryElement.innerHTML = ''; // Clear previous content

    comforters.forEach(comforter => {
        const comforterElement = document.createElement('div');
        comforterElement.classList.add('comforter');
        // Use comforters.jpg as the default photo source
        const photoSource = comforter.image || 'comforters.jpg';
        comforterElement.innerHTML = `
            <img src="${'comforter3.jpg'}" alt="${comforter.name}">
            <h3>${comforter.name}</h3>
            <p>$${'comforter.$59.99'}</p>
        `;
        galleryElement.appendChild(comforterElement);
    });
}