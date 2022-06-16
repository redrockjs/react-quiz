import './App.css';
import {Main} from "./pages/Main";
import {Header} from "./components/Header";
import {Result} from "./pages/Result";
import {BrowserRouter, Routes, Route} from "react-router-dom";

export default function App() {

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

