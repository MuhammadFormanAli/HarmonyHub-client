
import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useAllClasses = () => {

    const { user } = useAuth()
    const [axiosSecure] = useAxiosSecure()

    const { data: allClasses = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['allClasses', user?.email],
        queryFn: async () => {
            const res = await axiosSecure(`all-classes?email=${user?.email}`)
            return res.data;
        }
    })
    return [ allClasses,loading,refetch]
};

export default useAllClasses;




