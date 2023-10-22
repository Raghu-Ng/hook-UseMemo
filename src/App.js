import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './Components/main/Main';
import Rag from './Components/Rag/Rag';
import Included from './Components/Included/Included';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path='/Rag' element={<Rag/>}/>
        <Route path='/Included' element={<Included/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

