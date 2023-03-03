// import logo from './logo.svg';
import './App.css';
import About from './component/About';
import Navbar from './component/Navbar';
import React, {useState} from 'react'
import TextBox from './component/TextBox';
import Alert from './component/Alert';
// import { Router } from 'react-router-dom';
// import {
//   Route,
//   Routes
// } from "react-router-dom";

function App() {
  const violet=()=>{
    document.body.style.backgroundColor="#453bb2";
  }
  const [mode,setmode]=useState("light")
  const [states,setstates]=useState("Enable Dark Mode")
  const [alert,setalert]=useState(null)
  const showalert=(massage,type)=>{
      setalert({
        msg:massage,
        type:type
      })
      setTimeout(() => {
        setalert(null)
      }, 3000);
    }
  const toggleMode=()=>{
    if(mode==="light"){
      setmode("dark")
      showalert("Dark Mode is enable","success")
      document.body.style.backgroundColor="#453bb2";
      if(onclick(violet)){
        document.body.style.backgroundColor="#453bb2";
      }
      setstates("Enable Dark Mode")
      
    }
    else{
      setstates("Enable Light Mode")
      setmode("light")
      document.body.style.backgroundColor="white";
      showalert("Light Mode is enable","success")
      
    }
  }
  return (
    <>
   <Navbar  title="TextUtil" Mode={mode} toggleMode={toggleMode} States={states}  />
   <Alert alert={alert}/>
   <div className="container" >    
   {
   /* <Routes>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/about" />
          <About /> }
          <Route exact path="/" element={<>
           
          </>}/>
    </Routes> */}
    <TextBox showalert={showalert} Mode={mode}/>
   <About/>
   </div>  
    </>
  );
}
export default App;
