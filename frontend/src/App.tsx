
import './App.css';
import React, { useState, useEffect } from "react";
import Puppies from './components/Puppies';
import { PuppyData } from './types/types';




function App() {

  const [puppy, setPuppy] = useState<PuppyData[]>([]);
  const [pupImg, setPupImg] = useState<string>();


  useEffect(() => {
    const getData = async () => {
      const response = await fetch ("http://localhost:3000/api/puppies");
      const data = await response.json();
      console.log('Puppies data:: ', data);
      
      setPuppy(data);
    };

    getData();

    const getImages = async () => {
      const resImg = await fetch('https://dog.ceo/api/breeds/image/random');
      const imgData = await resImg.json();
      console.log('Image data:: ', imgData.message);
      setPupImg(imgData.message);
    };

    getImages();
    
  }, []);

  return (
    <>
     
      <h1>Welcome to Puppies API</h1>
      <ul className='cards'>
        {
          puppy.map(pup => {
            console.log('PUP:  ', pup)
            return(
              <li className='pup-card' key={pup.id}>
                <div className='card-header'>
                  <img src={pupImg} alt='abc' height='200' width='200'></img>
                </div>
                <h4>Name: {pup.name}</h4>
                <div>ID: {pup.id}</div>
                <div>Breed: {pup.breed}</div>
                <div>Birth Date: {pup.birthdate}</div>
                <div className='card-footer'>
                    <button>Edit</button>
                    <button>Delete</button>
                </div>
              </li>
            );
          })
        }
      </ul>
   
    </>
  );
}

export default App;
