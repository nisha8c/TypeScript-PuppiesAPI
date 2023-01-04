
import './App.css';
import React, { useState, useEffect } from "react";
import Puppies from './components/Puppies';
import AddPuppy from './components/AddPuppy';
import { PuppyData } from './types/types';

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
      <h1>Welcome to Puppies API</h1><br></br>
      <AddPuppy />
      <Puppies data={puppy}/>
    </>
  );
}

export default App;
