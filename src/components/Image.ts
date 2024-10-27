interface ImageData {
    name: string;
    alt: string;
  }

  export function Image(imageData: ImageData): HTMLElement {
    const img = document.createElement('img');
    img.src = new URL(`/src/assets/images/${imageData.name}`, import.meta.url).href;
    img.alt = imageData.alt;
    return img;
  }