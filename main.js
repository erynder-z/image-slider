const slideShow = (() => {
  const slides = document.querySelectorAll('.mySlides');
  const dots = document.querySelectorAll('.dot');
  const prevBtn = document.getElementById('prev');
  const nextBtn = document.getElementById('next');
  let slideIndex = 0;

  prevBtn.addEventListener('click', () => {
    plusSlides(-1);
  });

  nextBtn.addEventListener('click', () => {
    plusSlides(1);
  });

  const plusSlides = (number) => {
    showSlides((slideIndex += number));
  };

  const currentSlide = (number) => {
    showSlides((slideIndex = number));
  };

  const showSlides = (number) => {
    if (number > slides.length) {
      slideIndex = 1;
    }
    if (number < 1) {
      slideIndex = slides.length;
    }

    slides.forEach((slide) => {
      slide.style.display = 'none';
    });

    dots.forEach((dot) => {
      dot.className = dot.className.replace(' active', '');
    });

    slideIndex++;
    slideIndex > slides.length ? (slideIndex = 1) : null;
    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].className += ' active';
  };

  const dotControls = (() => {
    const getDots = document.querySelectorAll('.dot');
    getDots.forEach((item) => {
      item.addEventListener('click', () => {
        currentSlide(item.dataset.index - 1);
      });
    });
  })();

  showSlides();
  setTimeout(showSlides, 7000);
})();
