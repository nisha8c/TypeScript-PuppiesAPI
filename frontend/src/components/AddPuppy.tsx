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
      <form className='form-conatiner' onSubmit={onSubmit}>
        <div>
          <label>Name</label>
          <input {...register("name")} placeholder="enter name" autoFocus/>
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

        <input className='btn' type="submit" />
      </form>
    </div>
  );
}

export default AddPuppy