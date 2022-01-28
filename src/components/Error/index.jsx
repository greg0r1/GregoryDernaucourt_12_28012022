//@ts-check

import { Link } from 'react-router-dom'
import './style.css'

/**
 * @component
 * @returns {React.ReactElement}
 */
function Error() {
  return (
    <div className="errorContainer">
      <h1 className="errorTitle">404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link className="errorLink" to="/">
        Retourner sur la page d’accueil
      </Link>
    </div>
  )
}

export default Error
