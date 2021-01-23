var body = document.querySelector('body');
var toggle = document.querySelector('#toggle');

toggle.addEventListener('change', () => {
  if (toggle.checked) {
    body.classList.add('dark');
  } else {
    body.classList.remove('dark');
  }
});
