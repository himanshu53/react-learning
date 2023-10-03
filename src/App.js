import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Textform from './components/Textform';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes ,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [Mode, setMode] = useState('light')// state variable to handle Overall site darkmode
  const [alert,setAlert] = useState(null)

  const showAlert = (message , type)=>{
      setAlert({
        msg : message,
        type : type
      });
  }
  const toggleMode = ()=>{
    if(Mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = "grey";
      showAlert("Dark Mode Enabled","Success");
      setTimeout(() => {
        setAlert(null);
      }, 3000);
    }else{
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert("Dark Mode Disabled","Success");
      setTimeout(() => {
        setAlert(null);
      }, 3000);
    }
  }
  return (
    <>
    <Router>
        <Navbar title="TextUtiles" aboutText = "About Us" mode={Mode} toggleMode={toggleMode}/>
        <div className="conytainer">
          <Alert alert={alert}/>
          <Routes>
          <Route path='/about' element={<About/>} />
          <Route path='/' element={<Textform heading= 'Enter Text here'/>} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
