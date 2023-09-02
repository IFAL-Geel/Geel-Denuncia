import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GeelLogo from "../public/LogoGeel.png"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="AppInner">
      <div className="reportInner">
        <div className="imgInner">
          <img src={GeelLogo} alt="" />
        </div>
        <textarea className='reportArea' />
        <button className="reportSend">Enviar Denúncia</button>
      </div>
    </div>
  )
}

export default App
