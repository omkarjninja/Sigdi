import logo from './logo.svg';
import './App.css';
import Home from './components/home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './components/front';
import Info from './components/info';
import About from './components/about';
import Contact from './components/contact';

function App() {
  return (
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/main' element={<Main />} />
    <Route path='/about' element={<About />} />
    <Route path='/contact' element={<Contact />} />
    </Routes>
  );
}

export default App;
