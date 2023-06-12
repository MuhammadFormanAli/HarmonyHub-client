
import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import axios from "axios";


const useRole = () => {
    const {user} = useAuth()
    const {data: userRole = {}, isLoading:loading, refetch} = useQuery({
        queryKey: ['userRole',user?.email],
        
        queryFn: async() => {
            const res = await axios(`http://localhost:5000/user/${user?.email}`);
            return res.data;
        }
    })
    return [ userRole,loading,refetch]
};

export default useRole;