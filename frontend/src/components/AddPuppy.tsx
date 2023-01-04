import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import React, { useState } from "react";

const AddPuppy = () => {
  const [date, setDate] = useState(new Date());

  return (
    <>
    <section className="add-puppy">
      <h3>Add New Puppy</h3>
      <form className="add-new-pupp-form">

        <label htmlFor='puppyName'>Puppy Name: </label>
        <input type='text'
          id='puppy-name'
          name='puppyName'
          className='add-puppy-name-input'
          autoFocus
          placeholder='Enter puppy name'
          
        />

        <label htmlFor='puppyBreed'>Breed: </label>
        <input type='text'
          id='puppy-breed'
          name='puppyBreed'
          className='add-puppy-breed-input'
          autoFocus
          placeholder='Enter puppy breed'
          
        />

        Birth Date:
        <DatePicker
          dateFormat="dd/MM/yyyy"
          selected={date} 
          onChange={(event: any) => {setDate(event.target.value)}}
        />

        <button type='submit' className='btn-add-puppy' id='addPuppyBtn'>
            Add Puppy
        </button>

      </form>
    </section>
    </>
  )
}

export default AddPuppy