import { PuppyData } from '../types/types';
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

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

  const deletePuppy = async (pupId: number) => {
    
    console.log('deletePuppy id: ' , pupId); 
    await fetch("http://localhost:5000/api/puppies/"+ pupId, { method: "DELETE" })
      .then(response => {  console.log(response.status); });  
  };

  const updatePuppy = async (pupId: number) => {

    console.log('updatePuppy id: ', pupId);  
    await fetch("http://localhost:5000/api/puppies/"+ pupId, { 
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        data
      })
    })
     .then(response => response.json())
     .then(data => { console.log(data) })
     .catch(error => {
        console.log(error);
      });
  };

  return (
    <>
      <Link to="/add-puppy">Add New Puppy</Link><br />
      
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
                <div>Birth Date: {pup.birthdate.toString()}</div>
                <div className='card-footer'>
                  <button onClick={() => updatePuppy(pup.id)}>Edit</button>
                  <button>
                    <Link to="/edit-puppy">Edit Puppy</Link><br />
                  </button>
                  <button onClick={() => deletePuppy(pup.id)}>Delete</button>
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