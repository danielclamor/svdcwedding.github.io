// import './style.css'
import javascriptLogo from './javascript.svg'
import { setupCounter } from './counter.js'

fetch("/src/top_landing.html").then(r=>r.text()).then((html)=>{ // get the content of products.html
  // let element = document.createElement("html");
  // element.innerHTML = html; // parse the html
  // let p1 = element.querySelector("#p1");
  document.querySelector('#app').innerHTML = html;
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