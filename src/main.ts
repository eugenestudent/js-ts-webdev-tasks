import { Card } from './components/Card';
import cardsData from './db/cards.json';

const app = document.querySelector('#app') as HTMLElement;

cardsData.forEach(cardData => {
  const cardElement = Card(cardData);
  app.appendChild(cardElement);
});