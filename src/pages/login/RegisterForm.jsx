import { useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogIn from "../../components/shared/socialLogin/SocialLogIn";
import Swal from "sweetalert2";
import { BiHide, BiShow } from "react-icons/bi";
import axios from "axios";

const RegisterForm = () => {
  const { createUser, manageUser, loading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm();
  const password = watch("password", "");

  const onSubmit = (data) => {
    const { name, email, password, photo } = data;
    const role = "student";

    //image upload with imgbb
    const imageStorageKey = "de1da9de446cf895c7cb2bb3fcabf4d4";
    const formData = new FormData();
    formData.append("image", photo[0]);

    fetch(`https://api.imgbb.com/1/upload?key=${imageStorageKey}`, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const image = result.data.url;
          console.log(image);

          createUser(email, password)
            .then((result) => {
              // Todo:sweet alert
              console.log(result);

              manageUser(name, image)
                .then((result) => {
                  const saveUser = { name, email, photo:image, role };
                  console.log(result);
                  axios
                    .post("https://summer-camp-sandy.vercel.app/users", {
                      saveUser,
                    })
                    .then((data) => {
                      console.log(data.data);
                      if (data.data.insertedId) {
                        Swal.fire("SighUp successful");
                        reset();
                        navigate(from, { replace: true });
                      }
                    });

                  
                  console.log("Profile Updated");
                })
                .catch((error) => {
                  setError(error.message);
                });
              
            })
            .catch((error) => {
              setError(error.message);
            });
        }
      });

    console.log(name, email, password, Image, role);
    reset();
    setError("");
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  if (loading) {
    return <>loading</>;
  }

  return (
    <div className=" flex items-center justify-center bg-gray-100 py-[50px]">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-[#D87D4A] text-center mb-6">
          Sign Up
        </h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-[15px]"
        >
          <div>
            <label
              htmlFor="name"
              className="block text-black text-sm font-medium mb-2"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              {...register("name", { required: true })}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#D87D4A]"
            />
            {errors.name && (
              <div className="text-[#ff0000] text-[12px]">Name is required</div>
            )}
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-black text-sm font-medium mb-2"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#D87D4A]"
            />
            {errors.email && (
              <div className="text-[#ff0000] text-[12px]">
                {errors.email.type === "required"
                  ? "Email is required"
                  : "Invalid email address"}
              </div>
            )}
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-black text-sm font-medium mb-2"
            >
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                {...register("password", {
                  required: true,
                  minLength: 6,
                  pattern: /(?=.*[A-Z])(?=.*[@$!%*?&])/,
                })}
                className=" w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#D87D4A]"
              />
              <button
                className="btn btn-sm absolute top-1 right-1"
                type="button"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <BiShow></BiShow> : <BiHide></BiHide>}
              </button>
            </div>
            {errors.password && (
              <div className="text-[#ff0000] text-[12px]">
                {errors.password.type === "required"
                  ? "Password is required"
                  : errors.password.type === "minLength"
                  ? "Password must be at least 6 characters long"
                  : "Password must contain a capital letter and a special character"}
              </div>
            )}
            {/* TODO: positioning show hide button */}
          </div>

          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-black text-sm font-medium mb-2"
            >
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              type={showPassword ? "text" : "password"}
              {...register("confirmPassword", {
                required: true,
                validate: (value) =>
                  value === password || "Passwords do not match",
              })}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#D87D4A]"
            />
            {errors.confirmPassword && (
              <div className="text-[#ff0000] text-[12px]">
                {errors.confirmPassword.message}
              </div>
            )}
          </div>

          <div>
            <label
              htmlFor="photo"
              className="block text-black text-sm font-medium mb-2"
            >
              Photo URL
            </label>
            <input
              id="photo"
              type="file"
              accept="image/*"
              {...register("photo", { required: true })}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#D87D4A]"
            />
            {errors.photo && (
              <div className="text-[#ff0000] text-[12px]">
                Photo URL is required
              </div>
            )}
          </div>

          <div className="flex gap-[15px]">
            <button
              className="w-full bg-[#D87D4A] hover:bg-[#B95C32] text-white font-semibold py-2 rounded-md transition duration-300"
              type="submit"
            >
              Sign Up
            </button>
            <SocialLogIn></SocialLogIn>
          </div>
        </form>
        <small className="text-[#ff0000] text-[12px] text-center block m-1">
          {error}
        </small>
        <p>
          Already have an account{" "}
          <Link
            to="/login"
            className="text-[#D87D4A] hover:underline mt-2 inline-block"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;



// old code

// import { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import useAuth from '../../hooks/useAuth';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import SocialLogIn from '../../components/shared/socialLogin/SocialLogIn';
// import Swal from 'sweetalert2';
// import { BiHide, BiShow } from 'react-icons/bi';
// import axios from 'axios';

// const RegisterForm = () => {
// 	const { createUser, manageUser } = useAuth()
// 	const navigate = useNavigate()
// 	const location = useLocation()
// 	const from = location.state?.from?.pathname || '/'
// 	const [showPassword, setShowPassword] = useState(false);
// 	const [error,setError] = useState('')

// 	const { register, handleSubmit, formState: { errors }, watch, reset } = useForm();
// 	const password = watch('password', '');



// 	const onSubmit = data => {
// 		const { name, email, password, photo: photo } = data
// 		const role = 'student'
		
// 		createUser(email, password)
// 			.then(result => {
// 				// Todo:sweet alert 
// 				manageUser(name, photo)
// 					.then(result => {
// 						const saveUser = { name, email, photo, role }

// 						axios.post('https://summer-camp-sandy.vercel.app/users', {saveUser})
// 							.then(data => {
// 								// console.log(data.data)
// 								if (data.data.insertedId) {
// 									Swal.fire('SighUp successful')
// 									reset()
// 									navigate(from, { replace: true })
// 								}
// 							})

// 						console.log(result)
// 						console.log('Profile Updated')
// 					})
// 					.catch(error => {
// 						setError(error.message)
// 					})
// 				console.log(result)

// 			})
// 			.catch(error => {
// 				setError(error.message)
// 			})


// 		console.log(name, email, password, photo, role)
// 		reset()
// 		setError('')
// 	};



// 	const togglePasswordVisibility = () => {
// 		setShowPassword(!showPassword);
// 	};

// 	return (
// 		<div className='mb-4 w-full lg:w-1/2 mx-auto bg-base-300 p-4 my-4 rounded-md'>
// 			<h1 className='text-3xl text-center font-bold my-4'>Please signUp</h1>
// 			<form onSubmit={handleSubmit(onSubmit)}>

// 				<div>
// 					<label htmlFor="name" className="block mb-2 font-medium text-gray-700">Name</label>
// 					<input
// 						id="name"
// 						type="text" {...register('name', { required: true })}
// 						className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
// 					/>
// 					{errors.name && <div className='text-red-600'>Name is required</div>}
// 				</div>

// 				<div>
// 					<label htmlFor="email" className="block mb-2 font-medium text-gray-700">Email</label>
// 					<input id="email" type="email" {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
// 						className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
// 					/>
// 					{errors.email && (
// 						<div className='text-red-600'>
// 							{errors.email.type === 'required' ? 'Email is required' : 'Invalid email address'}
// 						</div>
// 					)}
// 				</div>

// 				<div>
// 					<label htmlFor="password" className="block mb-2 font-medium text-gray-700">Password</label>
// 					<div className='relative'>
// 						<input id="password" type={showPassword ? 'text' : 'password'}
// 							{...register('password', { required: true, minLength: 6, pattern: /(?=.*[A-Z])(?=.*[@$!%*?&])/, })}
// 							className=" w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
// 						/>
// 						<button className='btn btn-sm absolute top-1 right-1' type="button" onClick={togglePasswordVisibility}>
// 							{showPassword ? <BiShow></BiShow> : <BiHide></BiHide>}
// 						</button>
// 					</div>
// 					{errors.password && (
// 						<div className='text-red-600'>
// 							{errors.password.type === 'required'
// 								? 'Password is required'
// 								: errors.password.type === 'minLength'
// 									? 'Password must be at least 6 characters long'
// 									: 'Password must contain a capital letter and a special character'}
// 						</div>
// 					)}
// 					{/* TODO: positioning show hide button */}

// 				</div>

// 				<div>
// 					<label htmlFor="confirmPassword" className="block mb-2 font-medium text-gray-700">Confirm Password</label>
// 					<input
// 						id="confirmPassword"
// 						type={showPassword ? 'text' : 'password'}
// 						{...register('confirmPassword', {
// 							required: true,
// 							validate: value => value === password || 'Passwords do not match',
// 						})}
// 						className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
// 					/>
// 					{errors.confirmPassword && <div className='text-red-600'>{errors.confirmPassword.message}</div>}
// 				</div>

// 				<div>
// 					<label htmlFor="photo" className="block mb-2 font-medium text-gray-700">Photo URL</label>
// 					<input
// 						id="photo"
// 						type="text"
// 						{...register('photo', { required: true })}
// 						className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
// 					/>
// 					{errors.photoURL && <div className='text-red-600'>Photo URL is required</div>}
// 				</div>

// 				<div className='flex items-center gap-4'>
// 					<button className='btn btn-primary my-4' type="submit">Sign Up</button>
// 					<p>Already have an account <Link to="/login" className='text-blue-700 underline'>Login</Link></p>
// 				</div>
// 			</form>
// 			<small className='text-red-600 text-center block m-1'>{error}</small>
// 			<SocialLogIn></SocialLogIn>
// 		</div>
// 	);
// };

// export default RegisterForm;