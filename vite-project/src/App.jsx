import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Addnewcontact from "./components/Addnewcontact";
import Update from './components/Update';
import Homepage from "./components/Homepage";
import Footer from "./components/Footer";
import Header from "./components/header";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
   <div className="container">
    <Router> 
          <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Addnewcontact" element={<Addnewcontact />} />
          <Route path="Update" element={<Update />} />
        </Routes>
      </Router>
      </div>
      
      <Footer />
    </>
  );
}

export default App;
