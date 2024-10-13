const cardData = [
    {
        header: 'Startup Framework',
        content: 'Startup is a powerful tool for quick and convenient proto-typing of your projects. It will fit most projects because it contains up-to-date and modern web elements.',
        
        cardBackground: '#EBEAED',
        headerColor: '',
        textColor: '#1E0E62',
        buttonColor: 'white',
        buttonTextColor: '#1E0E62'
    },
    {
        header: 'Web Generator',
        content: 'Startup is a powerful tool for quick and convenient proto-typing of your projects. It will fit most projects because it contains up-to-date and modern web elements.',
        
        cardBackground: 'white',
        headerColor: '#1E0E62',
        textColor: 'grey',
        buttonColor: '#25DAC5',
        buttonTextColor: 'white'
    },
    {
        header: 'Slides 4',
        content: 'All of these components are made in the same style, and can easily be inegrated into projects, allowing you to create hundreds of solutions for your future projects.',
        
        cardBackground: '#482BE7',
        headerColor: '',
        textColor: 'white',
        buttonColor: 'white',
        buttonTextColor: '#1E0E62'
    },
    {
        header: 'Postcards',
        content: 'All frequently used elements are now in symbols. Use them to create interfaces really fast. Easily change icons, colors and text. Add new symbols to customize your design.',
        
        cardBackground: '',
        backgroundImage: 'url(assets/card4Background.png)',
        headerColor: '',
        textColor: 'white',
        buttonColor: 'white',
        buttonTextColor: '#1E0E62'
    },
];

function createCard(cardInfo) {
    const card = document.createElement('div');
    card.classList.add('card');

    if (cardInfo.backgroundImage) {
        card.style.backgroundImage = cardInfo.backgroundImage;
    } else {
        card.style.backgroundColor = cardInfo.cardBackground;
    }

    /* Card's Header */
    const header = document.createElement('h2');
    header.classList.add('card-header');
    
    header.textContent = cardInfo.header;
    
    header.style.color = cardInfo.headerColor || cardInfo.textColor; 
   
    card.appendChild(header);

    /* Card Content(text) */
    const content = document.createElement('p');
    content.classList.add('card-content');

    content.textContent = cardInfo.content;
    content.style.color = cardInfo.textColor;
    
    card.appendChild(content);

    /* Card's Button */
    const button = document.createElement('button');
    button.classList.add('card-button');
    
    button.textContent = 'Explore';
    button.style.backgroundColor = cardInfo.buttonColor; 
    button.style.color = cardInfo.buttonTextColor; 
    
    card.appendChild(button);

    return card;
}

const cardContainer = document.getElementById('card-container');
cardData.forEach(cardInfo => {
    const cardElement = createCard(cardInfo);
    cardContainer.appendChild(cardElement);
});
