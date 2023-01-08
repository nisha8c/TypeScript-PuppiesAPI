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

  return (
    <>
      
      <h1>List of Puppies</h1>
      <ul className='cards'>
        {
          data.map(pup => {
            
            return(
              <li className='pup-card' key={pup.id}>
                <div className='card-header'>
                  <img src={pupImg} alt='abc'></img>
                </div>

                <div className='card-body'>
                  <h4>Name: {pup.name}</h4>
                  <div>ID: {pup.id}</div>
                  <div>Breed: {pup.breed}</div>
                  <div>Birth Date: {pup.birthdate.toString()}</div>
                </div>
                
                <div className='card-footer'>
                  <Link to={`/puppies/${pup.id}`} className='view-pup'>Edit Info</Link>
                  <button className='btn' onClick={() => deletePuppy(pup.id)}>Delete</button>
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