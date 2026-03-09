const revealSections = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('in-view');
      observer.unobserve(entry.target);
    });
  },
  {
    threshold: 0.14,
    rootMargin: '0px 0px -8% 0px'
  }
);

revealSections.forEach((section, index) => {
  section.style.transitionDelay = `${Math.min(index * 40, 220)}ms`;
  observer.observe(section);
});
