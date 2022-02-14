//@ts-check

import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Datas from '../../data'
// import Spinner from '../../components/Spinner'
import WelcomeBlock from '../../components/WelcomeBlock'
import KeyData from '../../components/KeyDatas'
import AverageSessions from '../../components/AverageSessions'
import PropTypes from 'prop-types'
import Error from '../../components/Error'
import AverageScore from '../../components/AverageScore'
import Performance from '../../components/Performance'
import Activity from '../../components/Activity'

/**
 *
 * @component
 * @returns {React.ReactElement}
 */
function Profile({
  isKeyData,
  isTodayScore,
  isAverageSessions,
  isActivity,
  isActivities,
}) {
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
  const [userActivities, setUserActivities] = useState({ data: [], kind: {} })

  //be able to access key figures via /user/:id/key-data route
  isKeyData && console.table(userInfos.keyData)
  //be able to access today's goal completion via the /user/:id/today-score route
  isTodayScore && console.table(userInfos.score)
  //be able to access sessions via the /user/:id/activity route
  isActivity && console.table(userActivity.sessions)
  //be able to access sessions via the /user/:id/activities route
  isActivities && console.table(userActivities)
  //be able to access average session duration via the /user/:id/average-sessions route
  isAverageSessions && console.table(userAverageSessions.sessions)

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

  const fetchUserActivities = async (id) => {
    const userperformanceResponse = await Datas.getUserPerformance(id)
    setUserActivities(userperformanceResponse.data)
    return userperformanceResponse
  }

  useEffect(() => {
    fetchUser(id)
    fetchUserActivity(id)
    fetchUserAverageSessions(id)
    fetchUserActivities(id)
    return // componentWillUnmount
  }, [id])

  if (
    !userInfos.userInfos.firstName ||
    !userActivity.sessions ||
    !userAverageSessions.sessions ||
    !userActivities.data ||
    !userActivities.kind
  ) {
    return <Error />
  } else {
    return (
      <div id="profilePage">
        <WelcomeBlock firstName={userInfos.userInfos.firstName} />
        <div id="content">
          <div className="charts">
            <Activity data={userActivity.sessions} />
            <div className="squaresCharts">
              <AverageSessions data={userAverageSessions.sessions} />
              <Performance
                data={userActivities.data}
                kind={userActivities.kind}
              />
              <AverageScore data={[userInfos]} />
            </div>
          </div>
          <KeyData keyData={userInfos.keyData} />
        </div>
      </div>
    )
  }
}

export default Profile

Profile.propType = {
  isKeyData: PropTypes.bool,
  isTodayScore: PropTypes.bool,
  isAverageSessions: PropTypes.bool,
  isActivity: PropTypes.bool,
  isActivities: PropTypes.bool,
}

Profile.defaultProps = {
  isKeyData: false,
  isTodayScore: false,
  isAverageSessions: false,
  isActivity: false,
  isActivities: false,
}
