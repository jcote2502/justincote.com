import './App.css';
import Routes from './Routes.js'
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './NavBar.js'

// AUTHOR : JUSTIN COTE


function App() {
  return (
      <Router>
        <NavBar />
        <div className='page-frame'>
          <Routes />
        </div>
      </Router>
  );
}

export default App;
