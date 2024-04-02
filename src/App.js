import './App.css';
import LandingPage from './LandingPage';
import Navbar from './Navbar';
import Pages from './Pages';
import Login from './Login';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      
      <div className='content'>
        <Routes>
        <Route path='Rooms' element={<LandingPage />} />
          <Route path='Login' element={<Login />} />
        </Routes>
      </div>
    </div>
    </Router>
  );
}

export default App;
