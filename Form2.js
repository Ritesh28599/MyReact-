import React from 'react'
import { useForm } from 'react-hook-form'

const Form2 = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm();
      const onSubmit = (data) => console.log(data)
const password =watch('password')
  return (
    <div>
     <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Name:</label>
          <input type='text' name='name' {...register('name',{required:'name is required'})} />
          {errors.name && <span>{errors.name.message};</span> }
        </div>
        <div>
          <label>Email:</label>
          <input type='email' name='email' {...register('email',{required:'email is required',pattern:{value:/^\S+@\S+\.\S+/,message:'email is invalid'}})} />
          {errors.email && <span>{errors.email.message}</span> }
        </div>
        <div>
          <label>Password:</label>
          <input type='password' name='Password' {...register('password',{required:'password is required',
        minLength:{value:6,message:'password min length is 6 '},
        maxLength:{value:10, message:'password max length is 10 '}
        })} />
          {errors.password && <span>{errors.password.message}</span> }
        </div>
        <div>
          <label>Confirm Password:</label>
          <input type='password' name='comfirmpassword' {...register('comfirmpassword',{required:'comfirmpassword is required',
        validate: value => value === password || 'password do no match'
        })} />
          {errors.comfirmpassword && <span>{errors.comfirmpassword.message}</span>}
        </div>
        <div>
          <label>Gender:</label>
          <select  name='gender'>
            <option value=''>Select Gender</option>
            <option value='male'>Male</option>
            <option value='female'>Female</option>
          </select>
          {errors.gender && <span>{errors.gender.message}</span> }
        </div>
        <div>
          <label>Age:</label>
          <input type='text' name='age' {...register('age',{required:'age is required',
        min:{value:18 , message:'age must be 18'
    },
    max:{value:80, message:'age limit is 79 '}
        })}/>
          {errors.age  && <span>{errors.age.message}</span>  }
        </div>
        <button type='submit'>Save</button>
      </form> 
    </div>
  )
}

export default Form2
