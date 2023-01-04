import { PuppyData } from '../types/types';
import React, { useState, useEffect } from "react";

interface IPuppiesComponentProps {
  data: PuppyData[]
}

const Puppies = ({data}: IPuppiesComponentProps) => {

  const [pupImg, setPupImg] = useState<string>();

  useEffect(() => {
    
    const getImages = async () => {
      const resImg = await fetch('https://dog.ceo/api/breeds/image/random');
      const imgData = await resImg.json();
      setPupImg(imgData.message);
    };

    getImages();
    
  }, []);

  return (
    <>
      <h1>List of Puppies</h1>
      <ul className='cards'>
        {
          data.map(pup => {
            
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
  )
}

export default Puppies