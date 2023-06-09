import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";

const useCarts = () => {
    const {user} = useAuth()
    const {data: carts = [], isLoading: loading, refetch} = useQuery({
        queryKey: ['carts', user?.email],
        queryFn: async() => {
            const res = await fetch(`http://localhost:5000/carts?email=${user?.email}`);
            return res.json();
        }
    })

    return [carts, loading, refetch]
};

export default useCarts;
