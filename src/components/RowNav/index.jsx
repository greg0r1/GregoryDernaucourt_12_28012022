//@ts-check

import { Link, NavLink } from 'react-router-dom'
import Logo from '../../assets/images/logo.svg'

/**
 * Links to homepage and about page
 * @component
 * @returns {React.ReactElement}
 */
function RowNav() {
  const id = 18

  return (
    <header className="row-nav">
      <Link to="/">
        <img src={Logo} alt="" className="img_logo" />
      </Link>
      <nav>
        <NavLink to="/">Accueil</NavLink>
        <NavLink to={`/user/${id}`}>Profil</NavLink>
        <NavLink to="/setting">Réglage</NavLink>
        <NavLink to="/community">Communauté</NavLink>
      </nav>
    </header>
  )
}

export default RowNav
