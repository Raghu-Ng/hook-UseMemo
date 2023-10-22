import "./main.css";
import React from 'react';
import { useNavigate } from "react-router-dom";

export default function Main() {

    const navigate = useNavigate()

    const handleButton1 = ()=> {
        navigate("/Rag");
      }
    const handleButton2 = ()=> {
        navigate("/Included");
      }
        
  return (
    <div className="full">
        <div className="withoutC">
        <button className="withOut" onClick={handleButton1} >WithOut UseMemo</button>
        </div>
        <div className="textc"><h1 className="text">Want To Know the Use Of UseMemo</h1></div>
        <div className="withC">
        <button className="with" onClick={handleButton2}>With UseMemo</button>
        </div>
    </div>
  )
}
