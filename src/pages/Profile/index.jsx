//@ts-check

import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Datas from '../../data'
import Spinner from '../../components/Spinner'
import WelcomeBlock from '../../components/WelcomeBlock'

/**
 *
 * @component
 * @returns {React.ReactElement}
 */
function Profile() {
  const { id } = useParams()
  const [dataInfos, setUserInfos] = useState({
    userInfos: {},
    score: {},
    keyData: {},
  })
  const [dataActivity, setUserActivity] = useState({ sessions: {} })

  const fetchUser = async (id) => {
    const result = await Datas.getUserInfos(id).then(({ data }) =>
      setUserInfos(data)
    )
    return result
  }

  const fetchUserActivity = async (id) => {
    const result = await Datas.getUserActivity(id).then((res) =>
      setUserActivity(res.data)
    )
    return result
  }

  useEffect(() => {
    fetchUser(id)
    return // componentWillUnmount
  }, [id])

  useEffect(() => {
    fetchUserActivity(id)
    return // componentWillUnmount
  }, [id])

  if (dataInfos === undefined) {
    return <Spinner />
  } else {
    console.info(typeof dataInfos.userInfos.firstName)
    return (
      <div id="profilePage">
        <WelcomeBlock firstName={dataInfos.userInfos.firstName} />
        <div>
          <ul>
            {/* {dataInfos.keyData !== undefined &&
              dataInfos.keyData.map(
                (e) => `
            <li><span>${e.calorieCount}</span></li>
            <li><span>${e.proteinCount}</span></li>
            <li><span>${e.carbohydrateCount}</span></li>
          `
              )} */}
          </ul>
        </div>
      </div>
    )
  }
}

export default Profile
