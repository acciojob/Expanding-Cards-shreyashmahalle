//your JS code here. If required.
const panels = document.querySelectorAll('.panel');

panels.forEach(panel => {
panel.addEventListener('click', () => {
    panels.forEach(p => p.classList.remove('active'));
    panels.classList.add('active');
  });
});