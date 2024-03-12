import './index.css'; 
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navigate } from 'react-router';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import LoginPage from './components/LoginPage';
import Dashboard from './components/Dashboard';
import RegisterPage from './components/RegisterPage';
import { auth } from './firebase';

 
function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' exact element={<AboutPage />} />
          <Route path='/login' exact element={user ? <Navigate to="/" /> : <LoginPage />} />
          <Route path='register' exact element={<RegisterPage />} />
          <Route path='/dashboard' exact element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
    );
  }

  export default App;
