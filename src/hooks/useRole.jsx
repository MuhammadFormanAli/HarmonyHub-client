
import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import axios from "axios";


const useRole = () => {
    const {user} = useAuth()
    const {data: userRole = {}, isLoading:loading, refetch} = useQuery({
        queryKey: ['userRole',user?.email],
        
        queryFn: async() => {
            const res = await axios(`https://summer-camp-sandy.vercel.app/user/${user?.email}`);
            return res.data;
        }
    })
    return [ userRole,loading,refetch]
};

export default useRole;