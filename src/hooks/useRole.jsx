
import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

// import { useState } from "react";

const useRole = () => {
    const {user} = useAuth()
    const [axiosSecure] = useAxiosSecure()

    // const[role,setRole]=useState()
    // fetch(`http://localhost:5000/user/${user?.email}`)
    // .then(res=>res.json())
    // .then(data => setRole(data))
     

    const {data: userRole = {},loading, refetch} = useQuery({
        queryKey: ['userRole',user?.email],
        queryFn: async() => {
            const res = await axiosSecure(`/user/${user?.email}`);
            return res.data;
        }
    })
    return [ userRole,loading,refetch]
};

export default useRole;