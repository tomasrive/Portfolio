import AnchorLink from "react-anchor-link-smooth-scroll"
import { Footer } from "../elements/styledComponents"

export const CompFooter = () => {
    return (
        <>

            <Footer>
                <div className="paletaColores">
                    <img src='../img/paleta.svg' alt="" />
                    <p>Tomas Rivero © 2023</p>
                </div>

            </Footer>

            <div className="arrowContainer">
                <AnchorLink offset='100' href='#init'>
                    <div className="arrowFooter">
                        <svg className="svgIcon" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M24.0083 14.1005V42" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M12 26L24 14L36 26" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M12 6H36" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </AnchorLink>

            </div>

        </>
    )
}
