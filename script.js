// Set current year in footer automatically
document.getElementById('year').textContent = new Date().getFullYear();

// Fake tab-switching feel: clicking a tab just scrolls to matching section
const tabs = document.querySelectorAll('.tab');
const sections = {
  0: null, // portfolio.dky = top of page
  1: document.querySelector('.block'), // about.md
  2: document.getElementById('contact') // contact.txt
};

tabs.forEach((tab, i) => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    if (i === 0) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (sections[i]) {
      sections[i].scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
