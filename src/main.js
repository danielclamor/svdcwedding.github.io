fetch("/src/main.html").then(r=>r.text()).then((html)=>{
  document.querySelector('#app').innerHTML = html;
});