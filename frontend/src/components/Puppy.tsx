import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { PuppyData } from '../types/types';

const Puppy = () => {
  const { id } = useParams();
  const [data, setData] = useState<PuppyData>();

  useEffect(() => {
    const getData = async () => {
      const response = await fetch (`http://localhost:5000/api/puppies/${id}`);
      const pupData = await response.json();
      console.log('pupData:   ... ', pupData);
      setData(pupData);
    };

    getData();
    
  }, [id]);

  const updatePuppy = async (pupId: any) => {

    console.log('updatePuppy id: ', pupId);  
    await fetch("http://localhost:5000/api/puppies/"+ pupId, { 
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        data
      })
    })
     .then(response => response.json())
     .then(data => { console.log('Single puppy ingo: ', data) })
     .catch(error => {
        console.log(error);
      });
  };

  return (
    <>
      <section className='edit-puppy'>
        <h1>Edit Puppy Info</h1>
        <div>ID: {data?.id}</div>

        <form className='edit-pup-form' onSubmit={() => updatePuppy(data?.id)}>
          <label>
            Name: 
            <input
              type="text"
              name='pupName'
              value={data?.name}
              contentEditable />
          </label>

          <label>
            Breed: 
            <input
              type="text"
              name='pupBreed'
              value={data?.breed}
              contentEditable />
          </label>

          <label>
            Name: 
            <input
              type="date"
              name='pupBirthDate'
              value={data?.birthdate.toDateString()}
              contentEditable />
          </label>

        </form>
      </section>
    </>
  )
}

export default Puppy