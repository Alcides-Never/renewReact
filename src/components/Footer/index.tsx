import "./style.css"

import dev from "../../assets/img/dev.png"
import logo from "../../assets/img/logo.svg"
import facebook from "../../assets/img/facebook.svg"
import instagram from "../../assets/img/instagram.svg"
import linkedin from "../../assets/img/linkedin.svg"


function Footer() {
    return (
        <>
            <footer id="footer">
                <div className="container rodape">
                    <div className="span_dicas">
                        {/* <img src="../../assets/img/dev.png" alt="" /> */}
                        <img src= { dev } alt="" />
                        <div className="span_dicas_texto">
                            <p>
                                Temos algumas dicas para o seu serviço ou freela ser um sucesso,
                                acesse nossa página de recomendações para saber mais.
                            </p>
                            <a className="botao botao_dicas" href="#">
                                mais dicas
                            </a>
                        </div>
                    </div>
                    <div className="rodape_conteudo">
                        <div className="rodape_conteudo_paginas">
                            <h2>Páginas</h2>
                            <ul>
                                <li>Login</li>
                                <li>Home</li>
                                <li>Listar Serviços</li>
                                <li>Cadastrar Cliente</li>
                                <li>Cadastrar Desenvolvedor</li>
                            </ul>
                        </div>
                        <img src={ logo } alt="" />
                        <div className="rodape_conteudo_contatos">
                            <h2>Contatos</h2>
                            <div>
                                <a href="#">
                                    <img src={ facebook } alt="" />
                                </a>
                                <a href="#">
                                    <img src={ instagram } alt="" />
                                </a>
                                <a href="#">
                                    <img src={ linkedin } alt="" />
                                </a>
                            </div>
                            <a href="mailto:">contato@vsconnect.com</a>
                        </div>
                    </div>
                    <p>todos os direitos reservados ©.</p>
                </div>
            </footer>

        </>
    )
}

export default Footer;