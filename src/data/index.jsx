//@ts-check

import mocks from '../data/mocks.json'

/**
 * Fetch every endpoints from API
 * Return promises with the data into PromisResult
 *
 * @export
 * @class Datas
 */
export default class Datas {
  /**
   * @param {string} id
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
        console.log(response)
        return response
      } catch (error) {
        console.log(error)
      }
    }
  }

  /**
   * @param {string} id
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
