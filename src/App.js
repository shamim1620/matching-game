
import './App.css';

function App() {
  const handleOnClick = () => {
    console.log("clicked")
  }
  return (
    <div className="App">
      <h3>Matching Game</h3>

      <div className='game-container'>
        <div className="grid-container">
          <div onClick={handleOnClick} className="grid-item">1</div>
          <div onClick={handleOnClick} className="grid-item">2</div>
          <div onClick={handleOnClick} className="grid-item">3</div>
          <div onClick={handleOnClick} className="grid-item">4</div>
          <div onClick={handleOnClick} className="grid-item">5</div>
          <div onClick={handleOnClick} className="grid-item">6</div>
          <div onClick={handleOnClick} className="grid-item">7</div>
          <div onClick={handleOnClick} className="grid-item">8</div>
          <div onClick={handleOnClick} className="grid-item">9</div>
          <div onClick={handleOnClick} className="grid-item">7</div>
          <div onClick={handleOnClick} className="grid-item">8</div>
          <div onClick={handleOnClick} className="grid-item">9</div>
        </div>
      </div>

    </div>
  );
}

export default App;
