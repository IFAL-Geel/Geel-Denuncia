import { React, useEffect } from "react";
import "./Style.css"

function Thanks(props) {
    function Reload() {
        window.location.reload()
    }

    if(!props.show){
        return null
    } else {
        return(
            <div className="thanksInner">
                <spam className="modalBack"></spam>
                <div className="thanksInfos">
                    <h1>Obrigado por utilizar nossa Central!!</h1>
                    <p>Sua denúncia foi enviada ao nosso email e sera analisada dentro dos critérios listados aqui mesmo no site.</p>

                    <button onClick={Reload}>Clique Para Sair</button>

                    <footer>Geel<span>©️</span> 2023</footer>
                </div>
            </div>
        )
    }
}

export default Thanks