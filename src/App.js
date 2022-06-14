import './App.css';
import data from './asssets/data/data.json';
import {Main} from "./pages/Main";
import {Header} from "./components/Header";
import {Result} from "./pages/Result";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {useEffect} from "react";

export default function App() {

  useEffect( ()=>{
      console.log('Page loaded!')
      console.log({data})
    }
  )

  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route exact path='/' element={<Main/>}/>
        <Route exact path='/result' element={<Result/>}/>
      </Routes>
    </BrowserRouter>
  );
}

