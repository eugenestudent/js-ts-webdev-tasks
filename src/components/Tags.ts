interface Tag {
    slug: string;
    title: string;
  }
  

  export function Tags(tags: Tag[]): HTMLElement {
    const tagsContainer = document.createElement('div');
    tagsContainer.classList.add('tags');
  
    tags.forEach((tag, index) => {
      const tagElement = document.createElement('span');
      tagElement.textContent = index < tags.length - 1 ? `${tag.title},` : tag.title;
    
    tagsContainer.appendChild(tagElement);
  });

  return tagsContainer;
}