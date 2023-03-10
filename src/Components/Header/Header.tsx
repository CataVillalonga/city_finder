import './header.css'

const Header = () => {
  return (
    <header className='mCity_header'>
      <section className='mCity_title'>
        <h1 className='mCity_title--h1'>Welcome to Mistery City!</h1>
        <p className='mCity_title--p'>The game where you put your geography knowledge to the test.</p>
      </section>
      <section className='mCity_instructions'>
        <h2 className='mCity_instructions--h2'>How to play:</h2>
        <p className='mCity_instructions--p'><span className='mCity_instructions--p--span'>Instructions:</span> We will give you the name of a city and you will have to find it on the map. 
          Once you've decided your answer simply click on the location you believe the city is and a <span className='mCity_instructions--pink'>PINK</span> pin will appear on the map.
          After placing your answer, another <span className='mCity_instructions--red'>RED</span> pin will appear on the map and it will show you 
          where the city is actually located and compare the distance between your answer and the right location.
        </p>
        <p className='mCity_instructions--p'><span className='mCity_instructions--p--span'>Score:</span> You begin the game with a score of  1500km, the difference in km between your answer and the actual location 
          will be reduced from your score. But if the distance between both is 50km or less the answer will count as correct.
          The game ends when your score is 0km or there are no more cities to find.
          The high score will be determined by the number of cities you guessed correctly.
        </p>
      </section>
    </header>
  )
}

export default Header