import en from './src/locales/en.json';
import ar from './src/locales/ar.json';

interface Menu {
    home: string;
    gallery: string;
    about: string;
    reservation: string;
    contacts: string;
  }
  
  interface Translations {
    title: string;
    date: string;
    subtitle: string;
    memories: string;
    button: string;
    footer: string;
    menu: Menu;
  }

function fetchLocalization(language: string): Promise<Translations> {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (language === 'en') {
          resolve(en); 
        } else if (language === 'ar') {
          resolve(ar);
        }
      }, 2000);
    });
  }

let currentLanguage = 'en';

const elements = {
  title: document.querySelector('#title')!,
  date: document.querySelector('#date')!,
  subtitle: document.querySelector('#subtitle')!,
  memories: document.querySelector('#memories-title')!,
  reservationButton: document.querySelector('#reservation-button')!,
  footer: document.querySelector('#title-footer')!,
  menu: {
    home: document.querySelector('#menu-home')!,
    gallery: document.querySelector('#menu-gallery')!,
    about: document.querySelector('#menu-about')!,
    reservation: document.querySelector('#menu-reservation')!,
    contacts: document.querySelector('#menu-contacts')!,
  },
  toggle: document.querySelector('#language-toggle')!,
};


async function updateContent(): Promise<void> {
  
  const translations = await fetchLocalization(currentLanguage);

  elements.title.textContent = translations.title;
  elements.date.textContent = translations.date;
  elements.subtitle.textContent = translations.subtitle;
  elements.memories.textContent = translations.memories;
  elements.reservationButton.textContent = translations.button;
  elements.footer.textContent = translations.footer;

  Object.entries(translations.menu).forEach(([key, value]) => {
    (elements.menu as any)[key].textContent = value;
  });

  if (currentLanguage === 'ar') {
    
    document.querySelector('header')!.style.flexDirection = 'row-reverse';
    document.querySelector('header ul')!.style.flexDirection = 'row-reverse';
  } else {
    
    document.querySelector('header')!.style.flexDirection = 'row';
  }

}

elements.toggle.addEventListener('click', () => {
  currentLanguage = currentLanguage === 'en' ? 'ar' : 'en';
  updateContent();
});

updateContent();