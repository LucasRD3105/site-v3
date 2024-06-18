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
                                <Link activeClass="active" to="servicos" spy={true} smooth={true} duration={500} className="componentes-menu">Services</Link>
                                <Link activeClass="active" to="grupo" spy={true} smooth={true} duration={500} className="componentes-menu">V3 Group</Link>
                                <Link activeClass="active" to="sobre-nos" spy={true} smooth={true} duration={500} className="componentes-menu">About Us</Link>
                                <Link activeClass="active" to="contato" spy={true} smooth={true} duration={500} className="componentes-menu">Contact</Link>
                                <Link activeClass="active" to="relprev" spy={true} smooth={true} duration={500} className="componentes-menu">RELPREV</Link>
                                <div className="menu-bandeiras">
                                    <img className="ajuste-bandeira" src={brasil} alt="Brazil Flag" />
                                    <img className="ajuste-bandeira" src={eua} alt="USA Flag" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="descricao-home">
                        <div id="ajuste-descricao-home">
                            <p id="titulo">AUDIT BEFORE FLIGHT</p>
                            <p id="frase">A HELIOFFSHORE MEMBER</p>
                            <Link activeClass="active" to="contato" spy={true} smooth={true} duration={500}>
                                <button id="contato">Contact Us</button>
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
                                    <img src={teste} className="ajuste-imagem-box" alt="Audit Service" />
                                </div>
                            </div>
                            <div id="ajuste-box2-servicos">
                                <div className='ajusteeee'>
                                    <p className="titulo">CONSULTING</p>
                                    <p className="descricao">Consulting and Contract Management</p>
                                </div>
                                <div>
                                    <img src={conversa} className="ajuste-imagem-box" alt="Consulting Service" />
                                </div>
                            </div>
                            <div id="ajuste-box3-servicos">
                                <div className='ajusteeee'>
                                    <p className="titulo">PRE-PURCHASE INSPECTION</p>
                                    <p className="descricao">Aircraft Pre-purchase Inspection</p>
                                </div>
                                <div>
                                    <img src={lupa} className="ajuste-imagem-box" alt="Pre-Purchase Inspection Service" />
                                </div>
                            </div>
                            <div id="ajuste-box4-servicos">
                                <div className='ajusteeee'>
                                    <p className="titulo">QUALIFICATIONS ANALYSIS</p>
                                    <p className="descricao">Analysis of qualifications and experience of crew, mechanics, inspectors, dispatchers, and support staff</p>
                                </div>
                                <div>
                                    <img src={agendinha} className="ajuste-imagem-box" alt="Qualifications Analysis Service" />
                                </div>
                            </div>
                            <div id="ajuste-box5-servicos">
                                <div className='ajusteeee'>
                                    <p className="titulo">OPERATIONAL PLANNING</p>
                                    <p className="descricao">Flight coordination, flight scheduling, payload calculations, rescue operations, operating hours, regulations, external cargo operations, flight manifest, air accident prevention programs, among others</p>
                                </div>
                                <div>
                                    <img src={escritor} className="ajuste-imagem-box" alt="Operational Planning Service" />
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
                        <p id="numero-grande">+1,500</p>
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
                                <p id="titulo-conceitos">OUR VALUES</p>
                                <div className="borda-baixo"></div>
                            </div>
                            <div id="background-texto2-conceitos">
                                <p className="texto-conceitos">Technical Expertise and Operational Excellence</p>
                                <p className="texto-conceitos">Our team of highly qualified professionals, with extensive experience in various fields of aviation, allows us to offer customized and effective solutions. We are committed to promoting operational excellence in all aspects of our clients' air operations.</p>
                                <p className="texto-conceitos">Client Commitment</p>
                                <p className="texto-conceitos">Our priority is to meet the specific needs of each client. We work closely to understand the particularities of each operation and provide solutions that ensure safety, efficiency, and regulatory compliance.</p>
                                <p className="texto-conceitos">Innovation and Adaptability</p>
                                <p className="texto-conceitos">We value innovation and adaptability to keep up with constant changes in the aviation industry. We seek to be at the forefront of new technologies and practices that can contribute to improving the safety and efficiency of air operations.</p>
                            </div>
                        </div>
                        <div>
                            <div id="background-texto3-conceitos">
                                <p id="titulo2-conceitos">OUR MISSION</p>
                                <div className="borda-baixo"></div>
                            </div>
                            <div id="background-texto4-conceitos">
                                <p className="texto2-conceitos">Our mission is to ensure the safety, efficiency, and regulatory compliance of air operations for our clients. We achieve this through rigorous flight safety audits, customized consulting, and logistical planning for air operations in remote areas.</p>
                                <p className="texto2-conceitos">We are committed to promoting operational excellence and mitigating risks in air operations, contributing to the overall safety and efficiency of air services.</p>
                            </div>
                        </div>
                    </div>
                </Element>


                <Element name="contato" id="ajuste-titulo-contato">
                    <div>
                        <p id="titulo-contato">CONTACT US</p>
                    </div>
                    <div id="fundo-contato">
                        <div id="todas-imagens-contato">
                            <div className="imagem-ajuste">
                                <img src={Whatsapp} className="ajuste-imagens-contato" alt="Whatsapp Contact" />
                            </div>
                            <div className="imagem-ajuste">
                                <img src={telefone} className="ajuste-imagens-contato" alt="Phone Contact" />
                            </div>
                            <div className="imagem-ajuste">
                                <img src={email} className="ajuste-imagens-contato" alt="Email Contact" />
                            </div>
                        </div>
                        <div id="todas-informacoes-contato">
                            <div className="informacoes-ajuste">
                                <p className="ajuste-informacoes">+55 (21) 98111-5648</p>
                            </div>
                            <div className="informacoes-ajuste">
                                <p className="ajuste-informacoes">+55 (21) 98111-5648</p>
                            </div>
                            <div className="informacoes-ajuste">
                                <p className="ajuste-informacoes">contato@v3safergroup.com.br</p>
                            </div>
                        </div>
                    </div>
                </Element>

                <Element name="relprev" id="ajuste-titulo-relprev">
                    <div>
                        <p id="titulo-relprev">WHAT IS RELPREV?</p>
                    </div>
                    <div id="ajuste-relprev">
                        <div id="ajuste-box1-relprev">
                            <div className="ajusteeee">
                                <p className="titulo-relprev">Relprev System</p>
                                <p className="descricao-relprev">RELPREV is a proactive tool for managing reports related to air operations, aiming to improve operational safety. The system is used to identify and report any irregularities, hazards, or occurrences that may impact flight safety, enabling preventive actions to be taken to mitigate risks and ensure the highest standards of safety in air operations.</p>
                            </div>
                        </div>
                    </div>
                </Element>
            </div>
        </>
    );
}

export default Tudo;
