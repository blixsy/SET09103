const urlPrefix = '/static/images/AdvWebTech/images/';
const modal = document.getElementById('myModal');
const popupContent = document.getElementById('popupContent');

function openModal(areaId) {
  console.log('URL Prefix:', urlPrefix);
  modal.style.display = 'block';
  const galleryImages = getGalleryImages(areaId);
  // Use template literals to dynamically generate the image elements
  popupContent.innerHTML = galleryImages.map(image => `<img src="${urlPrefix}images/AdvWebTech/images/${image}" alt="Image">`).join('');
}

function closeModal() {
  modal.style.display = 'none';
  popupContent.innerHTML = '';
}

window.onclick = function(event) {
  if (event.target === modal) {
    closeModal();
  }
};

function getGalleryImages(areaId) {
  if (areaId === '2021Halloween') {
    return [
      '2021.1.JPG',
      '2021.2.JPG',
      '2021.3.JPG',
      '2021.4.JPG',
      '2021.5.JPG',
      '2021.6.jpg',
      '2021.7.jpg',
      '2021.8.JPG',
      '2021.9.JPG'
    ];
  }
  return [];
}

function turnPage(pageId) {
  // Hide all pages
  const pages = document.querySelectorAll('.page');
  pages.forEach(page => {
    page.classList.add('hidden');
  });

  // Show the clicked page
  const clickedPage = document.getElementById(pageId);
  if (clickedPage) {
    clickedPage.classList.remove('hidden');
  } else {
    console.error(`Page with id ${pageId} not found.`);
  }
}

function submitName() {
  const username = document.getElementById('username').value;
  // Redirect to the index route with the name parameter
  window.location.href = `/?name=${username}`;
}
