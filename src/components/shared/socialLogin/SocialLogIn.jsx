import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FcGoogle } from "react-icons/fc";


const SocialLogIn = () => {
    const { googleSignIn } = useAuth()
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'

    const [axiosSecure] = useAxiosSecure()
    
    const handleGoogleSignIn = () => {

        googleSignIn()
            .then(result => {
                const loggedInUser = result.user;      //{ name, email, photo, role }
                const saveUser = { name: loggedInUser.displayName, email: loggedInUser.email, photo: loggedInUser.photoURL, role: 'student' }
                
                axiosSecure.post('/users',{saveUser})
                .then(data=>{
                
                    console.log(data.data)
                    
                    Swal.fire('Log In successful')
                    navigate(from, { replace: true })
                })
                
            }).catch(error => {
                console.log(error.message)
            })
    }
    return (
        <div>
            <button className='w-fit p-[8px] bg-[#fff] hover:bg-[#f1f1f1] border   transition-all duration-500 rounded-md' onClick={handleGoogleSignIn}><FcGoogle size={30} /></button>
        </div>
    );
};

export default SocialLogIn;