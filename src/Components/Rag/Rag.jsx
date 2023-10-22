import React from 'react';
import "./rag.css"
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

export default function Rag() {
  const[number,setNumber] = useState(0)
  const[dark,setDark] = useState(false)
  const twoXNumber = slowfunction(number)
  const color ={
    backgroundColor : dark ? 'black': 'white',
    color: dark ? 'white' : 'black'
  }
  
  const navigate = useNavigate()

  const code = 'for (let i=0; i<=1000000000; i++) {}<br>return num * 2';


  const handleBack = ()=> {
      navigate("/");
  }
  return (
<div style={color}>
    <div className="head"><h1>Without the UseMemo</h1></div>
    <div className="input"><input type="number"  placeholder="enter the number" value={number || ''} onChange={e=> setNumber(parseInt(e.target.value))} /></div>
   <div className="function"> <h2>The Functon </h2> <div  dangerouslySetInnerHTML={{ __html: code }} ></div> </div>
    <div className="result">{twoXNumber}</div>
    <h2>Click on this button to Notice the difference</h2>
    <button onClick={()=> setDark(prevDark => !prevDark)}>Change Theme</button>
    <div className="button"><button className='Button'  onClick={handleBack}>Go Back</button></div>
 

  </div>
  )
}


// if I use this i get result as NAN for the result when num is null
// function slowfunction(num){
//   for (let i=0; i<=1000000000; i++) {}
//   return num * 2
// }

function slowfunction(num) {
  if (num === null || num === undefined || isNaN(num)) {
    return 0;
  }

  for (let i = 0; i <= 1000000000; i++) {}

  return num * 2;
}

