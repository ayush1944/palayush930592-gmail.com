const menuItem = document.querySelectorAll("nav a");
menuItem.forEach(item => {
  item.addEventListener("click", () => {
    menuItem.forEach(curr => curr.classList.remove("active"));
    item.classList.add("active");
  });
});

// const sections = document.querySelectorAll("section, #home");
const sections = document.querySelectorAll("section[id]");


const options = {
  threshold: 0.5
};

const observer = new IntersectionObserver((coordinates) => {
  coordinates.forEach(coordinate => {
    if (coordinate.isIntersecting) {
      const id = coordinate.target.getAttribute("id");

      menuItem.forEach(item => {
        item.classList.remove("active");

        if (item.getAttribute("href") === `#${id}`) {
          item.classList.add("active");
        }
      });
    }
  });
}, options);

sections.forEach(section => observer.observe(section));



// carousel

const track = document.querySelector('.carousel-track');
const slides = Array.from(track.querySelectorAll('.carousel-slide'));
const dots = Array.from(document.querySelectorAll('.carousel-indicators .dot'));
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');

if (track && slides.length > 0) {
  const gap = 25; 
  const slideWidth = slides[0].getBoundingClientRect().width + gap;

  const visibleSlides = 4;                     
  const maxIndex = slides.length - visibleSlides; 

  let currentIndex = 0;

  function goToSlide(index) {
    if (index < 0) index = 0;
    if (index > maxIndex) index = maxIndex;
    currentIndex = index;

    const offset = currentIndex * slideWidth;
    track.style.transform = `translateX(-${offset}px)`;
    track.style.transition = 'transform 0.45s ease';

    updateDots();
  }

  function updateDots() {
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === currentIndex);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      const nextIndex = currentIndex === maxIndex ? 0 : currentIndex + 1;
      goToSlide(nextIndex);
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      const prevIndex = currentIndex === 0 ? maxIndex : currentIndex - 1;
      goToSlide(prevIndex);
    });
  }

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => goToSlide(i));
  });

  let autoplayId = setInterval(() => {
    const nextIndex = currentIndex === maxIndex ? 0 : currentIndex + 1;
    goToSlide(nextIndex);
  }, 3000);

  const carousel = document.querySelector('.carousel');
  if (carousel) {
    carousel.addEventListener('mouseenter', () => clearInterval(autoplayId));
    carousel.addEventListener('mouseleave', () => {
      autoplayId = setInterval(() => {
        const nextIndex = currentIndex === maxIndex ? 0 : currentIndex + 1;
        goToSlide(nextIndex);
      }, 3000);
    });
  }

  goToSlide(0);
}


const modal = document.getElementById("project-modal");
const modalTitle = modal.querySelector(".modal-title");
const modalDes = modal.querySelector(".modal-des");
const modalTags = modal.querySelector(".modal-tags");
const modalCloseBtn = modal.querySelector(".modal-close");
const modalOverlay = modal.querySelector(".modal-overlay");

const projectCards = document.querySelectorAll(".card");

projectCards.forEach((card) => {
  card.addEventListener("click", () => {
    const titleEl = card.querySelector(".project_title");
    const descEl = card.querySelector(".project_desc");
    const tagEls = card.querySelectorAll(".tags .tag");

    const title = titleEl ? titleEl.textContent.trim() : "Project";
    const desc = descEl ? descEl.textContent.trim() : "";
    const tags = Array.from(tagEls).map((t) => t.textContent.trim());

    modalTitle.textContent = title;
    modalDes.textContent = desc;

    modalTags.innerHTML = "";
    tags.forEach((tagText) => {
      const li = document.createElement("li");
      li.className = "tag";
      li.textContent = tagText;
      modalTags.appendChild(li);
    });

    modal.classList.add("is-open");
    document.body.classList.add("modal-open");
  });
});

function closeModal() {
  modal.classList.remove("is-open");
  document.body.classList.remove("modal-open");
}

modalCloseBtn.addEventListener("click", closeModal);

modalOverlay.addEventListener("click", closeModal);

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.classList.contains("is-open")) {
    closeModal();
  }
});