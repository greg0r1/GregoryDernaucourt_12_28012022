//@ts-check

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
  static async getUser(id) {
    const url = `http://localhost:3000/user/${id}`
    const userFetch = await fetch(url).then((response) => {
      if (response.status === 200) {
        return response.json()
      } else {
        console.log(response.status)
      }
    })

    return userFetch
  }
}
