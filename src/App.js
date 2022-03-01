
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRecycle, faStar, } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react';
import './App.css';





function App() {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  const [move, setMove] = useState(0);

  useEffect(() => {
    setMove(0);
    fetch('data.json')
      .then(res => res.json())
      .then(data => {
        function shuffle(array) {
          let currentIndex = array.length, randomIndex;

          // While there remain elements to shuffle...
          while (currentIndex != 0) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
              array[randomIndex], array[currentIndex]];
          }

          return array;
        }
        setData(shuffle(data))
      })

  }, [count])

  const handleOnClick = () => {
    console.log("clicked")
  }
  return (
    <div className="App">
      <h3>Matching Game</h3>
      <div className='game-container'>
        <div className='icon-section'>
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
        </div>
        <div className='icon-section'>

        </div>
        <div className='icon-section' >
          <h4>{Math.floor(move / 2)} Moves</h4>
        </div>
        <div className='icon-section'>
          <button className='reload-btn' onClick={() => setCount(count + 1)}><FontAwesomeIcon icon={faRecycle} /></button>
        </div>
      </div>

      <div className='game-container'>
        <div className="grid-container">
          {
            data.map(item => <div onClick={() => setMove(move + 1)} className="grid-item">{item.id}</div>)
          }


        </div>
      </div>

    </div>
  );
}

export default App;
