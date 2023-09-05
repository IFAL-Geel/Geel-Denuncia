import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GeelLogo from "../public/LogoGeel.png"
import Back from "../public/Background.png"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="AppInner">
      <div className="backInner">
        <img src={Back} alt="" />
      </div>
      <div className="reportInner">
        <div className="imgInner">
          <img src={GeelLogo} alt="" />
        </div>
        <h1 className="reportTheme">CANAL DE DENÚNCIAS</h1>
        <textarea className='reportArea' placeholder='Digite seu relato...'/>
        <button className="reportSend" >Enviar Denúncia</button>
      </div>
    </div>
  )
}

export default App
