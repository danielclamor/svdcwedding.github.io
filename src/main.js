// import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
<div class="flex justify-center"> 
  <h1 class="text-3xl">
    Hello World!
  </h1>
</div>
`

setupCounter(document.querySelector('#counter'))
