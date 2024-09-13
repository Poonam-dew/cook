import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';

import './App.css';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './pages/Home.js';
import Menu from './pages/Menu.js';
import About from './pages/About.js';
import Contact from './pages/Contact.js';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Navbar/>
       <Routes>
       <Route path="/Test" element={<Home/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/menu" element={<Menu/>}/>    
        <Route path="/about" element={<About/>}/>   
        <Route path="/contact" element={<Contact/>}/>           
       </Routes>
       
       <Footer/>

       
      </BrowserRouter>


    </div>
  );
}

export default App;
