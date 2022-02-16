//@ts-check

import { useParams, Navigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Datas from '../../data'
import WelcomeBlock from '../../components/WelcomeBlock'
import KeyData from '../../components/KeyDatas'
import AverageSessions from '../../components/AverageSessions'
import PropTypes from 'prop-types'
import AverageScore from '../../components/AverageScore'
import Performance from '../../components/Performance'
import Activity from '../../components/Activity'
import Spinner from '../../components/Spinner'

/**
 * Profile page
 *
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
  const [userActivities, setUserActivities] = useState({ data: [], kind: {} })
  const [userAverageSessions, setUserAverageSessions] = useState({
    sessions: [],
  })
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)

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

  const fetchUser = async (/** @type {string} */ id) => {
    const userInfoResponse = await Datas.getUserInfos(id)
    userInfoResponse !== 404 && userInfoResponse !== undefined
      ? setUserInfos(userInfoResponse.data)
      : setError(true)
    setLoading(false)
    return userInfoResponse
  }

  const fetchUserActivity = async (/** @type {string} */ id) => {
    const userActivityResponse = await Datas.getUserActivity(id)
    userActivityResponse !== 404 && userActivityResponse !== undefined
      ? setUserActivity(userActivityResponse.data)
      : setError(true)
    setLoading(false)
    return userActivityResponse
  }

  const fetchUserAverageSessions = async (/** @type {string} */ id) => {
    const userAverageSessionsResponse = await Datas.getUserAverageSessions(id)
    userAverageSessionsResponse !== 404 &&
    userAverageSessionsResponse !== undefined
      ? setUserAverageSessions(userAverageSessionsResponse.data)
      : setError(true)
    setLoading(false)
    return userAverageSessionsResponse
  }

  const fetchUserActivities = async (/** @type {string} */ id) => {
    const userperformanceResponse = await Datas.getUserPerformance(id)
    userperformanceResponse !== 404 && userperformanceResponse !== undefined
      ? setUserActivities(userperformanceResponse.data)
      : setError(true)
    setLoading(false)
    return userperformanceResponse
  }

  useEffect(() => {
    setLoading(true)
    fetchUser(id)
    fetchUserActivity(id)
    fetchUserAverageSessions(id)
    fetchUserActivities(id)
    return // componentWillUnmount
  }, [id])

  console.log([userInfos])

  if (error) {
    return <Navigate to={'404'} />
  } else if (loading) {
    return <Spinner />
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
