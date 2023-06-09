import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useCarts = () => {
    const {user} = useAuth()
    const [axiosSecure] = useAxiosSecure()


    const {data: carts = [], isLoading: loading, refetch} = useQuery({
        queryKey: ['carts', user?.email],
        queryFn: async() => {
            const res = await axiosSecure(`/carts?email=${user?.email}`)

            return res.data;
        }
    })

    return [carts, loading, refetch]
};

export default useCarts;
