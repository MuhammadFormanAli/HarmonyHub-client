import { useState } from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import SocialLogIn from '../../components/shared/socialLogin/SocialLogIn';
import { BiHide, BiShow } from "react-icons/bi";

const LoginForm = () => {
    const { signIn} = useAuth()
    const navigate = useNavigate()
    const location = useLocation()

    const from = location.state?.from?.pathname || '/'
    console.log(location)

    const [showPassword, setShowPassword] = useState(false);
    // const { register, handleSubmit, formState: { errors }, watch, reset } = useForm();
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    // const password = watch('password', '');



    const onSubmit = data => {
        const {  email, password } = data
        signIn(email,password)
        .then(result=>{
            console.log(result)
            Swal.fire('Log In successful')
            navigate(from, { replace: true })
        })
        .catch(error=>{
            console.log(error.message)
        })
        
        reset()
    };


    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className=' flex items-center justify-center bg-gray-100 py-[50px]' >
            <div className='bg-white p-8 rounded-lg shadow-lg w-full max-w-md'>
            <h1 className='text-2xl font-bold text-[#D87D4A] text-center mb-6'>Log In</h1>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-[15px]'>

                <div>
                    <label htmlFor="email" className="block text-black text-sm font-medium mb-2">Email</label>
                    <input id="email" type="email" {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#D87D4A]"
                    />
                    {errors.email && (
                        <div className='text-[#ff0000] text-[12px]'>
                            {errors.email.type === 'required' ? 'Email is required' : 'Invalid email address'}
                        </div>
                    )}
                </div>

                <div>
                    <label htmlFor="password" className="block text-black text-sm font-medium mb-2">Password</label>
                    <div className='relative'>
                        <input id="password" type={showPassword ? 'text' : 'password'}
                            {...register('password', { required: true, minLength: 6, pattern: /(?=.*[A-Z])(?=.*[@$!%*?&])/, })}
                            className=" w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#D87D4A]"
                        />
                        <button className='btn btn-sm absolute top-1 right-1' type="button" onClick={togglePasswordVisibility}>
                            {showPassword ? <BiShow></BiShow> : <BiHide> </BiHide>}
                        </button>
                    </div>
                    {errors.password && (
                        <div className='text-[#ff0000] text-[12px]'>
                            {errors.password.type === 'required'
                                ? 'Password is required'
                                : errors.password.type === 'minLength'
                                    ? 'Password must be at least 6 characters long'
                                    : 'Password must contain a capital letter and a special character'}
                        </div>
                    )}
                    {/* TODO: positioning show hide button */}

                </div>

                {/* <div>
                    <label htmlFor="confirmPassword" className="block text-black text-sm font-medium mb-2">Confirm Password</label>
                    <input
                        id="confirmPassword"
                        type={showPassword ? 'text' : 'password'}
                        {...register('confirmPassword', {
                            required: true,
                            validate: value => value === password || 'Passwords do not match',
                        })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#D87D4A]"
                    />
                    {errors.confirmPassword && <div className='text-[#ff0000] text-[12px]'>{errors.confirmPassword.message}</div>}
                </div> */}

                <div className='flex  gap-[15px] '>
                    <button className='w-full bg-[#D87D4A] hover:bg-[#B95C32] text-white font-semibold py-2 rounded-md transition duration-300' type="submit">Log In</button>
                <SocialLogIn></SocialLogIn>
                </div>
            </form>
                    <p>Do not have an account <Link to="/register" className="text-[#D87D4A] hover:underline mt-2 inline-block">Register</Link></p>
            <div>
            </div>
        </div>
        </div>
    );
};

export default LoginForm;