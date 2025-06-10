// import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <h1 class="--font-pprader text-3xl font-bold underline">
      Hello World!
    </h1>
  </div>
`

setupCounter(document.querySelector('#counter'))
