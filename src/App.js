
import './App.css';
import Main from './componenets/Main';

function App() {
  return (
    <div className="App">
      <div className="h1"><h1 className="heading">Quizzical</h1></div>
      <div className="h2"><h2 className='heading2'>Press the Button to start</h2></div>
      <div className="button"><button className='button1'><h2 className='buttontext'>Start Quiz</h2></button></div>
      <Main />
      
    </div>
  );
}

export default App;
