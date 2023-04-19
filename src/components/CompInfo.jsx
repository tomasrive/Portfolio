import AnchorLink from "react-anchor-link-smooth-scroll"
import { DivContainer, DivTitleContainer, SectionContainer } from "../elements/styledComponents"

export const CompInfo = () => {
    return (
        <>

            <section id="init">

                <div className="containerAllName">
                    <div className="containerName">
                        <div>
                            <h3>Hola, mi nombre es</h3>
                            <h1>Tomás Rivero</h1>
                            <h4>Desarrollador de software</h4>
                        </div>
                        <div>
                            <img className="codingImg" src="./img/coding.svg" alt="" />
                        </div>


                    </div>
                </div>


                <div className="arrowDownContainer">
                    <div className="arrowDown">
                        <AnchorLink offset='0' href='#info'>
                            <div className="arrowSliding">
                                <div className="arrow"></div>
                            </div>
                            <div className="arrowSliding delay1">
                                <div className="arrow"></div>
                            </div>
                        </AnchorLink>
                    </div>
                </div>
            </section>

            <SectionContainer id="info">
                <DivContainer>
                    <DivTitleContainer>
                        <h1><span>01.</span>Sobre mí</h1>
                        <hr />
                    </DivTitleContainer>
                    <div className="aboutMeDescription">
                        <div>
                            <p>
                                A los 15 años, en el transcurso de la secundaria, se despertó mi deseo de programar y empecé a capacitarme sobre el tema. Actualmente estoy cursando mi primer año en la carrera <a target='_blank' rel="noreferrer" href='https://institutobelgrano.com/desarrollo-de-software/' >tecnicatura en desarrollo de sofware</a> y sigo aprendiendo constantemente mediante cursos y videos en línea. <br />
                                Mi principal objetivo es descubrir nuevos caminos relacionados al tema brindando mis conocimientos mientras que a su vez me capacito en diferentes tecnologías y sumo experiencias a mi futuro.💻<br />
                                Poseo buenas habilidades de comunicación e autoaprendizaje que me permiten mantener y mejorar mi intelecto.😄
                            </p>
                        </div>

                        <img src='../img/me.jpeg' alt="Tomas Rivero" />


                    </div>
                    <h2>Tecnologias:</h2>
                    <div className="containerTec">
                        <div className="divTecs">
                            <div className="tecImg">
                                <img src='../img/html.svg' alt="" />
                                <div className="tecOverlay">
                                    <p>Html</p>
                                </div>
                            </div>
                            <div className="tecImg">
                                <img src='../img/css.svg' alt="" />
                                <div className="tecOverlay">
                                    <p>Css</p>
                                </div>
                            </div>
                            <div className="tecImg">
                                <img src='../img/javascript.svg' alt="" />
                                <div className="tecOverlay">
                                    <p>JavaScript</p>
                                </div>
                            </div>
                            <div className="tecImg">
                                <img src='../img/react.svg' alt="" />
                                <div className="tecOverlay">
                                    <p>React</p>
                                </div>
                            </div>
                            <div className="tecImg">
                                <img src='../img/bootstrap.svg' alt="" />
                                <div className="tecOverlay">
                                    <p>Bootstrap</p>
                                </div>
                            </div>
                            <div className="tecImg">
                                <img src='../img/python.svg' alt="" />
                                <div className="tecOverlay">
                                    <p>Python</p>
                                </div>
                            </div>

                        </div>
                        <div className="divTecs">
                            <div className="tecImg">
                                <img src='../img/nodejs.svg' alt="" />
                                <div className="tecOverlay">
                                    <p>NodeJs</p>
                                </div>
                            </div>
                            <div className="tecImg">
                                <img src='../img/mongodb.svg' alt="" />
                                <div className="tecOverlay">
                                    <p>MongoDB</p>
                                </div>
                            </div>
                            <div className="tecImg">
                                <img src='../img/mysql.svg' alt="" />
                                <div className="tecOverlay">
                                    <p>Mysql</p>
                                </div>
                            </div>
                            <div className="tecImg">
                                <img src='../img/npm.svg' alt="" />
                                <div className="tecOverlay">
                                    <p>Npm</p>
                                </div>
                            </div>
                            <div className="tecImg">
                                <img src='../img/git.svg' alt="" />
                                <div className="tecOverlay">
                                    <p>Git</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </DivContainer>
            </SectionContainer>
        </>
    )
}
