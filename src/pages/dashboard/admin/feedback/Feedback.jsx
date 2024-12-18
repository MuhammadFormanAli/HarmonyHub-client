
import { useNavigate, useParams } from "react-router-dom";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";




const Feedback = () => {
    const navigate = useNavigate()
    // console.log(useParams().id)
    const[axiosSecure]=useAxiosSecure()
    const id = useParams().id

    const handleFeedback = (event)=>{
        event.preventDefault()
        const feedback = event.target.feedback.value

        axiosSecure.put(`/classes/feedback/${id}`,{feedback})
        .then(data=>{
            if(data.data.modifiedCount){
                Swal.fire('Feedback Sent Successful')
                navigate('/dashboard/manage-classes')
                
            }
            // console.log(data.data)
        })
        

    }

    return (
        <div className="flex flex-col w-full max-w-[1080px] ">
            <Helmet><title>Feedback - HarmonyHub</title></Helmet>
            <h1 className="bg-cyan-900 text-stone-50 font-bold p-10 text-xl md:text-3xl text-center">Send Your Feedback To Instructor</h1>
            <form onSubmit={handleFeedback}>
            
            <textarea className="w-full border  text-lg" name="feedback" cols="30" rows="10" placeholder="Type your feedback"></textarea>
            <input className="btn btn-info my-4" type="submit" value="Send Feedback" />
        </form>
        </div>
    );
};

export default Feedback;