console.log('%c HI', 'color: firebrick');

// Challenge 1
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

fetch(imgUrl)
  .then(response => response.json())
  .then(data => {
    const dogImageContainer = document.getElementById('dog-image-container');

    data.message.forEach(imageUrl => {
      const imageElement = document.createElement('img');
      imageElement.src = imageUrl;
      dogImageContainer.appendChild(imageElement);
    });
  });

// Challenge 2
const breedUrl = 'https://dog.ceo/api/breeds/list/all';

fetch(breedUrl)
  .then(response => response.json())
  .then(data => {
    const breedList = document.getElementById('dog-breeds');
    const breedObject = data.message;

    Object.keys(breedObject).forEach(breed => {
      const breedItem = document.createElement('li');
      breedItem.textContent = breed;
      breedList.appendChild(breedItem);
    });
  });

// Challenge 3
document.addEventListener('DOMContentLoaded', () => {
  const breedList = document.getElementById('dog-breeds');

  breedList.addEventListener('click', event => {
    if (event.target.tagName === 'LI') {
      event.target.style.color = 'red';
    }
  });
});

// Challenge 4
document.addEventListener('DOMContentLoaded', () => {
  const breedDropdown = document.getElementById('breed-dropdown');
  const breedList = document.getElementById('dog-breeds');

  breedDropdown.addEventListener('change', event => {
    const selectedLetter = event.target.value;
    const breedItems = breedList.getElementsByTagName('li');

    for (let i = 0; i < breedItems.length; i++) {
      const breed = breedItems[i].textContent;

      if (breed.startsWith(selectedLetter)) {
        breedItems[i].style.display = 'block';
      } else {
        breedItems[i].style.display = 'none';
      }
    }
  });
});
