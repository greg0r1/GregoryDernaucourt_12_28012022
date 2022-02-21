//@ts-check

import { NavLink } from 'react-router-dom'

/**
 * Links to nav blocks
 *
 * @returns {React.ReactElement}
 */
function VerticalNav() {
  return (
    <nav className="verticalNav">
      <div className="verticalNavLinks">
        <NavLink to="">
          <span className="verticalNav-icon01"></span>
        </NavLink>
        <NavLink to="">
          <span className="verticalNav-icon02"></span>
        </NavLink>
        <NavLink to="">
          <span className="verticalNav-icon03"></span>
        </NavLink>
        <NavLink to="">
          <span className="verticalNav-icon04"></span>
        </NavLink>
      </div>
      <div className="copyright">
        <span>Copyright, SportSee 2020</span>
      </div>
    </nav>
  )
}

export default VerticalNav
