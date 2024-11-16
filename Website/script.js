// Highlight button on scroll
const ctaBtn = document.querySelector(".cta-btn");

window.addEventListener("scroll", () => {
  const scrolled = window.scrollY > 100;
  ctaBtn.style.background = scrolled ? "#3700b3" : "#6200ea";
});

// AOS Initialization
AOS.init({
  duration: 1000, // Animation duration in ms
  easing: 'ease-in-out', // Easing function
});

// Array of custom images (25 unique images)
const images = [
  'assets/images/custom1.jpg',
  'assets/images/custom2.jpg',
  'assets/images/custom3.jpg',
  'assets/images/custom4.jpg',
  'assets/images/custom5.jpg',
  'assets/images/custom6.jpg',
  'assets/images/custom7.jpg',
  'assets/images/custom8.jpg',
  'assets/images/custom9.jpg',
  'assets/images/custom10.jpg',
  'assets/images/custom11.jpg',
  'assets/images/custom12.jpg',
  'assets/images/custom13.jpg',
  'assets/images/custom14.jpg',
  'assets/images/custom15.jpg',
  'assets/images/custom16.jpg',
  'assets/images/custom17.jpg',
  'assets/images/custom18.jpg',
  'assets/images/custom19.jpg',
  'assets/images/custom20.jpg',
  'assets/images/custom21.jpg',
  'assets/images/custom22.jpg',
  'assets/images/custom23.jpg',
  'assets/images/custom24.jpg',
  'assets/images/custom25.jpg',
];

// Array of custom download links (25 unique links)
const downloadLinks = [
  'https://example.com/download1',
  'https://example.com/download2',
  'https://example.com/download3',
  'https://example.com/download4',
  'https://example.com/download5',
  'https://example.com/download6',
  'https://example.com/download7',
  'https://example.com/download8',
  'https://example.com/download9',
  'https://example.com/download10',
  'https://example.com/download11',
  'https://example.com/download12',
  'https://example.com/download13',
  'https://example.com/download14',
  'https://example.com/download15',
  'https://example.com/download16',
  'https://example.com/download17',
  'https://example.com/download18',
  'https://example.com/download19',
  'https://example.com/download20',
  'https://example.com/download21',
  'https://example.com/download22',
  'https://example.com/download23',
  'https://example.com/download24',
  'https://example.com/download25',
];

// Dynamically generate feature cards (25)
const featuresGrid = document.querySelector('.features-grid');
for (let i = 0; i < 25; i++) { // Loop from 0 to 24
  const card = document.createElement('div');
  card.classList.add('feature-card');
  card.setAttribute('data-aos', 'fade-up');
  card.innerHTML = `
    <img src="${images[i]}" alt="Feature ${i + 1}">
    <h3>Feature ${i + 1}</h3>
    <p>Description for Feature ${i + 1}.</p>
    <a href="${downloadLinks[i]}" class="download-btn">Download</a>
  `;
  featuresGrid.appendChild(card);
}
