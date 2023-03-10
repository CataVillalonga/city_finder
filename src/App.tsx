import { useState } from 'react';
import Header from './Components/Header/Header';
import Map from './Components/Map/Map';
import FinalScore from './Components/FinalScore/FinalScore';
import ScoreBoard from './Components/ScoreBoard/ScoreBoard';
import { citiesData } from './data';
import { IAnswers, ICoords } from './utils';

const App = () => {
  const {cities} = citiesData
  const [ score, setScore ] = useState(1500)
  const [ answers,  setAnswers ] = useState<IAnswers[]>([])
  const [ currentCityIndex, setCurrentCityIndex ] = useState(0)
  const [ answerResult, setAnswerResult ] = useState('')
  const [ distanceBetweenPins, setDistanceBetweenPins ] = useState<number | null>(null)

  const getDistanceBetweenPositions = (p1:ICoords, p2:ICoords) => {
    const rad = (x:number) => {
      return x * Math.PI / 180;
    };  
    const R = 6378137; // Earth’s radius in meters
    const dLat = rad(p2.lat - p1.lat);
    const dLong = rad(p2.lng - p1.lng);
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(rad(p1.lat)) * Math.cos(rad(p2.lat)) *
      Math.sin(dLong / 2) * Math.sin(dLong / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = R * c/ 1000;
    return d.toFixed(0); // returns the distance in km
  };

  const scoreHandler = (answer:ICoords,location:ICoords) => {
    const distance = +getDistanceBetweenPositions(answer,location)
    setScore(score - distance)
    setCurrentCityIndex(currentCityIndex + 1)
    setDistanceBetweenPins(distance)

    if ( distance < 51){
        setAnswerResult('Correct Answer')
        setAnswers([...answers,{
          city:cities[currentCityIndex].name, 
          answer:true
        }])
    } else {
      setAnswerResult('Wrong Answer')
      setAnswers([...answers,{
        city:cities[currentCityIndex].name, 
        answer:false
      }])
    }
  }
  
  return (
    <div className="App">
      {(score > 0 && currentCityIndex < cities.length-1)?
      <>
      <Header/>
      <ScoreBoard score={score} cities={cities} currentCityIndex={currentCityIndex} answerResult={answerResult} distanceBetweenPins={distanceBetweenPins}/>
      <Map cities={cities} currentCityIndex={currentCityIndex} scoreHandler={scoreHandler}
      />
      </>:
      <FinalScore answers={answers} setCurrentCityIndex={setCurrentCityIndex} setScore={setScore} setAnswerResult={setAnswerResult} setDistanceBetweenPins={setDistanceBetweenPins}/>
      }

    </div>
  );
}

export default App;
