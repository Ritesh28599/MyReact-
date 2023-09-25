import React from 'react';
import Form2 from './Form2';

const Form = () => {
  
  // const data = {
  //   name: '',
  //   email: '',
  //   password: '',
  //   comfirmpassword: '',
  //   gender: '',
  //   age: '',
  // };
  // const [FormData, setFormData] = useState(data);
  // const [errors, setErrors] = useState({}); // State to store validation errors

  // const { name, email, password, comfirmpassword, gender, age } = FormData;

  // const handler = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...FormData, [name]: value });
  // };

  // const validateForm = () => {
  //   const newErrors = {};
  //   // Check if name is empty
  //   if (!name) {
  //     newErrors.name = 'Name is required';
  //   }
  //   // Check if email is a valid format
  //   if (!email.match(/^\S+@\S+\.\S+$/)) {
  //     newErrors.email = 'Invalid email address';
  //   }
  //   // Check if password is at least 6 characters
  //   if (password.length < 6) {
  //     newErrors.password = 'Password must be at least 6 characters';
  //   }
  //   // Check if passwords match
  //   if (password !== comfirmpassword) {
  //     newErrors.comfirmpassword = 'Passwords do not match';
  //   }
  //   // Check if gender is selected
  //   if (!gender) {
  //     newErrors.gender = 'Gender is required';
  //   }
  //   // Check if age is a number
  //   if ( !age || isNaN(age)) {
  //     newErrors.age = 'Age must be a number';
  //   }

  //   setErrors(newErrors);

  //   // Return true if there are no errors, otherwise false
  //   return Object.keys(newErrors).length === 0;
  // };

  // const submithandler = (e) => {
  //   e.preventDefault();

  //   if (validateForm()) {
  //     // Form data is valid, proceed with submission
  //     console.log(FormData);
  //     setFormData(data);
  //     setErrors({});
  //   } else {
  //     // Form data is not valid, do not submit
  //     console.error('Form data is invalid');
  //   }
  // };

  return (
    <div>
      <Form2/>
      {/* <form onSubmit={submithandler}>
        <div>
          <label>Name:</label>
          <input type='text' value={name} name='name' onChange={handler} />
          {errors.name  }
        </div>
        <div>
          <label>Email:</label>
          <input type='email' value={email} name='email' onChange={handler} />
          {errors.email }
        </div>
        <div>
          <label>Password:</label>
          <input type='password' value={password} name='password' onChange={handler} />
          {errors.password }
        </div>
        <div>
          <label>Confirm Password:</label>
          <input type='password' value={comfirmpassword} name='comfirmpassword' onChange={handler} />
          {errors.comfirmpassword}
        </div>
        <div>
          <label>Gender:</label>
          <select value={gender} name='gender' onChange={handler}>
            <option value=''>Select Gender</option>
            <option value='male'>Male</option>
            <option value='female'>Female</option>
          </select>
          {errors.gender }
        </div>
        <div>
          <label>Age:</label>
          <input type='text' value={age} name='age' onChange={handler} />
          {errors.age }
        </div>
        <button type='submit'>Save</button>
      </form> */}
    </div>
  );
};

export default Form;
