export async function loadImages() {
  try {
    const response = await fetch('images.json');
    if (!response.ok) {      
      throw new Error(`HTTP error! status: ${response.status}`);      
    }
    const data = await response.json();
    const images = data;

    const imageElements = document.querySelectorAll('img[data-image-id]');

    imageElements.forEach(imgElement => {
      const imageId = imgElement.dataset.imageId;
      const image = images.find(img => img.imageId === imageId);
      if (image) {
        imgElement.src = image.url;
        imgElement.alt = image.alt_text;
      } else {
        console.error(`No image found for imageId: ${imageId}`);
      }
    });
  } catch (error) {
    console.error('Error loading or applying images:', error);
  }
}
