// HOME SPLIT TEXT
const { animate, splitText, stagger } = anime;

const { chars: chars1 } = splitText('.home-profession1', { chars: true });
const { chars: chars2 } = splitText('.home-profession2', { chars: true });
const { chars: chars3 } = splitText('.home-profession3', { chars: true });

animate(chars1, {
  y: [
    { to: ['100%', '0%'] },
    { to: '-100%', delay: 4000, ease: 'in(3)' }
  ],
  duration: 700,
  ease: 'out(3)',
  delay: stagger(80),
  loop: true,
});

animate(chars2, {
  y: [
    { to: ['100%', '0%'] },
    { to: '-100%', delay: 4000, ease: 'in(3)' }
  ],
  duration: 700,
  ease: 'out(3)',
  delay: stagger(80),
  loop: true,
});

animate(chars3, {
  y: [
    { to: ['100%', '0%'] },
    { to: '-100%', delay: 4000, ease: 'in(3)' }
  ],
  duration: 700,
  ease: 'out(3)',
  delay: stagger(80),
  loop: true,
});

// PROJECTS SWIPER JS
const swiperProjects = new Swiper('.projects-swiper', {
  loop: true,
  spaceBetween: 24,
  slidesPerView: 'auto',
  grabCursor: true,
  speed: 600, 

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  }
});

// SWITCHING WORK TABS
const tabs = document.querySelectorAll('[data-target]');
const tabContents = document.querySelectorAll('[data-content]');

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const targetSelector = tab.dataset.target;
    const targetContent = document.querySelector(targetSelector);

    // Disable all content and active tabs
    tabContents.forEach((content) => content.classList.remove('work-active'));
    tabs.forEach((t) => t.classList.remove('work-active'));

    // Active the tab and corresponding content
    tab.classList.add('work-active');
    targetContent.classList.add('work-active');
  });
});

// SERVICES
const servicesButtons = document.querySelectorAll(".services-button");

servicesButtons.forEach (button => {
  // Add your height to services info
  const heightInfo = document.querySelector(".services-info");
  heightInfo.style.height = heightInfo.scrollHeight + "px";

  button.addEventListener("click", () => {
    const servicesCards = document.querySelectorAll(".services-card"),
    currentCard = button.parentNode,
    currentInfo = currentCard.querySelector(".services-info"),
    isCardOpen = currentCard.classList.contains("services-open")

    // Close all other services info
    servicesCards.forEach (card => {
      card.classList.replace("services-open", "services-close")

      const info = card.querySelector(".services-info")
      info.style.height = "0"
    })

    // Open only if not already open
    if (!isCardOpen) {
      currentCard.classList.replace("services-close", "services-open");
      currentInfo.style.height = currentInfo.scrollHeight + "px";
    }
  });
});