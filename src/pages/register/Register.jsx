import { useState } from 'react';
import { useForm } from 'react-hook-form';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  const { register, handleSubmit, formState: { errors }, watch, reset  } = useForm();

  const password = watch('password', '');

  

  const onSubmit = data => {
    
   const {name, email, password,  photoURL} = data
   const role = 'student'
    // Handle form submission logic here
    console.log(name, email, password,  photoURL,role);
    reset()
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  
    return (
        <div>
        <h1>Please signUp</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
  
          <div>
            <label htmlFor="name">Name</label>
            <input id="name" type="text" {...register('name', { required: true })} />
            {errors.name && <div>Name is required</div>}
          </div>
  
          <div>
            <label htmlFor="email">Email</label>
            <input id="email"  type="email" {...register('email', { required: true, pattern: /^\S+@\S+$/i })} />
            {errors.email && (
              <div>
                {errors.email.type === 'required'?'Email is required':'Invalid email address'}
              </div>
            )}
          </div>
  
          <div>
            <label htmlFor="password">Password</label>
            <input id="password" type={showPassword ? 'text' : 'password'}
              {...register('password', { required: true, minLength: 6, pattern: /(?=.*[A-Z])(?=.*[@$!%*?&])/, })}/>
            {errors.password && (
              <div>
                {errors.password.type === 'required'
                  ? 'Password is required'
                  : errors.password.type === 'minLength'
                    ? 'Password must be at least 6 characters long'
                    : 'Password must contain a capital letter and a special character'}
              </div>
            )}
            <button type="button" onClick={togglePasswordVisibility}>
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>
  
          <div>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              id="confirmPassword"
              type={showPassword ? 'text' : 'password'}
              {...register('confirmPassword', {
                required: true,
                validate: value => value === password || 'Passwords do not match',
              })}
            />
            {errors.confirmPassword && <div>{errors.confirmPassword.message}</div>}
          </div>
          
          <div>
            <label htmlFor="photoURL">Photo URL</label>
            <input
              id="photoURL"
              type="text"
              {...register('photoURL', { required: true })}
            />
            {errors.photoURL && <div>Photo URL is required</div>}
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
    );
};

export default Register;