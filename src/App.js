import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import Services from './components/Services';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Protected from './components/Protected';
import Dashboard from './components/Dashboard';
import Registration from './components/Registration';
import Login from './components/Login';


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/portfolio' element={<Portfolio />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/service' element={<Services />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/dashboard" element={<Protected Component={Dashboard} />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  );
}

export default App;
