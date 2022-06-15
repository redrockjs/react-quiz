import './App.css';
import data from './asssets/data/data.json';
import {Main} from "./pages/Main";
import {Header} from "./components/Header";
import {Result} from "./pages/Result";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {useEffect, useState} from "react";

export default function App() {

  const [state, setState] = useState(null);
  // const [questionNumber, setQuestionNumber] = useState(1);


  useEffect(() => {
    //console.log(state)
    setState(data);
  })

  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route exact path='/' element={<Main/>} state={state}/>
        <Route exact path='/result' element={<Result/>}/>
      </Routes>
    </BrowserRouter>
  );
}

