
import './App.css';
import React, { useState, useEffect } from "react";
import { Routes, Route } from 'react-router-dom';

import Puppies from './components/Puppies';
import AddPuppy from './components/AddPuppy';
import EditPuppy from './components/EditPuppy';
import Header from './components/Header';
import Footer from './components/Footer';
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
        <Route path="/about" element={<About />} />
        <Route path="/add-puppy" element={<AddPuppy />} />
        <Route path="/edit-puppy" element={<EditPuppy />} />
        <Route path="/puppies" element={<Puppies data={puppy} />} />
      </Routes> 
      <Footer />
    </>
  );
}

export default App;
