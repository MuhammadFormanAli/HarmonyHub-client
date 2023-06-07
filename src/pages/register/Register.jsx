import { useState } from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Register = () => {
	const { googleSignIn, createUser, manageUser } = useAuth()

	const navigate = useNavigate()
	const location = useLocation()

	const from = location.state?.from?.pathname || '/'

	console.log(googleSignIn)
	const [showPassword, setShowPassword] = useState(false);

	const { register, handleSubmit, formState: { errors }, watch, reset } = useForm();

	const password = watch('password', '');



	const onSubmit = data => {
		const { name, email, password, photo: photo } = data
		const role = 'student'
		createUser(email, password)
			.then(result => {
				// Todo:sweet alert 
				manageUser(name, photo)
					.then(result => {
						console.log(result)
						console.log('Profile Updated')
					})
					.catch(error => {
						console.log(error.message)
					})
				console.log(result)
				Swal.fire('Log In successful')
				navigate(from, { replace: true })
			})
			.catch(error => {
				console.log(error)
			})


		console.log(name, email, password, photo, role)
		reset()
	};

	const handleGoogleSignIn = () => {
		googleSignIn()
	}

	const togglePasswordVisibility = () => {
		setShowPassword(!showPassword);
	};

	return (
		<div className='mb-4 w-full lg:w-1/2 mx-auto bg-base-300 p-4 my-4 rounded-md'>
			<h1 className='text-3xl text-center font-bold my-4'>Please signUp</h1>
			<form onSubmit={handleSubmit(onSubmit)}>

				<div>
					<label htmlFor="name" className="block mb-2 font-medium text-gray-700">Name</label>
					<input
						id="name"
						type="text" {...register('name', { required: true })}
						className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
					/>
					{errors.name && <div className='text-red-600'>Name is required</div>}
				</div>

				<div>
					<label htmlFor="email" className="block mb-2 font-medium text-gray-700">Email</label>
					<input id="email" type="email" {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
						className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
					/>
					{errors.email && (
						<div className='text-red-600'>
							{errors.email.type === 'required' ? 'Email is required' : 'Invalid email address'}
						</div>
					)}
				</div>

				<div>
					<label htmlFor="password" className="block mb-2 font-medium text-gray-700">Password</label>
					<div className='relative'>
						<input id="password" type={showPassword ? 'text' : 'password'}
							{...register('password', { required: true, minLength: 6, pattern: /(?=.*[A-Z])(?=.*[@$!%*?&])/, })}
							className=" w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
						/>
						<button className='btn btn-sm absolute top-1 right-1' type="button" onClick={togglePasswordVisibility}>
							{showPassword ? 'Hide' : 'Show'}
						</button>
					</div>
					{errors.password && (
						<div className='text-red-600'>
							{errors.password.type === 'required'
								? 'Password is required'
								: errors.password.type === 'minLength'
									? 'Password must be at least 6 characters long'
									: 'Password must contain a capital letter and a special character'}
						</div>
					)}
					{/* TODO: positioning show hide button */}

				</div>

				<div>
					<label htmlFor="confirmPassword" className="block mb-2 font-medium text-gray-700">Confirm Password</label>
					<input
						id="confirmPassword"
						type={showPassword ? 'text' : 'password'}
						{...register('confirmPassword', {
							required: true,
							validate: value => value === password || 'Passwords do not match',
						})}
						className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
					/>
					{errors.confirmPassword && <div className='text-red-600'>{errors.confirmPassword.message}</div>}
				</div>

				<div>
					<label htmlFor="photo" className="block mb-2 font-medium text-gray-700">Photo URL</label>
					<input
						id="photo"
						type="text"
						{...register('photo', { required: true })}
						className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
					/>
					{errors.photoURL && <div className='text-red-600'>Photo URL is required</div>}
				</div>

				<div className='flex items-center gap-4'>
					<button className='btn btn-primary my-4' type="submit">Sign Up</button>
					<p>Already have an account <Link to="/login" className='text-blue-700 underline'>Login</Link></p>
				</div>
			</form>

			<div>
				<button className='btn btn-outline w-full font-bold text-xl' onClick={handleGoogleSignIn}>google sign in</button>
			</div>
		</div>
	);
};

export default Register;