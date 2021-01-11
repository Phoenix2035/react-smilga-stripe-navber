import React, {useState, useRef, useEffect} from 'react'
import {useGlobalContext} from './context'


const SubMenu = () => {
    const {isSubMenuOpen, location, page: {page, links}} = useGlobalContext()

    const container = useRef(null)
    const [cols, setCols] = useState(`col-2`)

    useEffect(() => {
        setCols('col-2')
        const submenu = container.current
        const {center, bottom} = location
        submenu.style.left = `${center}px`
        submenu.style.top = `${bottom}px`

        if (links.length === 3) {
            setCols('col-3')
        }

        if (links.length > 3) {
            setCols('col-4')
        }
    }, [location, links])

    return (
        <aside className={`${isSubMenuOpen ? 'submenu show' : 'submenu'}`} ref={container}>
            <h4>{page}</h4>
            <div className={`submenu-center ${cols}`}>
                {
                    links.map((link, index) =>
                        <a key={index} href={link.url}>
                            {link.icon}
                            {link.label}
                        </a>
                    )
                }
            </div>
        </aside>
    )
}

export default SubMenu
