import { scoreBoardProps} from "../../utils"
import './scoreBoard.css'
const ScoreBoard = ({score, cities, currentCityIndex, answerResult, distanceBetweenPins}:scoreBoardProps) => {


  return (
      <section className="mCity_scoreBoard">
        <p>Find:<span>{cities[currentCityIndex].name!}</span></p>
        <p className="mCity_scoreBoard--answer">{answerResult}</p>
        {(distanceBetweenPins !== null)?
          <p>Difference between the two pins: {distanceBetweenPins} km</p>:false
        }
        
        <p>Score: <span>{score} km</span></p>
      </section>
  )
}
// 
export default ScoreBoard