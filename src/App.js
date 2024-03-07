import './index.css'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import RegisterPage from './components/RegisterPage';
import LoginPage from './components/LoginPage';
import ModuleChecker from './components/ModuleChecker';
import Parameter from './components/Parameter';
import Button from './components/shared/Button';


 
function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' exact element={<AboutPage />} />
          <Route path='/register' exact element={<RegisterPage />} />
          <Route path='/login' exact element={<LoginPage />} />
        </Routes>
      </div>
    </Router>
    );
  }

  export default App;
