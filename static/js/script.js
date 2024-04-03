document.addEventListener('DOMContentLoaded', function() {
    let currentImageIndex = 0;
    let images = document.querySelectorAll('.gallery img');
    let maxIndex = images.length;

    function showImage(index) {
        images.forEach(img => img.style.display = 'none');
        images[index].style.display = 'block';
    }

    function rotateGallery() {
        currentImageIndex = (currentImageIndex + 1) % maxIndex;
        showImage(currentImageIndex);
    }

    if (images.length > 0) {
        showImage(0);
        setInterval(rotateGallery, 3000); // Rotate images every 3 seconds
    }

    document.querySelectorAll('.balloon').forEach(balloon => {
        balloon.style.left = `${Math.random() * 100}%`;
        balloon.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 75%)`;
    });

    const galleryContainer = document.querySelector('.gallery');
    galleryContainer.addEventListener('mouseover', () => {
        galleryContainer.style.transform = 'rotate(-10deg)';
    });
    galleryContainer.addEventListener('mouseout', () => {
        galleryContainer.style.transform = 'rotate(0deg)';
    });
});
