import './finalScore.css'
import { FinalScoreProps } from '../../utils'

const FinalScore = ({answers, setCurrentCityIndex,setScore,setAnswerResult, setDistanceBetweenPins}:FinalScoreProps) => {
  const finalScore = answers.filter(answer => answer.answer === true)!

  const reStartGame = () => {
    setCurrentCityIndex(0)
    setScore(1500)
    setAnswerResult('')
    setDistanceBetweenPins(null)
  }
  
  return (
    <div className="finalScore-mainContainer">
      <section className='finalScore-section'>
        <h1 className='finalScore-section--h1'>Thanks for playing Mistery city!</h1>
        <p className='finalScore-section--p'>Cities guessed right:</p>
        {(finalScore.length === 0)?
          <p className='finalScore-section--none'>None, better luck next time.</p>:
          <ul className='finalScore-section--list'>
            {finalScore.map(answer => <li>{answer.city}</li>)}
          </ul>
        }
        <p className='finalScore-section--p'>Final score: <span className='finalScore-section--score'>{finalScore.length}</span></p>
        <button className='finalScore-section--btn' onClick={reStartGame}>Play again</button>
      </section>
    </div>
  )
}

export default FinalScore