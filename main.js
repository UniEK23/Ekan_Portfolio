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

// TESTIMONIALS ANIMATION OF DUPLICATE CARDS
// Duplicate images to make the animation work

const tracks = document.querySelectorAll(".testimonials-content");

tracks.forEach(track => {
  const cards = [...track.children];

  // Duplicate cards only once
  for (const card of cards) {
    track.appendChild(card.cloneNode(true));
  }
});

// COPY EMAIL IN CONTACT
const copyBtn = document.getElementById("contact-btn");
const copyEmail = document.getElementById("contact-email").textContent;

copyBtn.addEventListener("click", () => {
  // Using the clipboard API to copy text
  navigator.clipboard.writeText(copyEmail).then(() => {
    copyBtn.innerHTML = 'Email copied <i class="ri-check-line"></i>';

    // Restore Original Text
    setTimeout(() => {
      copyBtn.innerHTML = 'Copy email <i class="ri-file-copy-line"></i>';
    }, 2000);
  });
});

// CURRENT YEAR AT THE FOOTER
const textYear = document.getElementById("footer-year");
let currentYear = new Date().getFullYear();

// Updates the current year each year
textYear.textContent = currentYear;

// SCROLL SECTIONS ACTIVE LINK
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  // We get the position by scrolling down
  const scrollY = window.scrollY;

  sections.forEach(section => {
    const id = section.id;   //Id of each section
    const top =  section.offsetTop - 50;  //  Distance from the top edge
    const height = section.offsetHeight;  //  Eleement height 
    const link = document.querySelector(".nav-menu a [href*=" + id +"]")  //id nav link

    if(!link) return;

    link.classList.toggle("active-link", scrollY > topc)
  })
}

window.addEventListener("scroll", scrollActive);