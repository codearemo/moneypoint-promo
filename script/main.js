const hiddenComponent = document.querySelectorAll('.hide');
const main = document.querySelector('main');

setTimeout(() => {
  main.classList.add('show-main');
  hiddenComponent.forEach(component => {
    component.classList.remove('hide');
  });
}, 100);

