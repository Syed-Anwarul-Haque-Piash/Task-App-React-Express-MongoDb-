import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';

function App() {
  return (
    <div className="app">   
    <BrowserRouter> 
    <Routes>
      <Route path='/' element={<Home/>}></Route>
    </Routes>
    </BrowserRouter> 
    </div>
  );
}

export default App;
