import { useEffect, useState } from 'react'
import './App.css'
import GeelLogo from "../public/LogoGeel.png"
import Back from "../public/Background.png"
import Modal from './components/Modal/Index'
import Thanks from './components/Thanks/Index'

function App() {
  const [message, setMessage] = useState("")
  const [sendEnabled, setSendEnabled] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [textAreaLenght, setTextAreaLenght] = useState(0)
  const [dir, setDir] = useState("")
  const [name, setName] = useState("")
  const [showThanks, setShowThanks] = useState(false)
  const [number, setNumber] = useState("")

  useEffect(() => {
    if(message.trim() !== "" && message.trim().length >= 100 && dir != ""){
      setSendEnabled(true)
    } else {
      setSendEnabled(false)
      
    }
  },[message, dir])

  useEffect(() => {
    setTextAreaLenght(message.trim().length)
    if(message.trim().length >= 100){
      const text = document.querySelector(".lenghtTextArea")
      text.style.visibility =  "hidden"
    } else {
      const text = document.querySelector(".lenghtTextArea")
      text.style.visibility =  "visible"
    }
  }, [message])

  useEffect(() => {
    const formatPhoneNumber = (value) => {
      const cleaned = value.replace(/\D/g, '');
      return cleaned;
    }
    setNumber(formatPhoneNumber(number))
  }, [number]);

  function sendMessage(e){
    e.preventDefault()
    const button = document.querySelector(".reportSend")
    const inputs = document.querySelectorAll(".inp")

    inputs.forEach(input => {
      input.style.pointerEvents = "none"
    });

    button.innerHTML = "Enviando..."
    button.style.pointerEvents = "none"
    button.style.backgroundColor = "#39beb3"

    fetch("https://formsubmit.co/ajax/denunciasgeel@gmail.com", {
    method: "POST",
    headers:
      { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
    body:
      JSON.stringify({
        Nome: name != "" ? name : "Anônimo",
        Número: number != "" ? number : "Anônimo",
        Diretoria: dir,
        Relato: message
      })
    })
      .then(response => response.json())
      .then(data => {
        setName("")
        setMessage("")
        button.innerHTML = "Enviado"
        button.style.backgroundColor = "gray"
        setShowThanks(true)})
      .catch(error => console.log(error));
    }

  return (
    <div className="AppInner">
      <Thanks show={showThanks}/>
      <Modal onClose={() => setShowModal(false)} show={showModal}/>
      <div className="backInner">
        <img src={Back} alt="" />
      </div>
      <div className="reportInner">
        <form className="formInner">

          <div className="imgInner">
            <img src={GeelLogo} alt="" />
          </div>
          <h1 className="reportTheme">CENTRAL DE DENÚNCIAS</h1>
          <div className="inputInner nameInput">
            <input
            name='Nome'
            className='reportName inp'
            type="text" 
            placeholder='Digite seu nome ou deixe vazio para "Anônimo"'
            value={name}
            onChange={(e) => {setName(e.target.value)}}/>
            <div className="iconInner">
              <i class="fa-solid fa-user"></i>
            </div>
          </div>

          <div className="inputInner numberInput">
            <input
            name='Número'
            className='reportName inp'
            type="text" 
            placeholder='Digite seu número ou deixe vazio'
            value={number}
            onChange={(e) => {setNumber(e.target.value)}}/>
            <div className="iconInner">
              <i class="fa-solid fa-phone"></i>
            </div>
          </div>
          
          <div className="directFilterInner">
            <select name='Diretoria inp'onChange={(e) => {setDir(e.target.value)}}>
              <option value="" hidden>
                Selecione uma Diretoria...
              </option>
              <option value="Diretoria da Mulher">Diretoria da Mulher</option>
              <option value="Diretoria de Diversidade Sexual e Gênero">Diretoria de Diversidade Sexual e Gênero</option>
              <option value="Diretoria de Saude e Meio-Ambiente">Diretoria de Saude e Meio-Ambiente</option>
              <option value="Diretoria de Diversidade Étnica">Diretoria de Diversidade Étnica</option>
              <option value="Diretoria de Assuntos Educacionais">Diretoria de Assuntos Educacionais</option>
              <option value="Diretoria de Assistencia Estudantil">Diretoria de Assistencia Estudantil</option>
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
              className='reportArea inp'
              placeholder='Digite seu relato...'/>
              <p className="lenghtTextArea">{textAreaLenght}/100</p>
          </div>
          <button className="reportSend" disabled={!sendEnabled} onClick={(e) => {sendMessage(e)}}>Enviar Denúncia</button>
        </form>
        <div className="optionsInner">
          <i class="fa-regular fa-circle-question" onClick={() => setShowModal(true)}></i>
        </div>
      </div>
    </div>
  )
}

export default App
