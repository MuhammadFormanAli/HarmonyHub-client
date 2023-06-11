
import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import axios from "axios";


const useRole = () => {
    const {user,loading} = useAuth()
    const {data: userRole = {}, refetch} = useQuery({
        queryKey: ['userRole',user?.email],
        enabled:!loading,
        queryFn: async() => {
            const res = await axios(`http://localhost:5000/user/${user?.email}`);
            return res.data;
        }
    })
    return [ userRole,loading,refetch]
};

export default useRole;