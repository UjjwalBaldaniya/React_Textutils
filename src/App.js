
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React, { useState } from 'react'
import About1 from './components/About1';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showalert = (massage, type) => {
    setAlert({
      msg: massage,
      ty: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white'
      showalert("Light mode has been Enable!", "success")
    }
    else {
      setMode('dark');
      document.body.style.backgroundColor = 'black'
      showalert("Dark mode has been Enable!", "success")
    }
  }

  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Routes>
          <Route path='/' element={<TextForm heading="Enter Text Below" mode={mode} showalert={showalert} />} />
          <Route path='/about' element={<About1 mode={mode} />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;

