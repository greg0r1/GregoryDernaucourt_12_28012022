//@ts-check

import mocks from '../data/mocks.json'

/**
 *
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
      const userFetch = await fetch(url).then((response) => {
        if (response.status === 200) {
          return response.json()
        } else {
          return response.status
        }
      })
      return userFetch
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
      const userFetch = await fetch(url).then((response) => {
        if (response.status === 200) {
          return response.json()
        } else {
          return response.status
        }
      })
      return userFetch
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
      const userFetch = await fetch(url).then((response) => {
        if (response.status === 200) {
          return response.json()
        } else {
          return response.status
        }
      })
      return userFetch
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
      const userFetch = await fetch(url).then((response) => {
        if (response.status === 200) {
          return response.json()
        } else {
          return response.status
        }
      })
      return userFetch
    }
  }
}
