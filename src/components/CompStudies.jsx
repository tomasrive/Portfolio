import { DivContainer, DivTitleContainer, SectionContainer } from "../elements/styledComponents"

export const CompStudies = () => {
    return (
        <SectionContainer id="studies">
            <DivContainer>
                <DivTitleContainer>
                    <h1><span>02.</span>Estudios</h1>
                    <hr />

                </DivTitleContainer>
                <div className="containerStudies">
                    <div className="divStudies">
                        <h3>Secundaria:</h3>
                        <a target='_blank' rel="noreferrer" href="https://sanjoserosario.com.ar">
                            <img src="../img/sanjose.svg" alt="" />
                            <p className="studiesOverlay">Colegio Salesiano San Jose</p>
                            <span className="studiesOverlay">(Técnico en Informática profesional y personal.)</span>
                        </a>

                    </div>
                    <div className="divStudies">
                        <h3>Terciario:</h3>
                        <a target='_blank' rel="noreferrer" href="https://institutobelgrano.com/desarrollo-de-software/">
                            <img src="../img/belgrano.png" alt="" />
                            <p className="studiesOverlay">Instituto Belgrano</p>
                            <span className="studiesOverlay">(Técnico Superior en Desarrollo de Software.)</span>
                        </a>

                    </div>

                </div>
                <h3>Cursos:</h3>
                <div className="containerStudies">
                    <div className="divStudies">

                        <a target='_blank' rel="noreferrer" href="https://www.domestika.org/es/certificates/da1e5631bfbeb734b663d0ec620ef14b">
                            <img src="../img/domestika.svg" alt="" />
                            <p className="studiesOverlay">Domestika</p>
                            <span className="studiesOverlay">(After Effects)</span>
                        </a>

                    </div>
                    <div className="divStudies">
                        <a target='_blank' rel="noreferrer" href="https://www.udemy.com/course/react-cero-experto/">
                            <img src="../img/udemy.svg" alt="" />
                            <p className="studiesOverlay">Udemy</p>
                            <span className="studiesOverlay">(React: De cero a experto)</span>
                        </a>
                    </div>
                </div>
            </DivContainer>
        </SectionContainer>
    )
}
