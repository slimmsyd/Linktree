import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className = "App">

      <li className = "bigBox"></li>
      <li>Sydney Sanders</li>

      <div className = "App gap">

          <div className = "box">
          <a href = 'https://www.sydneysanders.dev/'>Website</a>
              </div>

          <div className = "box">
          <a href = 'https://twitter.com/slimmsyd'>Twitter</a>
              </div>

          <div className = "box">
          <a href = '#'>Instagram</a>
              </div>

          <div className = "box">
          <a href = 'https://www.youtube.com/channel/UCC8yLhVL7lThf295DtD4rag'>Youtube</a>
              </div>
              
          <div className = "box">
          <a href = 'https://www.linkedin.com/in/sydney-sanders-dev/'>Linkedin</a>
              </div>
      </div>
    </div>
     
  );
}

export default App;
