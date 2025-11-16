import { Routes,Route } from "react-router-dom";
import "./App.css";
import Home from "./Routes/Home.jsx";
import About from './Routes/About.jsx'
import Service from './Routes/Services.jsx'
import Contact from './Routes/Contact.jsx'

function App() {
  return (
    <div>  
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/service' element={<Service />} />
        <Route path='/contact' element={<Contact />} />
        </Routes> 
   
    </div>
  );
}

export default App;
