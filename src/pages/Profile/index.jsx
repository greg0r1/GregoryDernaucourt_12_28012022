//@ts-check

import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Datas from '../../data'
import Spinner from '../../components/Spinner'
import WelcomeBlock from '../../components/WelcomeBlock'
import KeyData from '../../components/KeyDatas'

/**
 *
 * @component
 * @returns {React.ReactElement}
 */
function Profile({ keyData }) {
  const { id } = useParams()
  const [userInfos, setUserInfos] = useState({
    userInfos: {},
    score: {},
    keyData: {},
  })
  const [userActivity, setUserActivity] = useState({ sessions: {} })

  const fetchUser = async (id) => {
    const result = await Datas.getUserInfos(id)
    setUserInfos(result.data)
    return result
  }

  //be able to access key figures via /user/:id/key-data route
  keyData ? console.table(userInfos.keyData) : console.log('keyData', keyData)

  const fetchUserActivity = async (id) => {
    const result = await Datas.getUserActivity(id)
    setUserActivity(result.data)
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

  if (userInfos === undefined) {
    return <Spinner />
  } else {
    console.log(userActivity)
    return (
      <div id="profilePage">
        <WelcomeBlock firstName={userInfos.userInfos.firstName} />
        {<KeyData keyData={userInfos.keyData} />}
      </div>
    )
  }
}

export default Profile
