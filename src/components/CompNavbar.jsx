import { useEffect, useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { BackDivNavbar, NavbarWrapper } from '../elements/styledComponents';

export const CompNavbar = () => {
    const [navbar, setNavbar] = useState(false)
    const [menuNavbar, setMenuNavbar] = useState(false)

    var themePag = localStorage.getItem('theme');
    const [theme, setTheme] = useState(themePag);
    if (themePag === null) {
        localStorage.setItem('theme', 'dark')
    }
    const toggleTheme = () => {
        if (theme === 'dark') {
            localStorage.setItem('theme', 'light')
            setTheme('light');
        } else {
            localStorage.setItem('theme', 'dark')
            setTheme('dark');
        }
    }

    const toggleClassName = () => {
        setMenuNavbar(!menuNavbar)
    }

    const changeBackground = () => {
        if (window.scrollY >= 66) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }

    useEffect(() => {
        document.body.className = theme;
        changeBackground()
        window.addEventListener("scroll", changeBackground)
    }, [theme]);

    return (
        <>

            <div className={`${menuNavbar ? 'menu-open' : ''}`} >

                <button className={navbar ? 'bt-menu navActive' : 'bt-menu'} onClick={toggleClassName}>
                    <span className="hamburguer">
                        <span className="bar bar-1"></span>
                        <span className="bar bar-2"></span>
                        <span className="bar bar-3"></span>
                    </span>
                </button>

            </div>

            <BackDivNavbar open={menuNavbar}></BackDivNavbar>

            <NavbarWrapper className='menuNavbar' open={menuNavbar}>
                <div className="imgNavbar">
                    <AnchorLink offset='100' href='#init' onClick={toggleClassName}>
                        <svg className="svgIcon" version="1.1" x="0px" y="0px" viewBox="0 0 2000 2000">
                            <g>
                                <g>
                                    <path fill="currentcolor" className="st0" d="M653.1,1594.8c-99,0-177.6-9.1-240.4-27.7c-58.4-17.4-102.8-43.1-135.7-78.8c-31.8-34.5-54.4-79.8-68.9-138.6
			c-14.2-57.5-21.1-129.8-21.1-220.9V65c0-11.3,9.2-20.5,20.5-20.5h221.1c11.3,0,20.5,9.2,20.5,20.5v259.1c0,44.7,36.4,81,81,81
			h259.1c11.3,0,20.5,9.2,20.5,20.5v221.1c0,11.3-9.2,20.5-20.5,20.5H549.9c-55.5,0-100.6,45.1-100.6,100.6v454.3
			c0,89.3,72.7,162,162,162h322.1c5.5,0,10.6,2.1,14.5,6l169.6,169.6c7.2,7.2,7,16.3,4.5,22.4c-2.5,6.1-8.9,12.7-19,12.7H653.1z"/>
                                </g>
                                <g>
                                    <path fill="currentcolor" className="st0" d="M1503.8,1955.5c-8.6,0-16.6-3.9-21.9-10.7l-322.9-415.2c-2.8-3.6-4.3-8-4.3-12.5v-105.3
			c0-15.3,12.4-27.7,27.7-27.7h173.1c116.6,0,211.4-94.8,211.4-211.4v-294c0-116.6-94.8-211.4-211.4-211.4H873.3
			c-15.3,0-27.7-12.4-27.7-27.7V432.9c0-15.3,12.4-27.7,27.7-27.7l458.1-0.7c128,0,223.7,26,292.4,79.4c14.9,11.6,30.4,26,45.8,42.8
			c57.7,62.5,99.2,140.2,120,224.5c11.9,48.1,18.3,82.4,18.6,99.3l4.5,244.5c1.2,64.7-6.8,126.8-23.6,184.6
			c-35.5,121.6-97.9,187.6-144.1,221.6c-40.2,29.6-73.9,40-83.3,42.5c-11.7,3.1-22,10-29,19.3c-14.1,18.9-14.1,44.2,0,63
			l213.9,285.1c6.4,8.6,7.4,19.4,2.6,29c-4.8,9.6-14,15.3-24.8,15.3H1503.8z"/>
                                </g>
                            </g>
                            <g>
                                <path fill="currentcolor" className="st0" d="M868.4,929.6c4.7-5.1,1.1-13.3-5.8-13.3h-85.1c-2.1,0-4.1,0.8-5.6,2.3l-108.1,108.1c-3.1,3.1-3.1,8.1,0,11.2
		L771.9,1146c1.5,1.5,3.5,2.3,5.6,2.3h85.1c6.9,0,10.5-8.2,5.8-13.3l-89.3-97.4c-2.8-3-2.8-7.7,0-10.7L868.4,929.6z"/>
                                <path fill="currentcolor" className="st0" d="M1228.1,1146l108.1-108.1c3.1-3.1,3.1-8.1,0-11.2l-108.1-108.1c-1.5-1.5-3.5-2.3-5.6-2.3h-85.1
		c-6.9,0-10.5,8.2-5.8,13.3l89.3,97.4c2.8,3,2.8,7.7,0,10.7l-89.3,97.4c-4.7,5.1-1.1,13.3,5.8,13.3h85.1
		C1224.6,1148.3,1226.6,1147.5,1228.1,1146z"/>
                                <path fill="currentcolor" className="st0" d="M994.7,1216c5.4,0,10-3.7,11.3-8.9l91-373c1.8-7.3-3.8-14.4-11.3-14.4h-63c-5.4,0-10,3.7-11.3,8.9l-91,373
		c-1.8,7.3,3.8,14.4,11.3,14.4H994.7z"/>
                            </g>
                        </svg>
                    </AnchorLink>
                </div>
                <li>
                    <AnchorLink offset='0' href='#info' onClick={toggleClassName}>Sobre mi</AnchorLink>
                </li>

                <li>
                    <AnchorLink offset='0' href='#studies' onClick={toggleClassName}>Estudios</AnchorLink>

                </li>
                <li>
                    <AnchorLink offset='0' href='#work' onClick={toggleClassName}>Trabajo</AnchorLink>
                </li>
                <li>
                    <AnchorLink offset='0' href='#contact' onClick={toggleClassName}>Contacto</AnchorLink>
                </li>
                <label className="switch" id="switch" >
                    <input type="checkbox" onClick={toggleTheme} defaultChecked={themePag === 'light' ? 'checked' : ''} />
                    <span className="slider round"></span>
                </label>

            </NavbarWrapper>

            <nav className={navbar ? 'navbar navActive' : 'navbar'}>
                <div className="imgNavbar">
                    <AnchorLink offset='100' href='#init'>
                        <svg className="svgIcon" version="1.1" x="0px" y="0px" viewBox="0 0 2000 2000">
                            <g>
                                <g>
                                    <path fill="currentcolor" className="st0" d="M653.1,1594.8c-99,0-177.6-9.1-240.4-27.7c-58.4-17.4-102.8-43.1-135.7-78.8c-31.8-34.5-54.4-79.8-68.9-138.6
			c-14.2-57.5-21.1-129.8-21.1-220.9V65c0-11.3,9.2-20.5,20.5-20.5h221.1c11.3,0,20.5,9.2,20.5,20.5v259.1c0,44.7,36.4,81,81,81
			h259.1c11.3,0,20.5,9.2,20.5,20.5v221.1c0,11.3-9.2,20.5-20.5,20.5H549.9c-55.5,0-100.6,45.1-100.6,100.6v454.3
			c0,89.3,72.7,162,162,162h322.1c5.5,0,10.6,2.1,14.5,6l169.6,169.6c7.2,7.2,7,16.3,4.5,22.4c-2.5,6.1-8.9,12.7-19,12.7H653.1z"/>
                                </g>
                                <g>
                                    <path fill="currentcolor" className="st0" d="M1503.8,1955.5c-8.6,0-16.6-3.9-21.9-10.7l-322.9-415.2c-2.8-3.6-4.3-8-4.3-12.5v-105.3
			c0-15.3,12.4-27.7,27.7-27.7h173.1c116.6,0,211.4-94.8,211.4-211.4v-294c0-116.6-94.8-211.4-211.4-211.4H873.3
			c-15.3,0-27.7-12.4-27.7-27.7V432.9c0-15.3,12.4-27.7,27.7-27.7l458.1-0.7c128,0,223.7,26,292.4,79.4c14.9,11.6,30.4,26,45.8,42.8
			c57.7,62.5,99.2,140.2,120,224.5c11.9,48.1,18.3,82.4,18.6,99.3l4.5,244.5c1.2,64.7-6.8,126.8-23.6,184.6
			c-35.5,121.6-97.9,187.6-144.1,221.6c-40.2,29.6-73.9,40-83.3,42.5c-11.7,3.1-22,10-29,19.3c-14.1,18.9-14.1,44.2,0,63
			l213.9,285.1c6.4,8.6,7.4,19.4,2.6,29c-4.8,9.6-14,15.3-24.8,15.3H1503.8z"/>
                                </g>
                            </g>
                            <g>
                                <path fill="currentcolor" className="st0" d="M868.4,929.6c4.7-5.1,1.1-13.3-5.8-13.3h-85.1c-2.1,0-4.1,0.8-5.6,2.3l-108.1,108.1c-3.1,3.1-3.1,8.1,0,11.2
		L771.9,1146c1.5,1.5,3.5,2.3,5.6,2.3h85.1c6.9,0,10.5-8.2,5.8-13.3l-89.3-97.4c-2.8-3-2.8-7.7,0-10.7L868.4,929.6z"/>
                                <path fill="currentcolor" className="st0" d="M1228.1,1146l108.1-108.1c3.1-3.1,3.1-8.1,0-11.2l-108.1-108.1c-1.5-1.5-3.5-2.3-5.6-2.3h-85.1
		c-6.9,0-10.5,8.2-5.8,13.3l89.3,97.4c2.8,3,2.8,7.7,0,10.7l-89.3,97.4c-4.7,5.1-1.1,13.3,5.8,13.3h85.1
		C1224.6,1148.3,1226.6,1147.5,1228.1,1146z"/>
                                <path fill="currentcolor" className="st0" d="M994.7,1216c5.4,0,10-3.7,11.3-8.9l91-373c1.8-7.3-3.8-14.4-11.3-14.4h-63c-5.4,0-10,3.7-11.3,8.9l-91,373
		c-1.8,7.3,3.8,14.4,11.3,14.4H994.7z"/>
                            </g>
                        </svg>
                    </AnchorLink>
                </div>
                <ul>

                    <label className="switch" id="switch">
                        <input type="checkbox" onClick={toggleTheme} defaultChecked={themePag === 'light' ? 'checked' : ''} />
                        <span className="slider round"></span>
                    </label>

                    <li>
                        <AnchorLink offset='100' href='#info'><span> 01.</span> Sobre mi</AnchorLink>
                    </li>

                    <li>
                        <AnchorLink offset='100' href='#studies'> <span> 02.</span>Estudios</AnchorLink>

                    </li>
                    <li>
                        <AnchorLink offset='100' href='#work'><span> 03.</span> Trabajo</AnchorLink>
                    </li>
                    <li>
                        <AnchorLink offset='100' href='#contact'><span> 04.</span>Contacto</AnchorLink>
                    </li>

                    <a className='downButton' href="./files/tomasRivero.pdf" download='Tomas-Rivero'>
                        <span>CV</span>
                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 489.104 489.104" >
                            <g>
                                <path d="M411.55,100.9l-94.7-94.7c-4.2-4.2-9.4-6.2-14.6-6.2H92.15c-11.4,0-20.8,9.4-20.8,20.8v330.8c0,11.4,9.4,20.8,20.8,20.8h132.1V421l-16.6-15.2c-8.3-7.3-21.8-7.3-29.1,1s-7.3,21.8,1,29.1l52,47.9c3.1,3.1,14.6,10.2,29.1,0l52-47.9c8.3-8.3,8.3-20.8,1-29.1c-8.3-8.3-20.8-8.3-29.1-1l-18.7,17.2v-50.5h132.1c11.4,0,19.8-9.4,19.8-19.8V115.5C417.85,110.3,415.75,105.1,411.55,100.9z M324.15,70.4l39.3,38.9h-39.3V70.4z M265.95,331.9v-130c0-11.4-9.4-20.8-20.8-20.8c-11.4,0-20.8,9.4-20.8,20.8v130h-111.3V41.6h169.6v86.3c0,11.4,9.4,20.8,20.8,20.8h74.9v183.1h-112.4V331.9z" />
                            </g>
                        </svg>

                    </a>


                </ul>
            </nav>
        </>


    )
}
