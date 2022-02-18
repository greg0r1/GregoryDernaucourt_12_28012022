//@ts-check

import { Link } from 'react-router-dom'

function RedirectView() {
  return (
    <div style={{ margin: 'auto', textAlign: 'center' }}>
      <Link to={`/user/18`}>Aller à la page profil</Link>
    </div>
  )
}

export default RedirectView
