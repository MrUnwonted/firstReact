// import logo from './logo.svg';
// import './App.css';
import Greet from './Components/Greet';
import Welcome from './Components/Welcome';
import Hook from './Components/Hook';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <h1>Hello Arjun</h1>
          Welcome to this React
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
     {/* <Greet name="Arjun" anotherName= "Arju" > 
     <p>WhatsApp</p> </Greet>
     <Greet name="Akhil" anotherName= "Akku" />
     <Greet name="Siju" anotherName= "Sij"/>
      <Welcome/> */}
      <Hook/>
    </div>
  );
}

export default App;
