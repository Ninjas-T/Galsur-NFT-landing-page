//Change the colors of header when the user scrolls down
window.addEventListener('scroll', function () {
  let header = document.querySelector('header');
  header.classList.toggle('scrolled', window.scrollY > 0);
});
