//@ts-check

import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Datas from '../../data'
import spinner from '../../assets/images/spinner.svg'

/**
 *
 * @component
 * @returns {React.ReactElement}
 */
function Profile() {
  const { id } = useParams()
  const [data, setUser] = useState({ userInfos: {} })

  const fetchUser = async (id) => {
    return Datas.getUser(id).then((res) => setUser(res.data))
  }

  useEffect(() => {
    fetchUser(id)
    return // componentWillUnmount
  }, [id])

  if (data === undefined) {
    return (
      <div className="spinnerContainer">
        <img src={spinner} width="50" alt="" />
      </div>
    )
  } else {
    return (
      <div id="profilePage">
        <div className="welcomeBlock">
          <h1>
            Bonjour<span> {data.userInfos.firstName}</span>
          </h1>
          <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </div>
      </div>
    )
  }
}

export default Profile
