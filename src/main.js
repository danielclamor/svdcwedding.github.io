fetch("/src/main.html").then(r=>r.text()).then((html)=>{
  document.querySelector('#app').innerHTML = html;
});

const arrowDownButton = document.querySelector("#button-arrow-down");

arrowDownButton.addEventListener("click", function (e) {
  const details = document.querySelector('div[name="details"]');

  details.scrollIntoView({behavior: 'smooth'});
});