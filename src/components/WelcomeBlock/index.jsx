//@ts-check

/**
 *
 * @param {{firstName: string}} props
 * @returns
 */
function WelcomeBlock({ firstName }) {
  return (
    <div className="welcomeBlock">
      <h1>
        Bonjour<span> {firstName}</span>
      </h1>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </div>
  )
}

export default WelcomeBlock
