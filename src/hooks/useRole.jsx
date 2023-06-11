
import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
// import useAxiosSecure from "./useAxiosSecure";
import axios from "axios";

// import { useState } from "react";

const useRole = () => {
    const {user,loading} = useAuth()
    // const [axiosSecure] = useAxiosSecure()

    // const[role,setRole]=useState()
    // fetch(`http://localhost:5000/user/${user?.email}`)
    // .then(res=>res.json())
    // .then(data => setRole(data))
     

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