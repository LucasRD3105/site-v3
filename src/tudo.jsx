import { useState } from 'react';
import React from 'react';
import { Link, Element } from 'react-scroll';
import { Link as Teste } from 'react-router-dom';
import './tudo.css';
import logo from '../src/imagens/logo.png';
import brasil from '../src/imagens/brasil.png';
import eua from '../src/imagens/eua.png';
import teste from '../src/imagens/teste.png';
import helicoptero from '../src/imagens/helicoptero.png';
import Whatsapp from './imagens/whatsapp.png';
import telefone from './imagens/telefone.png';
import email from './imagens/e-mail.png';
import logo1 from '../src/imagens/logo.png';
import brasil1 from '../src/imagens/brasilbranco.png';
import eua1 from '../src/imagens/euabranco.png';
import plataforma from '../src/imagens/plataforma.png';
import agendinha from '../src/imagens/agendinha.png';
import escritor from '../src/imagens/escritor.png';
import lupa from '../src/imagens/lupa.png';
import conversa from '../src/imagens/conversa.png';

function Tudo() {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            <div>
                <div id="ajuste-home">
                    <div id="ajuste-navbar">
                        <div>
                            <img id="ajuste-logo" src={logo} alt="Logo" />
                        </div>

                        <div id='ajuste-abrindo-menu'>
                            <div id="menu-hamburguer" onClick={toggleMenu} className={menuOpen ? 'open' : ''}>
                                <div className="bar1"></div>
                                <div className="bar2"></div>
                                <div className="bar3"></div>
                            </div>
                            <div id="ajuste-menu" className={menuOpen ? 'open' : ''}>
                                <button id="close-button" onClick={toggleMenu}>×</button>
                                <Link activeClass="active" to="servicos" spy={true} smooth={true} duration={500} className="componentes-menu">Serviços</Link>
                                <Link activeClass="active" to="grupo" spy={true} smooth={true} duration={500} className="componentes-menu">Grupo V3</Link>
                                <Link activeClass="active" to="sobre-nos" spy={true} smooth={true} duration={500} className="componentes-menu">Sobre nós</Link>
                                <Link activeClass="active" to="contato" spy={true} smooth={true} duration={500} className="componentes-menu">Contato</Link>
                                <Link activeClass="active" to="relprev" spy={true} smooth={true} duration={500} className="componentes-menu">RELPREV</Link>
                                <div className="menu-bandeiras">
                                    <img className="ajuste-bandeirah" src={brasil} alt="Bandeira do Brasil" />
                                    <Teste to="english"><img className="ajuste-bandeirah" src={eua} alt="Bandeira dos EUA" /></Teste>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="descricao-home">
                        <div id="ajuste-descricao-home">
                            <p id="titulo">AUDIT BEFORE FLIGHT</p>
                            <p id="frase">A HELIOFFSHORE MEMBER</p>
                            <Link activeClass="active" to="contato" spy={true} smooth={true} duration={500}>
                                <button id="contato">Entre em contato</button>
                            </Link>
                        </div>
                    </div>
                </div>



                <Element name="servicos" id="testeee">
                    <div id="ajuste-titulo-servicos">
                        <p id="titulo-servicos">NOSSOS SERVIÇOS</p>
                    </div>
                    <div id="ajuste-servicos">
                        <div id="ajuste-todas-box">
                            <div id="ajuste-box1-servicos">
                                <div className='ajusteeee'>
                                    <p className="titulo">AUDITORIA</p>
                                    <p className="descricao">Consultoria e gestão de contratos</p>
                                </div>
                                <div>
                                    <img src={teste} className="ajuste-imagem-box" alt="Serviço de Auditoria" />
                                </div>
                            </div>
                            <div id="ajuste-box2-servicos">
                                <div className='ajusteeee'>
                                    <p className="titulo">CONSULTORIA</p>
                                    <p className="descricao">Consultoria e gestão de contratos</p>
                                </div>
                                <div>
                                    <img src={conversa} className="ajuste-imagem-box" alt="Serviço de Consultoria" />
                                </div>
                            </div>
                            <div id="ajuste-box3-servicos">
                                <div className='ajusteeee'>
                                    <p className="titulo">INSPEÇÃO PRÉ-COMPRA</p>
                                    <p className="descricao">Inspeção pré-compra de aeronaves</p>
                                </div>
                                <div>
                                    <img src={lupa} className="ajuste-imagem-box" alt="Serviço de Inspeção Pré-Compra" />
                                </div>
                            </div>
                            <div id="ajuste-box4-servicos">
                                <div className='ajusteeee'>
                                    <p className="titulo">ANÁLISE DAS QUALIFICAÇÕES</p>
                                    <p className="descricao">Análise das qualificações e experiência dos tripulantes, mecânicos, inspetores, despachantes e pessoal de apoio</p>
                                </div>
                                <div>
                                    <img src={agendinha} className="ajuste-imagem-box" alt="Serviço de Análise das Qualificações" />
                                </div>
                            </div>
                            <div id="ajuste-box5-servicos">
                                <div className='ajusteeee'>
                                    <p className="titulo">PLANEJAMENTO OPERACIONAL</p>
                                    <p className="descricao">Coordenação de voos, programação de voos, cálculos de payload, operações de resgate, horários de operação, regulamentação, operações de carga externa, manifesto de voos, programas de prevenção de acidentes aéreos, entre outros</p>
                                </div>
                                <div>
                                    <img src={escritor} className="ajuste-imagem-box" alt="Serviço de Planejamento Operacional" />
                                </div>
                            </div>
                        </div>
                    </div>
                </Element>

                <Element name="grupo" id="background-grupo">
                    <div id="ajuste-titulo-grupo">
                        <p id="titulo-grupo">CONHEÇA O GRUPO V3</p>
                    </div>
                    <div id="grupos">
                        <div className="grupos-grupos">
                            <p className="titulo-grupos-grupos">V3 FLIGHT SAFETY</p>
                            <img className="imagem-titulo-grupo" src={helicoptero} alt="V3 Flight Safety" />
                        </div>
                        <div id="ajuste-espacamento-grupos-grupos" className="grupos-grupos">
                            <p className="titulo-grupos-grupos">V3 MARINE</p>
                            <img className="imagem-titulo-grupo2" src={plataforma} alt="V3 Marine" />
                        </div>
                    </div>
                    <div id="primeira-parte-texto-grupo">
                        <p id="numero-grande">+1.500</p>
                        <p id="texto-1-grupo">Auditorias de segurança de voo conduzidas e coordenadas para nossos clientes, sem ocorrência de acidentes ou incidentes, estabelecendo distinto padrão de segurança de voo, desde 2013.</p>
                    </div>
                    <div id="segunda-parte-texto-grupo">
                        <div id="ajuste-texto-2-grupo">
                            <p className="texto-2-grupo">A V3 é uma empresa especializada em serviços de auditoria e Segurança de Voo.</p>
                            <p id="ajuste2-texto-2-grupo" className="texto-2-grupo">Com um foco central em garantir os mais altos padrões de segurança e conformidade regulatória na aviação, a V3 oferece uma variedade de serviços, incluindo auditorias de Segurança de Voo, consultoria em regulamentações aeronáuticas, planejamento logístico para operações aéreas em áreas remotas e treinamento em diversos procedimentos operacionais.</p>
                            <p id="ajuste3-texto-2-grupo" className="texto-2-grupo">O compromisso em promover a excelência operacional e mitigar riscos na operação aérea demonstra nossa importância vital na garantia da Segurança de Voo e eficiência dos serviços aéreos.</p>
                        </div>
                        <div id="todas-imagens-grupo">
                            <div id="bloco1-imagens-grupo">
                                <div id="img1"></div>
                                <div id="img2"></div>
                                <div id="img3"></div>
                                <div id="img4"></div>
                            </div>
                            <div id="bloco2-imagens-grupo">
                                <div id="img5"></div>
                                <div id="img6"></div>
                                <div id="img7"></div>
                            </div>
                        </div>
                    </div>
                </Element>

                <Element name="sobre-nos" id="background-conceitos">
                    <div id="ajuste-texto-colunas-conceitos">
                        <div id='ajusteteste'>
                            <div id="background-texto1-conceitos">
                                <p id="titulo-conceitos1" className="titulo-conceitos">MISSÃO</p>
                                <p id="ajuste-descricao1-conceitos" className="descricao-conceitos">Nosso compromisso é promover a segurança e a excelência operacional na aviação, fornecendo serviços de auditoria e consultoria especializados que garantam padrões rigorosos de segurança de voo em todas as operações aéreas.</p>
                            </div>
                        </div>
                        <div id="ajuste-texto-ladolado-conceitos">
                            <div id="background-texto2-conceitos">
                                <p id="titulo-conceitos2" className="titulo-conceitos">VISÃO</p>
                                <p id="ajuste-descricao2-conceitos" className="descricao-conceitos">Ser reconhecida como a principal referência em auditoria e consultoria de segurança de voo, contribuindo para um setor da aviação cada vez mais seguro e eficiente, por meio de nossa excelência, inovação e compromisso com a segurança operacional.</p>
                            </div>
                            <div id="background-texto3-conceitos">
                                <p id="titulo-conceitos3" className="titulo-conceitos">VALORES</p>
                                <p id="ajuste-descricao3-conceitos" className="descricao-conceitos">1. Segurança em Primeiro Lugar: Colocamos a segurança como prioridade máxima em todas as nossas ações e recomendações.</p>
                                <p id="ajuste-descricao3-conceitos" className="descricao-conceitos">2. Excelência Profissional: Comprometemo-nos a fornecer serviços de alta qualidade, baseados em conhecimento especializado e experiência prática.</p>
                                <p id="ajuste-descricao3-conceitos" className="descricao-conceitos">3. Integridade e Ética: Agimos com honestidade, transparência e ética em todas as interações com nossos clientes, colaboradores e parceiros.</p>
                                <p id="ajuste-descricao3-conceitos" className="descricao-conceitos">4. Inovação Contínua: Buscamos constantemente a inovação e a melhoria em nossas práticas e processos para atender às necessidades em constante evolução do setor da aviação.</p>
                                <p id="ajuste-descricao3-conceitos" className="descricao-conceitos">5. Parceria com o Cliente: Estabelecemos relações de confiança e parceria com nossos clientes, trabalhando em conjunto para alcançar os melhores resultados em segurança de voo.</p>
                                <p id="ajuste-descricao3-conceitos" className="descricao-conceitos">6. Responsabilidade Social e Ambiental: Comprometemo-nos a operar de forma responsável, considerando o impacto de nossas atividades na sociedade e no meio ambiente.</p>
                            </div>
                        </div>
                    </div>
                </Element>

                <div id='aviao'>
                </div>

                <Element name="contato" className="contact-container">
                    <div id='contato-geral'>
                        <div className="contact-title">CONTATO</div>
                        <div className="contact-items">
                            <div className="contact-item">
                                <div className="contact-header">
                                    <img src={Whatsapp} alt="WhatsApp" className="contact-icon" />
                                    <h2>WhatsApp</h2>
                                </div>
                                <span className="contact-info">(61) 9 8366-6968</span>
                            </div>
                            <div className="contact-item">
                                <div className="contact-header">
                                    <img src={telefone} alt="Telefone" className="contact-icon" />
                                    <h2>Telefone</h2>
                                </div>
                                <span className="contact-info">(61) 9 9913-8989</span>
                            </div>
                            <div className="contact-item">
                                <div className="contact-header">
                                    <img src={email} alt="E-mail" className="contact-icon" />
                                    <h2>E-mail</h2>
                                </div>
                                <span className="contact-info">contato@v3flightsafety.com</span>
                            </div>
                        </div>
                    </div>
                </Element>

                <Element name="relprev" id="ajuste-footer">
                    <div>
                        <img id="ajuste-logo-footer" src={logo1} alt="Logo" />
                    </div>
                    <div id="ajuste-footerr">
                        <Link activeClass="active" to="servicos" spy={true} smooth={true} duration={500} className="componentes-footer">Serviços</Link>
                        <Link activeClass="active" to="grupo" spy={true} smooth={true} duration={500} className="componentes-footer">Grupo V3</Link>
                        <Link activeClass="active" to="sobre-nos" spy={true} smooth={true} duration={500} className="componentes-footer">Sobre nós</Link>
                        <Link activeClass="active" to="contato" spy={true} smooth={true} duration={500} className="componentes-footer">Contato</Link>
                        <Link activeClass="active" to="relprev" spy={true} smooth={true} duration={500} className="componentes-footer">RELPREV</Link>
                    </div>
                    <div>
                        <img className="ajuste-bandeira" src={brasil1} alt="Bandeira do Brasil" />
                        <img className="ajuste-bandeira" src={eua1} alt="Bandeira dos EUA" />
                    </div>
                </Element>
            </div>
        </>
    );
}

export default Tudo;