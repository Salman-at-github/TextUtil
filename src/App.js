import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar.mjs';
import TextForm from './components/TextForm.mjs';
import About from './components/About.mjs';
import Footerad from './components/Footerad.mjs';


function App() {
  const [colour, setcolor] = useState({ color: 'black', backgroundColor: 'white' });
  const [buttColor, setButtColor] = useState({ color: 'black', backgroundColor: 'white', border: '2px solid black', borderRadius: "1.5rem"})

  const togglecol = () => {//dark side
    if (colour.color === 'black') {
      setcolor({ color: 'white', backgroundColor: "black" });
      if (buttColor.color === 'black') {
        setButtColor({ color: 'white', backgroundColor: 'rgb(1, 6, 79)', border: '2px solid rgb(12, 215, 255)', borderRadius: "1.5rem" })
      }
    }
    else {//light side
      setcolor({ color: 'black', backgroundColor: 'white' });
      setButtColor({ color: 'black', backgroundColor: 'white', border: '2px solid black', borderRadius: "1.5rem" })

    }

  }
  return (
    <>
      <Router >
        <div className='mainbox' style={colour}>
          <Navbar name="TextMaster" />
          <div className='container my-4'>
            <Routes>
              <Route path='/' element={<TextForm heading=" Enter Your Text below" clickFunc={togglecol} buttonStyle={buttColor} />}>
              </Route>
              <Route path='/about' element={<About />}>
              </Route>
            </Routes>
          </div>
          <Footerad />
        </div>
      </Router>
    </>
  );
}

export default App;
