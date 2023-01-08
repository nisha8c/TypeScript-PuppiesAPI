
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { PuppyData } from '../types/types';
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
            message: "Name is required."
          },

          breed: {
            type: "required",
            message: "Breed is required."
          },

          birthdate: {
            type: "required",
            message: "Birthdate is required."
          }
        }
      : {}
  };
};

const Puppy = () => {
  const { id } = useParams();
  const [data, setData] = useState<PuppyData>();

  useEffect(() => {
    const getData = async () => {
      const response = await fetch (`http://localhost:5000/api/puppies/${id}`);
      const pupData = await response.json();
      setData(pupData);
    };

    getData();
  }, [id, data]);

  const {
    register,
    handleSubmit,
    formState: { errors }
    } = useForm<FormValues>({
    resolver: resolver
  });

  const onSubmit = handleSubmit((updateData) => {
    alert(JSON.stringify(updateData));

    fetch("http://localhost:5000/api/puppies/"+ id, { 
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updateData)
    })
     .then(response => response.json())
     .then(newData => { console.log('result : ', newData) })
     .catch(error => {
        console.log(error);
      });
  });
  
  return (
    <>
      <section className='edit-puppy'>
        <h1>Edit Puppy Info for ID: {data?.id}</h1>

        <section className='pup-card'>

          <div className='card-body'>
            <h4>Name: {data?.name}</h4>
            <div>ID: {data?.id}</div>
            <div>Breed: {data?.breed}</div>
            <div>Birth Date: {data?.birthdate.toString()}</div>
          </div>

        </section>

        <div className='new-data'>
          <h4>Update details in form below</h4>
        </div>
                 
        <form className='form-conatiner' onSubmit={onSubmit}>
          <div>
            <label>Name</label>
            <input {...register("name")} placeholder={data?.name} autoFocus/>
            {errors?.name && <p>{errors.name.message}</p>}
          </div>

          <div>
            <label>Breed</label>
            <input {...register("breed")} placeholder={data?.breed} />
            {errors?.breed && <p>{errors.breed.message}</p>}
          </div>

          <div>
            <label>Birth Date</label>
            <input {...register("birthdate")} placeholder={data?.birthdate.toString()} />
            {errors?.birthdate && <p>{errors.birthdate.message}</p>}
          </div>

          <input className='btn' type="submit" />
        </form>       
        
      </section>
    </>
  )
}

export default Puppy
