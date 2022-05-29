import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Forms } from './components/Form';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<Navbar/>}/>
        <Route path='/form' element={<Forms/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
