interface ICityDetails {
  name: string;
  position: { lat: number, lng: number};
}

interface ICityData {
  cities:ICityDetails[];
}

interface IAnswers {
  city:string;
  answer:boolean | null;
}

interface ICoords {
  lat: number;
  lng: number;
}


interface scoreBoardProps {
  score:number;
  cities:ICityDetails[];
  currentCityIndex:number;
  answerResult:string;
  distanceBetweenPins:number | null
}

interface MapProps {
  cities:ICityDetails[];
  currentCityIndex:number;
  scoreHandler: (answer: ICoords, location: ICoords) => void
}

interface FinalScoreProps {
  answers:IAnswers[]
  setCurrentCityIndex: React.Dispatch<React.SetStateAction<number>>
  setScore:React.Dispatch<React.SetStateAction<number>>
  setAnswerResult:React.Dispatch<React.SetStateAction<string>>
  setDistanceBetweenPins: React.Dispatch<React.SetStateAction<number | null>>
}

export type {ICityDetails, ICityData, IAnswers, ICoords, scoreBoardProps, MapProps, FinalScoreProps}