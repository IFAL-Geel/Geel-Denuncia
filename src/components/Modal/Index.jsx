import { React, useEffect } from "react";
import "./Style.css"

function Modal(props) {

    if(!props.show){
        return null
    } else { 
        return(
            <div className="modalInner">
                <spam className="modalBack" onClick={props.onClose}></spam>
                <div className="modalInfos">
                    <i class="fa-solid fa-xmark" onClick={props.onClose}></i>
                    <p>Sobre o Tratamento de Dados</p>
                    <dl>
                        <dt>1. Recebimento da Denúncia:</dt>
                            <dd>◾ A denúncia é enviada para o e-mail associado ao site de denúncias, independentemente de ser identificada ou anônima.</dd>
                        <dt>2. Análise Inicial:</dt>
                            <dd>◾ Um membro designado da equipe responsável pelo site de denúncias verifica o conteúdo recebido.</dd>
                            <dd>◾ Certifica-se de que a denúncia está completa e contém informações essenciais.</dd>
                        <dt>3. Verificação de Denúncias Anteriores:</dt>
                            <dd>◾ O conteúdo da denúncia é comparado com registros anteriores para identificar se outras denúncias relacionadas à mesma pessoa ou incidente foram feitas anteriormente.</dd>
                        <dt>4. Encaminhamento ao Setor Responsável:</dt>
                            <dd>◾ Após a análise inicial e a verificação de denúncias anteriores, a denúncia é encaminhada ao setor responsável do IFAL Campus Maceió.</dd>
                        <dt>5. Assunção pela Gestão:</dt>
                            <dd>◾ A equipe de gestão do setor assume a responsabilidade pelo caso.</dd>
                            <dd>◾ A gestão inicia a investigação interna, se necessário, para apurar os detalhes da denúncia.</dd>
                        <dt>6. Tomada de Medidas Necessárias:</dt> 
                            <dd>◾ Com base nas conclusões da investigação, o GEEL acompanhara se medidas estão sendo tomadas para lidar com a denúncia</dd>
                            <dd>◾ Isso pode incluir manutenções, ações disciplinares, apoio às vítimas, medidas preventivas ou outras ações apropriadas.</dd>
                        <dt>7. Privacidade das Denúncias Anônimas:</dt>
                            <dd>◾ As denúncias anônimas também são tratadas com o mesmo rigor e confidencialidade que as identificadas.</dd>
                            <dd>◾ A identidade do denunciante anônimo é protegida, e nenhum esforço é feito para revelar sua identidade.</dd>

                        <dt className="privacy">Da Privacidade das Denúncias:</dt>
                            <dd className="privacyDesc">Garantimos total confidencialidade e sigilo em relação às denúncias recebidas. Os relatos e informações fornecidos pelos denunciantes são tratados com a máxima discrição e não são divulgados ou expostos publicamente, a menos que seja expressamente solicitado ou exigido por lei. A preservação da privacidade dos envolvidos é uma prioridade fundamental em nosso processo de triagem de denúncias, permitindo que os indivíduos se sintam seguros ao compartilhar suas preocupações e experiências. Nosso compromisso é criar um ambiente acadêmico seguro e ético para todos.</dd>
                    </dl>

                    <footer>Geel<span>©️</span> 2023</footer>
                </div>
            </div>
        )
    }
}

export default Modal
