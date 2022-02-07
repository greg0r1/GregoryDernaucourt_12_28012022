//@ts-check

import calorieCountImg from '../../assets/images/calorieCountImg.svg'
import proteinCountImg from '../../assets/images/proteinCountImg.svg'
import carbohydrateCountImg from '../../assets/images/carbohydrateCountImg.svg'
import lipidCountImg from '../../assets/images/lipidCountImg.svg'

/**
 *
 * @param {{keyData: object}} props
 * @returns
 */
function KeyData({ keyData }) {
  const { calorieCount, proteinCount, carbohydrateCount, lipidCount } = keyData

  return (
    <div className="keyDatas">
      <ul className="keyDatas_list">
        <li className="keyDatas_calorie">
          <img src={calorieCountImg} width="50" alt="" />
          <div>
            <span>{calorieCount}kCal</span>
            <span>Calories</span>
          </div>
        </li>
        <li className="keyDatas_protein">
          <img src={proteinCountImg} width="50" alt="" />
          <div>
            <span>{proteinCount}g</span>
            <span>Protéines</span>
          </div>
        </li>
        <li className="keyDatas_carbohydrate">
          <img src={carbohydrateCountImg} width="50" alt="" />
          <div>
            <span>{carbohydrateCount}g</span>
            <span>Glucides</span>
          </div>
        </li>
        <li className="keyDatas_lipid">
          <img src={lipidCountImg} width="50" alt="" />
          <div>
            <span>{lipidCount}g</span>
            <span>Lipides</span>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default KeyData
