import { Image } from './Image.ts';
import { Tags } from './Tags.ts';

    interface ImageData {
        name: string;
        alt: string;
    }
    
    interface Tag {
        slug: string;
        title: string;
    }
  
  interface CardData {
    heading: string;
    description: string;
    image: ImageData;
    tags: Tag[];
  }

  export function Card(cardData: CardData): HTMLElement {
  
  const card = document.createElement('div');
  card.classList.add('card');

  const heading = document.createElement('h2');
  heading.textContent = cardData.heading;

  const description = document.createElement('p');
  description.textContent = cardData.description;

  const img = Image(cardData.image);

  const tags = Tags(cardData.tags);

  card.appendChild(img);
  card.appendChild(heading);
  card.appendChild(description);
  card.appendChild(tags);

  return card;
}