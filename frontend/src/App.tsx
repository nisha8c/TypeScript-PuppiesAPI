
import './App.css';
import { useState, useEffect } from "react";
import { Routes, Route } from 'react-router-dom';

import Puppies from './components/Puppies';
import Puppy from './components/Puppy';
import AddPuppy from './components/AddPuppy';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import { PuppyData } from './types/types';
import About from './components/About';

function App() {

  const [puppy, setPuppy] = useState<PuppyData[]>([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch ("http://localhost:3000/api/puppies");
      const data = await response.json();
      
      setPuppy(data);
    };

    getData();
    
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/add-puppy" element={<AddPuppy />} />
        <Route path="/puppies" element={<Puppies data={puppy} />} />
        <Route path='/puppies/:id' element={ <Puppy />} />
      </Routes> 
      <Footer />
    </>
  );
}

export default App;
