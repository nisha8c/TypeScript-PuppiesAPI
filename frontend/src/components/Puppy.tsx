
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
            message: "This is required."
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
        <h1>Edit Puppy Info</h1>
        <div>ID: {data?.id}</div>
        <div className='new-data'>
          <h4>Update details in form below</h4>
        </div>
                 
        <form onSubmit={onSubmit}>
          <div>
            <label>Name</label>
            <input {...register("name")} placeholder={data?.name} autoFocus/>
            {errors?.name && <p>{errors.name.message}</p>}
          </div>

          <div>
            <label>Breed</label>
            <input {...register("breed")} placeholder={data?.breed} />
          </div>

          <div>
            <label>Birth Date</label>
            <input {...register("birthdate")} placeholder={data?.birthdate.toString()} />
          </div>

          <input type="submit" />
        </form>       
        
      </section>
    </>
  )
}

export default Puppy
