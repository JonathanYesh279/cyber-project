import './index.css';
import Header from './components/Header';
import About from './components/About';
import Login from './components/Login';
import Register from './components/Register';
import ModuleChecker from './components/ModuleChecker';
import Parameter from './components/Parameter';
import Button from './components/shared/Button';
  
 

function App() {
    const number = 1
    return (
        <div className='App'>
        <Header>
          <About />
          <Login />
          <Register />
        </Header>
        <ModuleChecker>
          <Parameter />
          <Parameter />
          <Parameter />
          <Parameter />
          <Button />
        </ModuleChecker>
        </div>
    );
  }

  export default App;
