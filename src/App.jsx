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
  const [textAreaLenght, setTextAreaLenght] = useState(0)
  const [dir, setDir] = useState("Diretoria da Mulher")

  useEffect(() => {
    if(message.trim() !== "" && message.trim().length > 50){
      setSendEnabled(true)
    } else {
      setSendEnabled(false)
      
    }
  },)

  useEffect(() => {
    setTextAreaLenght(message.trim().length)
    if(message.trim().length >= 50){
      const text = document.querySelector(".lenghtTextArea")
      text.style.visibility =  "hidden"
    } else {
      const text = document.querySelector(".lenghtTextArea")
      text.style.visibility =  "visible"
    }
  }, [message])

  return (
    <div className="AppInner">
      <Modal onClose={() => setShowModal(false)} show={showModal}/>
      <div className="backInner">
        <img src={Back} alt="" />
      </div>
      <div className="reportInner">
        <form action="https://formsubmit.co/els26@aluno.ifal.edu.br" method="POST" className="formInner">

          <input type="hidden" name="_subject" value={"Central de Denúncias | " + dir} />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table"></input>

          <div className="imgInner">
            <img src={GeelLogo} alt="" />
          </div>
          <h1 className="reportTheme">CENTRAL DE DENÚNCIAS</h1>
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
          
          <div className="directFilterInner">
            <select name='Diretoria' onChange={(e) => {setDir(e.target.value)}}>
              <option value="Diretoria da Mulher">Diretoria da Mulher</option>
              <option value="Diretoria de Diversidade Sexual e Gênero">Diretoria de Diversidade Sexual e Gênero</option>
              <option value="Diretoria de Saude e Meio-Ambiente">Diretoria de Saude e Meio-Ambiente</option>
              <option value="Diretoria de Diversidade Étnica">Diretoria de Diversidade Étnica</option>
              <option value="Não sei dizer">Não sei dizer...</option>
            </select>
            <div className="iconDropInner">
              <i class="fa-brands fa-wpforms"></i>
            </div>
          </div>

          <div className="textAreaInner">
            <textarea
              name='Relato'
              value={message}
              onChange={(e) => {setMessage(e.target.value)}}
              className='reportArea'
              placeholder='Digite seu relato...'/>
              <p className="lenghtTextArea">{textAreaLenght}/50</p>
          </div>
          <button className="reportSend" disabled={!sendEnabled}>Enviar Denúncia</button>
        </form>
        <div className="optionsInner">
          <i class="fa-regular fa-circle-question" onClick={() => setShowModal(true)}></i>
        </div>
      </div>
    </div>
  )
}

export default App
