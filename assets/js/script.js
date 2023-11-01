let navbar = document.querySelector(".header .navbar");

document.querySelector("#menu-btn-hidden").onclick = () => {
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  navbar.classList.remove("active");
};



const slides = document.querySelector('.slides');
  const slideItems = document.querySelectorAll('.slide');
  let index = 0;

  function nextSlide() {
    index = (index + 1) % slideItems.length;
    updateSlide();
  }

  function updateSlide() {
    slides.style.transform = `translateX(${-index * 100}%)`;
  }

  setInterval(nextSlide, 3000);



  // box timf kieem


  // Add your JavaScript functions here
  let currentIndex = 0;
  const totalLogos = document.querySelectorAll('.logo-slider img').length;
  const logoSlider = document.getElementById('logoSlider');

  function prevLogo() {
    currentIndex = (currentIndex - 1 + totalLogos) % totalLogos;
    updateSlider();
  }

  function nextLogo() {
    currentIndex = (currentIndex + 1) % totalLogos;
    updateSlider();
  }

  function updateSlider() {
    const translateValue = -currentIndex * 100 + '%';
    logoSlider.style.transform = 'translateX(' + translateValue + ')';
  }



