document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

const scrollBtn = document.createElement('button');
scrollBtn.innerText = '↑';
scrollBtn.className = 'scroll-top';
document.body.appendChild(scrollBtn);

scrollBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
  scrollBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});

const slider = document.getElementById('image-slider');
let scrollAmount = 0;
let autoScroll = setInterval(() => {
  if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth) {
    slider.scrollLeft = 0;
  } else {
    slider.scrollLeft += 1;
  }
}, 20);
