const arrowDownButton = document.querySelector('#button-arrow-down');

arrowDownButton.addEventListener("click", function (e) {
  const details = document.querySelector('div[name="details"]');

  details.scrollIntoView({behavior: 'smooth'});
});