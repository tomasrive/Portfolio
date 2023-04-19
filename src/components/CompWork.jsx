import { DivContainer, DivTitleContainer, SectionContainer } from "../elements/styledComponents"

export const CompWork = () => {
    return (
        <SectionContainer id="work">
            <DivContainer>
                <DivTitleContainer>
                    <h1>03.Trabajo</h1>
                    <hr />
                </DivTitleContainer>
                <div className="containerStudies">
                    <div className="divWork">
                        <h3>Refugio para perros</h3>
                        <a target='_blank' rel="noreferrer" href="https://tomasrivero12.github.io/RefugioPerros/index.html">
                            <div className="divOverlay">
                                <img src="../img/refugio.png" alt="" />
                                <span className="workOverlay">(Html, MDB Bootstrap y JavaScript)</span>
                            </div>


                        </a>

                    </div>
                    <div className="divWork">
                        <h3>Eco Friendly</h3>
                        <a target='_blank' rel="noreferrer" href="https://tomasrivero12.github.io/Eco-Friendly/">
                            <div className="divOverlay">
                                <img src="../img/eco.png" alt="" />
                                <span className="workOverlay">(Html, Css y JavaScript)</span>
                            </div>
                        </a>
                    </div>
                </div>
            </DivContainer>
        </SectionContainer>
    )
}
