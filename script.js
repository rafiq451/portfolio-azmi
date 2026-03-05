function toggle(card) {
  let detail = card.querySelector('.detail');

  detail.style.display = detail.style.display === 'block' ? 'none' : 'block';
}

const cards = document.querySelectorAll('.grid .card');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  },
  { threshold: 0.2 }
);

cards.forEach((card) => observer.observe(card));

const awards = document.querySelectorAll('.award');

const awardObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      } else {
        entry.target.classList.remove('show');
      }
    });
  },
  { threshold: 0.3 }
);

awards.forEach((el) => awardObserver.observe(el));
