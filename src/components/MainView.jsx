import { CompStudies } from './CompStudies';
import { CompInfo } from './CompInfo';
import { CompNavbar } from './CompNavbar';
import { CompWork } from './CompWork';
import { CompContact } from './CompContact';
import { CompFooter } from './CompFooter';
import { useState } from 'react';
export default function MainView() {
    const [loader, setLoader] = useState(true)

    window.addEventListener('load', () => {
        setLoader(false)
    })
    return (
        <>

            {/* {loader ?
                (<div className="showbox">
                    <div className="loader">
                        <svg className="circular" viewBox="25 25 50 50">
                            <circle className="path" cx="50" cy="50" r="20" fill="none" strokeWidth="2" strokeMiterlimit="10" />
                        </svg>
                    </div>
                </div>)
                :
                ( */}
            <>
                <header className="headerNavbar">
                    <CompNavbar />
                </header>
                <main>
                    <CompInfo />
                    <CompStudies />
                    <CompWork />
                    <CompContact />
                </main>
                <footer>
                    <CompFooter />
                </footer></>

            {/* } */}

        </>
    )
}
