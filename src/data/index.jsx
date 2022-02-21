//@ts-check

import mocks from '../data/mocks.json'

/**
 * Fetch every endpoints from API for components
 * Return promises with the data into Promise Result
 * @class
 */
export default class Datas {
  /**
   * @param {string} id
   * @returns {promise}
   * @static
   */
  static async getUserInfos(id) {
    if (process.env.REACT_APP_MOCK === 'true') {
      const promise = new Promise((res) => res(mocks))
      return promise
    } else {
      const url = `http://localhost:3000/user/${id}`
      try {
        const fetchUser = await fetch(url)
        const response = fetchUser.json()
        return response
      } catch (error) {
        console.log(error)
      }
    }
  }

  /**
   * @param {string} id
   * @returns {promise}
   * @static
   */
  static async getUserActivity(id) {
    if (process.env.REACT_APP_MOCK === 'true') {
      const promise = new Promise((res) => res(mocks.data.activity))
      return promise
    } else {
      const url = `http://localhost:3000/user/${id}/activity`
      try {
        const fetchUserActivity = await fetch(url)
        const response = fetchUserActivity.json()
        return response
      } catch (error) {
        console.log(error)
      }
    }
  }

  /**
   * @param {string} id
   * @returns {promise}
   * @static
   */
  static async getUserAverageSessions(id) {
    if (process.env.REACT_APP_MOCK === 'true') {
      const promise = new Promise((res) => res(mocks.data.averageSessions))
      return promise
    } else {
      const url = `http://localhost:3000/user/${id}/average-sessions`
      try {
        const fetchUserAverageSessions = await fetch(url)
        const response = fetchUserAverageSessions.json()
        return response
      } catch (error) {
        console.log(error)
      }
    }
  }

  /**
   * @param {string} id
   * @returns {promise}
   * @static
   */
  static async getUserPerformance(id) {
    if (process.env.REACT_APP_MOCK === 'true') {
      const promise = new Promise((res) => res(mocks.data.performance))
      return promise
    } else {
      const url = `http://localhost:3000/user/${id}/performance`
      try {
        const fetchUserPerformance = await fetch(url)
        const response = fetchUserPerformance.json()
        return response
      } catch (error) {
        console.log(error)
      }
    }
  }
}
