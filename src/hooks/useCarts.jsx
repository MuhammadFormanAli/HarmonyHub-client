import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useCarts = () => {
    const {user,loading} = useAuth()
    const [axiosSecure] = useAxiosSecure()


    const {data: carts = [], refetch} = useQuery({
        queryKey: ['carts', user?.email],
        enabled: !loading,
        queryFn: async() => {
            const res = await axiosSecure(`/carts?email=${user?.email}`)

            return res.data;
        }
    })

    return [carts, refetch]
};

export default useCarts;
