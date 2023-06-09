import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const AddClass = () => {
    const { user } = useAuth()
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const[axiosSecure] =useAxiosSecure()

    const onSubmit = data => {
        let { availableSeats, className, img, instructorEmail, instructorName, price } = data
        price = parseFloat(price)
        availableSeats =parseFloat(availableSeats)
        
        const status = 'pending'
        const enrolledStudents = 0

        const course = {img,className,instructorName,instructorEmail,price,enrolledStudents,availableSeats,status,}

        axiosSecure.post('http://localhost:5000/classes',{course})
        .then(data =>{
            console.log(data.data)
            if(data.data.insertedId){
                Swal.fire('Class Added Successfully')
            }
            reset()
        })

    }

    return (
        <div className='mb-4 w-full  mx-auto bg-base-300 p-4 my-4 rounded-md'>
            <h1 className='text-3xl text-center font-bold my-4'>Add A Class</h1>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div>
                    <label htmlFor="className" className="block mb-2 font-medium text-gray-700">Class Name</label>
                    <input
                        id="className"
                        type="text" {...register('className', { required: true })}
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
                    />
                    {errors.className && <div className='text-red-600'>Class Name is required</div>}
                </div>

                <div>
                    <label htmlFor="img" className="block mb-2 font-medium text-gray-700">Class Image</label>
                    <input
                        id="img"
                        type="text" {...register('img', { required: true })}
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
                    />
                    {errors.img && <div className='text-red-600'>Name is required</div>}
                </div>

                <div>
                    <label htmlFor="instructorName" className="block mb-2 font-medium text-gray-700">Instructor Name</label>
                    <input
                        id="instructorName"
                        defaultValue={user?.displayName}
                        readOnly
                        type="text" {...register('instructorName')}
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
                    />
                </div>

                <div>
                    <label htmlFor="instructorEmail" className="block mb-2 font-medium text-gray-700">Instructor Email</label>
                    <input
                        id="instructorEmail"
                        defaultValue={user?.email}
                        readOnly
                        type="text" {...register('instructorEmail')}
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
                    />
                </div>


                <div>
                    <label htmlFor="availableSeats" className="block mb-2 font-medium text-gray-700">Available Seats</label>
                    <input id="availableSeats"
                        type="number"
                        min="1"
                        {...register('availableSeats', { required: true, })}
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
                    />
                    {errors.availableSeats && <div className='text-red-600'>Available Seats is required</div>}
                </div>


                <div>
                    <label htmlFor="price" className="block mb-2 font-medium text-gray-700">Price</label>
                    <input
                        id="price"
                        type="number"
                        step="0.01"
                        min="0"
                        {...register('price', { required: true })}
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
                    />
                    {errors.price && <div className='text-red-600'>Price is required</div>}
                </div>

                <div className='flex items-center gap-4'>
                    <button className='btn btn-primary my-4' type="submit">Add Class</button>
                </div>

            </form>
        </div>
    );
};

export default AddClass;