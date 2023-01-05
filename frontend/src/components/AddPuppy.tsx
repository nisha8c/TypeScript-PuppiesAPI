/*
import DatePicker, { ReactDatePickerProps } from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import React, { useState } from "react";
import { PuppyData } from '../types/types';

const AddPuppy = () => {
  const [date, setDate] = useState(new Date());
  const [puppy, setPuppy] = useState<PuppyData>({
    id: 0, 
    breed: "", 
    name: "",
    birthdate: new Date(),
  });

  const handleChange = (event: any) => {
    const value = event.target.value;
    setPuppy({
      ...puppy,
      [event.target.value]: value
    });
   };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    console.log('handleSubmit....')
    event.preventDefault();
    const puppyData: PuppyData = {
      id: puppy.id,
      breed: puppy.breed,
      name: puppy.name,
      birthdate: new Date(),
    };
    console.log('puppyData', puppyData);
  }

  

  return (
    <>
    <section className="add-puppy">
      <h3>Add New Puppy</h3>
      <form className="add-new-pupp-form" onSubmit={handleSubmit}>

        <label htmlFor='puppyName'>Puppy Name: </label>
        <input type='text'
          id='puppy-name'
          name='puppyName'
          className='add-puppy-name-input'
          autoFocus
          placeholder='Enter puppy name'
          value={puppy.name}
          onChange={handleChange}
        />

        <label htmlFor='puppyBreed'>Breed: </label>
        <input type='text'
          id='puppy-breed'
          name='puppyBreed'
          className='add-puppy-breed-input'
          placeholder='Enter puppy breed'
          value={puppy.breed}
          onChange={handleChange}
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
*/

import { useForm, Resolver } from 'react-hook-form';


type FormValues = {
  breed: string;
  name: string;
  birthdate: Date;
};

const resolver: Resolver<FormValues> = async (values) => {
  return {
    values: !values.name ? {} : values,
    errors: !values.name
      ? {
          name: {
            type: "required",
            message: "This is required."
          }
        }
      : {}
  };
};

const AddPuppy = () => {

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormValues>({
    resolver: resolver
  });

  const onSubmit = handleSubmit((data) => {
    alert(JSON.stringify(data));
    console.log(JSON.stringify(data));

    fetch('http://localhost:5000/api/puppies', {
      method : 'POST',
      headers : { 'Content-Type': 'application/json' },
      body : JSON.stringify(data)
    });
  });

  return (
    <div className="add-puppy">
      <h1>Add New Puppy</h1>
      <form onSubmit={onSubmit}>
        <div>
          <label>Name</label>
          <input {...register("name")} placeholder="enter name" />
          {errors?.name && <p>{errors.name.message}</p>}
        </div>

        <div>
          <label>Breed</label>
          <input {...register("breed")} placeholder="enter breed" />
        </div>

        <div>
          <label>Birth Date</label>
          <input {...register("birthdate")} placeholder="enter birthdate" />
        </div>

        <input type="submit" />
      </form>
    </div>
  );
}

export default AddPuppy