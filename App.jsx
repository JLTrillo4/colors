import { ThemeProvider } from './context/ThemeContext';
import BoxColor from './components/BoxColor';       
import MyFormChallenge from './components/MyFormChallenge';
import './App.css';                                  

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <h1>Bienvenido al reto de useContext</h1>
        <BoxColor />  
        <MyFormChallenge />  
      </div>
    </ThemeProvider>
  );
}

export default App;