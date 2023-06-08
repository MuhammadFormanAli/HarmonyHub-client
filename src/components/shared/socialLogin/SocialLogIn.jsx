import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";


const SocialLogIn = () => {
    const { googleSignIn } = useAuth()
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const loggedInUser = result.user;      //{ name, email, photo, role }
                const saveUser = { name: loggedInUser.displayName, email: loggedInUser.email, photo: loggedInUser.photoURL, role: 'student' }
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        Swal.fire('Log In successful')
                        navigate(from, { replace: true })
                    })
            }).catch(error => {
                console.log(error.message)
            })
    }
    return (
        <div>
            <button className='btn btn-outline w-full font-bold text-xl' onClick={handleGoogleSignIn}>google sign in</button>
        </div>
    );
};

export default SocialLogIn;