import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'
import { NavbarContext, NavbarColorContext } from './contexts'

/**
 * NavContext - provides navbar open state and color based on route.
 * Uses route path to switch the brand color for the header.
 */
const NavContext = ({ children }) => {
    const [navColor, setNavColor] = useState('white')

    const [navOpen, setNavOpen] = useState(false)

    const locate = useLocation().pathname
    useEffect(
        function () {
            // Use strict equality checks for predictable behavior
            if (locate === '/projects' || locate === '/agence') {
                setNavColor('black')
            } else {
                setNavColor('white')
            }
        },
        [locate]
    )

    return (
        <NavbarContext.Provider value={[navOpen, setNavOpen]}>
            <NavbarColorContext.Provider value={[navColor, setNavColor]}>{children}</NavbarColorContext.Provider>
        </NavbarContext.Provider>
    )
}

export default NavContext

NavContext.propTypes = {
    children: PropTypes.node,
}