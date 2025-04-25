import { loadImages } from './image_loader.js';

// Magazine Cover Carousel
loadImages().then(() => console.log("Images loaded")).catch(err => console.log(err));
document.addEventListener('DOMContentLoaded', () => {
    const pages = document.querySelectorAll('.magazine-cover .page');
    let currentPageIndex = 0;

    if (pages.length === 0) {
        console.warn("No magazine pages found.");
        return; // Exit if no pages are found
    }

    // Initialize: set the first page as active
    pages[currentPageIndex].classList.add('active');

    function showNextPage() {
        // Hide the current page
        pages[currentPageIndex].classList.remove('active');

        // Calculate the next page index
        currentPageIndex = (currentPageIndex + 1) % pages.length;

        // Show the next page
        pages[currentPageIndex].classList.add('active');
    }

    // Cycle through pages every 5 seconds
    setInterval(showNextPage, 5000); // 5000 milliseconds = 5 seconds
});
