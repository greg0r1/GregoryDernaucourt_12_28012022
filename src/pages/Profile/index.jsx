//@ts-check

import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Datas from '../../data'
import Spinner from '../../components/Spinner'
import WelcomeBlock from '../../components/WelcomeBlock'
import KeyData from '../../components/KeyDatas'
import PropTypes from 'prop-types'

/**
 *
 * @component
 * @returns {React.ReactElement}
 */
function Profile({ isKeyData, isTodayScore, isAverageSessions, isActivities }) {
  const { id } = useParams()
  const [userInfos, setUserInfos] = useState({
    userInfos: {},
    score: {},
    keyData: {},
  })
  const [userActivity, setUserActivity] = useState({ sessions: {} })
  const [userAverageSessions, setUserAverageSessions] = useState({
    sessions: [],
  })

  //be able to access key figures via /user/:id/key-data route
  isKeyData
    ? console.table(userInfos.keyData)
    : console.info('Key Data', isKeyData)
  //be able to access today's goal completion via the /user/:id/today-score route
  isTodayScore
    ? console.table(userInfos.score)
    : console.info('Today score', isTodayScore)
  //be able to access sessions via the /user/:id/activities route
  isActivities
    ? console.table(userActivity.sessions)
    : console.info('Average sessions', isActivities)
  //be able to access average session duration via the /user/:id/average-sessions route
  isAverageSessions
    ? console.table(userAverageSessions.sessions)
    : console.info('Average sessions', isAverageSessions)

  const fetchUser = async (id) => {
    const userInfoResponse = await Datas.getUserInfos(id)
    setUserInfos(userInfoResponse.data)
    return userInfoResponse
  }

  const fetchUserActivity = async (id) => {
    const userActivityResponse = await Datas.getUserActivity(id)
    setUserActivity(userActivityResponse.data)
    return userActivityResponse
  }

  const fetchUserAverageSessions = async (id) => {
    const userAverageSessionsResponse = await Datas.getUserAverageSessions(id)
    setUserAverageSessions(userAverageSessionsResponse.data)
    return userAverageSessionsResponse
  }

  useEffect(() => {
    fetchUser(id)
    fetchUserActivity(id)
    fetchUserAverageSessions(id)
    return // componentWillUnmount
  }, [id])

  if (userInfos === undefined) {
    return <Spinner />
  } else {
    return (
      <div id="profilePage">
        <WelcomeBlock firstName={userInfos.userInfos.firstName} />
        {<KeyData keyData={userInfos.keyData} />}
      </div>
    )
  }
}

export default Profile

Profile.propType = {
  keyData: PropTypes.bool,
  todayScore: PropTypes.bool,
  averageSessions: PropTypes.bool,
  activities: PropTypes.bool,
}

Profile.defaultProps = {
  keyData: false,
  todayScore: false,
  averageSessions: false,
  activities: false,
}
