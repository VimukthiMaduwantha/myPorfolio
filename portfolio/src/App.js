import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Work from './Pages/Work';
import Contact from './Pages/Contact';
import Tech from './Pages/Tech';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/aboutMe" element={<About />} />
        <Route exact path="/works" element={<Work />} />
        <Route exact path="/contactMe" element={<Contact />} />
        <Route exact path="/technologies" element={<Tech />} />
      </Routes>
    </>
  );
}

export default App;
