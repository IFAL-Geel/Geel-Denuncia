import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GeelLogo from "../public/LogoGeel.png"
import Back from "../public/Background.png"
import Modal from './components/Modal/Index'

function App() {
  const [message, setMessage] = useState("")
  const [sendEnabled, setSendEnabled] = useState(false)
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    if(message.trim() !== ""){
      setSendEnabled(true)
    } else {
      setSendEnabled(false)
    }
  })

  return (
    <div className="AppInner">
      <Modal onClose={() => setShowModal(false)} show={showModal}/>
      <div className="backInner">
        <img src={Back} alt="" />
      </div>
      <div className="reportInner">
        <form action="" className="formInner">
          <div className="imgInner">
            <img src={GeelLogo} alt="" />
          </div>
          <h1 className="reportTheme">CANAL DE DENÚNCIAS</h1>
          <div className="nameInner">
            <input
            name='Nome'
            className='reportName'
            type="text" 
            placeholder='Digite seu nome ou deixe vazio para "Anônimo"'/>
            <div className="iconInner">
              <i class="fa-solid fa-user"></i>
            </div>
          </div>
          <textarea
            name='Relato'
            value={message}
            onChange={(e) => {setMessage(e.target.value)
                              console.log(message)}}
            className='reportArea'
            placeholder='Digite seu relato...'/>
          <button className="reportSend" disabled={!sendEnabled}>Enviar Denúncia</button>
        </form>
        <div className="optionsInner">
          <i class="fa-solid fa-chevron-left"></i>
          <i class="fa-regular fa-circle-question" onClick={() => setShowModal(true)}></i>
        </div>
      </div>
    </div>
  )
}

export default App
