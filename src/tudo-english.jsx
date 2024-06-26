import { useState } from 'react';
import React from 'react';
import { Link, Element } from 'react-scroll';
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

function TudoEnglish() {

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
                                <Link activeClass="active" to="servicos" spy={true} smooth={true} duration={500} className="componentes-menu">Services</Link>
                                <Link activeClass="active" to="grupo" spy={true} smooth={true} duration={500} className="componentes-menu">V3 Group</Link>
                                <Link activeClass="active" to="sobre-nos" spy={true} smooth={true} duration={500} className="componentes-menu">About us</Link>
                                <Link activeClass="active" to="contato" spy={true} smooth={true} duration={500} className="componentes-menu">Contact</Link>
                                <Link activeClass="active" to="relprev" spy={true} smooth={true} duration={500} className="componentes-menu">RELPREV</Link>
                                <div className="menu-bandeiras">
                                    <img className="ajuste-bandeirah" src={brasil} alt="Bandeira do Brasil" />
                                    <img className="ajuste-bandeirah" src={eua} alt="Bandeira dos EUA" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="descricao-home">
                        <div id="ajuste-descricao-home">
                            <p id="titulo">AUDIT BEFORE FLIGHT</p>
                            <p id="frase">A HELIOFFSHORE MEMBER</p>
                            <Link activeClass="active" to="contato" spy={true} smooth={true} duration={500}>
                                <button id="contato">Contact us</button>
                            </Link>
                        </div>
                    </div>
                </div>



                <Element name="servicos" id="testeee">
                    <div id="ajuste-titulo-servicos">
                        <p id="titulo-servicos">OUR SERVICES</p>
                    </div>
                    <div id="ajuste-servicos">
                        <div id="ajuste-todas-box">
                            <div id="ajuste-box1-servicos">
                                <div className='ajusteeee'>
                                    <p className="titulo">AUDIT</p>
                                    <p className="descricao">Consulting and contract management</p>
                                </div>
                                <div>
                                    <img src={teste} className="ajuste-imagem-box" alt="Serviço de Auditoria" />
                                </div>
                            </div>
                            <div id="ajuste-box2-servicos">
                                <div className='ajusteeee'>
                                    <p className="titulo">CONSULTING</p>
                                    <p className="descricao">Consulting and Contract Management</p>
                                </div>
                                <div>
                                    <img src={conversa} className="ajuste-imagem-box" alt="Serviço de Consultoria" />
                                </div>
                            </div>
                            <div id="ajuste-box3-servicos">
                                <div className='ajusteeee'>
                                    <p className="titulo">PRE-PURCHASE INSPECTION</p>
                                    <p className="descricao">Aircraft Pre-purchase Inspection</p>
                                </div>
                                <div>
                                    <img src={lupa} className="ajuste-imagem-box" alt="Serviço de Inspeção Pré-Compra" />
                                </div>
                            </div>
                            <div id="ajuste-box4-servicos">
                                <div className='ajusteeee'>
                                    <p className="titulo">QUALIFICATIONS ANALYSIS</p>
                                    <p className="descricao">Analysis of qualifications and experience of crew, mechanics, inspectors, dispatchers, and support staff</p>
                                </div>
                                <div>
                                    <img src={agendinha} className="ajuste-imagem-box" alt="Serviço de Análise das Qualificações" />
                                </div>
                            </div>
                            <div id="ajuste-box5-servicos">
                                <div className='ajusteeee'>
                                    <p className="titulo">OPERATIONAL PLANNING</p>
                                    <p className="descricao">Flight coordination, flight scheduling, payload calculations, rescue operations, operating hours, regulations, external cargo operations, flight manifest, air accident prevention programs, among others</p>
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
                        <p id="titulo-grupo">MEET THE V3 GROUP</p>
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
                        <p id="texto-1-grupo">Flight safety audits conducted and coordinated for our clients, with no accidents or incidents, establishing a distinguished safety standard since 2013.</p>
                    </div>
                    <div id="segunda-parte-texto-grupo">
                        <div id="ajuste-texto-2-grupo">
                            <p className="texto-2-grupo">V3 is a company specialized in flight safety audit services.</p>
                            <p id="ajuste2-texto-2-grupo" className="texto-2-grupo">With a central focus on ensuring the highest standards of safety and regulatory compliance in aviation, V3 offers a variety of services, including flight safety audits, consulting on aviation regulations, logistical planning for air operations in remote areas, and training in various operational procedures.</p>
                            <p id="ajuste3-texto-2-grupo" className="texto-2-grupo">Our commitment to promoting operational excellence and mitigating risks in air operations demonstrates our vital importance in ensuring flight safety and efficiency of air services.</p>
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
                                <p id="titulo-conceitos1" className="titulo-conceitos">MISSION</p>
                                <p id="ajuste-descricao1-conceitos" className="descricao-conceitos">Our commitment is to promote safety and operational excellence in aviation by providing specialized auditing and consulting services that ensure stringent flight safety standards in all air operations.</p>
                            </div>
                        </div>
                        <div id="ajuste-texto-ladolado-conceitos">
                            <div id="background-texto2-conceitos">
                                <p id="titulo-conceitos2" className="titulo-conceitos">VISION</p>
                                <p id="ajuste-descricao2-conceitos" className="descricao-conceitos">To be recognized as the leading reference in flight safety auditing and consulting, contributing to an increasingly safe and efficient aviation sector through our excellence, innovation, and commitment to operational safety.</p>
                            </div>
                            <div id="background-texto3-conceitos">
                                <p id="titulo-conceitos3" className="titulo-conceitos">VALUES</p>
                                <p id="ajuste-descricao3-conceitos" className="descricao-conceitos">1. Safety First: We prioritize safety in all our actions and recommendations.</p>
                                <p id="ajuste-descricao3-conceitos" className="descricao-conceitos">2. Professional Excellence: We are committed to providing high-quality services based on specialized knowledge and practical experience.</p>
                                <p id="ajuste-descricao3-conceitos" className="descricao-conceitos">3. Integrity and Ethics: We act with honesty, transparency, and ethics in all interactions with our clients, employees, and partners.</p>
                                <p id="ajuste-descricao3-conceitos" className="descricao-conceitos">4. Continuous Innovation: We constantly seek innovation and improvement in our practices and processes to meet the ever-evolving needs of the aviation sector.</p>
                                <p id="ajuste-descricao3-conceitos" className="descricao-conceitos">5. Customer Partnership: We establish trustful and collaborative relationships with our clients, working together to achieve the best flight safety outcomes.</p>
                                <p id="ajuste-descricao3-conceitos" className="descricao-conceitos">6. Social and Environmental Responsibility: We are committed to operating responsibly, considering the impact of our activities on society and the environment.</p>
                            </div>
                        </div>
                    </div>
                </Element>

                <div id='aviao'>
                </div>

                <Element name="contato" className="contact-container">
                    <div id='contato-geral'>
                        <div className="contact-title">CONTACT</div>
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
                                    <h2>Phone</h2>
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
                        <Link activeClass="active" to="servicos" spy={true} smooth={true} duration={500} className="componentes-footer">Services</Link>
                        <Link activeClass="active" to="grupo" spy={true} smooth={true} duration={500} className="componentes-footer">V3 Group</Link>
                        <Link activeClass="active" to="sobre-nos" spy={true} smooth={true} duration={500} className="componentes-footer">About us</Link>
                        <Link activeClass="active" to="contato" spy={true} smooth={true} duration={500} className="componentes-footer">Contact</Link>
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

export default TudoEnglish;