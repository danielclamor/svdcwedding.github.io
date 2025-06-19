// import './style.css'

fetch("/src/top_landing.html").then(r=>r.text()).then((html)=>{
  document.querySelector('#app').innerHTML = html;
});

fetch("/src/details_page.html").then(r=>r.text()).then((html)=>{
  document.querySelector('#app').innerHTML += html;
});

// document.querySelector('#app').innerHTML = `
// <div class="svdc__top-landing">
//   <div class="svdc__top-landing-left">
//     <img src="${svdcLogo}" class="svdc__logo" />
//     <h1></h1>
//   </div>
//   <div class="svdc__top-landing-right">

//   </div>
// </div>
// `