import { useQuery } from "@tanstack/react-query";



const useCarts = () => {
    const {data: carts = [], isLoading: loading, refetch} = useQuery({
        queryKey: ['carts'],
        queryFn: async() => {
            const res = await fetch('http://localhost:5000/carts');
            return res.json();
        }
    })

    return [carts, loading, refetch]
};

export default useCarts;